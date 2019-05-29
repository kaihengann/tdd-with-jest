/*
Write a function findMultiples(base, limit) that takes a value, integer,
and returns a list of its multiples up to another value, limit.
If limit is a multiple of integer, it should be included as well.
There will only ever be positive integers passed into the function,
not consisting of 0. The limit will always be higher than the base.

Examples:
findMultiples(2, 6) // return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

function findMultiples(base, limit) {
  if (
    !Number.isInteger(base) ||
    !Number.isInteger(limit) ||
    base <= 0 ||
    limit <= 0
  ) {
    throw new Error("Please input a positive integer");
  }
  const multiples = [];
  for (i = 1; i <= limit; i++) {
    if (base * i <= limit) {
      multiples.push(base * i);
    } else {
      break;
    }
  }
  return multiples;
}

module.exports = findMultiples;
