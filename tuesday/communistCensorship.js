// 6. Communist Censorship

// Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'], replace every letter of the word Program with *, so the output would be ['Man', 'I','Love','The','Matrix','*******']. Then make your algorithm work for any word of your choice

// Pseudocode:
//1. declare a function that takes an array of strings and word to change with asterisks as input parameters.
//2. define new variable with empty array 'result'.
//3. using 'for' loop, go over each element inside the input array.
//4. for each element, check if it is equal to the word to change, if yes, it adds  asterisk string to new array.
//5. otherwise, it adds the original string to new array.
//6. returns 'result' array containing strings with asterisks.
//7. it should work with any word to change in the function call to get the  wanted output.

function censorShip(arr, word) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === word) {
      result.push("******");
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

let listOfWords = ["Man", "I", "Love", "The", "Matrix", "Program"];
let wordToChange = "Program";
console.log(censorShip(listOfWords, wordToChange));

// Diagram:

//i='man', it is not equal to the word to change, so adding to new array unchanged. ['man']
//i='I', it is not equal to the word to change, so adding to new array unchanged. ['man', 'I']
//i='Love', it is not equal to the word to change, so adding to new array unchanged.['man', 'I', 'Love']
//i='The', it is not equal to the word to change, so adding to new array unchanged.['man', 'I', 'Love', 'The']
//i='Matrix', it is not equal to the word to change, so adding to new array unchanged.['man', 'I', 'Love', 'The', 'Matrix']
//i='Program', it equals to the word to change, so adding asterisk string to new array.['man', 'I', 'Love', 'The', 'Matrix', '******']
// loop finished
// returning new array 'result'.
// console.log result by calling the function with desired parameters.
