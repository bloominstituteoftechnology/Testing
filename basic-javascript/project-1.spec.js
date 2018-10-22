const helpers = require("./project-1");

// start testing!

describe("helpers.js", () => {
  // multiplyByTen
  test("multiplies 2 by 10 equals 20", () => {
    expect(helpers.multiplyByTen(2)).toBe(20);
  });
  // subtractFive
  test("subtracts 5 from 10 equals 5", () => {
    expect(helpers.subtractFive(10)).toBe(5);
  });

  // areSameLength
  test('tests if "tom" and "tom" returns true', () => {
    expect(helpers.areSameLength("tom", "tom")).toBe(true);
  });

  // areEqual
  test("tests if 10 and 10 are equal returns true", () => {
    expect(helpers.areEqual(10, 10)).toBe(true);
  });

  // lessThankNinety
  test("tests if 50 is less than 90 and if so return true", () => {
    expect(helpers.lessThanNinety(50)).toBe(true);
  });

  // greaterThanFifty
  test("tests if 60 is greater than fifty if so return true", () => {
    expect(helpers.greaterThanFifty(60)).toBe(true);
  });

  // add
  test("tests if 10 add 10 returns 20", () => {
    expect(helpers.add(10, 10)).toBe(20);
  });

  // subtract
  test("tests if 20 subtract 10 equals 10", () => {
    expect(helpers.subtract(20, 10)).toBe(10);
  });

  // divide
  test("tests if 100 divide 10 equals 10", () => {
    expect(helpers.divide(100, 10)).toBe(10);
  });

  // multiply
  test("tests if 10 multiply 10 equals 100", () => {
    expect(helpers.multiply(10, 10)).toBe(100);
  });

  // getRemainder
  test("tests if the remainder of 10 / 2 equals 0", () => {
    expect(helpers.getRemainder(10, 2)).toBe(0);
  });

  // isEven
  test("tests if 10 is even and should return true", () => {
    expect(helpers.isEven(10)).toBe(true);
  });

  // isOdd
  test("tests if 10 is odd and should return false", () => {
    expect(helpers.isOdd(10)).toBe(false);
  });

  // square
  test("tests if 10 squared is 100", () => {
    expect(helpers.square(10)).toBe(100);
  });

  // cube
  test("tests if 10 cubed is equal to 1000", () => {
    expect(helpers.cube(10)).toBe(1000);
  });
});
