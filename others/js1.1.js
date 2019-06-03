//Random meal price//
var price = Math.floor(Math.random() * 100) +1;
//percentage set to 20%//
var percent = .2;      
//formula to calculate//
var result = (price * percent);
//print price//
console.log("This is the meal price: $" + price + ".00");
var readableTipPercent = percent * 100;
readableTipPercent +=  "%";
//print percent//
console.log("This is the percent of the tip: " + readableTipPercent);
//print the tip amount//
console.log("This is the amount to tip: $" + result.toFixed(2));