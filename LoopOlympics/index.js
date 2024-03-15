//  *************   Preliminary *********
//  1. Write a for loop that prints to the console the numbers 0 through 9 ---------------------------

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// -------------- 2. Write a for loop that prints to the console 9 through 0. ----------------------------------------------------------------
for (let i = 9; i > 0; i--) {
  console.log(i);
}

// --------------3. Write a for loop that prints these fruits to the console.const fruit = ["banana", "orange", "apple", "kiwi"] --------------------------------
const fruit = ["banana", "orange", "apple", "kiwi"];
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// --- using for of method ----------------------------
// for(item of fruit){
//     console.log(item);
// }

// ----- using forEach method --------------------------------

// fruit.forEach((item) => {
// console.log(item)
// })

// *********** Bronze Medal ********************************

//1. Write a for loop that will push the numbers 0 through 9 to an array.
const numArray = [];
for (let i = 0; i < 10; i++) {
  numArray.push(i);
}
console.log(numArray);

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
for (let i = 0; i < 101; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 3. Write a for loop that will push EVERY OTHER fruit to an array.`const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]`
const fruits = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

const everyOtherFruit = [];
for (let i = 0; i < fruits.length; i++) {
  if (i % 2 === 1) {
    everyOtherFruit.push(fruits[i]);
  }
}
console.log(everyOtherFruit);

// ********************** Silver Medal ****************

const peopleArray = [
  {
    name: "Harrison Ford",
    occupation: "Actor",
  },
  {
    name: "Justin Bieber",
    occupation: "Singer",
  },
  {
    name: "Vladimir Putin",
    occupation: "Politician",
  },
  {
    name: "Oprah",
    occupation: "Entertainer",
  },
];

// 1. Write a loop that will print out all the names of the people of the people array
for (let i = 0; i < peopleArray.length; i++) {
  console.log(peopleArray[i].name);
}
// ----- with for of --------------------------------------------------
// for(let person of peopleArray){
//     console.log(person.name)
// }

// 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.
const names = [];
const occupations = [];
for (let i = 0; i < peopleArray.length; i++) {
  names.push(peopleArray[i].name);
  occupations.push(peopleArray[i].occupation);
}

console.log(names);
console.log(occupations);

// ------ with logical AND operator ---------------------------------------
// const names = []
// const occupation = []
// for(let people of peopleArray){
//     people.name && names.push(people.name);
//     people.occupation && occupation.push(people.occupation);

// }
// console.log(names);
// console.log(occupation);

// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford",
// and every other occupation to another array starting with, in this case, "Singer".
const everyOtherName = [];
const everyOtherOccupation = [];
for (let i = 0; i < peopleArray.length; i++) {
  if (i % 2 == 0) {
    everyOtherName.push(peopleArray[i].name);
  }
  if (i % 2 === 1) {
    everyOtherOccupation.push(peopleArray[i].occupation);
  }
}
console.log(everyOtherName);
console.log(everyOtherOccupation);

// *********** Gold Medal **********************************
// 1. Create an array that mimics a grid like the following using nested `for` loops:
/* 
[[0, 0, 0],
[0, 0, 0],
[0, 0, 0]]
*/

const rows = 3;
const columns = 3;
const grid = [];

// Outer loop for rows
for (let i = 0; i < rows; i++) {
  const row = []; // Initialize an empty row array for each iteration

  // Inner loop for columns
  for (let j = 0; j < columns; j++) {
    row.push(0); // Push 0 into the row for each column
  }

  grid.push(row); // Push the row into the grid
}

console.log(grid);

// ---- simply without nested for loops --------------------------------
// const grid = [];

// for (let i = 0; i < 3; i++) {
//   grid.push([0, 0, 0]); // Push an array of three zeros into the grid
// }

// console.log(grid);

// 2.Create an array that mimics a grid like the following using nested for loops:
/*
[[0, 0, 0],
[1, 1, 1],
[2, 2, 2]]
*/
const grid2 = [];

for (let i = 0; i < 3; i++) {
  const row = [];
  for (let j = 0; j < 3; j++) {
    row.push(i);
  }
  grid2.push(row);
}

console.log(grid2);

// create a grid with nested for loops that repeats [0, 1, 2] three times
const grid3 = []; // Create an empty array named 'grid'.

for (let i = 0; i < 3; i++) {
  // Start a loop that will run 3 times, with 'i' starting at 0 and increasing by 1 each time.
  const row = []; // Inside the loop, create an empty array named 'row'.
  for (let j = 0; j < 3; j++) {
    // Start another loop inside the first loop, which will also run 3 times.
    row.push(j); // Add the current value of 'j' to the 'row' array.
  }
  grid3.push(row); // After the inner loop finishes, add the 'row' array to the 'grid' array.
}

console.log(grid3); // Print the 'grid' array to the console.

// change all the numbers in the gril to "x"
const newGrid = []; // initialize a new empty array
for (let i = 0; i < grid3.length; i++) {
  const newRow = []; // initialize a new row for each row in grid3
  for (let j = 0; j < grid3[i].length; j++) {
    newRow.push("x"); // push x into the new row for each column in grid3
  }
  newGrid.push(newRow); // push the new row into the newGrid array
}
console.log(newGrid);
