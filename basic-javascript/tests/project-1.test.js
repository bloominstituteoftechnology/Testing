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
    const multiplyByTen = funcs.multiplyByTen;
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('expected 5 to equal 50', () => {
      assert.equal(multiplyByTen(5), 50);
    });
    it('should return a number', () => {
      assert.typeOf(multiplyByTen(1), 'number');
    });
  });
  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(subtractFive(1), 'number');
    });
    it('expected 20 to equal 15', () => {
      assert.equal(subtractFive(20), 15);
    });
  });
  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a number', () => {
      expect(1).to.be.a('number');
    });
    it('should return true if the arguments have the same length', () => {
      expect(5).to.equal(5);
    });
  });
  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      expect(areEqual()).to.be.a('boolean');
    });
    it('should return true if arguments are equal', () => {
      assert.equal(3, 3);
      assert.notEqual(10, 20);
      assert.equal('apple', 'apple');
      assert.notEqual('apple', 'orange');
    });
  });
  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(lessThanNinety(), 'boolean');
    });
    it('should return true if the argument is less than ninety', () => {
      expect(3).to.be.not.equal(90);
    });
  });
  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(greaterThanFifty(), 'boolean');
    });
    it('should return true if the argument is greater than fifty', () => {
      assert.isAbove(5, 2);
      assert.isBelow(3, 6);
    });
  });
  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(add(), 'number');
    });
    it('should return the sum of 2 numbers', () => {
      assert.equal(add(5, 5), 10);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(subtract(), 'number');
    });
    it('should return the difference of 2 numbers', () => {
      assert.equal(subtract(3, 2), 1);
    });
  });
  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(divide(), 'number');
    });
    it('should return a quotient of 2 numbers', () => {
      assert.equal(divide(2, 1), 2);
    });
  });
  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(multiply(), 'number');
    });
    it('should return a product of 2 numbers', () => {
      assert.equal(multiply(3, 2), 6);
    });
  });
  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRemainder(), 'number');
    });
    it('should return the remainder of 2 numbers', () => {
      assert.equal(getRemainder(11, 2), 1);
    });
  });
  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a false', () => {
      assert.typeOf(isEven(), 'boolean');
    });
    it('should return a number that is even', () => {
      assert.equal(isEven(2), true);
    });
    it('should return a number that is not even', () => {
      assert.equal(isEven(1), false);
    });
  });
  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return true or false', () => {
      assert.typeOf(isOdd(), 'boolean');
    });
    it('should return a number that is odd', () => {
      assert.equal(isOdd(1), true);
    });
    it('should return a number that is not odd', () => {
      assert.equal(isOdd(2), false);
    });
  });
  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(square(), 'number');
    });
    it('should return the square of a number', () => {
      assert.equal(square(12), 144);
    });
  });
  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(cube(), 'number');
    });
    it('should return the square of a number', () => {
      assert.equal(cube(3), 27);
    });
  });
  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(raiseToPower(), 'number');
    });
    it('should return the square of a number', () => {
      assert.equal(raiseToPower(2, 3), 8);
    });
  });
  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(roundNumber(), 'number');
    });
    it('should return the rounded number', () => {
      assert.equal(roundNumber(4.3), 4);
      assert.equal(roundNumber(4.5), 5);
    });
  });
  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(roundUp(), 'number');
    });
    it('should return a number rounded up', () => {
      assert.equal(roundUp(4.3), 5);
    });
  });
  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string with an exclamation', () => {
      assert.typeOf(addExclamationPoint(), 'string');
    });
    it('should add an exclamtion point to the end of the string', () => {
      assert.equal(addExclamationPoint('hello world'), 'hello world!');
    });
  });
  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string of combined names', () => {
      assert.typeOf(combineNames(), 'string');
    });
    it('should return a string of combined names', () => {
      assert.equal(combineNames('kenny', 'pham'), 'kenny pham');
    });
  });
  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string Hello (name)', () => {
      assert.typeOf(getGreeting(), 'string');
    });
    it('should return a string of Hello + (name)', () => {
      assert.equal(getGreeting('Kenny'), 'Hello Kenny!');
    });
  });
  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRectangleArea(), 'number');
    });
    it('should return the area of a rectangle', () => {
      assert.equal(getRectangleArea(4, 2), 8);
    });
  });
  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getTriangleArea(), 'number');
    });
    it('should return the area of a triangle', () => {
      assert.equal(getTriangleArea(4, 2), 4);
    });
  });
  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getCircleArea(), 'number');
    });
    it('should return the area of a cicle', () => {
      assert.equal(getCircleArea(2, 2), 12.566370614359172);
    });
  });
  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRectangularPrismVolume(), 'number');
    });
    it('should return the area rectangular prism', () => {
      assert.equal(getRectangularPrismVolume(2, 2, 2), 8);
    });
  });
});
