/*    JavaScript 7th Edition
      Chapter 2
      Project 02-04

      Application to calculate the cost of a restaurant order plus tax
      Author: Bernice Templeman
      Date: 01/25/2024

      Filename: project02-04.js
 */

// Constants
const CHICKEN_PRICE = 10.95;
const HALIBUT_PRICE = 13.95;
const BURGER_PRICE = 9.95;
const SALMON_PRICE = 18.95;
const SALAD_PRICE = 7.95;
const SALES_TAX = 0.07;

//event handler that runs the calcTotal() function when  the element is clicked.
// updated to 'onchange' event listener instead of 'onclick'.
// The 'onchange' event is generally more suitable for detecting input changes.
document.getElementById("chicken").onchange = calcTotal;
document.getElementById("halibut").onchange = calcTotal;
document.getElementById("burger").onchange = calcTotal;
document.getElementById("salmon").onchange = calcTotal;
document.getElementById("salad").onchange = calcTotal;

//function to calculate the total
function calcTotal(){

  // variables
  let cost = 0;
  let buyChicken = document.getElementById("chicken").checked;
  let buyHalibut = document.getElementById("halibut").checked;
  let buyBurger = document.getElementById("burger").checked;
  let buySalmon = document.getElementById("salmon").checked;
  let buySalad = document.getElementById("salad").checked;

  // Add the price of each item to the cost if selected
  cost += buyChicken?CHICKEN_PRICE : 0;
  cost += buyHalibut?HALIBUT_PRICE : 0;
  cost += buyBurger?BURGER_PRICE : 0;
  cost += buySalmon?SALMON_PRICE : 0;
  cost += buySalad?SALAD_PRICE : 0;

  // Set the innerHTML property for the element with the id “foodTotal” to the value returned by the  formatCurrency() function using cost as the parameter value.
  document.getElementById("foodTotal").innerHTML = formatCurrency(cost);

  // Declare the tax variable, setting its value equal to the cost variable multiplied by SALES_TAX.
  let tax = cost * SALES_TAX;

  // Set the innerHTML property for the element with the id “foodTax” to the value returned by the  formatCurrency() function using tax as the parameter value.
  document.getElementById("foodTax").innerHTML = formatCurrency(tax);

  // Declare the totalCost variable, setting its value equal to the cost variable plus the tax variable.
  let totalCost = cost + tax;

  // Set the innerHTML property for the element with the id “totalBill” to the value returned by the  formatCurrency() function using totalCost as the parameter value.
  document.getElementById("totalBill").innerHTML = formatCurrency(totalCost);

}

// Function to display a numeric value as a text string in the format $##.##
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}
