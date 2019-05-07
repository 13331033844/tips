	A=0;
	function Lock(B) {
		if (A==0) {
			A=1;
			window.setTimeout(function () {
				A=0;
			},500); 
			return B();
		}else{
			return false
		}
	}



	// $('.btn').click(function () {
	// 	Lock(function () {

	// 		console.log(1)

	// 	})
		
	// })