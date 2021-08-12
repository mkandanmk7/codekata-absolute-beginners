// Question: Write a code to get an integer N and print the digits of the integer.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // let splt=userInput[0];
  // let emptyArray=[];
  // for( let i=0;i<splt.length;i++)
  // {
  //     emptyArray.push(splt[i]);
  // }
  // console.log(emptyArray.join(' '));

  let N = userInput[0];
  let digitOfNumber = [];
  for (let i = 0; i < N.length; i++) {
    digitOfNumber.push(N[i]);
  }
  console.log(digitOfNumber.join(" "));
});
