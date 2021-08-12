// Question:You are given with a number "N", find its cube.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //  let getcube=userInput[0];
  //  let cube=getcube*getcube*getcube;
  //  console.log(cube);
  //   //end-here

  //Math.pow(method)

  let N = userInput[0];
  let cube = Math.pow(N, 3);
  console.log(cube);
});
