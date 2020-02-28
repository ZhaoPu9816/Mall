//点击出现,隐藏
var publishBtn = $(".publish-btn")

publishBtn.click(function() {

	var publishList = $(".publish-list")
	if(publishList.is(':hidden')) {
		publishList.show()
	} else {
		publishList.hide()
	}

})

//发表评价
var send = $(".send-btn")

send.click(function() {

	var value = $("[name=content]").val()
	console.log(value)
	if(value) {

		if(confirm("是否提交评论")) {
			var html = `
						<li>
							<div class="headPortrait leftAlignment iblock">
								<p>
									<img src="img/404zfx.jpg" />
								</p>
								<span>用户名</span>
							</div>
							<div class="rev-item iblock">
								<p>差评 | 2019-8-12 </p>
								<span>${value}</span>
							</div>
							<div class="reply">
								<span class="Typeface2"></span>
							</div>
						</li>`
			//			添加到前面
			$(html).prependTo($(".list-text"))
			$("[name=content]").val('')

		}

	}

})

//倒计时
var Dtime = new Date('2019-8-14 18:30:30').getTime()

setInterval(function() {
	var now = new Date().getTime()

	var distance = Dtime - now
	var hour = Math.floor(distance / (1000*60*60))
	var minute = Math.floor((distance - hour*60*60*1000) / (1000*60))
	var second = Math.floor((distance - hour*60*60*1000 - minute*60*1000) / 1000)

	hour = String(hour)
	minute = String(minute)
	second = String(second)
	console.log(hour,minute,second)
	
	if(hour.length <= 1) {
		hour = '0' + hour
	}
	if(minute.length <= 1) {
		minute = '0' + minute
	}
	if(second.length <= 1) {
		second = '0' + second
	}
	
	if(distance <= 0) {
		return '000000'
	}
	
	var time = hour + minute + second
	console.log(time)
	time = time.split('')
	var etime = document.querySelectorAll('.detail-countdown-label')

	for(i=0;i<=5;i++) {
		etime[i].innerHTML = time[i]
	}
}, 1000)

//加减按钮
$(".add").click(function(){
    var n=$(this).prev('.shop-num').val();
    var num=parseInt(n)+1;
    $(this).prev('.shop-num').val(num);
});

$(".reduce").click(function(){
    var n=$(this).next().val();
    var num=parseInt(n)-1;
    if(num==0){ 
    	return
    }
    $(this).next().val(num);
});

