// check the boyos
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

// make the boyos fly away @aclick
$('ul').on("click", "span.delete", function(event){
		$(this).parent().fadeOut(250,function(){
			$(this).remove();
		});
		event.stopPropagation();

});

$("input[type='text']").keypress(function(event){
	if(event.which===13){
		var newTD = $(this).val();
		$(this).val("");
		//turn new boyo into a list item
		$("ul").append("<li><span class='delete'><i class='fas fa-trash-alt'></i></span> " + newTD + "</li>")
	}
});

$(".fa-plus-circle").click(function(){
	$("input[type='text']").fadeToggle();
})