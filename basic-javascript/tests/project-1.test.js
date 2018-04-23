/* eslint-disable prefer-destructuring */

const assert = require("chai").assert;
const funcs = require("../src/project-1");
const chai = require("chai");
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe("Project-1 Functions", () => {
  describe("`multiplyByTen`", () => {
    it("should be a function", () => {
      // see funcs defined above -- makes all functions from project-1 accessible
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, "function");
    });
    // begin here
    it("should return the input after multiplying by ten", () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(5)).to.equal(50);
      expect(multiplyByTen(1)).to.equal(10);
      expect(multiplyByTen(0)).to.equal(0);
    });
  });

  describe("`subtractFive`", () => {
    it("should be a function", () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, "function");
    });
    it("should return input minus five", () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(5)).to.equal(0);
      expect(subtractFive(100)).to.equal(95);
      expect(subtractFive(0)).to.equal(-5);
    });
  });

  describe("`areSameLength`", () => {
    it("should be a function", () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, "function");
    });
    it("should return true if strings are of equal length, else false", () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength("Willy", "Billy")).to.equal(true);
      expect(areSameLength("Willy", "Wilmathason")).to.equal(false);
      expect(areSameLength("Sally", "Dilly")).to.equal(true);
    });
  });

  describe("`areEqual`", () => {
    it("should be a function", () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, "function");
    });
    it("should return true if inputs are equal, else false", () => {
      const areEqual = funcs.areEqual;
      expect(areEqual(5, 5)).to.equal(true);
      expect(areEqual(5, 6)).to.equal(false);
      expect(areEqual(0, 0)).to.equal(true);
    });
  });

  describe("`lessThanNinety`", () => {
    it("should be a function", () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, "function");
    });
    it("should return true if less than ninety, else false", () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(90)).to.equal(false);
      expect(lessThanNinety(91)).to.equal(false);
      expect(lessThanNinety(89)).to.equal(true);
    });
  });

  describe("`greaterThanFifty`", () => {
    it("should be a function", () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, "function");
    });
    it("should return true of greater than 50, else false", () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(51)).to.equal(true);
      expect(greaterThanFifty(49)).to.equal(false);
      expect(greaterThanFifty(50)).to.equal(false);
    });
  });

  describe("`add`", () => {
    it("should be a function", () => {
      const add = funcs.add;
      assert.typeOf(add, "function");
    });
    it("should return sum of x and y", () => {
      const add = funcs.add;
      expect(add(4, 4)).to.equal(8);
      expect(add(4, 5)).to.equal(9);
      expect(add(0, 10)).to.equal(10);
    });
  });

  describe("`subtract`", () => {
    it("should be a function", () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, "function");
    });
    it("should return the difference of x and y", () => {
      const subtract = funcs.subtract;
      expect(subtract(4, 3)).to.equal(1);
      expect(subtract(3, 4)).to.equal(-1);
      expect(subtract(4, 1)).to.equal(3);
    });
  });

  describe("`divide`", () => {
    it("should be a function", () => {
      const divide = funcs.divide;
      assert.typeOf(divide, "function");
    });
    it("should return the quotient of x over y", () => {
      const divide = funcs.divide;
      expect(divide(6, 3)).to.equal(2);
      expect(divide(90, 10)).to.equal(9);
      expect(divide(20, 4)).to.equal(5);
    });
  });

  describe("`multiply`", () => {
    it("should be a function", () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, "function");
    });
    it('should return the product of x and y', () => {
      const multiply = funcs.multiply;
      expect(multiply(3,4)).to.equal(12);
      expect(multiply(12,5)).to.equal(60);
      expect(multiply(12,10)).to.equal(120);
    })
  });

  describe("`getRemainder`", () => {
    it("should be a function", () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, "function");
    });
  });

  describe("`isEven`", () => {
    it("should be a function", () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, "function");
    });
  });

  describe("`isOdd`", () => {
    it("should be a function", () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, "function");
    });
  });

  describe("`square`", () => {
    it("should be a function", () => {
      const square = funcs.square;
      assert.typeOf(square, "function");
    });
  });

  describe("`cube`", () => {
    it("should be a function", () => {
      const cube = funcs.cube;
      assert.typeOf(cube, "function");
    });
  });

  describe("`raiseToPower`", () => {
    it("should be a function", () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, "function");
    });
  });

  describe("`roundNumber`", () => {
    it("should be a function", () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, "function");
    });
  });

  describe("`roundUp`", () => {
    it("should be a function", () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, "function");
    });
  });

  describe("`addExclamationPoint`", () => {
    it("should be a function", () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, "function");
    });
  });

  describe("`combineNames`", () => {
    it("should be a function", () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, "function");
    });
  });

  describe("`getGreeting`", () => {
    it("should be a function", () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, "function");
    });
  });

  describe("`getRectangleArea`", () => {
    it("should be a function", () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, "function");
    });
  });

  describe("`getTriangleArea`", () => {
    it("should be a function", () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, "function");
    });
  });

  describe("`getCircleArea`", () => {
    it("should be a function", () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, "function");
    });
  });

  describe("`getRectangularPrismVolume`", () => {
    it("should be a function", () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, "function");
    });
  });
});
