var main = function () {
	"use strict";
	var addCommentFromInputBox = function () {
		var $new_comment;
		if ($(".comment-input input").val() !== "") {
			$new_comment = $("<p>").text($(".comment-input input").val());
			$new_comment.hide();
			$(".comments").append($new_comment);
			$new_comment.fadeIn();
			$(".comment-input input").val("");
		}
	};
	$(".comment-input button").on("click", function (event) {
		addCommentFromInputBox();
	});
	$(".comment-input input").on("keypress", function (event) {
		if (event.keyCode === 13) {
			addCommentFromInputBox();
		}
	});
};

$(document).ready(main);
/*
What’s happening here? 
This code is attaching an event listener to the DOM element referenced in the call to 
the $ function. Notice that the contents of the $ look a lot like a CSS selector—and 
that’s no coincidence! That’s exactly what it is! jQuery allows you to easily target 
elements in the DOM using CSS selectors, and then manipulate them using JavaScript.
*/