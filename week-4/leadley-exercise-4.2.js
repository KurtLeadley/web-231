/*
============================================
; Title:  leadley-exercise-4.2.js
; Author: Kurt Leadley
; Modified by Kurt Leadley
; Date:   22 June 2019
; Description: Array exercise with a list of fruits
/*
  Expected output:

  FirstName LastName
  Exercise 4.2
  Today's Date

  Kiwi
  Raspberry
  Cantelope
  Mango
  Currants
=============================================
*/

// call my header file
var header = require('../leadley-header.js');
// console.log header string
console.log(header.display("Kurt", "Leadley", "Exercise 4-2"));
console.log('');
// create an array of fruits
var fruitArray = ["Kiwi","Raspberry","Cantelope","Mango","Currants"];
// create a generic function to log array values
function logArray(array) {
  // create a for loop to iterate over each index of the array
  for (var i=0; i < array.length; i++) {
    // store the value of each index into the arrayValue variable
    var arrayValue = array[i];
    // console.log the value
    console.log(arrayValue);
  }
}
// call the function and pass in my fruits array
logArray(fruitArray);