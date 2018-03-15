var correctAnswer;
var wrongAnswer;
var question;





var questionsAndAnswers = [

	{
		question: "What does Dumbledore find in the Room of Requriement?",
		answers: {
			a: "chamber pots",
			b: "telescopes",
			c: "feather dusters",
			d: "pyjamas"
		},
		correctAnswer: "a"
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
showTrivia() 

// console.log(questionsAndAnswers[0])










// function showQuestions(questions, quizContainer) {

// 	var output = [];
// 	var answers;

// 	for(var i = 0; i < questions.length; i++) {
// 		answers = [];

// 		for(letter in questions[i].answers){

// 			answers.push(
// 				'<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>' 
// 				);
// 		}

// 	output.push(
// 		'<div class="question">' + questions[i].question + '</div>'
// 		+ '<div class="answers">' + answers.join('') + '</div>'

// 		);
// 	}

// 	$("#quizContainer").output.push()

// }





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


