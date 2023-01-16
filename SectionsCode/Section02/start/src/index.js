// function greeting() {
//   return "Good Morning!";
// }

// function printMessage(anFunction) {
//   console.log(anFunction());
// }

// printMessage(greeting);

// function greeting() {
//   return function () {
//     return "Good Morning!";
//   };
// }

// function printMessage(anFunction) {
//   console.log(anFunction);
// }
// printMessage(greeting());

// import { compose, pipe } from "lodash/fp";

// let username = "   Harley   ";
// let message = "Hello " + username.trim() + " Good Morning!";

// const trim = (name) => name.trim();
// const generateMessage = (name) => `Ho ${name} ${message}`;
// const convertToUpper = (name) => name.toUpperCase();

// // const result = generateMessage(convertToUpper(trim(username)));
// const newFunc = pipe(trim, convertToUpper, generateMessage);
// const result = newFunc(username);
// console.log(result);

// function multi(a) {
//   return function (b) {
//     return a * b;
//   };
// }

// let result1 = multi(2)(5);

// // same as
// const multipli = (a) => (b) => a * b;
// let result2 = multipli(2)(5);
// console.log(result2);

// import { compose, pipe } from "lodash/fp";

// let username = "   Harley   ";
// let message = "Hello " + username.trim() + " Good Morning!";

// const trim = (name) => name.trim();
// const generateMessage = (message) => (name) => `Hello ${name}, ${message}!`;
// const convertToUpper = (name) => name.toUpperCase();

// const newFunc = pipe(trim, convertToUpper, generateMessage("pease out"));
// const result = newFunc(username);
// console.log(result);

// const employee = {
//   name: "Harley",
//   age: 22,
//   company: "Canada",
//   city: "Toronto",
// };

// // const newEmployee = Object.assign({}, employee, { name: "Martin" });
// const newEmployee = {
//   ...employee,
//   name: "Martin",
//   company: { ...employee.company, city: "Calgary" },
// };

// console.log(employee);
// console.log(newEmployee);

import { produce } from "immer";

const employee = {
  name: "Harley",
  age: 22,
  company: "Canada",
  city: "Toronto",
};

// const newEmployee = {
//   ...employee,
//   name: "Martin",
//   company: { ...employee.company, city: "Calgary" },
// };
const newEmployee = produce(employee, (draftState) => {
  (draftState.name = "Martin"), (draftState.city = "Calgary");
});

console.log(employee);
console.log(newEmployee);
