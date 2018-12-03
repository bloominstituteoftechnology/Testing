const helpers = require("./project-1");

// start testing!
describe("multiplyByTen", () => {
  test("multiples number by 10", () => {
    expect(helpers.multiplyByTen(5, 10)).toBe(50);
  });
});

describe("subtractFive", () => {
  test("subtracts five from a number", () => {
    expect(helpers.subtractFive(20, 10)).toBe(15);
  });
});

describe("areSameLength", () => {
  test("checks to see if string is same length", () => {
    expect(helpers.areSameLength("bob", "doe")).toBeTruthy();
  });
});

describe("areEqual", () => {
  test("numbers are equal", () => {
    expect(helpers.areEqual(5, 5)).toBeTruthy();
  });
});

describe("lessThanNinety", () => {
  test("number is less than 90", () => {
    expect(helpers.lessThanNinety(60)).toBeTruthy();
  });
});

describe("greaterThanFifty", () => {
  test("number is greater than 50", () => {
    expect(helpers.greaterThanFifty(60)).toBeTruthy();
  });
});

describe("add", () => {
  test("add two numbers together", () => {
    expect(helpers.add(60, 5)).toBe(65);
  });
});

describe("subtract", () => {
  test("subtract two numbers", () => {
    expect(helpers.subtract(60, 5)).toBe(55);
  });
});

describe("divide", () => {
  test("divide two numbers", () => {
    expect(helpers.divide(60, 5)).toBe(12);
  });
});

describe("multiply", () => {
  test("multiply two numbers", () => {
    expect(helpers.multiply(5, 5)).toBe(25);
  });
});

describe("getRemainder", () => {
  test("getRemainder of two numbers", () => {
    expect(helpers.getRemainder(60, 5)).toBe(0);
  });
});

describe("isEven", () => {
  test("is number even", () => {
    expect(helpers.isEven(6)).toBeTruthy();
  });
});

describe("isOdd", () => {
  test("is number odd", () => {
    expect(helpers.isOdd(5)).toBeTruthy();
  });
});

describe("square", () => {
  test("square two numbers", () => {
    expect(helpers.square(5)).toBe(25);
  });
});

describe("cube", () => {
  test("cube two numbers", () => {
    expect(helpers.cube(5)).toBe(125);
  });
});

describe("raiseToPower", () => {
  test("raiseToPower two numbers", () => {
    expect(helpers.raiseToPower(4, 3)).toBe(64);
  });
});

describe("roundNumber", () => {
  test("round two numbers", () => {
    expect(helpers.roundNumber(60.1)).toBe(60);
  });
});

describe("roundUp", () => {
  test("roundUp two numbers", () => {
    expect(helpers.roundUp(60.1)).toBe(61);
  });
});

describe("addExclamationPoint", () => {
  test("add exclamation point to string", () => {
    expect(helpers.addExclamationPoint("hello")).toBe("hello!");
  });
});

describe("combineNames", () => {
  test("combine two names", () => {
    expect(helpers.combineNames("Riley", "Brown")).toBe("Riley Brown");
  });
});

describe("getGreeting", () => {
  test("greets a user by their name", () => {
    expect(helpers.getGreeting("Riley")).toBe("Hello Riley!");
  });
});

describe("getRectangleArea", () => {
  test("get Rectangle Area of two numbers", () => {
    expect(helpers.getRectangleArea(5, 5)).toBe(25);
  });
});

describe("getTriangleArea", () => {
  test("get TriangleArea of two numbers", () => {
    expect(helpers.getTriangleArea(20, 10)).toBe(100);
  });
});

describe("getCircleArea", () => {
  test("get Circle Area of two numbers", () => {
    expect(helpers.getCircleArea(5)).toBe(78.53981633974483);
  });
});

describe("getRectangularPrismVolume", () => {
  test("get rectangle prism volume", () => {
    expect(helpers.getRectangularPrismVolume(5, 10, 15)).toBe(750);
  });
});
