// 8. Number to String

// Write a program that takes an array of numbers and turns the negative values to strings. For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].

// Pseudocode:

//1. declare a variable named x and assign it to an array with elements of [1,-4,0,-1].
//2. use a 'for'loop to go over each element of array.
//3. inside the loop, use an 'if' statement to check if the current element is negative. if it is, replace it with the string 'Turing'.
//4. after the loop, we console.log new array in form of a message.

const x = [1, -4, 0, -1];

for (let i = 0; i < x.length; i++) {
  if (x[i] < 0) {
    x[i] = "Turing";
  }
}
console.log(`The new array is [${x}]`);

// Diagram:
// i=0, 1 is not smaller than 0, remains 1.
// i=1, -4 is smaller than 0, updates to string.
// i=2, 0 is not smaller than zero, remains 0.
// i=3, -1 is smaller than 0, updates to string.
// loop is finished.
// prints out message with new array values of [1, Turing, 0, Turing].
