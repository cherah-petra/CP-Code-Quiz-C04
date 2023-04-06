var timer = 0
var interval
var display = document.querySelector('#time')
var questionElement = document.querySelector('#question')
var buttonA = document.querySelector('#A')
var buttonB = document.querySelector('#B')
var buttonC = document.querySelector('#C')
var buttonD = document.querySelector('#D')
var index = 0
var score = 0

document.querySelector(myQuestions)

//* Quiz Questions*//


var myQuestions = [
	{
		question: "JavaScript is a ___ -side programming language.",
		answers: {
			a: 'server',
			b: 'client',
			c: 'server and client',
			d: 'none'
		},
		correctAnswer: 'c'
	},
	{
		question: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
		answers: {
			a: 'alertBox(“Hello DataFlair!”);',
			b: ' alert(Hello DataFlair!);',
			c: 'msgAlert(“Hello DataFlair!”);',
			d: 'alert(“Hello DataFlair!”);'

		},
		correctAnswer: 'd'
	},

	{
		question: "Which JavaScript label catches all the values, except for the ones specified?",
		answers: {
			a: 'Catch',
			b: 'label',
			c: 'try',
			d: 'default'

		},
		correctAnswer: 'd'
	},

	{
		question: "How do you find the minimum of x and y using JavaScript?",
		answers: {
			a: 'min(x,y);',
			b: 'Math.min(x,y)',
			c: 'Math.min(xy)',
			d: 'min(xy);'

		},
		correctAnswer: 'b'
	}
];


//* Timer *//

function displayTimer() {
	display.textContent = timer
	if (timer <= 0) {
		clearInterval(interval)
	}
}

function CountDownTimer() {
	timer = 60
	interval = setInterval(function() { 
		timer--
		displayTimer()
	},1000)
}

function displayQuestion() {
	questionElement.textContent = myQuestions[index].question
	buttonA.textContent = myQuestions[index].answers.a
	buttonB.textContent = myQuestions[index].answers.b
	buttonC.textContent = myQuestions[index].answers.c
	buttonD.textContent = myQuestions[index].answers.d

}

function answer(event) {
	if (event.target.answer === myQuestions[index].correctAnswer){
		score ++
		nextQuestion()
	} else { 
		timer -= 5
		nextQuestion()
	}
}
function nextQuestion() {
	console.log('thisworks')
	index ++
	displayQuestion()
}

window.onload = function () {

//         timer = new CountDownTimer(59),
//         timeObj = CountDownTimer.parse(1);

//     format(timeObj.minutes, timeObj.seconds);
    
//   timer.onTick(format); 
    
	buttonA.addEventListener('click', function (event){
		answer(event)
	} )     
	buttonB.addEventListener('click', function (event){
		answer(event)
	} )   
	buttonC.addEventListener('click', function (event){
		answer(event)
	} )   
	buttonD.addEventListener('click', function (event){
		answer(event)
	} )   
	document.querySelector('button').addEventListener('click', function () {
        CountDownTimer();
		displayQuestion();
    });
    

    function format(minutes, seconds) {
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ':' + seconds;
    }
};

//* Save Session Data *//