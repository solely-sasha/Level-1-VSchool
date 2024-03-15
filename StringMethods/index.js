// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
function capitalizeAndLowercase(string) {
  const uppercase = string.toUpperCase();
  const lowercase = string.toLowerCase();
  return uppercase + lowercase;
}
console.log(capitalizeAndLowercase("Hello"));

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.
function findMiddleIndex(string) {
  const half = Math.floor(string.length / 2);
  return half;
}
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));

// Write a function that uses slice() and the other functions you've written to return the first half of the given string.
function returnFirstHalf(string) {
  const mid = findMiddleIndex(string);
  return string.slice(0, mid);
}
console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello world"));
console.log(returnFirstHalf("awesome"));

//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
function capitalAndLowercase(string) {
  const halfString = findMiddleIndex(string);
  const firstHalf = string.slice(0, halfString).toUpperCase();
  const secondHalf = string.slice(halfString).toLowerCase();
  return firstHalf + secondHalf;
}
console.log(capitalAndLowercase("hello"));
console.log(capitalAndLowercase("hello world"));

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.
function capitalize(string) {
  const lowercaseString = string.toLowerCase();
  const splitCharacters = lowercaseString.split(" ");
  const capitalizedStrings = splitCharacters.map((str) => {
    if (str.length > 0) {
      return str[0].toUpperCase() + str.substring(1);
    }
  });
  const spacedStrings = capitalizedStrings.join(" ");
  return spacedStrings;
}
console.log(capitalize("I think it worked"));
console.log(capitalize("yes IT DiD! "));
