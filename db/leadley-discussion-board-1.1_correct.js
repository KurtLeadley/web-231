/*
============================================
; Title: Assignment 1.1
; Author: Kurt Leadley
; Date: 5/30/2019
; Modified By: No one yet. The slice function to re-append the entire string to a capital letter is attributed to:
; Steve Hansell. https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
; Description: The object of this program is to get letters from each of the three words in the "teams" array to create a new team 
; called the "Lions". The final output should look like "The Lions are the new team". This output should be produced only by string manipulation 
; of the already given 3 teams in the "teams" array. "Lions" should be capitalized for the first letter only. The output should only be produced once!!!
;===========================================
*/ 
var teams = ['Lightning', 'Oilers','Rangers'];

for (var i = 0 ; i < teams.length ; i++) {
    team = teams[i];
    if (team.startsWith('Lightning')) {
        var teamLightningSubString = team.substring(0,2);
    }
    if (team.startsWith('Oilers')) {
        var teamOilersSubString = team.substring(0,1);
    }
    if (team.startsWith('Rangers')) {
        var teamRangersSubStringN = team.substring(2,3);
    }
    if (team.startsWith('Rangers')) {
        var teamRangersSubStringS = team.substring(6);
    }
}
var newTeamString = teamLightningSubString + teamOilersSubString + teamRangersSubStringN + teamRangersSubStringS;
newTeamStringLowerCase = newTeamString.toLowerCase();
newTeamStringCorrectCase = newTeamStringLowerCase.charAt(0).toUpperCase() + newTeamStringLowerCase.slice(1);

var newTeamStringSentence = "The " + newTeamStringCorrectCase + " are the new team" ;
console.log(newTeamStringSentence);