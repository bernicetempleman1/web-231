"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Bernice Templeman
      Date:  02/28/2024

      Filename: project06-03.js
*/

// Declare the useShip  variable to reference the element with the id “useShip”.
let useShip = document.getElementById("useShip");

// Add an event listener to useShip to run the copyShippingToBilling() function when clicked.
useShip.addEventListener("change", copyShippingToBilling);

// Function copies values from the shipping fields to corresponding billing fields.
function copyShippingToBilling() {
  // Test whether useShip is checked
  if (useShip.checked) {
    // Set the value of the firstnameBill field to the value of the firstnameShip field.
    document.getElementById("firstnameBill").value =
      document.getElementById("firstnameShip").value;

    // Set the value of the  lastnameBill field to the value of the lastnameShip field.
    document.getElementById("lastnameBill").value =
      document.getElementById("lastnameShip").value;

    // Set the value of the address1Bill field to the value of the address1Ship field.
    document.getElementById("address1Bill").value =
      document.getElementById("address1Ship").value;

    // Set the value of the address2Bill field to the value of the address2Ship field.
    document.getElementById("address2Bill").value =
      document.getElementById("address2Ship").value;

    // Set the value of the cityBill field to the value of the cityShip field.
    document.getElementById("cityBill").value =
      document.getElementById("cityShip").value;

    // Set the value of the countryBill field to the value of the countryShip field.
    document.getElementById("countryBill").value =
      document.getElementById("countryShip").value;

    // Set the value of the codeBill field to the value of the codeShip field.
    document.getElementById("codeBill").value =
      document.getElementById("codeShip").value;

    // Set the selectedIndex property of the stateBill field to the value of the selectedIndex property of the stateShip field.
    document.getElementById("stateBill").selectedIndex =
      document.getElementById("stateShip").selectedIndex;
  }
}

// Declare formElements variable and using the querySelectorAll() method store within it a node list corresponding to elements selected with “input[type=’text’]”.
let formElements = document.querySelectorAll("input[type='text']");

// Declare fieldCount with a value equal to the length of the formElements node list.
let fieldCount = formElements.length;

// Declare the errorBox referencing the element with the id “errorBox”.
let errorBox = document.getElementById("errorBox");

// For loop that iterates through each element in the formElements node list.
for (let i = 0; i < fieldCount; i++) {
  // Apply an event listener that calls the showValidationError() function in response to the invalid event.
  formElements[i].addEventListener("invalid", showValidationError);
}

// Function showValidationError(evt) to apply custom error message instead of browser default messages.
function showValidationError(evt) {
  // For the event object, evt, apply the preventDefault() method to prevent the browser from applying the  native browser tools to respond to invalid data.
  evt.preventDefault();

  // Set the textContent property of errorBox to the text string “Complete all highlighted fields”.
  errorBox.textContent = "Complete all highlighted fields";
}
