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
 var x='https://link.zhihu.com/?target=https://www.dalong.cf/k425.html?997692991196';
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
