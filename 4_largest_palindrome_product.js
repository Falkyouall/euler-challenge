'use strict'

/*

  A palindromic number reads the same both ways.
  The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two 3-digit numbers.

*/

const biggestPalindrome = () => {
  const palindromes = []
  for(let i = 999; i>0; i--) {
    for(let j = 100; j<=999; j++) {
      const result = j*i;
      const arr = result.toString().split('')
      const [a,b,c,d,e,f] = arr;
      if(a === f && b === e && c === d) {
        palindromes.push(result)
      } else continue
    }
  }
  return Math.max(...palindromes)
}

const problem4Answer = biggestPalindrome()

console.log("Problem 4: ",problem4Answer)
