/* Find Intersection */

/*  
Have the function findIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
*/

const findIntersection = (strArr) => {
  let arrOne = strArr[0].toString().split(",");
  let arrTwo = strArr[1].toString().split(",");
let arr=[];
  //console.log(arr)
 let a , b;
 // console.log(arrOne , arrTwo)
  //return  strArr.find((ele) => ele === ele)
  for (let i = 0; i < arrOne.length;i++ ) {
    //console.log(strArr[i][3])
    for (let j = 0; j < arrTwo.length; j++) {
      if(arrOne[i] === arrTwo[j]){
        arr.push(arrOne[i])
      }
    }
    
    //   arr.push(strArr[i])
    // }
    // a = strArr[i];
    // for (let j = strArr.length; j <= 0; j--) {
    //   // if(strArr[i] === strArr[j]){
    //  b = strArr[j];
    //   // }
      
    // console.log(i , j)
    // }
    // if(a === b){
    //   arr.push(a)
    // }
    // if(a === b){
    //   arr.push(a)
    // }
  }
  if(arr.length === 0){
    return false;
  }
  
  return arr.toString().replaceAll(" ", "");
};

/*
Examples:
findIntersection(['1, 3, 4, 7, 13', '1, 2, 4, 13, 15']); // => '1,4,13'
findIntersection(['1, 3, 9, 10, 17, 18', '1, 4, 9, 10']); // => '1,9,10'
findIntersection(['2, 5, 7, 14', '1, 4, 13, 15, 25']); // => false
findIntersection(['', '1, 2, 4, 13, 15']); // => false
*/
module.exports = { findIntersection };
