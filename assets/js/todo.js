//clicking the item to check it off

$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event)
{
	$(this).parent().fadeOut(500, function()
	{
		$(this).remove();
	});

	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13)
	{
		var enteredText = $(this).val();
		$("this").val = "";
		$("ul").append("<li><span>[X]</span>  "+ enteredText +"<li>");
	}
});

$("i").on("click", function(){
	$("input[type='text']").fadeToggle(1000);
	/*$(this).css({
		color:"gray"
	});*/
});