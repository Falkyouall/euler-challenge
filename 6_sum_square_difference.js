'use strict'

/*

  The sum of the squares of the first ten natural numbers is,

  12 + 22 + ... + 102 = 385

  The square of the sum of the first ten natural numbers is,

  (1 + 2 + ... + 10)2 = 552 = 3025

  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.


* Answer: 25164150
* Completed on Sat, 16 Feb 2019, 11:19

*/

const diff = () => {
  let resultsA = [];
  let resultsB = [];
  for(let i = 1; i <= 100; i++) {
    resultsA.push(Math.pow(i, 2))
    resultsB.push(i)
  }
  const sumA = resultsA.reduce((acc,val) => acc+val);
  const sumB = Math.pow(resultsB.reduce((acc,val) => acc+val), 2);
  return (Math.max(...[sumA,sumB]) - Math.min(...[sumA,sumB]))
}


console.log("Problem 6: ", diff())
