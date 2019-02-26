'use strict'

/*

  A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

  a2 + b2 = c2
  For example, 32 + 42 = 9 + 16 = 25 = 52.

  There exists exactly one Pythagorean triplet for which a + b + c = 1000.
  Find the product abc.

  Answer: 31875000
  Completed on Sun, 17 Feb 2019, 12:08


*/

const getPythagoreanProduct = () => {
  let sum = 1000
  for(let a = 10; a <= sum/3; a++) {
    for(let b = a+1; b <= sum/2; b++) {
      let c = (sum - a - b)
      if(((a * a)+(b * b)) === (c * c)) {
        if(a + b + c === 1000) return (a * b * c)
      }
    }
  }

}

console.log("Problem 9:", getPythagoreanProduct())

