//Question: You are given a number A in Kilometers. Convert this into B: Meters and C: Centi-Metres.
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let A = userInput[0];
  let B = A * 1000;
  let C = A * 100000;
  console.log(B);
  console.log(C);

  //end-here
});
