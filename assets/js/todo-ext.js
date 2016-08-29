// Check off Specific Todos by clicking
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

// Click on X to delete Todos
$("ul").on("click", "span",function (event) {
	$(this).parent().fadeOut(500, function () {
		$(this).remove();
	});
	event.stopPropagation();
});

// When enter is pressed then 
$('input[type="text"]').keypress(function (event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
})

$(".fa-pencil-square-o").click(400, function () {
	$('input[type="text"]').fadeToggle();
});

