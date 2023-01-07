console.log("Welcome");

const user = "Philip";
alert("Philip");

//explicit types allows me to define types for a variable or any data structure beforehand.

let admin: boolean;

admin = false;

console.log(admin);

//for arrays

let cars: string[] = [];
// cars.push(23) - error
cars.push("Audi");

console.log(cars);

// union types
let mixed: (string | number | boolean)[] = [];
mixed.push("Greet", 43, true);
console.log(mixed);

// objects

let userOne: object; // This explicitly defines an object

//Dynamic types (This should be avoided)
let age: any = 5;
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

const add = (a: number, b: number, c: /*?*/ number | string = 10): void => {
  console.log(a + b);
  console.log(c);
};

add(5, 10, "web");

const minus = (a: number, b: number): number => {
  //although ts is well aware the function is returning a number
  return a + b;
};

let result = minus(10, 7);
console.log(result);

//type Aliases
type StringOrNum = string | number;

const greetUser = (uid: StringOrNum, item:string) => {
    console.log(`${uid} and ${item}`)
}

greetUser(1, "ww")