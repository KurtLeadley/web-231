/*
============================================
; Title: Discussion Board 6.1
; Author: Kurt Leadley
; Date: 7/04/2019
; Description: Using object properties
; Expected output:
; name
; city
; coach
; stats
; Object {fullname: "Peter DeBoer"}
; Object {wins: 46, losses: 27, overtimelosses: 8}
; Team: San Jose Sharks
; Coach: Peter DeBoer
;===========================================
*/
// create an team object
var sharksTeamObject = {
  name: "Sharks",
  city: "San Jose",
  coach: {
    firstname: "Peter",
    lastname: "DeBoer"
  },
  stats = {
    wins: 46,
    losses: 27,
    overtimeloses: 8
  }
}
// get the coaches first name with dot
var coachFirstName = sharksTeamObject.coach.firstname;
// get the coaches last name with brackets
var coachLastName = sharksTeamObject[coach][lastname];
// make a coachFullName variable
var coachFullName = coachFirstName + " " + coachLastName;
// create a new fullname property for sharksTeamObject.coach
sharksTeamObject.coach.fullname = coachFullName;
// delete coach.firstname and coach.lastname property
delete sharksTeamObject.coach.firstname;
delete sharksTeamObject.coach.lastname;

//loop through sharksTeamObject properties and display them
for (p in o) {
  console.log(p);
}
// display the two objects in the sharksTeamObject
console.log(sharksTeamObject.coach);
console.log(sharksTeamObject.stats);
// log the team and the coach
console.log("Team: " + sharksTeamObject.city + " " +sharksTeamObject.name);
console.log("Coach: " + sharksTeamObject.coach.fullname);

