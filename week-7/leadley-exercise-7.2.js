/*
============================================
; Title:  leadley-exercise-7.2.js
; Author: Kurt Leadley
; Date:   13 July 2019
; Description: Object constructor functions
*/
// call my header file
var header = require('../leadley-header.js');
// console.log header string
console.log(header.display("Kurt", "Leadley", "Exercise 7-2"));
console.log('');

// create a function that will be used to construct employee objects
function Employee(id,firstName,lastName,title) {
  this.id = id;
  this.firstName = firstName;
  this.lastName = lastName;
  this.title = title;
}
// create an array that constructs 5 employee objects
var employeesArray = [
  new Employee(1,'Kurt','Leadley','Web Developer'),
  new Employee(2,'John','Smith','Cook'),
  new Employee(3,'Jane','Doe','Bartender'),
  new Employee(4,'Billy','Bell','Software Engineer'),
  new Employee(5,'Kelly','Sanders','Database Developer')
];

// for each item in the employees array, call it an employee, pass it in and....
employeesArray.forEach(function(employee) {
  // then get the properties of each employee object
  var id = employee.id
  var first = employee.firstName;
  var last = employee.lastName;
  var title = employee.title;
  // log each employee
  console.log(id+' '+first+' '+last+' '+title);
});
