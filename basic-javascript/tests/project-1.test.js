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
    it('should return a number', () => {
      const result = funcs.multiplyByTen(10);
      assert.typeOf(result, 'number');
    });
    it('should return the parameter * 10', () => {
      const result = funcs.multiplyByTen(10);
      assert.strictEqual(result, 100);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(funcs.subtractFive(10), 'number');
    });
    it('should return the parameter - 5', () => {
      assert.strictEqual(funcs.subtractFive(10), 5);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(areSameLength('foo', 'bar'), 'boolean');
    });
    it('should return true for two strings of the same length', () => {
      assert.isOk(areSameLength('foo', 'bar'));
    });
    it('should return false for two strings of different lengths', () => {
      assert.isNotOk(areSameLength('foo', 'quux'));
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(areEqual(1, 2), 'boolean');
    });
    it('should return true if arguments match', () => {
      assert.isOk(areEqual(1, 1));
    });
    it('should return false if arguments do not match', () => {
      assert.isNotOk(areEqual(1, 2));
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(lessThanNinety(1), 'boolean');
    });
    it('should return true if argument is less than 90', () => {
      assert.isOk(lessThanNinety(1));
    });
    it('should return false if argument is 90 or greater', () => {
      assert.isNotOk(lessThanNinety(90));
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(greaterThanFifty(1), 'boolean');
    });
    it('should return true if arg is greater than 50', () => {
      assert.isOk(greaterThanFifty(51));
    });
    it('should return false if arg is 50 or less', () => {
      assert.isNotOk(greaterThanFifty(50));
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return the sum of the arguments', () => {
      assert.strictEqual(add(2, 2), 4);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return NaN if either argument is not a number', () => {
      assert.isNotOk(subtract('foo', 'bar'));
    });
    it('should return a number if the arguments are both numbers', () => {
      assert.typeOf(subtract(2, 2), 'number');
    });
    it('should return the difference of the arguments', () => {
      assert.strictEqual(subtract(4, 2), 2);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return NaN if either argument is not a number', () => {
      assert.isNotOk(divide('foo', 'bar'));
    });
    it('should return a number if the arguments are both numbers', () => {
      assert.typeOf(divide(2, 2), 'number');
    });
    it('should return the quotient of the arguments', () => {
      assert.strictEqual(divide(4, 2), 2);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return NaN if either argument is not a number', () => {
      assert.isNotOk(multiply('foo', 'bar'));
    });
    it('should return a number if the arguments are both numbers', () => {
      assert.typeOf(multiply(2, 2), 'number');
    });
    it('should return the difference of the arguments', () => {
      assert.strictEqual(multiply(2, 2), 4);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return NaN if either argument is not a number', () => {
      assert.isNotOk(getRemainder('foo', 'bar'));
    });
    it('should return a number if the arguments are both numbers', () => {
      assert.typeOf(getRemainder(2, 2), 'number');
    });
    it('should return the remainder of the quotient of the arguments', () => {
      assert.strictEqual(getRemainder(5, 2), 1);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isEven(2), 'boolean');
    });
    it('should return true an even argumnent', () => {
      assert.isOk(isEven(2));
    });
    it('should return false for an odd argument', () => {
      assert.isNotOk(isEven(3));
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(isOdd(3), 'boolean');
    });
    it('should return true an odd argumnent', () => {
      assert.isOk(isOdd(3));
    });
    it('should return false for an even argument', () => {
      assert.isNotOk(isOdd(2));
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return NaN if either argument is not a number', () => {
      assert.isNotOk(square('foo', 'bar'));
    });
    it('should return a positive value, even if the argument provided is negative', () => {
      assert.isAtLeast(square(2), 0);
    });
    it('should return the argument squared', () => {
      assert.strictEqual(square(3), 9);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return NaN if either argument is not a number', () => {
      assert.isNotOk(cube('foo', 'bar'));
    });
    it('should return a positive result for positive arguments', () => {
      assert.isAtLeast(cube(2), 0);
    });
    it('should return a negative result for negative arguments', () => {
      assert.isAtMost(cube(-3), 0);
    });
    it('should return the argument cubed', () => {
      assert.strictEqual(cube(3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return NaN if either argument is not a number', () => {
      assert.isNotOk(raiseToPower('foo', 'bar'));
    });
    it('should return the first argument raised to the power of the second argument', () => {
      assert.strictEqual(raiseToPower(2, 4), 16);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return NaN if the argument is not a number', () => {
      assert.isNotOk(roundNumber('foo'));
    });
    it('should round down if the arg is closer to the whole integer below itself ', () => {
      assert.strictEqual(roundNumber(2.49), 2);
    });
    it('should round up if the arg is closer to the whole integer above itself ', () => {
      assert.strictEqual(roundNumber(2.5), 3);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return NaN if the argument is not a number', () => {
      assert.isNotOk(roundUp('foo'));
    });
    it('should return arg rounded up to the nearest whole integer value, (disregard trailing decimal places)', () => {
      assert.strictEqual(roundUp(2.49), 3);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(addExclamationPoint('hello'), 'string');
    });
    it('should return the argument (stringified if it was not already) with a ! appended', () => {
      const sample = 'Fus ro dah';
      assert.strictEqual(addExclamationPoint(sample), 'Fus ro dah!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(combineNames('hello', 'world'), 'string');
    });
    it('should return the two args embedded in a string.', () => {
      assert.strictEqual(combineNames('Max', 'Headroom'), 'Max Headroom');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(getGreeting('foo'), 'string');
    });
    it('should return the arg embedded in the Hello message', () => {
      assert.strictEqual(getGreeting('Max'), 'Hello Max!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return NaN if either argument is not a number', () => {
      assert.isNotOk(getRectangleArea('foo'));
    });
    it('should return the product of the args (rectangle area formula)', () => {
      assert.strictEqual(getRectangleArea(2, 2), 4);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return NaN if either argument is not a number', () => {
      assert.isNotOk(getTriangleArea('foo'));
    });
    it('should return half the product of the args (triangle area formula)', () => {
      assert.strictEqual(getTriangleArea(2, 2), 2);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return NaN if the argument is not a number', () => {
      assert.isNotOk(getCircleArea('foo'));
    });
    it('should return the product of argument squared and pi (circle area formula)', () => {
      assert.strictEqual(getCircleArea(2), 2 * 2 * Math.PI);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return NaN if any argument is not a number', () => {
      assert.isNotOk(getRectangularPrismVolume('foo'));
    });
    it('should return the product of the three arguments (rectangular prism volume formula', () => {
      assert.strictEqual(getRectangularPrismVolume(2, 2, 2), 8);
    });
  });
});
