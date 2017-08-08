const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you, - OKAY √
// except, for some reason, none of our current assertions are working. - OKAY √
// first step is to make sure all these assertions work. - DONE √
// then make sure you have at least 2-3 more assertions for every function. - OKAY √
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {

  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    // see if the expected return output is of a specified type
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen(5), 'number');
    });
    // see if the expected return output is the correct outcome.
    it('should return the value `50`', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(5), 50);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('returns a number', () => {
      const subFive = funcs.subtractFive;
      assert.typeOf(subFive(22), 'number');
    });
    it('returns a value of `17`');
    const subFive = funcs.subtractFive;
    assert.equal(subFive(22), 17);

  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('returns a Boolean', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength('abc', 'def'), 'boolean');
    });
    it('returns a value of `false`', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('abc', 'defg'), false);
    });
    it('returns a value of `true`', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('abc', 'def'), true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('returns a Boolean', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual(1, 1), 'boolean');
    });
    it('returns a value of `false`', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(true, false), false);
    });
    it('returns a value of `true`', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(true, true), true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('returns a Boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety(1), 'boolean');
    });
    it('returns a value of `false`', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(100), false);
    });
    it('returns a value of `true`', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(10), true);
    });

  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('returns a Boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty(1), 'boolean');
    });
    it('returns a value of `false`', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(1), false);
    });
    it('returns a value of `true`', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(100), true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('returns a Boolean');
    it('returns a value of XXX');
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('returns a Boolean');
    it('returns a value of XXX');
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function')
    });
    it('returns a string');
    it('returns a value of XXX');
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
    it('returns a string');
    it('returns a value of XXX');
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
    it('returns a string');
    it('returns a value of XXX');
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
    it('returns a number');
    it('returns a value of XXX');
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
    it('returns a number');
    it('returns a value of XXX');
  });

});
