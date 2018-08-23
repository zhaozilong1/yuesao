$(function(){
	var html="";
		html+='<ul>';
		html+='<li><a href="index.html"><span class="index active0"></span>';
    html += '<p>首页</p></a></li>';
		html+='<li><a href="record.html"><span class="jilu"></span>';
		html+='<p>记录</p></a></li>';
		html+='<li><a href="knowledge_list.html"><span class="zhishi"></span>';
		html+='<p>知识</p></a></li>';
		html+='<li><a href="my.html"><span class="ziji"></span>';
		html+='<p>我的</p></a></li>';
		html+='</ul>';
		
	$("#footer").empty().append(html);


	$(".index").removeClass("active0");
	$(".jilu").removeClass("active1");
	$(".zhishi").removeClass("active2");
	$(".ziji").removeClass("active3");

	var page = $("#page").val();

	if(page == 'index') {
		//console.log(page);
		$(".index").addClass('active0');
		$(".index").next().addClass('active');
	} else if(page == 'record') {
		$(".jilu").addClass('active1');
		$(".jilu").next().addClass('active');
	} else if(page == 'zhishi') {
		$(".zhishi").addClass('active2');
		$(".zhishi").next().addClass('active');
	} else if(page == 'wode') {
		$(".ziji").addClass('active3');
		$(".ziji").next().addClass('active');
	}




})