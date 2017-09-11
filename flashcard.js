
var fs = require("fs");




function flashcard(front, back) {
	this.front = front;
	this.back = back;

	this.card = function() {

		var data = {
			front: this.front,
			back: this.back,
			type: "basic",
		};

		fs.appendFile("log.txt", function(err) {
            // if there is an error, log the error
            if (err) {
                console.log(err);
            }
		});
	};
}


var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
console.log(firstPresident.front); 

// "George Washington"
console.log(firstPresident.back); 

module.exports = flashcard;


