/* Sum Odd Number */

/*  
Write a function that returns the sum of odd numbers in an array.
*/

const sumOddNumber = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    } else if (arr.length === 0) {
      sum = 0;
    }
  }
  return sum;
};

/*
Examples:
sumOddNumber([1, 2, 3, 4, 5]) // => 9
sumOddNumber([1, 5, 3, 4, 5]) // => 14
sumOddNumber([12, 2, 3, 4, 5, 0]) // => 8
sumOddNumber([2, 4, 6,0 ]) // => 0
sumOddNumber([1, 5, 3, 4, 5]) // => 14
sumOddNumber([-2, 0, 4, -3, 5]) // => 2
sumOddNumber([]) // => 0
*/
module.exports = { sumOddNumber };
