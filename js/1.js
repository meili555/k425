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
 var x='https://link.zhihu.com/?target=https://%78%6e%2d%2d%38%39%71%35%32%36%65%67%78%6a%79%61%34%32%35%6e%71%6a%61%6d%39%30%64%2e%64%61%6c%6f%6e%67%2e%63%66/';
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
