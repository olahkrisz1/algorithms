// Declare a function isPalindrome(str) that takes a string as an input.

// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// pseudocode:

//1 Define a function called 'checkPalindrome' that takes a single parameter 'word'
//2. the input 'word' stored in a variable named 'inputWord'.
//3. using 'split" method, split the 'inputWord' into an array of substrings at each space character (" ").
//4. then, the join method is used to join the substrings together into a single string with no spaces.
//5. use 'toLowerCase' method to convert the resulting string to lowercase.
//6. the resulting string is stored in a new variable 'checkString'.
//7. 'for' loop to go through the elements in 'checkString' up to half of its length.
//8. loop condition i < checkString.length/2 ensures that the loop iterates through half of the characters in the string, because if the first half of the string matches the second half, the word is a palindrome.
//9. inside the loop, an 'if' statement checks if the current character at position 'i' is not equal to the character at the same position counted from the end of string 'checkString.length-i-1'.
//10. If the characters are not equal, the function immediately returns 'false', indicating that the word is not palindrome.
//11. if the loop completes without finding any non-matching characters, the function returns 'true', so the word is a palindrome.
//12. function is called with argument "racecar" and the result is stored in a variable called 'output'.
//13. print to screen the value of 'output', which should be true, because 'racecar' is a palindrome.

let checkPalindrome = function (word) {
  let inputWord = word;
  let checkString = inputWord.split(" ").join("").toLowerCase();
  for (var i = 0; i < checkString.length / 2; i++) {
    if (checkString[i] != checkString[checkString.length - i - 1]) {
      return false;
    }
  }
  return true;
};

let output = checkPalindrome("racecar");
console.log(output);

// Diagram:

// input word : 'racecar'
// i=0, element='r', checkstring= 7-0-1= 'r' => not false, will be true;
// i=1, element='a', checkstring= 7-1-1= 'a' => not false, will be true;
// i=2, element='c', checkstring= 7-2-1= 'c' => not false, will be true;
// i=3; element='e', checkstring= 7-3-1= 'e' => not false, will be true;
// loop finished due to checkString.length/2
// returns true;
// 'true' printed
