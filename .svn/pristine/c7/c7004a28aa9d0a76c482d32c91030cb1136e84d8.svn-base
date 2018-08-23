
$(function(){
//获取首页动态信息
    $.ajax({
        url:baseURL+"/yuesao/news/dynamic",
        type:"POST",
        dataType:"json",
        success:function(r){
            //console.log(r.data.showDynamin);
            var aa = r.data.showDynamin;
            var bb = "";
            for(var i =0;i<aa.length;i++){
                bb += '<span style = "margin-right:200px;">' + aa[i].news + '</span>';
            }
            $(".dynamic_t").append('<marquee behavior = "scroll" direction = "left" behavior = "scroll" style="position: absolute;color: #d26262">'+bb+'</marquee>');
        }
    })
})



