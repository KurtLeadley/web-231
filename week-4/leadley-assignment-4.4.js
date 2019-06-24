/*
============================================
; Title:  leadley-assignment-4.4.js
; Author: Kurt Leadley
; Date:   23 June 2019
; Description: Using filter, sort and slice on arrays.
======================================================
*/
// call my header file
var header = require('../leadley-header.js');
// console.log header string
console.log(header.display("Kurt", "Leadley", "Assignment 4-4"));
console.log('');
// create an array of states
var originalArray = ["Alabama","Nebraska","Iowa","California","Nevada"];
// sort the array alphabetically. Used slice to preserve the original array
var sortedArray = originalArray.slice().sort();
// simple array logging function
function logArray(array) {
  for (var i = 0 ; i < array.length; i++) {
    console.log(array[i]);
  }
}
// a function with a passed in array and wanted value
function getValue(array, wantedValue) {
  // check to see if the wantedValue was passed in
  if (wantedValue != '') {
    // if so, filter the array, check each index for the wantedValue
    array.filter(function(indexVal) {
      if (indexVal == wantedValue) {
        console.log(wantedValue);
      }
    });
  }
}
// log all the stuff, call the functions in the correct order and with the correct params
console.log("--Original Array--");
logArray(originalArray);
console.log('');
console.log("--Sorted Array--");
logArray(sortedArray);
console.log('');
console.log("--Selected Value--");
getValue(sortedArray,'Iowa');


