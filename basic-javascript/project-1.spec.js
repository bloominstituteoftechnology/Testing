const helpers = require("./project-1");

// start testing!
describe("basic javascript operations", () => {
  it("multiplies numbers by ten", () => {
    // arrange / setup

    // act / execute the System Under Test

    // assert: check your assumptions
    expect(helpers.multiplyByTen(3)).toEqual(30);
    expect(helpers.multiplyByTen(0)).toEqual(0);
    expect(helpers.multiplyByTen(0.01)).toEqual(0.1);
  });

  it("should subtract numbers by five", () => {
    expect(helpers.subtractFive(10)).toEqual(5);
    expect(helpers.subtractFive(0)).toEqual(-5);
    expect(helpers.subtractFive(10.99)).toEqual(5.99);
    expect(helpers.subtractFive(Infinity)).toEqual(Infinity);
  });

  it("should compare if two numbers are the same length", () => {
    expect(helpers.areSameLength("news", "cats")).toEqual(true);
    expect(helpers.areSameLength("news", "casts")).toEqual(false);
    expect(helpers.areSameLength(33, "cats")).toEqual(false);
  });

  it("should compare if two numbers are equal", () => {
    let a = Number.MAX_VALUE - 10000;
    let b = Number.MAX_VALUE + 20;
    expect(helpers.areEqual(3, 3.0)).toEqual(true);
    expect(helpers.areEqual(Infinity, Infinity + 1)).toEqual(true);
    expect(helpers.areEqual(undefined, undefined)).toEqual(true);
    expect(helpers.areEqual(a, b)).toEqual(true);
  });

  it("should determine if a number is less than 90", () => {
    expect(helpers.lessThanNinety(30)).toEqual(true);
    expect(helpers.lessThanNinety(-30)).toEqual(true);
    expect(helpers.lessThanNinety(90.1)).toEqual(false);
  });

  it("should determine if a number is greater than 50", () => {
    expect(helpers.greaterThanFifty(51)).toEqual(true);
    expect(helpers.greaterThanFifty(41)).toEqual(false);
    expect(helpers.greaterThanFifty(Infinity)).toEqual(true);
  });

  it("should give the sum when adding two numbers", () => {
    expect(helpers.add(5, 3)).toEqual(8);
    expect(helpers.add(undefined, 3)).toEqual(NaN);
    expect(helpers.add(Infinity, 3)).toEqual(Infinity);
    expect(helpers.add(Infinity, -Infinity)).toEqual(NaN);
  });

  it("should subtract two numbers", () => {
    expect(helpers.subtract(5, 3)).toEqual(2);
    expect(helpers.subtract(-5, 3)).toEqual(-8);
    expect(helpers.subtract(15, 3)).toEqual(12);
  });

  it("should divide two numbers", () => {
    expect(helpers.divide(5, 2)).toEqual(2.5);
    expect(helpers.divide(5, 0)).toEqual(Infinity);
    expect(helpers.divide(0, 3)).toEqual(0);
  });

  it("should multiply two numbers", () => {
    expect(helpers.multiply(2, 0)).toEqual(0);
    expect(helpers.multiply(2, 5)).toEqual(10);
    expect(helpers.multiply(2, -2)).toEqual(-4);
  });

  it("should give the remainder of a division between two numbers", () => {
    expect(helpers.getRemainder(5, 2)).toEqual(1);
    expect(helpers.getRemainder(5, Infinity)).toEqual(5);
    expect(helpers.getRemainder(5, 1)).toEqual(0);
    expect(helpers.getRemainder(5, -2)).toEqual(1);
  });

  it("should determine if a number is even", () => {
    expect(helpers.isEven(2)).toEqual(true);
    expect(helpers.isEven(3)).toEqual(false);
    expect(helpers.isEven(Infinity)).toEqual(false);
  });

  it("should determine if a number is odd", () => {
    expect(helpers.isOdd(3)).toEqual(true);
    expect(helpers.isOdd(2)).toEqual(false);
    expect(helpers.isOdd(32.1)).toEqual(true);
  });

  it("should square a number", () => {
    expect(helpers.square(4)).toEqual(16);
    expect(helpers.square(-4)).toEqual(16);
    expect(helpers.square(Infinity)).toEqual(Infinity);
    expect(helpers.square(undefined)).toEqual(NaN);
  });

  it("should cube a number", () => {
    expect(helpers.cube(3)).toEqual(27);
    expect(helpers.cube(5)).toEqual(125);
    expect(helpers.cube(4)).toEqual(64);
  });

  it("should raise a number to a certain power", () => {
    expect(helpers.raiseToPower(1, 2)).toEqual(1);
    expect(helpers.raiseToPower(2, 2)).toEqual(4);
    expect(helpers.raiseToPower(3, 4)).toEqual(81);
  });

  it("should round a number", () => {
    expect(helpers.roundNumber(2.01)).toEqual(2);
    expect(helpers.roundNumber(2)).toEqual(2);
    expect(helpers.roundNumber(2.51)).toEqual(3);
  });

  it("should round up a number", () => {
    expect(helpers.roundUp(2.01)).toEqual(3);
    expect(helpers.roundUp(11)).toEqual(11);
    expect(helpers.roundUp(2)).toEqual(2);
  });

  it("should add an exclamation point to the word or phrase", () => {
    expect(helpers.addExclamationPoint("news")).toEqual("news!");
    expect(helpers.addExclamationPoint("hi")).toEqual("hi!");
  });

  it("should combine first and last names", () => {
    expect(helpers.combineNames("Matt", "Schofield")).toEqual("Matt Schofield");
  });

  it("should add Hello to the greeting", () => {
    expect(helpers.getGreeting("Anna")).toEqual("Hello Anna!");
  });

  it("should get the area of a rectangle", () => {
    expect(helpers.getRectangleArea(3, 5)).toEqual(15);
  });

  it("should get the area of a triangle", () => {
    expect(helpers.getTriangleArea(3, 6)).toEqual(9);
  });

  it("should get the area of a circle", () => {
    expect(helpers.getCircleArea(3)).toEqual(28.274333882308138);
  });

  it("should get the voulme of a rectangular prism", () => {
    expect(helpers.getRectangularPrismVolume(3, 5, 7)).toEqual(105);
  });
});
