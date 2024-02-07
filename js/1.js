document.onkeydown = document.onkeyup = document.onkeypress = function (event) {
	var e = event || window.event || arguments.callee.caller.arguments[0];
	if (e && e.keyCode == 123) {
		mAlert();
		e.returnValue = false;
		return (false);
	}
}
function mAlert() {
	alert("感谢使用管理平台，禁止对控制台进行操作！");
}


setInterval(function () {
	debugger;
}, 100)


document.oncontextmenu = function () { return false; };    
 var x='https://link.zhihu.com/?target=https://%34%6b%2e%73%75%6f%6f%2e%62%66/?%E7%82%B9%E5%87%BB%E7%BB%A7%E7%BB%AD%E8%AE%BF%E9%97%AE';
    $(function () {
        let u = window.document.location.href.toString().split("?");
        if (typeof (u[1]) == "string") {
            u = u[1].split("&");
        } else {
            u = "";
        }
        
        iframe(x + u);
    });

    function iframe(src) {
        $("div").html('<iframe src="' + src + '" width="100%" height="' + (($(window).height()) - 5) + "px" + '" style="border: 0"></iframe>');
        $(window).resize();
    }
