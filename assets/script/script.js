var timer = 0;
var interval;
var document;
var display = document.querySelector('#time');
var questionElement = document.querySelector('#question');
var buttonA = document.querySelector('#A');
var buttonB = document.querySelector('#B');
var buttonC = document.querySelector('#C');
var buttonD = document.querySelector('#D');
var index = 0;
var score = 0;
var tryagain;
var saveyourscore;
var scoreList;
const enterNameForm = document.getElementById("enterName-form");
const enterNameInput = document.getElementById("enterName-input");
const enterNameSubmit = document.getElementById("enterName-submit");
const enterNames = document.getElementById("enterNames");

document.querySelector(myQuestions);

var newUser = {
	user: enterNameInput.value,
	score: score
}

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
	display.textContent = timer;
	if (timer <= 0) {
		gameOver();
	}
}

function CountDownTimer() {
	timer = 60;
	interval = setInterval(function() { 
		timer--;
		displayTimer();
	},1000);

}

function displayQuestion() {
	questionElement.textContent = myQuestions[index].question;
	buttonA.textContent = myQuestions[index].answers.a;
	buttonB.textContent = myQuestions[index].answers.b;
	buttonC.textContent = myQuestions[index].answers.c;
	buttonD.textContent = myQuestions[index].answers.d;

}


function answer(event) {
	if (
	   event.target.getAttribute('data-answer') === myQuestions[index].correctAnswer
 ) {
 		score += 1;
 		console.log (score);
 		nextQuestion();
		message.textContent ='Good job!';
 } else {
 		timer -= 5;
		message.textContent ='Wrong answer!';
 		nextQuestion();

 }
 } 

function nextQuestion() {
	console.log('thisworks');
	if (index === myQuestions.length - 1) {
		gameOver();
	} else {
		index ++;
		displayQuestion();
	}
	console.log(index);
}



function gameOver(event) {
	clearInterval(interval);
	var messageElement = document.querySelector('#message');
	messageElement.innerHTML = 'Time is up!' + " " + "Your score:" + " " + score;
	document.getElementById("quiz").style.display = "none";
	document.getElementById("saveyourscore").style.display = "block";

}

function showScore() {
	var x = document.getElementById("enterName-form");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

function scoreList() {
	document.getElementById("scoreList").style.display = "block";
	document.getElementById("showScore").style.display = "block";

}

function tryagain() {
	window.location.refresh();
  }

let enterNamesStorage = localStorage.getItem("enterNames")? JSON.parse(localStorage.getItem("enterNames"))
  : [];

  enterNameForm.addEventListener("submit", (e) => {
	e.preventDefault();
	enterNamesStorage.push(newUser);
	localStorage.setItem("enterNames", JSON.stringify(enterNamesStorage));
	listBuilder(enterNameInput.value);
	enterNameInput.value = "";
  });

  const listBuilder = (text) => {
	const enterName = document.createElement("li");
	enterName.innerHTML = text + " " + score +  " " +' <button onclick="deleteenterName(this)">x</button>';
	enterNames.appendChild(enterName);
  };

  function getenterNames(event) {
	if (enterNames !=="") {
		enterNames();
	} 
}

const deleteenterName = (btn) => {
	let el = btn.parentNode;
	const index = [...el.parentElement.children].indexOf(el);
	enterNamesStorage.splice(index, 1);
	localStorage.setItem("enterNames", JSON.stringify(enterNamesStorage));
	el.remove();
  };

  
window.onload = function () {

//         timer = new CountDownTimer(59),
//         timeObj = CountDownTimer.parse(1);

//     format(timeObj.minutes, timeObj.seconds);
    
//   timer.onTick(format); 
    
	buttonA.addEventListener('click', function (event){
		answer(event);
	} );     
	buttonB.addEventListener('click', function (event){
		answer(event);
	} );   
	buttonC.addEventListener('click', function (event){
		answer(event);
	} );   
	buttonD.addEventListener('click', function (event){
		answer(event);
	} );   
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
