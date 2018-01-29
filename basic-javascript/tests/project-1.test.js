const assert = require("chai").assert;
const funcs = require("../src/project-1");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe("Project-1 Functions", () => {
  describe("`multiplyByTen`", () => {
    const multiplyByTen = funcs.multiplyByTen;
    it("should be a function", () => {
      assert.typeOf(multiplyByTen, "function");
    });
    // begin here
    it("should be a multiple of 10", () => {
      assert.equal(multiplyByTen(10), 100);
    });
    it("should be a number", () => {
      assert.typeOf(multiplyByTen(10), "number");
    });
  });

  describe("`subtractFive`", () => {
    const subtractFive = funcs.subtractFive;
    it("should be a function", () => {
      assert.typeOf(subtractFive, "function");
    });
    it("should subtract 5", () => {
      assert.equal(subtractFive(10), 5);
    });
    it("should be a number", () => {
      assert.typeOf(subtractFive(10), "number");
    });
  });

  describe("`areSameLength`", () => {
    const areSameLength = funcs.areSameLength;
    it("should be a function", () => {
      assert.typeOf(areSameLength, "function");
    });
    it("should be the same length", () => {
      assert.equal(areSameLength("yasin", "apple"), true);
    });
    it("should not be the same length", () => {
      assert.equal(areSameLength("yasin", "michael"), false);
    });
    it("should be a type of boolean", () => {
      assert.typeOf(areSameLength("yasin", "apple"), "boolean");
    });
  });

  describe("`areEqual`", () => {
    const areEqual = funcs.areEqual;
    it("should be a function", () => {
      assert.typeOf(areEqual, "function");
    });
    it("should be equal", () => {
      assert.equal(areEqual(1, 1), true);
    });
    it("should not be equal", () => {
      assert.equal(areEqual(1, 2), false);
    });
    it("should not be equal", () => {
      assert.equal(areEqual(1, "1"), false);
    });
    it("should be a type of boolean", () => {
      assert.typeOf(areEqual(1, "apple"), "boolean");
    });
  });

  describe("`lessThanNinety`", () => {
    const lessThanNinety = funcs.lessThanNinety;
    it("should be a function", () => {
      assert.typeOf(lessThanNinety, "function");
    });
    it("should return true for being less than 90", () => {
      assert.equal(lessThanNinety(80), true);
    });
    it("should return false for being more than 90", () => {
      assert.equal(lessThanNinety(100), false);
    });
    it("should be a type of boolean", () => {
      assert.typeOf(lessThanNinety(50), "boolean");
    });
  });

  describe("`greaterThanFifty`", () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it("should be a function", () => {
      assert.typeOf(greaterThanFifty, "function");
    });
    it("should return true for being greater than 50", () => {
      assert.equal(greaterThanFifty(80), true);
    });
    it("should return false for being less than 50", () => {
      assert.equal(greaterThanFifty(40), false);
    });
    it("should be a type of boolean", () => {
      assert.typeOf(greaterThanFifty(50), "boolean");
    });
  });

  describe("`add`", () => {
    const add = funcs.add;
    it("should be a function", () => {
      assert.typeOf(add, "function");
    });
    it("should return the sum", () => {
      assert.equal(add(1, 1), 2);
    });
    it("should be a type of number", () => {
      assert.typeOf(add(1, 1), "number");
    });
  });

  describe("`subtract`", () => {
    const subtract = funcs.subtract;
    it("should be a function", () => {
      assert.typeOf(subtract, "function");
    });
    it("should return the difference", () => {
      assert.equal(subtract(3, 1), 2);
    });
    it("should be a type of number", () => {
      assert.typeOf(subtract(3, 1), "number");
    });
  });

  describe("`divide`", () => {
    const divide = funcs.divide;
    it("should be a function", () => {
      assert.typeOf(divide, "function");
    });
    it("should return the quotient", () => {
      assert.equal(divide(9, 3), 3);
    });
    it("should be a type of number", () => {
      assert.typeOf(divide(12, 3), "number");
    });
  });

  describe("`multiply`", () => {
    const multiply = funcs.multiply;
    it("should be a function", () => {
      assert.typeOf(multiply, "function");
    });
    it("should return the factor", () => {
      assert.equal(multiply(9, 3), 27);
    });
    it("should be a type of number", () => {
      assert.typeOf(multiply(12, 3), "number");
    });
  });

  describe("`getRemainder`", () => {
    const getRemainder = funcs.getRemainder;
    it("should be a function", () => {
      assert.typeOf(getRemainder, "function");
    });
    it("should return a remainder", () => {
      assert.equal(getRemainder(12, 5), 2);
    });
    it("should be a type of number", () => {
      assert.typeOf(getRemainder(16, 3), "number");
    });
  });

  describe("`isEven`", () => {
    const isEven = funcs.isEven;
    it("should be a function", () => {
      assert.typeOf(isEven, "function");
    });
    it("should return true if even", () => {
      assert.equal(isEven(20), true);
    });
    it("should return false if odd", () => {
      assert.equal(isEven(21), false);
    });
    it("should be a type of number", () => {
      assert.typeOf(isEven(30), "boolean");
    });
  });

  describe("`isOdd`", () => {
    const isOdd = funcs.isOdd;
    it("should be a function", () => {
      assert.typeOf(isOdd, "function");
    });
    it("should return true if odd", () => {
      assert.equal(isOdd(21), true);
    });
    it("should return false if even", () => {
      assert.equal(isOdd(20), false);
    });
    it("should be a type of number", () => {
      assert.typeOf(isOdd(30), "boolean");
    });
  });

  describe("`square`", () => {
    const square = funcs.square;
    it("should be a function", () => {
      assert.typeOf(square, "function");
    });
    it("should multiply a number by itself", () => {
      assert.equal(square(2), Math.pow(2, 2));
    });
    it("should be a type of number", () => {
      assert.typeOf(square(30), "number");
    });
  });

  describe("`cube`", () => {
    const cube = funcs.cube;
    it("should be a function", () => {
      assert.typeOf(cube, "function");
    });
    it("should cube a number", () => {
      assert.equal(cube(2), Math.pow(2, 3));
    });
    it("should be a type of number", () => {
      assert.typeOf(cube(30), "number");
    });
  });

  describe("`raiseToPower`", () => {
    const raiseToPower = funcs.raiseToPower;
    it("should be a function", () => {
      assert.typeOf(raiseToPower, "function");
    });
    it("should raise a number to a power", () => {
      assert.equal(raiseToPower(2, 3), Math.pow(2, 3));
    });
    it("should be a type of number", () => {
      assert.typeOf(raiseToPower(30, 2), "number");
    });
  });

  describe("`roundNumber`", () => {
    const roundNumber = funcs.roundNumber;
    it("should be a function", () => {
      assert.typeOf(roundNumber, "function");
    });
    it("should round a number", () => {
      assert.equal(roundNumber(2.5), Math.round(2.5));
    });
    it("should be a type of number", () => {
      assert.typeOf(roundNumber(30.8), "number");
    });
  });

  describe("`roundUp`", () => {
    const roundUp = funcs.roundUp;
    it("should be a function", () => {
      assert.typeOf(roundUp, "function");
    });
    it("should round a number up", () => {
      assert.equal(roundUp(2.8), Math.ceil(3));
    });
    it("should be a type of number", () => {
      assert.typeOf(roundUp(30), "number");
    });
  });

  describe("`addExclamationPoint`", () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it("should be a function", () => {
      assert.typeOf(addExclamationPoint, "function");
    });
    it("should concat and exclamation point to the end of the string", () => {
      assert.equal(addExclamationPoint("hey michael"), "hey michael!");
    });
    it("should be a type of string", () => {
      assert.typeOf(addExclamationPoint("hey"), "string");
    });
  });

  describe("`combineNames`", () => {
    const combineNames = funcs.combineNames;
    it("should be a function", () => {
      assert.typeOf(combineNames, "function");
    });
    it("should combine names", () => {
      assert.equal(combineNames("michael", "dennis"), "michael dennis");
    });
    it("should be a type of string", () => {
      assert.typeOf(combineNames("michael", "dennis"), "string");
    });
  });

  describe("`getGreeting`", () => {
    const getGreeting = funcs.getGreeting;
    it("should be a function", () => {
      assert.typeOf(getGreeting, "function");
    });
    it("should be a fucntion", () => {
      assert.isFunction(getGreeting);
    });
    it("should return a string greeting name given", () => {
      assert.equal(getGreeting("michael"), "Hello michael!");
    });
    it("should be a type of string", () => {
      assert.typeOf(getGreeting("michael"), "string");
    });
  });

  describe("`getRectangleArea`", () => {
    const getRectangleArea = funcs.getRectangleArea;
    it("should be a function", () => {
      assert.typeOf(getRectangleArea, "function");
    });
    it("should return the area of a rectangle by multiplying length x width", () => {
      assert.equal(getRectangleArea(5, 9), 45);
    });
    it("should be a type of number", () => {
      assert.typeOf(getRectangleArea(3, 8), "number");
    });
  });

  describe("`getTriangleArea`", () => {
    const getTriangleArea = funcs.getTriangleArea;
    it("should be a function", () => {
      assert.typeOf(getTriangleArea, "function");
    });
    it("should return the area of a triangle by multiplying 0.5 base x height", () => {
      assert.equal(getTriangleArea(5, 10), 25);
    });
    it("should be a type of number", () => {
      assert.typeOf(getTriangleArea(5, 10), "number");
    });
  });

  describe("`getCircleArea`", () => {
    const getCircleArea = funcs.getCircleArea;
    it("should be a function", () => {
      assert.typeOf(getCircleArea, "function");
    });
    it("should return the area of a circle by squaring the radius and multiplying by PI", () => {
      assert.equal(getCircleArea(5), Math.PI * 5 * 5);
    });
    it("should be a type of number", () => {
      assert.typeOf(getCircleArea(5), "number");
    });
  });

  describe("`getRectangularPrismVolume`", () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it("should be a function", () => {
      assert.typeOf(getRectangularPrismVolume, "function");
    });
    it("should return the rectangular prism volume by multiplying 3 numbers together (lxwxh)", () => {
      assert.equal(getRectangularPrismVolume(3, 5, 4), 60);
    });
    it("should be a type of number", () => {
      assert.typeOf(getRectangularPrismVolume(5, 10, 6), "number");
    });
  });
});
