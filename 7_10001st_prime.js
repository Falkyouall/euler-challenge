'use strict'

/*
Problem 7

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?


Answer: 104743
Completed on Sat, 16 Feb 2019, 11:32

*/


const indexPrime = (index = 10001) => {
  const primes = []
  let i = 1;
  while(primes.length != (index+1)) {
    if(isPrime(i)) {
      primes.push(i)
    }
    i++
  }
  if(primes.length === (index+1)) {
    return primes[index-1]
  }
}

console.log("Problem 7: ", indexPrime())
