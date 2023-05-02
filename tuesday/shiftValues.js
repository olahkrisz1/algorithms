// 2. Shift the Values

// Given any array X, for example [2,1,6,4,-7], create an algorithm that shifts each number by one to the front. When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

// Pseudocode:

//1. define variable x with input array of [2,1,6,4,-7].
//2. declare and empty array 'y'.
//3. using a 'for' loop to go over each element inside array.
//4. for each element, we use 'unshift()' method to add item to the beginning of 'y'.
//5. this modifies the array, adding each eleemnt to the beginning of the array and shifting all existing ones one position to the right
//6. print new array of 'y' to console.

let x = [2, 1, 6, 4, -7];
let y = [];

for (let i = 0; i < x.length; i++) {
  y.unshift(x[i]);
}

console.log(y);

// Diagram:

// x[0]=2, adding to beginning of 'y'. Now y=[2]
// x[1]=1, adding to beginning of 'y', shifting previous element to the right. now y =[1,2].
// x[2]=6, adding to beginning of 'y', shifting previous elements to the right. now y=[6,1,2]
// x[3]=4, adding to beginning of 'y', shifting the rest, now y=[4,6,1,2]
// x[4]=-7, adding to beginning of'y', shifting the rest, now y=[-7,4,6,1,2]
// printing 'y' should be [-7,4,6,1,2]
