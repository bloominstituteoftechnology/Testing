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
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should correctly multiply by ten', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(222), 2220);
    });
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(typeof (multiplyByTen(34)), 'number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('subtractFive should correctly subtract 5 from a number', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(297), 292);
    });
    it('subtractFive should return a number', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(typeof (subtractFive(3922)), 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('areSameLength should return true if two strings are of equal length', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('cheese', 'spunky'), true);
    });
    it('areSameLength should return false if two strings are of unequal length', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('french', 'fries'), false);
    });
    it('areSameLength should return a boolean value', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(typeof (areSameLength('lambda', 'school')), 'boolean');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if two numbers are equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(3, 9/3), true);
    });
    it('should return false if two numbers are not equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(4, 20/4), false);
    });
    it('should return a boolean value', () => {
      const areEqual = funcs.areEqual;
      assert.equal(typeof (areEqual(3, 5)), 'boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if a number given is less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(88), true);
    });
    it('should return false if a number given is not less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(93), false);
    });
    it('should return a boolean value', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(typeof (lessThanNinety(91)), 'boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if a number given is greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(52), true);
    });
    it('should return false if a number given is not greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(49), false);
    });
    it('should return a boolean value', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(typeof (greaterThanFifty(42)), 'boolean');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should correctly add two numbers', () => {
      const add = funcs.add;
      assert.equal(add(4.5, 3.3), 7.8);
    });
    it('should return a number', () => {
      const add = funcs.add;
      assert.equal(typeof (add(5, 7)), 'number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should correctly subtract one number from another', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(10, 3.3), 6.7);
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      assert.equal(typeof (subtract(22, 19)), 'number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should correctly divide one number by another', () => {
      const divide = funcs.divide;
      assert.equal(divide(121, 11), 11);
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      assert.equal(typeof (divide(66, 6)), 'number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should correctly multiply two numbers together', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(3.3, 20), 66);
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      assert.equal(typeof (multiply(324, 2)), 'number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder of a number divided by another number', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(101, 9), 2);
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(typeof (getRemainder(230, 91)), 'number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if a number is even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(12), true);
    });
    it('should return false if a number is not even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(13), false);
    });
    it('should return a boolean value', () => {
      const isEven = funcs.isEven;
      assert.equal(typeof (isEven(321)), 'boolean');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should retun true if a number is odd', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(11), true);
    });
    it('should return false if a number is not odd', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(22), false);
    });
    it('should return a boolean value', () => {
      const isOdd = funcs.isOdd;
      assert.equal(typeof (isOdd(91)), 'boolean');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should correctly square a number', () => {
      const square = funcs.square;
      assert.equal(square(4), 16);
    });
    it('should return a number', () => {
      const square = funcs.square;
      assert.equal(typeof (square(5)), 'number');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should correctly cube a number', () => {
      const cube = funcs.cube;
      assert.equal(cube(6), 216);
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      assert.equal(typeof (cube(3)), 'number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should correctly raise a number to the power of the given exponent', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(3, 3), 27);
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(typeof (raiseToPower(34, 2)), 'number');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round a number to the nearest integer', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(3.33), 3);
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(typeof (roundNumber(45.83)), 'number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round up to the nearest integer larger than the number', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(3.4), 4);
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      assert.equal(typeof (roundUp(4.6)), 'number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should have added an exclamation point to the end of the string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('Hi there').charAt(addExclamationPoint('Hi there').length-1), '!');
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(typeof (addExclamationPoint('Sup, guys')), 'string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should properly combine a first name and a last name into a full name', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Abby', 'Tiffany'), 'Abby Tiffany');
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      assert.equal(typeof (combineNames('Steve', 'Rogers')), 'string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return "Hello [string entered]!" in this exact way', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Karen'), 'Hello Karen!');
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(typeof (getGreeting('Saraj')), 'string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should correctly multiply length times width', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(4, 5), 20);
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(typeof (getRectangleArea(5, 3.3)), 'number');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should correctly multiply in order to get correct area', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(3, 4), 6);
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(typeof (getTriangleArea(2, 43)), 'number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should correctly multiply to get area of the circle', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(3), 28.274333882308138);
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(typeof (getCircleArea(5)), 'number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should correctly multiply to find the volume', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(2, 3, 4), 24);
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(typeof (getRectangularPrismVolume(3, 4, 5)), 'number');
    });
  });
});
