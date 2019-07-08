/*
; Title:  leadley-exercise-6.3.js
; Author: Kurt Leadley
; Date:   07 July 2019
; Description: object literal with setter and getter methods
*/
// call my header file
var header = require('../leadley-header.js');
// console.log header string
console.log(header.display("Kurt", "Leadley", "Exercise 6-3"));
console.log('');
// create a ticket object
var ticket = {
  // set the three properties id, name and requester
  id: 101,
  name: "Help Desk Support",
  requester: "Bob Jones",
  // create a getter method that builds a string. In case someone wants to modify this object later on
  get fullString() {
    return console.log("id: " +ticket.id+", name: "+ticket.name+", requester: "+ticket.requester);
  },
};
// call the fullString getter method on the ticket object to display the wanted output.
ticket.fullString;
