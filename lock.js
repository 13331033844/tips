	Public_lock=0;
	minitime=500
	function Lock(B) {
		if (Public_lock==0) {
			Public_lock=1;
			window.setTimeout(function () {
				Public_lock=0;
			},minitime); 
			return B();
		}else{
			return false
		}
	}

	function aclick(obj) {
		if (obj.attr('href')==undefined) {
			return false
		}else{
			href=obj.attr('href')
			obj.removeAttr('href')
			window.setTimeout(function () {
			obj.attr('href',href);
			},minitime); 
		}
	}


	// $('a').click(function () {
	// 	aclick($(this))
	// })




	// $('.btn').click(function () {
	// 	Lock(function () {
	// 		console.log(1)
	// 	})
	// })