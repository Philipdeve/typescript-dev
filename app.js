console.log("Welcome");
var user = "Philip";
alert("Philip");
//explicit types allows me to define types for a variable or any data structure beforehand.
var admin;
admin = false;
console.log(admin);
//for arrays
var cars = [];
// cars.push(23) - error
cars.push("Audi");
console.log(cars);
// union types
var mixed = [];
mixed.push("Greet", 43, true);
console.log(mixed);
