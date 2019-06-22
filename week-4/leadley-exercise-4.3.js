/*
============================================
; Title:  leadley-exercise-4.3.js
; Author: Kurt Leadley
; Date:   22 June 2019
; Description: Array exercise with a list of cars. Adding a filter 
; the the exercise with an if test  
/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
=============================================
*/

// call my header file
var header = require('../leadley-header.js');
// console.log header string
console.log(header.display("Kurt", "Leadley", "Exercise 4-2"));
console.log('');
// create an array of cars
var carArray = ["Car","Truck","Motorcycle","Airplane","Bus"];
// create a few vehicle strings we want to look for
var vehicle = "Motorcycle";
var vehicleTwo = "Bus";
// create a generic function to log array values
function logArray(array,wantedValue) {
  // create a for loop to iterate over each index of the array
  for (var i=0; i < array.length; i++) {
    // store the value of each index into the arrayValue variable
    var arrayValue = array[i];
    // if test to determine if we have a match, if so, console.log it
    // added an or statement to display all arrayValues if no filter is passed into the function
    if ((arrayValue === wantedValue) || (!wantedValue)) {
        // console.log the value
        console.log(arrayValue);
    }
  }
}
// call the function and pass in my parameters
console.log(' -- DISPLAYING ARRAY ITEMS --');
logArray(carArray);
console.log('');
console.log('-- SELECTED VALUE --');
logArray(carArray,vehicle);
console.log('');
console.log('-- SELECTED VALUE --');
logArray(carArray,vehicleTwo);