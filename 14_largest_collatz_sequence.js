
'use strict'

/*

  The following iterative sequence is defined for the set of positive integers:

  n → n/2 (n is even)
  n → 3n + 1 (n is odd)

  Using the rule above and starting with 13, we generate the following sequence:

  13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
  It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms.
  Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

  Which starting number, under one million, produces the longest chain?

  NOTE: Once the chain starts the terms are allowed to go above one million.

  Answer: 837799
  Completed on Sat, 23 Feb 2019, 11:38

*/



const getChain = n => {
  let tmp = n;
  const chain = []
  while(tmp != 1) {
    if(tmp%2 === 0) {
      tmp=tmp/2
      chain.push(tmp)
    } else {
      tmp = (3*tmp)+1
      chain.push(tmp)
    }
  }
  if(tmp === 1) {
    return chain.length;
  }
}

const chainGenerator = () => {
  let chains = []
  let max = Math.max(...chains)
  let num = null
  for(let i = 13; i < 1000000; i++) {
    const chain = getChain(i)
    if(!chains.includes(chain)) {
      chains.push(chain)
      if(max < Math.max(...chains)) {
        max = chain
        num = i
      }
    }
  }

  return {max, num}
}

console.log("Problem 14: ", chainGenerator())

