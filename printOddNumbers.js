// 2. Print Odd Numbers 1 - 135

// Write a program using JavaScript that will print all the odd numbers from 1 to 135.

// Solution A

// Pseudocode:
// 1. Loop through numbers from 1 to 135 and making i goes each time 'i+=2';
// 2. Print the result

for (let i = 1; i <= 135; i += 2) {
  console.log(i);
}

// Diagram:
// 1. i=1, result=> 1;
// 2. i+2; i=3, result=> 1,3;
// 3. i+2; i=5, resut=> 1,3,5;
// ...
//    i+2, i=135, result => 1,3,5,...135;
//    i+2, i=137, larger than 135, loop will stop.

// Solution B

// Pseudocode:
// 1. loop through numbers from 1 to 135.
// 2. Use IF statement to check number is odd by dividing it by throw.
// 3. If number is odd, then print the Result.

for (let i = 1; i <= 135; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
