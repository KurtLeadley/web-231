// Instructions

// Create 3 employee records with the following fields (this means there should be 3 firstName variables, 3 lastName variables, 3 address variables, 3 payRate variables, and 3 hireDate variables)
// firstName
// lastName
// address
// payRate
// hireDate
// Format the payRate to one decimal place (see page 48 of the courses textbook)
// Format the hireDate using "slashes" (see page 35 of the courses textbook; use JavaScript's built-in new Date() object)
// Run and test the program and make sure the output matches what I have 
// When you are happy with the output stage, commit, and push your work to GitHub

/*
============================================
; Title: Assignment 1.5
; Author: Kurt Leadley
; Date: 06 June 2019
; Description: This program is an extension to
; the introduction of primitive variable types
; and an introduction to the date() object
; I made arrays because I hate typing or copying things over and over again
;===========================================
*/ 

var employeeFirstNameArray = ["Kurt","Bob","Agent Jack"];
var employeeLastNameArray = ["Leadley","Smith","Bauer"];
var addressArray = ["Anytown America", "Some other town", "Junkyard Cat Lane"];
var payRateArray = [2.75, 10.95, 9.95];

// Make hire dates array, assign dates, change date format
var hireDateArray = [];
var hireDateKurt = new Date("03/12/2019").toLocaleDateString();
hireDateArray.push(hireDateKurt);
var hireDateBob = new Date("02/12/2018").toLocaleDateString();
hireDateArray.push(hireDateBob);
var hireDateAgentJack = new Date("01/12/2017").toLocaleDateString();
hireDateArray.push(hireDateAgentJack);
// access each employee by array index, then log it and stuff
for (var i= 0 ; i < 3; i++) {
    employeeFirstName = employeeFirstNameArray[i];
    employeeLastName = employeeLastNameArray[i];
    address = addressArray[i];
    payRate = payRateArray[i];
    payRate = payRate.toFixed(1);
    hireDate = hireDateArray[i];
    employeeNum = i+1;
    console.log(
        "------------------------------------------------\n"+
        "Employee "+employeeNum+":\n"+ 
        employeeFirstName +" "+employeeLastName+"\n"+
        address+"\n"+
        "Pay Rate: $"+payRate+"\n"+ 
        "Hire Date: "+hireDate+"\n"+
        "------------------------------------------------\n"
    );

}
