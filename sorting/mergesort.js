// function merge(arr1, arr2) {
//   let results = [];

//   let i = 0;
//   let j = 0;

//   while (i < arr1.length && j < arr2.length) {
//     if (arr2[j] > arr1[i]) {
//       results.push(arr1[i]);
//       i++;
//     } else {
//       results.push(arr2[j]);
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i++;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j++;
//   }
//   return results;
// }

// function mergeSort(arr) {
//   if (arr.length <= 1) return arr;
//   let mid = Math.floor(arr.length / 2);

//   console.log(Math.floor(arr.length / 2));
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));

//   return merge(left, right);
// }


// function merge(arr1, arr2) {
//   let results = [];

//   let i = 0;
//   let j = 0;
//   while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//       results.push(arr1[i]);
//       i += 1;
//     } else if (arr1[i] > arr2[j]) {
//       results.push(arr2[j]);
//       j += 1;
//     } else if (arr1[i] === arr2[j]) {
//       results.push(arr2[j]);
//       results.push(arr1[i]);
//       j++;
//       i++;
//     }
//   }
//   while (i < arr1.length) {
//     results.push(arr1[i]);
//     i += 1;
//   }
//   while (j < arr2.length) {
//     results.push(arr2[j]);
//     j += 1;
//   }

//   return results;
// }

// function mergeSort(arr) {
//   let mid = Math.floor(arr.length / 2);

//   if (arr.length <= 1) {
//     console.log(arr);
//     return arr;
//   }
//   let left = mergeSort(arr.slice(0, mid));
//   console.log(left);
//   let right = mergeSort(arr.slice(mid));
//   console.log(right);
//   return merge(left, right);
// }

// console.log(merge([1, 10, 50, 70], [14, 99, 100, 7 ,9]));

//[1,2,10, 14, 50]




console.log(mergeSort([1, 10, 50, 2, 14, 99, 100, 14, 5, 7,8,3,2,6,8,3,345,6]));



