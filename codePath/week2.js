// Find the element that appears k number of times in an array.

// Examples:

// Input: [8, 7, 9, 6, 7, 5, 1], k = 2
// Output: 7

// function fequency(num, target) {
//   let track = {};

//   for (let i of num) {
//     track[i] = (track[i] || 0) + 1;
//   }

//   for (let i in track) {
//     if(track[i] === target)
//     {
//       return i;
//     }
//   }
// }

// console.log(fequency([8, 7, 9, 6, 7, 5, 1], 2));

// Given an unsorted array of integers, we want to find the length of the longest subsequence such that elements in the subsequence are consecutive integers. The consecutive numbers can be in any order.

// Examples:

// Input: [1, 9, 3, 10, 4, 20 , 2]
// Output: 4
// [1, 3, 4, 2] is the longest subsequence of consecutive elements.

// Given an unsorted array of integers, we want to find the length of the longest subsequence such that elements in the subsequence are consecutive integers. The consecutive numbers can be in any order.

// Examples:

// Input: [1, 9, 3, 10, 4, 20 , 2]
// Output: 4
// [1, 3, 4, 2]

// [1,2,3,4,9,10,20]

// [5,7,6,4,10,15]
// output 4
// [5,7,6,4]



function longestSubsequence(arr) {
  let newSet = new Set(arr);
let start
  for (let i of newSet) {
   
    if(!newSet.has(i-1)){
        
    }

    

  }

  return 0
}

console.log(longestSubsequence([1, 9, 3, 10, 4, 20, 2]));







// Imagine we are building an AI to play a computer game in which a player moves around a two-dimensional grid filled with stationary monsters. 

// Monsters look very scary, and if a player looks vertically or horizontally and sees a monster, they become scared.

// Write a function that takes a board, and returns the following information:
//  - Player's location, such as the row and column indexes
//  - Number of spaces between the player and the closest scary monster they can see vertically or horizontally.

// Board constraints:
//  - The board is a two-dimensional grid of characters
//  - An empty space on the board is represented by a dash '-'
//  - The player is denoted by the letter 'P'
//  - Monsters are denoted by the letter 'M'

// Sample input and output:
// board1 = [
//   ['-', '-', '-', 'M', '-', '-'],
//   ['-', '-', '-', '-', 'M', '-'],
//   ['-', 'M', '-', 'P', '-', '-'],
//   ['M', '-', '-', '-', '-', '-'],
//   ['-', 'M', '-', '-', '-', '-'],
// ]
// Expected Output (in any format): 
// (2,3), 1

// arr = [1,2,5,5,6]



// board2 = [
//   ['P', '-', '-', '-', '-', '-'],
//   ['-', '-', 'M', '-', 'M', '-'],
//   ['-', '-', '-', '-', '-', '-'],
//   ['M', '-', '-', 'M', '-', '-'],
//   ['-', 'M', '-', '-', '-', '-'],
// ]
// Expected Output (in any format): 
// (0,0), 2

// board3 = [
//   ['M', 'M', 'M'],
//   ['-', '-', 'P'],
  

// ,c
// Expected Output (in any format): 
// (1,2), 0

// You may return the player's location in whatever form you'd like. A standard approach that you are welcome to use is to define the top-left corner of the board as (0,0), and give coordinates in (row,column) order.

// detect(board1) => (2,3), 1
// detect(board2) => (0,0), 2
// detect(board3) => (1,2), 0

// Complexity Analysis variables:
// r = number of rows
// c = number of columns
// */

























