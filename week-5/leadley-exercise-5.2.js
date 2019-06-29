/*
============================================
; Title:  leadley-exercise-5.2.js
; Author: Kurt Leadley
; Date:   29 June 2019
; Description: Learning the forEach iteration for arrays
*/
// call my header file
var header = require('../leadley-header.js');
// console.log header string
console.log(header.display("Kurt", "Leadley", "Exercise 5-2"));
console.log('');
// make an array of foods, the best foods in my mind
var favoriteFoods = ["Pulled Pork", "Brisket","Tri-Tip", "Olives", "Salad"];
// call this mysterious forEach method on my favoriteFoods array
favoriteFoods.forEach(function(food) {
  // log it!
  console.log(food);
});
