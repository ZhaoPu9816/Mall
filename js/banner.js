var requestUrl = 'http://127.0.0.1:3001/'

//定义网络请求实例
var request = new XMLHttpRequest

//打开请求('类型','地址')
request.open('get',requestUrl+'getBanner',true)

request.send(null)

request.onreadystatechange = function() {
	
	console.log(request.readyState)
	
	if(request.readyState == 4) {
		
		console.log(request.responseText)		
		var result = JSON.parse(request.responseText)

		if(result.success == true) {
			
			var lists = result.list
			var inner = document.querySelector('#inner-list')
			var html = ''
			
			for(var i=0;i<lists.length-2;i++) {
				html += `<li><img src="${requestUrl + lists[i].img}" /></li>`
			}
			
			inner.innerHTML = html
			
		}
		
	}
	
}


















