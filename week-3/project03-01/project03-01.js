/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Bernice Templeman
      Date: 02/03/2024

      Filename: project03-01.js
*/

// variable  named menuItems containing the collection of HTML elements belonging to the menuItem class
let menuItems = document.getElementsByClassName("menuItem");

// for loop that loops through the contents of the menuItems collection
for (let i = 0; i < menuItems.length; i++) {
  // add an event listener to the menuItems[i] element in the  collection running the calcTotal() function when that item is clicked
  menuItems[i].addEventListener("click", calcTotal);
}

// Function to calculate the total cost of the customer order given the selected menu items.
function calcTotal() {

  // declare orderTotal variable and initialize to 0
  let orderTotal = 0;

  for (let i = 0; i < menuItems.length; i++) {
    //if statement that tests whether the item has been checked
    if (menuItems[i].checked) {
      // If true,  increase the value of the orderTotal variable by the value of menuItems[i].
      orderTotal += Number(menuItems[i].value);
    }
  }

  //change the innerHTML property of the element with the id "billTotal"  to the value returned by the formatCurrency() function using orderTotal as the parameter value.
  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal);
}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
