const helpers = require("./project-1");

// start testing!
it("runs the tests", () => {
  expect(true).toBe(true);
});

describe("multiply by ten function", () => {
  it("should multiply a number by ten", () => {
    expect(helpers.multiplyByTen(4)).toEqual(40);
    expect(helpers.multiplyByTen(-4)).toEqual(-40);
  });
  it("should return false when the value is undefined", () => {
    expect(helpers.multiplyByTen(undefined)).toEqual(false);
  });
  //should test for NaN
  //test for stings ans booleans
});

describe("subtractFive function", () => {
  it("should subtract a number by five", () => {
    expect(helpers.subtractFive(10)).toEqual(5);
    expect(helpers.subtractFive(0)).toEqual(-5);
  });
  it("should return false when the value is undefined", () => {
    expect(helpers.subtractFive(undefined)).toEqual(false);
  });
});

describe("areSameLength function", () => {
  it("should return true if the strings are the same length", () => {
    expect(helpers.areSameLength("String 1", "String 2")).toEqual(true);
    expect(helpers.areSameLength("String 111", "String 2")).toEqual(false);
  });
  it("should return null if one of the value length is zero", () => {
    expect(helpers.areSameLength(undefined, "String")).toEqual(null);
  });
});

describe("areSameLength function", () => {
  it("should return true if the strings are the same length", () => {
    expect(helpers.areSameLength("String 1", "String 2")).toEqual(true);
    expect(helpers.areSameLength("String 111", "String 2")).toEqual(false);
  });
  it("should return null if one of the value length is zero", () => {
    expect(helpers.areSameLength(undefined, "String")).toEqual(null);
  });
});
//test for numbers
//test for empty strings
// });

describe("areEqual function", () => {
  it("should return true if the numbers are equal", () => {
    expect(helpers.areEqual(5, 5)).toEqual(true);
    expect(helpers.areEqual(7, 10)).toEqual(false);
  });
  it("should return null if one of the values is undefined", () => {
    expect(helpers.areEqual(undefined, 2)).toEqual(null);
  });
  //test for strings
});

describe("lessThanNinety function", () => {
  it("should return true if less than 90", () => {
    expect(helpers.lessThanNinety(40)).toEqual(true);
    expect(helpers.lessThanNinety(95)).toEqual(false);
  });
  it("should return null if the values undefined", () => {
    expect(helpers.lessThanNinety(undefined)).toEqual(null);
  });
  //test for strings
});

describe("greaterThanFifty function", () => {
  it("should return true if greater than 50", () => {
    expect(helpers.greaterThanFifty(51)).toEqual(true);
    expect(helpers.greaterThanFifty(50)).toEqual(false);
    expect(helpers.greaterThanFifty(25)).toEqual(false);
  });
  it("should return null if number is undefined", () => {
    expect(helpers.greaterThanFifty(undefined)).toEqual(null);
  });
  //test for strings
});

describe("add function", () => {
  it("should add two numbers", () => {
    expect(helpers.add(3, 4)).toEqual(7);
    expect(helpers.add(4, -4)).toEqual(0);
  });
  it("should return false when one of the values is undefined", () => {
    expect(helpers.add(undefined, -4)).toEqual(false);
  });
});

describe("subtract function", () => {
  it("should subtract two numbers", () => {
    expect(helpers.subtract(5, 2)).toEqual(3);
    expect(helpers.subtract(-3, 3)).toEqual(-6);
  });
  it("should return false when one of the values is undefined", () => {
    expect(helpers.subtract(undefined, 4)).toEqual(false);
  });
});

describe("divide function", () => {
  it("should divide two numbers", () => {
    expect(helpers.divide(10, 2)).toEqual(5);
    expect(helpers.divide(-20, 4)).toEqual(-5);
  });
  it("should return false when one of the values is undefined", () => {
    expect(helpers.divide(undefined)).toEqual(false);
  });
});

describe("multiply function", () => {
  it("should multiply two numbers", () => {
    expect(helpers.multiply(5, 4)).toEqual(20);
    expect(helpers.multiply(-5, -5)).toEqual(25);
  });
  it("should return false when one of the values is undefined", () => {
    expect(helpers.multiply(undefined)).toEqual(false);
  });
});

describe("getRemainder function", () => {
  it("get the remainder of two numbers", () => {
    expect(helpers.getRemainder(15, 4)).toEqual(3);
    expect(helpers.getRemainder(2, 1)).toEqual(0);
  });
  it("should return null if one of the values is undefined", () => {
    expect(helpers.getRemainder(undefined, 3)).toEqual(false);
  });
});

describe("isEven function", () => {
  it("check if number is even", () => {
    expect(helpers.isEven(2)).toEqual(true);
    expect(helpers.isEven(3)).toEqual(false);
  });
  it("should return null if the value is undefined", () => {
    expect(helpers.isEven(undefined)).toEqual(null);
  });
});

describe("isOdd function", () => {
  it("check if number is even", () => {
    expect(helpers.isOdd(3)).toEqual(true);
    expect(helpers.isOdd(2)).toEqual(false);
  });
  it("should return null if the value is undefined", () => {
    expect(helpers.isOdd(undefined)).toEqual(null);
  });
});

describe("square function", () => {
  it("should square a number", () => {
    expect(helpers.square(3)).toEqual(9);
    expect(helpers.square(2)).toEqual(4);
  });
  it("should return null if the value is undefined", () => {
    expect(helpers.square(undefined)).toEqual(false);
  });
});

describe("cube function", () => {
  it("should cube a number", () => {
    expect(helpers.cube(3)).toEqual(27);
    expect(helpers.cube(2)).toEqual(8);
  });
  it("should return false if num is undefined", () => {
    expect(helpers.cube(undefined)).toEqual(false);
  });
});

describe("raiseToPower function", () => {
  it("should raise a number to a power", () => {
    expect(helpers.raiseToPower(2, 3)).toEqual(8);
    expect(helpers.raiseToPower(3, 2)).toEqual(9);
  });
  it("should return false if num is undefined", () => {
    expect(helpers.raiseToPower(undefined)).toEqual(false);
  });
});

describe("roundNumber function", () => {
  it("should round a number to the nearest integer", () => {
    expect(helpers.roundNumber(2.8)).toEqual(3);
    expect(helpers.roundNumber(0)).toEqual(0);
  });
  it("should return false if num is undefined", () => {
    expect(helpers.roundNumber(undefined)).toEqual(false);
  });
});

describe("roundUp function", () => {
  it("should round up a number to the nearest integer", () => {
    expect(helpers.roundUp(2.1)).toEqual(3);
    expect(helpers.roundUp(3.5)).toEqual(4);
  });
  it("should return false if num is undefined", () => {
    expect(helpers.roundUp(undefined)).toEqual(false);
  });
});

describe("addExclamationPoint function", () => {
  it("should add an exclaimation point to a string", () => {
    expect(helpers.addExclamationPoint("hello")).toEqual("hello!");
  });
  it("should return null if string is undefined", () => {
    expect(helpers.addExclamationPoint(undefined)).toEqual(null);
  });
});

describe("combineNames function", () => {
  it("should combine two strings", () => {
    expect(helpers.combineNames("tom", "jones")).toEqual("tom jones");
  });
  it("should return null if one of the strings is undefined", () => {
    expect(helpers.combineNames(undefined)).toEqual(null);
  });
});

describe("getGreeting function", () => {
  it("should add an exclaimation point to the end of a string", () => {
    expect(helpers.getGreeting("Tom")).toEqual("Hello Tom!");
  });
  it("should return null if string is undefined", () => {
    expect(helpers.getGreeting(undefined)).toEqual(null);
  });
});

describe("getRectangleArea function", () => {
  it("should get the area of a rectangle", () => {
    expect(helpers.getRectangleArea(2, 3)).toEqual(6);
  });
  it("should return null if one of the values is undefined", () => {
    expect(helpers.getRectangleArea(undefined)).toEqual(null);
  });
});

describe("getTriangleArea function", () => {
  it("shouldget the area of a triangle", () => {
    expect(helpers.getTriangleArea(2, 2)).toEqual(2);
  });
  it("should return null if one of the values is undefined", () => {
    expect(helpers.getTriangleArea(undefined)).toEqual(null);
  });
});

describe("getCircleArea function", () => {
  it("should get the area of a circle", () => {
    expect(helpers.getCircleArea(6)).toEqual(113.09733552923255);
  });
  it("should return null if one of the values is undefined", () => {
    expect(helpers.getCircleArea(undefined)).toEqual(null);
  });
});

describe("getRectangularPrismVolume a number to a power", () => {
  it("should get the volume of a rectangular prism", () => {
    expect(helpers.getRectangularPrismVolume(2, 3, 4)).toEqual(24);
  });
  it("should return null if one of the values is undefined", () => {
    expect(helpers.getRectangularPrismVolume(undefined)).toEqual(null);
  });
});
