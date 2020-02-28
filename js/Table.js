var tabTitle = document.querySelectorAll('.tab-title')

for(var i = 0; i < tabTitle.length; i++) {
	tabTitle[i].index = i;
	tabTitle[i].onmouseenter = function() {
		var parent = this.parentNode.parentNode.nextElementSibling

		var tabLists = parent.children

		for(var j = 0; j < tabTitle.length; j++) {
			tabTitle[j].classList.remove('active')
			tabLists[j].classList.remove('active')
		}
		this.classList.add('active')
		tabLists[this.index].classList.add('active')
	}
}



//switch('.tab-box')
//
//function switch(parentClass) {
//	
//	var parent = document.querySelector(parentClass)
//	
//	var tabTitle = parent.querySelectorAll('.tab-title')
//	var tabLists = parent.querySelectorAll('.tab-lists')		
//	
//	for(var i = 0; i < tabTitle.length; i++) {
//		tabTitle[i].index = i;
//		tabTitle[i].onmouseenter = function() {
//			
////			var parent = this.parentNode.parentNode.nextElementSibling
////			var tabLists = parent.children
//			
//			for(var j=0;j<tabLists.length;j++) {
//				tabTitle[j].classList.remove('active')
//				tabLists[j].classList.remove('active')
//			}
//			
//			this.classList.add('active')
//			tabLists[this.index].classList.add('active')
//			
//		}
//	}
//}