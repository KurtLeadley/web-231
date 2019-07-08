/*
; Title:  leadley-assignment-6.4.js
; Author: Kurt Leadley
; Date:   07 July 2019
; Description: nested object literals
*/
// call my header file
var header = require('../leadley-header.js');
// console.log header string
console.log(header.display("Kurt", "Leadley", "Exercise 6-2"));
console.log('');

// create the ticket object
var ticket = {
  id: 105,
  name: "Reference Error in Code",
  // create a date object for today
  dateCreated: new Date().toLocaleDateString(),
  priority: "Low",
  personId: 1,
  // here is the nested object literal named person. Not the difference in ticket = {}  and person: {}
  // this is because person is still a property of the ticket object.
  person: {
    id: 1,
    firstName: "Bob",
    lastName: "Jones",
    jobTitle: "Programmer 1"
  },
  // create a getter method for displaying the object information in the same format, whether or not the objects values get changed
  // note the use of this. this refers to the ticket object, but to access the person object property, you need to use
  // this.person or ticket.person, not this.this
  get ticketText() {
    return console.log("Ticket "+this.id+" was created on "+this.dateCreated+" and assigned to employee " +
    this.person.firstName+" "+this.person.lastName+" ("+this.person.jobTitle+").");
  }
}
// desired output: Ticket 105 was created on <today' date> and assigned to employee Bob Jones (Programmer I).
// call the ticketText getter method to display the desired output
ticket.ticketText;
