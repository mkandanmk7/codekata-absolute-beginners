// Question:You are given Two Numbers, A and B. If C = A + B. Find C.

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
  //start-here
  //Your code goes here … replace the below line with your code logic
  let A = parseInt(userInput[0]);
  let B = parseInt(userInput[1]);
  let C = A + B;
  console.log(C);

  //end-here
});
