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
