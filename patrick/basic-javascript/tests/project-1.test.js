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
    it('returns a value of `17`', () => {
      const subFive = funcs.subtractFive;
      assert.equal(subFive(22), 17);
    });
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
    it('returns a number', () => {
      const add = funcs.add;
      assert.typeOf(add(1, 2), 'number');
    });
    it('returns a value of `3`', () => {
      const add = funcs.add;
      assert.equal(add(1, 2), 3);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('returns a number', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(5, 3), 'number');
    });
    it('returns a value of `2`', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(5, 3), 2);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('returns a number', () => {
      const divide = funcs.divide;
      assert.typeOf(divide(10, 2), 'number');
    });
    it('returns a value of `5`', () => {
      const divide = funcs.divide;
      assert.equal(divide(10, 2), 5);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('returns a number', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply(3, 2), 'number');
    });
    it('returns a value of `6`', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(3, 2), 6);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('returns a number', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder(10, 2), 'number');
    });
    it('returns a value of `0`', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(10, 2), 0);
    });
    it('returns a value of `1`', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(11, 2), 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('returns a Boolean', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(1), 'boolean');
    });
    it('returns a value of `false`', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(3), false);
    });
    it('returns a value of `true`', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(2), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('returns a Boolean', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(1), 'boolean');
    });
    it('returns a value of `false`', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(2), false);
    });
    it('returns a value of `true`', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(3), true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('returns a number', () => {
      const square = funcs.square;
      assert.typeOf(square(3), 'number');
    });
    it('returns a value of `9`', () => {
      const square = funcs.square;
      assert.equal(square(3), 9);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('returns a number', () => {
      const cube = funcs.cube;
      assert.typeOf(cube(4), 'number');
    });
    it('returns a value of `64`', () => {
      const cube = funcs.cube;
      assert.equal(cube(4), 64);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('returns a number', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower(2, 3), 'number');
    });
    it('returns a value of `8`', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2, 3), 8);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('returns a number', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber(3.1), 'number');
    });
    it('returns a value of 3', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(3.4), 3);
    });
    it('returns a value of 4', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(3.5), 4);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('returns a number', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp(3.1), 'number');
    });
    it('returns a value of 4', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(3.1), 4);
    });
    it('returns a value of 3', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(3.0), 3);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('returns a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint('string'), 'string');
    });
    it('returns a value of `It\'s a string!`', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('It\'s a string'), 'It\'s a string!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
    it('returns a string', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames('bob', 'smith'), 'string')
    });
    it('returns a value of `Ryan Hamblin`', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Ryan', 'Hamblin'), 'Ryan Hamblin')
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
    it('returns a string', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting('Frank'), 'string')
    });
    it('returns a value of `Hello Frank!`', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Frank'), 'Hello Frank!')
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
    it('returns a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea(10, 20), 'number')
    });
    it('returns a value of `200`', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(10, 20), 200)
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
    it('returns a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea(4, 5), 'number')
    });
    it('returns a value of `10`', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(4, 5), 10)
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
    it('returns a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea(10), 'number')
    });
    it('returns a value of `314.1592653589793`', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(10), 314.1592653589793)
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
    it('returns a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume(3, 4, 5), 'number')
    });
    it('returns a value of `60`', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(3, 4, 5), 60)
    });
  });

});
