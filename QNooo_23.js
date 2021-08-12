// Question:

//Write a program to get a string as input and reverse the string without using temporary variable.
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let getInput = userInput[0];
  let reverseStr = [];
  for (let i = 0; i < getInput.length; i++) {
    reverseStr.unshift(getInput[i]);
  }
  console.log(reverseStr.join(""));
});
