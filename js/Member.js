function DY_scroll(wraper, prev, next, img, speed, or) {
	var wraper = $(wraper);
	var prev = $(prev);
	var next = $(next);
	var img = $(img).find('ul');
	var w = img.find('li').outerWidth(true);
	var s = speed;
	next.click(function() {
		img.animate({
			'margin-left': -w
		}, function() {
			img.find('li').eq(0).appendTo(img);
			img.css({
				'margin-left': 0
			});
		});
	});
	prev.click(function() {
		img.find('li:last').prependTo(img);
		img.css({
			'margin-left': -w
		});
		img.animate({
			'margin-left': 0
		});
	});
	if(or == true) {
		ad = setInterval(function() {
			next.click();
		}, s * 1000);
		wraper.hover(function() {
			clearInterval(ad);
		}, function() {
			ad = setInterval(function() {
				next.click();
			}, s * 1000);
		});

	}
}

//DY_scroll('.img-scroll', '.prev', '.next', '.img-list', 3, false);

//菜单栏切换
//$('.smrz').click(function() {
//	$('.member-default').hide()
//	$('.myCoupon').hide()
//	$('.certified').hide()
//	$('.Rname').show()
//	$('.member-Rname').show()
//})
//
//$('.toRname').click(function() {
//	$('.Rname').hide()
//	$('.certified').show()
//})
//
//$('.wdyhq').click(function() {
//	$('.member-Rname').hide()
//	$('.Rname').hide()
//	$('.member-default').hide()
//	$('.certified').hide()
//	$('.myCoupon').show()
//})
