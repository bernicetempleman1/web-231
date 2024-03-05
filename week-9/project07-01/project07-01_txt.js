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

signupForm.addEventListener("submit", function(e) {
   let pwd = document.getElementById("pwd").value;
   let feedback = document.getElementById("feedback");

}
);

/*
2. Go to the project07-01.html file in your code editor and link the page to the project07-01.js file,
 deferring the  script from loading until after the page loads.
Save your changes to the file.

 3. Go to the project07-01.js file in your code editor.
Within the event listener for the submit event add the  commands specified in steps 4 through 6.

4. Add the e.preventDefault() command to prevent the browser from responding to the submit event.

5. Create the following variables containing regular expressions:
  a. Create the regex1 variable containing a regular expression literal with a character class that matches any  uppercase letter A through Z.
b. Create the regex2 variable containing a regular expression literal that matches any single digit.
 c. Create the regex3 variable containing a regular expression with a character class containing the symbols  !$#%. (Hint: you will have to use \$ for the $symbol.)

6. Create an if else statement that with the following conditions and outcomes:
a. If the length of pwd is less than 8, set the text content of the feedback object to “Your password must be at  least 8 characters.”
b. Else if the test() method with the regex1 regular expression applied to the pwd variable returns a false  value, set the text content of the feedback object to "Your password must include an uppercase letter."
c. Else if the test() method with the regex2 regular expression applied to pwd returns false, set the text  of feedback to "Your password must include a number."
d. Else if the test() method with the regex3 regular expression applied to pwd returns false, set the text of  feedback to
 "Your password must include one of the following: !$#%".
 e. Otherwise, apply the submit() method to the signupForm object to submit the form for processing.

*/