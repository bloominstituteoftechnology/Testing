const helpers = require("./project-1");

it("should multiply by ten", () => {
  expect(helpers.multiplyByTen(3)).toBe(30);
  expect(helpers.multiplyByTen(undefined)).toBe(0);
  expect(helpers.multiplyByTen("three")).toBe(0);
  expect(helpers.multiplyByTen("3")).toBe(30);
});

it("should subtract five", () => {
  expect(helpers.subtractFive(4)).toBe(-1);
  expect(helpers.subtractFive(undefined)).toBeFalsy();
  expect(helpers.subtractFive("4")).toBe(-1);
  expect(helpers.subtractFive("four")).toBeFalsy();
});

it("should determine if two strings are same length", () => {
  expect(helpers.areSameLength("test1", "test2")).toBeTruthy();
  expect(helpers.areSameLength(undefined, "test2")).toBeFalsy();
  expect(helpers.areSameLength("test1", undefined)).toBeFalsy();
  expect(helpers.areSameLength(undefined, undefined)).toBeFalsy();
  expect(helpers.areSameLength("test1", "te2st2")).toBeFalsy();
});

it("should determine if both values are deeply equal", () => {
  expect(helpers.areEqual("test1", "test2")).toBeFalsy();
  expect(helpers.areEqual(undefined, "test2")).toBeFalsy();
  expect(helpers.areEqual("test1", undefined)).toBeFalsy();
  expect(helpers.areEqual(undefined, undefined)).toBeTruthy();
  expect(helpers.areEqual(NaN, NaN)).toBeFalsy();
  expect(helpers.areEqual("42", 42)).toBeFalsy();
  expect(helpers.areEqual("test1", "test1")).toBeTruthy();
});

it("should determine if value is less than 90", () => {
  expect(helpers.lessThanNinety(89)).toBeTruthy();
  expect(helpers.lessThanNinety(90)).toBeFalsy();
  expect(helpers.lessThanNinety(91)).toBeFalsy();
  expect(helpers.lessThanNinety("78")).toBeTruthy();
  expect(helpers.lessThanNinety("seven")).toBeFalsy();
  expect(helpers.lessThanNinety(NaN)).toBeFalsy();
  expect(helpers.lessThanNinety(undefined)).toBeFalsy();
});

it("should determine if value is greater than 50", () => {
  expect(helpers.greaterThanFifty(89)).toBeTruthy();
  expect(helpers.greaterThanFifty(9)).toBeFalsy();
  expect(helpers.greaterThanFifty(50)).toBeFalsy();
  expect(helpers.greaterThanFifty("78")).toBeTruthy();
  expect(helpers.greaterThanFifty("seven")).toBeFalsy();
  expect(helpers.greaterThanFifty(NaN)).toBeFalsy();
  expect(helpers.greaterThanFifty(undefined)).toBeFalsy();
});

it("should add two numbers", () => {
  expect(helpers.add(1, 2)).toBe(3);
  expect(helpers.add(undefined, 2)).toBe(2);
  expect(helpers.add(1, undefined)).toBe(1);
  expect(helpers.add(undefined, undefined)).toBe(0);
  expect(helpers.add("1", 2)).toBe(3);
  expect(helpers.add("one", 2)).toBe(0);
  expect(helpers.add(1, "two")).toBe(0);
  expect(helpers.add(1.5, 2.7)).toBeCloseTo(4.2);
});

it("should subtract two numbers", () => {
  expect(helpers.subtract(1, 2)).toBe(-1);
  expect(helpers.subtract(undefined, 2)).toBe(-2);
  expect(helpers.subtract(1, undefined)).toBe(1);
  expect(helpers.subtract(undefined, undefined)).toBe(0);
  expect(helpers.subtract("1", 2)).toBe(-1);
  expect(helpers.subtract("one", 2)).toBe(0);
  expect(helpers.subtract(1, "two")).toBe(0);
  expect(helpers.subtract(2.7, 1.5)).toBeCloseTo(1.2);
});

it("should divide two numbers", () => {
  expect(helpers.divide(1, 1)).toBe(1);
  expect(helpers.divide(1, 0)).toThrow("Can't divide by zero");
  expect(helpers.divide(1, 1)).toBe(1);
  expect(helpers.divide(1, 1)).toBe(1);
});
