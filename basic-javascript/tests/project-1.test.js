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
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it ('should properly multiply by ten', () => {
      assert(funcs.multiplyByTen(5), 50);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it ('should properly subtract five', () => {
      assert(funcs.subtractFive(10), 5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it ('should return true if both strings are the same length', () => {
      assert(funcs.areSameLength('hello', 'world'), true);
    });
    it ('should return false if strings have different lengths', () => {
      assert.strictEqual(funcs.areSameLength('hello', 'goodbye'), false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it ('should return true if both numbers are the same', () => {
      assert(funcs.areEqual(2, 2), true);
    });
    it ('should return false if the numbers are different', () => {
      assert.strictEqual(funcs.areEqual(1, 2), false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it ('should return true if the number is less than ninety', () => {
      assert(funcs.lessThanNinety(Math.floor(Math.random() * 90)), true);
    });
    it ('should return false if the number is greater than ninety', () => {
      assert.strictEqual(funcs.lessThanNinety(Math.floor(Math.random() * (150 - 100)) + 100), false);
    });
    it ('should return true if the number is negative', () => {
      assert(funcs.lessThanNinety(-1), true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it ('should return true if the number is greater than fifty', () => {
      assert(funcs.greaterThanFifty(Math.floor(Math.random() * (100 - 51)) + 51), true);
    });
    it ('should return false if the number is less than fifty', () => {
      assert.strictEqual(funcs.greaterThanFifty(Math.floor(Math.random() * 50)), false);
    });
    it ('should return false if the number is negative', () => {
      assert.strictEqual(funcs.greaterThanFifty(-1), false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it ('should properly add two numbers', () => {
      assert(funcs.add(2, 3), 5);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it ('should properly subtract two numbers', () => {
      assert(funcs.subtract(3, 2), 1);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it ('should properly divide two numbers', () => {
      assert(funcs.divide(10, 5), 2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it ('should properly multiply two numbers', () => {
      assert(funcs.multiply(2, 6), 12);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it ('should return the remainder after two numbers are divided', () => {
      assert(funcs.getRemainder(10, 3), 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it ('should return true if number is even', () => {
      assert(funcs.isEven(92834129384), true);
    });
    it ('should return false if the number is odd', () => {
      assert.strictEqual(funcs.isEven(9128492341), false);
    })
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it ('should return true if number is odd', () => {
      assert(funcs.isOdd(92834129383), true);
    });
    it ('should return false if the number is even', () => {
      assert.strictEqual(funcs.isOdd(912849234), false);
    })
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it ('should return the square of the number', () => {
      assert(funcs.square(4), 16);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});
