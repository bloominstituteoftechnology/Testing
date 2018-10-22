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
    expect(helpers.lessThanNinety(50).toBe(true));
  });

  // greaterThanFifty
  test("tests if 60 is greater than fifty if so return true", () => {
    expect(helpers.greaterThanFifty(60).toBe(true));
  });
});
