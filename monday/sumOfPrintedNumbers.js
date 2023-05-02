// 3. Sum of Printed Numbers

// Write a program that will print all the numbers from 1 to 135 AND the sum of the numbers that have been printed so far. Your output should look similar to this:

// Number is: 0 Sum: 0

// Number is: 1 Sum: 1

// Number is: 2 Sum: 3

// Number is: 3 Sum: 6

// ...

// You are NOT allowed to use an array to solve this exercise.

// Pseudocode:
// 1. we declare a variable to zero outside the loop to keep track of the sum of the numbers that have been printed so far
// 2. using a for loop to go through numbers from 1 to 135.
// 3. Inside the loop, we add the current number to the sum variable to update the sum of numbers that have been printed so far.
// 4. console.log to print the current number and the updated sum to console using string interpolation

let sum = 0;

for (let i = 1; i <= 135; i++) {
  sum += i;
  console.log(`Number is: ${i} Sum: ${sum}`);
}

// Diagram:
// 1. i=1, sum=1, result: number:1, sum: 1;
// 2. i=2, sum=2+1, result: number:2; sum 3;
// 3. i=3, sum=3+3, result: number:3, sum:6;
// ....
//  i=135, sum=135+9045, result: number: 135, sum:9180;
// i=136, larger than 135, loop will stop
