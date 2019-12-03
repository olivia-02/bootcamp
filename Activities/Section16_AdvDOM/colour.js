var buttlol = document.querySelector('button');
var boysen = false;

buttlol.addEventListener('click', function(){
  var body = document.querySelector('body')  
	if(boysen){
		body.style.background='purple';
	} 
	else{
		body.style.background='white';
	}
	boysen = !boysen;
});