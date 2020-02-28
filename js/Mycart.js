function myClick(objStr, fun) {
    var obj = document.getElementById(objStr);
    obj.onclick = fun;
}

var hobbies = document.getElementsByName("item");

// 获取全选/全不选选项
var checkOrCancelAll = document.getElementById("checkOrCancelAll");

// 全选/全不选
myClick("checkOrCancelAll", function() {
	if(this.checked) {
		for(var i = 0; i < hobbies.length; i++) {
			hobbies[i].checked = true;
		}
	} else {
		for(var i = 0; i < hobbies.length; i++) {
			hobbies[i].checked = false;
		}
	}
});

//$(".del").click(function(){
//	$(".store-list").remove();
//})
