// Write a function that reverses a string.

// Examples:

// Input: "hello"
// Output: "olleh"

// solution

// function reverses(str) {
//   let newStr = "";
//   for (let i in str) {
//     newStr += str[str.length - i-1];

//   }

//   return newStr;
// }

// console.log(reverses("robert"));

// Write a function that takes in two strings and returns true if the second string is substring of the first, and false otherwise.

// Examples:

// Input: laboratory, rat
// Output: true

// Input: cat, meow
// Output: false
// solution

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Examples:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// Input: nums = [0,1]
// Output: [[0,1],[1,0]]

// Input: nums = [1]
// Output: [[1]]

// def permute(self, nums: List[int]) -> List[List[int]]:

//     res = []
//     n = len(nums)
//     def solve(n, perm):
//         if n==0:
//             res.append(perm.copy())
//             return None
//         for i in range(len(nums)):
//             if nums[i] in perm: continue
//             perm.append(nums[i])
//             solve(n-1, perm)
//             perm.pop()
//     solve(n, [])
//     return res

const num = [-2, 1 - 2, 4, -1, 2, 1, -5, 4];

function max_sub(num) {
  let currentSum = 0,
    maxSub = num[0] || -100;

  for (i of num) {
    currentSum = Math.max(currentSum + i, i);
    maxSub = Math.max(currentSum, maxSub);
  }

  return maxSub;
}

console.log(max_sub(num));
