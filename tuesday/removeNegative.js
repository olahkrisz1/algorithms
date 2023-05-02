// 5. Remove the Negative

// Given any array X, for example [1,-2,4,1], remove the negative numbers, so that the output becomes: [1,4,1].

//Pseudocode:
//1. define an emty array 'result'
//2. using 'for' loop, go over each eleement in x array.
//3. inside the loop, using if statement, if element is larger or equal than zero, then add it to 'result' array.
//4. result array is updating only with non-negative elements.
//5. when loop finishes, print out 'result' array

let x = [1, -2, 4, 1, -3, 5];
let result = [];

for (let i = 0; i < x.length; i++) {
  if (x[i] >= 0) {
    result.push(x[i]);
  }
}

console.log(result);

//Diagram:

// i=1; larger than zero, pushing it into new array. result=[1]
// i=-2, smaller than zero, if statement is false, not pushing into new array. result=[1]
// i=4, larger than zero, pushing into new array. result=[1,4]
// i=1, larger than zero, pushing into new array. result=[1,4,1]
//i=-3, smaller than zero, if statement is false, not pushing into new array. result=[1,4,1]
// i=5, larger than 5, pushing into new array. result=[1,4,1,5].
// loop finished
// result array printed.
