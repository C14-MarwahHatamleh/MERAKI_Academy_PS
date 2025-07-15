/* timesOfMostFreqChar */

/*  
Write a function returns the number of occurrences of the most frequent character in a sentence.
Ignore any space character.
*/
let count = 1;
const timesOfMostFreqChar = (str) => {
  let array = [];
  let strWithoutSpace = str.replaceAll(" ", "");
  let arr = strWithoutSpace.split("");
   const arrOFFreqChar  =arr.reduce((acc, curr) => {
    return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
  }, {});

  // console.log(Object.values(arrOFFreqChar))
  

  const max = Math.max(...Object.values(arrOFFreqChar))
  if(max === 1){
    return "no occurrences all return once"
  }
  return  max
};

/* 
Examples:
timesOfMostFreqChar('hello all') // => 4
timesOfMostFreqChar('hello all lol') // => 6
 timesOfMostFreqChar('hello all lool woooow') // => 7
timesOfMostFreqChar('hello all lol wow www.com') // => 6
timesOfMostFreqChar('hello all lol') // => 6
timesOfMostFreqChar('Hi john') // => "no occurrences all return once"
*/
module.exports = { timesOfMostFreqChar };
