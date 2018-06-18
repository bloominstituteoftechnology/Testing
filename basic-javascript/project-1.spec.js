const helpers = require("./project-1");

// start testing!

describe("project-1", () => {
  describe("multiplyByTen", () => {
    it("returns NaN when given a non numeric value", () => {
      expect(helpers.multiplyByTen(undefined)).toBeNaN();
      expect(helpers.multiplyByTen("two")).toBeNaN();
      expect(helpers.multiplyByTen(false)).toEqual(0);
      expect(helpers.multiplyByTen(true)).toEqual(10);
    });
    it("should return the given number multiplied by ten", () => {
      const num = 10;
      const num1 = -10;
      expect(helpers.multiplyByTen(num)).toBe(100);
      expect(helpers.multiplyByTen(num1)).toBe(-100);
    });
  });
  describe("subtractFive", () => {
    it("returns NaN when subtracted by a non numeric value", () => {
      expect(helpers.subtractFive(undefined)).toBeNaN();
      expect(helpers.subtractFive("two")).toBeNaN();
      expect(helpers.subtractFive(false)).toEqual(-5);
      expect(helpers.subtractFive(true)).toEqual(-4);
    });
    it("should return given number subtracted by 5", () => {
      expect(helpers.subtractFive(10)).toBe(5);
      expect(helpers.subtractFive(-5)).toBe(-10);
    });
  });
  describe("areSameLength", () => {
    it("returns true when str1 and str2 are same lengths", () => {
      expect(helpers.areSameLength("5", "7")).toBe(true);
      expect(helpers.areSameLength("abc", "def")).toBe(true);
    });
    it("returns false when str1 and str2 are different lengths", () => {
      expect(helpers.areSameLength("5", "-55")).toBe(false);
      expect(helpers.areSameLength("abc", "defg")).toBe(false);
    });
  });
  describe("areEqual", () => {
    it("returns true when x and y are the same", () => {
      expect(helpers.areEqual(1, 1)).toBeTruthy();
      expect(helpers.areEqual(-5, -5)).toBeTruthy();
    });
    it("returns false when x and y are not the same", () => {
      expect(helpers.areEqual(1, -1)).toBeFalsy();
      expect(helpers.areEqual(-5, 5)).toBeFalsy();
    });
  });
  describe("lessThanNinety", () => {
    it("returns true when num is less than 90", () => {
      expect(helpers.lessThanNinety(89)).toBeTruthy();
      expect(helpers.lessThanNinety(-10)).toBeTruthy();
    });
    it("returns false when num is greater than 90", () => {
      expect(helpers.lessThanNinety(90)).toBeFalsy();
      expect(helpers.lessThanNinety(100)).toBeFalsy();
    });
  });
  describe("greaterThanFifty", () => {
    it("returns true when num is greater than 50", () => {
      expect(helpers.greaterThanFifty(51)).toBeTruthy();
      expect(helpers.greaterThanFifty(100)).toBeTruthy();
    });
    it("returns false when num is less than 50", () => {
      expect(helpers.greaterThanFifty(40)).toBeFalsy();
      expect(helpers.greaterThanFifty(-100)).toBeFalsy();
    });
  });
  describe("add", () => {
    it("returns the sum of x and y", () => {
      expect(helpers.add(1, 5)).toBe(6);
      expect(helpers.add(1, -5)).toBe(-4);
    });
  });
  describe("subtract", () => {
    it("returns the value of x - y", () => {
      expect(helpers.subtract(1, 5)).toBe(-4);
      expect(helpers.subtract(1, -5)).toBe(6);
    });
  });
  describe("divide", () => {
    it("returns the value of x / y", () => {
      expect(helpers.divide(5, 5)).toBe(1);
      expect(helpers.divide(100, 10)).toBe(10);
    });
  });
  describe("multiply", () => {
    it("returns the value of x multiplied by y", () => {
      expect(helpers.multiply(5, 5)).toBe(25);
      expect(helpers.multiply(100, 10)).toBe(1000);
    });
  });
  describe("getRemainder", () => {
    it("returns the remainder of x divided by y", () => {
      expect(helpers.getRemainder(100, 10)).toBe(0);
      expect(helpers.getRemainder(10, 3)).toBe(1);
    });
  });
  describe("isEven", () => {
    it("returns true when num is even", () => {
      expect(helpers.isEven(4)).toBeTruthy();
      expect(helpers.isEven(-10)).toBeTruthy();
    });
    it("returns false when num is odd", () => {
      expect(helpers.isEven(5)).toBeFalsy();
      expect(helpers.isEven(-11)).toBeFalsy();
    });
  });
  describe("isOdd", () => {
    it("returns true when num is odd", () => {
      expect(helpers.isOdd(5)).toBeTruthy();
      expect(helpers.isOdd(-11)).toBeTruthy();
    });
    it("returns false when num is even", () => {
      expect(helpers.isOdd(4)).toBeFalsy();
      expect(helpers.isOdd(-12)).toBeFalsy();
    });
  });
  describe("square", () => {
    it("returns the square of num", () => {
      expect(helpers.square(2)).toBe(4);
      expect(helpers.square(10)).toBe(100);
    });
  });
  describe("cube", () => {
    it("returns the cube of num", () => {
      expect(helpers.cube(2)).toBe(8);
      expect(helpers.cube(10)).toBe(1000);
    });
  });
  describe("raiseToPower", () => {
    it("returns num raised to the exponents power", () => {
      expect(helpers.raiseToPower(2, 3)).toBe(8);
      expect(helpers.raiseToPower(10, 2)).toBe(100);
    });
  });
  describe("roundNumber", () => {
    it("returns the rounded num", () => {
      expect(helpers.roundNumber(10.5)).toBe(11);
      expect(helpers.roundNumber(10.49)).toBe(10);
    });
  });
  describe("roundUp", () => {
    it("returns num rounded up", () => {
      expect(helpers.roundUp(10.5)).toBe(11);
      expect(helpers.roundUp(10.49)).toBe(11);
    });
  });
  describe("addExclamationPoint", () => {
    it("returns str with an exclamation point at the end", () => {
      expect(helpers.addExclamationPoint("hi")).toBe("hi!");
    });
  });
  describe("combineNames", () => {
    it("returns the first and last name concatenated together", () => {
      expect(helpers.combineNames("Derrick", "Mei")).toBe("Derrick Mei");
    });
  });
  describe("getGreeting", () => {
    it("returns Hello concatenated with name", () => {
      expect(helpers.getGreeting("Derrick")).toBe("Hello Derrick!");
    });
  });
  describe("getRectangleArea", () => {
    it("retuns the area of a rectangle with width and height", () => {
      expect(helpers.getRectangleArea(6, 5)).toBe(30);
    });
  });
  describe("getTriangleArea", () => {
    it("retuns the area of a triangle with width and height", () => {
      expect(helpers.getTriangleArea(6, 5)).toBe(15);
    });
  });
  describe("getCircleArea", () => {
    it("retuns the area of a circle with radius provided", () => {
      expect(helpers.getCircleArea(5)).toBe(Math.PI * 25);
    });
  });
  describe("getRectangularPrismVolume", () => {
    it("retuns the volumn of a prism with the provided height, width, and length", () => {
      expect(helpers.getRectangularPrismVolume(5, 5, 5)).toBe(125);
    });
  });
});
