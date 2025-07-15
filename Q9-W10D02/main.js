/* Longest Word 2 */

/*  
Have the function LongestWord(str) take the str parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation, and assume the str will not be empty. 
Hint: her resource for Regular expressions you can check it and read more (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
*/

const longestWord_2 = (str) => {
  const string = str.replace(/[^\w\s]|_/g, "");
  const StringArr = string.split(" ");
  console.log(StringArr);

  let obj = {};
  StringArr.forEach((element) => {
    if (!obj[element]) {
      obj[element] = element.length;
    }
  });

  const max = Math.max(...Object.values(obj))
  const a =  Object.keys(obj).filter(key => obj[key] === max);


return a[0].toString()
};

/* 
Examples:
longestWord_2("lol!- time."); // => "time"
longestWord_2("I** love, cats"); // => "love"
longestWord_2("coding&& is awesome"); // => "awesome"
longestWord_2("hello|| world"); // => "hello"
*/
module.exports = { longestWord_2 };
