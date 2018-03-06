$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='textfield'").keypress(function(event){
	if (event.which === 13){
		// grabbing text
		var text =  $(this).val();
		console.log(text);
		// adding text into list
		$("ul").append("<li><span>X</span> " + text + "</li>");
		$(this).val("");
	}
});