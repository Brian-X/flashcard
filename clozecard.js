

var fs = require("fs");




var close = function(text, cloze) {
	this.partial = partial;
	this.fulltext = fulltext;

	this.card = function()

		var data = {
			partial: this.partial,
			fullttext: this.fulltext,
			type: "basic",
		};

		fs.appendFile("log.txt", function(err) {
            // if there is an error, log the error
            if (err) {
                console.log(err);
            }
		});
}


var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial); 

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText); 

// Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");


module.exports = clozecard;