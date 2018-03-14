/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-1');
const expect = require('chai').expect;

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
    it('should return a number multiplied by 10 given that a number is passed in', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const twenty = multiplyByTen(2);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return the difference of a number and five given that a number is passed in', () => {
      const subtractFive = funcs.subtractFive;
      const five = subtractFive(10);
      assert.typeOf(five, 'number');
      assert.equal(five, 5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if args are the same length', () => {
      expect(funcs.areSameLength('hello', 'world')).to.be.true;
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if args are equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(3, 3), true);
    });
    it('should return false if args are not equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(3, 4), false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if arg is less than ninety', () => {
      expect(funcs.lessThanNinety(15)).to.equal(true);
    });
    it('should return false if arg is greater than or equal to ninety', () => {
      expect(funcs.lessThanNinety(9001)).to.equal(false);
      expect(funcs.lessThanNinety(90)).to.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if args is greater than fifty', () => {
      expect(funcs.greaterThanFifty(9001)).to.equal(true);
      expect(funcs.greaterThanFifty(90)).to.equal(true);
    });
    it('should return false if args is greater than fifty', () => {
      expect(funcs.greaterThanFifty(15)).to.equal(false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return the sum when given two numbers', () => {
      const add = funcs.add;
      const four = add(2, 2);
      assert.typeOf(four, 'number');
      assert.equal(four, 4);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return the difference given two numbers', () => {
      const subtract = funcs.subtract;
      const zero = subtract(2, 2);
      assert.typeOf(zero, 'number');
      assert.equal(zero, 0);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return the quotient given two numbers', () => {
      const divide = funcs.divide;
      const one = divide(2, 2);
      assert.typeOf(one, 'number');
      assert.equal(one, 1);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return the product of two numbers', () => {
      const multiply = funcs.multiply;
      const four = multiply(2, 2);
      assert.typeOf(four, 'number');
      assert.equal(four, 4);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder of two numbers', () => {
      const getRemainder = funcs.getRemainder;
      const two = getRemainder(7, 5);
      assert.typeOf(two, 'number');
      assert.equal(two, 2);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if a number is even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(14), true);
    });
    it('should return false if a number is not even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(7), false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if a number is odd', () => {
      expect(funcs.isOdd(9001)).to.equal(true);
    });
    it('should return false if a number is even', () => {
      expect(funcs.isOdd(9002)).to.equal(false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('Should return a number squared', () => {
      const square = funcs.square;
      const sixteen = square(4);
      assert.typeOf(sixteen, 'number');
      assert.equal(sixteen, 16);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the cuberoot of a number');
    const { cube } = funcs;
    const twentySeven = cube(3);
    assert.equal(twentySeven, 27);
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should take in a number and an exponent and return the solution', () => {
      const { raiseToPower } = funcs;

      expect(raiseToPower(4, 2), 16);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round a number to the nearest whole value', () => {
      const { roundNumber } = funcs;
      expect(roundNumber(5.2), 6);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round a number up to the next whole value');
    const { roundUp } = funcs;
    assert(roundUp(1.1), 2);
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
