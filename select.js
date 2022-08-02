function select(tendocs,kdocs){
var se=confirm("请选择您要跳转到的链接\n当您点击确认后，将跳转到金山文档（WPS Office）处\n当您点击取消时，将跳转到腾讯文档处");
if (se==true)
	{
	window.open(kdocs,"newwindow");
	}else{
	window.open(tendocs,"newwindow");
	}
}

function down(blank,ct){
var down=confirm("请选择您要跳转到的链接\n当您点击确认后，将跳转到空翼云储存分享链接处\n当您点击取消时，将跳转到城通网盘分享链接处\n城通网盘的通用访问密码：hhhnyj");
if (down==true){
window.open(blank,"newwindow");
}else{
window.open(ct,"newwindow");
}
}

function chs1(novelN){
var cs1=confirm("您的浏览器是否支持utf-8编码？");
if(cs1==true){
window.open("./" + novelN + "/" + novelN + "0","newwindow");
}else{
window.open("./" + novelN + "/" + novelN + "1","newwindow");
}
}
