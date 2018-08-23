/**
 * Created by m1324 on 2018/3/30.
 */
/**
 * Created by m1324 on 2018/3/30.
 */
$(function () {
    $('.back').click(function(){
        window.history.back();
    });
    //点击下一步 显示隐藏
    $(".btn").click(function () {
        $(".box_top").css("display", "none");
        $(".box_bottom").css({"display":"block","margin-top":0});
    });
    $('#register').click(register);
});
// 给input  date设置默认值
var now = new Date();
//格式化日，如果小于9，前面补0
var day = ("0" + now.getDate()).slice(-2);
//格式化月，如果小于9，前面补0
var month = ("0" + (now.getMonth() + 1)).slice(-2);
//拼装完整日期格式
var today = now.getFullYear() + "-" + (month) + "-" + (day);
//完成赋值
$('#id_yy_input').val(today);

function register_shop(data){
    console.log("register_shop");
    $.get(shopsyysURL+'member/register/guanjia/'+data,function (result) {
        console.log(result);
        if(result.CODE=="0000"||result.CODE=="0001"||result.CODE=="0002"){
            //0000：  注册成功；0001：手机号存在；0002：用户名存在
        	 var url='https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxc61c7965e9de767e&redirect_uri='+baseURL+'wechat/userInfo?mobile='+data+'&response_type=code&scope=snsapi_base&state=http://ys.stevengg.com/yuesao_h5/index.html#wechat_redirect';
             window.location.href=url;
            return true;//注册成功
        }else{
            return false;
        }
    });

}
function register(){
    var ycq=$('#id_yy_input').val();
    var nick=$('#nick').val();
    var mobile=sessionStorage['mobile'];
    var code=sessionStorage['code'];
    var data={mobile:mobile,code:code,userName:nick,status:1,time:ycq};
    console.log(data);

    $.post(baseURL+"yuesao/pregnantInfo",data,function (result) {
        if(result.code=="USR000"){
            sessionStorage['sessionId']=result.data.sessionid;
            var mobile=sessionStorage["mobile"];
            register_shop(sessionStorage["mobile"]);
            console.log("82moblie:"+mobile);
        }else if(result.code=="USR100"){
             layer.open({
                 content: result.msg
                 , btn: ['确定',],
                 skin: 'my-skin'
                 , yes: function (index) {
                     layer.close(index);
                 }
             });
        }else if(result.code=="USR107"){
             layer.open({
                 content: result.msg
                 , btn: ['确定',],
                 skin: 'my-skin'
                 , yes: function (index) {
                     layer.close(index);
                 }
             });
        }else if(result.code=="USR116"){
             layer.open({
                 content: result.msg
                 , btn: ['确定',],
                 skin: 'my-skin'
                 , yes: function (index) {
                     layer.close(index);
                 }
             });
        }else if(result.code=="USR104"){
             layer.open({
                 content: result.msg
                 , btn: ['确定',],
                 skin: 'my-skin'
                 , yes: function (index) {
                     layer.close(index);
                 }
             });
        }
    });
}
