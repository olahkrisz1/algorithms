// 4. Fibonacci

// For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

// A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series. A series would start with the numbers 0 and 1 in place, followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

// 0 1 1 2 3 5 8 13 21...

// Pseudocode:
//1. Declare a variable that starts the sequence with [0,1].
//2. define a variable with next number in sequence.
//3. using 'while' loop to generate next number in the sequence by adding the last two numbers together.
//4. the loop continues until the next number is greater or equal 1000000.
// 5. function returns the the array of fibonacci sequence.

function fibonacci() {
  const result = [0, 1];
  let nextNumber = 1;

  while (nextNumber <= 1000000) {
    nextNumber = result[result.length - 1] + result[result.length - 2];
    result.push(nextNumber);
  }

  return result;
}

console.log(fibonacci());

// Diagram:

// nextNumber= 0+1 = 1; result=[0,1,1]
// nextNumber= 1+1 = 2; result=[0,1,1,2]
// nextNumber= 1+2 = 3; result=[0,1,1,2,3]
//..
// nextNumber=832040 + 514229= 1346269; result [...514229,832040,1346269]
// next number is larger than one million, loop finishing.
// returning result array
