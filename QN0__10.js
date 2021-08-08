// Question:
// Using the method of looping, write a program to print the table of 9 till N in the format as follows:
// (N is input by the user)

// 9 18 27...

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

  let N = +userInput[0];
  let table = [];
  for (let i = 1; i <= N; i++) {
    table.push(9 * i);
  }
  console.log(table.join(" "));
});
