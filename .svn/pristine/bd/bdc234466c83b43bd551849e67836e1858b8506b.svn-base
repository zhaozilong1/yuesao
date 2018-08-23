/**
 * Created by m1324 on 2018/4/3.
 */
$(function(){
    $(".tab_top ul li a").click(function(){
        $('.tab_top ul').find('a').removeClass('active');
        $(this).addClass('active');
        var index = $(this).parent().index();
        $('.contain_box .introduce').eq(index).show().siblings().hide();
    })
})