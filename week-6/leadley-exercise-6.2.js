/*
; Title:  leadley-exercise-6.2.js
; Author: Kurt Leadley
; Date:   07 July 2019
; Description: try, catch, finally exercise
*/
// call my header file
var header = require('../leadley-header.js');
// console.log header string
console.log(header.display("Kurt", "Leadley", "Exercise 6-2"));
console.log('');
// try to make a string variable without quotes
try {
  var firstName = John;
}
// catch the error
catch (e) {
   // log it
   console.log("Catch Claus: " + e);
}
// move on with the code
finally {
  console.log('Finally clause reached...');
}
