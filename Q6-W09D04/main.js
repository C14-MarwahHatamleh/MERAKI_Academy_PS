/* arrayCenter */

/*  
have an array of negative/positive integers, return the element in the middle position of the array.
If the array has an even number of elements, return the average of the two middle elements instead.
*/

const arrayCenter = (arr) => {
  let a;
  let ele;
  a = arr.length - 1;
 // console.log(a)
  if(arr.length === 0){
    ele = "empty Array";
  }
  else if (a % 2 === 0) {
    ele = arr[a / 2];
  } else {
    let center = arr.length / 2;
    let numBeforeCenter = arr.length / 2 - 1;
    ele = (arr[center] + arr[numBeforeCenter]) / 2;
  }
  return ele;
};

/*
Examples:
arrayCenter([2, 3, -4, 6, 1, 5]); // => 1
arrayCenter([2, 3, 4, -6, 2]); // => 4
arrayCenter([2, 3, 2, 9, 2]); // => 2
arrayCenter([2, 5, 1]); // => 5
arrayCenter([2, 3]); // => 2.5
arrayCenter([]); // => "empty Array"
*/
module.exports = { arrayCenter };
