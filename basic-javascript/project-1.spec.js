const helpers = require("./project-1");

const testWrongTypes = (functionTested, expectedType, failReturn) => {
  const dataTypes = [
    "doggie",
    true,
    null,
    undefined,
    { key: "value" },
    NaN,
    17
  ];
  it(`Returns ${failReturn} if not given a ${expectedType}`, () => {
    dataTypes.forEach(type => {
      if (typeof type !== expectedType)
        expect(functionTested(type, type, type)).toBe(failReturn);
    });
  });
};

// start testing!
describe("multiplyByTen", () => {
  testWrongTypes(helpers.multiplyByTen, "number", undefined);

  it("returns 10n when given a number n", () => {
    expect(helpers.multiplyByTen(0)).toBe(0);
    expect(helpers.multiplyByTen(10.11)).toBe(101.1);
    expect(helpers.multiplyByTen(2)).toBe(20);
    expect(helpers.multiplyByTen(-3)).toBe(-30);
  });
});

describe("subtractFive", () => {
  testWrongTypes(helpers.subtractFive, "number", undefined);

  it("returns n - 5 when given a number n", () => {
    expect(helpers.subtractFive(0)).toBe(-5);
    expect(Number(helpers.subtractFive(10.12).toFixed(2))).toBe(5.12);
    expect(helpers.subtractFive(2)).toBe(-3);
    expect(helpers.subtractFive(-3)).toBe(-8);
  });
});

describe("areSameLength", () => {
  testWrongTypes(helpers.areSameLength, "string", undefined);

  it("Checks if two strings are the same length", () => {
    expect(helpers.areSameLength("sdfsdf", "sdfsdf")).toBe(true);
    expect(helpers.areSameLength("dostuff", "dothings")).toBe(false);
    expect(helpers.areSameLength("iamacoolstring", "iamalamestring")).toBe(
      true
    );
    expect(helpers.areSameLength("aaaa", "aaa")).toBe(false);
  });
});

describe("areEqual", () => {
  it("Checks if two anythings are the same", () => {
    expect(helpers.areEqual("sdfsdf", "sdfsdf")).toBe(true);
    expect(helpers.areEqual(5, "5")).toBe(false);
    expect(helpers.areEqual("iamacoolstring", "iamalamestring")).toBe(false);
    expect(helpers.areEqual(6, 6)).toBe(true);
    expect(helpers.areEqual(7, undefined)).toBe(false);
    expect(helpers.areEqual(NaN, null)).toBe(false);
    expect(helpers.areEqual(false, 0)).toBe(false);
    expect(helpers.areEqual(true, { key: "value" })).toBe(false);
    expect(helpers.areEqual(false, "false")).toBe(false);
    expect(helpers.areEqual(false, false)).toBe(true);
  });
});

describe("lessThanNinety", () => {
  testWrongTypes(helpers.lessThanNinety, "number", undefined);

  it("Checks if a number is less than 90", () => {
    expect(helpers.lessThanNinety(0)).toBe(true);
    expect(helpers.lessThanNinety(91)).toBe(false);
    expect(helpers.lessThanNinety(90)).toBe(false);
    expect(helpers.lessThanNinety(-81)).toBe(true);
    expect(helpers.lessThanNinety(45)).toBe(true);
    expect(helpers.lessThanNinety(Number.NEGATIVE_INFINITY)).toBe(true);
    expect(helpers.lessThanNinety(Number.POSITIVE_INFINITY)).toBe(false);
  });
});

describe("greaterThanFifty", () => {
  testWrongTypes(helpers.greaterThanFifty, "number", undefined);

  it("Checks if a number is greater than 50", () => {
    expect(helpers.greaterThanFifty(0)).toBe(false);
    expect(helpers.greaterThanFifty(91)).toBe(true);
    expect(helpers.greaterThanFifty(50)).toBe(false);
    expect(helpers.greaterThanFifty(-81)).toBe(false);
    expect(helpers.greaterThanFifty(45)).toBe(false);
    expect(helpers.greaterThanFifty(Number.NEGATIVE_INFINITY)).toBe(false);
    expect(helpers.greaterThanFifty(Number.POSITIVE_INFINITY)).toBe(true);
  });
});

describe("add", () => {
  testWrongTypes(helpers.add, "number", undefined);

  it("Adds two numbers together", () => {
    expect(helpers.add(0, 5)).toBe(5);
    expect(helpers.add(-10, 7)).toBe(-3);
    expect(helpers.add(30, 12)).toBe(42);
    expect(helpers.add(-81, -9)).toBe(-90);
    expect(helpers.add(45.62, 1.1)).toBe(46.72);
    expect(helpers.add(Number.NEGATIVE_INFINITY, 1)).toBe(
      Number.NEGATIVE_INFINITY
    );
  });
});

describe("subtract", () => {
  testWrongTypes(helpers.subtract, "number", undefined);

  it("Subtracts two numbers", () => {
    expect(helpers.subtract(0, 5)).toBe(-5);
    expect(helpers.subtract(-10, 7)).toBe(-17);
    expect(helpers.subtract(30, 12)).toBe(18);
    expect(helpers.subtract(-81, -9)).toBe(-72);
    expect(Number(helpers.subtract(45.62, 1.1).toFixed(2))).toBe(44.52);
    expect(helpers.subtract(Number.NEGATIVE_INFINITY, 1)).toBe(
      Number.NEGATIVE_INFINITY
    );
  });
});

describe("multiply", () => {
  testWrongTypes(helpers.multiply, "number", undefined);

  it("Multiplies two numbers", () => {
    expect(helpers.multiply(0, 5)).toBe(0);
    expect(helpers.multiply(-10, 7)).toBe(-70);
    expect(helpers.multiply(30, 12)).toBe(360);
    expect(helpers.multiply(-81, -9)).toBe(729);
    expect(Number(helpers.multiply(45.62, 1.1).toFixed(2))).toBe(50.18);
    expect(helpers.multiply(Number.NEGATIVE_INFINITY, -1)).toBe(
      Number.POSITIVE_INFINITY
    );
  });
});

describe("divide", () => {
  testWrongTypes(helpers.divide, "number", undefined);

  it("Divides two numbers", () => {
    expect(helpers.divide(0, 5)).toBe(0);
    expect(helpers.divide(-42, 7)).toBe(-6);
    expect(helpers.divide(30, 12)).toBe(2.5);
    expect(helpers.divide(-81, -9)).toBe(9);
    expect(Number(helpers.divide(45.62, 1.1).toFixed(2))).toBe(41.47);
    expect(helpers.divide(Number.NEGATIVE_INFINITY, 1)).toBe(
      Number.NEGATIVE_INFINITY
    );
  });
});

describe("isEven", () => {
  testWrongTypes(helpers.isEven, "number", undefined);

  it("Checks to see if a number is even", () => {
    expect(helpers.isEven(7)).toBe(false);
    expect(helpers.isEven(12)).toBe(true);
    expect(helpers.isEven(3.5)).toBe(false);
    expect(helpers.isEven(0)).toBe(true);
    expect(helpers.isEven(Number.NEGATIVE_INFINITY)).toBe(false);
  });
});

describe("isOdd", () => {
  testWrongTypes(helpers.isOdd, "number", undefined);

  it("Checks to see if a number is odd", () => {
    expect(helpers.isOdd(7)).toBe(true);
    expect(helpers.isOdd(12)).toBe(false);
    expect(helpers.isOdd(3.5)).toBe(false);
    expect(helpers.isOdd(0)).toBe(false);
    expect(helpers.isOdd(Number.NEGATIVE_INFINITY)).toBe(false);
  });
});

describe("square", () => {
  testWrongTypes(helpers.square, "number", undefined);

  it("Squares a number", () => {
    expect(helpers.square(7)).toBe(49);
    expect(helpers.square(-2)).toBe(4);
    expect(helpers.square(3.5)).toBe(12.25);
    expect(helpers.square(0)).toBe(0);
    expect(helpers.square(Number.NEGATIVE_INFINITY)).toBe(
      Number.POSITIVE_INFINITY
    );
  });
});

describe("cube", () => {
  testWrongTypes(helpers.cube, "number", undefined);

  it("Cubes a number", () => {
    expect(helpers.cube(7)).toBe(343);
    expect(helpers.cube(-2)).toBe(-8);
    expect(helpers.cube(3.5)).toBe(42.875);
    expect(helpers.cube(0)).toBe(0);
    expect(helpers.cube(Number.NEGATIVE_INFINITY)).toBe(
      Number.NEGATIVE_INFINITY
    );
  });
});

describe("raiseToPower", () => {
  testWrongTypes(helpers.raiseToPower, "number", undefined);

  it("Raise a number to a power", () => {
    expect(helpers.raiseToPower(7, 3)).toBe(343);
    expect(helpers.raiseToPower(-2, 2)).toBe(4);
    expect(helpers.raiseToPower(2, 16)).toBe(65536);
    expect(helpers.raiseToPower(2, -2)).toBe(0.25);
    expect(helpers.raiseToPower(Number.NEGATIVE_INFINITY, 6)).toBe(
      Number.POSITIVE_INFINITY
    );
  });
});

describe("roundNumber", () => {
  testWrongTypes(helpers.roundNumber, "number", undefined);

  it("Rounds a number", () => {
    expect(helpers.roundNumber(7.2)).toBe(7);
    expect(helpers.roundNumber(-2.1)).toBe(-2);
    expect(helpers.roundNumber(3.5)).toBe(4);
    expect(helpers.roundNumber(0.7)).toBe(1);
    expect(helpers.roundNumber(6)).toBe(6);
    expect(helpers.roundNumber(Number.NEGATIVE_INFINITY)).toBe(
      Number.NEGATIVE_INFINITY
    );
  });
});

describe("roundUp", () => {
  testWrongTypes(helpers.roundUp, "number", undefined);

  it("Rounds a number up", () => {
    expect(helpers.roundUp(7.2)).toBe(8);
    expect(helpers.roundUp(-2.9)).toBe(-2);
    expect(helpers.roundUp(3.5)).toBe(4);
    expect(helpers.roundUp(0.7)).toBe(1);
    expect(helpers.roundUp(6)).toBe(6);
    expect(helpers.roundUp(Number.NEGATIVE_INFINITY)).toBe(
      Number.NEGATIVE_INFINITY
    );
  });
});

describe("addExclamationPoint", () => {
  testWrongTypes(helpers.addExclamationPoint, "string", undefined);

  it("Adds an exclamation point to the end of a string", () => {
    expect(helpers.addExclamationPoint("")).toBe("!");
    expect(helpers.addExclamationPoint("!")).toBe("!!");
    expect(
      helpers.addExclamationPoint("Make a little birdhouse in your soul")
    ).toBe("Make a little birdhouse in your soul!");
  });
});

describe("combineNames", () => {
  testWrongTypes(helpers.combineNames, "string", undefined);

  it("Combines first and last names", () => {
    expect(helpers.combineNames("", "")).toBe(" ");
    expect(helpers.combineNames("Zaphod", "Beeblebrox")).toBe(
      "Zaphod Beeblebrox"
    );
    expect(helpers.combineNames("Zaphod's just this guy,", "you know?")).toBe(
      "Zaphod's just this guy, you know?"
    );
  });
});

describe("getGreeting", () => {
  testWrongTypes(helpers.getGreeting, "string", undefined);

  it("Greets the given name", () => {
    expect(helpers.getGreeting("")).toBe("Hello !");
    expect(helpers.getGreeting("Zaphod")).toBe("Hello Zaphod!");
  });
});

describe("getRectangleArea", () => {
  testWrongTypes(helpers.getRectangleArea, "number", undefined);

  it("Multiplies two numbers (for rectangle area)", () => {
    expect(helpers.getRectangleArea(0, 5)).toBe(0);
    expect(helpers.getRectangleArea(-10, 7)).toBe(undefined);
    expect(helpers.getRectangleArea(30, 12)).toBe(360);
    expect(helpers.getRectangleArea(-81, -9)).toBe(undefined);
    expect(Number(helpers.getRectangleArea(45.62, 1.1).toFixed(2))).toBe(50.18);
    expect(helpers.getRectangleArea(Number.NEGATIVE_INFINITY, -1)).toBe(
      undefined
    );
  });
});

describe("getTriangleArea", () => {
  testWrongTypes(helpers.getTriangleArea, "number", undefined);

  it("Multiplies two numbers (for triangle area)", () => {
    expect(helpers.getTriangleArea(0, 5)).toBe(0);
    expect(helpers.getTriangleArea(-10, 7)).toBe(undefined);
    expect(helpers.getTriangleArea(30, 12)).toBe(180);
    expect(helpers.getTriangleArea(-81, -9)).toBe(undefined);
    expect(Number(helpers.getTriangleArea(45.62, 1.1).toFixed(2))).toBe(25.09);
    expect(helpers.getTriangleArea(Number.NEGATIVE_INFINITY, -1)).toBe(
      undefined
    );
  });
});

describe("getCircleArea", () => {
  testWrongTypes(helpers.getCircleArea, "number", undefined);

  it("Finds area of circle", () => {
    expect(helpers.getCircleArea(7)).toBe(153.93804002589985);
    expect(helpers.getCircleArea(-2)).toBe(undefined);
    expect(helpers.getCircleArea(3.5)).toBe(38.48451000647496);
    expect(helpers.getCircleArea(0)).toBe(0);
    expect(helpers.getCircleArea(Number.NEGATIVE_INFINITY)).toBe(undefined);
  });
});

describe("getRectangularPrismVolume", () => {
  testWrongTypes(helpers.getRectangularPrismVolume, "number", undefined);

  it("Multiplies two numbers (for rectangle area)", () => {
    expect(helpers.getRectangularPrismVolume(0, 5, 6)).toBe(0);
    expect(helpers.getRectangularPrismVolume(-10, 7, 2)).toBe(undefined);
    expect(helpers.getRectangularPrismVolume(30, 12, 1)).toBe(360);
    expect(helpers.getRectangularPrismVolume(81, 9, 3)).toBe(2187);
    expect(
      Number(helpers.getRectangularPrismVolume(45.62, 1.1, 3).toFixed(2))
    ).toBe(150.55);
    expect(
      helpers.getRectangularPrismVolume(Number.POSITIVE_INFINITY, 1, 1)
    ).toBe(Number.POSITIVE_INFINITY);
  });
});
