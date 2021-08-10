// Write a code to get the input and print it 5 times.

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
  let N = userInput[0];
  for (let i = 0; i < 5; i++) console.log(N);
});
