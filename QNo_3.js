// Question:You are given three numbers A, B & C. Print the largest amongst these three numbers.

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
  //method: if loop :

  // let num1=+userInput[0];
  // let num2=+userInput[1];
  // let num3=+userInput[2];
  // if(num1>num2 && num1>num3)
  // {
  //     console.log(num1);
  // }
  // else if(num2>num1 && num2>num3)
  // {
  //     console.log(num2);
  // }
  // else
  // {
  //     console.log(num3);
  // }

  //method: using Math.max()

  let A = userInput[0];
  let B = userInput[1];
  let C = userInput[2];

  let largest_Number = Math.max(A, B, C);
  console.log(largest_Number);
  //end-here
});
