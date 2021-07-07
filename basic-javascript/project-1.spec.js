const helpers = require("./project-1");

// start testing!

//multiplyByTen

it("should multiply a number by 10", () => {
  //test something here

  //Arrange: set up the world
  const expected = 50;

  //Act: execute the tested code
  const actual = helpers.multiplyByTen(5);

  //Assert: check the results are correct

  expect(actual).toBe(expected);

  //toBe is a matcher
});

it("should return zero if not given a number", () => {
  expect(helpers.multiplyByTen(undefined)).toBe(0);
  expect(helpers.multiplyByTen(null)).toBe(0);
  expect(helpers.multiplyByTen(NaN)).toBe(0);
  expect(helpers.multiplyByTen("cat")).toBe(0);
});

it("should convert a string to a number if possible", () => {
  expect(helpers.multiplyByTen("10")).toBe(100);
  expect(helpers.multiplyByTen("10.5")).toBe(105);
});

//subtractFive

it("should subtract 5 from a number", () => {
  expect(helpers.subtractFive(10)).toBe(5);
});

it("should return zero if not given a number", () => {
  expect(helpers.subtractFive(undefined)).toBe(0);
  expect(helpers.subtractFive(null)).toBe(0);
  expect(helpers.subtractFive(NaN)).toBe(0);
  expect(helpers.subtractFive("cat")).toBe(0);
});

it("should convert a string to a number if possible", () => {
  expect(helpers.subtractFive("10")).toBe(5);
  expect(helpers.subtractFive("10.5")).toBe(5.5);
});

//areSameLength

it("should check if two strings have the same length", () => {
  expect(helpers.areSameLength("cat", "dog")).toBe(true);
});

it("should convert one or both arguments to a string if passed a number or array", () => {
  expect(helpers.areSameLength(222, 444)).toBe(true);
  expect(helpers.areSameLength(222, "cat")).toBe(true);
  expect(helpers.areSameLength("dog", 444)).toBe(true);
  expect(helpers.areSameLength("dog", ["dog"])).toBe(true);
  expect(helpers.areSameLength(["dog"], 444)).toBe(true);
});

it("should return false if either one or both arguments are not a number, string, or array", () => {
  expect(helpers.areSameLength(undefined, "cat")).toBe(false);
  expect(helpers.areSameLength(null, 33)).toBe(false);
  expect(helpers.areSameLength("dog", null)).toBe(false);
  expect(helpers.areSameLength(33, undefined)).toBe(false);
});

//areEqual

it("should check if two numbers are equal", () => {
  expect(helpers.areEqual(4, 4)).toBe(true);
  expect(helpers.areEqual(4, 5)).toBe(false);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.areEqual("10", "10")).toBe(true);
  expect(helpers.areEqual("10.5", "10.5")).toBe(true);
  expect(helpers.areEqual("10", 10)).toBe(true);
  expect(helpers.areEqual(10, "10")).toBe(true);
  expect(helpers.areEqual("10", "11")).toBe(false);
});

//lessThanNinety

it("return true if the argument is a number less than 90", () => {
  expect(helpers.lessThanNinety(89)).toBe(true);
  expect(helpers.lessThanNinety(91)).toBe(false);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.lessThanNinety("89")).toBe(true);
  expect(helpers.lessThanNinety("89.9999999")).toBe(true);
});

//greaterThanFifty

it("return true if the argument is a number greater than 50", () => {
  expect(helpers.greaterThanFifty(51)).toBe(true);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.greaterThanFifty("89")).toBe(true);
  expect(helpers.greaterThanFifty("89.9999999")).toBe(true);
});

//add

it("return the sum of two numbers added together", () => {
  expect(helpers.add(89, 1)).toBe(90);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.add("89", 1)).toBe(90);
  expect(helpers.add(89, "1")).toBe(90);
});

//subtract

it("return the results of one number subtracted from another", () => {
  expect(helpers.subtract(91, 1)).toBe(90);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.subtract("91", 1)).toBe(90);
  expect(helpers.subtract(91, "1")).toBe(90);
});

//divide

it("return the remainder of one number divided by another", () => {
  expect(helpers.divide(10, 2)).toBe(5);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.divide("10", 2)).toBe(5);
  expect(helpers.divide(10, "2")).toBe(5);
});

//multiply

it("return the product of one number multiplied by another", () => {
  expect(helpers.multiply(5, 2)).toBe(10);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.multiply("5", 2)).toBe(10);
  expect(helpers.multiply(5, "2")).toBe(10);
});

//getRemainder

it("should return the remainder of one number divided by another", () => {
  expect(helpers.getRemainder(5, 2)).toBe(1);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.getRemainder("5", 2)).toBe(1);
  expect(helpers.getRemainder(5, "2")).toBe(1);
});

//isEven

it("return true if the argument is an even number", () => {
  expect(helpers.isEven(2)).toBe(true);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.isEven("2")).toBe(true);
});

it("should return false if passed an argument other than a string or number", () => {
  expect(helpers.isEven([])).toBe(false);
  expect(helpers.isEven({})).toBe(false);
  expect(helpers.isEven(NaN)).toBe(false);
});

//isOdd

it("should return true if the argument is an odd number", () => {
  expect(helpers.isOdd(1)).toBe(true);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.isOdd("2")).toBe(false);
});

it("should return false if passed an argument other than a string or number", () => {
  expect(helpers.isOdd([])).toBe(false);
  expect(helpers.isOdd({})).toBe(false);
  expect(helpers.isOdd(NaN)).toBe(false);
});

//square

it("should return the square of a number", () => {
  expect(helpers.square(2)).toBe(4);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.square("2c")).toBe(4);
});

it("should return false if passed an argument other than a string or number", () => {
  expect(helpers.square([])).toBe(false);
  expect(helpers.square({})).toBe(false);
  expect(helpers.square(NaN)).toBe(false);
});

//cube

it("should return the cube of a number", () => {
  expect(helpers.cube(2)).toBe(8);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.cube("2c")).toBe(8);
});

it("should return false if passed an argument other than a string or number", () => {
  expect(helpers.cube([])).toBe(false);
  expect(helpers.cube({})).toBe(false);
  expect(helpers.cube(NaN)).toBe(false);
});

//raiseToPower

it("should return the square of a number", () => {
  expect(helpers.raiseToPower(2, 3)).toBe(8);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.raiseToPower("2c", 3)).toBe(8);
});

it("should return false if passed an argument other than a string or number", () => {
  expect(helpers.raiseToPower([], 2)).toBe(false);
  expect(helpers.raiseToPower({}, 2)).toBe(false);
  expect(helpers.raiseToPower(NaN, 2)).toBe(false);
});

//roundNumber

it("should return a number rounded to the nearest integer", () => {
  expect(helpers.roundNumber(2.7)).toBe(3);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.roundNumber("2.555c")).toBe(3);
});

it("should return false if passed an argument other than a string or number", () => {
  expect(helpers.roundNumber([])).toBe(false);
  expect(helpers.roundNumber({})).toBe(false);
  expect(helpers.roundNumber(NaN)).toBe(false);
});

//addExclamationPoint

it("return a string with an an exclamation point added to the end", () => {
  expect(helpers.addExclamationPoint("Here's Johnny")).toBe("Here's Johnny!");
});

it("should convert its argument to a string if passed a number or array", () => {
  expect(helpers.addExclamationPoint(222)).toBe("222!");
  expect(helpers.addExclamationPoint(["dog"])).toBe("dog!");
});

//combineNames

it("should combine two name strings into one", () => {
  expect(helpers.combineNames("cat", "dog")).toBe("cat dog");
});

it("should return false if either one or both arguments are not a string", () => {
  expect(helpers.combineNames(undefined, "cat")).toBe(false);
  expect(helpers.combineNames(null, 33)).toBe(false);
  expect(helpers.combineNames("dog", null)).toBe(false);
  expect(helpers.combineNames(33, undefined)).toBe(false);
});

//getGreeting

it("should return a greeting strings into one", () => {
  expect(helpers.getGreeting("nurse")).toBe("Hello nurse!");
});

it("should return false if its argument is not a string", () => {
  expect(helpers.getGreeting(undefined)).toBe(false);
  expect(helpers.getGreeting(33)).toBe(false);
  expect(helpers.getGreeting({})).toBe(false);
});

//getRectangleArea

it("return the area of a rectangle as a number", () => {
  expect(helpers.getRectangleArea(5, 2)).toBe(10);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.getRectangleArea("5vvv", 2)).toBe(10);
  expect(helpers.getRectangleArea(5, "2sss")).toBe(10);
});

//getTriangleArea

it("return the area of a triangle as a number", () => {
  expect(helpers.getTriangleArea(5, 2)).toBe(5);
  expect(helpers.getTriangleArea(3.55, 2.55)).toBeCloseTo(4.53);
  expect(helpers.getTriangleArea(-2, 2)).toBe(-2);
});

//getCircleArea

it("return the area of a circle as a number", () => {
  expect(helpers.getCircleArea(2)).toBeCloseTo(12.57);
  expect(helpers.getCircleArea(3.55)).toBeCloseTo(39.59);
  expect(helpers.getCircleArea(-2)).toBeCloseTo(12.57);
});

//getRectangularPrismVolume

it("return the volume of a rectangular prism as a number", () => {
  expect(helpers.getRectangularPrismVolume(2, 2, 2)).toBe(8);
  expect(helpers.getRectangularPrismVolume(2.55,2.55,2.55)).toBeCloseTo(16.58);
  expect(helpers.getRectangularPrismVolume(-2, -2, -2)).toBe(-8);
});
