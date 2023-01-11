"use strict";
console.log("Welcome");
const user = "Philip";
alert("Philip");
//explicit types allows me to define types for a variable or any data structure beforehand.
let admin;
admin = false;
console.log(admin);
//for arrays
let cars = [];
// cars.push(23) - error
cars.push("Audi");
console.log(cars);
// union types
let mixed = [];
mixed.push("Greet", 43, true);
console.log(mixed);
// objects
let userOne; // This explicitly defines an object
//Dynamic types (This should be avoided)
let age = 5;
age = true;
console.log(age);
age = "hello";
console.log(age);
age = { name: "Philip" };
console.log(age);
console.log("Added better workflow for my typescript file ");
//functions
// let greet: Function = () => {
//   console.log('hello, world');
// }
// greet = 'hello';
// greet = () => {
//   console.log('hello, again');
// }
const add = (a, b, c = /*?*/ 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10, "web");
const minus = (a, b) => {
    //although ts is well aware the function is returning a number
    return a + b;
};
let result = minus(10, 7);
console.log(result);
const greetUser = (uid, item) => {
    console.log(`${uid} and ${item}`);
};
greetUser(1, "ww");
// function signature
let greet;
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
