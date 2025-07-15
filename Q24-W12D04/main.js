/* longestSequence */

/*  
Write a function returns the length of the longest sequence of 1s in an array of 1s and 0s.
*/
const longestSequence = (arr) => {
  let count = 0;
  let array = [];

  const a = [...new Set(arr)];

  if (a.length === 1) {
    return "There is no one sequenced";
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count += 1;

      //console.log(count);
    } else {
      count = 0;
    }
    array.push(count);
    // console.log(array)
  }
  const max = Math.max(...array);
  return max;
};

/*
Examples:
longestSequence([0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1]) // => 5
longestSequence([1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1]) // => 3
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 4
longestSequence([1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1]) // => 5
longestSequence([1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1]) // => 6
longestSequence([1, 0, 0, 1]) // => 1
longestSequence([0, 0, 0, 0]) // => "There is no one sequenced"
*/
module.exports = { longestSequence };
