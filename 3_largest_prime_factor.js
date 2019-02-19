'use strict'

/*

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

*/

const isPrime = (num) => {
  for(let i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}


const primes = []
for(let i = 2; i < 100000; i++) {
  if(isPrime(i)) primes.push(i)
}


const findLargestPrime = nr => {
  if(isPrime(nr)) return nr;
  else {
    const factorReducer = (acc, val) => {
      if(nr%val === 0)
        return [...acc, val]
      return acc
    }
    const factors = primes.reduce(factorReducer)
    return Math.max(...factors)
  }
}

const problem3Answer = findLargestPrime( 600851475143)

console.log("Problem 3: ", problem3Answer)
