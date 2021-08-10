// Question: You are given with Principle amount($), Interest Rate(%) and Time (years) in that order. Find Simple Interest.

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
  // (S.I. = P*T*R/100)
  let getInput = userInput[0].split(" ");
  let P = getInput[0];
  let T = getInput[1];
  let R = getInput[2];
  let SimpleInterest = (P * T * R) / 100;
  console.log(SimpleInterest.toFixed(2));
});
