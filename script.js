//Timer
//Local Storage
//Quiz
//Dom population with formatted questions and answers
//Decreases time by 15 seconds on incorrect answer
//Time stops and is set as your scpre
//View Highscores
    //Highscores is a separate page
//Small notification that lets you know if you were right or wrong. Shows briefly.

//This identifies the body of the document.
let pageBody = document.getElementById("pageBody");
//These identify the start button and the area invisible area that the questions will be placed.
let startButton = document.getElementById("startButton");
let quizZone = document.getElementById("quizZone");
//-----------------------------------------------------------------------------------------------
//This identifies the quiz timer in the document.
let quizTimer = document.getElementById("quizTimer");
let timeRemain = 75;
quizTimer.textContent += timeRemain;
//This variable simplifies our interaction with the DOM for every second change.
let changeTimer = parseInt(quizTimer.textContent);
//Once the user sets this variable to TRUE, the countdown timer will start.
let timerOn = false;
//Global timer variable so it can be stopped
let timerVar;
//-----------------------------------------------------------------------------------------------
//This will be the player's inputted answer.
let selectedAnswer = 0;
//This is the correct answer.
let correctAnswer = 0;
//Whenever a user submits a correct answer, this variable increases.
let playerScore = 0;
let scoreDisplay = document.getElementById("playerScore");
//This is where the new question will be appended.
let activeQuestion = document.getElementById("questionZone");
//This counts to see how many questions have been answered.
let questionCounter = 15;
//These are the answer buttons where new text will be appended.
let activeA = document.getElementById("answerA");
let activeB = document.getElementById("answerB");
let activeC = document.getElementById("answerC");
let activeD = document.getElementById("answerD");
activeA.addEventListener("click", submitA);
activeB.addEventListener("click", submitB);
activeC.addEventListener("click", submitC);
activeD.addEventListener("click", submitD);
//-----------------------------------------------------------------------------------------------
//This variable will be the player's score.
let playerRecording = {score:"", time:"", initials:""};
//This identifies the modal element where the user can view and submit their score.
let scoreEntry = document.getElementById("scoreEntry");
let scoreQuality = document.getElementById("scoreQuality");
let scoreView = document.getElementById("finalScore");
let timeView = document.getElementById("finalTime");
//-----------------------------------------------------------------------------------------------


//This click event removes the start button and replaces it with the quiz zone.
startButton.addEventListener("click", function() {
  startButton.className += " invisible";
  quizZone.className -= "invisible";
  timerOn = true;
  startTimer();
});

//This is the countdown function called by the startButton. Once the time is 0, the text changes to "Time's Up" and shows the results.
function startTimer() {
  if (timerOn = true){
     timerVar = setInterval(countdownTimer, 1000);
      function countdownTimer (){
        timeRemain--;
        quizTimer.textContent = "Time: " + timeRemain;
        if (timeRemain <= 0){
          timerOn = false;
          //Once the timer hits zero, it lists the following string
          quizTimer.textContent = "Time's Up!";  
          //Once the timer runs out the quiz immediately becomes invisible.
          quizZone.className += " invisible";
          clearInterval(timerVar);
          setTimeout(function(){showScore();}, 1000);
        }
      }
    }
  }

//When a player selects an answer, this is the algorithm that checks if it was correct or not.
function submitA(){
  selectedAnswer = 1;
  checkAnswer();
}
function submitB(){
  selectedAnswer = 2;
  checkAnswer();
}
function submitC(){
  selectedAnswer = 3;
  checkAnswer();
}
function submitD(){
  selectedAnswer = 4;
  checkAnswer();
}

//This checks the answer that they submitted. If it is true it progresses. If it is false it deducts 15 seconds from their time.
function checkAnswer(){
  if (selectedAnswer == correctAnswer && questionCounter != 0){
    playerScore = playerScore + 50;
    scoreDisplay.textContent = playerScore;
    correctAnswer = Math.ceil(Math.random()*5);
    questionCounter = questionCounter - 1;

  } else if (selectedAnswer != correctAnswer && questionCounter != 0){
    timeRemain = timeRemain - 15;
    correctAnswer = Math.ceil(Math.random()*5);
    questionCounter = questionCounter - 1;

  } else if (selectedAnswer == correctAnswer && questionCounter == 0){
    playerScore = playerScore + 50;
    timerOn = false;
    console.log(timerOn);
    quizTimer.textContent = "Time: " + timeRemain;
    quizZone.className += " invisible";
    clearInterval(timerVar);
    setTimeout(function(){showScore();}, 1000);
  } else {
    timerOn = false;
    console.log(timerOn);
    quizTimer.textContent = "Time: " + timeRemain;
    quizZone.className += " invisible";
    clearInterval(timerVar);
    setTimeout(function(){showScore();}, 1000);
  }
  } 

//This opens up the score display and entry field. The most intuitive way to achieve this is with JQuery.
function showScore(){
  if(playerScore>=50){
    scoreQuality.textContent = "Nice Score!"
  } else{
    scoreQuality.textContent = "Don't Give Up"
  }
  if (timeRemain < 0){
    timeRemain = 0;
  }
  $('#scoreEntry').modal('toggle');
  scoreView.textContent = playerScore;
  timeView.textContent = timeRemain;
}







