// 4. Print the elements of an array

// Given an array X = [1,4,2,12], write a program that will iterate through the array and print all numbers on the screen. Your program should work with arrays of all sizes.

// Pseudo code:
// 1. declare variable x that is an array of given values of 1,4,2,12
// 2. Using for Loop to oterate over all the elements in the array.
//3. Inside the loop, i use index i to access each element and print it to console.

const x = [1, 4, 2, 12];

for (let i = 0; i < x.length; i++) {
  console.log(x[i]);
}

// Diagram
// 1 . i=0, first item in the block has value of 1, result= 1;
// 2 . i=1, second item in the block has value of 4, result= 4;
// 3 . i=2, third item in the block has value of 2, result= 2;
// 4 . i=3, fourth item in the block has value of 12, result= 12;
// 5. loop has gone through the whole length of the array, loop is ending
