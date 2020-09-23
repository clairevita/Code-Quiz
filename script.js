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
let correctAnswer = Math.ceil(Math.random()*4);
//Whenever a user submits a correct answer, this variable increases.
let playerScore = 0;
let scoreDisplay = document.getElementById("playerScore");
//This is where the new question will be appended.
let activeQuestion = document.getElementById("questionZone");
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
//These are all of our questions
let questionList = [
  {Question: "1", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "2", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "3", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "4", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "5", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "6", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "7", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "8", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "9", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "10", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "11", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "12", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "13", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "14", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"},
  {Question: "15", A: "Correct", B: "Wrong", C: "Wrong", D: "Wrong"}      
];
//This counts to see how many questions have been answered.
let questionCounter = 0;
//This click event removes the start button and replaces it with the quiz zone.
startButton.addEventListener("click", function() {
  startButton.className += " invisible";
  quizZone.className -= "invisible";
  timerOn = true;
  startTimer();
  addText();
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

//Appends the question text. Randomly appends the answer text to the buttons.

function addText(){
  activeQuestion.textContent = questionList[questionCounter].Question;
  if (correctAnswer != 1){
    //If the correct answer location isn't location A, then it switches location with the randomly selected location.
    let jumblerArr = [questionList[questionCounter].A, questionList[questionCounter].B, questionList[questionCounter].C, questionList[questionCounter].D]
    //Swaps ActiveA.textcontent with an incorrect answer.
    let temp = jumblerArr[0];
    jumblerArr[0] = jumblerArr[correctAnswer-1];
    jumblerArr[correctAnswer-1] = temp;

    activeA.textContent = jumblerArr[0];
    activeB.textContent = jumblerArr[1];
    activeC.textContent = jumblerArr[2];
    activeD.textContent = jumblerArr[3];
  }else{
    activeA.textContent = questionList[questionCounter].A;
    activeB.textContent = questionList[questionCounter].B;
    activeC.textContent = questionList[questionCounter].C;
    activeD.textContent = questionList[questionCounter].D;
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
  if (selectedAnswer == correctAnswer && questionCounter != 14){
    playerScore = playerScore + 50;
    scoreDisplay.textContent = playerScore;
    correctAnswer = Math.ceil(Math.random()*4);
    questionCounter++;
    addText(); 

  } else if (selectedAnswer != correctAnswer && questionCounter != 14){
    timeRemain = timeRemain - 15;
    correctAnswer = Math.ceil(Math.random()*4);
    questionCounter++;
    addText();

  } else if (selectedAnswer == correctAnswer && questionCounter == 14){
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
  if(playerScore == 750){
    scoreQuality.textContent = "Perfect Score!"
  } else{
    scoreQuality.textContent = "Room for Improvement! Keep Trying!"
  }
  if (timeRemain < 0){
    timeRemain = 0;
  }
  $('#scoreEntry').modal('toggle');
  scoreView.textContent = playerScore;
  timeView.textContent = timeRemain;
}







