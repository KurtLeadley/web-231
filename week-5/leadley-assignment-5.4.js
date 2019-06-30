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
// create my composer object
var myComposers = [
  // each object has 4 key - value pairs
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
// create an array variable and use the map function to populate the array for rating
var composersByRating = myComposers.map(function(composer) {
  // returns this concatenated string for each of my composers in the myComposers object
  return "Rating: " + composer.rating + "\n" + "Composer: " + composer.lastName;
});
// create an array variable and use the map function to populate the array for genre
var composersByGenre = myComposers.map(function(composer) {
  return "Genre: " + composer.genre + "\n" + "Composer: " + composer.lastName;
});

console.log("-- COMPOSER BY RATING --");
// iterate over the composerByRating array
composersByRating.forEach(function(composer) {
  console.log(composer)
});
console.log('');
console.log("-- COMPOSER BY GENRE --");
// iterate over the composerByGenre array
composersByGenre.forEach(function(composer) {
  console.log(composer)
});

// end program
