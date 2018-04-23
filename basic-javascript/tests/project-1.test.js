/* eslint-disable prefer-destructuring */

const expect = require('chai').expect;
const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    const multiplyByTen = funcs.multiplyByTen;
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('expected 5 to equal 50', () => {
      assert.equal(multiplyByTen(5), 50);
    });
    it('should return a number', () => {
      assert.typeOf(multiplyByTen(1), 'number');
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(subtractFive(1), 'number');
    });
    it('expected 20 to equal 15', () => {
      assert.equal(subtractFive(20), 15);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a number', () => {
      expect(1).to.be.a('number');
    });
    it('should return true if the arguments have the same length', () => {
      expect(5).to.equal(5);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      expect(areEqual()).to.be.a('boolean');
    });
    it('should return true if arguments are equal', () => {
      assert.equal(3, 3);
      assert.notEqual(10, 20);
      assert.equal('apple', 'apple');
      assert.notEqual('apple', 'orange');
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;

    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(lessThanNinety(), 'boolean');
    });
    it('should return true if the argument is less than ninety', () => {
      expect(3).to.equal(3);
      expect(3).to.not.equal(4);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(greaterThanFifty(), 'boolean');
    });
    it('should return true if the argument is greater than fifty', () => {
      assert.isAbove(5, 2);
      assert.isBelow(3, 6);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(add(), 'number');
    });
    it('should return the sum of two arguments', () => {
      assert.equal(add(5, 5), 10);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;

    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(subtract(), 'number');
    });
    it('should return the difference of the two arguments', () => {
      assert.equal(subtract(3, 2), 1);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;

    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(divide(), 'number');
    });
    it('should return the quotient of the two arguments', () => {
      assert.equal(divide(6, 3), 2);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(multiply(), 'number');
    });
    it('should return the product of the two arguments', () => {
      assert.equal(multiply(5, 5), 25);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRemainder(), 'number');
    });
    it('should return the remainder of the two arguments', () => {
      assert.equal(getRemainder(11, 2), 1);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isEven(), 'boolean');
    });
    it('should return the bool true if the argument is even, otherwise false', () => {
      assert.equal(isEven(2), true);
      assert.equal(isEven(5), false);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isOdd(), 'boolean');
    });
    it('should return the bool true if the argument is odd, otherwise false', () => {
      assert.equal(isOdd(3), true);
      assert.equal(isOdd(4), false);
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(square(), 'number');
    });
    it('should return the argument after squaring it', () => {
      assert.equal(square(3), 9);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(cube(), 'number');
    });
    it('should return the argument after cubing it', () => {
      assert.equal(cube(3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(raiseToPower(), 'number');
    });
    it("should return the argument after raising it to the exponent's power", () => {
      assert.equal(raiseToPower(2, 3), 8);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(roundNumber(), 'number');
    });
    it('should return the argument after rounding it', () => {
      assert.equal(roundNumber(3.5), 4);
      assert.equal(roundNumber(3.4), 3);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(roundUp(), 'number');
    });
    it('should return the argument after rounding it up', () => {
      assert.equal(roundUp(9.8), 10);
      assert.equal(roundUp(9.3), 10);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(addExclamationPoint(), 'string');
    });
    it('should add an exclamation point to the end of the string', () => {
      assert.equal(addExclamationPoint('hello world'), 'hello world!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should be a string', () => {
      assert.typeOf(combineNames(), 'string');
    });
    it('should return the two string combined into one with a space between them', () => {
      assert.equal(combineNames('Hello', 'World'), 'Hello World');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(getGreeting(), 'string');
    });
    it("should return the string 'Hello {name}!'", () => {
      assert.equal(getGreeting('Jeremy'), 'Hello Jeremy!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRectangleArea(), 'number');
    });
    it('should return the correct area', () => {
      assert.equal(getRectangleArea(2, 2), 4);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getTriangleArea(), 'number');
    });
    it('should return a number', () => {
      assert.equal(getTriangleArea(2, 2), 2);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getCircleArea(), 'number');
    });
    it('should return the correct area', () => {
      assert.equal(getCircleArea(2, 2), 12.566370614359172);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRectangularPrismVolume(), 'number');
    });
    it('should return the correct volume', () => {
      assert.equal(getRectangularPrismVolume(2, 2, 2), 8);
    });
  });
});
