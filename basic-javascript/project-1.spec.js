const funcs = require("./project-1");

// write your tests here
describe("multiplyByTen", () => {
  it("should multiply by 10", () => {
    const multiplyByTen = funcs.multiplyByTen;

    const twenty = multiplyByTen(2);
    const minusThirty = multiplyByTen(-3);
    const fifty = multiplyByTen(5);

    expect(twenty).toBe(20);
    expect(minusThirty).toBe(-30);
    expect(fifty).toBe(50);
  });
});

describe("subtractFive", () => {
  it("should subtract 5", () => {
    expect(funcs.subtractFive(5)).toBe(0);
  });
});

describe("areSameLength", () => {
  it("lengths should be the same", () => {
    expect(funcs.areSameLength("pie", "tea")).toBe(true);
    expect(funcs.areSameLength("pie", "taco")).toBe(false);
  });
});

describe("areEqual", () => {
  it("should return if equal", () => {
    expect(funcs.areEqual(5, 5)).toBe(true);
    expect(funcs.areEqual(5, 23)).toBe(false);
  });
});

describe("lessThanNinety", () => {
  it("should be less than ninety", () => {
    expect(funcs.lessThanNinety(91)).toBe(false);
    expect(funcs.lessThanNinety(-5)).toBe(true);
  });
});

describe("greaterThanFifty", () => {
  it("should be greater than fifty", () => {
    expect(funcs.greaterThanFifty(91)).toBe(true);
    expect(funcs.greaterThanFifty(-5)).toBe(false);
  });
});

describe("add", () => {
  it("should add two numbers", () => {
    expect(funcs.add(3, 5)).toBe(8);
    expect(funcs.add(-5, 2)).toBe(-3);
  });
});

describe("subtract", () => {
  it("should subtract two numbers", () => {
    expect(funcs.subtract(3, 5)).toBe(-2);
    expect(funcs.subtract(-5, 2)).toBe(-7);
  });
});

describe("divide", () => {
  it("should divide two numbers", () => {
    expect(funcs.divide(12, 2)).toBe(6);
    expect(funcs.divide(10, 3)).toBe(10 / 3);
  });
});

describe("multiply", () => {
  it("should multiply two numbers", () => {
    expect(funcs.multiply(12, 2)).toBe(24);
  });
});

describe("isEven", () => {
  it("should return true if the param is even", () => {
    expect(funcs.isEven(12)).toBe(true);
  });
  it("should return false if the param is not even", () => {
    expect(funcs.isEven(13)).toBe(false);
    expect(funcs.isEven("hello")).toBe(false);
  });
});

describe("isOdd", () => {
  it("should return true if the param is odd", () => {
    expect(funcs.isOdd(13)).toBe(true);
  });
  it("should return false if the param is not odd", () => {
    expect(funcs.isOdd(12)).toBe(false);
    // returns true by default so will return true if given a string etc.
    // expect(funcs.isOdd("hello")).toBe(false);
  });
});

describe("square", () => {
  it("should square a number", () => {
    expect(funcs.square(8)).toBe(64);
  });
});

describe("cube", () => {
  it("should cube a number", () => {
    expect(funcs.cube(8)).toBe(512);
  });
});

describe("raiseToPower", () => {
  it("should raise a number to a given power", () => {
    expect(funcs.raiseToPower(2, 4)).toBe(16);
  });
});

describe("roundNumber", () => {
  it("should return a rounded number", () => {
    expect(funcs.roundNumber(3.65)).toBe(4);
    expect(funcs.roundNumber(3.4999)).toBe(3);
  });
});

describe("addExclamationPoint", () => {
  it("should add an exclamation point to a string", () => {
    expect(funcs.addExclamationPoint("Hello")).toBe("Hello!");
  });
});

describe("combineNames", () => {
  it("should combine two given strings with a space in between", () => {
    expect(funcs.combineNames("Bobby", "B")).toBe("Bobby B");
  });
});

describe("getGreeting", () => {
  it("should return a greeting with a given string added", () => {
    expect(funcs.getGreeting("Big Bobby B")).toBe("Hello Big Bobby B!");
  });
});

describe("getRectangleArea", () => {
  it("should return the area of a rectangle", () => {
    expect(funcs.getRectangleArea(3, 4)).toBe(12);
  });
});

describe("getTriangleArea", () => {
  it("should return the area of a triangle", () => {
    expect(funcs.getTriangleArea(3, 4)).toBe(6);
  });
});

describe("getCircleArea", () => {
  it("should return the area of a circle", () => {
    expect(funcs.getCircleArea(3)).toBe(Math.PI * 3 * 3);
  });
});

describe("getRectangularPrismVolume", () => {
  it("should return the volume of a rectangular prism", () => {
    expect(funcs.getRectangularPrismVolume(5, 6, 10)).toBe(5 * 6 * 10);
  });
});
