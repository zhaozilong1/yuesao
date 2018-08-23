//获取头像  性别图片
$(function () {
    var sessionId=sessionStorage['sessionId'];
    if(!sessionId){
        $("#mysex").css("background-image", "url('')");
        return;
    }
    $.post(baseURL+"yuesao/userInfo",{sessionid:sessionId},function (r) {
        console.log(r);
        if(r.code=="USR118"){
        }else if(r.code=="USR107"){
        }else if(r.code=="USR000"){
            $("#myname").text(r.data.userName);
            if(r.data.sex==0){
                $("#mysex").css("background-image", "url('./images/wode/man.png')");
            }else{
                $("#mysex").css("background-image", "url('./images/wode/icon_women.png')");

            }
            if(r.data.picUrl !=""){
                if (r.data.picUrl== "") {

                } else {
                    $("#tou").css("background-image", "url(" +baseURL2+ r.data.picUrl + ")");
                }
            }

        }
    })
});