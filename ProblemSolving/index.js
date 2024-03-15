// Write a function that takes an array of numbers and returns the largest (without using Math.max())
function largestNumber(array) {
  // use sort to sort the numbers in descending order and return the 0 index for the first
  let largest = array.sort((a, b) => b - a);
  largest = largest[0];
  return largest;
}

console.log(largestNumber([4, 7, 9, 33, 1, 6, 92, 14]));

// function largest(array) {
//   let highestNum = array[0];
//   for (var i = 0; i < array.length; i++) {
//     let currentNum = array[i];
//     if (currentNum > highestNum) {
//       highestNum = currentNum;
//       return highestNum;
//     }
//   }
// }
// console.log(largest([22, 19, 4, 60, 13]))

// -------------------------------------------------------------------------------------------------------------------------------------------

// Write a function that takes an array of words and a character and returns each word that has that character present.
function lettersWithStrings(array, character) {
  return array.filter((word) => word.includes(character));
}

console.log(lettersWithStrings(["$hello!", "%%^%%", "test!"], "!"));
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));

// -----------------------------------------------------------------------------------------------------------------------------------------------

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
function isDivisible(num1, num2) {
  return num1 % num2 === 0;
}
console.log(isDivisible(15, 4));
console.log(isDivisible(9, 3));
console.log(isDivisible(4, 2));
