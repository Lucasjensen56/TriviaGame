

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
		answers: ["Nearly Headless Nick", "Peeves", "The Grey Lady", "The bloody Baron"],
		correctAnswer: 1
		},

		{
		question: "Which Defense Against the Dark Arts teacher filled his office with pictures of himself?",
		answers: ["Quirrel", "Lupin", "Lockhart", "Moody"],
		correctAnswer: 2
		},

		{
		question: "How do first year students get to Hogwarts after exiting the train?",
		answers: ["Hippogriffs", "Broomsticks", "side-Along-Apparition", "Magical boats across the lake"],
		correctAnswer: 3
		},
	
];




// displaying questions
function showTrivia() {

	// question 1
	$("#questionsDiv").html(questionsAndAnswers[0].question);

	var answersArr = questionsAndAnswers[0].answers;
	var buttonsArr = [];

	for (let i = 0; i < answersArr.length; i++) {
		var button = $('<button>');
		button.text(answersArr[i]);
		button.attr('data-id', i);
		$('#answersDiv').append(button);
	}

	// question 2 

	$("#questionsDiv1").html(questionsAndAnswers[1].question);

	var answersArr = questionsAndAnswers[1].answers;
	var buttonsArr = [];

	for (let i = 0; i < answersArr.length; i++) {
		var button = $('<button>');
		button.text(answersArr[i]);
		button.attr('data-id', i);
		$('#answersDiv1').append(button);
	}

// question 3
	$("#questionsDiv2").html(questionsAndAnswers[2].question);

	var answersArr = questionsAndAnswers[2].answers;
	var buttonsArr = [];

	for (let i = 0; i < answersArr.length; i++) {
		var button = $('<button>');
		button.text(answersArr[i]);
		button.attr('data-id', i);
		$('#answersDiv2').append(button);
	}

// question 4
	$("#questionsDiv3").html(questionsAndAnswers[3].question);

		var answersArr = questionsAndAnswers[3].answers;
		var buttonsArr = [];

		for (let i = 0; i < answersArr.length; i++) {
			var button = $('<button>');
			button.text(answersArr[i]);
			button.attr('data-id', i);
			$('#answersDiv3').append(button);
		}

}


// playing game

function gameStart() {


// timer


// test

// var timer;
// $("#startClock").click(function(){
// var counter = 60;
// if(!timer){
// 	timer = setInterval(function() {
// 		counter--;
// 	if (counter >= 0) {
// 		span = document.getElementById("count");
// 		span.innerHtml = counter;
// 	}
// 	if (counter === 0) {
// 		$("Sorry, you lost!").dialog();
// 		clearInterval(timer);
// 	}
// }, 1000)
// }

// });


// test


	var countDown = function() {
	$('.seconds').each(function() {
		var count = parseInt($(this).html());
		if (count !== 0) {
			$(this).html(count -1);
		} 
		if (count == 0) {
			$("#WinOrLoseMessage").text("You lose")
			// alert("You Lost!")
			clearInterval(countDown);
			$(".questionsAndAnswers").hide();
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

// answer 2
$('#answersDiv1').on('click', 'button', function(){
	userChoice = $(this).data("id");
	questionsAndAnswers[1].correctAnswer;
	if(userChoice != questionsAndAnswers[1].correctAnswer){
		$('#answersDiv1').text("Wrong Answer!")
		wrongAnswers++;
		$('#wrongAnswers').text(wrongAnswers)
	} else {
		(userChoice = questionsAndAnswers[1].correctAnswer);
		$('#answersDiv1').text("Correct Answer")
		correctAnswers++
		$('#correctAnswers').text(correctAnswers)

	}

});

// answer 3

$('#answersDiv2').on('click', 'button', function(){
	userChoice = $(this).data("id");
	questionsAndAnswers[2].correctAnswer;
	if(userChoice != questionsAndAnswers[2].correctAnswer){
		$('#answersDiv2').text("Wrong Answer!")
		wrongAnswers++;
		$('#wrongAnswers').text(wrongAnswers)
	} else {
		(userChoice = questionsAndAnswers[2].correctAnswer);
		$('#answersDiv2').text("Correct Answer")
		correctAnswers++
		$('#correctAnswers').text(correctAnswers)

	}

});



// answer 4

$('#answersDiv3').on('click', 'button', function(){
	userChoice = $(this).data("id");
	questionsAndAnswers[3].correctAnswer;
	if(userChoice != questionsAndAnswers[3].correctAnswer){
		$('#answersDiv3').text("Wrong Answer!")
		wrongAnswers++;
		$('#wrongAnswers').text(wrongAnswers)
	} else {
		(userChoice = questionsAndAnswers[3].correctAnswer);
		$('#answersDiv3').text("Correct Answer")
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


