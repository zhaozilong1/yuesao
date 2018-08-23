/**
 * Created by m1324 on 2018/4/6.
 */

$(function(){
    $(".grade div").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
})
