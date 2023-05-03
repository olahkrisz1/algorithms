// Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

// Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Example Outputs:
// factorialize(0) should return 1.
// factorialize(10) should return 3628800.
// factorialize(20) should return 2432902008176640000.

//PseudoCode:

// 1. check if input is a negative number. If it is, return a string 'undefined'.
// 2. otherwise, if n is zero or 1, return '1' since the factorial of 0 and 1 is 1.
// 3. If n is greater than one, then start a 'for' loop that starts from 2 and multiplies the result by every integer up to and including 'n'.
// 4. return 'result'.

function factorialize(n) {
  if (n < 0) {
    return "undefined";
  } else if (n === 0 || n === 1) {
    return 1;
  } else {
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

console.log(factorialize(5));

// Diagram:

// if 'n' is negative => output: "undefined"
// if 'n' is zero or 1 => output: "1"
// if 'n' is greater then 1, then loop starts:
// i=2, result= 1*2 = 2
// i=3, result= 2*3 = 6
// i=4, result= 6*4 = 24
// i=5, result= 24*5 = 120
// loop is finished
// result is returned
// console.log function
