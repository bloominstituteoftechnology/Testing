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
    it('should return 100 when passed 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(10), 100);
    });
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen(10), 'number');
    });

  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive(10), 'number');
    });
    it('should return 5 when given 10', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(10), 5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength('a','b'), 'boolean');
    });
    it('should return false if deiffernt lengths', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('a', 'aa'), false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual(1,1), 'boolean');
    });
    it('should return false if different numbers', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(1,2), false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should retuen a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety(50), 'boolean');
    });
    it('should return true if less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(2), true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty(3), 'boolean');
    });
    it('should return false if less than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(3), false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.add;
      assert.typeOf(add(1, 1), 'number');
    });
    it('should be four if 2 and 2', () => {
      const add = funcs.add;
      assert.equal(add(2, 2), 4);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(2, 1), 'number');
    });
    it('should return 0 given 2 and 2', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(2, 2), 0);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should retuen a number', () => {
      const divide = funcs.divide;
      assert.typeOf(divide(3, 1) , 'number');
    });
    it('should return 10 when given 100 and 10', () => {
      const divide = funcs.divide;
      assert.equal(divide(100, 10), 10);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply(5, 5), 'number');
    });
    it('should return 25 when given 5 and 5', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(5, 5), 25);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder(100, 9), 'number');
    });
    it('should return 1 when given 100 and 9', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(100, 9), 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(1), 'boolean');
    });
    it('should return true if even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(2), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(1), 'boolean');
    });
    it('should return true if odd', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(1), true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const square = funcs.square;
      assert.typeOf(square(5), 'number');
    });
    it('should return 25 given 5', () => {
      const square = funcs.square;
      assert.equal(square(5), 25);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      assert.typeOf(cube(5), 'number');
    });
    it('should return 125 given 5', () => {
      const cube = funcs.cube;
      assert.equal(cube(5), 125);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower(8), 'number');
    });
    it('should return 4 given 2 and 2', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2, 2), 4);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber(7), 'number');
    });
    it('should return rounded number', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(7.3), 7);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp(7), 'number');
    });
    it('should return rounded up number', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(7.1), 8);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint('hi'), 'string');
    });
    it('should add exclamation point', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('hi'), 'hi!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames('j', 'j'), 'string');
    });
    it('should combine names', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Josh', 'Coyne'), 'Josh Coyne');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting('Joe'), 'string');
    });
    it('should return greeting', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Joe'), 'Hello Joe!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea(5, 4), 'number');
    });
    it('should return correct area', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(5, 4), 20);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea(2, 2), 'number');
    });
    it('should return correct area', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(1, 1), .5);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea(3), 'number');
    });
    it('should return correct area', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(1), Math.PI);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume(1, 1, 1), 'number');
    });
    it('should return correct area', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(1, 1, 1), 1);
    });
  });
});
