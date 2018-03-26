/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const sinon = require('sinon');
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
      assert.typeOf(multiplyByTen, 'object');
    });
    // begin here
    it('should be 40', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert(multiplyByTen(4), 40);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'array');
    });
    it('should be 5', () => {
      const subtractFive = funcs.subtractFive;
      assert(subtractFive(10), 5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'number');
    });
    it('should be smae length', () => {
      const areSameLength = funcs.areSameLength;
      assert(areSameLength('John', 'Dora'), true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'number');
    });
    it('should be equal', () => {
      const areEqual = funcs.areEqual;
      assert(areEqual(9, 9), true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'number');
    });
    it('should be less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert(lessThanNinety(60), true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'number');
    });
    it('should be greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert(greaterThanFifty(100), true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'number');
    });
    it('should provide 10', () => {
      const add = funcs.add;
      assert(add(5, 5), 10);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'number');
    });
    it('should provide 5', () => {
      const subtract = funcs.subtract;
      assert(subtract(10, 5), 5);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'number');
    });
    it('should provide 10', () => {
      const divide = funcs.divide;
      assert(divide(100, 10), 10);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'number');
    });
    it('should provide 36', () => {
      const multiply = funcs.multiply;
      assert(multiply(12, 3), 36);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'number');
    });
    it('should provide 2', () => {
      const getRemainder = funcs.getRemainder;
      assert(getRemainder(10, 4), 2);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'number');
    });
    it('should return true', () => {
      const isEven = funcs.isEven;
      assert(isEven(8), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'number');
    });
    it('should return false', () => {
      const isOdd = funcs.isOdd;
      assert(isOdd(9), true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'object');
    });
    it('should provide 25', () => {
      const square = funcs.square;
      assert(square(5), 25);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'object');
    });
    it('should return 8', () => {
      const cube = funcs.cube;
      assert(cube(2), 8);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'object');
    });
    it('should return 4', () => {
      const raiseToPower = funcs.raiseToPower;
      assert(raiseToPower(2, 2), 4);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'object');
    });
    it('should return a 5', () => {
      const roundNumber = funcs.roundNumber;
      assert(roundNumber(5.67), 5);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'object');
    });
    it('should return 6', () => {
      const roundUp = funcs.roundUp;
      assert(roundUp(5.76), 6);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'string');
    });
    it('should add exclamation point!', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert(addExclamationPoint('String', 'String!'));
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'string');
    });
    it('should combine names', () => {
      const combineNames = funcs.combineNames;
      assert(combineNames('Tyler', 'Johnson'), 'Tyler Johnson');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'string');
    });
    it('should return a greeting', () => {
      const getGreeting = funcs.getGreeting;
      assert(getGreeting('Dixie'));
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'string');
    });
    it('should return 25', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert(getRectangleArea(5, 5), 25);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'string');
    });
    it('should return 50', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert(getTriangleArea(10, 10), 50);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'string');
    });
    it('should return 50.27', () => {
      const getCircleArea = funcs.getCircleArea;
      assert(getCircleArea(4), 50.27);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'string');
    });
    it('should return 8', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert(getRectangularPrismVolume(2, 2, 2), 8);
    });
  });
});
