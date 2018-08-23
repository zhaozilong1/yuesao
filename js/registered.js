
$(function () {
    geyQuestionAllList();
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
        window.location.href="quiz.html";
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
        window.location.href="my_answer-two.html";
    });
});

function geyQuestionAllList(){
    $.post(baseURL+'yuesao/question/alllist',{page:1,pageSize:100},function(result){
        if(result.code=="USR000"){
            var list=result.data.list;
            for(var i=0;i<list.length;i++){
                var name = list[i].userName;
                var str = name.substring(0, 1);
                //str = str + "*****";
                str+="**";
                var pic=list[i].picUrl;
                if(!pic){
                    pic="./images/img_10.png";
                }else {
                    pic=baseURL2+list[i].picUrl;
                }
                var template ='<div class="combo gauge">'+
                    '<div class="combo_bottom clearfix">'+
                    '<div class="pic fl" style="background:url( '+ pic +') 0% 0% / 100% 100% no-repeat">'+
                    '</div>'+
                    '<div class="right">'+
                    '<div class="top clearfix">'+
                    '<h3 class="fl">'+ str +'</h3>'+
                    '<span class="fr">'+list[i].questionDate.substr(0,19)+'</span>'+
                    '</div>'+
                    '<div class="text">'+list[i].question+'</div>'+

                    '</div>'+
                    '</div>'+
                    '<div class="questions_box">'+
                    '<div class="questions_in">'+
                    '<div class="questions_top clearfix">'+
                    '<div class="left fl">'+
                    '<span class="user">'+list[i].name+'</span>'+
                    '<span class="yuesao">'+list[i].roleName+'</span>'+
                    '</div>'+
                    '<div class="time fr">'+list[i].answerDate.substr(0,19)+'</div>'+
                    '</div>'+
                    '<div class="text">'+list[i].answer+'</div>'+
                    '</div>'+
                    '</div>'+

                    '</div>'

                $('.main').append(template);
            }
        }else if(result.code=="USR108"){
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
        }else if(result.code=="USR100"){
            // layer.open({
            //     content: result.msg
            //     , btn: ['确定',],
            //     skin: 'my-skin'
            //     , yes: function (index) {
            //         layer.close(index);
            //     }
            // });
        }
    });
}
