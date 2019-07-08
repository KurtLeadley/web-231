/*
============================================
; Title:  hughes-6.1.js
; Author: Joshua Hughes
; Date:   2 July 2019
; Description: Demonstrates objects
;===========================================
*/

//global variable definitions


//object  using new
var person = new Object();
person.firstName = "Josh";
person.LastName = "Hughes";
person.emailAddress = "Test123@yahoo.com";
person.phone = "1234567890";

//object using prototype
var course = Object.create(Object.prototype);
course.title = "Course 101- learning courses";
course.startdate = "3/15/2020";
course.credits = "4";

//object using object literal
var student = {
  gradeLevel: "Sophomore",
  graduationDate: new Date(2020,07,15).toDateString(),//August 15, 2020
  personalInfo: person, // input person object
  classes: course//input course object
}

//converts objects into arrays for parsing
const studentEntries = Object.entries(student);
// console.log(studentEntries[0][1]);
// console.log(studentEntries[2][1]);
const personEntries = Object.entries(person);
const courseEntries = Object.entries(course);

//output
for ( [property, value] in studentEntries) {
  console.log(property[value]);
  console.log(studentEntries[property]);
  if (property == "personalInfo") {
    console.log("hi");

    //loops through person array object
    for (var [property, value] of personEntries){
      //console.log("    "+property + " : " +value )
    }
  }

  //loops through course array object
  else if (property == "classes") {
    //console.log("course:");
    for (var [property, value] of courseEntries){
      //console.log("    "+property + " : " +value )
    }
  }
  else{
    //console.log(property + " : " + value);
  }
}

/*
; Expected output:
;===========================================
;gradeLevel : Sophomore
;graduationDate : Sat Aug 15 2020
;person:
;    firstName : Josh
;    LastName : Hughes
;    emailAddress : Test123@yahoo.com
;    phone : 1234567890
;course:
;    title : Course 101- learning courses
;    startdate : 3/15/2020
;    credits : 4
;===========================================
*/
