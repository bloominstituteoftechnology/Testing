const helpers = require("./project-1");

// start testing!

describe("Jest", () => {
  test("Jest runs", () => {});
});

describe("multiplyByTen", () => {
  it("should multiply an integer by 10", () => {
    const expected = 100;
    const actual = helpers.multiplyByTen(10);
    expect(actual).toEqual(expected);
  });
});

describe("subtractFive", () => {
  it("should subtract five from an integer", () => {
    const expected = 5;
    const actual = helpers.subtractFive(10);
    const expected2 = -3;
    const actual2 = helpers.subtractFive(2);
    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected2);
  });
});

describe("areSameLength", () => {
  it("should determine whether two strings are the same length", () => {
    const expected = true;
    const actual = helpers.areSameLength("cat", "hat");
    expect(actual).toEqual(expected);
  });
});

describe("areEqual", () => {
  it("should determine equality of two given integers", () => {
    const expected = true;
    const actual = helpers.areEqual(50, 50);
    const expected2 = false;
    const actual2 = helpers.areEqual(258, 452);
    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected2);
  });
});

describe("lessThanNinety", () => {
  it("should determine whether an integer is less than 90", () => {
    const expected = true;
    const actual = helpers.lessThanNinety(29);
    const expected2 = false;
    const actual2 = helpers.lessThanNinety(99);
    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected2);
  });
});

describe("greaterThanFifty", () => {
  it("should check to see if the number is greater than fifty", () => {
    const expected = true;
    const actual = helpers.greaterThanFifty(51);
    const expected2 = false;
    const actual2 = helpers.greaterThanFifty(12);
    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected2);
  });
});

describe("add", () => {
  it("add two integers", () => {
    const expected = 24;
    const actual = helpers.add(20, 4);
    expect(actual).toEqual(expected);
  });
});

describe("subtract", () => {
  it("should subtract the second parameter from the first", () => {
    const expected = 5;
    const actual = helpers.subtract(8, 3);
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
  it("should multiply two numbers", () => {
    const expected = 20;
    const actual = helpers.multiply(4, 5);
    expect(actual).toEqual(expected);
  });
});

describe("getRemainder", () => {
  it("should return the remainder of the first parameter divided by the second", () => {
    const expected = 3;
    const actual = helpers.getRemainder(15, 4);
    expect(actual).toEqual(expected);
  });
});

describe("isEven", () => {
  it("should check to see if the number is even ", () => {
    const expected = true;
    const actual = helpers.isEven(2);
    const expected2 = false;
    const actual2 = helpers.isEven(3);
    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected2);
  });
});

describe("isOdd", () => {
  it("should check to see if the number is odd ", () => {
    const expected = true;
    const actual = helpers.isOdd(1);
    const expected2 = false;
    const actual2 = helpers.isOdd(20);
    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected2);
  });
});

describe("square", () => {
  it("should return the number squared", () => {
    const expected = 25;
    const actual = helpers.square(5);
    expect(actual).toEqual(expected);
  });
});

describe("cube", () => {
  it("should return the number cubed", () => {
    const expected = 125;
    const actual = helpers.cube(5);
    expect(actual).toEqual(expected);
  });
});

describe("raiseToPower", () => {
  it("should return the first parameter raised to the power of the second parameter", () => {
    const expected = 81;
    const actual = helpers.raiseToPower(9, 2);
    expect(actual).toEqual(expected);
  });
});

describe("roundNumber", () => {
  it("should round the number to the nearest integer", () => {
    const expected = 12;
    const actual = helpers.roundNumber(11.8);
    expect(actual).toEqual(expected);
  });
});

describe("roundUp", () => {
  it("should round the number up to the nearest integer", () => {
    const expected = 7;
    const actual = helpers.roundUp(6.5);
    expect(actual).toEqual(expected);
  });
});

describe("addExclamationPoint", () => {
  it("should add an exclamation point to the end of the string", () => {
    const expected = "This is a test!";
    const actual = helpers.addExclamationPoint("This is a test");
    expect(actual).toEqual(expected);
  });
});

describe("combineNames", () => {
  it("should combine a first name and last name as given in parameters", () => {
    const expected = "Bob Jones";
    const actual = helpers.combineNames("Bob", "Jones");
    expect(actual).toEqual(expected);
  });
});

describe("getGreeting", () => {
  it("should greet the given name", () => {
    const expected = "Hello Darling!";
    const actual = helpers.getGreeting("Darling");
    expect(actual).toEqual(expected);
  });
});

describe("getRectangleArea", () => {
  it("should return the area of a rectangle ", () => {
    const expected = 30;
    const actual = helpers.getRectangleArea(5, 6);
    expect(actual).toEqual(expected);
  });
});

describe("getTriangleArea", () => {
  it("should return the area of a triangle given the base and height", () => {
    const expected = 5;
    const actual = helpers.getTriangleArea(5, 2);
    expect(actual).toEqual(expected);
  });
});

describe("getCircleArea", () => {
  it("should return the area of a circle given the radius", () => {
    const expected = 12.566370614359172;
    const actual = helpers.getCircleArea(2, 2);
    expect(actual).toEqual(expected);
  });
});

describe("getRectangularPrismVolume", () => {
  it("should return the volume of a rectangular prism given the length, width, and height", () => {
    const expected = 125;
    const actual = helpers.getRectangularPrismVolume(5, 5, 5);
    expect(actual).toEqual(expected);
  });
});
