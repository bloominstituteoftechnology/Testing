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
    it('should return 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const num = 1;
      assert.equal(multiplyByTen(num), 10);
    });
    it('should be a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const num = 1;
      assert.typeOf(multiplyByTen(num), 'number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 5', () => {
      const subtractFive = funcs.subtractFive;
      const num = 10;
      assert.equal(subtractFive(num), 5);
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      const num = 10;
      assert.typeOf(subtractFive(num), 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true', () => {
      const areSameLength = funcs.areSameLength;
      const str1 = 'yarn';
      const str2 = 'barn';
      assert.strictEqual(areSameLength(str1, str2), true);
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      const str1 = 'yarn';
      const str2 = 'barn';
      assert.typeOf(areSameLength(str1, str2), 'boolean');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return false', () => {
      const areEqual = funcs.areEqual;
      const num1 = 5;
      const num2 = 6;
      assert.equal(areEqual(num1, num2), false);
    });
    it('should return boolean', () => {
      const areEqual = funcs.areEqual;
      const num1 = 5;
      const num2 = 6;
      assert.typeOf(areEqual(num1, num2), 'boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return false', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const num = -1;
      assert.isTrue(lessThanNinety(num));
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const num = 111;
      assert.typeOf(lessThanNinety(num), 'boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be true', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const num = 51;
      assert.isTrue(greaterThanFifty(num));
    });
    it('should be not be an array', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const num = 500;
      assert.isNotArray(greaterThanFifty(num));
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return 40', () => {
      const add = funcs.add;
      const num1 = 50;
      const num2 = -10;
      assert.strictEqual(add(num1, num2), 40);
    });
    it('should return a number', () => {
      const add = funcs.add;
      const num1 = 50;
      const num2 = -10;
      assert.isNumber(add(num1, num2));
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return 50.5', () => {
      const subtract = funcs.subtract;
      const num1 = 51;
      const num2 = 1 / 2;
      assert.strictEqual(subtract(num1, num2), 50.5);
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      const num1 = 51;
      const num2 = 1 / 2;
      assert.isNumber(subtract(num1, num2));
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
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
