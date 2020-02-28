//手风琴菜单
$(function() {      
	$(".menu>li").on("click", function() {        
		var next = $(this).children(".child-ul");        
		var icon = $(this).children("span");        
		next.slideToggle('fade');        
		if(icon.html() === "+") {          
			icon.html("-");        
		} else {          
			icon.html("+");        
		}        
		$('.child-ul').not(next).slideUp('fast'); //不是当前点击的内容全部向上收起
		        
		$('.menu>li').children("span").not(icon).html("+");        
		return false;      
	})    
})

//切换页面
//var paybtn = $(".paybtn")
//var gvrp = $(".grvp")
//var payment = $(".payment")
//var helpList = $(".help-list")
//
//paybtn.click(function() {
//	
//	if(payment.is(':hidden')) {
//		payment.show()
//		gvrp.hide()
//	} else {
//		payment.hide()
//	}
//	
//})