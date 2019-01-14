var main = function () {
	"use strict";
	$(".comment-input button").on("click", function (event) {
		var $new_comment = $("<p>"),
                comment_text = $(".comment-input input").val();
            $new_comment.text(comment_text);
            $(".comments").append($new_comment);
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