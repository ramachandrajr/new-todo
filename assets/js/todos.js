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

// Global variables
var shitRemoved = false;

// Create a function so that we can keep it running using setInterval
// and keep track of all the inserted data.
function putDataInCookie() {
	// Select all li's.
	var todoTasks = document.querySelectorAll("li");
	var todosAsString = "tasks=";

	for (var i = 0; i < todoTasks.length; i++) {
		// Add all the data to string and keep appending.
		todosAsString += " &" + todoTasks[i].textContent;
	}
	// todoAsString is absolutely fine.

	// Put that string in a cookie.	
	document.cookie = todosAsString;
}

function getDataFromCookie() {
	// Get the cookie data.
	var cookieData = document.cookie;
	// Divide data into usable list.
	var todosList = cookieData.split("&");
	// Test if the useless data is removed.
	// If not go on and remove.
	if (shitRemoved === false) {
		// Remove the first part of data as it is not useful.
		todosList.shift();	
		// Set dirt removed to true, so  that you wont chop off the real data.
		shitRemoved = true;
	}	

	for (var i = 0; i < todosList.length; i++) {
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todosList[i] + "</li>");
	}
}



