const helpers = require("./project-1");

// start testing!
describe("Jest", () => {
  it("Jest runs", () => {});
});

describe("multiplyByTen", () => {
  it("multiplies by 10", () => {
    const expected = 10;
    const actual = helpers.multiplyByTen(1);
    expect(actual).toBe(expected);
  });
});

describe("subtractFive", () => {
  it("subtracts by 5", () => {
    const actual = helpers.subtractFive(10);
    const expected = 5;
    expect(actual).toBe(expected);
  });
});

describe("areSameLength", () => {
  it("returns true if strings are same length", () => {
    const actual = helpers.areSameLength("test", "stop");
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe("areEqual", () => {
  it("returns true if numbers are equal", () => {
    const actual = helpers.areEqual(1, 1);
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe("lessThanNinety", () => {
  it("returns true if less than 90", () => {
    const actual = helpers.lessThanNinety(89);
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe("greaterThanFifty", () => {
  it("returns true if greater than 50", () => {
    const actual = helpers.greaterThanFifty(89);
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe("add", () => {
  it("adds two numbers", () => {
    const expected = 2;
    const actual = helpers.add(1, 1);
    expect(actual).toBe(expected);
  });
  it("adds two strings", () => {
    const expected = "onetwo";
    const actual = helpers.add("one", "two");
    expect(actual).toBe(expected);
  });
  it("adds string and number", () => {
    const expected = "one1";
    const actual = helpers.add("one", 1);
    expect(actual).toBe(expected);
  });
});

describe("subtract", () => {
  it("subtracts two numbers", () => {
    const expected = 0;
    const actual = helpers.subtract(1, 1);
    expect(actual).toBe(expected);
  });
});

describe("divide", () => {
  it("divides two numbers", () => {
    const expected = 1;
    const actual = helpers.divide(1, 1);
    expect(actual).toBe(expected);
  });
});

describe("multiply", () => {
  it("multiplies two numbers", () => {
    const expected = 4;
    const actual = helpers.multiply(2, 2);
    expect(actual).toBe(expected);
  });
});

describe("getRemainder", () => {
  it("returns the remainer from dividing two numbers", () => {
    const expected = 1;
    const actual = helpers.getRemainder(5, 2);
    expect(actual).toBe(expected);
  });
});

describe("isEven", () => {
  it("returns true if number is even", () => {
    const actual = helpers.isEven(2);
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe("isOdd", () => {
  it("returns true if number is odd", () => {
    const actual = helpers.isOdd(3);
    const expected = true;
    expect(actual).toBe(expected);
  });
});

describe("square", () => {
  it("returns the input number squared", () => {
    const actual = helpers.square(3);
    const expected = 9;
    expect(actual).toBe(expected);
  });
});

describe("cube", () => {
  it("returns the input number cubed", () => {
    const actual = helpers.cube(3);
    const expected = 27;
    expect(actual).toBe(expected);
  });
});

describe("raiseToPower", () => {
  it("returns the number to the power of the exponent", () => {
    const actual = helpers.raiseToPower(3, 3);
    const expected = 27;
    expect(actual).toBe(expected);
  });
});

describe("roundNumber", () => {
  it("rounds number to the nearest integer", () => {
    const actual = helpers.roundNumber(1.5);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});

describe("roundUp", () => {
  it("rounds number up", () => {
    const actual = helpers.roundUp(1.1);
    const expected = 2;
    expect(actual).toBe(expected);
  });
});

describe("addExclamationPoint", () => {
  it("adds exclamation point to the end of a string", () => {
    const actual = helpers.addExclamationPoint("test");
    const expected = "test!";
    expect(actual).toBe(expected);
  });
});

describe("combineNames", () => {
  it("combines both parameters into a string with space in between", () => {
    const actual = helpers.combineNames("First", "Last");
    const expected = "First Last";
    expect(actual).toBe(expected);
  });
});

describe("getRectangleArea", () => {
  it("multiplies length times width", () => {
    const expected = 8;
    const actual = helpers.getRectangleArea(2, 4);
    expect(actual).toBe(expected);
  });
});

describe("getTriangleArea", () => {
  it("base times height halved", () => {
    const expected = 4;
    const actual = helpers.getTriangleArea(2, 4);
    expect(actual).toBe(expected);
  });
});

describe("getCircleArea", () => {
  it("pi times radius squared", () => {
    const expected = Math.PI * 4;
    const actual = helpers.getCircleArea(2);
    expect(actual).toBe(expected);
  });
});

describe("getRectangularPrismVolume", () => {
  it("width times height times length", () => {
    const expected = 48;
    const actual = helpers.getRectangularPrismVolume(2, 4, 6);
    expect(actual).toBe(expected);
  });
});
