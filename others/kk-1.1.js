    /* 
    Title:Discussion 1.1
    Author: Chris Buskirk & JavaScript Kit (http://www.javascriptkit.com)
    Modified by: Keith Kozma (Include errors)
    Date: May 30, 2019
    Description: Using a JavaScript file from JavaScript Kit, this program will include values and variables
    which was modified to include 2 errors. 
    */

var myWeight;
var myDistance;

function HowMany(form)
{
var difference;
difference = (myDistance * myWeight) * .653;
form.Fdiff.value = difference;

if (difference < 100) {
form.comment.value="You better start working!";
}
if (diffrence > 101 && difference < 200) {
form.comment.value="Nice run, but you can do better.";
}
if (difference > 201 && difference < 300) {
form.comment.value="Very good! Push above 300 next time.";
}
if (difference > 301 && difference < 500) {
form.comment.value="Great! Your a runner.....keep it up!";
}
if (difference > 501 && difference < 700) {
form.comment.value="Bill Rogers move over!";
}
if (difference > 701) {
form.comment.value="Your my hero! Have a jelly doughnut."; 
}

}

function SetMyWeight(weight)
{
myWeight = weight.value;
}

function SetmyDistance(dis)
{
myDistance = dis.value;
}

function ClearForm(form){

form.myWeight = "";
form.myDistance.value = "";
form.Fdiff.value = "";
form.comment.value = "";

}