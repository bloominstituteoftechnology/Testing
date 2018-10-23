const helpers = require("./project-1");

// start testing!
describe("helpers.js", () => {
  // multiplyByTen
  test("tests 10 multiply 10 equals 100", () => {
    expect(helpers.multiplyByTen(10)).toBe(100);
  });

  // subtractFive
  test("tests if 10 subtract returns 5", () => {
    expect(helpers.subtractFive(10)).toBe(5);
  });

  // areSameLength
  test("tests if cat and dog are same length and returns true", () => {
    expect(helpers.areSameLength("cat", "dog")).toBe(true);
  });

  // areEqual
  test("tests if 5 and 5 are equal and returns true", () => {
    expect(helpers.areSameLength(5, 5)).toBe(true);
  });

  // lessThanNinety
  test("tests if 40 is less than ninety and returns true", () => {
    expect(helpers.lessThanNinety(40)).toBe(true);
  });

  // greaterThanFifty
  test("tests if 60 is greater than 50", () => {
    expect(helpers.greaterThanFifty(60)).toBe(true);
  });

  // add
  test("tests if 1 + 2 = 3", () => {
    expect(helpers.add(1, 2)).toBe(3);
  });

  // subtract
  test("tests if 3 - 2 = 1", () => {
    expect(helpers.subtract(3, 2)).toBe(1);
  });

  // divide
  test("tests if 9 / 3 = 3", () => {
    expect(helpers.divide(9, 3)).toBe(3);
  });

  // multiply
  test("tests if 3 * 3 = 9", () => {
    expect(helpers.multiply(3, 3)).toBe(9);
  });

  // getRemainder
  test("tests if 9 % 6 = 3", () => {
    expect(helpers.getRemainder(9, 6)).toBe(3);
  });

  // isEven
  test("tests if 4 is even", () => {
    expect(helpers.isEven(4)).toBe(true);
  });

  // isOdd
  test("tests if 3 is odd", () => {
    expect(helpers.isOdd(3)).toBe(true);
  });

  // square
  test("tests if 4^2 = 16 ", () => {
    expect(helpers.square(4)).toBe(16);
  });

  // cube
  test("tests if 3^3 = 27", () => {
    expect(helpers.cube(3)).toBe(27);
  });

  // raiseToPower
  test("tests if 5^3 = 125 ", () => {
    expect(helpers.raiseToPower(5, 3)).toBe(125);
  });

  // roundNumber
  test("tests if 4.99 is rounded to 5", () => {
    expect(helpers.roundNumber(4.99)).toBe(5);
  });

  // roundUp
  test("tests if 3.83 is rounded to 4", () => {
    expect(helpers.roundUp(3.83)).toBe(4);
  });

  // addExclamationPoint
  test("tests if there an exclamation point is added at the end of cat", () => {
    expect(helpers.addExclamationPoint("cat")).toBe("cat!");
  });

  // combineNames
  test("tests if John Jim is combined", () => {
    expect(helpers.combineNames("John", "Jim")).toBe("John Jim");
  });

  // getGreeting
  test("tests if Earl is greeted", () => {
    expect(helpers.getGreeting("Earl")).toBe("Hello Earl!");
  });

  // getRectangleArea
  test("tests if rectangle of 2x2 has area 4", () => {
    expect(helpers.getRectangleArea(2, 2)).toBe(4);
  });

  // getTriangleArea
  test("tests if triangle of 10x2 has area 10", () => {
    expect(helpers.getTriangleArea(10, 2)).toBe(10);
  });

  // getCircleArea
  test("tests if circle of radius 3 has area 28.274333882308138", () => {
    expect(helpers.getCircleArea(3)).toBe(28.274333882308138);
  });

  // getRectangularPrismVolume
  test("tests if prism of 10x10x10 = 1000", () => {
    expect(helpers.getRectangularPrismVolume(10, 10, 10)).toBe(1000);
  });
});
