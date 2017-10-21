const chai = require('chai');
const funcs = require('../src/project-1');

const expect = chai.expect;
const assert = chai.assert;

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
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should return a number', () => {
      expect(multiplyByTen(5)).to.be.a('number');
    });
    it('should multiply a number by 10', () => {
      expect(multiplyByTen(5)).to.equal(50);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      expect(subtractFive(10)).to.be.a('number');
    });
    it('should subtract 5 from a number', () => {
      expect(subtractFive(6)).to.equal(1);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      expect(areSameLength('hello', 'world')).to.be.a('boolean');
    });
    it('should return true if arguments are the same length', () => {
      expect(areSameLength('one', 'two')).to.be.true;
    });
    it('should return false if arguments are not the same length', () => {
      expect(areSameLength('hello', 'meow')).to.be.false;
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      expect(areEqual(5, 5)).to.be.a('boolean');
    });
    it('should return true if the arguments are equal', () => {
      expect(areEqual(5, 5)).to.be.true;
    });
    it('should return false if the arguments are not equal', () => {
      expect(areEqual(5, 4)).to.be.false;
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      expect(lessThanNinety(45)).to.be.a('boolean');
    });
    it('should return true for a number less than 90', () => {
      expect(lessThanNinety(45)).to.be.true;
    });
    it('should return false for a number greater than 90', () => {
      expect(lessThanNinety(100)).to.be.false;
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      expect(greaterThanFifty(45)).to.be.a('boolean');
    });
    it('should return true for a number less than 90', () => {
      expect(greaterThanFifty(60)).to.be.true;
    });
    it('should return false for a number less than 50', () => {
      expect(greaterThanFifty(25)).to.be.false;
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      expect(add(10, 15)).to.be.a('number');
    });
    it('should add two numbers together', () => {
      expect(add(6, 4)).to.equal(10);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      expect(subtract(20, 15)).to.be.a('number');
    });
    it('should add two numbers', () => {
      expect(subtract(6, 4)).to.equal(2);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      expect(divide(20, 10)).to.be.a('number');
    });
    it('should divide the first number by the second', () => {
      expect(divide(20, 10)).to.equal(2);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      expect(multiply(20, 10)).to.be.a('number');
    });
    it('should multiply two numbers', () => {
      expect(multiply(2, 2)).to.equal(4);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      expect(getRemainder(10, 3)).to.be.a('number');
    });
    it('should return 0 if operands are equally divisible', () => {
      expect(getRemainder(20, 10)).to.equal(0);
    });
    it('should return the remainder of dividing the first number by the second', () => {
      expect(getRemainder(10, 3)).to.equal(1);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      expect(isEven(4)).to.be.a('boolean');
    });
    it('should return true if number is even', () => {
      expect(isEven(4)).to.be.true;
    });
    it('should return false if number is odd', () => {
      expect(isEven(5)).to.be.false;
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      expect(isOdd(4)).to.be.a('boolean');
    });
    it('should return false if number is even', () => {
      expect(isOdd(4)).to.be.false;
    });
    it('should return true if number is odd', () => {
      expect(isOdd(5)).to.be.true;
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      expect(square(2)).to.be.a('number');
    });
    it('should return the square of the given input', () => {
      expect(square(2)).to.equal(4);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      expect(cube(2)).to.be.a('number');
    });
    it('should return the cube of the given input', () => {
      expect(cube(2)).to.equal(8);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      expect(raiseToPower(2, 4)).to.be.a('number');
    });
    it('should raise the first argument to the power of the second', () => {
      expect(raiseToPower(2, 4)).to.equal(16);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      expect(roundNumber(5.67)).to.be.a('number');
    });
    it('should round a given number to the nearest integer', () => {
      expect(roundNumber(5.67)).to.equal(6);
      expect(roundNumber(5.3)).to.equal(5);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      expect(roundUp(5.67)).to.be.a('number');
    });
    it('should round a given number to the nearest integer greater than or equal to itself', () => {
      expect(roundUp(5.67)).to.equal(6);
      expect(roundUp(5.3)).to.equal(6);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      expect(addExclamationPoint('hello')).to.be.a('string');
    });
    it('should add an exclamation point to the end of the input string', () => {
      expect(addExclamationPoint('hello')).to.equal('hello!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      expect(combineNames('John', 'Smith')).to.be.a('string');
    });
    it('should combine two strings into one with a space separating them', () => {
      expect(combineNames('John', 'Smith')).to.equal('John Smith');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      expect(getGreeting('John')).to.be.a('string');
    });
    it('should return a greeting with the given name', () => {
      expect(getGreeting('John')).to.equal('Hello John!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      expect(getRectangleArea(5, 4)).to.be.a('number');
    });
    it('should return the area according to the given length and width', () => {
      expect(getRectangleArea(5, 2)).to.equal(10);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      expect(getTriangleArea(5, 4)).to.be.a('number');
    });
    it('should return the area of the given triangle', () => {
      expect(getTriangleArea(10, 4)).to.equal(20);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      expect(getCircleArea(5)).to.be.a('number');
    });
    it('should return the area of the given circle', () => {
      expect(getCircleArea(2)).to.equal(12.566370614359172);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      expect(getRectangularPrismVolume(5, 4, 3)).to.be.a('number');
    });
    it('should return the volume of the given rectangular prism', () => {
      expect(getRectangularPrismVolume(1, 2, 3)).to.equal(6);
    });
  });
});
