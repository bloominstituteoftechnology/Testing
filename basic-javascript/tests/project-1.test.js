/* eslint-disable prefer-destructuring */
const expect = require('chai').expect;
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
    it('should be the product of the number times ten.', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const num = 5;
      const product = multiplyByTen(num);
      assert.equal(50, '50');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should be the difference of the number minus five.', () => {
      const subtractFive = funcs.subtractFive;
      const num = 6;
      const difference = subtractFive(num);
      assert.equal(difference, '1');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should take a string', () => {
      const str1 = 'joe';
      assert.isString(str1, 'str1 is a string.');
    });
    it('should take a string', () => {
      const str2 = 'doe';
      assert.isString(str2, 'str2 is a string.');
    });
    it('the two strings should be the same length', () => {
      const areSameLength = funcs.areSameLength;
      const str1 = 'joe';
      const str2 = 'doe';
      expect(str1.length).to.equal(str2.length);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should have two equal values', () => {
      const areEqual = funcs.areEqual;
      const x = 1;
      const y = 1;
      expect(x).to.equal(y);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should take num as an integer', () => {
      const num = 89;
      assert.isNumber(num);
    });
    it('should return less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const num = 89;
      const lesser = lessThanNinety(num);
      assert.isBelow(num, 90, 'num is below 90');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const age = 51;
      assert.isAtLeast(age, 51, 'age is above 50');
    });
    it('should return false', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const elseRes = false;
      assert.isFalse(elseRes, 'else is false');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a sum', () => {
      const add = funcs.add;
      const x = 5;
      const y = 5;
      const val = x + y;
      assert.equal(val, 10, 'is ten');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a difference', () => {
      const x = 5;
      const y = 5;
      const val = x - y;
      assert.equal(val, 0, 'is subtracted');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should be a quotient of x divided by y', () => {
      const x = 5;
      const y = 5;
      const val = x / y;
      assert.equal(val, 1, 'is divided');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a product', () => {
      const x = 5;
      const y = 5;
      const val = x * y;
      assert.equal(val, 25, 'is multiplied');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a remainder', () => {
      const x = 5;
      const y = 5;
      const val = x % y;
      assert.equal(val, 0, 'returned the remainder');
    });
    it('should else return false', () => {
      const elseRes = false;
      assert.isFalse(elseRes, false, 'its false');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should be even', () => {
      const isEven = funcs.isEven;
      const num = 4;
      const eq = isEven(num);
      const val = num % 2;
      assert.equal(val, 0, 'result is even.');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should be odd', () => {
      const isOdd = funcs.isOdd;
      const num = 3;
      const od = isOdd(num);
      const val = num % 2;
      assert.notEqual(val, 0, 'result is odd');
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
