/*
============================================
; Title:  leadley-exercise-3.3.js
; Author: Professor Krasso
; Modified by Kurt Leadley
; Date:   15 June 2019
; Description: Use a switch statement instead of a block of if-else tests
;
;  Expected output:
;
;  FirstName LastName
;  Exercise 3.3
;  Today's Date
;
;  // Expected output
;  The enter key was pressed
=============================================
*/
// call my header file
var header = require('../leadley-header.js');
// console.log header string
console.log(header.display("Kurt", "Leadley", "Assignement 3-3"));
console.log("\n");
// assign a value to eventKeyCode
let eventKeyCode = 13;
// let the switch statement look for 13, find that case and run the code for that case. Then break out of the switch statement
switch(eventKeyCode) {
  case 13:
    console.log('The enter key was pressed.');
    break;
  case 16:
    console.log('The shift key was pressed.');
    break;
  case 32:
    console.log('The spacebar key was pressed.');
    break;
  case 8:
    console.log('The backspace / delete key was pressed.');
    break;
  default:
    console.log('Unrecognized key.');
    break;
}
