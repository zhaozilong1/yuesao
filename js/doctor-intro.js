/**
 * Created by m1324 on 2018/4/2.
 */
$(function(){
    $(".tab_top ul li a").click(function(){
        $('.tab_top ul').find('a').removeClass('active');
        $(this).addClass('active');
        var index = $(this).parent().index();
        $('.contain_box .introduce').eq(index).show().siblings().hide();
    });

    $(".tianshu").bind("input propertychange",function () {
        var day=$('#day').text();
        var tianshu =$('.tianshu').val();
        //判断天数为空
        console.log("16:"+tianshu)
        if (!tianshu || tianshu < 26 || tianshu > 100) {
            $("#serviceTime").removeAttr("hidden")
            $(".price-r").find('i').text(0);
            return;
        }

        $("#serviceTime").attr("hidden","hidden")

        tianshu=tianshu-day;
        console.log(tianshu);
        var jichu=$('#jichu').text();
        jichu=parseInt(jichu.substring(0,jichu.indexOf('元')));
        price=parseInt(eval(parseInt(492.3*tianshu)+"+"+jichu));
        console.log("price:"+price);
        $('.price-r').find('i').text(price);
    });
    getInfo();
    $('#btn').click(function () {
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
        if($('#check1').is(':checked')){
            var server=$('#header').text();
            var zc=$('.zhuzhi').text();
            var price=$('.price-r').find('i').text();
            console.log(server);
            console.log(zc);
            console.log(price);
            // server=encodeURI(server);
            // zc=encodeURI(zc);
            // price=encodeURI(price);
            var tianshu=$('#day').text();
            console.log("62:"+tianshu)
            url = "doctor-zhifu.html?server="+decodeURIComponent(server);
            url += "&zc=" + decodeURIComponent(zc);
            url += "&price=" + decodeURIComponent(price);
            url += "&tianshu=" + decodeURIComponent(tianshu);
            window.location.href=url;
        }else if ($('#check2').is(':checked')){
            var tianshu =$('.tianshu').val();
            if(tianshu>100||tianshu<26){
                layer.open({
                    content: "月嫂服务仅可预定26-100天"
                    , btn: ['确定',],
                    skin: 'my-skin'
                    , yes: function (index) {
                        layer.close(index);
                    }
                });
                return;
            }
            var server=$('#header').text();
            var zc=$('.zhuzhi').text();
            var price=$('.price-r').find('i').text();
            console.log(server);
            console.log(zc);
            console.log(price);
            console.log(tianshu);
            url = "doctor-zhifu.html?server="+decodeURIComponent(server);
            url += "&zc=" + decodeURIComponent(zc);
            url += "&price=" +decodeURIComponent(price);
            url += "&tianshu=" + decodeURIComponent(tianshu);
            window.location.href=url;
            console.log(22222);
        }else {
            layer.open({
                content: '请选择套餐'
                , btn: ['确定',],
                skin: 'my-skin'
                , yes: function (index) {
                    layer.close(index);
                }
            });
        }

        var tianshu =$('#tianshu').val();
        if(tianshu>100||tianshu<26){
            layer.open({
                content: "月嫂服务仅可预定26-100天"
                , btn: ['确定',],
                skin: 'my-skin'
                , yes: function (index) {
                    layer.close(index);
                    return;
                }
            });
        }
    })

});

function getInfo() {
    var id=GetQueryString();
    var urlval=getUrlValue();
    var xiangqingURL="personal_information.html?id="+id;
    $('.detail').click(function () {
        window.location.href=xiangqingURL;
    })
    $('.pic').click(function () {
        window.location.href=xiangqingURL;
    })
    console.log(id,urlval);
    $.post(baseURL+"yuesao/order/bespeakSysUser",{"userId":id},function (result) {
        if(result.code=="USR000"){
            var service=result.data.service;
            var user=result.data.user;
            showService(service);
            showUser(user);
        }else if(result.code=="USR139"){
            // layer.open({
            //     content: result.msg
            //     , btn: ['确定',],
            //     skin: 'my-skin'
            //     , yes: function (index) {
            //         layer.close(index);
            //     }
            // });
        }else if(result.code=="USR100"){
            // layer.open({
            //     content: result.msg
            //     , btn: ['确定',],
            //     skin: 'my-skin'
            //     , yes: function (index) {
            //         layer.close(index);
            //     }
            // });
        }else if(result.code=="USR201"){
            // layer.open({
            //     content: result.msg
            //     , btn: ['确定',],
            //     skin: 'my-skin'
            //     , yes: function (index) {
            //         layer.close(index);
            //     }
            // });
        }else if(result.code=="USR145"){
            layer.open({
                content: result.msg
                , btn: ['确定',],
                skin: 'my-skin'
                , yes: function (index) {
                    layer.close(index);
                    Window.location.href="doctor-01.html";
                }
            });
        }
    });
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
    $('#header').html('<a class="back fl" id="back"></a>'+obj.roleName+'·'+obj.name);
    $('#name').text(obj.name);
    $('#photo').css('background-image','url('+baseURL2+obj.photo+')');
    $('.zhuzhi').text(obj.profession);
    $('#shanchang').text("擅长："+obj.workExperience);
    var serviceTime=obj.serviceTimes;
    if(!serviceTime){
        console.log("==========================================")
        serviceTime =0;
    }
    $('#fuwu').text("服务"+serviceTime+"次     |     从业"+obj.workYear+"年");
    $('.grade').text(obj.comment);
    $('.user_evaluation').click(function () {
        window.location.href="evaluate.html?id="+obj.userId;
    })
    $('#back').click(function(){
        window.history.back();
    });
}

function showService(obj) {
    $('#taocan').html(obj.introduce);
    $('#zhuyi').html(obj.hint);
    $('#price').text(parseInt(obj.teamPrice)+"元");
    $('.price').find('i').text(parseInt(obj.teamPrice));
    $('#jichu').text(parseInt(obj.teamPrice)+"元");
    sessionStorage['serviceId']=obj.serviceId;
    if(obj.teamQuntity){
        $('#day').text(obj.teamQuntity);
        return;
    }
    $('#day').text(0);

}