var Dtime = new Date('2019-8-30 18:00:00').getTime()

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
	
	if(distance < 0) {
		return '000000'
	}
	
	var time = hour + minute + second
	console.log(time)
	time = time.split('')
	var etime = document.querySelectorAll('.countdown-label')

	for(i=0;i<=5;i++) {
		etime[i].innerHTML = time[i]
	}
}, 1000)
