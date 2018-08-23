function register() {
    var ycq=$('#id_yy_input').val();
    var sessionId=sessionStorage['sessionId'];
    $.ajax({
        type:"POST",
        url:baseURL+"yuesao/userInfoMod",
        data:{sessionid:sessionId,time:ycq},
        dataType:"JSON",
        success:function (r) {
            console.log(r)
            if(r.code=="USR118"){
            }else if(r.code=="USR100"){
            }else if(r.code=="USR107"){
                alert("请输入正确手机号")
            }else if(r.code=="USR116"){
            }else if(r.code=="USR103"){
            }else if(r.code=="USR000"){
                alert("修改成功")
                window.location.href="data.html"
            }
        }
    })
}