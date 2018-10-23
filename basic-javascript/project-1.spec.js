const helpers = require("./project-1");

// start testing!

describe("/project-1", () => {
  // multiplyByTen
  describe("mutiplybyten()", () => {
    it("should multiply provided number by 10", () => {
      const expected = 100;
      const actual = helpers.multiplyByTen(10);
      expect(actual).toEqual(expected);
    });

    it("should return NaN when called with no value", () => {
      const product = helpers.multiplyByTen();
      expect(product).toBeNaN();
    });
  });

  // subtractFive
  describe("subtractFive()", () => {
    it("should subtract provided number by 5", () => {
      const expected = 20;
      const actual = helpers.subtractFive(25);
      expect(actual).toEqual(expected);
    });

    it("should return NaN when called with no value", () => {
      const product = helpers.multiplyByTen();
      expect(product).toBeNaN();
    });
  });

  // areSameLength
  describe("areSameLength()", () => {
    test('tests if "joe" and "moe" returns true', () => {
      expect(helpers.areSameLength("joe", "moe")).toBe(true);
    });
  });

  // areEqual
  test("tests if 25 and 25 are equal returns true", () => {
    expect(helpers.areEqual(25, 25)).toBe(true);
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

  // raiseToPower
  test("tests if 10 to the power of 10 is 10000000000", () => {
    expect(helpers.raiseToPower(10, 10)).toBe(10000000000);
  });

  // roundNumber
  test("tests if 23.6 roundes is 24", () => {
    expect(helpers.roundNumber(23.6)).toBe(24);
  });

  // roundUp
  test("tests if 34.3 rounded up equals 35", () => {
    expect(helpers.roundUp(34.3)).toBe(35);
  });

  // addExclamationPoint
  test("tests if 'bang' addExclamationPoint equals 'bang!'", () => {
    expect(helpers.addExclamationPoint("bang")).toBe("bang!");
  });

  // combineNames
  test("tests if combineNames('Joe', 'Shmoe') equals Joe Shmoe", () => {
    expect(helpers.combineNames("Joe", "Shmoe")).toBe("Joe Shmoe");
  });

  // getGreeting
  test("tests if getGreeting('Jimmy') returns 'Hello Jimmy!'", () => {
    expect(helpers.getGreeting("Jimmy")).toBe("Hello Jimmy!");
  });

  // getRectangleArea
  test("tests if getRectangleArea(200, 100) returns 20000", () => {
    expect(helpers.getRectangleArea(200, 100)).toBe(20000);
  });

  // getTriangleArea
  test("tests if getTriangleArea(20, 20) returns 200", () => {
    expect(helpers.getTriangleArea(20, 20)).toBe(200);
  });

  // getCircleArea
  test("tests if getCircleArea(3) is close to 28.27", () => {
    expect(helpers.getCircleArea(3)).toBeCloseTo(28.27);
  });

  // getRectangularPrismVolume
  test("tests if getRectangularPrismVolume(10, 10, 10) returns 1000", () => {
    expect(helpers.getRectangularPrismVolume(10, 10, 10)).toBe(1000);
  });
});
