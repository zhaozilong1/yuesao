/* 
* @Author: Busy
* @Date:   2018-04-12 13:55:46
* @Last Modified by:   Busy
* @Last Modified time: 2018-04-12 13:59:17
*/

        $(function(){
            var sessionId=sessionStorage['sessionId'];
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
                }else{
                  $.ajax({
                    url:baseURL+"/yuesao/check/checkList",
                    data:{"sessionid":sessionId}, //以键/值对的形式
                    async : false,
                    dataType : "json",
                    success : function(data) {
                        console.log(data)
                        if(data.code=='USR000'){
                            var html='';
                            var list=data.data.checkList;
                            console.log(list)
                            for(var i = 0; i < list.length; i++) {
                             //循环后台传过来的Json数组

                             html += '<dt class="center_cen"><h3>'+list[i].title+'</h3><p>'+list[i].explain+'</p><a href="#" class="right_r"></a><img src="images/more_unfold.png" alt="" /></dt><dd>'+list[i].content+'</dd><dd>'+list[i].createTime+'</dd>'
                            }
                            console.log(html)
                            $(".center").append(html);
                        }else{
                            alert(data.msg);
                        }

                    }
                });
            }


    })
$('dl').on('click','dt',function(){
    $('dl').find('dd').slideUp()
    if($(this).nextUntil('dt').is(':visible')){
        $(this).nextUntil('dt').slideUp()
        $(this).find('img').attr("src","./images/more_unfold.png")
    }else{
        $(this).nextUntil('dt').slideDown()
        $(this).siblings().find('img').attr("src","./images/more_unfold.png")
        $(this).find('img').attr("src","./images/2.png")
    }
});
