/**
 * Title: Discussion Board 6.1
 * Author: Nathaniel Liebhart
 * Modified by: Kurt Leadley
 * Date: June 19th, 2019
 * Description: Application with two errors using an objects
 */

/**
 * Expected output:
 * Person {id: 1, firstName: "Jim", lastName: "Doe", age: 32}
 * Person {id: 2, firstName: "Jill", lastName: "Doe", age: 35}
 * Jim Doe
 * Jill Doe
 */

function Person(id, first, last, age) {
	this.id = id;
	this.firstName = first;
	this.lastName = last;
	this.age = age;
}
// renamed function to just name - kl  Person.name was causing function not found error
// also had to pass in the Person object into this function and change this to person
var name = function(person) {
	return person.firstName + ' ' + person.lastName;
};
let jim = new Person(01, 'Jim', 'Doe', 32);
let jill = new Person(02, 'Jill', 'Doe', 35);

console.log(jim);
console.log(jill);

console.log(name(jim));
console.log(name(jill));
