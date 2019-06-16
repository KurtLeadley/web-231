/*
============================================
; Title:  leadley-exercise-3.2.js
; Author: Professor Krasso
; Modified by Kurt Leadley
; Date:   15 June 2019
; Description: Pattern Matching Functions and some if else statements
;===========================================
*/
// call my header file
var header = require('../leadley-header.js');

///////////////////////////
// variables
//////////////////////////

var testVar1 = "Truck";
var testVar2 = "Car";
var testVar3 = "Bike";
var testVar4 = "Bike";
var testVar5 = "Four";
var testVar6 = "Three";

//////////////////////////
// functions
//////////////////////////

// this function will compare the two values passed in and will return true or false
function match(valOne, valTwo) {
  if (valOne === valTwo) {
    return true;
  } else {
    return false;
  }
}
// this function creates a mismatch console.log string
function logMismatch (valOne, valTwo) {
  console.log(valOne +" and " + valTwo + " do not match!");
}
// this function creates a match console.log string
function logMatch (valOne, valTwo) {
  console.log(valOne +" and " + valTwo + " do match!");
}

///////////////////////////////////////////////////////////////////////
// logging to console, testing the variables and logging some more
///////////////////////////////////////////////////////////////////////

// pass in header.display arguments, spit them out.
console.log(header.display("Kurt", "Leadley", "Assignement 3-2"));
console.log("\n");
console.log("// Output from the match{} function...")
console.log(match("A","B"));
console.log(match(2,2));
console.log("\n");
console.log("// output from the if...else blocks");

// check the first two variables using an if-else tes
if (match(testVar1,testVar2)) {
  // match returns true
  logMatch(testVar1,testVar2);
} else {
  // match did not return true
  logMismatch(testVar1,testVar2);
}
// check variables 3 and 4 using an if-else test
if (match(testVar3,testVar4)) {
  logMatch(testVar3,testVar4);
} else {
  logMismatch(testVar3,testVar4);
}
// check variables 5 and 6 using an if-else test
if (match(testVar5,testVar6)) {
  logMatch(testVar5,testVar6);
} else {
  logMismatch(testVar5,testVar6);
}
