/*
============================================
; Title: Assignment 3.1
; Author: Kurt Leadley
; Date: 6/13/2019
; Modified By: No one yet.
; Description: Just a nice and easy loop through an array. Take the original array, add teams that start with "S"
; to the "sTeamsOnlyArray", add all other teams to the "allOtherTeamsArray"
;===========================================
*/

var sportsTeamArray = ["Sharks","Raptors","Steelers","Chargers","Red Sox","Sun Devils"];
var sTeamsOnlyArray = [];
var allOtherTeamsArray = [];
for (var i = 0; i < sportsTeamArray.length; i++) {
  var sportsTeam = sportsTeamArray[i];
  if (sportsTeam.startsWith("S")) {
    sTeamsOnlyArray.push(sportsTeam);
  } else {
    allOtherTeamsArray.push(sportsTeam);
  }
}
console.log("S teams array: " + sTeamsOnlyArray);
console.log("All other teams array: " +allOtherTeamsArray);
