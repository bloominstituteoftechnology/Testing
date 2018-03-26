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
  const num = 10;
  const emptyArray = []; 
  const nullNum = null;
  const undefinedNum = undefined;
  const negativeNum = -20;
  const stringNum = '5';
  describe('`multiplyByTen`', () => {
    const multiplyByTen = funcs.multiplyByTen;

    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });

    it('should return a value of 100', () => {
      assert.equal(multiplyByTen(num), 100);
    });

    it('should return 0', () => {
      assert.equal(multiplyByTen(emptyArray), 0);
    });

    it('should return 0', () => {
      assert.equal(multiplyByTen(nullNum), 0);
    });

    it('should return NaN', () => {
      assert.typeOf(multiplyByTen(undefinedNum), 'number');
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });

    it('should return a value of 5', () => {
      assert.equal(subtractFive(num), 5);
    });

    it('should return a value of -5', () => {
      assert.equal(subtractFive(nullNum), -5);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    const str1 = 'string1';
    const str2 = 'string2';
    const str3 = 'stringy3';
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });

    it('should return a value of true', () => {
      assert.equal(areSameLength(str1, str2), true);
    });

    it('should return a value of false', () => {
      assert.equal(areSameLength(str1, str3), false);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });

    it('should return true', () => {
      assert.equal(areEqual(num, num), true);
    });

    it('should return false', () => {
      assert.equal(areEqual(num, nullNum), false);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });

    it('should return true', () => {
      assert.equal(lessThanNinety(num), true);
    });

    it('should return false', () => {
      assert.equal(lessThanNinety(100), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });

    it('should return false', () => {
      assert.equal(greaterThanFifty(num), false);
    });

    it('should return true', () => {
      assert.equal(greaterThanFifty(100), true);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });

    it('should return 20', () => {
      assert.equal(add(num, num), 20);
    });

    it('should return 0', () => {
      assert.equal(add(nullNum, nullNum), 0);
    });

    it('should return 10', () => {
      assert.equal(add(num, nullNum), 10);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;

    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });

    it('should return 0', () => {
      assert.equal(subtract(num, num), 0);
    });

    it('should return 30', () => {
      assert.equal(subtract(num, negativeNum), 30);
    });

    it('should return 5', () => {
      assert.equal(subtract(num, stringNum), 5);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });

    it('should not return true', () => {
      expect(divide(num, nullNum)).to.not.equal(true);
    });

    it('should not return true', () => {
      expect(divide(undefinedNum, num)).to.not.equal(true);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
  
    it('should be equal to 100 ', () => {
      expect(multiply(num, num)).to.equal(100);
    });

    it('should be equal to 50 ', () => {
      expect(multiply(stringNum, num)).to.equal(50);
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
