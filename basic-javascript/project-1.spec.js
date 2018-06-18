const helpers = require("./project-1");

// start testing!

it("Should multiply by ten", () => {
  const multiplyByTen = helpers.multiplyByTen;
  const expected = 100;
  const actual = multiplyByTen(10);
  expect(actual).toBe(100);
});

it("Should subtract five from a number", () => {
  const subtractFive = helpers.subtractFive;
  const expected = 20;
  const actual = subtractFive(25);
  expect(actual).toBe(20);
});

it("Should return true or false to the strings being equal", () => {
  const areSameLength = helpers.areSameLength;
  const str1 = "Max";
  const str2 = "123";
  expect(str1.length).toEqual(str2.length);
});

it("Should return true or false to the numbers being equal", () => {
  const areEqual = helpers.areEqual;
  const num1 = 18;
  const num2 = 18;
  expect(num1).toEqual(num2);
});

it("Should return true or false if number is less then 90", () => {
  const lessThanNinety = helpers.lessThanNinety;
  const num = 69;
  expect(num).toBeLessThan(90);
});

it("Should return true or false if number is greater then 50", () => {
  const greaterThanFifty = helpers.greaterThanFifty;
  const num = 56;
  expect(num).toBeGreaterThan(50);
});
it("Should add two numbers together", () => {
  const add = helpers.add;
  const a = 9;
  const b = 8;
});
