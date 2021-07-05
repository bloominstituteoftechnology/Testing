const helpers = require("./project-1");

// start testing!
test("it should multiple a whole number by 10", () => {
  expect(helpers.multiplyByTen(5)).toBe(50);
});

test("return a number subtracted by 5", () => {
  expect(helpers.subtractFive(10)).toBe(5);
});

test("check to see if two strings are the same length", () => {
  expect(helpers.areSameLength("abcd", "1234")).toBeTruthy();
  expect(helpers.areSameLength("abcd", "123")).toBeFalsy();
});

test("check to see if values are equal", () => {
  expect(helpers.areEqual(1, 1)).toBeTruthy();
  expect(helpers.areEqual(1, 2)).toBeFalsy();
});

test("check to see wheather a value is less than 90", () => {
  expect(helpers.lessThanNinety(80)).toBeTruthy();
  expect(helpers.lessThanNinety(91)).toBeFalsy();
});

test("check to see if a value if greater than 50", () => {
  expect(helpers.greaterThanFifty(60)).toBeTruthy();
  expect(helpers.greaterThanFifty(40)).toBeFalsy();
});

test("should add two whole numbers", () => {
  expect(helpers.add(3, 4)).toBe(7);
});

test("should subtract this second number from the first", () => {
  expect(helpers.subtract(10, 3)).toBe(7);
});

test("should divide the second value from the first", () => {
  expect(helpers.divide(9, 3)).toBe(3);
});

test("should mutiply the two numbers together", () => {
  expect(helpers.multiply(3, 3)).toBe(9);
});

test("should give remainder after dividing the second value from the first", () => {
  expect(helpers.getRemainder(10, 3)).toBe(1);
});

test("should check if the input value is an even number", () => {
  expect(helpers.isEven(4)).toBeTruthy();
  expect(helpers.isEven(5)).toBeFalsy();
});

test("should check if the input value is an odd number", () => {
  expect(helpers.isOdd(5)).toBeTruthy();
  expect(helpers.isOdd(4)).toBeFalsy();
});

test("should return the square of a number", () => {
  expect(helpers.square(3)).toBe(9);
});

test("should return the cube of a number", () => {
  expect(helpers.cube(3)).toBe(27);
});

test("should the return the power of the first value raised bu the second", () => {
  expect(helpers.raiseToPower(2, 3)).toBe(8);
});

test("returns a rounded number", () => {
  expect(helpers.roundNumber(2.3)).toBe(2);
});

test("returns a number rounded up", () => {
  expect(helpers.roundUp(2.3)).toBe(3);
});

test("returns a string with an exclamation at the end", () => {
  expect(helpers.addExclamationPoint("hello")).toBe("hello!");
});

test("combines the first and last name as a string", () => {
  expect(helpers.combineNames("Jurgen", "Kela")).toBe("Jurgen Kela");
});

test("Returns a greeting of the persons first name", () => {
  expect(helpers.getGreeting("Jurgen")).toBe("Hello Jurgen!");
});

test("return the area of a rectangle based off length and width", () => {
  expect(helpers.getRectangleArea(2, 3)).toBe(6);
});

test("return area of triangle based off base and height", () => {
  expect(helpers.getTriangleArea(10, 10)).toBe(50);
});

test("returns the circle area given radius", () => {
  expect(helpers.getCircleArea(3)).toBe(Math.PI * 9);
});

test("returns the rectangular prism volume given length, width, height", () => {
  expect(helpers.getRectangularPrismVolume(10, 10, 5)).toBe(500);
});
