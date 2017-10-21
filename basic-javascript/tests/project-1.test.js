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
    it('should return the 10 times the given num', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(2)).to.equal(20);
    });
    it('should return the 10 times the given num', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(2)).to.be.a('number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return the 5 less than the given num', () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(10)).to.equal(5);
    });
    it('should be a number', () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(10)).to.be.a('number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if two strings are the same length', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('hai', 'bye')).to.equal(true);
    });
    it('should return false if two strings are not the same length', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('haii', 'bye')).to.equal(false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if the numbers are the same', () => {
      const areEqual = funcs.areEqual;
      expect(areEqual(2, 2)).to.equal(true);
    });
    it('should return false if the numbers are not the same', () => {
      const areEqual = funcs.areEqual;
      expect(areEqual(2, 3)).to.equal(false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if the number is less then ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(89)).to.equal(true);
    });
    it('should return false if the number is more then ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(90)).to.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if the number is greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(51)).to.equal(true);
    });
    it('should return false if the number is less than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(41)).to.equal(false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return 3 if the given numbers are 1 and 2', () => {
      const add = funcs.add;
      expect(add(1, 2)).to.equal(3);
    });
    it('should return a number', () => {
      const add = funcs.add;
      expect(add(1, 2)).to.be.a('number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return 2 if the given numbers are 12 and 10', () => {
      const subtract = funcs.subtract;
      expect(subtract(12, 10)).to.equal(2);
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      expect(subtract(12, 10)).to.be.a('number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return 2 if the given numbers are 10 and 5', () => {
      const divide = funcs.divide;
      expect(divide(10, 5)).to.equal(2);
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      expect(divide(12, 10)).to.be.a('number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return 50 if the given numbers are 10 and 5', () => {
      const multiply = funcs.multiply;
      expect(multiply(10, 5)).to.equal(50);
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      expect(multiply(12, 10)).to.be.a('number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return 0 if the given numbers are 10 and 5', () => {
      const getRemainder = funcs.getRemainder;
      expect(getRemainder(10, 5)).to.equal(0);
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      expect(getRemainder(12, 10)).to.be.a('number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if a number is even', () => {
      const isEven = funcs.isEven;
      expect(isEven(6)).to.equal(true);
    });
    it('should return false if a number is odd', () => {
      const isEven = funcs.isEven;
      expect(isEven(5)).to.equal(false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return false if a number is even', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(6)).to.equal(false);
    });
    it('should return true if a number is odd', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(5)).to.equal(true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a 49 if the given num is 7', () => {
      const square = funcs.square;
      expect(square(7)).to.equal(49);
    });
    it('should return a number', () => {
      const square = funcs.square;
      expect(square(8)).to.be.a('number');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a 8 if the given num is 2', () => {
      const cube = funcs.cube;
      expect(cube(2)).to.equal(8);
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      expect(cube(8)).to.be.a('number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return 8 if the given numbers are 2 and 3', () => {
      const raiseToPower = funcs.raiseToPower;
      expect(raiseToPower(2, 3)).to.equal(8);
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      expect(raiseToPower(8, 9)).to.be.a('number');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round 5.5 to 6', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(5.5)).to.equal(6);
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(5.5)).to.be.a('number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round 5.5 to 6', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(5.2)).to.equal(6);
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(5.2)).to.be.a('number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should include an !', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('Chris')).to.include('!');
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('Chris')).to.be.a('string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should include a space', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('Chris', 'Atoki')).to.include(' ');
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('Chris', 'Atoki')).to.be.a('string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return hello and a name', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('Chris')).to.equal('Hello Chris!');
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('Chris')).to.be.a('string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return 30 if the given numbers are 5 and 6', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(5, 6)).to.equal(30);
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(5, 6)).to.be.a('number');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return 25 if the given numbers are 10 and 5', () => {
      const getTriangleArea = funcs.getTriangleArea;
      expect(getTriangleArea(10, 5)).to.equal(25);
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      expect(getTriangleArea(5, 6)).to.be.a('number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      expect(getCircleArea(5)).to.be.a('number');
    });
    it('should return 79 if the given number is 5', () => {
      const getCircleArea = funcs.getCircleArea;
      expect(Math.round(getCircleArea(5))).to.equal(79);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(5, 6, 7)).to.be.a('number');
    });
    it('should return 210 if the given numbers are 5, 6, 7', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(5, 6, 7)).to.equal(210);
    });
  });
});
