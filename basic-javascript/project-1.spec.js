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

}); 