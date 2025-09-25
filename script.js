// Error 1:
let message = 'Welcome to the debugging exercise!';
console.log(message); 

// Error 2: 
//needs a variable defined?
console.log(document);

//Everything is an OBJECT in JS - represent objects using dot.notation
/*Different ways of accessing elements of the document~
  1. getElementById
  2. getElementsByClassName
  3. getElementsByTagName
  4. querySelector
  5. querySelectorAll
  6. I swear I'm adding these comments myself haha
*/


let button = document.querySelector('#actionButton'); 
button.addEventListener('click', eventHandler); 

// Error 3: 
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: 
function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerText = 'You clicked the button!';
}

let localMessage = 'Initial message';

//where did error 5 go

// Error 6: Misusing variable scope
function updateMessage() {
  localMessage = 'Updated message';
}

updateMessage();
console.log(localMessage); 

// Error 7: same as before without creating & storing variable 
//I couldn't get it to work - the message appears before clicking the button
document.getElementById('testButton').addEventListener('click', function testFunction() {
  console.log('Imposter Button Clicked!');
}); 

/*I tried looking up how to fix this and found suggestions to wrap it within a function,
I saw a syntax like this and tried it but not 100% sure how/why it works. I think it's because
it creates a new scope for the function so it doesn't interfere with other functions?*/

/*scrapped
 function testFunction() {
   console.log('Imposter Button Clicked!');
}
*/

// Error 8:
let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 - number2));

// Error 9: 
let nullVar = null;
console.log(nullVar);

// Error 10:
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar);

// Error 11:
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData);

// Error 12: 
//not defined
//tryToCallFunction();

// Error 13:
let user = { 
  name: 'Alice',
  age: 99  
};
console.log(user.name)

// Error 14: 
let someNumber = 123;
console.log(someNumber);

let textToUpper = 'something to upper';
//toUpperCase only works with string value
console.log(textToUpper.toUpperCase());

// Error 15:
/* There are 3 types of variables
  1. let -> can update value
  2. var -> can update value
  3. const -> cannot update values
*/

// let numbers = 123;
// let strings ="eqjrqt";
// let booleans = true;
// let nulls = null;
//let undefineds = undefined;
//let objects = {};
//let arrays = [];

let greeting = "Hello, world!";

// Error 16: 
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Error 17:
let five = '5';
if (five === 5) {
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); 
}

// Error 18:
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
};

let numbers = [];
numbers.push(1);
console.log(numbers);

// Error 19:
x = 5;
console.log(x);


// Error 20:
let myString = 'Hello';
console.log(myString); 

let myStringObject = {
  text1: "Goodbye World"
};

console.log(myStringObject.text1);