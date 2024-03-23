"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Bernice Templeman
      Date: 02/24/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 90;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;

// Declare the node list for questions
let questionList = document.querySelectorAll("div#quiz input");

// Add an onclick event handler to the startQuiz object, running an anonymous function
// that sets the class attribute of the overlay object to “showquiz”
// storing the id of the timed command in the global timeID variable
// and repeats the countdown() function every 1 second  (every 1000 milliseconds),
//Carey, Patrick; Vodnik, Sasha. JavaScript for Web Warriors (p. 189). Course Technology Inc. Kindle Edition.
startQuiz.onclick = function () {
  overlay.className = "showquiz";
  timeID = window.setInterval(countdown, 1000);
};

/*------------- Function to update the quiz clock. ----------------*/
function countdown() {
  if (timeLeft === 0) {
    // a. Use the clearInterval() method to cancel the timed command with the variable timeID.
    window.clearInterval(timeID);

    //  b. Declare a variable named totalCorrect and set it equal to the value returned by the checkAnswers() function.
    let totalCorrect = checkAnswers();

    // c. If totalCorrect is equal to the length of the correctAnswers array
    // then display an alert window  congratulating the student on getting 100%
    // Otherwise, Display an alert window indicating the number of incorrect answers out of the total number of questions on the quiz
    // (i) Display an alert window  indicating the number of incorrect answers out of the total number of questions on the quiz,
    // (ii) change the  value of the timeLeft variable to quizTime,
    // (iii) set quizClock.value to the value of the timeLeft  variable, and
    // (iv) change the class attribute of the overlay object to “hidequiz”.
    if (totalCorrect === correctAnswers.length) {
      window.alert("Congratulations on getting 100%!");
    } else {
      window.alert(
        "You have " +
          (correctAnswers.length - totalCorrect) +
          " incorrect answers out of " +
          correctAnswers.length
      );
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.className = "hidequiz";
    }
  } else {
    // Otherwise, timeLeft variable is not equal 0
    // a. Decrease the value of timeLeft by 1.
    // b. Set quizcock.value to the value of the timeLeft variable.
    timeLeft--;
    quizClock.value = timeLeft;
  }
}

/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
  let correctCount = 0;

  for (let i = 0; i < questionList.length; i++) {
    if (questionList[i].value === correctAnswers[i]) {
      correctCount++;
      questionList[i].className = "";
    } else {
      questionList[i].className = "wronganswer";
    }
  }
  return correctCount;
}
