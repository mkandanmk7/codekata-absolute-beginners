// Question:
// You are provided with two numbers. Find and print the smaller number.

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
  // const num1 =userInput[0].split(" ");

  // const smaller = Math.min(num1[0], num1[1]);

  // // display the result
  // console.log(smaller);

  // methods:

  let Nums = userInput[0].split(" ");
  let n1 = +Nums[0];
  let n2 = +Nums[1];
  if (n1 > n2) console.log(n2);
  else console.log(n1);

  //end-here
});
