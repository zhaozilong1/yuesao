/**
 * Created by m1324 on 2018/3/30.
 */

// ��input  date����Ĭ��ֵ
var now = new Date();
//��ʽ���գ����С��9��ǰ�油0
var day = ("0" + now.getDate()).slice(-2);
//��ʽ���£����С��9��ǰ�油0
var month = ("0" + (now.getMonth() + 1)).slice(-2);
//ƴװ�������ڸ�ʽ
var today = now.getFullYear()+"-"+(month)+"-"+(day) ;
//��ɸ�ֵ
$('#id_yy_input').val(today);

//�����һ�� ��ʾ����
$(function () {
    $(".btn").click(function () {
        $(".box_top").css("display", "none");
        $(".box_bottom").css({"display":"block","margin-top":0});
    })
});