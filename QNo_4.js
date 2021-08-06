// Question:  You will be provided with a number. Print the number of days in the month corresponding to that number.

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

  // method:using object:
  // let months=userInput[0];
  //     let days={0:"Error",1:31,2:28,3:31,4:30,5:31,6:30,7:31,8:31,9:30,10:31,11:30,12:31};
  //     if(months>12)
  //     {
  //         console.log("Error");

  //     }
  //     else{
  //         console.log(days[months]);
  //     }

  //method using if loop:

  let number = +userInput[0];
  if (number == 0 || number > 12) {
    console.log("Error");
  }
  if (number == 2) {
    console.log("28");
  } else if (
    number == 1 ||
    number == 3 ||
    number == 5 ||
    number == 7 ||
    number == 8 ||
    number == 10 ||
    number == 12
  ) {
    console.log("31");
  } else if (
    number == 2 ||
    number == 4 ||
    number == 6 ||
    number == 9 ||
    number == 11
  ) {
    console.log("30");
  }
});
