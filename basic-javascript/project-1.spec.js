const helpers = require("./project-1");

// start testing!

test("should multiply by ten", () => {
  const expected = 100;

  const actual = helpers.multiplyByTen(10);

  expect(actual).toEqual(expected);
});

test("should return 0 if no value is provided", () => {
  const actual = helpers.multiplyByTen();

  expect(actual).toEqual(0);
});

test("should return 0 if string is provided", () => {
  const actual = helpers.multiplyByTen("hi");

  expect(actual).toEqual(0);
});

test("should subtract by 5", () => {
  const actual = helpers.subtractFive(15);

  expect(actual).toEqual(10);
});

test("should equal length", () => {
  const actual = helpers.areSameLength("hello", "hello");
  expect(actual).toEqual(true);
});

test("should equal", () => {
  const actual = helpers.areEqual("hello", "hello");
  expect(actual).toEqual(true);
});

test("should NOT be equal", () => {
  const actual = helpers.areEqual("hello", 100);
  expect(actual).toEqual(false);
});

test("should be less than 90", () => {
  const actual = helpers.lessThanNinety(50);
  expect(actual).toEqual(true);
});

test("should NOT be less than 90", () => {
  const actual = helpers.lessThanNinety(100);
  expect(actual).toEqual(false);
});

test("should be greater than 50", () => {
  const actual = helpers.greaterThanFifty(55);
  expect(actual).toEqual(true);
});

test("should add correctly", () => {
  const actual = helpers.add(5, 5);
  expect(actual).toEqual(10);
});

test("should return 0 if string is provided", () => {
  const actual = helpers.add("hi", 5);
  expect(actual).toEqual(0);
});

test("should subtract correctly", () => {
  const actual = helpers.subtract(15, 5);
  expect(actual).toEqual(10);
});

test("should divide correctly", () => {
  const actual = helpers.divide(15, 5);
  expect(actual).toEqual(3);
});

test("should multiply correctly", () => {
  const actual = helpers.multiply(5, 5);
  expect(actual).toEqual(25);
});

test("should get remainder correctly", () => {
  const actual = helpers.getRemainder(15, 4);
  expect(actual).toEqual(3);
});

test("should check if number is even", () => {
  const actual = helpers.isEven(4);
  expect(actual).toEqual(true);
});
test("should return number is NOT even ", () => {
  const actual = helpers.isEven(5);
  expect(actual).toEqual(false);
});

test("should check if number is odd", () => {
  const actual = helpers.isOdd(5);
  expect(actual).toEqual(true);
});
test("should return number is NOT odd ", () => {
  const actual = helpers.isOdd(6);
  expect(actual).toEqual(false);
});

test("should return square of number", () => {
  const actual = helpers.square(12);
  expect(actual).toEqual(144);
});

test("should return cube of number", () => {
  const actual = helpers.cube(3);
  expect(actual).toEqual(27);
});

test("should raise to power", () => {
  const actual = helpers.raiseToPower(5, 3);
  expect(actual).toEqual(125);
});

test("should round number", () => {
  const expected = 10;
  const actual = helpers.roundNumber(9.8979);
  expect(actual).toEqual(expected);
});

test("should round number up ", () => {
  const expected = 5;
  const actual = helpers.roundNumber(4.8979);
  expect(actual).toEqual(expected);
});

//....

test("should add exclamation point!", () => {
  const expected = "Hello World!";
  const actual = helpers.addExclamationPoint("Hello World");

  expect(actual).toEqual(expected);
});

test("should combine names", () => {
  const expected = "Alejandro Krasovsky";
  const actual = helpers.combineNames("Alejandro", "Krasovsky");

  expect(actual).toEqual(expected);
});

test("should get greeting", () => {
  const expected = "Hello John!";
  const actual = helpers.getGreeting("John");
  expect(actual).toEqual(expected);
});

test("get rectangle area", () => {
  const expected = 15;
  const actual = helpers.getRectangleArea(3, 5);

  expect(actual).toEqual(expected);
});

test("get triangle area", () => {
  const expected = 25;
  const actual = helpers.getTriangleArea(10, 5);

  expect(actual).toEqual(expected);
});

test("get cricle area", () => {
  const expected = Math.PI * 5 * 5;
  const actual = helpers.getCircleArea(5);

  expect(actual).toEqual(expected);
});

test("get Rectangular prism value", () => {
  const expected = 375;
  const actual = helpers.getRectangularPrismVolume(15, 5, 5);
  expect(actual).toEqual(expected);
});

//functions
// multiplyByTen,
// subtractFive,
// areSameLength,
// areEqual,
// lessThanNinety,
// greaterThanFifty,
// add,
// subtract,
// divide,
// multiply,
// getRemainder,
// isEven,
// isOdd,
// square,
// cube,
// raiseToPower,
// roundNumber,
// roundUp,
// addExclamationPoint,
// combineNames,
// getGreeting,
// getRectangleArea,
// getTriangleArea,
// getCircleArea,
// getRectangularPrismVolume
