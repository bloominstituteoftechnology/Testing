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

it("should give the product of two numbers", () => {
  const expected = 200;

  const actual = helpers.multiply(100, 2);
  expect(actual).toEqual(expected);
});

it("should get the remainder of the first value divided by the second", () => {
  const expected = 1;

  const actual = helpers.getRemainder(13, 2);
  expect(actual).toEqual(expected);
});

it("should return true if value is even", () => {
  const expected = true;

  const actual = helpers.isEven(2);
  expect(actual).toEqual(expected);
});

it("should return true if value is odd", () => {
  const expected = true;

  const actual = helpers.isOdd(3);
  expect(actual).toEqual(expected);
});

it("should return a value squared", () => {
  const expected = 36;

  const actual = helpers.square(6);
  expect(actual).toEqual(expected);
});

it("should return a value cubed", () => {
  const expected = 27;

  const actual = helpers.cube(3);
  expect(actual).toEqual(expected);
});

it("should return a value raised to an exponent", () => {
  const expected = 9;

  const actual = helpers.raiseToPower(3, 2);
  expect(actual).toEqual(expected);
});

it("should return a value rounded to the nearest whole number", () => {
  const expected = 10;

  const actual = helpers.roundNumber(10.4);
  expect(actual).toEqual(expected);
});

it("should return a value rounded up to the nearest whole number", () => {
  const expected = 11;

  const actual = helpers.roundUp(10.4);
  expect(actual).toEqual(expected);
});

it("should return a string with a ! at the end", () => {
  const expected = "hey!";

  const actual = helpers.addExclamationPoint("hey");
  expect(actual).toEqual(expected);
});

it("should return two strings concatenated", () => {
  const expected = "banana fruit";

  const actual = helpers.combineNames("banana", "fruit");
  expect(actual).toEqual(expected);
});

it("should return a greeting to the variable passed in", () => {
  const expected = "Hello you!";

  const actual = helpers.getGreeting("you");
  expect(actual).toEqual(expected);
});

it("should return the area of a rectangle that has the specified length and width", () => {
  const expected = 30;

  const actual = helpers.getRectangleArea(5, 6);
  expect(actual).toEqual(expected);
});

it("should return the area of a triangle that has the specified base and height", () => {
  const expected = 15;

  const actual = helpers.getTriangleArea(5, 6);
  expect(actual).toEqual(expected);
});

it("should return the area of a circle that has the specified radius", () => {
  const expected = 50.26548245743669;

  const actual = helpers.getCircleArea(4);
  expect(actual).toEqual(expected);
});

it("should return the volume of a retangular prism that has the specified length, width and height", () => {
  const expected = 27;

  const actual = helpers.getRectangularPrismVolume(3, 3, 3);
  expect(actual).toEqual(expected);
});
