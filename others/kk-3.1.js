/*
============================================
; Title:  discussion 3.1
; Author: Keith Kozma
; Date:   16 June 2019
; Modified by: Kurt Leadley
; Description: displays a statement with different conditions dependent on the current day
  of the week.
;===========================================
*/
var dailySchedule = new Date();

//  changed comma to a period on the getDay method
// to invoke a method on an object, a period is needed
switch (dailySchedule.getDay()) {
    // added 0 (aka the first day of the week with the getDay method)
    // each case needs a value in a switch statement, unless it is the default case
    case 0:
        console.log("Sunday dinner with the fam @ 11AM");
        break;
    case 1:
        console.log("Monday morning blues");
        break;
    case 2:
        console.log("Tuesday brunch @ 12pm");
        break;
    case 3:
        console.log("Wednesday golfing practice @ 3pm");
        break;
    case 4:
        console.log("Throwback Thursdays @ all day");
        break;
    case 5:
        console.log("Friday game night @ 8:30AM");
        break;
    // case 6 had a semi colon instead of a colon. semi colon's are used to end statements, whereas colon's are used as labels in some instances of JavaScript
    case 6:
        console.log("Saturday morning bike ride Run @ 7AM");
        break;
}
