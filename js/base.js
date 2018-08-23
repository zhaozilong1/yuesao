
/**
 * Created by m1324 on 2018/3/23.
 */
/*// var testUrl="http://ys.stevengg.com:8081/test/";
 var baseURL="http://ys.stevengg.com/ys/";
//var baseURL="http://ys.stevengg.com:8081/test/";
var baseURL2="http://ys.stevengg.com/ys";
//var baseURL2="http://ys.stevengg.com:8081/test";
var shopsyysURL="http://ys.stevengg.com/shop/";*/
var baseURL="http://ys.stevengg.com/test/";
//var baseURL2="http://ys.stevengg.com/ys";
var baseURL2="http://ys.stevengg.com/test";
var shopsyysURL="http://ys.stevengg.com/shop/";
//获取地址栏参数（仅一个），等号后面的第一个参数，只能传一个
function GetQueryString()
{
    var urlinfo=window.location.href; //获取当前页面的url
    var len=urlinfo.length;//获取url的长度
    var offset=urlinfo.indexOf("?");//设置参数字符串开始的位置
    var newsidinfo=urlinfo.substr(offset,len)//取出参数字符串 这里会获得类似“id=1”这样的字符串
    var newsids=newsidinfo.split("=");//对获得的参数字符串按照“=”进行分割
    var newsid=newsids[1];//得到参数值
    if(newsid.indexOf("#")!=-1){
        newsids=newsid.split("#");
        newsid=newsids[0];
    }
    return newsid;
}
//获取？后面参数，返回json格式数据
function getUrlValue(){
    //返回当前 URL 的查询部分（问号 ? 之后的部分）。
   var urlParameters = location.search;
   //声明并初始化接收请求参数的对象
   var requestParameters = new Object();
   //如果该求青中有请求的参数，则获取请求的参数，否则打印提示此请求没有请求的参数
   if (urlParameters.indexOf('?') != -1)
   {
       //获取请求参数的字符串
       var parameters = decodeURI(urlParameters.substr(1));
       //将请求的参数以&分割中字符串数组
       parameterArray = parameters.split('&');
       //循环遍历，将请求的参数封装到请求参数的对象之中
       for (var i = 0; i < parameterArray.length; i++) {
           requestParameters[parameterArray[i].split('=')[0]] = (parameterArray[i].split('=')[1]);
       }
       console.info('theRequest is =====',requestParameters);
   }
   else
   {
       console.info('There is no request parameters');
   }
   return requestParameters;
}
//function register_shop(data){
//	 $.post(shopsyysURL+'member/register/guanjia',data,function (result) {
//     	console.log(result);
//     	if(result.CODE=="0000"||result.CODE=="0001"){
//     		return true;//注册成功
//     	}else{
//     		return false;
//     	}
//     });
//}

// rem����
var ua=navigator.userAgent;
var isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1; //android�ն�
var isiOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=767){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 720) + 'px';
            }
        };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


//获取当前时间的时分秒
function getNowFormatTime() {
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    if (minute < 10) {
        minute = '0'+minute;
    }
    var second = now.getSeconds();
    if (second < 10) {
        second = '0'+second;
    }
    return " "+hour+":"+minute+":"+second;
}