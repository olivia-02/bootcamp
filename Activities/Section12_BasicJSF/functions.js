//Is a number input even?
function isEven(num) {
	if((num % 2) == 0){
		return("True");
	}
	else{
		return("False");
	}
}

//Find factorials of a number (factorial(4)= 1*2*3*4)
function factorial(num) {
	if(num === 0 || num === 1) {
		return 1;
	}
	if(num > 0) {
		var res = 1;
		for (var i = 2; i <= num; i++) {
			res = res * i;

		}
	 return res;
	}
}

//Replace kebab-style text with snake_style text
function kebSnek(str) {
	var myString = str.replace(/-/g, "_");
	return myString;
}