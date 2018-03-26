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
    it('expected 5 to equal 50', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(5), 50);
    });
    it('expected 5 to equal 50', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(-5), -50);
    });
    it('expected multiplyByTen(5) to return a Number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(5)).to.be.a('number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should be a number', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive(5), 'number');
    });
    it('should be a 0', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(5), 0);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('abc', 'abc')).to.be.a('boolean');
    });
    it('should be True', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('abc', 'abc'), true);
    });
    it('should be False', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('ab', 'abc'), false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should be a boolean', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual(1, 1), 'boolean');
    });
    it('should be a true', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(1, 1), true);
    });
    it('should be a false', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(1, 2), false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety(80), 'boolean');
    });
    it('should be a true', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(80), true);
    });
    it('should be a false', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(100), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty(80), 'boolean');
    });
    it('should be a true', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(80), true);
    });
    it('should be a false', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(40), false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should be a number', () => {
      const add = funcs.add;
      assert.typeOf(add(5, 5), 'number');
    });
    it('should be a 0', () => {
      const add = funcs.add;
      assert.equal(add(-5, 5), 0);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should be a number', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(5, 5), 'number');
    });
    it('should be a -10', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(-5, 5), -10);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should be a number', () => {
      const divide = funcs.divide;
      assert.typeOf(divide(5, 5), 'number');
    });
    it('should be a -10', () => {
      const divide = funcs.divide;
      assert.equal(divide(5, 5), 1);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should be a number', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply(5, 5), 'number');
    });
    it('should be a 25', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(5, 5), 25);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should be a number', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder(5, 5), 'number');
    });
    it('should be a 0', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(5, 5), 0);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should be a number', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(6), 'boolean');
    });
    it('should be a Even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(6), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should be a number', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(6), 'boolean');
    });
    it('should be a Even', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(7), true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should be a number', () => {
      const square = funcs.square;
      assert.typeOf(square(5), 'number');
    });
    it('should be a 0', () => {
      const square = funcs.square;
      assert.equal(square(5), 25);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should be a number', () => {
      const cube = funcs.cube;
      assert.typeOf(cube(5), 'number');
    });
    it('should be a 0', () => {
      const cube = funcs.cube;
      assert.equal(cube(5), 125);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should be a number', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower(5, 2), 'number');
    });
    it('should be a 0', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(5, 2), 25);
    });
  });

  /////////////////// STEVEN DO ALL BELOW//////////////////////////////

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round up to the number', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(6.28)).to.equal(6);
    });
    it('should be a number', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(6.28)).to.be.a('number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round the number', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(6.6)).to.equal(7);
    });
    it('should be a number', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(6.6)).to.be.a('number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add an exclamation point to the end', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('Dank')).to.equal('Dank!');
    });
    it('should be a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('Dank')).to.be.a('string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should combine two names', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('ace', 'redesign')).to.equal('ace redesign');
    });
    it('should be a string', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('ace', 'redesign')).to.be.a('string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should display a greeting', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('aceredesign')).to.equal('Hello aceredesign!');
    });
    it('should be a string', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('aceredesign')).to.be.a('string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should get the area of the rectangle', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(20, 20)).to.equal(400);
    });
    it('should be a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(20, 20)).to.be.a('number');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('get the area of a triangle', () => {
      const getTriangleArea = funcs.getTriangleArea;
      expect(getTriangleArea(56, 2)).to.equal(56);
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      expect(getTriangleArea(56, 2)).to.be.a('number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should get the area of a circle', () => {
      const getCircleArea = funcs.getCircleArea;
      expect(getCircleArea(5)).to.equal(78.53981633974483);
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      expect(getCircleArea(5)).to.be.a('number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the volume of a rectangle', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(5, 3, 10)).to.be.a('number');
    });
  });
});