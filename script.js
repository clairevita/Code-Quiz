//This identifies the body of the document.
let pageBody = document.getElementById("pageBody");
//These identify the start button and the area invisible area that the questions will be placed.
let startButton = document.getElementById("startButton");
let quizZone = document.getElementById("quizZone");
let scoresButton = document.getElementById("highscoresButton");
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
let correctAnswer = Math.ceil(Math.random() * 4);
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
//This identifies the modal element where the user can view and submit their score.
let scoreEntry = document.getElementById("scoreEntry");
let scoreQuality = document.getElementById("scoreQuality");
let scoreView = document.getElementById("finalScore");
let timeView = document.getElementById("finalTime");
//-----------------------------------------------------------------------------------------------
//These are all of our questions
let questionList = [{
        Question: "Inside which HTML element do we put the JavaScript?",
        A: "<script>",
        B: "<scripting>",
        C: "<js>",
        D: "<javascript>"
    },
    {
        Question: "Where is the correct place to insert a JavaScript?",
        A: "Both the <head> section and the <body> section are correct  ",
        B: "The <head> section ",
        C: "The <body> section",
        D: "In a <div> element"
    },
    {
        Question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        A: "<script src=\"xxx.js\">",
        B: "<script name=\"xxx.js\">",
        C: "<script href=\"xxx.js\">",
        D: "<a src=\"xxx.js\">"
    },
    {
        Question: "How do you create a function in JavaScript?",
        A: "function myFunction()",
        B: "function:myFunction()",
        C: "function = myFunction()",
        D: "<function> myFunction() </function>"
    },
    {
        Question: "How do you call a function named \"myFunction\"?",
        A: "myFunction()",
        B: "call myFunction()  ",
        C: "call function myFunction()",
        D: "function myFunction;"
    },
    {
        Question: "How to write an IF statement in JavaScript?",
        A: "if (i == 5)",
        B: "if i = 5",
        C: "if i = 5 then",
        D: "if i == 5 then"
    },
    {
        Question: "How does a FOR loop start?",
        A: "for (i = 0; i <= 5; i++)",
        B: "for i = 1 to 5",
        C: "for (i = 0; i <= 5)",
        D: "for (i <= 5; i++)"
    },
    {
        Question: "How does a WHILE loop start?",
        A: "while (i <= 10)",
        B: "while i = 1 to 10",
        C: "while (i <= 10; i++)",
        D: "while i()(of i>10);"
    },
    {
        Question: "How can you add a comment in a JavaScript?",
        A: "//This is a comment",
        B: "<!--This is a comment-->",
        C: "'This is a comment",
        D: "var comment = this is a comment;"
    },
    {
        Question: "How do you round the number 7.25, to the nearest integer?",
        A: "Math.floor(7.25)  ",
        B: "rnd(7.25)",
        C: "round(7.25)",
        D: "Math.rnd(7.25)"
    },
    {
        Question: "How do you find the number with the highest value of x and y?",
        A: "Math.max(x, y) ",
        B: "ceil(x, y)",
        C: "Math.ceil(x, y)",
        D: "top(x, y)"
    },
    {
        Question: "Which operator is used to assign a value to a variable?",
        A: "=",
        B: "-",
        C: "x",
        D: "->"
    },
    {
        Question: "What will the following code return: Boolean(10 > 9)",
        A: "true",
        B: "false",
        C: "NaN",
        D: "undefined"
    },
    {
        Question: "How to write an IF statement for executing some code if \"i\" is NOT equal to 5?",
        A: "if (i != 5)",
        B: "if i =! 5 then",
        C: "if i <> 5",
        D: "if (i <> 5)"
    },
    {
        Question: "How do you write \"Hello World\" in an alert box?",
        A: "alert(\"Hello World\");",
        B: "console.log(\"Hello World\");",
        C: "msg(\"Hello World\");",
        D: "email:(\"Hello World\");"
    }
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

//This click event populates the modal with any locally stored highscores.
scoresButton.addEventListener("click", function() {

    displayScores();

});

//This is the countdown function called by the startButton. Once the time is 0, the text changes to "Time's Up" and shows the results.
function startTimer() {
    if (timerOn = true) {
        timerVar = setInterval(countdownTimer, 1000);

        function countdownTimer() {
            timeRemain--;
            quizTimer.textContent = "Time: " + timeRemain;
            if (timeRemain <= 0) {
                timerOn = false;
                //Once the timer hits zero, it lists the following string
                quizTimer.textContent = "Time's Up!";
                //Once the timer runs out the quiz immediately becomes invisible.
                quizZone.className += " invisible";
                clearInterval(timerVar);
                setTimeout(function() {
                    showScore();
                }, 1000);
            }
        }
    }
}

//Appends the question text. Randomly appends the answer text to the buttons.
function addText() {
    activeQuestion.textContent = questionList[questionCounter].Question;
    if (correctAnswer != 1) {
        //If the correct answer location isn't location A, then it switches location with the randomly selected location.
        let jumblerArr = [questionList[questionCounter].A, questionList[questionCounter].B, questionList[questionCounter].C, questionList[questionCounter].D]
        //Swaps ActiveA.textcontent with an incorrect answer.
        let temp = jumblerArr[0];
        jumblerArr[0] = jumblerArr[correctAnswer - 1];
        jumblerArr[correctAnswer - 1] = temp;
        //Places the randomized string values into the button text content
        activeA.textContent = jumblerArr[0];
        activeB.textContent = jumblerArr[1];
        activeC.textContent = jumblerArr[2];
        activeD.textContent = jumblerArr[3];
    } else {
        //If the random correct answer placement yields the same location, the questions are added to the button text values with no variations
        activeA.textContent = questionList[questionCounter].A;
        activeB.textContent = questionList[questionCounter].B;
        activeC.textContent = questionList[questionCounter].C;
        activeD.textContent = questionList[questionCounter].D;
    }
}

//When a player selects an answer, this is the algorithm that checks if it was correct or not.
function submitA() {
    selectedAnswer = 1;
    checkAnswer();
}

function submitB() {
    selectedAnswer = 2;
    checkAnswer();
}

function submitC() {
    selectedAnswer = 3;
    checkAnswer();
}

function submitD() {
    selectedAnswer = 4;
    checkAnswer();
}

//This checks the answer that they submitted. If it is true it progresses. If it is false it deducts 15 seconds from their time.
function checkAnswer() {
    if (selectedAnswer == correctAnswer && questionCounter != 14) {
        playerScore = playerScore + 50;
        scoreDisplay.textContent = playerScore;
        correctAnswer = Math.ceil(Math.random() * 4);
        questionCounter++;
        addText();

    } else if (selectedAnswer != correctAnswer && questionCounter != 14) {
        timeRemain = timeRemain - 15;
        correctAnswer = Math.ceil(Math.random() * 4);
        questionCounter++;
        addText();

    } else if (selectedAnswer == correctAnswer && questionCounter == 14) {
        playerScore = playerScore + 50;
        timerOn = false;
        console.log(timerOn);
        quizTimer.textContent = "Time: " + timeRemain;
        quizZone.className += " invisible";
        clearInterval(timerVar);
        setTimeout(function() {
            showScore();
        }, 1000);
    } else {
        timerOn = false;
        console.log(timerOn);
        quizTimer.textContent = "Time: " + timeRemain;
        quizZone.className += " invisible";
        clearInterval(timerVar);
        setTimeout(function() {
            showScore();
        }, 1000);

    }
}

//This opens up the score display and entry field. The most intuitive way to achieve this is with JQuery.
function showScore() {
    if (playerScore == 750) {
        scoreQuality.textContent = "Perfect Score!"
    } else {
        scoreQuality.textContent = "Room for Improvement! Keep Trying!"
    }
    if (timeRemain < 0) {
        timeRemain = 0;
    }
    $('#scoreEntry').modal('toggle');
    scoreView.textContent = playerScore + " Points";
    timeView.textContent = timeRemain + " Seconds";
}
let closeButton = document.getElementById("closeScores");
let submitButton = document.getElementById("submitScore");
let resetButton = document.getElementById("resetPage");

//This click event resets all values and states of the page to their start values
resetButton.addEventListener("click", function() {
    resetPage();
});

//This uploads the player's score to localStorage, places them in the highscores, then resets the page.
submitButton.addEventListener("click", function() {
    let initials = document.getElementById("initials").value;
    finalScore = {
        name: initials,
        score: playerScore.toString()
    };
    let uploadedScores = JSON.parse(localStorage.getItem("scores"));
    if (uploadedScores == null) {
        uploadedScores = [];
    }
    uploadedScores.push(finalScore);
    uploadedScores.sort(function compare(a, b) {
        return parseInt(b.score) - parseInt(a.score);
    });
    localStorage.setItem("scores", JSON.stringify(uploadedScores));
    displayScores();
    resetPage();
});


//Whenever this function is called, it loads the scores onto the leaderboards
function displayScores() {
    let scoreList = document.getElementById("scoreView");
    let initialList = document.getElementById("initialView");
    let highscorePull = JSON.parse(localStorage.getItem("scores"));
    if (highscorePull == null) {
        highscorePull = [];
    }
    console.log(highscorePull);

    for (let i = 0; i < highscorePull.length; i++) {
        let namePull = highscorePull[i].name;
        let initialLI = document.createElement("li");
        initialLI.innerText = namePull;
        initialList.appendChild(initialLI);
    }
    for (let i = 0; i < highscorePull.length; i++) {
        let scorePull = highscorePull[i].score;
        let scoreLI = document.createElement("li");
        scoreLI.innerText = scorePull;
        scoreList.appendChild(scoreLI);
    }
}

//As a bug fix, whenever the close button is clicked on the highscores modal, it wipes the data from the HTML.
closeButton.addEventListener("click", function() {
    let scoreList = document.getElementById("scoreView");
    let initialList = document.getElementById("initialView");
    scoreList.innerHTML = "";
    initialList.innerHTML = "";
});

//This function contains all resting values. When called it resets the DOM to it's starting values.
function resetPage() {
    //Clears all question history
    selectedAnswer = 0;
    questionCounter = 0;
    //Resets the player score and the score display
    playerScore = 0;
    scoreDisplay.textContent = playerScore;
    //Resets the timer elements
    timeRemain = 75;
    quizTimer.textContent = "Time: " + timeRemain;
    //Resets the start button
    startButton.className = "btn btn-success btn-lg ";
}