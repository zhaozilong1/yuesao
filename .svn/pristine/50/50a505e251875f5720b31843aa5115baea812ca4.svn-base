
//返回
function backpng() {
    window.location.href="my.html"
}
//获取sex
var sex;
function getval(val) {
    sex=val;
    console.log(sex)
}
var fileImage;
function doUpload() {
    var sessionId=sessionStorage['sessionId'];
    var formData = new FormData();
    console.log($( "#file" )[0]);
    formData.append("myFile",$( "#file" )[0].files[0]);
    formData.append("sessionid",sessionId);
    $.ajax({
        url: baseURL+'apiUploadFile/uplodeImg',
        type: 'POST',
        data: formData,
        async: false,
        cache: false,//缓存关闭 true为开启
        contentType: false,
        processData: false,//序列化data
        success: function (r) {
            console.log(r);
            if(r.code=='USR000'){
              fileImage= r.data.valuePath;
                console.log(r.data.valuePath);
            }else{
                alert(r.msg)
            }
        }

    });
}
function mychange() {
    doUpload();
	var files = document.getElementById("file").files;
	for (var i = 0; i < files.length; i++) {
		var simpleFile = files[i];
		var reader = new FileReader();
		reader.readAsDataURL(simpleFile);
		reader.onload = function(e) {
            $("#photoUpload").css("background-image", "url(" + e.target.result + ")");
		}
	}
	
}
//跳转页面修改
function editor() {
    var stus=$("#role").text();
    if(stus=="备孕"){
        window.location.href="ready_pregnancy_save.html"
    }else if(stus=="孕期"){
        window.location.href="expected_save.html"
    }else{
        window.location.href="baobao_save.html"
    }
}
//获取用户信息
$(function () {
    var sessionId=sessionStorage['sessionId'];
    $.post(baseURL+"yuesao/userInfo",{sessionid:sessionId},function (r) {
        console.log(r);
        if(r.code=="USR118"){
        }else if(r.code=="USR107"){
        }else if(r.code=="USR000"){
            console.log(r.data.status);
            $("#userName").val(r.data.userName);
            $("#realName").val(r.data.realName);
            if(r.data.sex==0){
                $("#man").attr("checked",true);
            }else {
                $("#woman").attr("checked",true);
            }

            $("#age").val(r.data.age);
            $("#constell").val(r.data.constell);
            $("#nationality").val(r.data.natonality);
            $("#weight").val(r.data.weight);
            $("#tall").val(r.data.tall);
            $("#phone").val(r.data.phone);
            $("#address").val(r.data.address);
            if(r.data.status==0){
                $("#role").text("备孕");
                $("#chanjain_data").val("月经期"+r.data.dTime+"天");
            }else if(r.data.status==1){
                $("#role").text("孕期");
                if(r.data.week>40){
                    var days=Math.abs(r.data.days);
                    $("#chanjain_data").val("您已超过预产期"+days+"天");
                }else {
                    $("#chanjain_data").val("孕"+r.data.week+"周"+" | "+"距离预产期还有"+r.data.days+"天");
                }
            }else if(r.data.status==2){
                $("#role").text("育儿期");
                $("#chanjain_data").val("宝宝已经"+r.data.babyDay+"天了");
            }

            if(r.data.picUrl !=""){
                if (r.data.picUrl== "") {

                } else {
                    $("#photoUpload").css("background-image", "url(" +baseURL2+ r.data.picUrl + ")");
                }
            }
        }
    })

});
//修改用户信息
function save() {
    console.log(sex,fileImage);
    var chanjiandata=$("#chanjain-data").val();
    console.log(chanjiandata)
    var username=$("#userName").val();
    var sessionId=sessionStorage['sessionId'];
    var realName= $("#realName").val();
    var age=$("#age").val();
    var constell=$("#constell").val();
    var nationality=$("#nationality").val();
    var weight= $("#weight").val();
    var tall= $("#tall").val();
    var phone=$("#phone").val();
    var address=$("#address").val();
    if(weight!=null && weight>800||weight<0){
        alert("请填写标准体重")
        return;

    }

    if(fileImage!=null && !/\.(gif|jpg|png|psd|jpeg|bmp|tiff|pcx|eps|heif|GIF|JPG|PNG|PSD|JPEG|BMP|TIFF|PCX|EPS|HEIF)$/.test(fileImage)){
        alert("请上传图片格式");
        return;

    }
    var data={sessionid:sessionId,realName:realName,sex:sex,age:age,constell:constell,nationality:nationality,weight:weight,tall:tall,phone:phone,address:address,pictrue:fileImage,userName:username,time:chanjiandata};
    $.ajax({
        type:"POST",
        url:baseURL+"yuesao/userInfoMod",
        data:data,
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
                console.log(fileImage);
                alert("修改成功")
            }
        }
    })
}
(function(doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth >= 640) {
                docEl.style.fontSize = '100px';
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

