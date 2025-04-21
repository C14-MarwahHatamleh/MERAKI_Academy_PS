/* fizzBuzz */
/*
--- Directions
     - Write a program that console logs the numbers from 1 to n
     - For multiples of three print “fizz” instead of the number
     - For the multiples of five print “buzz”
     - For numbers which are multiples of both 3 and 5 print “fizzbuzz”
--- Example
      fizzBuzz(5);
      |  1    |
      |  2    |
      |  fizz |   
      |  4    |
      |  buzz |   
*/

const fizzBuzz = (number) => {
 
  let a;
  if (number === 1) {
    return 1;
  }

  a = number + " " + fizzBuzz(number - 1);


return a;
};

//module.exports = {fizzBuzz};
