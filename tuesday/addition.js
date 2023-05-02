// 1. Addition

// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, but not both 3 and 5. To solve this task you might want to use the modulus operator.

// Pseudocode:

// 1. declare a variable called 'sum' to zero, then with a 'for' loop
//    we go over all the numbers beteen 200 and 2700.
// 2. use an 'if' statement if current number is divisible by 3 or 5, but not both 3 and 5.(with modulo operator.)
// 3. If it is, we add the number to the 'sum' variable .
// 4.  print result of 'sum' to console.

let sum = 0;

for (let i = 200; i <= 2700; i++) {
  if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
    sum += i;
  }
}

console.log(sum);

// Diagram:

// i=200, dividible by 5 (but not 3), 'if statement is true, so adding to sum, sum=200.
// i=201, dividible by 3 (but not 5), 'if statement is true, so adding to sum, sum=401.
// i=202, not dividible by 3 nor 5, 'if statement is false, not adding to sum, sum=401.
// i=203, not dividible by 3 nor 5, 'if statement is false, not adding to sum, sum=401.
// i=204, dividible by 3, (but not 5), if statement is true, so adding to sum, sum=605.
// ..
// i=210, dividible by 3 and 5!!!, 'if' statement is false, not adding to sum, sum = 1017.
// ..
//i =2701, larger than i, loop stops.
