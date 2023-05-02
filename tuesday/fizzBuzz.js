// 3. FizzBuzz

// Create an algorithm that inserts the numbers from 1 to 135 into an array, while replacing the values that are divisible by 3 with the word "Fizz", the numbers that are divisible by 5 with the word "Buzz", and the numbers that are divisible with 3 and 5 with the word "FizzBuzz". Your output should look like [1,2,'Fizz',4,'Buzz',5,'Fizz',7,8,...]

// Pseudocode:

// 1. create an empty array 'result'
// 2. using 'for' loop, go over each number from 1 to 135.
// 3. for each number, check if they can be divided by both 3 and 5. If yes, append string 'fizzbuzz' to result.
// 4. otherwise, check if number can be divided by 3. If yes, append string 'fizz' to result.
// 5. otherwise, check if number can be divided by 5. If yes, append string 'buzz' to result.
// 6. otherwise, append the number itself to result.
// 7. print result by console.log

const result = [];

for (let i = 1; i <= 135; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    result.push("FizzBuzz");
  } else if (i % 3 === 0) {
    result.push("Fizz");
  } else if (i % 5 === 0) {
    result.push("Buzz");
  } else {
    result.push(i);
  }
}

console.log(result);

// Diagram:

// i=1, not dividible by both 3 and 5, nor 3, nor 5, so pushing 1 into array. result=[1]
// i=2, not dividible by both 3 and 5, nor 3, nor 5, so pushing 2 into array. result=[1,2]
// i=3, not dividible by both 3 and 5, but dividible by 3, so pushing 'fizz' into array. result=[1,2,"Fizz"]
// ..
//
// i=5, not dividible by both 3 and 5, nor 3, but dividible by 5, so pushing "Buzz" into array. result=[1,2,"Fizz",4,"Buzz"]
// ..
//i=15, dividible by both 3 and 5, pushing "FizzBuzz" string to array.
// ..
// i=136, larger than 135, loop finished.
// array of 'result' has been printed.
