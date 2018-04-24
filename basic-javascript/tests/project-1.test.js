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
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should be a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const product = multiplyByTen(2);
      assert.typeOf(product, 'number');
    });
    it('should return as 20', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const product = multiplyByTen(2);
      assert.equal(product, 20);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should be a number', () => {
      const subtractFive = funcs.subtractFive;
      const diff = subtractFive(10);
      assert.typeOf(diff, 'number');
    });
    it('should return 5', () => {
      const subtractFive = funcs.subtractFive;
      const diff = subtractFive(10);
      assert.equal(diff, 5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should be a boolean', () => {
      const areSameLength = funcs.areSameLength;
      const str = areSameLength('luis', 'diaz');
      expect(str).to.be.a('boolean');
    });
    it('should be boolean showing equal in length', () => {
      const areSameLength = funcs.areSameLength;
      const compared = areSameLength('luis', 'diaz');
      assert.equal(compared, true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should be a boolean', () => {
      const areEqual = funcs.areEqual;

      assert.typeOf(areEqual(2, 2), 'boolean');
    });
    it('should be true', () => {
      const areEqual = funcs.areEqual;

      assert.equal(areEqual(2, 2), true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety(50), 'boolean');
    });
    it('should be true if less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(80), true);
    });
    it('should be false if more than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(100), false);
    });
  });

  describe('greaterThanFifty', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty(40), 'boolean');
    });
    it('should be true', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(70), true);
    });
  });

  describe('add', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should be a number', () => {
      const add = funcs.add;
      assert.typeOf(add(2, 2), 'number');
    });
    it('should result in 4', () => {
      const add = funcs.add;
      assert.equal(add(2, 2), 4);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should be a number', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(10, 5), 'number');
    });
    it('should equal to 5', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(10, 5), 5);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should be a number', () => {
      const divide = funcs.divide;
      assert.typeOf(divide(10, 5), 'number');
    });
    it('should result to 2', () => {
      const divide = funcs.divide;
      assert.equal(divide(10, 5), 2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should be a number', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply(2, 2), 'number');
    });
    it('should result in 4', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(2, 2), 4);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should be a number', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder(11, 2), 'number');
    });
    it('should give remainder of 1', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(11, 2), 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should be a boolean', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(8), 'boolean');
    });
    it('should return true', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(8), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should be a boolean', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(8), 'boolean');
    });
    it('should return false', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(8), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should be a number', () => {
      const square = funcs.square;
      assert.typeOf(square(3), 'number');
    });
    it('should result in 9', () => {
      const square = funcs.square;
      assert.equal(square(3), 9);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should be a number', () => {
      const cube = funcs.cube;
      assert.typeOf(cube(3), 'number');
    });
    it('should result in 27', () => {
      const cube = funcs.cube;
      assert.equal(cube(3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should be a number', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower(3, 2), 'number');
    });
    it('should result in 9', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(3, 2), 9);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should be a number', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber(3.2), 'number');
    });
    it('should round to 3', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(3.2), 3);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should be a number', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp(3.5), 'number');
    });
    it('should result in 4', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(3.5), 4);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should be a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint('yes'), 'string');
    });
    it('should be yes!', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('yes'), 'yes!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should be a string', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames('Jon', 'Snow'), 'string');
    });
    it('should be a combined string', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Jon', 'Snow'), 'Jon Snow');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should be a string', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting('Jimmy'), 'string');
    });
    it('should be greeting', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Jimmy'), 'Hello Jimmy!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should be a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea(5, 5), 'number');
    });
    it('should result in 25', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(5, 5), 25);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should be a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea(2, 8), 'number');
    });
    it('should result in 8', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(2, 8), 8);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should be a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea(5), 'number');
    });
    it('should result in 78.5', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(5), 78.53981633974483);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should be a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume(2, 2, 2), 'number');
    });
    it('should result in 8', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(2, 2, 2), 8);
    });
  });
});
