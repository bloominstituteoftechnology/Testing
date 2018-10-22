const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
 
  // multiplyByTen
  test("should provide correct value when multiplying by 10", () => {
    const expected = 50;
    const actual = helpers.multiplyByTen(5);
    expect(actual).toEqual(expected);
  });

  // subtractFive
  test("should provide correct value when subtracting by 5", () => {
    const expected = 20;
    const actual = helpers.subtractFive(25);
    expect(actual).toEqual(expected);
  });

  // areSameLength
  test("should return true when both inputs are in fact the same length", () => {
    const expected = true;
    const actual = helpers.areSameLength("car", "and");
    expect(actual).toEqual(expected);
  });

  // areEqual
  test("should return true when both inputs do in fact have deep equality", () => {
    const expected = true;
    const actual = helpers.areEqual(2, 2);
    expect(actual).toEqual(expected);
  });

  // lessThanNinety
  test("should return true when input is in fact less than 90", () => {
    const expected = true;
    const actual = helpers.lessThanNinety(75);
    expect(actual).toEqual(expected);
  });

  // greaterThanFifty
  test("should return true when input is in fact greater than 50", () => {
    const expected = true;
    const actual = helpers.greaterThanFifty(60);
    expect(actual).toEqual(expected);
  });

  // add
  test("should return correct sum of two numbers", () => {
    const expected = 35;
    const actual = helpers.add(20, 15);
    expect(actual).toEqual(expected);
  });

  // subtract
  test("should return correct difference of two numbers", () => {
    const expected = 70;
    const actual = helpers.subtract(100, 30);
    expect(actual).toEqual(expected);
  });

  // divide
  test("should return correct quotient of two numbers", () => {
    const expected = 25;
    const actual = helpers.divide(100, 4);
    expect(actual).toEqual(expected);
  });

  // multiply
  test("should return correct product of two numbers", () => {
    const expected = 24;
    const actual = helpers.multiply(3, 8);
    expect(actual).toEqual(expected);
  });

  // getRemainder
  test("should return correct remainder when dividing two numbers", () => {
    const expected = 1;
    const actual = helpers.getRemainder(101, 5);
    expect(actual).toEqual(expected);
  });

  // isEven
  test("should return true when number is in fact even", () => {
    const expected = true;
    const actual = helpers.isEven(12);
    expect(actual).toEqual(expected);
  });

  // isOdd
  test("should return true when number is in fact odd", () => {
    const expected = true;
    const actual = helpers.isOdd(7);
    expect(actual).toEqual(expected);
  });

  test("should square a number correctly", () => {
    const actual = helpers.square(8);
    expect(actual).toBe(64);
  });

  test("should cube a number correctly", () => {
    const actual = helpers.cube(2);
    expect(actual).toBe(8);
  });

  test("should produce correct value when raising num to an exponent", () => {
    const actual = helpers.raiseToPower(5, 2);
    expect(actual).toBe(25);
  });

  test("should correctly round a number", () => {
    const actual = helpers.roundNumber(5.6);
    expect(actual).toBe(6);
  });

  test("should correctly round a number up", () => {
    const actual = helpers.roundUp(5.3);
    expect(actual).toBe(6);
  });

  test("should correctly round a number", () => {
    const actual = helpers.roundNumber(5.6);
    expect(actual).toBe(6);
  });

  test("should successfully append an exclamation point to a string", () => {
    expect(helpers.addExclamationPoint("I went to the store")).toBe("I went to the store!");
  });

  test("should successfully combine two names inputted into a string with both", () => {
    expect(helpers.combineNames("Andrew", "Ghobrial")).toBe("Andrew Ghobrial");
  });

  test("should successfully return greeting containing respective name input", () => {
    expect(helpers.getGreeting("Bob")).toBe("Hello Bob!");
  });

  test("should output correct rectable area given length and width inputs", () => {
    const actual = helpers.getRectangleArea(10, 20);
    expect(actual).toBe(200);
  });

  test("should output correct triangle area given base and height inputs", () => {
    const actual = helpers.getTriangleArea(10, 20);
    expect(actual).toBe(100);
  });

  test("should output correct circle area given radius input", () => {
    const actual = helpers.getCircleArea(5);
    expect(actual).toBe(78.53981633974483);
  });

  test("should output correct rectangular prism volume given length, width, and height inputs", () => {
    const actual = helpers.getRectangularPrismVolume(2, 3, 4);
    expect(actual).toBe(24);
  });

}); 