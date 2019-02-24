
'use strict'

/*

  Starting in the top left corner of a 2×2 grid,
  and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

  How many such routes are there through a 20×20 grid?

  Answer: 137846528820
  Completed on Sat, 23 Feb 2019, 15:09


*/


const faculty = n => (n<2) ? 1 : (faculty(n-1) * n)

const paths = () => {
  const fac20 = faculty(20)
  const fac40 = faculty(40)
  return (fac40/fac20)/fac20
}

console.log("Problem 15 ", paths())
