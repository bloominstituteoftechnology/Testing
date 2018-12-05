const helpers = require("./project-1");

// start testing!

it("multiplies num by ten", () => {
  expect(helpers.multiplyByTen(2)).toEqual(20);
});

it("subtracts five from num", () => {
  expect(helpers.subtractFive(10)).toEqual(5);
});

it("returns true if passed strings are same length and fails if not the same length", () => {
  expect(helpers.areSameLength("Kim", "Joe")).toEqual(true);
});

it("returns true if passed params are equal", () => {
  expect(helpers.areEqual(2, 2)).toEqual(true);
});

it("returns true if num passed is less than ninety", () => {
  expect(helpers.lessThanNinety(89)).toEqual(true);
});

it("returns true if num passed is greater than fifty", () => {
  expect(helpers.greaterThanFifty(55)).toEqual(true);
});

it("return the sum of the two numbers", () => {
  expect(helpers.add(2, 2)).toEqual(4);
});

it("returns the second arg from the first arg", () => {
  expect(helpers.subtract(10, 5)).toEqual(5);
});

it("returns the quotient of the first num divided by the second num", () => {
  expect(helpers.divide(10, 2)).toEqual(5);
});

it("returns the product of the first num and the second num", () => {
  expect(helpers.multiply(10, 10)).toBe(100);
});

it("returns the remainder of num one divided by num two", () => {
  expect(helpers.getRemainder(10, 3)).toEqual(1);
});

it("returns true if the num is even", () => {
  expect(helpers.isEven(2)).toEqual(true);
});

it("returns true if the num is odd", () => {
  expect(helpers.isOdd(1)).toEqual(true);
});

it("returns the square of the num providec", () => {
  expect(helpers.square(2)).toEqual(4);
});

it("returns the the number cubed", () => {
  expect(helpers.cube(2)).toEqual(8);
});

it("returns the number raised to the power of the exponents int", () => {
  expect(helpers.raiseToPower(2, 4)).toBe(16);
});

it("returns the number rounded", () => {
  expect(helpers.roundNumber(2.8)).toEqual(3);
});

it("rounds the number up", () => {
  expect(helpers.roundUp(2.2)).toEqual(3);
});

it("returns an interpolated sting with an exclemation point at the end", () => {
  expect(helpers.addExclamationPoint("Hello World")).toEqual("Hello World!");
});

it("returns an template string combining the first and second arg", () => {
  expect(helpers.combineNames("David", "Soto")).toEqual("David Soto");
});

it("returns a string with the param passed into a string", () => {
  expect(helpers.getGreeting("Mike")).toEqual("Hello Mike!");
});

it("returns the area of the rectangle", () => {
  expect(helpers.getRectangleArea(5, 6)).toEqual(30);
});

it("returns the area of a triangle", () => {
  expect(helpers.getTriangleArea(2, 3)).toEqual(3);
});

it("returns the volume of a rectangular prism", () => {
  expect(helpers.getRectangularPrismVolume(2, 5, 6)).toEqual(60);
});
