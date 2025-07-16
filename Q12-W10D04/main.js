/* evenAppearance */

/*  
Find the first item which appear an even number of times in an array.
*/

const evenAppearance = (array) => {
 let obj = {}

 array.forEach(element => {
  if(!obj[element]){
    obj[element] = 1
  }
  else {
    obj[element] += 1
  }
 });
 console.log(obj)
for (const el of array) {
    if (obj[el] % 2 === 0) {
      return el;
    }
  }


};

/*
Examples:
evenAppearance([1, 1, 2, 6, 6]) // => 1
evenAppearance([1, 2, 2, 9, 8, 8, 6, 6]) // => 2
evenAppearance([1, 9, 7, 3, 6, 6, 8, 9, 9]) // => 6
evenAppearance([1, 9, 7, 3, 6, 6, 8, 9]) // => 9
*/
module.exports = { evenAppearance };
