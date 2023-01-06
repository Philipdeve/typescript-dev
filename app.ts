console.log("Welcome");

const user = "Philip";
alert("Philip");

//explicit types allows me to define types for a variable or any data structure beforehand.

let admin : boolean;

admin = false;

console.log(admin)

//for arrays

let cars: string[] = []
// cars.push(23) - error
cars.push("Audi")

console.log(cars)

// union types
let mixed: (string|number|boolean)[] = []
mixed.push("Greet", 43, true)
console.log(mixed)

// objects 

let userOne : object // This explicitly defines an object



//Dynamic types (This should be avoided)
let age: any = 5;
age = true;
console.log(age);
age = 'hello';
console.log(age);
age = { name: 'Philip' };
console.log(age);