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
    it('should output a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const num = Math.floor(Math.random()) * 10;
      assert.typeOf(multiplyByTen(num), 'number');
    });
    it('should properly multiply by 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const num = Math.floor(Math.random()) * 10;
      assert.equal(multiplyByTen(num), num * 10);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should output a number', () => {
      const subtractFive = funcs.subtractFive(7);
      assert.typeOf(subtractFive, 'number');
    });
    it('should properly subtract five', () => {
      const subtractFive = funcs.subtractFive;
      const num = Math.floor(Math.random()) * 10;
      assert.equal(subtractFive, num - 5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should output boolean', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength('this', 'that'), 'boolean');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should output boolean', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual(5, 6), 'boolean');
    });
    it('should correctly evaluate the equality of two values', () => {
      const areEqual = funcs.areEqual;
      const num1 = Math.floor(Math.random()) * 10;
      const num2 = Math.floor(Math.random()) * 10;
      assert.equal(areEqual(num1, num2), num1 === num2);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should output a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const num = Math.floor(Math.random()) * 200;
      assert.typeOf(lessThanNinety(num), 'boolean');
    });
    it('should properly evaluate if number is less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const num = Math.floor(Math.random()) * 1000;
      assert.equal(lessThanNinety(num), num < 90);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should output a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty(100), 'boolean');
    });
    it('should properly evaluate if number is greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(100), true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should output a number', () => {
      const add = funcs.add;
      assert.typeOf(add(2, 10), 'number');
    });
    it('should properly evaluate the addition of y to x', () => {
      const add = funcs.add;
      assert.equal(add(2, 10), 12);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should output a number', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(20, 83), 'number');
    });
    it('should properly evaluate the difference between x and y', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(20, 83), -63);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should output a number', () => {
      const divide = funcs.divide;
      assert.typeOf(divide(10, 3), 'number');
    });
    it('should properly evaluate the quotient', () => {
      const divide = funcs.divide;
      assert.equal(divide(10, 5), 2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});
