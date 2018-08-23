/**
 * Created by m1324 on 2018/4/4.
 */
var flag;
$(function(){
    //window.location.reload();
    $(".tab_top ul li a").click(function(){
        $('.tab_top ul').find('a').removeClass('active');
        $(this).addClass('active');
        getDoctorService();
    });
    getMsg();
   getDoctorService();
    $('#btn').click(function () {
        window.location.href="my_quiz.html?flag="+flag;
    });

    $('#question').click(function(){
        console.log(!sessionStorage['sessionId']);
        if(!sessionStorage['sessionId']){
            layer.open({
                content: "需要登录后才能进行后续操作，是否登录？"
                , btn: ['确定','取消'],
                skin: 'my-skin'
                , yes: function (index) {
                    layer.close(index);
                    window.location.href="login.html";
                }
                ,btn2:function (index) {
                    layer.close(index);

                }
            });
            return;
        }
        window.location.href="my_quiz.html?flag="+GetQueryString();
    });
    $('#answer').click(function(){
        console.log(!sessionStorage['sessionId']);
        if(!sessionStorage['sessionId']){
            layer.open({
                content: "需要登录后才能进行后续操作，是否登录？"
                , btn: ['确定','取消'],
                skin: 'my-skin'
                , yes: function (index) {
                    layer.close(index);
                    window.location.href="login.html";
                }
                ,btn2:function (index) {
                    layer.close(index);

                }
            });
            return;
        }
        window.location.href="my-answers.html";
    });
    });
function getMsg(){
var id=GetQueryString();
$.post(baseURL+"yuesao/sysuser/detail",{id:id},function (result) {
    console.log(id);
    if(result.code=="USR000"){
var user=result.data;
 if(user.roleName==='上医'){
flag=0;
 }else if(user.roleName==='月嫂'){
flag=1;
 }else if(user.roleName==='管家'){
flag=2;
 }
showUser(user);
    }else if(result.code=="USR139"){
        layer.open({
            content: result.msg
            , btn: ['确定',],
            skin: 'my-skin'
            , yes: function (index) {
                layer.close(index);
        }
        });
    }else if(result.code=="USR100"){
        layer.open({
            content: result.msg
            , btn: ['确定',],
            skin: 'my-skin'
            , yes: function (index) {
                layer.close(index);
            }
        });
    }else if(result.code=="USR201"){
        layer.open({
            content: result.msg
            , btn: ['确定',],
            skin: 'my-skin'
            , yes: function (index) {
                layer.close(index);
            }
        });
    }
})
}
function showUser(obj){
    console.log(obj);
    var xiangqingURL="personal_information.html?id="+obj.userId;
    $('.detail').click(function () {
        window.location.href=xiangqingURL;
    });
    $('.pic').click(function () {
        window.location.href=xiangqingURL;
    });
    $('#heard').html('<a href="index.html" class="back fl" ></a>'+obj.roleName+'·'+obj.name);
    $('#name').text(obj.name);
    $('#photo').css('background-image','url('+baseURL2+obj.photo+')');
    $('.zhuzhi').text(obj.profession);
    $('#shanchang').text("擅长："+obj.workExperience);
    var times=0;
    if(obj.serviceTimes){
        times=obj.serviceTimes;
    }
    $('#fuwu').text("服务"+times+"次     |     从业"+obj.workYear+"年");
}
//获取服务记录/日程列表
function getDoctorService(){
    $('.p').empty();
    $('.f').empty();
    var sessionid=sessionStorage['sessionId'];
    var userId=GetQueryString();
    var status=$('.active').attr("value");
    var data={sessionid:sessionid,suserId:userId,status:status,page:1,pageSize:100};
    console.log(data);
    $.post(baseURL+"yuesao/service/record",data,function (result) {
        if(result.code=="USR000"){
            var services=result.data.list;
            console.log(services);
            for (var i=0;i<services.length;i++){
console.log(i);
                var div='<div class="top_box">'+
                    '<div class="top"><span class="time">'+services[i].serviceDate.substr(0,19)+'</span>'+
                        '<i class="icon_01 fr active" value="'+services[i].id+'" onclick="getcontent(this)"></i></div>'+
                    '<div class="box">'+
                    '<ol id="'+services[i].id+'">'+
                    '</ol>'+
                    '<div class="pinglun" onclick="pinglun('+services[i].id+')">我要评论</div>'+
                    '<div class="pinglun_box" >评论的内容' +
                    '<ol id="'+services[i].id+'_p">'+
                    '</ol>'+
                    '</div>'+
                    '</div>';
                    '</div>';

                $('.introduce').append(div);
                $(".top_box .box").hide();
            }
            //$("#所在标签id").trigger("create");

        }else if(result.code=="USR108"){
            $('.contain_box').remove();
            if(status==0){
                $('.tishi').html('<img src="./images/drawable-xhdpi/icon_1-01.png" alt=""  style="width: 2rem"/>暂无记录').show();
            }else if(status==1){
                $('.tishi').html('<img src="./images/drawable-xhdpi/icon_1-01.png" alt="" style="width: 2rem"/>暂无日程').show();
            }
        }else if(result.code=="USR124"){
            layer.open({
                content: result.msg
                , btn: ['确定',],
                skin: 'my-skin'
                , yes: function (index) {
                    layer.close(index);
                    window.location.href="login.html";
                }
            });
        }
    })
    $('.contain_box').trigger("create");
}
// 我要评论跳转
function pinglun(obj){
var commentId=$('#'+obj+'_p').data("commemtId");
if(commentId){
    layer.open({
        content:"您已经评论过该服务！"
        , btn: ['确定',]
    })
    return;
}
console.log("commemtId:"+commentId);
    var userId=GetQueryString();
    var url="my-pinglun.html?userId="+decodeURIComponent(userId);
        url+="&serviceId="+decodeURIComponent(obj);
window.location.href=url;
}
//获取服务信息详情
function getcontent(obj) {
    $(".icon_01").toggleClass('active');
    console.log($(obj));
    $(obj).parent().parent().find('.box').slideToggle();
  //  $(t).parent().parent().slideToggle();
    //$(".top_box .box").slideToggle();
    var id=$(obj).attr('value');
    console.log("id="+id);
    $('#'+id).empty();
    $("#"+id+"_p").empty();
$.post(baseURL+"yuesao/service/recorddetail",{id:id},function (result) {
    if(result.code=="USR000"){
        var type;
        if(result.data.service.serviceType==0){
            type='上门';
        }else if(result.data.service.serviceType==1){
            type='线上';
        }else if(result.data.service.serviceType==2){
            type='电话';
        }
        console.log('显示服务日程信息');
        console.log(type);
        var div='<li>同行人员:'+result.data.service.togetherUser+'</li>'+
                '<li>服务类型:'+type+'</li>'+
                '<li>服务时间:'+result.data.service.serviceDate.substr(0,19)+'</li>'+
                '<li>服务地址:'+result.data.service.serviceAddress+'</li>'+
                '<li>服务内容:'+result.data.service.serviceContent+'</li>';
        console.log(div);
        $('#'+id).append(div);
        // console.log( $('#'+obj).html());
        $('#'+id).find('li').show();
        console.log(obj);
        var commentContent=result.data.comment.commentContent;
        var comment=commentContent.substr(0,commentContent.indexOf(";"));
        commentContent=commentContent.substr(commentContent.indexOf(';')+1);
        var pdiv='<li>评论人：'+result.data.comment.userName+'</li>'+
                 '<li>评论时间：'+result.data.comment.commentDate.substr(0,19)+'</li>'+
                 '<li>评论内容：'+comment+'<br/>'+commentContent+'</li>';
        $('#'+id+'_p').append(pdiv);
        $('#'+id+'_p').data("commemtId",result.data.comment.id);
        $('#'+id+'_p').find('li').show();
    }
    


});
}
