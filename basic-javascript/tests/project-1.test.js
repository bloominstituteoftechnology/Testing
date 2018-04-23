/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;

// for practice, am going to be alternating among should, assert and expect, so bring in should and expect
const should = require('chai').should(); // but should be avoided according to documentation
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
      // assert.typeOf(multiplyByTen, 'object');
      multiplyByTen.should.be.a('function');
    });
    // begin here
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      // assert.typeOf(subtractFive, 'array');
      expect(subtractFive).to.be.a('function');
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      // assert.typeOf(areSameLength, 'number');
      assert.typeOf(areSameLength, 'function');
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      // assert.typeOf(areEqual, 'number');
      areEqual.should.be.a('function');
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      // assert.typeOf(lessThanNinety, 'number');
      expect(lessThanNinety).to.be.a('function');
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      // assert.typeOf(greaterThanFifty, 'number');
      assert.typeOf(greaterThanFifty, 'function');
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      // assert.typeOf(add, 'number');
      add.should.be.a('function');
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      // assert.typeOf(subtract, 'number');
      expect(subtract).to.be.a('function');
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      // assert.typeOf(divide, 'number');
      assert.typeOf(divide, 'function');
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      // assert.typeOf(multiply, 'number');
      multiply.should.be.a('function');
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      // assert.typeOf(getRemainder, 'number');
      expect(getRemainder).to.be.a('function');
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      // assert.typeOf(isEven, 'number');
      assert.typeOf(isEven, 'function');
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      // assert.typeOf(isOdd, 'number');
      isOdd.should.be.a('function');
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      // assert.typeOf(square, 'object');
      expect(square).to.be.a('function');
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      // assert.typeOf(cube, 'object');
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      // assert.typeOf(raiseToPower, 'object');
      raiseToPower.should.be.a('function');
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      // assert.typeOf(roundNumber, 'object');
      expect(roundNumber).to.be.a('function');
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      // assert.typeOf(roundUp, 'object');
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      // assert.typeOf(addExclamationPoint, 'string');
      addExclamationPoint.should.be.a('function');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      // assert.typeOf(combineNames, 'string');
      expect(combineNames).to.be.a('function');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      // assert.typeOf(getGreeting, 'string');
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      // assert.typeOf(getRectangleArea, 'string');
      getRectangleArea.should.be.a('function');
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      // assert.typeOf(getTriangleArea, 'string');
      expect(getTriangleArea).to.be.a('function');
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      // assert.typeOf(getCircleArea, 'string');
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      // assert.typeOf(getRectangularPrismVolume, 'string');
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});
