var age = prompt("What is your age?")
if(age < 0){
	alert("How dare you enter an age that is impossible! Your hands are not formee in your mother's womb and you cannot even enter a number you paradoxal heathen!")
}
else if(age > 0 && age < 18){
	alert("You child! You thought you could enter into the land of adults but you simply humiliated yourself! You immature swine!");
}
else if(age == 21){
	alert("I don't celebrate birthdays. But merry age of alcohol consumption.")
}

else if(age < 21) {
	alert("You are on thin ice, friend. The 'X' upon your hand symbolizes your youth. Have bravery and courage as you enter into the land of maturity and view it's associated drunkeness.");
}
else {
	alert("Lol, k, ur cool.");
}

var evod = age % 2

if(evod == 1){
	console.log("Haha, odd name for an odd soul.")
}

var perfSq = Math.sqrt(age)
if(age % perfSq === 0) {
	alert("Nobody's perfect, but at least your age is a perfect square! :) Uwu <3<3<3")
}