/* First Reverse */

/*  
Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.*/

/*
! input 
!============== string ===============
! process  
1- split the string to convert it to array 
2- reverce the array
3- join the array to convert it to string 
! output
!============ reversed string ========== 

*/

const firstReverse = (str) => {
    console.log("string to array =====>" ,str.split(''));
    console.log("reversed array =====>" ,str.split('').reverse());
    console.log("array to string =====>" ,str.split('').reverse().join(''));

    const reversedStr = str.split('').reverse().join('');
  
    return reversedStr;
 
};
console.log(firstReverse("I Love Code"));


/*
Examples:
firstReverse("I Love Code"); // => "edoC evoL I"
firstReverse("Hello World"); // => "dlroW olleH"
firstReverse("How are you?"); // => "?uoy era woH"
firstReverse(""); // => ""
*/
module.exports =  {firstReverse} ;
