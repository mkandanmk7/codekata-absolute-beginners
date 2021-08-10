// Write a code to get 2 integers as input and find the HCF of the 2 integer without using recursion or Euclidean algorithm.

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
  // let getValue=userInput[0].split(' ');
  // let num1=+getValue[0];
  // let num2=+getValue[1];
  // let hcf=0;
  // /*if(num1<num2)
  // {
  //     let smallest=num1;

  // }
  // else(num1>num2)
  // {
  //     smallest=num2;

  // }
  // */
  // for (let i=1;i<=num1 && i<=num2;i++)

  // {
  //     if((num1%i==0)&& (num2%i==0))
  //     {
  //      hcf=i;
  //     }
  // }
  // console.log(hcf);

  let input = userInput[0].split(" ");
  let A = input[0];
  let B = input[1];
  while (A != B) {
    if (A < B) B -= A;
    else A -= B;
  }
  console.log(A);
});
