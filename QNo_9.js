// Question:  You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 16, 25, 36, 49, 64, 81, .......

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  // let getInput=userInput[0];
  // let Multi=getInput*getInput;
  //   if(getInput<0)
  //   {
  //       console.log("Error");

  //   }
  //     else if(getInput==0)
  //     {
  //         console.log("0");

  //     }
  //     else
  // {
  //     console.log(Multi);
  // }

  //method:

  let N = userInput[0];

  console.log(Math.pow(N, 2));
});
