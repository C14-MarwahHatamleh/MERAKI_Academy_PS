/* isPrime*/
/* 
  A prime number is a positive integer that is only divisible by 1 and itself.
  For example, 2, 3, 5, 7, 11 are the first few prime numbers.*/

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if(num < 0){
    return "The number is negative."
  }
  for (let i = 2; i < num; i++) {
    if (num % i !== 0) {
      return true;
    }
    return false;
  }
};

module.exports = { isPrime };
