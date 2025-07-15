/* Unique Item */

/*  
Write a function that returns the number of unique items in an array.
*/

const uniqueItems = (arr) => {
//   let res = [...new Set(arr)]
//  return res.length;
let obj ={};
let array = []
arr.forEach(element => {
  if( !obj[element])
  obj[element]=element

});
// return  arr.reduce((acc , ele) =>{
//   acc.push(ele)
// console.log(acc)
// } , [] )
array.push(Object.values(obj))
return array[0].length
// return acc;
};

/*
Examples:
uniqueItems([1, 1, 1, 1, 1]) // => 1
uniqueItems([3, 3, 5, 3]) // => 2
uniqueItems([5, 1, 1, 5, 1]) // => 2
uniqueItems([1, 6, 7]) // => 3
uniqueItems([1, 2, 3, 1, 2, 3]) // => 3
uniqueItems([5, 1, 2, 2, 1, 5]) // => 3
uniqueItems([5, 77, 1, 3]) // => 4
*/
module.exports = { uniqueItems };
