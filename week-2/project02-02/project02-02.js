/*
  JavaScript 7th Edition
  Chapter 2
  Project 02-02

  Application to test for completed form
  Author: Bernice Templeman
  Date: 01/17/2024

  Filename: project02-02.js
 */

// Function to verify form input
function verifyForm(){
  // a. Declare the name variable equal to the value of the input control with the id “name”.
  let name = document.getElementById("name").value;

  // b. Declare the email variable equal to the value of the input control with the id “email”.
  let email = document.getElementById("email").value;

  // c. Declare the phone variable equal to the value of the input control with the id “phone”.
  let phone = document.getElementById("phone").value;

  // d. Insert a conditional operator that tests the truthy or falsy value of and name and email and phone using  the && operator.
  if ( name && email && phone) {
    // If the result of this conditional expression is true, use the window.alert() method to  display the message “Thank you!”,
    window.alert("Thank you!");
  } else {
    // otherwise display the message “Please fill in all fields”.
    window.alert("Please fill in all fields");
  }
}

//attach an event listener to the page element with the id “submit”. When the click event occurs for this element, run the verifyForm function.
document.getElementById("submit").addEventListener("click", verifyForm);
