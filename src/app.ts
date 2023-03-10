import { Invoice } from './classes/Invoice.js';

// interfaces
export interface IsPerson {
  name: string;
  age?: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: 'philip',
  //age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent ', amount);
    return amount;
  },
};

console.log(me);
me.speak('hello, world');

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
});

const anchor = document.querySelector("a")!;
if (anchor) {  
  console.log(anchor.href);
}
console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});

// TUPLES
let arr = ['fred', 18, true];
arr[0] = false;
arr[1] = 'zina';
arr = [50, false, 'yoshi'];

let tup: [string, number, boolean] = ['prince', 25, true];
// tup[0] = false;
tup[0] = 'philip';

let student: [string, number];
// student = [23564, 'beauty'];
student = ['beauty', 23564];