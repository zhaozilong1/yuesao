/**
 * Created by Administrator on 2018/4/3 0003.
 */
$(function () {
    getAllDynamic();
});

//获取全网月嫂动态
function getAllDynamic(){
    $('.combo_bottom').remove();
    $.post(baseURL+"yuesao/moonDynamic/allMoonDynamic",function (result) {
        if(result.code=="USR000"){
            showDynamic(result.data.allMoon);
        }
    })
}
// 显示全网月嫂动态
function showDynamic(obj) {
    console.log('进入显示动态方法');
    if(typeof(obj)=='string'){
        var p = '<div>'+obj+'</div>';
        $("#allMoon").append(p);
        return;
    }
    console.log(obj);
    for(var i=0;i<obj.length;i++){
        var div=dynamicTemplate.replace('[name]',obj[i].userName).replace('[time]',obj[i].createDate);
        div=$(div);

        //console.log(div);
        
        div.find('a').css('background-image','url('+baseURL2+obj[i].userPhoto+')');
        div.find('.text').html(obj[i].says);
        if(obj[i].dynamicPhoto!=null){

            var pic=obj[i].dynamicPhoto.split(';');
            var upload=picTemplate;
            for(var j=0;j<pic.length;j++){
                    upload=$(upload).css('background-image','url('+baseURL2+pic[j]+')');
                    div.find('.upload').append(upload);
                var upload=picTemplate;
                upload=$(upload).css('background-image','url('+baseURL2+pic[j]+')');
                div.find('.upload').append(upload);
            }
        }
        console.log(11111);
        $('.combo').append(div);
    }

}
 var yuesaoTemplate='<div class="swiper-slide">'+
                        '<div class="pic"><span>您还没有月嫂请尽快签约</span></div>'+
                        '<div class="doctor_box" id="list">'+
                            '<ul>'+
                            '</ul>'+
                        '</div>'+
                      '</div>';

 var liTemplate= '<li><a href="#"><span class="li"></span><p>[name]</p></a></li>';

 var dynamicTemplate='<div class="combo_bottom clearfix">'+
                        '<div class="pic fl"><a href="#"></a></div>'+
                        '<div class="right">'+
                            '<div class="top clearfix">'+
                                '<h3 class="fl">[name]</h3>'+
                                '<span class="fr">[time]</span>'+
                            '</div>'+
                            '<div class="text"></div>'+
                            '<div class="upload">'+
                            '</div>'+
                        '</div>'+
                      '</div>';
var picTemplate='<span></span>';