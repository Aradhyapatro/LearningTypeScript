"use strict";
const num1 = 2.3;
const num2 = 3;
function add(num1, num2, showResult) {
    return num1 + num2;
}
console.log(add(+num1, +num2, "as-input"));
let num; //good practice
let numm = 5.6; //not really good practice but will still work
let result;
//result = 0;
const ob = {
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
let stringArray; //only string can be part of array
let anyArray; //any datatype can be part of array
stringArray = ["arya", "aradhya", "patro"];
for (const name of stringArray) {
    console.log(name.toUpperCase() + " here ");
}
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["read_admin"] = 56] = "read_admin";
    Role[Role["hope"] = 57] = "hope";
})(Role || (Role = {}));
console.log(Role);
let numpy;
let hoze;
hoze = "as-text";
function temp(num, numbo) {
    //let typescript do it if not explicitly wanna do it
    return num + numbo;
}
function ttemp(num, numbo) {
    //let typescript do it if not explicitly wanna do it
    const t = num + numbo;
    console.log(t);
}
let funcs;
let funcs1;
let funcs2;
//funcs2 = ttemp;
funcs2 = temp;
let k;
k = "re";
console.log(k);
k = 5.6;
console.log(k);
k = false;
