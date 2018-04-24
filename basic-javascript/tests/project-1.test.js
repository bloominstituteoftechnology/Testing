/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const expect = require('chai').expect;
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
    it('should return 100', () => {
      assert.equal(multiplyByTen(10), 100);
    });
    it('should return a number', () => {
      assert.typeOf(multiplyByTen(10), 'number');
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 5', () => {
      assert.equal(subtractFive(10), 5);
    });
    it('should return a number', () => {
      assert.typeOf(subtractFive(), 'number');
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true', () => {
      assert.equal(areSameLength('string', 'string'), true);
    });
    it('should return false', () => {
      assert.equal(areSameLength('string', 'string1'), false);
    });
    it('should return a boolean', () => {
      assert.typeOf(areSameLength('string', 'string1'), 'boolean');
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return true', () => {
      assert.equal(areEqual(3, 3), true);
    });
    it('should return false', () => {
      assert.equal(areEqual(2, 5), false);
    });
    it('should return a boolean', () => {
      assert.typeOf(areEqual(2, 5), 'boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true', () => {
      assert.equal(lessThanNinety(80), true);
    });
    it('should return false', () => {
      assert.equal(lessThanNinety(91), false);
    });
    it('should return a boolean', () => {
      assert.typeOf(lessThanNinety(90), 'boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true', () => {
      assert.equal(greaterThanFifty(80), true);
    });
    it('should return false', () => {
      assert.equal(greaterThanFifty(40), false);
    });
    it('should return a boolean', () => {
      assert.typeOf(greaterThanFifty(50), 'boolean');
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return 20', () => {
      assert.equal(add(10, 10), 20);
    });
    it('should return a number', () => {
      assert.typeOf(add(50, 20), 'number');
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return 5', () => {
      assert.equal(subtract(10, 5), 5);
    });
    it('should return a number', () => {
      assert.typeOf(subtract(50, 20), 'number');
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return 2', () => {
      assert.equal(divide(10, 5), 2);
    });
    it('should return a number', () => {
      assert.typeOf(divide(50, 20), 'number');
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return 50', () => {
      assert.equal(multiply(10, 5), 50);
    });
    it('should return a number', () => {
      assert.typeOf(multiply(50, 20), 'number');
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return 2', () => {
      assert.equal(getRemainder(10, 4), 2);
    });
    it('should return a number', () => {
      assert.typeOf(getRemainder(50, 20), 'number');
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return true', () => {
      assert.equal(isEven(80), true);
    });
    it('should return false', () => {
      assert.equal(isEven(45), false);
    });
    it('should return a boolean', () => {
      assert.typeOf(isEven(50), 'boolean');
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return true', () => {
      assert.equal(isOdd(45), true);
    });
    it('should return false', () => {
      assert.equal(isOdd(80), false);
    });
    it('should return a boolean', () => {
      assert.typeOf(isOdd(50), 'boolean');
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return 169', () => {
      assert.equal(square(13), 169);
    });
    it('should return a number', () => {
      assert.typeOf(square(13), 'number');
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return 2197', () => {
      assert.equal(cube(13), 2197);
    });
    it('should return a number', () => {
      assert.typeOf(cube(13), 'number');
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return 28561', () => {
      assert.equal(raiseToPower(13, 4), 28561);
    });
    it('should return a number', () => {
      assert.typeOf(raiseToPower(13, 4), 'number');
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return 80', () => {
      assert.equal(roundNumber(79.8), 80);
    });
    it('should return a number', () => {
      assert.typeOf(roundNumber(13.5), 'number');
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return 80', () => {
      assert.equal(roundUp(79.1), 80);
    });
    it('should return a number', () => {
      assert.typeOf(roundUp(13.4), 'number');
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return Hello World!', () => {
      assert.equal(addExclamationPoint('Hello World'), 'Hello World!');
    });
    it('should return a string', () => {
      assert.typeOf(addExclamationPoint('Hello World'), 'string');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return Charletta Bullard', () => {
      assert.equal(combineNames('Charletta', 'Bullard'), 'Charletta Bullard');
    });
    it('should return a string', () => {
      assert.typeOf(combineNames('Charletta Bullard'), 'string');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return Hello Juber!', () => {
      assert.equal(getGreeting('Juber'), 'Hello Juber!');
    });
    it('should return a string', () => {
      assert.typeOf(getGreeting('Habib'), 'string');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return 2197', () => {
      assert.equal(getRectangleArea(13, 10), 130);
    });
    it('should return a number', () => {
      assert.typeOf(getRectangleArea(13, 10), 'number');
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return 2197', () => {
      assert.equal(getTriangleArea(13, 10), 65);
    });
    it('should return a number', () => {
      assert.typeOf(getTriangleArea(13, 10), 'number');
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return 78.53981633974483', () => {
      assert.equal(getCircleArea(5), 78.53981633974483);
    });
    it('should return a number', () => {
      assert.typeOf(getCircleArea(10), 'number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return 520', () => {
      assert.equal(getRectangularPrismVolume(13, 10, 4), 520);
    });
    it('should return a number', () => {
      assert.typeOf(getRectangularPrismVolume(13, 10, 4), 'number');
    });
  });
});
