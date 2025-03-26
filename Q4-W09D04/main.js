/* Longest Word */

/*
write a function to return the largest word in the string
*/

const longestWord = (str) => {
  let longestWord;
  if(str === ""){
    longestWord = "it's empty string"
  } else {
    const SplitWord = str.split(" ");
    for (let i = 0 ; i<SplitWord.length ; i++){
      if(SplitWord[i].length >=4){
        longestWord = SplitWord[i];
      }
    }
  }
return longestWord;
};

/* 
Examples:
longestWord("time dog cat"); // => "time"
longestWord("we love cats"); // => "love"
longestWord("dogs and cats are cute"); // => "dogs"
longestWord(""); // => "it's empty string"
*/
module.exports = { longestWord };
