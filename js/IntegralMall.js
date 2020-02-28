window.onload = function() {
	var eleInners = document.getElementById('intergralMall-inner-list'),
		eleDots = document.getElementById('intergralMall-dot-list'),
		liImgs = eleInners.getElementsByTagName('li'),
		liDots = eleDots.children,
		elePrev = document.getElementById('intergralMall-btn-prev'),
		eleNext = document.getElementById('intergralMall-btn-next'),
		LI_WIDTH = liImgs[0].offsetWidth,
		TIME_DURATION = 3000,
		interval = null,
		index = 0,
		circle = 0;
	//首先是克隆
	eleInners.appendChild(liImgs[0].cloneNode(true));
	//生成小点点
	for(var i = 0, len = liImgs.length - 1; i < len; i++) {
		var li = document.createElement('li');
		li.innerHTML = i + 1;
		eleDots.appendChild(li)
	}
	//第一个点高亮
	liDots[0].className = 'cur'
	//接着是动画，用差值和offsetLeft值和移动的值，给一个speed让它移动
	function animate(obj, targetPlace) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {
			//判断移动的位置是向左移动还是向右移动
			var speed = obj.offsetLeft > targetPlace ? -15 : 15;
			var result = targetPlace - obj.offsetLeft;
			//只要移动的差值大于speed，那么就一直让obj.style.left 改变
			if(Math.abs(result) > Math.abs(speed)) {
				obj.style.left = obj.offsetLeft + speed + 'px'
			} else {
				//否则如果已经移动的，obj.offsetleft与要移动的位置十分接近了，
				obj.style.left = targetPlace + 'px';
				clearInterval(obj.timer);
			}
		}, 10)

	}

	//接着定时器
	interval = setInterval(autoplay, 3000)

	//向左的autoplay
	function autoplay() {
		index++;
		if(index > liImgs.length - 1) {
			eleInners.style.left = 0; //赶快跳回去
			index = 1; //找到第二张图片
		}
		animate(eleInners, -index * LI_WIDTH);
		circle++;

		if(circle >= liImgs.length - 1) {
			circle = 0; //circle回到第一个点
		}
		for(var i = 0, len = liDots.length; i < len; i++) {
			liDots[i].className = '';

		}
		liDots[circle].className = 'cur'
	}
	//向右移动
	function moveright() {
		index--;
		if(index < 0) {
			eleInners.style.left = -(liImgs.length - 2) * LI_WIDTH + 'px';
			index = liImgs.length - 2; //找到倒数第二张图片
		}
		animate(eleInners, -index * LI_WIDTH);
		circle--;
		if(circle < 0) {
			circle = liImgs.length - 2; //circle回到最后一个点
		}
		for(var i = 0, len = liDots.length; i < len; i++) {
			liDots[i].className = '';
		}
		liDots[circle].className = 'cur'
	}
	//        鼠标移入，清除定时器
	eleInners.addEventListener('mouseenter', function(event) {
		clearInterval(interval)
	});
	//        鼠标移出，开启定时器
	eleInners.addEventListener('mouseleave', function(event) {
		interval = setInterval(autoplay, 3000)
	});
	//        点击dots
	eleDots.addEventListener('click', function(event) {
		clearInterval(interval);
		var target = event.target;
		var currentTarget = event.currentTarget;
		index = target.innerHTML - 0 - 1;
		circle = index;
		for(var i = 0, len = liDots.length; i < len; i++) {
			liDots[i].className = '';
		}
		liDots[circle].className = 'cur'
		animate(eleInners, -index * LI_WIDTH);
	})
	elePrev.addEventListener('click', function(event) {
		clearInterval(interval)
		moveright();
		interval = setInterval(autoplay, 3000)
	})
	eleNext.addEventListener('click', function(event) {
		clearInterval(interval)
		autoplay();
		interval = setInterval(autoplay, 3000)
	})
}