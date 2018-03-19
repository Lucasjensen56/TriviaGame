


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
		$(button).addClass("btn #37474f blue-grey darken-3");
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
		$(button).addClass("btn #37474f blue-grey darken-3");
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
		$(button).addClass("btn #37474f blue-grey darken-3");
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
			$(button).addClass("btn #37474f blue-grey darken-3");
		}
}


// function to display question, once answered hide it

var showHideQuestion = function() {

	$("#questionsDiv1, #answersDiv1, #questionsDiv2, #answersDiv2, #questionsDiv3, #answersDiv3").hide();
	
	// show question 2 / hide others
	$("#imgDumbledore").show();
	$("#answersDiv").on('click', function () {
		$("#questionsDiv,#imgDumbledore").delay(1000).fadeOut(1300);
		$("#questionsDiv1, #answersDiv1, #hogwartsGhostImg").delay(2000).fadeIn(1700)
	});

	// quesiton 3
	$("#answersDiv1").on('click', function () {
		$("#questionsDiv1, #hogwartsGhostImg ").delay(1000).fadeOut(1300);
		$("#questionsDiv2, #answersDiv2, #darkArts").delay(2000).fadeIn(1700)
	});

	// question 4
	$("#answersDiv2").on('click', function () {
		$("#questionsDiv2, #darkArts").delay(1000).fadeOut(1300);
		$("#questionsDiv3, #answersDiv3, #hogwartsTravel").delay(2000).fadeIn(1700)
	});

	$("#answersDiv3").on('click', function () {
		$("#questionsDiv3, hogwartsTravel").delay(1000).fadeOut(1300);
	});
}


// playing game

function gameStart() {

correctAnswers = 0;
wrongAnswers = 0;

	$("#winOrLoseMessage").hide()

	var countDown = function() {
	$('.seconds').each(function() {
		var count = parseInt($(this).html());
		if (count !== 0) {
			$(this).html(count -1);
		} 
		if (count == 0) {
			$("#winOrLoseMessage").fadeIn(1000);
			$(".timer").hide()
			$(".questionsAndAnswers").hide();
			// $(".winsAndLosses").show()
		} 

		else if ($("#answersDiv3").on('click', 'button', function(){
			$("#TriviaFinsihed").fadeIn(1000);
			$(".timer").hide()
			$(".questionsAndAnswers").hide();
		})) {
		}

		// if (userChoice = questionsAndAnswers[3].correctAnswer || userChoice != questionsAndAnswers[3].correctAnswer) {

			
		// 	$("#winOrLoseMessage"
	});
};
setInterval(countDown, 1000)



$('#answersDiv').on('click', 'button', function(){
	$("#imgDumbledore").show()
	userChoice = $(this).data("id");
	questionsAndAnswers[0].correctAnswer;
	if(userChoice != questionsAndAnswers[0].correctAnswer){

		var textWrongAnswer = $('#answersDiv').text("Wrong Answer!")
		textWrongAnswer.delay(1000).fadeOut(1300)

		wrongAnswers++;

		$('#wrongAnswers').text(wrongAnswers)
	} else {
		(userChoice = questionsAndAnswers[0].correctAnswer);
		var textCorrectAnswer = $('#answersDiv').text("Correct Answer")
		textCorrectAnswer.delay(1000).fadeOut(1300)


		correctAnswers++
		$('#correctAnswers').text(correctAnswers)

	}

});

// answer 2
$('#answersDiv1').on('click', 'button', function(){
	userChoice = $(this).data("id");
	questionsAndAnswers[1].correctAnswer;
	if(userChoice != questionsAndAnswers[1].correctAnswer){

		var textWrongAnswer1 = $('#answersDiv1').text("Wrong Answer!")
		textWrongAnswer1.delay(1000).fadeOut(1300)

		wrongAnswers++;
		$('#wrongAnswers').text(wrongAnswers)
	} else {
		(userChoice = questionsAndAnswers[1].correctAnswer);

		var textCorrectAnswer1 = $('#answersDiv1').text("Correct Answer")
		textCorrectAnswer1.delay(1000).fadeOut(1300)


		correctAnswers++
		$('#correctAnswers').text(correctAnswers)

	}

});

// answer 3

$('#answersDiv2').on('click', 'button', function(){
	userChoice = $(this).data("id");
	questionsAndAnswers[2].correctAnswer;
	if(userChoice != questionsAndAnswers[2].correctAnswer){

		var textWrongAnswer2 = $('#answersDiv2').text("Wrong Answer!")
		textWrongAnswer2.delay(1000).fadeOut(1300)




		wrongAnswers++;
		$('#wrongAnswers').text(wrongAnswers)
	} else {
		(userChoice = questionsAndAnswers[2].correctAnswer);
		var textCorrectAnswer2 = $('#answersDiv2').text("Correct Answer")
		textCorrectAnswer2.delay(1000).fadeOut(1300)

		correctAnswers++
		$('#correctAnswers').text(correctAnswers)

	}

});


// answer 4

$('#answersDiv3').on('click', 'button', function(){
	userChoice = $(this).data("id");
	questionsAndAnswers[3].correctAnswer;
	if(userChoice != questionsAndAnswers[3].correctAnswer){
		var textWrongAnswer3 = $('#answersDiv3').text("Wrong Answer!")
		textWrongAnswer3.delay(1000).fadeOut(1300)
		wrongAnswers++;
		$('#wrongAnswers').text(wrongAnswers)
	} else {
		(userChoice = questionsAndAnswers[3].correctAnswer);
		var textCorrectAnswer3 = $('#answersDiv3').text("Correct Answer")
		textCorrectAnswer3.delay(1000).fadeOut(1300)

		correctAnswers++
		$('#correctAnswers').text(correctAnswers)

	}

});


}


var buttonStart = function() {
	$("img").hide()
	$("#winOrLoseMessage").hide()
	$("#TriviaFinsihed").hide()
	if ($("#startButton").on('click', function() {
		$("#startButton").fadeOut()
		showHideQuestion()
		showTrivia() 
		gameStart()
	}));
	


};


buttonStart()

// showTrivia() 
// gameStart()
// showHideQuestion()





