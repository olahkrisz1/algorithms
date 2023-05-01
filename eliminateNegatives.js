// 7. Eliminate the Negatives

// Given an array X, write a program that will remove all negative numbers and replace them with a 0. For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].

// Pseudocode:

// 1. declare a variable and assign an array to it with values of [2,-1,4,-3]
// 2. use a 'for' loop to go over each elements in the array.
// 3. Inside the loop, use an 'if' statement to check if the current element is negative. If it is, replace it with 0.
// 4. after the loop, console.log to print new array in form of a message.

const x = [2, -1, 4, -3];
for (let i = 0; i < x.length; i++) {
  if (x[i] < 0) {
    x[i] = 0;
  }
}

console.log(`The new array is [${x}]`);

// Diagram:
// i=0, 2 is not smaller than 0, remains 2.
// i=1, -1 is smaller than 0, updating to 0.
// i=2, 4 is not smaller than 0, remains 4.
// i=3, -3 is smaller than 0, updating to 0.
// loop is finishing.
// printing out message with new array of [2,0,4,0]
