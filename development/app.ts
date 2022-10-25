const num1 = 2.3;
const num2 = 3;

function add(
  num1: number,
  num2: number,
  showResult: "as-text" | "as-password" | "as-input"
) {
  return num1 + num2;
}

console.log(add(+num1, +num2, "as-input"));

let num: number; //good practice
let numm: number = 5.6; //not really good practice but will still work

let result: string;
//result = 0;

const ob: {
  name: string;
  age: number;
  lastname: string;
  Tuples: [number, string, boolean];
} = {
  name: "Aradhya",
  lastname: "Patro",
  age: 21,
  Tuples: [3, "adsa", true],
};

// better to go with
const obj = {
  name: "Aradhya",
  lastname: "Patro",
  age: 21,
};

console.log(ob.name);

let stringArray: string[]; //only string can be part of array
let anyArray: any[]; //any datatype can be part of array

stringArray = ["arya", "aradhya", "patro"];

for (const name of stringArray) {
  console.log(name.toUpperCase() + " here ");
}

enum Role {
  admin,
  read_admin = 56,
  hope,
}

console.log(Role);

type experiment = number | string;
let numpy: experiment;
type todo = "as-text" | "as-post" | "as-heaven";
let hoze: todo;
hoze = "as-text";

function temp(num: number, numbo: number): number {
  //let typescript do it if not explicitly wanna do it
  return num + numbo;
}

function ttemp(num: number, numbo: number): void {
  //let typescript do it if not explicitly wanna do it
  const t = num + numbo;
  console.log(t);
}

let funcs: Function;
let funcs1: () => number;
let funcs2: (a: number, b: number) => number;

//funcs2 = ttemp;
funcs2 = temp;

let k: unknown;
k = "re";
console.log(k);
k = 5.6;
console.log(k);
k = false;
