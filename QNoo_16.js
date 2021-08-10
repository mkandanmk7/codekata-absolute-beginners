// Write a code to get 2 integers A and N. Print the integer A, N times in separate line.

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let getInput = userInput[0].split(" ");
  let A = getInput[0];
  let N = getInput[1];
  for (let i = 0; i < N; i++) console.log(A);
});
