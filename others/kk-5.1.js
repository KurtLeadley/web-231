/*
============================================
; Title:  leadley-exercise-5.1 db response
; Author: Keith
; Date:   29 June 2019
; Description: Fixing Keith's purposefully ruined code
; Modified by: Kurt Leadley
*/
// added "new", you can't just say Map randomly in JavaScript.
// You need to let the parser know that you are making a "new" thing
// time to time
var favFoods = new Map();
favFoods.set('spaghetti', 'meatballs');
favFoods.set('beans', 'rice');
favFoods.set('fruit', 'salad');
favFoods.set('water', 'lemon');
favFoods.set('biscuits', 'gravy');

console.log('== Favorite Foods ==');
console.log("");
// changed it to a for loop, because that is
// how it looked on the official site.
// I'd like to see how to iterate over this on a foreach
for (var  [key, value] of favFoods) {
  console.log(key + " with " + value);
}
