//登录
var signUserName = $('#signUserName')
var signPassWord = $('#signPassWord')
var signBtn = $('#sign-btn')
var resignUserName = 'zp'
var resignPassWord = '987654321'

console.log(resignUserName)
console.log(resignPassWord)

function checksignUserName() {
	var userNamestr = signUserName.val();
	var pattern = new RegExp(/^[a-zA-Z0-9]{6,16}$/);
	var result = pattern.test(userNamestr);
	return(signUserName.val() == resignUserName)
//	return result;
}

function checksignPassWord() {
	var passwordstr = signPassWord.val();
	var pattern = new RegExp(/^[^\u2E80-\u9FFF]{6,16}$/);
	var result = pattern.test(passwordstr);
	return(signPassWord.val() == resignPassWord)
//	return result;
}

signBtn.click(function() {
	if(!checksignUserName()) {
		alert("用户名或密码不正确！");
	}else if(!checksignPassWord()) {
		alert("用户名或密码不正确！");
	}else {
		alert("登陆成功！");
		window.location.href = "Member.html";
	}
})

//注册
var userName = $('#userName')
var phone = $('#phone')
var passWord = $('#passWord')
var repassWord = $('#repassWord')
var registerBtn = $('#register-btn')

console.log(userName)
console.log(passWord)

function checkphone() {
	var phonestr = phone.val();
	var pattern = new RegExp(/^1[3-8][0-9]{9}$/);
	var result = pattern.test(phonestr);
	return result;
}

function checkpassWord() {
	var passwordstr = passWord.val();
	var pattern = new RegExp(/^[^\u2E80-\u9FFF]{6,16}$/);
	var result = pattern.test(passwordstr);
	return result;
//	return result;
}

function checkrepassword() {
	return(passWord.val() == repassWord.val());
}

registerBtn.click(function() {
	if(!checkphone()) {
		alert("电话号码不符合规范！");
	}else if(!checkpassWord()) {
		alert("密码不符合规范！");
	}else if(!checkrepassword()) {
		alert("两次密码不一致！");
	}else {
		alert("注册成功！");
		window.location.href = "Sign.html";
	}
})

//切换
$('.to-register').click(function() {
	$('.tangram').hide()
	$('.register').show()
})

$('.to-tangram').click(function() {
	$('.register').hide()
	$('.tangram').show()
})
