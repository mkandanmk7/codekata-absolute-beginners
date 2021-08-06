// Question:You are given with a number A i.e. the temperature in Celcius. Write a program to convert this into Fahrenheit.

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
  // let a=userInput[0];
  // let b=(a*1.8)+32;
  // let fahrenheit=b.toFixed(2);
  // console.log(fahrenheit);

  let A = userInput[0];

  let fahrenheit = A * 1.8 + 32;
  console.log(fahrenheit.toFixed(2));
  //fahrenheit = celsius * 1.8 + 32

  //end-here
});
