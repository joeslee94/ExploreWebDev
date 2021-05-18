//#region LessonOne
//Quick Notes:
//If I make the let a const, we can't change it since it is a constant
//IF we make hello a variable to hold a string, it can only continue to be a string
//hello = 7 will throw an error

let hello: string = "world";
hello = "newHello";
// console.log(hello);
//#endregion

//#region Functions (Methods in C#)
//Quick Notes:
//In JS we can pass in any data type into the function but it won't make sense
//Typescript allows us to specify these inputs so that we are locking in what we want the user to type in
//This function below is taking in two strings and requiring that a string be returned

let getFullName = (firstName: string, lastName: string): string =>
{
    return firstName + " " + lastName;
};
// console.log(getFullName("FirstName1", "LastName1"))
// console.log(getFullName("FirstName2", "LastName2"))
// console.log(getFullName("FirstName3", "LastName3"))
//#endregion

//#region Interfaces & Optional Properties
//Quick Notes:
//Interfaces in TS is very similar to C#
//However having objects inherit from an interface makes it so that it is tightly coupled
//We have to enact everything we write in the interface into the objects themselves
//**Look into how to decouple code and have them loosely coupled
//**CAN put a question mark to define a property as optional
interface UserInterface
{
    name: string;
    age?: number;
    getMessage(): string;
}

// const objUser: {name: string, age: number} =
// {
//     name: "NameOne",
//     age: 40
// } //This becomes

const objUser : UserInterface =
{
    name: "nameOne",
    age: 40,
    getMessage()
    {
        return "Hello" + this.name;
    }
}
// console.log(objUser.name + " " + objUser.age);
// console.log(objUser.getMessage());

// const objUserTwo: {name: string, age: number} =
// {
//     name: "NameTwo",
//     age: 60
// } //This becomes

const objUserTwo : UserInterface =
{
    name: "nameTwo",
    // age: 35
    getMessage()
    {
        return "Hello" + this.name;
    }
}
//console.log(objUserTwo.name + " " + objUserTwo.age);
//console.log(objUserTwo.getMessage());
//#endregion

//#region Short Class Overview
//Quick Notes:
//WE CAN MAKE A CLASS as well in typescript
//My question is I know the difference between classes and interfaces, how can I explain it well to others for typescript
class Animals
{
    name?: string;
    legs?: number;
}

const dogs : Animals =
{
    name: "dogOne",
    legs: 6
}

const cats : Animals = {}
//#endregion

//#region Unions & What They Are
//Quick Notes: Unions
//be careful of using unions BECAUSE if we use too many unions, the code will break
let userName: string = "Name One";

let pageName: string|number = "1";
pageName = 1;

let errorMessage: string|null = null;
errorMessage = "You did not input a valid string!"

let userThree: UserInterface | null = null;
//#endregion

//#region Aliases/Declaring Types
//Quick Notes: Aliases
//we can add this in an interface like UserInterface
//id: ID and now the interface has an id field that models the type
//entities --> entities[] can make it easily read
type ID = string;

type PopularTags = string;
const popTags: PopularTags[] = ["firstword", "secondword"];

//custom type and might be a popular tag or not
type MaybePopTags = PopularTags | null

const dragonsTag: MaybePopTags = "dragon";
//#endregion

//#region Types
//Quick Notes: types **stick to void or unknown
//Void
const doSomething = (): void =>
{
    console.log("doSomething");
};

let foo: void = undefined; //can also be null

//Any could be the worst type and might lead to more problems
let whateverWeWant: any = 1;
whateverWeWant = "so anything";
whateverWeWant = true;
whateverWeWant = "this is a double edged sword";
whateverWeWant = "so avoid using it";

//Never is a function that never eneds
const doSomethingElse = (): never =>
{
    throw "never";
}

//Unknown is an alternative to any
let varAny: any = 10;
let varUnknown: unknown = 20;

//Any can be changed
let s1: string = varAny;

//HOWEVER unknown can't be changed as such and unknown to unknown relationship seems to be preserved
let s2: unknown = varUnknown;

//we need to convert and define the unknown variable
let s3: string = varUnknown as string;

let pageNum: string = "1";
let numericPage: number = pageName as number;

// console.log(numericPage);

//Quick Notes: working with DOM
//Using the as keyword to specify correct data types
let page: any = 1;
let pageNumber = page as string;
let pageToNum = page as number;

// console.log(pageNumber + " " + pageToNum);

// const someElement = document.querySelector(".foo") as HTMLInputElement;
// //typescript does not know about our markups
// console.log('someElement', someElement.value);

// //Adding a listener
// someElement.addEventListener('blur', (event) =>
// {
//     const target = event.target as HTMLInputElement
//     console.log('event', target.value)
// })
//#endregion

//#region Classes/Interfaces/Inheritance
//Quick Notes: Classes, private, protected are the same as C#
//static is ONLY for the class to reference outside of the scope of the class
//static properties can be accessed within the scope of the class

interface PersonName
{
    getFullName(): string;
}

class Person implements PersonName
{
    firstName: string;
    lastName: string;

    constructor(aFirstName: string, aLastName: string)
    {
        this.firstName = aFirstName;
        this.lastName = aLastName;
    }

    getFullName(): string
    {
        return this.firstName + " " + this.lastName;
    }

}

const personOne = new Person("NameOne", "NameLastOne");
// console.log(personOne.getFullName());

class Man extends Person
{
    private musculature;

    setMusculature(aMusculature: string): void
    {
        this.musculature = aMusculature;
    }

    getMusculature(): string
    {
        return this.musculature;
    }
}

const manOne = new Man("ManOne", "ManTwo");
//console.log(manOne.getFullName());

//giving a private field in the new class a value
manOne.setMusculature("buffaf");
// console.log(manOne.getMusculature());

//person cannot access the fields within the man class
//#endregion

//#region Generics
//Quick Notes: Generics
const addID = <T extends object>(obj: T) =>
{
    const id = Math.random().toString(16);
    return{
        ...obj,
        id,
    };
};

interface IUser<T>
{
    name: string;
    data: T;
}

const userOne: IUser<{ meta: string }> = {
    name: "Jack",
    data: {
        meta: "aString",
    },
};

const userTwo: IUser<{ meta: string[] }> = {
    name: "Jak",
    data: {
        meta: ["aString", "bString", "cString"],
    },
};

const userOneID = addID<IUser<object>>(userOne);
const userTwoID = addID<IUser<object>>(userTwo);
// console.log(`The result is ${result.name} and the id is ${result.id}`);
// console.log("result", userOneID);
// console.log("result", userTwoID);
//#endregion

//#region Enums
enum STATUS{
    NOTSTARTED = "Not Started",
    INPROGRESS = "In Progress",
    COMPLETE = "Done",
}

let NOTSTARTED: STATUS = STATUS.NOTSTARTED;

interface task{
    id: string;
    status: STATUS;
}

console.log(STATUS.NOTSTARTED);
console.log(STATUS.INPROGRESS);
console.log(STATUS.COMPLETE);
//#endregion