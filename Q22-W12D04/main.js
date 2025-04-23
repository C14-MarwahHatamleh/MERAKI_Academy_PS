/* usernameValidation */

/*  
Have the function usernameValidation(str) take the str parameter being passed and determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
*/

const usernameValidation = (str) => {
  let FirstCharPattern = /^[a-zA-Z]+$/;
  let StringPattern = /^\w+$/;

  // let result = pattern.test(str[0]);
  // console.log(result)
  if (str.length >= 4 && str.length <= 25) {
    if (
      FirstCharPattern.test(str[0]) &&
      StringPattern.test(str) &&
      str[str.length] !== "_" ) {
        return true
    }
  }
  return false;
};

/* 
Examples:
usernameValidation("aa_"); // => false
usernameValidation("u__hello_world123"); // => true
usernameValidation("3MaiYousef"); // => false
usernameValidation("#MaiYousef"); // => false
usernameValidation("John_123_H"); // => true
usernameValidation("3  MaiYousef"); // => false
usernameValidation("Mai4Yousef!_"); // => false
*/
module.exports = { usernameValidation };
