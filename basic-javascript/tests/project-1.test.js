const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');
/* eslint-disable no-unused-expressions */

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
    it('should multiply by Ten', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(1)).to.eq(10);
      expect(multiplyByTen(2)).to.eq(20);
    });
    // begin here
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract 5', () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(5)).to.eq(0);
      expect(subtractFive(6)).to.eq(1);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should check if lengths are equal', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('x', 'y')).to.be.true;
      expect(areSameLength('x', 'yy')).to.be.false;
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should test for equal', () => {
      const areEqual = funcs.areEqual;
      expect(areEqual(5, 5)).to.be.true;
      expect(areEqual(5, 6)).to.be.false;
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true for < 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(5)).to.be.true;
      expect(lessThanNinety(500)).to.be.false;
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true for > 50', () => {
      expect(greaterThanFifty(5)).to.be.false;
      expect(greaterThanFifty(500)).to.be.true;
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should add two numbers', () => {
      expect(add(5, 6)).to.eq(11);
      expect(add(500, 1)).to.eq(501);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should add two numbers', () => {
      expect(subtract(5, 6)).to.eq(-1);
      expect(subtract(500, 1)).to.eq(499);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should add two numbers', () => {
      expect(divide(6, 2)).to.eq(3);
      expect(divide(500, 1)).to.eq(500);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should multiply two numbers', () => {
      expect(multiply(6, 2)).to.eq(12);
      expect(multiply(500, 1)).to.eq(500);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return x % y', () => {
      expect(getRemainder(7, 2)).to.eq(1);
      expect(getRemainder(500, 1)).to.eq(0);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return true for even numbers', () => {
      expect(isEven(7)).to.be.false;
      expect(isEven(500)).to.be.true;
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return true for even numbers', () => {
      expect(isOdd(7)).to.be.true;
      expect(isOdd(500)).to.be.false;
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return the square of a number', () => {
      expect(square(7)).to.eq(49);
      expect(square(500)).to.eq(250000);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of a number', () => {
      expect(cube(2)).to.eq(8);
      expect(cube(3)).to.eq(27);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return x ^^ y', () => {
      expect(raiseToPower(2, 3)).to.eq(8);
      expect(raiseToPower(3, 3)).to.eq(27);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return the round of a number', () => {
      expect(roundNumber(2)).to.eq(2);
      expect(roundNumber(3.1)).to.eq(3);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return the round of a number', () => {
      expect(roundUp(2)).to.eq(2);
      expect(roundUp(3.1)).to.eq(4);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add an Exclamation Point to a string', () => {
      expect(addExclamationPoint('2')).to.eq('2!');
      expect(addExclamationPoint('3.1')).to.eq('3.1!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('for x and y strings should return "x y"', () => {
      expect(combineNames('2', '0')).to.eq('2 0');
      expect(combineNames('3.1', 'x')).to.eq('3.1 x');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('for a string name it should return "Hello {name}!"', () => {
      expect(getGreeting('2')).to.eq('Hello 2!');
      expect(getGreeting('3.1')).to.eq('Hello 3.1!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should get area of a x,y rectangle', () => {
      expect(getRectangleArea(2, 0)).to.eq(0);
      expect(getRectangleArea(3.1, 2)).to.eq(6.2);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should get area of a x,y right triangle', () => {
      expect(getTriangleArea(2, 3)).to.eq(3);
      expect(getTriangleArea(3.1, 4)).to.eq(6.2);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the area of a cirlce', () => {
      expect(getCircleArea(2)).to.eq(Math.PI * 4);
      expect(getCircleArea(3)).to.eq(Math.PI * 9);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the volume of a Rectangular Prism', () => {
      expect(getRectangularPrismVolume(2, 3, 1)).to.eq(6);
      expect(getRectangularPrismVolume(3, 4, 3)).to.eq(36);
    });
  });
});
