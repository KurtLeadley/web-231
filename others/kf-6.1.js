/*
=================================================================
; Title:  Assignment 6.1 with two errors in code.
; Author: developerdrive.com
; Modified by: Karie Funk & Kurt Leadley
; Date:   03 July 2019 | 05 July 2019
; Description: Creating an object, with error.
;================================================================
*/
var user001 = {
  firstName: "John",
  lastName: "Lennon",
  dateOfBirth: 1940,
  getName: function() {
     // just a missing . between this and firstname to call the value of the firstname property -kl
     return "Beatle Member: " + this.firstName + " " + this.lastName;
  }
};
var user002 = Object.create(user001);
// defining the new objects values based on the structure of of the first object- kl
user002.firstName = "Paul";
user002.lastName = "McCartney";
user002.dateOfBirth = 1942;

//OUTPUT
console.log(user001.getName());
// user01 was not defined, just was missing an extra 0 - kl
console.log(user001.dateOfBirth);
console.log("");
console.log(user002.getName());
console.log(user002.dateOfBirth);
