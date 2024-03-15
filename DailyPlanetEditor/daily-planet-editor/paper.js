/*
This code contains only syntax and code style problems. The logic of the code works,
so DO NOT change the functionality of anything in here.

In short, you shouldn't need to add your own statements anywhere,
just fix the existing ones.
*/

// Written by Kent, Clark
let enemies = [
  "Lex",
  "Batman",
  "Darkseid",
  "Brainiac",
  "General Zod",
  "Doomsday",
];

function whoWins(isThereKryptonite, enemyName) {
  if (!isThereKryptonite) {
    return `Superman beats ${enemyName}, of course`;
  } else {
    return `Depends on how quick Superman can get rid of the Kryptonite. ${enemyName} could possibly win this one.`;
  }
}

for (let i = 0; i < enemies.length; i++) {
  let isThereKryptonite; // Set a default value outside of the loop

  // Determine if there's Kryptonite based on the index of the enemy
  if (i % 2 === 0) {
    isThereKryptonite = true; // Set to true for even indexes
  } else {
    isThereKryptonite = false; // Set to false for odd indexes
  }

  console.log(whoWins(isThereKryptonite, enemies[i]));
}

function howAttractedIsLoisLaneToMe() {
  // 1 is not at all attracted, 10 is "super" attracted...
  return Math.floor(Math.random() * 10 + 1);
}

const attractionLevel = howAttractedIsLoisLaneToMe();

if (attractionLevel === 10) {
  console.log("Oh yeah, she wants me.");
} else {
  console.log("She'll come around.");
}

console.log(attractionLevel);

let clarkKent = true;
let superman = false;

while (clarkKent) {
  console.log("I'm just a nerdy columnist");
  let phoneBoothQuickChange = Math.random();
  if (phoneBoothQuickChange >= 0.5) {
    clarkKent = false;
    superman = true;
    console.log("Now I'm Superman!");
  }
}
