// Question:

// Write a code get an integer number as input and print the sum of the digits.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // var getInput=userInput[0];
  // var empty=0;
  // for(i=0; i<getInput.length; i++) {
  //   empty=empty+parseInt(getInput[i]);

  // }
  // console.log(empty);

  let N = userInput[0];

  let sumOfDegit = 0;
  for (i = 0; i < N.length; i++) {
    sumOfDegit = sumOfDegit + parseInt(N[i]);
  }

  console.log(sumOfDegit);
  //end-here
});
