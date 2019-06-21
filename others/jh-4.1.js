/*
============================================
; Title: hughes-4.1.js
; Author: Joshua Hughes
; Date: 18 June 2019
; Description: Demonstrates arrays
;===========================================
*/
//global variable definitions
//array defined with literal syntax
var nameArr = [
  "John" ,
  "Steve" ,
  "Mark" ,
  "Matthew" ,
  "Robert" ,
  "Rebecca" ,
  "Jasmine" ,
  "Stephanie" ,
  "Cassandra" ,
  "Ashley"
  ];
  //array instantiated through array constructor
  var houseArr = new Array (
  "Victorian" ,
  "Split Level" ,
  "Colonial" ,
  "Mobile Home" ,
  "Log Cabin" ,
  "Cottage" ,
  "Beach House" ,
  "Tudor"
  );
  /**
  * Params: none
  * Response: random integer between 100000 and 35000
  * Description: Returns a random integer value for a salary
  */
  var salary = function (){
  var randomSalary = Math . floor ( Math . random () * ( 100000 - 35000 ) + 35000 );
  return randomSalary ;
  }
  /**
  * Params: none
  * Response: random integer between 65 and 19
  * Description: Returns a random integer value for a married age range
  */
  var marryAge = function (){
  return Math . floor ( Math . random () * ( 65 - 19 ) + 19 );
  }
  /**
  * Params: none
  * Response: random integer between 0 and 6
  * Description: Returns a random integer value for a count of the kids
  */
  var kidsCount = function (){
  return Math.floor(Math.random()*6 );
  }
  /**
  * Params: array
  * Response: array element
  * Description: Returns a random array element from the passed array
  */
  function randArr ( array ){
    // length is not a method, it is a property of an array object, therefore.....get rid of the () - kl
    var rand = Math.floor(Math.random()*array.length);
    return array [ rand ];
  }


  //object created to define all the contents of the game
  var life = {
  spouse : randArr ( nameArr ),
  house : randArr ( houseArr ),
  // added a comma - kl
  marriedAge: marryAge (),
  kids : kidsCount (),
  salary : salary ()
  };
  /**
  * adds the property of ageMod to the life object to be used
  * to describe the age at which the player got married
  * */
  life . ageMod = function (){
  if ( life . marriedAge < 25 ){
  return "young" ;
  }
  else if ( life . marriedAge < 40 && life . marriedAge > 25 ){
  return "nice" ;
  }
  else {
  return "ripe" ;
  }
  }()


  //output
  console . log ( "============================ \n " );
  console . log ( "Welcome to the game of life!!" );
  console . log ( "============================ \n " );
  console . log ( "Here is your life summary: \n ------------------------ \n\n " );
  console . log (
  "You got married to " +
  life . spouse +
  " at the " +
  life . ageMod +
  " age of " +
  life . marriedAge + "."
  );
  console . log ( "Together you had " +
  life . kids + " kids."
  );
  console . log (
  "You got a job making $" +
  life . salary +
  " annually."
  );
  console . log ( "The first home you purchased together was a " + life . house + "." );
