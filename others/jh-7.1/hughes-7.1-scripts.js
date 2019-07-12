/*
============================================
; Title:  hughes-7.1-scripts.js
; Author: Joshua Hughes
; Modified By: Kurt Leadley
; Date:   9 July 2019
; Description: exctrnal JS in browser inclusion
;===========================================
*/

/**
 * Params: none
 * Response: formatted date
 * Description: Returns a date object as a string
 */
function fillDate(){
  let date = new Date();
  document.getElementById("dateInput").value = date.toLocaleDateString('en-US');
}
