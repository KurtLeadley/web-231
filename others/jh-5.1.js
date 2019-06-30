/*
============================================
; Title: hughes-5.1.js
; Author: Joshua Hughes
; Date: 30 June 2019
; Modified by: Kurt Leadley
; Description: using keyed collections
;===========================================
*/
//using Map objects
var testMap = new Map ();
testMap.set('name' , 'josh');
testMap.set('address' , '1234 st'); //set
//iterating a map object
for (var [ key , value ] of testMap) {
  console.log( key + " : " + value);
}
console.log('');

//using Set objects
var testSet = new Set ();
testSet.add({'city' : 'Mesa'}); //can hold objects
testSet.add('AZ'); //can hold string
testSet.add(85202); //can hold numbers
testSet.add('AZ'); //duplicate entry.. ignored
//iterating a Set
for (let item of testSet) {
  console.log(item);
};
console.log('');

//Array to set and then back for removal of duplicates
var arr1 = [];
arr1.push(13);
arr1.push(14);
arr1.push(18);
arr1.push(16);
arr1.push('13'); //does not auto convert type
arr1.push(13);
arr1.push(13);

var set1 = new Set(arr1); //array to set
var arr2 = Array.from(set1); //set back to array
//outputs indicator if duplicates were removed
if (arr2.length < arr1.length ) {
  console . log ( 'array resized!' );
  console . log ( 'duplicates removed!' );
}
console . log ('');
//iterate and output second array
// foreach element of an array, not foreach array of an array. kl
arr2.forEach(function(el) {
    // addded a typeof statement to explain why 13 appears twice. -kl
    console.log("Hi: " + el + " | element type: " + typeof el ) //hint
    if (el === '13') {
      // display text if el === '13'
      console.log("Hello " + el + " string");
    }
});
