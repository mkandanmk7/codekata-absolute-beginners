// Getting input via STDIN

// Question: Let "A"  be a string. Remove all the whitespaces and find it's length.

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
  let len = A.split(" ").join(""); // split() gives joind array . join () returns string ;
  console.log(len.length); // 10
});
