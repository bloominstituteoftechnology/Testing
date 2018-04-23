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
    it('should return a number', () => {
      expect(funcs.multiplyByTen(5)).to.be.a('number');
    });
    it('should return 50', () => {
      expect(funcs.multiplyByTen(5)).to.equal(50);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      expect(funcs.subtractFive(10)).to.be.a('number');
    });
    it('should return 5', () => {
      expect(funcs.subtractFive(10)).to.equal(5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      expect(funcs.areSameLength(5, 6)).to.be.a('boolean');
    });
    it('should return false', () => {
      expect(funcs.areSameLength('hello', 'goodbye')).to.equal(false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      expect(funcs.areEqual(5, 6)).to.be.a('boolean');
    });
    it('should return false', () => {
      expect(funcs.areEqual(5, 6)).to.equal(false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      expect(funcs.lessThanNinety(85)).to.be.a('boolean');
    });
    it('should return true', () => {
      expect(funcs.lessThanNinety(85)).to.equal(true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      expect(funcs.greaterThanFifty(55)).to.be.a('boolean');
    });
    it('should return true', () => {
      expect(funcs.greaterThanFifty(55)).to.equal(true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      expect(funcs.add(5, 6)).to.be.a('number');
    });
    it('should return 11', () => {
      expect(funcs.add(5, 6)).to.equal(11);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      expect(funcs.subtract(10, 5)).to.be.a('number');
    });
    it('should return 5', () => {
      expect(funcs.subtract(10, 5)).to.equal(5);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      expect(funcs.divide(10, 5)).to.be.a('number');
    });
    it('should return 2', () => {
      expect(funcs.divide(10, 5)).to.equal(2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      expect(funcs.multiply(5, 8)).to.be.a('number');
    });
    it('should return 40', () => {
      expect(funcs.multiply(5, 8)).to.equal(40);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      expect(funcs.getRemainder(10, 2)).to.be.a('number');
    });
    it('should return 0', () => {
      expect(funcs.getRemainder(10, 2)).to.equal(0);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      expect(funcs.isEven(6)).to.be.a('boolean');
    });
    it('should return true', () => {
      expect(funcs.isEven(6)).to.equal(true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      expect(funcs.isOdd(6)).to.be.a('boolean');
    });
    it('should return false', () => {
      expect(funcs.isOdd(6)).to.equal(false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      expect(funcs.square(2)).to.be.a('number');
    });
    it('should return 4', () => {
      expect(funcs.square(2)).to.equal(4);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      expect(funcs.cube(3)).to.be.a('number');
    });
    it('should return 27', () => {
      expect(funcs.cube(3)).to.equal(27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      expect(funcs.raiseToPower(10, 2)).to.be.a('number');
    });
    it('should return 100', () => {
      expect(funcs.raiseToPower(10, 2)).to.equal(100);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      expect(funcs.roundNumber(9.5)).to.be.a('number');
    });
    it('should return 10', () => {
      expect(funcs.roundNumber(9.51)).to.equal(10);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      expect(funcs.roundUp(9.5)).to.be.a('number');
    });
    it('should return 10', () => {
      expect(funcs.roundUp(9.5)).to.equal(10);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      expect(funcs.addExclamationPoint('Hello there')).to.be.a('string');
    });
    it('should return Hello there!', () => {
      expect(funcs.addExclamationPoint('Hello there')).to.equal('Hello there!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      expect(funcs.combineNames('Bob', 'Rob')).to.be.a('string');
    });
    it('should return Bob Rob', () => {
      expect(funcs.combineNames('Bob', 'Rob')).to.equal('Bob Rob');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      expect(funcs.getGreeting('Bob')).to.be.a('string');
    });
    it('should return Hello Bob!', () => {
      expect(funcs.getGreeting('Bob')).to.equal('Hello Bob!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      expect(funcs.getRectangleArea(5, 6)).to.be.a('number');
    });
    it('should return 30', () => {
      expect(funcs.getRectangleArea(5, 6)).to.equal(30);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      expect(funcs.getTriangleArea(5, 6)).to.be.a('number');
    });
    it('should return 15', () => {
      expect(funcs.getTriangleArea(5, 6)).to.equal(15);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      expect(funcs.getCircleArea(10)).to.be.a('number');
    });
    it('should return a number', () => {
      expect(funcs.getCircleArea(10)).to.equal(314.1592653589793);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
  it('should return a number', () => {
    expect(funcs.getRectangularPrismVolume(10, 5, 7)).to.be.a('number');
  });
  it('should return a number', () => {
    expect(funcs.getRectangularPrismVolume(10, 5, 7)).to.equal(350);
  });
});
