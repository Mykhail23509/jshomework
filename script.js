/*let myVariable = 15;

console.log('WORKS');

let myBoolean = true;
let myNumber = 12;
let mySecondVarNumber = 12 + 5 * 7;
let myUndefined = undefined;

let myString = "Now its other text";

myString = "Ростык лох";
console.log(mySecondVarNumber, myString, myNumber);


var myVariableVar = "Here is some text";

const myConst = "Here is some text";

 const userAge = parseInt(prompt('How old are you'));
console.log(userAge, typeof userAge);

console.warn('ростык лох');
console.error('ростык супыр лох');

console.dir(navigator);

let myObject = {
	name: "John",
	age: 15,
}

console.log(myObject)*/




//  innerHTML
let myObject = {
	name: "John",
	age: 15,
}

let divClassContainer = document.querySelector('.class-container');
let divIdContainer = document.querySelector('#id-container');

divClassContainer.innerHTML = `
	<h1>GoodBye!</h1>
`
