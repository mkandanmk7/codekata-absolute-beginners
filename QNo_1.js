// Print the First 3 multiples of the given number "N". (N is a positive integer)

// Note: print the characters with a single space between them.

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

  //  let num=userInput[0];
  //  let mul=[];
  //  for(let i=1;i<=3;i++){
  //     mul.push(i*num);
  //  }
  //  console.log(mul.join(" "))
  let N = userInput[0];
  let multiply = [];
  for (
    let i = 1;
    i <= 3;
    i++ //limitation is first 3 multiples.
  ) {
    multiply.push(i * N);
  }
  console.log(multiply.join(" ")); //join() returns array elements wrt ,
});
