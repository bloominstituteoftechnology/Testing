const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
//const expect = chai.expect;

chai.use(sinonChai);

// we've gone ahead and gotten a start here for you
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {

  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      //assert.typeOf(multiplyByTen, 'function');
      expect(multiplyByTen).to.be.a('function');
    });
    // begin here
    it('should return a number', () => {
      const timesTen = funcs.multiplyByTen(15);
      assert.typeOf(timesTen, 'number');  // this test is redundant dropping it in future. next test
           // checks for return type (implicitly) and return value. Increasing signal to noise ratio. Opposite if I was a 'consultant' :)
    });
    it('should return 15 by 10', () => {
      const timesTen = funcs.multiplyByTen(15);
      assert.equal(timesTen, 150);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 15 by 10', () => {
      const subFive = funcs.subtractFive(15);
      assert.equal(subFive, 10);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true for two equal length strings ', () => {
      const sameLength = funcs.areSameLength('bla', 'sha');
      assert.equal(sameLength, true);
    });
    it('should return false  for two unequal strings ', () => {
      const sameLength = funcs.areSameLength('bl', 'sha');
      assert.equal(sameLength, false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true for two equal numbers ', () => {
      const equalNums = funcs.areEqual(2, 2);
      assert.equal(equalNums, true);
    });
    it('should return false for two unequal numbers ', () => {
      const UnEqualNums = funcs.areEqual(3, 2);
      assert.equal(UnEqualNums, false);
    });
    it('should return true for two equal objects ', () => {
      const objectUnderTest = {a:1};
      const secondObjectUndertest = objectUnderTest;
      const equalObjects = funcs.areEqual(objectUnderTest, secondObjectUndertest);
      assert.equal(equalObjects, true);
    });
    it('should return false for two unequal objects ', () => {
      const objectUnderTest = {a:1};
      const secondObjectUndertest = {a:1}; //equal but different pointers
      const equalObjects = funcs.areEqual(objectUnderTest, secondObjectUndertest);
      assert.equal(equalObjects, false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true for parameter less than 90', () => {
      const shouldRetTrue = funcs.lessThanNinety(23);
      assert.equal(shouldRetTrue, true);
    });
    it('should return true for minus parameter values ', () => {
      const shouldRetTrue = funcs.lessThanNinety(-23);
      assert.equal(shouldRetTrue, true);
    });
    it('should return true for parameter zero', () => {
      const shouldRetTrue = funcs.lessThanNinety(0);
      assert.equal(shouldRetTrue, true);
    });
    it('should return false for parameter 90', () => {
      const shouldRetTrue = funcs.lessThanNinety(90);
      assert.equal(shouldRetTrue, false);
    });
    it('should return false for parameter 99', () => {
      const shouldRetTrue = funcs.lessThanNinety(99);
      assert.equal(shouldRetTrue, false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true for parameter greater than 50', () => {
      const shouldRetTrue = funcs.greaterThanFifty(51);
      assert.equal(shouldRetTrue, true);
    });
    it('should return false for value 50 ', () => {
      const shouldRetFalse = funcs.greaterThanFifty(50);
      assert.equal(shouldRetFalse, false);
    });
    it('should return false for value 49 ', () => {
      const shouldRetFalse = funcs.greaterThanFifty(49);
      assert.equal(shouldRetFalse, false);
    });
    it('should return false for value -49 ', () => {
      const shouldRetFalse = funcs.greaterThanFifty(-49);
      assert.equal(shouldRetFalse, false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });

  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
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
      assert.typeOf(addExclamationPoint, 'function')
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
  });

});
