const funcs = require("./project-2");

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe("testing the second set of functions for the project", () => {
  // getBiggest
  test("tests if getBiggest(10, 20) returns 20", () => {
    expect(funcs.getBiggest(10, 20)).toBe(20);
  });

  // greeting
  test("tests if greeting('German') returns 'Guten Tag!'", () => {
    expect(funcs.greeting("German")).toBe("Guten Tag!");
  });

  // isTenOrFive
  test("tests if isTenOrFive(34) returns false", () => {
    expect(funcs.isTenOrFive(34)).toBe(false);
  });

  // isInRange
  test("tests if isInRange(100) returns false", () => {
    expect(funcs.isInRange(100)).toBe(false);
  });

  // isInteger
  test("tests if isIntger(1.23) returns false", () => {
    expect(funcs.isInteger(1.23)).toBe(false);
  });
});
