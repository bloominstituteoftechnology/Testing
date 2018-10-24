const helpers = require("./project-1");

// start testing!
describe("multiplyByTen()", () => {
  it("should multiply provided number by ten", () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected);
  });
});

describe("subtractFive()", () => {
  it("should subtract five from the provided number", () => {
    const expected = 10;
    const actual = helpers.subtractFive(15);
    expect(actual).toEqual(expected);
  });
});

describe("areSameLength()", () => {
  it("should make sure the length of two objects are the same", () => {
    const expected = true;
    const actual = helpers.areSameLength("someObj", "someObj");
    expect(actual).toEqual(expected);
  });
});

describe("lessThanNinety()", () => {
  it("should check that the value is less than ninety", () => {
    const expected = true;
    const actual = helpers.lessThanNinety(50);
    expect(actual).toEqual(expected);
  });
});

describe("greaterThanFifty()", () => {
  it("should check that the value is greater than fifty", () => {
    const expected = true;
    const actual = helpers.greaterThanFifty(55);
    expect(actual).toEqual(expected);
  });
});

describe("add()", () => {
  it("should add two given numbers and return a sum", () => {
    const expected = 12;
    const actual = helpers.add(5, 7);
    expect(actual).toEqual(expected);
  });
});

describe("subtract()", () => {
  it("should subtract two given numbers and return a sum", () => {
    const expected = 10;
    const actual = helpers.subtract(15, 5);
    expect(actual).toEqual(expected);
  });
});

describe("divide()", () => {
  it("should divide two numbers and return a sum", () => {
    const expected = 10;
    const actual = helpers.divide(20, 2);
    expect(actual).toEqual(expected);
  });
});

describe("multiply()", () => {
  it("should multiply two numbers and return a sum", () => {
    const expected = 15;
    const actual = helpers.multiply(3, 5);
    expect(actual).toEqual(expected);
  });
});

describe("getRemainder()", () => {
  it("should divide two numbers and return the remainder", () => {
    const expected = 1;
    const actual = helpers.getRemainder(6, 5);
    expect(actual).toEqual(expected);
  });
});

describe("isEven()", () => {
  it("should determine whether a number is even or not", () => {
    const expected = true;
    const actual = helpers.isEven(6);
    expect(actual).toEqual(expected);
  });
});

describe("isOdd()", () => {
  it("should determine whether a number is odd or not", () => {
    const expected = true;
    const actual = helpers.isOdd(5);
    expect(actual).toEqual(expected);
  });
});

describe("square()", () => {
  it("should multiply a num by that num", () => {
    const expected = 25;
    const actual = helpers.square(5, 5);
    expect(actual).toEqual(expected);
  });
});

describe("cube()", () => {
  it("should multiply a num(3)", () => {
    const expected = 8;
    const actual = helpers.cube(2, 2, 2);
    expect(actual).toEqual(expected);
  });
});

describe("getRectangleArea()", () => {
  it("should multiply length x height", () => {
    const expected = 4;
    const actual = helpers.getRectangleArea(2, 2);
    expect(actual).toEqual(expected);
  });
});

describe("getRectangularPrismVolume()", () => {
  it("should multiply length x height x width", () => {
    const expected = 8;
    const actual = helpers.getRectangularPrismVolume(2, 2, 2);
    expect(actual).toEqual(expected);
  });
});

describe("roundUp()", () => {
  it("should round a number up to the nearest whole number", () => {
    const expected = 8;
    const actual = helpers.roundUp(7.95);
    expect(actual).toEqual(expected);
  });
});
