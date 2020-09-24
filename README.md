# Code-Quiz

## About
This Code Quiz site was inspired by the Bootstrap modal feature. It's animated transition, shadowed backdrop, and lightweight design make it feel incredibly user friendly. As such, this Code Quiz takes place entirely on one page, with the modal elements acting as a substitute for any secondary or tertiary webpages. I want to keep my user on the same page and retesting so that they can achieve the best possible score they can get. 

## Start Screen
On load the page consists of a nav bar and green start button. The Navbar at the top of the page consists of a static Timer, reading "Timer: 75", and a "View Highscores!". 

When clicking the "View Highscores" button, it opens up a blank modal. 

## Quiz
After tapping the green button, the player is presented with a question Jumbotron element with four answers. The timer, triggered by the green buttons, begins to count down from 75. 

The one correct answer is located in the list randomly. When it is selected, the player is progressed to the next question. Should they answer incorrectly, they are deducted 15 seconds. I chose for the location to be randomly placed to ensure that it is required that each answer is read. Since this is a code quiz, the user's answer should be logical, not sequentially memorized.

After the correct button is pressed, the player's score is increased by 50 points, as labelled by the text element at the bottom of the screen. In total the `questionList` contains 15 questions. Once the 15th question is answered OR if the timer runs out, a modal prompt appears.

## Score Submission
After the player's game has been completed, a new modal is toggled on. The only way to achieve a modal activation without a front-end user interaction is through the following JQuery function: `$('#scoreEntry').modal('toggle');`. Although this is not the JQuery chapter, I defend my use of this statement as it is the most intuitive way to achieve the problem I was trying to solve. 

The modal that appears will either say `Room for Improvement! Keep Trying`, if they did not get every question correct or `Perfect Score` if they answered all 15 correctly. 

Underneath is listed their final score and time of completion. Below this is an input field with a prepend element stating `Initials`. 

This is an optional sequence. If the user wishes, they can tap the Try Again button to return to the main menu, erasing their score. If they tap the submit button, their score will be locally stored for future reference.

## High Scores
After they locally stored their score and intials, when they return to the View Highscores! button, universally accessible in the Nav, they will see their name and initials listed on this screen. Should they navigate away from this modal in any way, the data will persist. 


