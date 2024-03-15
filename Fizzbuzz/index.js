/* .......................................................................

    Write a short program that prints each number from 1 to 100 on a new line.

     For each multiple of 3, print "Fizz" instead of the number.

     For each multiple of 5, print "Buzz" instead of the number.

    For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.
*/
/*   1. Understand the problem
--------------------------------------------------------------------------------------
        print the numbers 1 - 100, each number on a new line
        if a number is a multiple of 3, it's replaced with the word Fizz
        if the number is a mulptiple of 5, it's replaced with the word Buzz
        if the number is a multiple of 3 AND 5, it's replaced with the word FizzBuzz
*/
/*    2. Plan a solution
-----------------------------------------------------------------------------------------
        write a function called fizzBuzz
        write a for loop to print out numbers 1 through 100
         create if statements to define multiples of 3 and 5
         log the result


*/

function fizzBuzz() {
  let result = "";
  for (let i = 1; i <= 100; i++) {
    let message = "";
    if (i % 3 === 0) message += "Fizz";
    if (i % 5 === 0) message += "Buzz";
    // console.log(result)
    // console.log(message);
    // console.log(i)
    result += message || i;
  }
  return result;
}

console.log(fizzBuzz());
