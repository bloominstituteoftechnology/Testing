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
    it('should return the number times 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(10)).to.equal(100);
    });
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen(3);
      assert.typeOf(multiplyByTen, 'number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return the number minus 10', () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(39)).to.equal(34);
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive(3);
      assert.typeOf(subtractFive, 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true for same string length', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('sloop', 'scoop')).to.equal(true);
    });
    it('should return false for different string length', () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength('sloop', 'slop')).to.equal(false);
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength('Cole', 'Code');
      assert.typeOf(areSameLength, 'boolean');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if the two arguments are equal', () => {
      const areEqual = funcs.areEqual;
      expect(areEqual(23, 23)).to.equal(true);
    });
    it('should return false if the two arguments are not equal', () => {
      const areEqual = funcs.areEqual;
      expect(areEqual(23, -23)).to.equal(false);
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual(7, 7);
      assert.typeOf(areEqual, 'boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if the argument is less than ninty', () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(89)).to.equal(true);
    });
    it('should return false if the argument is greater than or equal to 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(90)).to.equal(false);
      expect(lessThanNinety(100)).to.equal(false);
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety(89);
      assert.typeOf(lessThanNinety, 'boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if the argument is greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(89)).to.equal(true);
    });
    it('should return false if the argument is less than or equal to fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(50)).to.equal(false);
      expect(greaterThanFifty(47)).to.equal(false);
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty(89);
      assert.typeOf(greaterThanFifty, 'boolean');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add two arguments correctly', () => {
      const add = funcs.add;
      expect(add(2, 3)).to.equal(5);
      expect(add('shweep', 'zeep')).to.equal('shweepzeep' || 'zeepshweep');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subctract two arguments correctly', () => {
      const subtract = funcs.subtract;
      expect(subtract(5, 6)).to.equal(-1);
      expect(subtract(1085, 980)).to.equal(105);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should devide two arguments correctly', () => {
      const divide = funcs.divide;
      expect(divide(6, 6)).to.equal(1);
      expect(divide(100, -5)).to.equal(-20);
      expect(divide(-100, -5)).to.equal(20);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply two arguments correctly', () => {
      const multiply = funcs.multiply;
      expect(multiply(1, 6)).to.equal(6);
      expect(multiply(40, -2)).to.equal(-80);
      expect(multiply(-40, -2)).to.equal(80);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should get the remainder of two arguments', () => {
      const getRemainder = funcs.getRemainder;
      expect(getRemainder(6, 6)).to.equal(0);
      expect(getRemainder(40, 39)).to.equal(1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(7), 'boolean');
    });
    it('should true if x is an even number', () => {
      const isEven = funcs.isEven;
      expect(isEven(100)).to.equal(true);
    });
    it('should false if x is an odd number', () => {
      const isEven = funcs.isEven;
      expect(isEven(101)).to.equal(false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(7), 'boolean');
    });
    it('should true if x is an odd number', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(5)).to.equal(true);
    });
    it('should false if x is an even number', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(6)).to.equal(false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should square a number', () => {
      const square = funcs.square;
      expect(square(5)).to.equal(25);
      expect(square(11)).to.equal(121);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should cube a number', () => {
      const cube = funcs.cube;
      expect(cube(2)).to.equal(8);
      expect(cube(5)).to.equal(125);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should raise a number to an exponent', () => {
      const raiseToPower = funcs.raiseToPower;
      expect(raiseToPower(2, 2)).to.equal(4);
      expect(raiseToPower(3, 5)).to.equal(243);
      expect(raiseToPower(1, 5)).to.equal(1);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round a number down correctly', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(2.4)).to.equal(2);
    });
    it('should round a number up correctly', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(29.5)).to.equal(30);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round a number up correctly', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(20.000001)).to.equal(21);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add a ! to the end of a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('woooaaah')).to.equal('woooaaah!');
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint(40);
      assert.typeOf(addExclamationPoint, 'string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return combined names with a space between', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('Connan', 'Mockasin')).to.equal('Connan Mockasin');
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames(9, 0);
      assert.typeOf(combineNames, 'string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting('world!'), 'string');
    });
    it('should return Hello and what is passed in and an exclamation point', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('dude')).to.equal('Hello dude!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should get correct area', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(3, 3)).to.equal(9);
      expect(getRectangleArea(10, 12)).to.equal(120);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should get correct area', () => {
      const getTriangleArea = funcs.getTriangleArea;
      expect(getTriangleArea(10, 5)).to.equal(25);
      expect(getTriangleArea(5, 8)).to.equal(20);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should get correct area', () => {
      const getCircleArea = funcs.getCircleArea;
      expect(getCircleArea(1).toFixed(2)).to.equal('3.14');
      expect(getCircleArea(5).toFixed(2)).to.equal('78.54');
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea(98), 'number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should get correct volume', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(1, 2, 3)).to.equal(6);
      expect(getRectangularPrismVolume(5, 5, 2)).to.equal(50);
    });
  });
});
