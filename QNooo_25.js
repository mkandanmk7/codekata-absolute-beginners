// Question:

// Write a code to get an integer N and print the values from N to 1.

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
  for (let i = N; i >= 1; i--) {
    console.log(i);
  }

  //end-here
});
