/*
============================================
; Title:  leadley-exercise-5.3.js
; Author: Kurt Leadley
; Date:   29 June 2019
; Description: Learning the forEach iteration for arrays
*/
// let's make a JSON thingy with my favorite musicians
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
// okay, let's loop through my JSON by passing the object into this forEach function method thing.
myComposers.forEach(function(myComposers) {
  // log it!
  console.log(myComposers.firstName + " " + myComposers.lastName + " | Genre: " + myComposers.genre + " | My Rating: " + myComposers.rating);
});
