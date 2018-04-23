/* eslint-disable prefer-destructuring */

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
    it('should multiply a number by 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(3), 30);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return the difference of a num - 5', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(6), 1);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('hello', 'hello'), true);
    });
    it('should return str1 and str2 are the same length', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('hello', 'hello'), true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(6, 6), true);
    });
    it('should return X and Y are equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(6, 6), true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if the number is less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(20), true);
    });
    it('should return false if the number is greater than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(100), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if the number is greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(70), true);
    });
    it('should return false if the number is less than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(20), false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return the sum of x and y', () => {
      const add = funcs.add;
      assert.equal(add(3, 5), 8);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return the difference of x and y', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(8, 4), 4);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return the remainder of x and y', () => {
      const divide = funcs.divide;
      assert.equal(divide(25, 5), 5);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return the product of x and y', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(5, 5), 25);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder of x % y', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(15, 6), 3);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true when the input number is even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(2), true);
    });
    it('should return false when the input number is odd', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(35), false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return false when the input number is even', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(2), false);
    });
    it('should return true when the input number is odd', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(35), true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the square of a number', () => {
      const square = funcs.square;
      assert.equal(square(5, 5), 25);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of a number', () => {
      const cube = funcs.cube;
      assert.equal(cube(3, 3, 3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number to a certain power', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(5, 5, 5, 5), 3125);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a rounded number', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(2.52), 3);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number rounded up', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(2.52), 3);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add an exclamation point to the end of the word', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('string'), 'string!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should combine first and last name', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Nick', 'Coultas'), 'Nick Coultas');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should ouput a greeting when given a specific name', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Nick'), 'Hello Nick!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should give the area of a rectangle', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(6, 4), 24);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should give the area of a Triangle', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(6, 7), 21);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should give the area of a Circle', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(3, 3), 28.274333882308138);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should give the volume of a Rectangular Prism', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(4, 4, 6), 96);
    });
  });
});
