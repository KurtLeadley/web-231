/* 
============================================ 
; Title: Assignment 1.1 
; Author: Joshua Hughes 
; Date: 29 May 2019 
; Modified By: Joshua Hughes 
; Description: This program takes a name input 
; and makes an anagram array 
; out of the letters of your name. 
;=========================================== 
*/
//method to create a random word with a letter input
function Word(letter){
    //word object with arrays of words for each letter
    var word = {  // MINIMIZED FOR SCREEN SHOT
        a:["able","acceptable","amazing"],
        b:["basic","beautiful","brilliant"],
        c:["charming","cowardly","confident"],
        d:["daring","diligent","dull"],
        e:["elegant","eccentric","exhausting"],
        f:["fair","flamboyant","friendly"],
        g:["gorgeous","grumpy","gullible"],
        h:["hairy","hot","healthy"],
        i:["ignorant","illuminating","interesting"],
        j:["jolly","jovial","just"],
        k:["keen","kind","klutzy"],
        l:["lazy","loveable","loyal"],
        m:["modest","merry","mundane"],
        n:["naīve","noble","nutty"],
        o:["original","observant","oblivious"],
        p:["pretty","punctual","plain"],
        q:["quaint","quiet","quick"],
        r:["ravishing","radiant","regular"],
        s:["smart","stunning","simple"],
        t:["tantalizing","tricky","tempting"],
        u:["uplifting","useful","unique"],
        v:["vibrant","virtuous","vicious"],
        w:["wild","wonderful","wacky"],
        x:["xeric","xenogeneic","xenial"],
        y:["young","youthful","yielding"],
        z:["zestful","zippy","zany"]
    }
    var randChar = Math.floor(Math.random() * Math.floor(3));
    //console.log(randChar);   //generate a random number between 0 and 2 becuase arrays of words have 3 elements
    return word[letter][randChar];                              //returns a random word from the 'word' object
}
//function to create the anagram accepts the word, defined as 'userInput'
function createAnagram(userInput){
    var nameAnagramArr = [];                    // initialize empty array for the anagram
    var userName =  userInput;                  // assign passed value to local variable\\
    userName = userName.toLowerCase();
    console.log(userName);          // redefines username to lower case to match word object values
    var nameArr = userName.split("");           // splits the username characters into an array of individual letters 
    //loops through the array of letters
    for (var i=0; i < nameArr.length; i++){
        var tempLetter = nameArr[i]; 
        console.log(tempLetter);           //temporary variable for the letter
        var tempWord = Word(tempLetter);                  //passes tempLetter variable into 'Word' function to return a word//
        nameAnagramArr.push(tempWord);          //push the random word into the anagram array
    }
    console.log(nameAnagramArr);
   return nameAnagramArr.toString();           //outputs the anagram array as a string
}
createAnagram("kurt");                          //calls the function and passes a name into the function