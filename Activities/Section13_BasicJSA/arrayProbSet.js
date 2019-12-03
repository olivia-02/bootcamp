function printReverse(ar) {
	for (var i = ar.length - 1; i >= 0; i--) {
		console.log(ar[i]);
	}
}

printReverse([121,433,134,98])

//--------

function isUniform(ar) {
	var first = ar[0];
		for (var i = 1; i < ar.length; i++) {
			if(ar[i] !== first){
				return false;
			}
			else{
			return true;
			}
		}		
}

//-------

function sumArray(ar) {
	// var ans = 0;
	// var i = 1;
	// 	while(i <= ar.length){
	// 		ans = (ar[i] + ar[i+1]);
	// 		i++;
	// 	}
	// 	console.log(ans);
	var ans = 0;
		ar.forEach(function(stuff){
			ans = (ans + stuff);
		})
	console.log(ans)
}

//---------------

function max(ar) {

	var num = ar[0];
		for (var i = 1; i < ar.length; i++) {
			if(ar[i] > num){
				num = ar[i];
			}
		}

		console.log(num)
		// ar.forEach(function(i){
		// 	if()
		// })

}

