//  1. count how many computers there are

var officeItems = [
  "stapler",
  "monitor",
  "computer",
  "desk",
  "lamp",
  "computer",
  "lamp",
  "stapler",
  "computer",
  "computer",
];
// -----------------  with forLoop ----------------------------------------------------------------
let count = 0;
for (let i = 0; i < officeItems.length; i++) {
  if (officeItems[i] === "computer") {
    count++;
  }
}
console.log(`thenumber of computers is ${count}`);

// ------------------ with for of --------------------------------------------------------------------
// let total = 0;
// for(items of officeItems) {
//     if(items === "computer")
//     total++
// }
// console.log(`the final count is ${total}`)

//-------------- in a function : ----------------------------------------------------------------------------
// function howMany(array){
// let total = 0;
// array.forEach(item => item === "computer" && total++)
//    return total
// }

// console.log(howMany(officeItems))

// 2. Loop through the array and log to the console "old enough" if 18+ and "not old enough"  if not

var peopleWhoWantToSeeMadMaxFuryRoad = [
  {
    name: "Mike",
    age: 12,
    gender: "male",
  },
  {
    name: "Madeline",
    age: 80,
    gender: "female",
  },
  {
    name: "Cheryl",
    age: 22,
    gender: "female",
  },
  {
    name: "Sam",
    age: 30,
    gender: "male",
  },
  {
    name: "Suzy",
    age: 4,
    gender: "female",
  },
];

// ----- with  ternary condition --------------------------------
// for (person of peopleWhoWantToSeeMadMaxFuryRoad) {
//   const oldEnoughOrNot =
//     person.age >= 18
//       ? `${person.name} is old enough`
//       : `${person.name} is not old enough`;

//   console.log(oldEnoughOrNot);
// }

// ----------- with if else statement ------------------------------

// for (people of peopleWhoWantToSeeMadMaxFuryRoad) {
//   if (people.age >= 18) {
//     console.log(`${people.name} is old enough`);
//   } else {
//     console.log(`${people.name} is not old enough`);
//   }
// }

// ------- BONUS: address by gender -----------------------------------------------------------
for (person of peopleWhoWantToSeeMadMaxFuryRoad) {
  const oldEnoughOrNot =
    person.age >= 18
      ? `${person.name} is old enough, let ${
          person.gender === "male" ? "HIM" : "HER"
        } in`
      : `${person.name} is not old enough, don't let ${
          person.gender === "male" ? "HIM" : "HER"
        } in`;

  console.log(oldEnoughOrNot);
}
