var questions = Array();
var player = new Player();

$(document).ready(function () {
	showGameValues();
	
	$(".actors").click(function (){
		var t = $("this").data("image");
		console.log("test");
	});
});

function Question (film1, film2, film3, answer1, answer2, answer3, answer4, correctAns) {
	this.film1 = film1;
	this.film2 = film2;
	this.film3 = film3;
	this.answer1 = answer1;
	this.answer2 = answer2;
	this.answer3 = answer3;
	this.answer4 = answer4;
	this.correctAns = correctAns;
}

function Player () {
	this.score = 0;
	this.answered = 1;
}

function showGameValues () {
	$("#score-value").text(player.score);
	$("#answered").text(player.answered);
	$("#numQuestions").text(questions.length);
}

questions[0] = new Question(
	"Charlie and the Chocolate Factory", 
	"Pirates of the Caribbean: The Curse of the Black Pearl", 
	"Sleepy Hollow", 
	"ChristinaRicci.jpg",
	"HelenaBonhamCarter.jpg",
	"JohnnyDepp.jpg",
	"OrlandoBloom.jpg",
	3);

questions[1] = new Question(
	"Charlie and the Chocolate Factory", 
	"Pirates of the Caribbean: The Curse of the Black Pearl", 
	"Sleepy Hollow", 
	"ChristinaRicci.jpg",
	"HelenaBonhamCarter.jpg",
	"JohnnyDepp.jpg",
	"OrlandoBloom.jpg",
	3);