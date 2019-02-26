
/*

  215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

  What is the sum of the digits of the number 21000?

  Answer: 1366
  Completed on Tue, 26 Feb 2019, 09:37


*/


const digits = () => {
  let sum = 0,
      nr = [1]

  for(let i = 0; i < 1000; i++) {
    let overflow = 0,
        count = nr.length + 1
    for(let j = 0; j < count; j++) {
      let digit = nr[j] || 0
      digit = 2* digit + overflow
      if(digit > 9) {
        digit -= 10
        overflow = 1
      } else overflow = 0
      nr[j] = digit
    }
  }
  for(let n = 0; n < 1000; n++) {
    sum += nr[n]
  }
  return sum
}


console.log("Problem 16: ", digits())
