/*
============================================
; Title:  aauger-discussion-board-4.1.js
; Author: April Auger
; Date:   19 June 2019
; Description: A program that outputs the
;			   items contained in two arrays.
;			   I added three errors that will
;			   need to be corrected before the
;			   program will run.
; Modified by: Kurt Leadley
;===========================================
*/

// Load additional JavaScript file
//var header = require("../header.js");

// Output Header Display
// commented out the header, not set up to call this file from this directory
//console.log(header.display("April", "Auger", "Discussion Board 4.1") + "\n");

// Start program

// Array to store information on people
var people = [
  // missed a comma here - kl
	["Mark", "44", "Respiratory Therapist"],
	["Marco", "22", "Programmer"],
	["Valerie", "37", "Secretary"],
	["Peter", "46", "Doctor"]
];

// Array to store labels
var label = [
	"Name",
	"Age",
	"Job Title"
];

// For loop to loop through the person array
for (var i = 0; i < people.length; i++) {
	var count = 0;
// added the missing parenthesis - kl
	console.log('USER RECORD ' + (i+1));
	// For loop to loop through the first arrays stored in the people array.
	for (var person in people[i]) {
		// Output the labels and user information
		console.log(label[count] + ": " + people[i][person]);
    // added the extra +. Syntax error
    count++;
	}

	// Add a new line to give space between the user records
	console.log('');
}

// End program
