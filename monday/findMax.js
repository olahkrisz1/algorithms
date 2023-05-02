// 5. Find Max

// Given an array X, write a program that would find the maximum value of the array. Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.

// Pseudocode:
// assign a random array (including 0 and negative value) to a new variable X.
// we declare a variable 'max' to the first element of the array.
// using 'for' loop to go through over all elements in the array starting from second element.
// Inside the loop, we use an 'if' statement to check if the current element is greater than the maximum value (max)
// If it is, update the value of 'max' to the current element.
// console.log to print the maximum value of the array.

const x = [2, -3, 0, -1, 5];
let max = x[0];

for (let i = 1; i < x.length; i++) {
  if (x[i] > max) {
    max = x[i];
  }
}

console.log(`The maximum value of this array is ${max}`);

// Diagram:
// max=2;
// i=1, -3 smaller than 2, max = 2.
// i=2, 0 smaller than 2, max=2.
// i=3, -1 smaller than 2, max= 2.
// i=4, 5 larger than 2, then update value of max, max=5 now.
// Loop finishing as finished length of array, then prints out message with max value.
