//注册
var userName = document.getElementById("userName");
var password = document.getElementById("password");
var repassword = document.getElementById("repassword");
var phone = document.getElementById("phone");
var submitButton = document.getElementById("submitButton");

function checkuserName() {
	var userNamestr = userName.value.trim();
	var pattern = new RegExp(/^[a-zA-Z0-9]{6,16}$/);
	var result = pattern.test(userNamestr);
	return result;
}

function checkpassword() {
	var passwordstr = password.value.trim();
	var pattern = new RegExp(/^[^\u2E80-\u9FFF]{6,16}$/);
	var result = pattern.test(passwordstr);
	return result;
}

function checkrepassword() {
	return(password.value == repassword.value);
}

function checkphone() {
	var phonestr = phone.value.trim();
	var pattern = new RegExp(/^1[3-8][0-9]{9}$/);
	var result = pattern.test(phonestr);
	return result;
}

submitButton.click(function() {
	if(!checkuserName()) {
		alert("用户名不符合规范！");
	} else if(!checkpassword()) {
		alert("密码不符合规范！");
	} else if(!checkrepassword()) {
		alert("密码不一致！");
	} else if(!checkphone()) {
		alert("电话号码不符合规范！");
	} else {
		alert("注册成功");
	}
})