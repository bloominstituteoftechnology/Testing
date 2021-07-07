const helpers = require("./project-1");

// start testing!

describe("multiplyByTen", () => {
  it("multiplyByTen is a function", () => {
    expect(helpers.multiplyByTen()).toBeDefined();
  });
  it("returns NaN when given a non numeric value", () => {
    expect(helpers.multiplyByTen(undefined)).toBeNaN();
    expect(helpers.multiplyByTen("two")).toBeNaN();
    expect(helpers.multiplyByTen(NaN)).toBeNaN();
  });
  it("should return the given number multiplied by 10", () => {
    expect(helpers.multiplyByTen(10)).toBe(100);
  });
});

describe("subtractFive", () => {
  it("subtractFive is a function", () => {
    expect(helpers.subtractFive()).toBeDefined();
  });
  it("returns NaN when given a non numeric value", () => {
    expect(helpers.subtractFive(undefined)).toBeNaN();
    expect(helpers.subtractFive("two")).toBeNaN();
  });
  it("should return the given number minus 5", () => {
    expect(helpers.subtractFive(10)).toBe(5);
  });
});

describe("areSameLength", () => {
  it("should return true of strings of the same length", () => {
    expect(helpers.areSameLength("Why", "Bye")).toBeTruthy();
  });
  it("should return false of strings of different lengths", () => {
    expect(helpers.areSameLength("Why", "Goodbye")).toBeFalsy();
  });
});

describe("areEqual", () => {
  it("should return true if x and y are equal", () => {
    expect(helpers.areEqual(35, 35)).toBeTruthy();
  });
  it("should return false if x and y are NOT equal", () => {
    expect(helpers.areEqual("Why", 0)).toBeFalsy();
  });
});

describe("lessThanNinety", () => {
  it("should return true if number is less than 90", () => {
    expect(helpers.lessThanNinety(0)).toBeTruthy();
  });
  it("should return false if number is GREATER THAN 90", () => {
    expect(helpers.lessThanNinety(121)).toBeFalsy();
  });
});

describe("greaterThanFifty", () => {
  it("should return true if number is greater than 50", () => {
    expect(helpers.greaterThanFifty(76)).toBeTruthy();
  });
  it("should return false if number is LESS THAN 50", () => {
    expect(helpers.greaterThanFifty(25)).toBeFalsy();
  });
});

describe("add", () => {
  it("should return x + y", () => {
    expect(helpers.add(50, 15)).toBe(65);
  });
});

describe("subtract", () => {
  it("should return x - y", () => {
    expect(helpers.subtract(100, 15)).toBe(85);
  });
});

describe("divide", () => {
  it("should return x / y", () => {
    expect(helpers.divide(50, 5)).toBe(10);
  });
});

describe("multiply", () => {
  it("should return x * y", () => {
    expect(helpers.multiply(50, 15)).toBe(750);
  });
});

describe("getRemainder", () => {
  it("should return x % y", () => {
    expect(helpers.getRemainder(26, 5)).toBe(1);
  });
});

describe("isEven", () => {
  it("isEven is a function", () => {
    expect(helpers.isEven()).toBeDefined();
  });
  it("should return true for even numbers", () => {
    expect(helpers.isEven(4)).toBeTruthy();
    expect(helpers.isEven(0)).toBeTruthy();
  });
  it("should return false for odd numbers", () => {
    expect(helpers.isEven(3)).toBeFalsy();
    expect(helpers.isEven(-1)).toBeFalsy();
  });
});

describe("isOdd", () => {
  it("isOdd is a function", () => {
    expect(helpers.isOdd()).toBeDefined();
  });
  it("should return true for odd numbers", () => {
    expect(helpers.isOdd(3)).toBeTruthy();
    expect(helpers.isOdd(-1)).toBeTruthy();
  });
  it("should return false for even numbers", () => {
    expect(helpers.isOdd(4)).toBeFalsy();
    expect(helpers.isOdd(0)).toBeFalsy();
  });
});

describe("square", () => {
  it("should return the given number squared", () => {
    expect(helpers.square(5)).toBe(25);
  });
});

describe("cube", () => {
  it("should return the given number cubed", () => {
    expect(helpers.cube(5)).toBe(125);
  });
});

describe("raiseToPower", () => {
  it("should return the given number ^ a given exponent", () => {
    expect(helpers.raiseToPower(5, 3)).toBe(125);
  });
});

describe("roundNumber", () => {
  it("should round the number given to it (either up or down)", () => {
    expect(helpers.roundNumber(5.4)).toBe(5);
  });
});

describe("roundUp", () => {
  it("should return the number given to it rounded up", () => {
    expect(helpers.roundUp(5.4)).toBe(6);
  });
});

describe("addExclamationPoint", () => {
  it("should return a given string with an exclamation point at the end", () => {
    expect(helpers.addExclamationPoint("Wow")).toBe("Wow!");
  });
});

describe("combineNames", () => {
  it("should return a string with the provided first and last name", () => {
    expect(helpers.combineNames("George", "Mikan")).toBe("George Mikan");
  });
});

describe("getGreeting", () => {
  it("should return a string that greets provided name", () => {
    expect(helpers.getGreeting("George")).toBe("Hello George!");
  });
});

describe("getRectangleArea", () => {
  it("should return the area of a rectangle", () => {
    expect(helpers.getRectangleArea(8, 5)).toBe(40);
  });
});

describe("getTriangleArea", () => {
  it("should return the area of a triangle", () => {
    expect(helpers.getTriangleArea(8, 5)).toBe(20);
  });
});

describe("getCircleArea", () => {
  it("should return the area of a circle", () => {
    expect(helpers.getCircleArea(5)).toBeCloseTo(78.54);
  });
});

describe("getRectangularPrismVolume", () => {
  it("should return the volume of a rectangular prism", () => {
    expect(helpers.getRectangularPrismVolume(8, 5, 2)).toBe(80);
  });
});
