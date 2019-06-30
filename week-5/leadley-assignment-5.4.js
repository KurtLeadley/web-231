/*
============================================
; Title:  leadley-assignment-5.4.js
; Author: Kurt Leadley
; Date:   30 June 2019
; Description: Filtering/Reducing complex data structures with map()
======================================================
*/
// call my header file
var header = require('../leadley-header.js');
// console.log header string
console.log(header.display("Kurt", "Leadley", "Assignment 5-4"));
console.log('');
var myComposers = [
  {
    firstName:"Geddy",
    lastName:"Lee",
    genre:"Progressive Rock",
    rating:"9",
  },
  {
    firstName:"James",
    lastName:"LaBrie",
    genre:"Progressive Rock",
    rating:"8",
  },
  {
    firstName:"Robert",
    lastName:"Fripp",
    genre:"Progressive Rock",
    rating:"8",
  },
  {
    firstName:"Steven",
    lastName:"Wilson",
    genre:"Undefined, Sometimes Prog",
    rating:"10",
  },
  {
    firstName:"Ross",
    lastName:"Jennings",
    genre:"Progressive Metal",
    rating:"9",
  },
];
var composersByRating = myComposers.map(function(composer) {
  return "Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName;
});
var composersByGenre = myComposers.map(function(composer) {
  return "Genre: " + composer.genre + "\n" + "Composer: " + composer.lastName;
});

console.log("-- COMPOSER BY RATING --");

composersByRating.forEach(function(composer) {
  console.log(composer)
});
console.log('');
console.log("-- COMPOSER BY GENRE --");

composersByGenre.forEach(function(composer) {
  console.log(composer)
});

// end program
