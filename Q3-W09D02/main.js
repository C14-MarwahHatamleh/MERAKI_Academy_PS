/* Reverse Each Word */

/*  
Write a function reverses the characters of every word of a sentence. sentences contain only English letter and space characters.
*/

const reverseEachWord = (str) => {
  let reverseWord;
  
 if (str.trim() ===""){
  reverseWord =  "Wrong!! it's empty string"
 }
 else {
  reverseWord =  str.split("").reverse().join("").split(" ");
  reverseWord = reverseWord[1] +" "+reverseWord[0];
 }
 return reverseWord
};

/* 
Examples:
reverseEachWord("Hello world") // => "olleH dlrow"
reverseEachWord("Hello guys") // => "olleH syug"
reverseEachWord("It’s about what you can figure out") // => "s’tI tuoba tahw uoy nac erugif tuo"
reverseEachWord("      ") // => "Wrong!! it's empty string"

*/
module.exports = { reverseEachWord };
