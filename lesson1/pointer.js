function unique(arr) {
  let i = 0;
 
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr[i];
}

console.log(unique([1, 2, 1, 2, 3, 4, 4, 5, 6, 6, 7]))
