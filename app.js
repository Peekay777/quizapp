var questions = Array();
var player = new Player();

$(document).ready(function () {
	showGameValues();
	showQuestion(player.answered);
	
	$(".actors").click(function (){
		var selected = +$(this).data("image");
		if (selected === questions[player.answered].correctAns) {
			console.log("Correct");
			player.score++;
		} else {
			console.log("Wrong");
		}

		player.answered++;

		if (player.answered < questions.length) {
			showGameValues();
			showQuestion(player.answered);
		} else {
			alert("finish");
		}
	});
});

// Questions objects: array of film names, array of possible answers images and correct answer index
function Question (films, answers, correctAns) {
	this.films = films;
	this.answers = answers;
	this.correctAns = correctAns;
}

// Player object: score and question answered
function Player () {
	this.score = 0;
	this.answered = 0;
}

function showGameValues () {
	$("#score-value").text(player.score);
	$("#answered").text(1 + player.answered);
	$("#numQuestions").text(questions.length);
}


function showQuestion (questionNumber) {
	for (var i=0; i < questions[questionNumber].films.length; i++) {
		$("#film" + i).text(questions[questionNumber].films[i]);
	}
	
	for (var i=0; i < questions[questionNumber].answers.length; i++) {
		$("#photo" + i).attr("src", "images/" + questions[questionNumber].answers[i]);
	}
}

questions[0] = new Question(
	["Charlie and the Chocolate Factory", "Pirates of the Caribbean: The Curse of the Black Pearl", "Sleepy Hollow"],
	["ChristinaRicci.jpg", "HelenaBonhamCarter.jpg", "JohnnyDepp.jpg", "OrlandoBloom.jpg"],
	2
);

questions[1] = new Question(
	["Blazing Saddles","Stir Crazy","See No Evil, Hear No Evil"],
	["GeneWilder.jpg","JoBethWilliams.jpg","MelBrooks.jpg","RichardPryor.jpg"],
	0
);

questions[2] = new Question(
	["Gone in Sixty Seconds","Girl, Interrupted","Mr. & Mrs. Smith"],
	["AngelinaJolie.jpg","BradPitt.jpg","NicolasCage.jpg","WinonaRyder.jpg"],
	0
);

questions[3] = new Question(
	["12 Years a Slave","Salt","Serenity"],
	["AngelinaJolie.jpg","BradPitt.jpg","ChiwetelEjiofor.jpg","NathanFillion.jpg"],
	2
);

questions[4] = new Question(
	["The Devil's Advocate","Monster","Snow White and the Huntsman"],
	["AlPacino.jpg","CharlizeTheron.jpg","ChristinaRicci.jpg","KristenStewart.jpg"],
	1
);