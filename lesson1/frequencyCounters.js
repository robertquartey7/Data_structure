// // anagrams.
// function anagram(str1, str2) {
//   if (str1.length != str2.length) {
//     return false;
//   }

//   let object = {};

//   for (let index = 0; index < str1.length; index++) {
//     object[str1[index]] = (object[str1[index]] || 0) + 1;
//   }

//   for (let index = 0; index < str2.length; index++) {
//     let letter = str2[index];

//     if (!object[letter]) {
//       return false;
//     } else {
//       object[letter] -= 1;
//     }
//   }
//   return true
// }

// console.log("robert", "rtreb");
// console.log(anagram("robert", "rotreb"));

function anagram(str1, str2) {
  if (str1.length != str2.length) return false;
  let lookUp = {};

  for (let i = 0; i < str1.length; i++) {
    lookUp[str1[i]] = (lookUp[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }
  return true;
}

console.log(anagram("", "")); // true
console.log(anagram("aaz", "zza")); // false
console.log(anagram("anagram", "nagaram")); // true
console.log(anagram("rat", "car")); // false) // false
console.log(anagram("awesome", "awesom")); // false
console.log(anagram("amanaplanacanalpanama", "acanalmanplanpamana")); // false
console.log(anagram("qwerty", "qeywrt")); // true
console.log(anagram("texttwisttime", "timetwisttext")); // true
console.log(anagram("aacc", "ccac")); //flase

"aacc", "ccac";

let setq1 = {
  a: 1,
  c: 0,
};
