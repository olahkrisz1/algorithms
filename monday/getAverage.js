// 6. Get Average

// Given an array X, write a program that will return the average value of all elements in the array. For example, for array X = [2,1,3] your output should be 2.

// Pseudocode:

// declare array x with values of [2,1,3]
// declare a variable named 'sum' with value of zero.
// using for loop to go through all elements in array.
// inside loop, we add each element of array x to the variable 'sum'.
// after the loop, we calculate the average value of the array by dividing the sum of all elements by the length of the array.
// print out to console in form of message the average value.

const x = [2, 1, 3];

let sum = 0;

for (let i = 0; i < x.length; i++) {
  sum += x[i];
}

let average = sum / x.length;

console.log(`The average value of this array is: ${average}`);

// Diagram:

// i=0, sum= 0+2 = 2;
// i=1, sum= 2+1 = 3;
// i=2, sum= 3+3 = 6;
// loop finishing
// average = sum/x.length = 6/3 = 2;
// printing out message
