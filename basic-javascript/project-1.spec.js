const helpers = require("./project-1");

// start testing!

//Run all tests
test("should run tests", () => {});

//Use 'it' instead of 'tests'
it("should run tests using it() in addition to test()", () => {});

//Multiply by ten
it("should multiply provided number by ten", () => {
  const expected = 100;

  const actual = helpers.multiplyByTen(10);
  expect(actual).toEqual(expected);
});

it("should return 0 when called with no value", () => {
  const product = helpers.multiplyByTen();

  expect(product).toBe(0);
});

//Subtract by five
it("should subtract provided number by five", () => {
  const expected = 6;

  const actual = helpers.subtractFive(11);
  expect(actual).toEqual(expected);
});

//Are the strings the same length
it("should check if strings are the same length", () => {
  const expected = true;

  const actual = helpers.areSameLength("bear", "bear");
  expect(actual).toEqual(expected);
});

//Are the values equal
it("should check if values are the equal", () => {
  const expected = true;

  const actual = helpers.areEqual("bear", "bear");
  expect(actual).toEqual(expected);
});

//Are the values less than 90
it("should check if values are less than 90", () => {
  const expected = true;

  const actual = helpers.lessThanNinety(80);
  expect(actual).toEqual(expected);
});

//Are the values greater than 50
it("should check if values are greater than 50", () => {
  const expected = true;

  const actual = helpers.greaterThanFifty(80);
  expect(actual).toEqual(expected);
});

//Add two values
it("should give the sum of two numbers", () => {
  const expected = 180;

  const actual = helpers.add(80, 100);
  expect(actual).toEqual(expected);
});

//Subtract the second value from first
it("should subtract the second value from the first", () => {
  const expected = 100;

  const actual = helpers.subtract(180, 80);
  expect(actual).toEqual(expected);
});

it("should divide the first value by the second", () => {
  const expected = 50;

  const actual = helpers.divide(100, 2);
  expect(actual).toEqual(expected);
});
