"use strict";
/*    JavaScript 7th Edition
      Chapter 7
      Project 07-01

      Project to validate a form used for setting up a new account
      Author: Bernice Templeman
      Date: 03/05/2024

      Filename: project07-01.js
*/

let signupForm = document.getElementById("signup");

signupForm.addEventListener("submit", function (e) {
  let pwd = document.getElementById("pwd").value;
  let feedback = document.getElementById("feedback");

  // Add the e.preventDefault() command to prevent the browser from responding to the submit event.
  e.preventDefault();

  // Create the following variables containing regular expressions:
  // Create the regex1 variable containing a
  // regular expression literal with a character class that matches any uppercase letter A through Z.
  let regex1 = /[A-Z]/;

  // Create the regex2 variable containing a regular expression literal that matches any single digit.
  let regex2 = /[\d]/;

  // Create the regex3 variable containing a regular expression with a character class containing the symbols  !$#%. (Hint: you will have to use \$ for the $symbol.)
  let regex3 = /[!\$#%]/;

  // Create an if else statement that with the following conditions and outcomes:
  // If the length of pwd is less than 8,
  if (pwd.length < 8) {
    // set the text content of the feedback object to “Your password must be at least 8 characters.”
    feedback.textContent = "Your password must be at least 8 characters.";
  } else if (!regex1.test(pwd)) {
    // Else if the test() method with the regex1 regular expression applied to the pwd variable returns a false value,
    // set the text content of the feedback object to "Your password must include an uppercase letter."
    feedback.textContent = "Your password must include an uppercase letter.";
  } else if (!regex2.test(pwd)) {
    // Else if the test() method with the regex2 regular expression applied to pwd returns false,
    // set the text  of feedback to "Your password must include a number."
    feedback.textContent = "Your password must include a number.";
  } else if (!regex3.test(pwd)) {
    // Else if the test() method with the regex3 regular expression applied to pwd returns false,
    // set the text of  feedback to
    // "Your password must include one of the following: !$#%"
    feedback.textContent = "Your password must include one of the following: !$#%";
  } else {
    // Otherwise, apply the submit() method to the signupForm object to submit the form for processing.
    signupForm.submit();
  }
});
