//#region Basic JS Syntax + Variables + Data Types
// console.log("hello");
let x = 7;
let y = 9;
let z = y + x;
z = 5;
z = 6;
z = 7;

// console.log(z);

//CamelCasing
let firstNum = 7;
let secondNum = 8;
let firstName = "Joe";
let zipCode = '07624';
let isLocal = true;

//getting the type of the variable
// console.log(typeof firstName);
// console.log(typeof firstNum);
// console.log(typeof isLocal);

//So far: string, number, boolean, undefined
//#endregion

//#region Data Coercion/Conversion
let nameToNum = "Joe";
// console.log(typeof nameToNum); //string

nameToNum = 7;
// console.log(typeof nameToNum); //number

//forcing string to number
let a = 7;
let b = '6';
let c = a + b;
// console.log(c);

b = parseInt(b);
c = a + b;
// console.log(c);
//#endregion

//#region Operators/Operands
//Assignment: =
//Math: +, -, /, *, % (PEMDAS)
//Increment/Decrement: ++, --
//Logical: &&, ||
//#endregion

//#region Arrays
let firstNumArr = [4, 8, 12, 16, 20, 24];
let secondStrArr = ["david", "kyle", "james"];

//indexing is the same as C#
// console.log(firstNumArr[0]);
// console.log(firstNumArr[1]);
// console.log(firstNumArr[2]);
// console.log(firstNumArr[3]);

//arrays are object...interesting
//arrays can hold different data types in a single array
//you can make additional space MEANING there are 6 items in firstNumArr
//I can add a number to the 10th index so that there are spaces from index 6-9
// firstNumArr[10] = 100;
// console.log(firstNumArr);
// console.log(firstNumArr.length);

//adding end to the array is push
//adding to front is unshift
//removing from end is pop
//removing from the front is shift
// firstNumArr.push(100);
// console.log(firstNumArr);

// firstNumArr.pop();
// firstNumArr.pop();
// console.log(firstNumArr);

// firstNumArr.shift()
// console.log(firstNumArr);

// firstNumArr.unshift(100);
// console.log(firstNumArr);
//#endregion

//#region Functions (Declaration, Expression)
//Block of code that can be continued to be reused
function FirstFunction()
{
    console.log("This is the basic syntax of a function in JavaScript.");
}
// FirstFunction();

function SayHello(firstName, lastName)
{
    console.log(`Hello, ${firstName} ${lastName}.`);
}
// SayHello("Joe", "Lee");

function CalcTax(dollarValue)
{
    let tax = dollarValue * 0.08;
    return tax;
}
//console.log(CalcTax(100));

//Code that should run in the future(?)
// setTimeout
// (
//     //function that will execute after a set amount of time
//     function()
//     {
//         console.log("I have waited 2 seconds");
//     },
//     //time to wait
//     2000
// );

//building off the timeout function
let counter = 0;
function timeOutToHello()
{
    setTimeout
    (
        function()
        {
            console.log("Hello " + counter++);
            timeOutToHello();
        },
        2000
    );
}
//timeOutToHello();

//IIFE** Keep this in mind
(function()
{
    //console.log("Immediately invoked function expression");
})();

//Fucntions from Functions
function goingToAssignIt()
{
    return 'one';
}

let newFuncHolder = goingToAssignIt(); //assigns the string to the var
// console.log(typeof newFuncHolder); //string

newFuncHolder = goingToAssignIt; // assigns the func to the var
// console.log(typeof newFuncHolder); //function

// console.log(newFuncHolder()); //since it is a func I can call
function threeFunctionAssign()
{
    return function threeFunctionAssignInFunc()
    {
        return "three"
    }
}
// console.log(threeFunctionAssign());
// console.log(threeFunctionAssign()());
//funception

//#endregion

//#region Decision Statement
//if/else if/else statement is the same as C# in syntax
//==, >, <, <=, >= is the same
let numToCompare = 3;
let stringToCompare = '3';

if(numToCompare == stringToCompare)
{
    // console.log("They are equal");
}
else
{
    // console.log("They are not equal");
}

if(numToCompare === stringToCompare)
{
    // console.log("They are strictly equal");
}
else
{
    // console.log("They are strictly not equal");
}

//=== the strict equality checker! It is definitely going to be different using this

//switch
let hero = "man";
switch(hero)
{
    case "superman":
        // console.log("It's superman!");
        break;
    case "batman":
        // console.log("It's batman");
        break;
    default:
        // console.log("It's a hero we don't care about!");
        break;
}

// ternary operator structure = (expression to be evaluated) ? if true assign this : if false assign this
let ternVarOne = 1, ternVarTwo = '1';
let result = (ternVarOne == ternVarTwo) ? "They are equal" : "They are not equal";
// console.log(result);

result = (ternVarOne === ternVarTwo) ? "They are equal" : "They are not equal";
// console.log(result);
//#endregion

//#region Iteration
let iterArr = [1, 2, 3, 4, 5, 6, 7, 8, 90];
for(i = 0; i < 10; i++)
{
    //console.log(iterArr[i]); //doesn't explode if there is nothing in that index
    // console.log("This for loop is similar to C# just without the int declaration for i");
    // console.log(i);
}


for (let j = 0; j < iterArr.length; j++) {
    const element = iterArr[j];
    //console.log(element);
}

let whileTerminator = 10;
// while(whileTerminator > 0)
// {
//     // console.log(whileTerminator--);
// }
//#endregion

//#region Scope of Vars + Module Pattern + Revealing Module Pattern
let scopeTestVar = '5000'; //global

function testingScope()
{
    console.log(scopeTestVar);
    scopeTestVar = 6000; //local
}

// testingScope();
// console.log(scopeTestVar);
//local scope is given priority

//global scope naming collisions might happen
//var attaches a variable to the global scope
//let does not

//Mod Pattern
var modPatIIFE = (function() 
{
    //private variable
    let count = 0;
    
    function returnMessage(message)
    {
        console.log(message + '---' + count);
    }
    
    //return an object
    return{
        //value: count,
        get: function() {return count;},
        set: function(value) {count = value;},

        increment: function()
        {
            count++;
            returnMessage('After incrementing: ');
        },

        reset: function()
        {
            returnMessage('Before reset: ');
            count = 0;
            returnMessage('After reset: ');
        }
    }



})();
// modPatIIFE.increment();
// modPatIIFE.increment();
// modPatIIFE.increment();
// modPatIIFE.increment();

// // console.log(modPatIIFE.count); //since private it will not return because it is not in the return block
// // accidentally created a closure
// // console.log(modPatIIFE.value); //value of the count

// modPatIIFE.set(7);
// console.log(modPatIIFE.get());

// modPatIIFE.reset();
// console.log(modPatIIFE.get());

//Revealing Module Pattern: function declarations with names so that we just need to return what we want
//Benefits: reveals the public functions and is cleaner and clearer
//Can break linkage of function declaration and what is returned
var modPatRevIIFE = (function() 
{
    //private variable
    let count = 0;
    
    
    function incrementCount()
    {
        count++;
        returnMessage('After incrementing: ');
    }
    
    function resetCount()
    {
        returnMessage('Before reset: ');
        count = 0;
        returnMessage('After reset: ');
    }
    function getCount()
    {
        return count;
    }

    function setCount(value)
    {
        count = value;
    }

    function returnMessage(message)
    {
        console.log(message + '---' + count);
    }
    //return an object
    return{
        //value: count,
        get: getCount,
        set: setCount,
        increment: incrementCount,
        reset: resetCount
    }
})();
// console.log(modPatRevIIFE.get());

// modPatRevIIFE.increment();
// modPatRevIIFE.increment();
// modPatRevIIFE.increment();
// modPatRevIIFE.increment();
// modPatRevIIFE.increment();

// console.log(modPatRevIIFE.get());

// modPatRevIIFE.reset();

// console.log(modPatRevIIFE.get());

// modPatRevIIFE.set(20);

// console.log(modPatRevIIFE.get());

//#endregion

//#region Closures
//preserves the values we passed into the function

function closureSayHi(name){
    return function(){
        console.log('hello ' + name);
    }
}

let joe = closureSayHi('Joe');
let joe2 = closureSayHi('Joe2');
let joe3 = closureSayHi('Joe3');

// joe();
// joe2();
// joe3();

//#endregion

//#region Object Literals
// array = many data elements
// car array will contain many years, colors, prices of cars
// object = contains many attributes to a specific object
// car object contains year, color, price of ONE car
// add properties on the fly --> dynamically typed
let car =
{
    make: 'makeOne',
    model: 'modelOne',
    year: 2021,

    getPrice: function()
    {
        return 5000;
    },
    
    printDescription: function()
    {
        console.log(`${this.make} and ${this.model}`);
    }
}

// car.printDescription();
// console.log(car.getPrice());
// console.log(car.make);
// console.log(car.model);
// we can chain the object, property chain so 
var chainedObjProp =
{
    myProperty: {b: 'hi'}
};

// console.log(chainedObjProp.myProperty.b);

//object
var arrObjProp =
{
    //object property
    myProperty:[
        //array of objects
        {a: 'hi'},
        {b: 'this'},
        {c: 'can'},
        {d: 'get'},
        {e: 'crazy'},
        {f: 'hi'}
    ]
};

// console.log(arrObjProp.myProperty[0]);
// console.log(arrObjProp.myProperty[1]);
// console.log(arrObjProp.myProperty[2]);
// console.log(arrObjProp.myProperty[3]);
// console.log(arrObjProp.myProperty[4]);
// console.log(arrObjProp.myProperty[5]);
//#endregion

//#region THIS keyword
//This determines the way in which a function is called
//binds this keyword to a given context BASED on how we call the function
function first(){
    return this;
}

// console.log(first() === global);
//since we did not make it in a IIFE, it is a global variable

function second() {
    'use strict';
    
    return this;
}
// console.log(second() === global);
// console.log(second() === undefined);

//context changed the this keyword
let myObject = {value: 'My Object'};

//value is set on the global value
global.value = 'Global Object';

function third(name) {
    return this.value + ' ' + name;
}

console.log(third());
console.log(third.call(myObject, 'nameOne'));
console.log(third.apply(myObject, ['nameThree']));

//this key word is bound through the object that is calling it