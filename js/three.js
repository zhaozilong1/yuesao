function back1() {
    window.location.href="index.html";
}
var recordTime;
function gengduo(val) {
    var  url = "three_save.html?id="+escape(val);
    url += "&recordTime=" + escape(recordTime);
    location.href=url;
}

function getTime(data) {
    var time = new Date(data);
  /*  return time.toLocaleDateString() + "  " + time.toLocaleTimeString();*/
    return time.toLocaleTimeString();
}

function p(date) {
    return date > 9 ? date:'0'+date;
}

function initTime(){
	var datetime = new Date();  
    var year=datetime.getFullYear();//获取完整的年份(4位,1970)  
    var month=datetime.getMonth()+1;//获取月份(0-11,0代表1月,用的时候记得加上1)  
    if(month<=9){  
        month="0"+month;  
    }  
    var date=datetime.getDate();//获取日(1-31)  
    if(date<=9){  
        date="0"+date;  
    }  
    var dateformat=year+"-"+month+"-"+date;  
 return dateformat;
}
 var imgtotal="";
function tzfw(val) {
    console.log(38+":"+val)
    $("#show").attr("style","display:show");
    var sessionId=sessionStorage['sessionId'];
    var day = $("#top_shu").html();
    var nianyue = $("#ymym").html();
     recordTime=nianyue+day;
    recordTime = recordTime.replace("年","-" ).replace("月","-");
    var times = recordTime.split("-");
    var yue=p(times[1]);
    recordTime = times[0] + "-" + yue + "-" + p(times[2])
    if(yue.length==3){
    	yue=yue.substring(yue.length,yue.length-2);
    	recordTime=initTime();
    }
    console.log(recordTime)
    $.post("http://ys.stevengg.com/test/yuesao/record/appResult",{sessionid:"779",recordTime:recordTime,recordId:val},function (r) {
        console.log(r);

        record(r);

        if(r.code=="USR103"){
        }else if(r.code=="USR100"){
        	$(".tzfu_01").css("display","none");
        	$(".tzfu_02").css("display","block");
            $("#gen").hide();

        }else if(r.code=="USER001 "){
            }else if(r.code=="USR000"){
            $("#tzfu_tupian").empty();
        	$(".tzfu_02").css("display","none");
        	$(".tzfu_01").css("display","block");
            $("#tzfu_recordTime").html(r.data.testList[0].recordTime.substr(11,19));
            $("#tzfu_weight").text(r.data.testList[0].weight+" kg");
            $("#tzfu_bust").text(r.data.testList[0].bust+" cm");
            $("#tzfu_miaoshu").text(r.data.testList[0].describes);
            var describesImg=r.data.testList[0].describesImg;
            if(describesImg != null){
                var imgall=describesImg.split(";");
                for(var y=0;y<imgall.length-1;y++){
                    imgtotal='<img src="' +baseURL2+ imgall[y]+  '">';
                    console.log(imgtotal)
                    $("#tzfu_tupian").append(imgtotal);
                }
                $("p img").zoomify();

            }

            var testTime = r.data.testList[0].testTime;
            var testResult = r.data.testList[0].testResult;
            if (!testTime || !testResult) {
                $("#tzfw").empty().append("<li><span>医生还没有评测呦，稍后再看呗！</span></li>");
                return;
            }
            $("#tzfu_testTime").text(r.data.testList[0].testTime.substr(11,19));
            $("#tzfu_testResult").text(r.data.testList[0].testResult);
            console.log("num",r.data.testList.length)
            if(r.data.testList.length>1){
                 $("#gen").show();
            }

        }
    })

}

function ypyyj(num) {

    $("#show").attr("style","display:none");
    var sessionId=sessionStorage['sessionId'];
    var day = $("#top_shu").html();
    var nianyue = $("#ymym").html();
     recordTime=nianyue+day;
    recordTime = recordTime.replace("年","-" ).replace("月","-");
    var times = recordTime.split("-");
    recordTime = times[0] + "-" + p(times[1]) + "-" + p(times[2])
    $.post("http://ys.stevengg.com/test/yuesao/record/appResult",{sessionid:"779",recordTime:recordTime,recordId:num},
    	function (r) {

            record(r);

	        if(r.code=="USR100"){
	        	$(".yaopin_01").css("display","none");
	        	$(".yaopin_02").css("display","block");
                $("#gen1").hide();

	        }else if(r.code=="USR000"){
                $("#yaopin_tupian").empty();
                if(r.data.testList.length>1){
                    $("#gen1").show();
                }
	        	$(".yaopin_02").css("display","none");
	        	$(".yaopin_01").css("display","block");

	        	$("#yaopin_null").css("display","none");
	        	$("#yaopin_ul").css("display","block");
	        	$("#yaopin_time").html(r.data.testList[0].recordTime.substr(11,19));
	        	$("#yaopin_drug").html(r.data.testList[0].drug);
                var describesImg=r.data.testList[0].describesImg;
                if(describesImg!=null){
                    var imgall=describesImg.split(";");
                    for(var y=0;y<imgall.length-1;y++){
                        imgtotal='<img src="' +baseURL2+ imgall[y]+  '">';
                        console.log(imgtotal)
                        $("#yaopin_tupian").append(imgtotal);
                    }
                    $("p img").zoomify();
                }


                $("#yaopin_describes").html(r.data.testList[0].describes);
                var testTime = r.data.testList[0].testTime;
                var testResult = r.data.testList[0].testResult;
                if (!testTime || !testResult) {
                    $("#ypyyj").empty().append("<li><span>医生还没有评测呦，稍后再看呗！</span></li>");
                    return;
                }
	        	$("#yaopin_testTime").html(r.data.testList[0].testTime.substr(11,19));
	        	$("#yaopin_testResult").html(r.data.testList[0].testResult);

	        }
    })
}

function tdjs(num) {
    $("#show").attr("style","display:none");
    var sessionId=sessionStorage['sessionId'];
    var day = $("#top_shu").html();
    var nianyue = $("#ymym").html();
     recordTime=nianyue+day;
    recordTime = recordTime.replace("年","-" ).replace("月","-");
    var times = recordTime.split("-");
    recordTime = times[0] + "-" + p(times[1]) + "-" + p(times[2])
    $.post("http://ys.stevengg.com/test/yuesao/record/appResult",{sessionid:"779",recordTime:recordTime,recordId:num},function (r) {

        record(r);

        var list=r.data;
        console.log(r)
        if(r.code=="USR100"){
        	$(".taidong_01").css("display","none");
        	$(".taidong_02").css("display","block");
            $("#gen2").hide();
        }else if(r.code=="USR000"){
            if(r.data.testList.length>1){
                $("#gen2").show();
            }
        	$(".taidong_02").css("display","none");
        	$(".taidong_01").css("display","block");

        	$("#taidong_recordTime").html(getTime(r.data.testList[0].recordTime));
        	$("#taidong_times").html("在"+r.data.testList[0].chronograph+"秒内，宝宝动了"+r.data.testList[0].times+"次！！！");
        	$("#taidong_describes").html(r.data.testList[0].taidong_describes);
            var testTime = r.data.testList[0].testTime;
            var testResult = r.data.testList[0].testResult;
            if (!testTime || !testResult) {
                $("#tdjl").empty().append("<li><span>医生还没有评测呦，稍后再看呗！</span></li>");
                return;
            }
        	$("#taidong_testTime").html(getTime(r.data.testList[0].testTime));
        	$("#taidong_testResult").html(r.data.testList[0].testResult);

        }
    })

}

function chancheck(num) {
    $("#show").attr("style","display:none");
    var sessionId=sessionStorage['sessionId'];
    var day = $("#top_shu").html();
    var nianyue = $("#ymym").html();
     recordTime = nianyue + day;
    recordTime = recordTime.replace("年","-" ).replace("月","-");
    var times = recordTime.split("-");
    recordTime = times[0] + "-" + p(times[1]) + "-" + p(times[2])
    $.post("http://ys.stevengg.com/test/yuesao/record/appResult",{sessionid:"779",recordTime:recordTime,recordId:num},function (r) {
        record(r);
        console.log(r)
        var list=r.data;
        if(r.code=="USR100"){
        	$(".chancheck_01").css("display","none");
        	$(".chancheck_02").css("display","block");
            $("#gen3").hide();

        }else if(r.code=="USR000"){
            $("#chancheck_tupian").empty();
            if(r.data.testList.length>1){
                $("#gen3").show();
            }
        	$(".chancheck_02").css("display","none");
        	$(".chancheck_01").css("display","block");
        	$("#chancheck_recordTime").html(r.data.testList[0].recordTime.substr(11,19));
        	$("#chancheck_describes").html(r.data.testList[0].describes);
            var describesImg=r.data.testList[0].describesImg;
            if(describesImg != null){
                var imgall=describesImg.split(";");
                for(var y=0;y<imgall.length-1;y++){
                    imgtotal='<img src="' +baseURL2+ imgall[y]+  '">';
                    console.log(imgtotal)
                    $("#chancheck_tupian").append(imgtotal);
                }
                $("p img").zoomify();
            }

            var testTime = r.data.testList[0].testTime;
            var testResult = r.data.testList[0].testResult;
            if (!testTime || !testResult) {
                $("#chanjian").empty().append("<li><span>医生还没有评测呦，稍后再看呗！</span></li>");
                return;
            }
        	$("#chancheck_testTime").html(r.data.testList[0].testTime.substr(11,19));
        	$("#chancheck_testResult").html(r.data.testList[0].testResult);


        }
    })

}




function record(r) {
    var dateList = $("#d3").find("td");
    $(".green").removeClass('green');
    var timeArr = recordTime.split("-");
    var rtnDateList = r.data.dateList;
    if (rtnDateList == null) {
        return;
    }
    var arr = [];
    for (var i = 0; i < rtnDateList.length; i++) {
        arr.push(parseInt(rtnDateList[i].substring(8, 10)));
    }
    for (var i = 0; i < dateList.length; i++) {
        var y = parseInt(dateList[i].getAttribute("data_y"));
        var m = parseInt(dateList[i].getAttribute("data_m"));
        var d = parseInt(dateList[i].getAttribute("data_d"));
        if (y == timeArr[0] && p(m) == timeArr[1] && arr.indexOf(d) >= 0) {
            dateList[i].classList.add("green");
        }
    }

}