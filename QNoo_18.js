// You are provided with a number, "N". Find its factorial.

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
  // ans:  factorial= product of all number 1 to that N number;

  // let N=userInput[0];
  // let factorial=1;
  // for(let i=1;i<=N;i++)

  //     factorial*=i;

  // console.log(factorial);

  //mehtod: recursive:

  function fact(x) {
    if (x == 0) return 1;
    else return x * fact(x - 1);
  }

  let N = userInput[0];
  console.log(fact(N));
});
