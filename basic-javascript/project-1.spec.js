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
  expect(helpers.greaterThanFifty(89)).toBe(true);
  expect(helpers.greaterThanFifty(31)).toBe(false);
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

it("return the results of one number subtracted from another", () => {
  expect(helpers.divide(10, 2)).toBe(5);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.divide("10", 2)).toBe(5);
  expect(helpers.divide(10, "2")).toBe(5);
});

//multiply

it("return the results of one number subtracted from another", () => {
  expect(helpers.multiply(5, 2)).toBe(10);
});

it("should convert strings to numbers if possible", () => {
  expect(helpers.multiply("5", 2)).toBe(10);
  expect(helpers.multiply(5, "2")).toBe(10);
});

//getRemainder

it("return the results of one number subtracted from another", () => {
    expect(helpers.getRemainder(5, 2)).toBe(1);
  });
  
  it("should convert strings to numbers if possible", () => {
    expect(helpers.getRemainder("5", 2)).toBe(1);
    expect(helpers.getRemainder(5, "2")).toBe(1);
  });
