// 3rd Highest Number in Array
// Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. Your algorithm should do only one iteration of the array (just one for/while loop).

// Example:

// Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11

//Pseudocode:
// 1. define a function that takes an array as argument.
// 2. the function initialize 3 variables to be the first element of the input array.
//3. using a 'for'loop, go over each element in the array.
// 4. it also defines a const 'num' that holds the value of the current element.
//5. 'if' statement compares the current 'num' to the 3 variables 'first', 'second' and 'third'.
// 6. if num is greater than 'first', then 'first', 'second' an 'third' are updated to reflect this change.
// 7. if num is not greater than 'first' but is greater then second and not equal to first, then second and third are updated.
// 8. if num is not greater than first or second but is greater than third and noteqial to first or second, then third is updated to 'num'.
// 9. returning third
//10. console.log with example array.

function thirdHighestNumber(arr) {
  let first = arr[0];
  let second = arr[0];
  let third = arr[0];

  // the loop starts at index 1 because we have already initialized our variables to the value of the first element.

  for (let i = 1; i < arr.length; i++) {
    const num = arr[i];

    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      third = second;
      second = num;
    } else if (num > third && num !== second && num !== first) {
      third = num;
    }
  }
  return third;
}

const arr = [2, 5, 3, 8, 5, 1];
const thirdHighest = thirdHighestNumber(arr);
console.log(thirdHighest);

// Diagram:

// array [2, 5, 3, 8, 5, 1]

//  i | element | first | second | third
//                  2       2        2
//  1      5        5       2        2
//  2      3        5       3        2
//  3      8        8       5        3
//  4      5        8       5        3
//  5      1        8       5        3

// output: 3
