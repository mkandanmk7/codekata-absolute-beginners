// Write a code get an integer number as input and print the odd and even digits of the number separately.

const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  let N = userInput[0];
  let even = [];
  let odd = [];

  for (i = 0; i < N.length; i++) {
    if (N[i] % 2 === 0) {
      even.push(N[i]);
    } else {
      odd.push(N[i]);
    }
  }
  console.log(even.sort().join(" "));
  console.log(odd.sort().join(" "));
});
