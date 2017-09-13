const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const expect = chai.expect;

chai.use(sinonChai);
const funcs = require('../src/project-1');
const assert = require('chai').assert;


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
    it('should equal 50', () => {
      expect(funcs.multiplyByTen(5)).to.equal(50);
    });
    it('should equal 80', () => {
      expect(funcs.multiplyByTen(8)).to.equal(80);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should equal 5', () => {
      expect(funcs.subtractFive(10)).to.equal(5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should have equal lengths', () => {
      expect(funcs.areSameLength('see', 'bob')).to.equal(true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should have two equal values', () => {
      expect(funcs.areEqual(3, 3)).to.equal(true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be less than ninety', () => {
      expect(funcs.lessThanNinety(80)).to.equal(true);
    });
    it('should be less than ninety', () => {
      expect(funcs.lessThanNinety(100)).to.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be greater than fifty', () => {
      expect(funcs.greaterThanFifty(35)).to.equal(false);
    });
    it('should be greater than fifty', () => {
      expect(funcs.greaterThanFifty(75)).to.equal(true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add two numbers', () => {
      expect(funcs.add(5, 10)).to.equal(15);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract a number from another number', () => {
      expect(funcs.subtract(10, 5)).to.equal(5);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide a number by another number', () => {
      expect(funcs.divide(100, 2)).to.equal(50);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply two numbers', () => {
      expect(funcs.multiply(5, 10)).to.equal(50);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a remainder', () => {
      expect(funcs.getRemainder(10, 4)).to.equal(2);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean value', () => {
      expect(funcs.isEven(2)).to.equal(true);
    });
    it('should return a boolean value', () => {
      expect(funcs.isEven(3)).to.equal(false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean value', () => {
      expect(funcs.isOdd(5)).to.equal(true);
    });
    it('should return a boolean value', () => {
      expect(funcs.isOdd(8)).to.equal(false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
      it('should return a squared number', () => {
        expect(funcs.square(3)).to.equal(9);
      });
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a cubed number', () => {
      expect(funcs.cube(3)).to.equal(27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number raised to its respective exponenent', () => {
      expect(funcs.raiseToPower(9, 2)).to.equal(81);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a rounded number', () => {
      expect(funcs.roundNumber(5.2)).to.equal(5);
    });
    it('should return a rounded number', () => {
      expect(funcs.roundNumber(4.8)).to.equal(5);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number rounded up', () => {
      expect(funcs.roundUp(2.1)).to.equal(3);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string with an exclamation point concatenated to the end', () => {
      expect(funcs.addExclamationPoint('hi')).to.equal('hi!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a first name and a last name joined by a space', () => {
      expect(funcs.combineNames('John', 'Doe')).to.equal('John Doe');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('shold return a greeting', () => {
      expect(funcs.getGreeting('Sacagawea')).to.equal('Hello Sacagawea!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a rectangle\'s area', () => {
      expect(funcs.getRectangleArea(2, 12)).to.equal(24);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a triangle\'s area', () => {
      expect(funcs.getTriangleArea(5, 10)).to.equal(25);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the area of a circle', () => {
      expect(funcs.getCircleArea(5)).to.equal(Math.PI * 25);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the area of a rectangular prism', () => {
      expect(funcs.getRectangularPrismVolume(2, 5, 10)).to.equal(100);
    });
  });
});
