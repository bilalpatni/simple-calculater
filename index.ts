#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

// conditional statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondnumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondnumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondnumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondnumber);
} else {
  console.log("pleace select valid operator");
}
