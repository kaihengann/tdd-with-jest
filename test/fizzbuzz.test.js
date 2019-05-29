const fizzbuzz = require("../src/fizzbuzz");

test("6 should return number fizz", function() {
  expect(fizzbuzz(6)).toEqual("fizz");
});

test("10 should return buzz", function() {
  expect(fizzbuzz(10)).toEqual("buzz");
});

test("30 should return fizzbuzz", () => {
  expect(fizzbuzz(30)).toEqual("fizzbuzz");
});

test("number should return number if no other req is fulfilled ", () => {
  expect(fizzbuzz(31)).toEqual(31);
});
