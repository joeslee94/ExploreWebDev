//#region Variables & Simple DataTypes in JS

var num = 5;
//in line comment is here
/* here is a multiline comment */

//DATA TYPES
//undefined, null, boolean, string, symbol, number, and object

//VAR can be used throughout the whole program
var myName = "Joe";
myName = 8;

//let is only able to be used within the scope of the method or class
let theNewName = "James";

//constant is an immutable value
const pi = 3.14;

//declaring variables
var a;

//assigning variables
a = 7;

//declaring and assigning variables
var b = 7;

//initialize variables
var a = 9;
var b = 10;
var c = "This is a string"

var a = 9;
var b = 10;
var c = "This is a string";

//all legal can add variables and strings for console to print
a + b;
b + " " + c;
a + " " + c;

//variable names are case sensitive
//adding numbers

var sum = 10 + 10;
var minus = 20 - 10;
var mult = 20 * 10;
var divide = 10 / 10;

//increment number
//++i or i++

//decrementing numbers
//--i or i--

//decimal
var decimalOne = 1.09123;
var decimalTwo = 9.12301;

decimalOne * decimalTwo;
decimalOne / decimalTwo;
decimalOne + decimalTwo;
decimalOne - decimalTwo;
decimalOne % decimalTwo;

//overloaded operators
//+=, -=, *=, /=, %=

//String variables and how to declare and use them
var firstName = "Joe";
var lastName = "Lee";

firstName + " " + lastName;

//using double quotes within the string we need to use \" string \"
//using single quotes within the string we need to can also use 'string and we can not use escape characters for double quotes'
var ifSingleQuotesAreUsed = 'Joe "Lee"';

/* Some code output FOR strings

\' single quotes
\" double
\\ backslash
\n newline
\r carriage return
\t tab
\b backspace
\f form feed

*/
var nameOfCamp = "free";
var introduction = "Hello, my name is " + nameOfCamp + " like America.";
// console.log(introduction);
// console.log(nameOfCamp.length)
// console.log(nameOfCamp[0]);

//strings are immutable
//unlike typscript, no rules on giving an variable a type
//lawless

nameOfCamp = 5;
// console.log(nameOfCamp);

//2D arrays behave similarly to C#
//append data in an array with the push function
//we can pop off data from an array with pop
//push: adds an item to the end
var arrayWithPush = ["Joe", "Lee"];
arrayWithPush.push(["is", "cool"]);
// console.log(arrayWithPush);

//pop: removes an item from the end
var popped = arrayWithPush.pop();
// console.log(arrayWithPush);
// console.log(popped);

//shift: removes an item from the front of the array
var shifted = arrayWithPush.shift();
// console.log(arrayWithPush);
// console.log(shifted);

//unshift: adds item to the beginning of the array
arrayWithPush.unshift("NewJoe", "NewCool");
// console.log(arrayWithPush);
//#endregion

//#region Functions

function abilityToReuse(){
    console.log("We can reuse this funciton.")
}

// abilityToReuse();

function printFullName(firstName, lastName)
{
    console.log(`Hello ${firstName} ${lastName}. It is nice to meet you!`)
}

// printFullName("Joe", "Lee");

//Global scope vs scope of a function
//local variable takes precedence over the global variable

var outerWear = "T-Shirt";

function changeClothes()
{
    var outerWear = "Sweater";
    return outerWear;
}

// console.log(changeClothes());