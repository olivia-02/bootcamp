//1.
var num1 = -10
while(num1 <= 19){
	console.log(num1);
	num1++
}

//2
var num2 = 10
while(num2 <= 40){
	console.log(num2);
	num2++
}

//3
var	num3 = 300
while(num3 <= 333){
	if ((num3 % 2) === 0) {
		num3++
	}
	else{
		console.log(num3);
		num3++
	}
}

//4
var num4 = 5
while(num4 <=50){
	if(((num4 % 5) === 0) && ((num4 % 3) === 0)){
		console.log(num4);
		num4++
	}
	else{
		num4++
	}
}