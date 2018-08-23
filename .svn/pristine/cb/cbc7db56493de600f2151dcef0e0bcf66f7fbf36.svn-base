/**
 * Created by m1324 on 2018/4/2.
 */
$(function(){
    //$('.top ul li').click(function(){
    //    $(this).addClass('active').siblings().removeClass('active');
    //    var index = $(this).index();
    //    $('.bottom div').eq(index).show().siblings().hide();
    //})
    $("footer ul ").on( 'click', 'li', function(){

        $("footer ul").find('span').removeClass('active0');
        $("footer ul").find('span').removeClass('active1');
        $("footer ul").find('span').removeClass('active2');
        $("footer ul").find('span').removeClass('active3');
        $(this).find('span').addClass('active' + $(this).index());

        //$(this).find('span').toggleClass('active').siblings().removeClass('active');
        //var index = $(this).index();
        //$()r
    })
})
$('.tizhong').click(function () {
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
    window.location.href="weight.html";
})

$('.taidong').click(function () {
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
    window.location.href="quickening.html";
})

$('.yingyang').click(function () {
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
    window.location.href="nutrient.html";
})

$('.chanjian').click(function () {
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
    window.location.href="chanjian.html";
})