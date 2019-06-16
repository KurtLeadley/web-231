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
// original array
var sportsTeamArray = ["Sharks","Raptors","Steelers","Chargers","Red Sox","Sun Devils"];
// two empty arrays
var sTeamsOnlyArray = [];
var allOtherTeamsArray = [];
// loop through the original array. end the loop when i gets to the LENGTH of the array
for ($i = 0; $i < count(sportsTeamArray); $i++) {
  var sportsTeam = sportsTeamArray[$i];
  // if the team starts with an S, add the S team to the S team array
  if (sportsTeam.startsWith("S")) {
    sTeamsOnlyArray.push(sportsTeam);
    // if the team doesn't start with an S, add the team to the other team array
  } else {
    sportsTeam.push(allOtherTeamsArray);
  }
}
console.log("S teams array: " + sTeamsOnlyArray);
console.log("All other teams array: " +allOtherTeamsArray);
