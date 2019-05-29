const sumWithoutHighestAndLowest = require("../src/sumWithoutHighestAndLowest.js");

// test cases




















it("[6, 2, 1, 8, 10] should return 16", () => {
  expect(sumWithoutHighestAndLowest([6, 2, 1, 8, 10])).toEqual(16);
});

it("[1, 1, 11, 2, 3] should return 5", () => {
  expect(sumWithoutHighestAndLowest([1, 1, 11, 2, 3])).toEqual(5);
});

it("Duplicate highs and lows", () => {
  expect(sumWithoutHighestAndLowest([2, 3, 3, 3, 1, 1])).toEqual(2);
});
it("should throw error for array with same numbers", () => {
  const t = () => {
    sumWithoutHighestAndLowest([3, 3, 3]);
  };
  expect(t).toThrow();
});
