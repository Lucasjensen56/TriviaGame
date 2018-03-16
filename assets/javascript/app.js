var correctAnswers;
var wrongAnswers;
var question;
var userChoice;









var questionsAndAnswers = [

	{
		question: "What does Dumbledore find in the Room of Requriement?",
		answers: ["Chamber pots", "Telescopes", "Feather dusters", "Pyjamas"],
		correctAnswer: 0
		},
	
	{
		question: "Who isn't a Hogwarts House Ghost?",
		answers: {
			a: "Nearly Headless Nick",
			b: "Peeves",
			c: "The Grey Lady",
			d: "The bloody Baron"
		},
		correctAnswer: "b"
	},

	{
		question: "Which Defense Against the Dark Arts teacher filled his office with pictures of himself?",
		answers: {
			a: "Quirrel",
			b: "Lupin",
			c: "Lockhart",
			d: "Moody"
		},
		correctAnswer: "c"
	},

	{
		question: "How do first year students get to Hogwarts after exiting the train?",
		answers: {
			a: "Hippogriffs",
			b: "Broomsticks",
			c: "side-Along-Apparition",
			d: "Magical boats across the lake"
		},
		correctAnswer: "d"
	}
];


// display questions


function showTrivia() {
	$("#questionsDiv").html(questionsAndAnswers[0].question);
	// question++

	var answersArr = questionsAndAnswers[0].answers;
	var buttonsArr = [];

	for (let i = 0; i < answersArr.length; i++) {
		var button = $('<button>');
		button.text(answersArr[i]);
		button.attr('data-id', i);
		$('#answersDiv').append(button);
	}





}



// playing game

function gameStart() {

	var countDown = function() {
	$('.seconds').each(function() {
		var count = parseInt($(this).html());
		if (count !== 0) {
			$(this).html(count -1);
		}
	});
};

setInterval(countDown, 1000)


correctAnswers = 0;
wrongAnswers = 0;


$('#answersDiv').on('click', 'button', function(){
	userChoice = $(this).data("id");
	questionsAndAnswers[0].correctAnswer;
	if(userChoice != questionsAndAnswers[0].correctAnswer){
		$('#answersDiv').text("Wrong Answer!")
		wrongAnswers++;
		$('#wrongAnswers').text(wrongAnswers)
	} else {
		(userChoice = questionsAndAnswers[0].correctAnswer);
		$('#answersDiv').text("Correct Answer")
		correctAnswers++
		$('#correctAnswers').text(correctAnswers)

	}

});



}




showTrivia() 
gameStart()











// startGame

// Player is display with screen with button. 
// On this page it says"click to start TriviaGame"

// When the button is clicked start game, start timer and display first set up trivia games

// Random trivia question is generated with 4 answers
	// if the player chooses correctly they win++
		 	// win is counted and displayed at the end of the game
	// else if the playe choose the incorrect answer lose++
			// lose count is stored and displayled at the end of the game

// After the time runs out the next question is displayed

// After player has cycled through all questions display how many times they won and lost


