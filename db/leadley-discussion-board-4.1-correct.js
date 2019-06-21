/*
============================================
; Title: Assignment 4.1
; Author: Kurt Leadley
; Date: 6/20/2019
; Modified By: No one yet.
; Description: Get to the Sharks in reverse order and break the loop
; expected output:
; Sharks team lonely array: Sharks
; All other teams array: Sun Devils,Red Sox,Chargers,Steelers,Raptors
;===========================================
*/

var sportsTeamArray = ["Rangers","Blues", "Sharks","Raptors","Steelers","Chargers","Red Sox","Sun Devils"];
var sharkTeamOnlyArray = [];
var allOtherTeamsArray = [];
// these console logs are hints: /////////////////
// console.log(sportsTeamArray.length);
// console.log(sportsTeamArray[0]);
// console.log(sportsTeamArray[8]);
///////////// end of hints //////////////////////
for (var i = sportsTeamArray.length-1; i > 0;  i--) {
  var sportsTeam = sportsTeamArray[i];
  if (sportsTeam.startsWith("Sharks")) {
    sharkTeamOnlyArray.push(sportsTeam);
    break;
  } else {
    allOtherTeamsArray.push(sportsTeam);
  }
}
console.log("Sharks team lonely array: " + sharkTeamOnlyArray);
console.log("All other teams array: " + allOtherTeamsArray);
