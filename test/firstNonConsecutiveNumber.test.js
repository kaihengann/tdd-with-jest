const firstNonConsecutiveNumber = require("../src/firstNonConsecutiveNumber");

// write test cases to ensure firstNonConsecutiveNumber() works as expected

describe('Regular test cases', () => {
  it('should return non-consecutive number', () => {
    expect(firstNonConsecutiveNumber([1,3])).toEqual(3);
  });
  it('should return first non-consecutive number', () => {
    expect(firstNonConsecutiveNumber([1, 2, 4, 5, 6])).toEqual(4);
  });
  it('should return negative number', () => {
    expect(firstNonConsecutiveNumber([-4,-3, -1, 0])).toEqual(-1);
  });
  it('should return null for all consecutive numbers', () => {
    expect(firstNonConsecutiveNumber([1, 2, 3, 4, 5, 6])).toEqual(null);
  });
});