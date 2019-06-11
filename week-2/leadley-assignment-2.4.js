/*
============================================
; Title:  leadley-assignment-2.4.js
; Author: Student Kurt Leadley
; Date:   10 June 2019
; Description: Function assignment with some number and string manipulation
;===========================================
*/
// include header file
var header = require('../leadley-header.js');
// here are the functions
function fullName(firstName, lastName) {
    return  firstName + " " + lastName;
}
function dateWriter(year,month,day) {
  return new Date(year+"/"+month+"/"+day);
}
function formatNumber(number,fixedPosition) {
  return number.toFixed(fixedPosition);
}
function convertToInt(string) {
  return parseInt(string);
}
function convertToFloat(string) {
  return parseFloat(string);
}
// make my functions values for easier logging
var myFullName = fullName("Kurt", "Leadley");
var myDate = dateWriter("2019","06","10");
var myFormattedTemp = formatNumber(32.2453,1);
var myAge = convertToInt("34");
var myWage = convertToFloat("001000.75");
// log the variable types to make sure the conversions worked
console.log("myDate = Date object? :" + typeof myDate);
console.log("myAge = Int? :" + typeof myAge);
console.log("myWage = Float? :" + typeof myWage);
// pass in header.display arguments, spit them out.
console.log(header.display("Kurt", "Leadley", "Assignement 2-4"));
// Well formatted logging time
console.log("Hello, my name is " + myFullName + "!");
console.log("Today's date is " + myDate + " and the current temperature is " + myFormattedTemp);
console.log("I am " + myAge + " years old and my savings account goal is $" + myWage + " dollars");
