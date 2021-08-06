// The area of an equilateral triangle is ¼(√3a2) where "a" represents a side of the triangle. You are provided with the side "a". Find the area of the equilateral triangle.

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
  // let eq=(Math.sqrt(3))*(a*a)/4;

  // let flo=eq.toFixed(2);

  //   console.log(flo);

  let a = +userInput[0];
  let mul = Math.sqrt(3) * (a * a);
  let equilateralArea = (mul / 4).toFixed(2);
  console.log(equilateralArea);
});
