/**
 * Created by ����� on 2018/5/4.
 */
$(function(){
    //tab切换
    $("nav ul li").click(function(){
        $(this).addClass("change").siblings().removeClass("change");
        var index = $(this).index();
        $(".dingdan_list .combo").eq(index).show().siblings().hide();
        //获取订单列表
        getOrederList();
    })

    //返回我的页面
    $(".back").click(function(){
        window.location.href = "my.html";
    })
    getOrederList();
})
//获取订单列表方法
function getOrederList() {
    var status=$('.change').attr('value');
    var data={sessionid:sessionStorage['sessionId'],type:0,status:status,page:1,pageSize:100};
    console.log(data);
    $.post(baseURL+"yuesao/order/list",data,function (result) {
        if(result.code=="USR000"){
          showOrderList(result.data.list)
        }else if(result.code=="USR124"){
            layer.open({
                content: result.msg
                , btn: ['确定',],
                skin: 'my-skin'
                , yes: function (index) {
                    layer.close(index);
                    Window.location.href="login.html";
                }
            });
        }else if(result.code=="USR108"){
            $('.combo').remove();
            $('.tishi').show();
        }
    });
}
//显示订单列表
function showOrderList(obj) {
    console.log(obj);
    $('.combo').remove();
    $('.tishi').hide();
    for (var i=0;i<obj.length;i++){
        var order=obj[i];
        var status;
        if(order.status==0){
            status="未支付";
        }else if(order.status==1){
            status="服务中";
        }else if(order.status==2){
            status="已完成";
        }
        var html='<div class="combo">'+
            '<div class="combo_bottom clearfix">'+
            '<div class="pic fl">'+
            '<a id="'+order.serviceId+'"></a>'+
            '</div>'+
            '<div class="right" onclick="skip()">'+
            '<div class="top clearfix">';
           if(order.roleName){
               html+='<span class="user fl" id="name_w">'+order.suserName+'</span>'+
               '<span class="zhuzhi fl">'+order.roleName+'</span>';
           }else{
               html+='<span>'+order.serviceName+'</span>';
           }
           html+= '<a  class="detail fr">'+status+'</a>'+
            '</div>'+
            '<p >价格: <span>'+order.amount+'元</span> <img src="./images/icoe.png" alt=""/></p>'+
            '<p >下单时间: <span>'+order.createDate+'</span></p>'+
        '</div>'+
        '</div>'+
        '</div>';
           $('.dingdan_list').append(html);
           $('.combo').show();
        if(!order.roleName){
            $('#'+order.serviceId+'').css('background-image','url('+baseURL2+order.appSpecialPic+')');
        }else{
            $('#'+order.serviceId+'').css('background-image','url('+baseURL2+order.photo+')');
        }
    }
}
//跳转到订单详情
function skip(){
    window.location.href = "order.html";
}