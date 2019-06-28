/*
============================================
; Title: Discussion Board 5.1
; Author: Kurt Leadley
; Date: 6/27/2019
; Description: Creating maps and accessing the key and value
; Expected output:
; Philip Rivers is the QB for the Chargers and plays in the AFC West.
; Patrick Mahomes is the QB for the Chiefs and plays in the AFC West.
; Joe Flacco is the QB for the Broncos and plays in the AFC West.
; Derek Carr is the QB for the Raiders and plays in the AFC West.
;
; Tom Brady is the QB for the Patriots and does not play in the AFC West.
; Jared Goff is the QB for the Rams and does not play in the AFC West.
; Dak Prescott is the QB for the Cowboys and does not play in the AFC West.
;
; Number of AFC West teams in the teamAndQBMap: 4
; Number of non AFC West teams in the nonwAFCWestMap: 3
;===========================================
*/

// create the original map and set some key and value pairs to it
var teamAndQBMap = new Map();
teamAndQBMap.set('Chargers','Philip Rivers');
teamAndQBMap.set('Patriots','Tom Brady');
teamAndQBMap.set('Chiefs','Patrick Mahomes');
teamAndQBMap.set('Rams','Jared Goff');
teamAndQBMap.set('Broncos','Joe Flacco');
teamAndQBMap.set('Raiders','Derek Carr');
teamAndQBMap.set('Cowboys','Dak Prescott');

// make an array of AFC West teams
var afcWestArray = ['Broncos','Raiders','Chiefs','Chargers'];
// make an empty map for later use
var nonAFCWestMap = new Map();

// loop through the teamAndQBMap
for (var [team,qb] of teamAndQBMap) {
  // look to see if the team is in the afcWestArray. If yes, log the team and qb
  if (afcWestArray.indexOf(team) > -1) {
    console.log(qb + ' is the QB for the ' + team +' and plays in the AFC West.');
    // if the team is not in the afcWestArray, delete the team and qb from the teamAndQBMap map
  } else {
    teamAndQBMap.delete(team);
    // add non AFC West teams to the nonAFCWestMap map
    nonAFCWestMap.set(team,qb);
  }
}
// loop through the nonAFCWestMap and log the keys and values
console.log('');
for (var [team,qb] of nonAFCWestMap) {
    console.log(qb + ' is the QB for the ' + team +' and does not play in the AFC West.');
}
// log the size of each map
console.log('');
console.log('Number of AFC West teams in the teamAndQBMap: ' + teamAndQBMap.size);
console.log('Number of non AFC West teams in the nonAFCWestMap: ' + nonAFCWestMap.size);

