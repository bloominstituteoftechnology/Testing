/* eslint-disable prefer-destructuring */

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
    it('should return a number', () => {
      assert.typeOf(multiplyByTen(2), 'number');
    });
    it('should return the number multiplied by 10', () => {
      assert.strictEqual(multiplyByTen(2), 20);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(subtractFive(10), 'number');
    });
    it('should return the number after subtracting five', () => {
      assert.strictEqual(subtractFive(10), 5);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should be true or false', () => {
      assert.typeOf(areSameLength('test', 'okay'), 'boolean');
    });
    it('should return the expected boolean', () => {
      assert.strictEqual(areSameLength('test', 'okay'), true);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should be a boolean', () => {
      assert.typeOf(areEqual(10, 10), 'boolean');
    });
    it('should return expected outcome', () => {
      assert.strictEqual(areEqual(10, 10), true);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be a boolean', () => {
      assert.typeOf(lessThanNinety(50), 'boolean');
    });
    it('should return expected value', () => {
      assert.strictEqual(lessThanNinety(100), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be a boolean', () => {
      assert.typeOf(greaterThanFifty(1), 'boolean');
    });
    it('should return expected value', () => {
      assert.strictEqual(greaterThanFifty(100), true);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should be a number', () => {
      assert.typeOf(add(5, 3), 'number');
    });
    it('should return expected value', () => {
      assert.strictEqual(add(10, 20), 30);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should be a number', () => {
      assert.typeOf(subtract(10, 5), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(subtract(20, 15), 5);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(divide(10, 2), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(divide(20, 2), 10);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(multiply(5, 3), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(multiply(2, 3), 6);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRemainder(10, 3), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(getRemainder(10, 3), 1);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isEven(23), 'boolean');
    });
    it('should return the expected value', () => {
      assert.strictEqual(isEven(99), false);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isOdd(23), 'boolean');
    });
    it('should return the expected value', () => {
      assert.strictEqual(isOdd(73), true);
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(square(2, 2), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(square(3, 3), 9);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(cube(3, 3, 3), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(cube(2, 2, 2), 8);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(raiseToPower(2, 3), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(raiseToPower(2, 3), 8);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(roundNumber(5.6), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(roundNumber(5.6), 6);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(roundUp(6.2), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(roundUp(6.2), 7);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should be a string', () => {
      assert.typeOf(addExclamationPoint('test'), 'string');
    });
    it('should return the expected value', () => {
      assert.strictEqual(addExclamationPoint('test'), 'test!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should be a string', () => {
      assert.typeOf(combineNames('michael', 'test'), 'string');
    });
    it('should return the expected value', () => {
      assert.strictEqual(combineNames('michael', 'work'), 'michael work');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should be a string', () => {
      assert.typeOf(getGreeting('Mike'), 'string');
    });
    it('should return the expected value', () => {
      assert.strictEqual(getGreeting('Mike'), 'Hello Mike!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRectangleArea(5, 10), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(getRectangleArea(5, 10), 50);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getTriangleArea(10, 5), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(getTriangleArea(10, 5), 25);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getCircleArea(10), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(getCircleArea(10), Math.PI * 10 * 10);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRectangularPrismVolume(10, 10, 10), 'number');
    });
    it('should return the expected value', () => {
      assert.strictEqual(getRectangularPrismVolume(10, 10, 10), 1000);
    });
  });
});
