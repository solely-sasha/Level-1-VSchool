var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function manipulateArrays(fruit, vegetables) {
  // 1. Remove the last item from the vegetable array.
  vegetables.pop();

  // 2. Remove the first item from the fruit array.
  fruit.shift();

  // 3. Find the index of "orange."
  const orangeIndex = fruit.indexOf("orange");

  // 4. Add that number to the end of the fruit array.
  fruit.push(orangeIndex);

  // 5. Use the length property to find the length of the vegetable array.
  const vegLength = vegetables.length;

  // 6. Add that number to the end of the vegetable array.
  vegetables.push(vegLength);

  // 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
  const food = fruit.concat(vegetables);

  // 8. Remove 2 elements from your new array starting at index 4 with one method.
  food.splice(4, 2);

  // 9. Reverse your array.
  food.reverse();

  // 10. Turn the array into a string and return it.
  return food.join(", ");
}
console.log(manipulateArrays(fruit, vegetables));

// // 1. Remove the last item from the vegetable array.
// vegetables.pop();
// console.log(vegetables);

// // 2. Remove the first item from the fruit array.
// fruit.shift();
// console.log(fruit);

// // 3. Find the index of "orange."
// const orange = fruit.indexOf("orange");
// console.log(orange);

// // 4.Add that number to the end of the fruit array.
// fruit.push(orange);
// console.log(fruit);

// // 5. Use the length property to find the length of the vegetable array.
// const numOfVeg = vegetables.length;
// console.log(numOfVeg);

// // 6. Add that number to the end of the vegetable array.
// vegetables.push(numOfVeg);
// console.log(vegetables);

// // 7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// // ---- with concat ------------------------------------
// // const food = [];
// // comboArray = food.concat(fruit).concat(vegetables);
// // ----- with spread operator ----------------------
// // // food.push(...fruit, ...vegetables);
// // console.log(comboArray);
// // --------- using map ------------------------------------------
// const food = fruit.map((item) => item).concat(vegetables.map((item) => item));
// console.log(food);

// // 8. Remove 2 elements from your new array starting at index 4 with one method.
// const newArray = food.splice(4, 2);

// console.log(newArray);
// console.log(food);

// // 9. Reverse your array.
// // --- with for loop ------------------
// const reversedArray = [];
// // --- using for loop ----------------
// // for (let i = food.length - 1; i >= 0; i--) {
// //   reversedArray.push(food[i]);
// // }
// // console.log(reversedArray);
// // ---- using reverse method -------------
// food.reverse();
// console.log(food);

// // 10. Turn the array into a string and return it.
// const arrayToString = food.toString();
// console.log(arrayToString);
