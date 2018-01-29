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
    it('should multiply by ten', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const x = 10;
      assert.equal(multiplyByTen(x), 100);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract five', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(10), 5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if lengths are the same', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('awesome', 'awesome'), true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if values are equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(5, 5), true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(89), true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(51), true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add two numbers together', () => {
      const add = funcs.add;
      assert.equal(add(5, 5), 10);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract two numbers', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(10, 5), 5);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide two numbers', () => {
      const divide = funcs.divide;
      assert.equal(divide(10, 5), 2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply two numbers', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(10, 10), 100);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return remainder of two numbers being divided', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(100, 11), 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return if a number is even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(10), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if a number is odd', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(9), true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the square of a number', () => {
      const square = funcs.square;
      assert.equal(square(5), 25);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of a number', () => {
      const cube = funcs.cube;
      assert.equal(cube(3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should raise a number to a power', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(5, 2), 25);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round a number', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(10, 3), 10);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round a number up', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(10, 3), 11);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add an exclamation point at the end', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      const str = 'Hello';
      const str2 = 'Hello!';
      assert.equal(addExclamationPoint(str), str2);
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should combine two name strings', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Vinnie', 'Scalco'), 'Vinnie Scalco');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a greeting to a user', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Vinnie'), 'Hello Vinnie!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return area of a rectangle given length and width', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(10, 15), 150);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return the area of a triangle given the base and height', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(10, 20), 100);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return area of circile given radius', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(5), (25 * Math.PI));
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the volum of a rect prism given width height and length', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(10, 4, 10), 400);
    });
  });
});
