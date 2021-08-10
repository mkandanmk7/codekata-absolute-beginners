// Question:  You are provided with the radius of a circle "A". Find the length of its circumference.

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

  // var radius=userInput[0];
  // let output=2*Math.PI*radius;
  // if(output<0)
  // {
  //     console.log("Error");
  // }
  // else
  // console.log(output.toFixed(2));

  let A = userInput[0];

  //formula= 2*PI*radius;

  let circumference = 2 * Math.PI * A;
  console.log(circumference.toFixed(2));

  //end-here
});
