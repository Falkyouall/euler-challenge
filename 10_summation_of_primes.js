
'use-strict'

/*

 The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 Find the sum of all the primes below two million.

  Answer: 142913828922
  Completed on Mon, 18 Feb 2019, 08:27


*/


// Implementation of the AKS algorithm to pick primes with speed

const isPrime = n => {
  if (n <= 1)  return false
  if (n <= 3)  return true
  if (n%2 == 0 || n%3 == 0) return false
  for(let i=5; i*i<=n; i=i+6) {
    if (n%i == 0 || n%(i+2) == 0) return false
  }
  return true
}


const sum = () => {
  let result = 0
  for(let i=0;i<2000000;i++) {
    if(isPrime(i)) {
      result+=i
    }
  }
  return result;
}

console.log("Problem 10: ", sum())
