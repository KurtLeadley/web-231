/*
============================================
; Title:  leadley-exercise-3.3.js
; Author: Kurt Leadley
; Date:   16 June 2019
; Description: Creates a loop that generates a random number between 1 and 10.
; An if statement with some matching functions is used to test to see if it equals myWantedNumber
=============================================
*/

// call and display my header file
var header = require('../leadley-header.js');
console.log(header.display("Kurt", "Leadley", "Assignement 3-4"));
console.log("\n");

//////////////////////////
// global variables
//////////////////////////

var myWantedNumber = 9;

//////////////////////////
// functions
//////////////////////////

// this function will compare the two values passed in and will return true or false
function match(argOne, argTwo) {
  if (argOne === argTwo) {
    return true;
  } else {
    return false;
  }
}
// this function creates a mismatch console.log string
function logMismatch (argOne, argTwo) {
  console.log(argOne + " does not match " + argTwo + "!");
}
// this function creates a match console.log string
function logMatch (argOne, argTwo) {
  console.log(argOne +" does match " + argTwo + "!");
}
function randomNumber() {
  return Math.floor((Math.random() * 10) + 1)
}
///////////////////////////
// for loop statement
///////////////////////////

// create a for loop that starts at 0 and runs 10 times. Increment i each loop
for(var i = 0; i < 10; i++) {
  // run the randomNumber function each loop and assign the generated number to a var
  var randomNumberVar = randomNumber();
  // use the match function to test for a match and the log functions for logging
  if (match(randomNumberVar, myWantedNumber)) {
    // use the logMatch function if there is a match
    logMatch(randomNumberVar, myWantedNumber);
  } else {
    // use the logMisMatch function if there is no match
    logMismatch(randomNumberVar,myWantedNumber);
  }
}
