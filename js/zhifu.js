/**
 * Created by Administrator on 2018/4/20 0020.
 */
function payMethod(orderNumber,successUrl,failUrl) {
    $.ajax({
        type:'post',
        url:baseURL+'pay/prepay',
        data:{orderNumber:orderNumber},
        dataType:'json',
        success:function (result) {
            console.log("进入支付方法");
            var json=result.data;
            WeixinJSBridge.invoke(
                'getBrandWCPayRequest', {
                    "appId":json.appId,     //公众号名称，由商户传入
                    "timeStamp":json.timeStamp,         //时间戳，自1970年以来的秒数
                    "nonceStr":json.nonceStr, //随机串
                    "package":json.package,
                    "signType":json.signType,         //微信签名方式：
                    "paySign":json.paySign //微信签名
                },
                function(res){
                    if(res.err_msg == "get_brand_wcpay_request:ok" ) {
                        window.location.href=successUrl;
// 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回    ok，但并不保证它绝对可靠。
                    }else {
                       alert("支付失败");
                        window.location.href=failUrl;

                    }
                }
            );
        }
    });
}