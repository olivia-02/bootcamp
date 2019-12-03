var numSquares = 6;

var colours = genRandos(6);

var colPick = pickColour();

var squares = document.querySelectorAll(".square");

var colDis = document.querySelector("#colDis");

var messageDis = document.querySelector("#message");

var resetButt = document.querySelector("#reset")

var h1 = document.querySelector('h1');

var modeButt = document.querySelectorAll(".mode")
// var easyButt = document.querySelector('#easy');

// var hardButt = document.querySelector('#hard');

init();

function init(){
			//Make the boyos 
	for (var i = 0; i < modeButt.length; i++) {
		modeButt[i].addEventListener("click", function(){
			modeButt[0].classList.remove("selected");
			modeButt[1].classList.remove("selected");
			this.classList.add("selected");
				//squareboiz #
			if (this.textContent === "Easy") {
				numSquares = 3;
			}	
			else {
				numSquares = 6;
			}
				//update page
			reset();
		});
	};

	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", function(){
			var clickC = this.style.backgroundColor;

			if(clickC === colPick){
				messageDis.textContent = "Correct!";
				resetButt.textContent = "Play Again";
				changeCol(clickC);
				h1.style.background = clickC;
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDis.textContent = "Try Again";
			}
		});
			reset();
	};

}

function reset(){
	colours = genRandos(numSquares);
	colPick	= pickColour();
	colDis.textContent = colPick;
	resetButt.textContent = "New Colours";
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){								//if(colours[i]) -> if element is defined
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
	messageDis.textContent = "";
	h1.style.backgroundColor = "steelblue";
}

colDis.textContent = colPick;

resetButt.addEventListener("click", function(){
	reset();
})


function changeCol(colour){
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = colour
	}
}

function pickColour(){
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];

}

function genRandos(num){
	var arr = []
	for(var i = 0; i < num; i++){
		arr.push(randoCol())
	}
	return	arr;
}

function randoCol(){
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	
	return "rgb(" + r + ", " + g + ", " + b + ")";
}







									// easyButt.addEventListener("click", function(){
									// 	hardButt.classList.remove("selected");
									// 	easyButt.classList.add("selected");
									// 	numSquares = 3;
									// 	colours = genRandos(numSquares);
									// 	colPick = pickColour();
									// 	colDis.textContent = colPick;
									// 	h1.style.backgroundColor = "steelblue";
									// 	messageDis.textContent = "";
									// 	for (var i = 0; i < squares.length; i++) {
									// 		if(colours[i]){
									// 			squares[i].style.backgroundColor = colours[i];
									// 		}
									// 		else{
									// 			squares[i].style.display = "none";
									// 		}
									// 	}

									// })	

									// hardButt.addEventListener("click", function(){
									// 	easyButt.classList.remove("selected");
									// 	hardButt.classList.add("selected");
									// 	numSquares = 6;
									// 	colours = genRandos(numSquares);
									// 	colPick = pickColour();
									// 	colDis.textContent = colPick;
									// 	messageDis.textContent = "";
									// 	for (var i = 0; i < squares.length; i++) {
									// 			squares[i].style.backgroundColor = colours[i];
									// 			squares[i].style.display = "block";
									// 		}
									// 			h1.style.backgroundColor = "steelblue";
									// })