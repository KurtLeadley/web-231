/*
============================================
; Title:  leadley-exercise-2.3.js
; Author: Student Kurt Leadley
; Date:   10 June 2019
; Description: Making a function, adding a property to the function object
; and then displaying the property with console.log
;===========================================
*/
var header = require('../leadley-header.js');
// function to return my name
function myName() {
    return myName.kurt;
}
// setting a property to the myName function object
myName.kurt = "Kurt";
// pass in header.display arguments, spit them out.
console.log(header.display("Kurt", "Leadley", "Assignement 2-3"));
// logging my name
console.log("My name is: " + myName());
