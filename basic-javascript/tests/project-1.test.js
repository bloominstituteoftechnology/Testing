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
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen(5), 'number');
    });
    it('should handle positive input', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(5), 50);
    });
    it('should handle negative input', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(-5), -50);
    });
    it('should handle a zero input', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(0), 0);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive(10), 'number');
    });
    it('should handle positive input', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(10), 5);
    });
    it('should handle negative input', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(-10), -15);
    });
    it('should handle a zero as input', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(0), -5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength('string', 'string'), 'boolean');
    });
    it('should handle same length strings', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('string1', 'string2'), true);
    });
    it('should handle dissimilar length strings', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('strings1', 'string2'), false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual(10, 10), 'boolean');
    });
    it('should handle same', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(10, 10), true);
    });
    it('should handle not same', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(10, -10), false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety(70), 'boolean');
    });
    it('should handle greater than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(100), false);
    });
    it('should handle less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(10), true);
    });
    it('should handle equal to 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(90), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty(25), 'boolean');
    });
    it('should handle greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(75), true);
    });
    it('should handle less than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(25), false);
    });
    it('should handle equal to 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(50), false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.add;
      assert.typeOf(add(5, 10), 'number');
    });
    it('should handle positives', () => {
      const add = funcs.add;
      assert.equal(add(5, 10), 15);
    });
    it('should handle negatives', () => {
      const add = funcs.add;
      assert.equal(add(-5, -10), -15);
    });
    it('should handle zero', () => {
      const add = funcs.add;
      assert.equal(add(0, 0), 0);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(10, 5), 'number');
    });
    it('should handle positive numbers', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(10, 5), 5);
    });
    it('should handle negative numbers', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(-10, -5), -5);
    });
    it('should handle mixed numbers', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(0, 5), -5);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      assert.typeOf(divide(10, 5), 'number');
    });
    it('should handle positive numbers', () => {
      const divide = funcs.divide;
      assert.equal(divide(10, 5), 2);
    });
    it('should handle negative numbers', () => {
      const divide = funcs.divide;
      assert.equal(divide(5, -10), -.5);
    });
    it('should handle zero', () => {
      const divide = funcs.divide;
      assert.equal(divide(0, 10), 0);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply(5, 10), 'number')
    });
    it('should handle positive numbers', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(5, 10), 50)
    });
    it('should handle negative numbers', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(5, -10), -50)
    });
    it('should handle negative numbers', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(5, -10), -50)
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder(27, 5), 'number');
    });
    it('should handle remainders', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(27, 5), 2);
    });
    it('should handle no remainders', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(25, 5), 0);
    });
    it('should handle zero', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(0, 5), 0);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(3), 'boolean');
    });
    it('should handle evens', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(3), false);
    });
    it('should handle odds', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(4), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(2), 'boolean');
    });
    it('should handle odds', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(3), true);
    });
    it('should handle evens', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(2), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const square = funcs.square;
      assert.typeOf(square(5), 'number');
    });
    it('should handle positives', () => {
      const square = funcs.square;
      assert.equal(square(5), 25);
    });
    it('should handle negatives', () => {
      const square = funcs.square;
      assert.equal(square(-5), 25);
    });
    it('should handle zero', () => {
      const square = funcs.square;
      assert.equal(square(0), 0);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      assert.typeOf(cube(5), 'number');
    });
    it('should handle positives', () => {
      const cube = funcs.cube;
      assert.equal(cube(5), 125);
    });
    it('should handle negatives', () => {
      const cube = funcs.cube;
      assert.equal(cube(-5), -125);
    });
    it('should handle zero', () => {
      const cube = funcs.cube;
      assert.equal(cube(0), 0);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower(5), 'number');
    });
    it('should handle positives', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(5, 2), 25);
    });
    it('should handle negatives', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(5, -2), .04);
      assert.equal(raiseToPower(-5, 2), 25);
    });
    it('should handle zero', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(0, 2), 0);
      assert.equal(raiseToPower(5, 0), 1);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber(5.26), 'number');
    });
    it('should handle rounding', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(5.26), 5);
      assert.equal(roundNumber(5.86), 6);
      assert.equal(roundNumber(5.5), 6);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp(5.26), 'number');
    });
    it('should handle rounding', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(5.26), 6);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function')
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint('Hello World'), 'string')
    });
    it('should be excited', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('Hello World'), 'Hello World!')
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames('Sarah', 'Majors'), 'string')
    });
    it('should handle combining the two strings', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Sarah', 'Majors'), 'Sarah Majors')
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting('Greg'), 'string')
    });
    it('should say hello', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Greg'), 'Hello Greg!')
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea(5, 10), 'number');
    });
    it('should find the area', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(5, 10), 50);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea(5, 10), 'number')
    });
    it('should fund the area', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(5, 10), 25)
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea(5), 'number')
    });
    it('should find the area', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(0), 0)
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume
      assert.typeOf(getRectangularPrismVolume(5, 5, 5), 'number')
    });
    it('should calculate the volume', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume
      assert.equal(getRectangularPrismVolume(5, 5, 5), 125)
    });
  });

});
