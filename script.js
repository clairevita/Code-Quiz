//Timer
//Local Storage
//Quiz
//Dom population with formatted questions and answers
//Decreases time by 15 seconds on incorrect answer
//Time stops and is set as your scpre
//View Highscores
    //Highscores is a separate page
//Small notification that lets you know if you were right or wrong. Shows briefly.

//These identify the start button and the area invisible area that the questions will be placed.
let startButton = document.getElementById("startButton");
let quizZone = document.getElementById("quizZone");

//This click event removes the start button and replaces it with the quiz zone.
startButton.addEventListener("click", function() {
  startButton.className += " invisible";
  quizZone.className -= "invisible";
});
