var p1Butt = document.querySelector("#p1");
var p2Butt = document.querySelector("#p2");
var h1p1 = document.querySelector("#p1d");
var h1p2 = document.querySelector("#p2d");
var p1sc = 0;
var p2sc = 0;
var gameOver = false;
var win = 5;
var reset = document.querySelector('#reset');
var p = document.querySelector('p');
var input = document.querySelector('input');


p1Butt.addEventListener("click", function(){
		if(!gameOver){
			p1sc++;
				if(p1sc === win){
				console.log("P1 game Win at " + p1sc);
				gameOver = true;
				h1p1.style.color = 'green';
				}
			h1p1.textContent = p1sc;
		}
});
p2Butt.addEventListener("click", function(){
		if(!gameOver){
			p2sc++;
				if(p2sc === win){
				console.log("P2 game Win at " + p2sc);
				gameOver = true;
				h1p2.style.color = 'green';
				}
			h1p2.textContent = p2sc;
		}
});
reset.addEventListener("click", function(){
	console.log("Clicked reset");
		p1sc = 0;
		p2sc = 0;
		gameOver = false;
		h1p1.textContent = p1sc;
		h1p2.textContent = p2sc;
		h1p1.style.color = 'black';
		h1p2.style.color = 'black';
});

input.addEventListener("change", function(){
	win = Number(input.value);
	p.textContent = "Playing to: " + win;
});