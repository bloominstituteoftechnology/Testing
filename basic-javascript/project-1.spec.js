const helpers = require("./project-1");

// start testing!

describe("multiplyByTen", () => {
  it("should return number should multiply by ten", () => {
    expect(helpers.multiplyByTen(5)).toBe(50);
    expect(helpers.multiplyByTen(4)).toBe(40);
    expect(helpers.multiplyByTen(3)).toBe(30);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.multiplyByTen(undefined)).toBe(false);
  });
});

describe("subtractFive", () => {
  it("should return number should subtract five", () => {
    expect(helpers.subtractFive(5)).toBe(0);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.subtractFive(undefined)).toBe(false);
  });
});

describe("areSameLength", () => {
  it("should return true if two string length are true", () => {
    expect(helpers.areSameLength("hey", "bye")).toBe(true);
    expect(helpers.areSameLength("hi", "bye")).toBe(false);
  });
  it("should return not a string if not a string", () => {
    expect(helpers.areSameLength("hi", undefined)).toBe(null);
  });
});

describe("areEqual", () => {
  it("should return true if two variables are strict equal", () => {
    expect(helpers.areEqual(2, 2)).toBe(true);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.areEqual(2, undefined)).toBe(false);
  });
});

describe("lessThanNinety", () => {
  it("should return true if num is less than 90 or false if it is greater than 90", () => {
    expect(helpers.lessThanNinety(80)).toBe(true);
    expect(helpers.lessThanNinety(92)).toBe(false);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.lessThanNinety(undefined)).toBe(false);
  });
});

describe("greaterThanFifty", () => {
  it("should return true if num is greater than 50 or false if is less than 50", () => {
    expect(helpers.greaterThanFifty(52)).toBe(true);
    expect(helpers.greaterThanFifty(40)).toBe(false);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.greaterThanFifty(undefined)).toBe(false);
  });
});

describe("add", () => {
  it("should return the sum of two variables", () => {
    expect(helpers.add(4, 5)).toBe(9);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.add(4, undefined)).toBe(false);
  });
});

describe("subtract", () => {
  it("should return the difference of two variables", () => {
    expect(helpers.subtract(5, 4)).toBe(1);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.subtract(5, undefined)).toBe(false);
  });
});

describe("divide", () => {
  it("sould return the quotient of two variables", () => {
    expect(helpers.divide(10, 2)).toBe(5);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.divide(5, undefined)).toBe(false);
  });
});

describe("multiply", () => {
  it("should return the product of two variables", () => {
    expect(helpers.multiply(3, 3)).toBe(9);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.multiply(5, undefined)).toBe(false);
  });
});

describe("getRemainder", () => {
  it("should return the remainder of two variables", () => {
    expect(helpers.getRemainder(5, 2)).toBe(1);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.getRemainder(10, undefined)).toBe(false);
  });
});

describe("isEven", () => {
  it("should return true if number is even, else should return false if number is odd", () => {
    expect(helpers.isEven(6)).toBe(true);
    expect(helpers.isEven(5)).toBe(false);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.isEven(undefined)).toBe(false);
  });
});

describe("isOdd", () => {
  it("should return false if number is odd, else should return true if number is even", () => {
    expect(helpers.isOdd(5)).toBe(true);
    expect(helpers.isOdd(10)).toBe(false);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.isOdd(undefined)).toBe(false);
  });
});

describe("square", () => {
  it("should return the square a variable", () => {
    expect(helpers.square(5)).toBe(25);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.square(undefined)).toBe(false);
  });
});

describe("cube", () => {
  it("should return the cube of a variable", () => {
    expect(helpers.cube(3)).toBe(27);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.cube(undefined)).toBe(false);
  });
});

describe("raiseToPower", () => {
  it("should raise the first input num, by the second input exponent and return result", () => {
    expect(helpers.raiseToPower(2, 4)).toBe(16);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.raiseToPower(5, undefined)).toBe(false);
  });
});

describe("roundNumber", () => {
  it("should return the rounded number in a float or double", () => {
    expect(helpers.roundNumber(4.5)).toBe(5);
    expect(helpers.roundNumber(4.1)).toBe(4);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.roundNumber(undefined)).toBe(false);
  });
});

describe("roundUp", () => {
  it("should always round up and return the number", () => {
    expect(helpers.roundUp(5.2)).toBe(6);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.roundUp(undefined)).toBe(false);
  });
});

describe("addExclamationPoint", () => {
  it("should add an exclamation point to the end of a string and return it", () => {
    expect(helpers.addExclamationPoint("hi guy")).toBe("hi guy!");
  });
  it("should return not a string if not a string", () => {
    expect(helpers.addExclamationPoint(undefined)).toBe(null);
  });
});

describe("combineNames", () => {
  it("should combine first and last name input and return together", () => {
    expect(helpers.combineNames("Michael", "Jordan")).toBe("Michael Jordan");
  });
  it("should return not a string if not a string", () => {
    expect(helpers.combineNames("Michael", undefined)).toBe(null);
  });
});

describe("getGreeting", () => {
  it("should return Hello at the beginning of the name input and a ! at the end", () => {
    expect(helpers.getGreeting("Tiger")).toBe("Hello Tiger!");
  });
  it("should return not a string if not a string", () => {
    expect(helpers.getGreeting(undefined)).toBe(null);
  });
});

describe("getRectangleArea", () => {
  it("should return the area of a rectangle with the provided length and width inputs", () => {
    expect(helpers.getRectangleArea(4, 5)).toBe(20);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.getRectangleArea(5, undefined)).toBe(false);
  });
});

describe("getTriangleArea", () => {
  it("should return the area of a triangle with the provided base and height inputs", () => {
    expect(helpers.getTriangleArea(4, 5)).toBe(10);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.getTriangleArea(5, undefined)).toBe(false);
  });
});

describe("getCircleArea", () => {
  it("should return the area of a circle given the radius input", () => {
    expect(helpers.getCircleArea(3)).toBe(28.274333882308138);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.getCircleArea(undefined)).toBe(false);
  });
});

describe("getRectangularPrismVolume", () => {
  it("should return the volume of a prism with the provided length, width, height", () => {
    expect(helpers.getRectangularPrismVolume(3, 4, 5)).toBe(60);
  });
  it("should return false if number is undefined", () => {
    expect(helpers.getRectangularPrismVolume(3, 4, undefined)).toBe(false);
  });
});
