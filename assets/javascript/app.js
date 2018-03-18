
// notes for tomorrow

// create a start button
		// this means you need to hide everything at the beginning, then show everything one at a time

// addd pictures

// add display game complete;





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
		$(button).addClass("waves-effect waves-light btn");
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


// function to display question, once answered hide it

var showHideQuestion = function() {
	$("#questionsDiv1, #answersDiv1, #questionsDiv2, #answersDiv2, #questionsDiv3, #answersDiv3").hide();
	
	// show question 2 / hide others
	$("#answersDiv").on('click', function () {
	$("#questionsDiv").delay(1200).fadeOut(1500);
	$("#questionsDiv1, #answersDiv1").delay(2000).fadeIn(1700)
	});

	// quesiton 3

	$("#answersDiv1").on('click', function () {
	$("#questionsDiv1").fadeOut(1500);
	$("#questionsDiv2, #answersDiv2").fadeIn()
	});


	// question 4
	$("#answersDiv2").on('click', function () {
	$("#questionsDiv2").fadeOut(1500);
	$("#questionsDiv3, #answersDiv3").fadeIn()
	});

$("#answersDiv3").on('click', function () {
	$("#questionsDiv3").fadeOut(1500);
	// $("#questionsDiv4, #answersDiv4").show()
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
			$("#WinOrLoseMessage").text("You lose")
			// alert("You Lost!")
			clearInterval(countDown);
			$(".questionsAndAnswers").hide();
		}
	});
};
setInterval(countDown, 1000)



$('#answersDiv').on('click', 'button', function(){
	$("#imgDumbledore").show()
	userChoice = $(this).data("id");
	questionsAndAnswers[0].correctAnswer;
	if(userChoice != questionsAndAnswers[0].correctAnswer){

		var textWrongAnswer = $('#answersDiv').text("Wrong Answer!")
		textWrongAnswer.delay(1500).fadeOut(1500)

		wrongAnswers++;

		$('#wrongAnswers').text(wrongAnswers)
	} else {
		(userChoice = questionsAndAnswers[0].correctAnswer);


		var textCorrectAnswer = $('#answersDiv').text("Correct Answer")
		textCorrectAnswer.delay(1500).fadeOut(1500)

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
		textWrongAnswer1.delay(1700).hide(1500)

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



var buttonStart = function() {

	if ($("#startButton").on('click', function() {
		$("#startButton").fadeOut()
		showTrivia() 
		gameStart()
		showHideQuestion()




	}));
	


		

	



};


buttonStart()

// showTrivia() 
// gameStart()
// showHideQuestion()





