// Question:

//You are provided with a number check whether its odd or even.

// Print "Odd" or "Even" for the corresponding cases.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let number = userInput[0];
  if (number === 0) {
    console.log("Zero");
  } else if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
});
