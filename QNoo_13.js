// Write a code to get an integer N and print values from 1 till N in a separate line.

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
  //ans:

  let N = userInput[0];
  for (let i = 1; i <= N; i++) {
    console.log(i);
  }
});
