const funcs = require("./project-1");

// write your tests here

describe("Project-1", () => {
  describe("multiplyByTen", () => {
    it("should be a function", () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(typeof multiplyByTen).toBe("function");
    });
    it("num should be a number", () => {
      const num = funcs.multiplyByTen(3);
      expect(typeof num).toBe("number");
    });
    it("should multiply passed number by 10", () => {
      const multiply = funcs.multiplyByTen;
      const twenty = multiply(2);
      expect(twenty).toBe(20);
    });
  });
  describe("subtractFive", () => {
    it("should be a function", () => {
      const subtractFive = funcs.subtractFive;
      expect(typeof subtractFive).toBe("function");
    });
    it("num should be a number", () => {
      const num = funcs.subtractFive(3);
      expect(typeof num).toBe("number");
    });
    it("should substract passed number", () => {
      const substract = funcs.subtractFive;
      const minusTwo = substract(3);
      expect(minusTwo).toBe(-2);
    });
  });
  describe("areSameLength", () => {
    const areSameLength = funcs.areSameLength;
    const str1 = "something";
    const str2 = "something else";
    const str3 = "somethang";
    it("should be a function", () => {
      expect(typeof areSameLength).toBe("function");
    });
    it("should return a bool", () => {
      expect(typeof areSameLength(str1, str2)).toBe("boolean");
    });
    it("should return false", () => {
      expect(areSameLength(str1, str2)).toBeFalsy();
    });
    it("should return true", () => {
      expect(areSameLength(str1, str3)).toBeTruthy();
    });
  });
  describe("areEqual", () => {
    const areEqual = funcs.areEqual;
    const num1 = 2;
    const num2 = 3;
    const num3 = 2;
    it("should be a function", () => {
      expect(typeof areEqual).toBe("function");
    });
    it("should return a bool", () => {
      expect(typeof areEqual(num1, num2)).toBe("boolean");
    });
    it("should return false", () => {
      expect(areEqual(num1, num2)).toBeFalsy();
    });
    it("should return true", () => {
      expect(areEqual(num1, num3)).toBeTruthy();
    });
  });
  describe("lessThanNinety", () => {
    const lessThanNinety = funcs.lessThanNinety;
    it("checks if number is less than ninety", () => {
      expect(lessThanNinety(89)).toBeTruthy();
      expect(lessThanNinety(91)).toBeFalsy();
    });
  });
  describe("greaterThanFifty", () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it("checks if number is greater than fifty", () => {
      expect(greaterThanFifty(51)).toBeTruthy();
      expect(greaterThanFifty(49)).toBeFalsy();
    });
  });
  describe("add", () => {
    const add = funcs.add;
    it("should add two numbers together", () => {
      expect(add(1, 2)).toBe(3);
      expect(add(0, 0)).toBe(0);
    });
  });
  describe("subtract", () => {
    const subtract = funcs.subtract;
    it("should substract one number from another ", () => {
      expect(subtract(1, 2)).toBe(-1);
      expect(subtract(0, 0)).toBe(0);
    });
  });
  describe("divide", () => {
    const divide = funcs.divide;
    it("should divide two numbers ", () => {
      expect(divide(4, 2)).toBe(2);
      expect(divide(0, 0)).toBe(NaN);
    });
  });
  describe("multiply", () => {
    const multiply = funcs.multiply;
    it("should multiply two numbers ", () => {
      expect(multiply(4, 2)).toBe(8);
      expect(multiply(2, 0)).toBe(0);
    });
  });
  describe("getRemainder", () => {
    const getRemainder = funcs.getRemainder;
    it("should get remainder of two numbers ", () => {
      expect(getRemainder(4, 2)).toBe(0);
      expect(getRemainder(3, 2)).toBe(1);
      expect(getRemainder(3, 0)).toBe(NaN);
    });
  });
  describe("isEven", () => {
    const isEven = funcs.isEven;
    it("should check if number is even ", () => {
      expect(isEven(4)).toBeTruthy();
      expect(isEven(3)).toBeFalsy();
    });
  });
  describe("isOdd", () => {
    const isOdd = funcs.isOdd;
    it("should check if number is odd ", () => {
      expect(isOdd(3)).toBeTruthy();
      expect(isOdd(4)).toBeFalsy();
    });
  });
  describe("square", () => {
    const square = funcs.square;
    it("should get a square of the number", () => {
      expect(square(4)).toBe(16);
      expect(square(3)).toBe(9);
      expect(square(0)).toBe(0);
    });
  });
  describe("cube", () => {
    const cube = funcs.cube;
    it("should get a cube of the number", () => {
      expect(cube(2)).toBe(8);
      expect(cube(1)).toBe(1);
      expect(cube(0)).toBe(0);
    });
  });
  describe("raiseToPower", () => {
    const raiseToPower = funcs.raiseToPower;
    it("should raise a number to power based on exponent", () => {
      expect(raiseToPower(2, 4)).toBe(16);
      expect(raiseToPower(2, 0)).toBe(1);
    });
  });
  describe("roundNumber", () => {
    const roundNumber = funcs.roundNumber;
    it("should round a number", () => {
      expect(roundNumber(2.2227)).toBe(2);
      expect(roundNumber(0.5)).toBe(1);
      expect(roundNumber(0)).toBe(0);
    });
  });
  describe("roundUp", () => {
    const roundUp = funcs.roundUp;
    it("should round up a number to its ceiling", () => {
      expect(roundUp(2.2227)).toBe(3);
      expect(roundUp(0.5)).toBe(1);
      expect(roundUp(0)).toBe(0);
    });
  });
  describe("addExclamationPoint", () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it("should add exclamation to the string", () => {
      expect(addExclamationPoint("something")).toBe("something!");
    });
  });
  describe("combineNames", () => {
    const combineNames = funcs.combineNames;
    it("should combine two strings", () => {
      expect(combineNames("Mark", "Milk")).toBe("Mark Milk");
    });
  });
  describe("getGreeting", () => {
    const getGreeting = funcs.getGreeting;
    it("should take a string and return a greeting", () => {
      expect(getGreeting("Luke")).toBe("Hello Luke!");
    });
  });
  describe("getRectangleArea", () => {
    const getRectangleArea = funcs.getRectangleArea;
    it("should calculate rectangle area", () => {
      expect(getRectangleArea(2, 4)).toBe(8);
      expect(getRectangleArea(2, 0)).toBe(0);
    });
  });
  describe("getTriangleArea", () => {
    const getTriangleArea = funcs.getTriangleArea;
    it("should calculate triangle area", () => {
      expect(getTriangleArea(2, 4)).toBe(4);
      expect(getTriangleArea(2, 0)).toBe(0);
    });
  });
  describe("getCircleArea", () => {
    const getCircleArea = funcs.getCircleArea;
    it("should calculate circle area", () => {
      expect(getCircleArea(4)).toBe(4 * Math.PI * 4);
      expect(getCircleArea(0)).toBe(0);
    });
  });
  describe("getRectangularPrismVolume", () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it("calculates the volume of a prism based on three inputs", () => {
      expect(getRectangularPrismVolume(2, 4, 8)).toBe(64);
      expect(getRectangularPrismVolume(2, 0)).toBe(NaN);
      expect(getRectangularPrismVolume(0, 2, 0)).toBe(0);
    });
  });
});
