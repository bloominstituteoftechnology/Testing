const helpers = require("./project-1");

// jest globals

describe("Jest", () => {
  test("Jest runs", () => {});
});

//tests

describe("multiplyByTen", () => {
  it("should multiple provided number by ten", () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected);
  });
});

describe("subtractFive", () => {
  it("should subtract five from provided number", () => {
    const expected = 10;
    const actual = helpers.subtractFive(15);
    expect(actual).toEqual(expected);
  });
});

describe("areSameLength", () => {
  it("should check to see if two strings are the same length", () => {
    const expected = true;
    const actual = helpers.areSameLength("big", "try");
    expect(actual).toEqual(expected);
  });
});

describe("areEqual", () => {
  it("should check to see if numbers are equal", () => {
    const expected = true;
    const actual = helpers.areEqual(2, 2);
    expect(actual).toEqual(expected);
  });
});

describe("lessThanNinety", () => {
  it("should check to see if the number is less than ninety", () => {
    const expected = true;
    const actual = helpers.lessThanNinety(89);
    expect(actual).toEqual(expected);
  });
});

describe("greaterThanFifty", () => {
  it("should check to see if the number is greater than fifty", () => {
    const expected = true;
    const actual = helpers.greaterThanFifty(51);
    expect(actual).toEqual(expected);
  });
});

describe("add", () => {
  it("should make sure two numbers add together properly", () => {
    const expected = 4;
    const actual = helpers.add(2, 2);
    expect(actual).toEqual(expected);
  });
});

describe("subtract", () => {
  it("should make sure two numbers subtract properly", () => {
    const expected = 4;
    const actual = helpers.subtract(6, 2);
    expect(actual).toEqual(expected);
  });
});

describe("divide", () => {
  it("should make sure two numbers divide properly", () => {
    const expected = 4;
    const actual = helpers.divide(8, 2);
    expect(actual).toEqual(expected);
  });
});

describe("multiply", () => {
  it("should make sure two numbers multiply properly", () => {
    const expected = 4;
    const actual = helpers.multiply(2, 2);
    expect(actual).toEqual(expected);
  });
});

describe("getRemainder", () => {
  it("should get the remainder of two numbers ", () => {
    const expected = 1;
    const actual = helpers.getRemainder(10, 3);
    expect(actual).toEqual(expected);
  });
});

describe("isEven", () => {
  it("should check to see if the number is even ", () => {
    const expected = true;
    const actual = helpers.isEven(2);
    expect(actual).toEqual(expected);
  });
});

describe("isOdd", () => {
  it("should check to see if the number is odd ", () => {
    const expected = true;
    const actual = helpers.isOdd(1);
    expect(actual).toEqual(expected);
  });
});

describe("square", () => {
  it("should return the number multiplied by itself ", () => {
    const expected = 16;
    const actual = helpers.square(4);
    expect(actual).toEqual(expected);
  });
});

describe("cube", () => {
  it("should return the number multiplied by itself three times ", () => {
    const expected = 64;
    const actual = helpers.cube(4);
    expect(actual).toEqual(expected);
  });
});

describe("raiseToPower", () => {
  it("should return the number raised to the passed in exponent ", () => {
    const expected = 8;
    const actual = helpers.raiseToPower(2, 3);
    expect(actual).toEqual(expected);
  });
});

describe("roundNumber", () => {
  it("should round to the nearest number ", () => {
    const expected = 8;
    const actual = helpers.roundNumber(7.9);
    expect(actual).toEqual(expected);
  });
});

describe("roundUp", () => {
  it("should round up the number ", () => {
    const expected = 8;
    const actual = helpers.roundUp(7.1);
    expect(actual).toEqual(expected);
  });
});

describe("addExclamationPoint", () => {
  it("should add an exclamation point to the end of the string ", () => {
    const expected = "huge!";
    const actual = helpers.addExclamationPoint("huge");
    expect(actual).toEqual(expected);
  });
});

describe("combineNames", () => {
  it("should combine the first and last name ", () => {
    const expected = "Adam Hinckley";
    const actual = helpers.combineNames("Adam", "Hinckley");
    expect(actual).toEqual(expected);
  });
});

describe("getGreeting", () => {
  it("should return 'hello' wtih the name plus an exclamation point ", () => {
    const expected = "Hello Adam!";
    const actual = helpers.getGreeting("Adam");
    expect(actual).toEqual(expected);
  });
});

describe("getRectangleArea", () => {
  it("should return the area of a rectangle ", () => {
    const expected = 24;
    const actual = helpers.getRectangleArea(6, 4);
    expect(actual).toEqual(expected);
  });
});

describe("getTriangleArea", () => {
  it("should return the area of a triangle ", () => {
    const expected = 12;
    const actual = helpers.getTriangleArea(6, 4);
    expect(actual).toEqual(expected);
  });
});

describe("getCircleArea", () => {
  it("should return the area of a circle ", () => {
    const expected = 12.566370614359172;
    const actual = helpers.getCircleArea(2, 2);
    expect(actual).toEqual(expected);
  });
});

describe("getRectangularPrismVolume", () => {
  it("should return the area of a circle ", () => {
    const expected = 12;
    const actual = helpers.getRectangularPrismVolume(2, 2, 3);
    expect(actual).toEqual(expected);
  });
});
