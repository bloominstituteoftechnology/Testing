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
    it('should give specific output by given input', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(5), 50);
    });
    it('should have correct type output', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen(4), 'number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should give specific output by given input', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(10), 5);
    });
    it('should have correct type output', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive(4), 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });

    it('should give specific output by given input', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength([1,2,3], [2,3,4]), true);
    });
    it('should have correct type output', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength([2,3,4], [1,2]), 'boolean');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });

    it('should give specific output by given input', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(2, 4), false);
    });
    it('should have correct type output', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual(2, 4), 'boolean');
    });

  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });

    it('should give specific output by given input', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(2), true);
    });
    it('should have correct type output', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety(4), 'boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should give specific output by given input', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(2), false);
    });
    it('should have correct type output', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty(4), 'boolean');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });

    it('should give specific output by given input', () => {
      const add = funcs.add;
      assert.equal(add(2, 4), 6);
    });
    it('should have correct type output', () => {
      const add = funcs.add;
      assert.typeOf(add(4, 6), 'number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should give specific output by given input', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(2, 4), -2);
    });
    it('should have correct type output', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(4, 6), 'number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });

    it('should give specific output by given input', () => {
      const divide = funcs.divide;
      assert.equal(divide(2, 1), 2);
    });
    it('should have correct type output', () => {
      const divide = funcs.divide;
      assert.typeOf(divide(4, 6), 'number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should give specific output by given input', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(2, 1), 2);
    });
    it('should have correct type output', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply(4, 6), 'number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should give specific output by given input', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(2, 1), 0);
    });
    it('should have correct type output', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder(4, 6), 'number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should give specific output by given input', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(2), true);
    });
    it('should have correct type output', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(3), 'boolean');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should give specific output by given input', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(2), false);
    });
    it('should have correct type output', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(3), 'boolean');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should give specific output by given input', () => {
      const square = funcs.square;
      assert.equal(square(2), 4);
    });
    it('should have correct type output', () => {
      const square = funcs.square;
      assert.typeOf(square(3), 'number');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should give specific output by given input', () => {
      const cube = funcs.cube;
      assert.equal(cube(2), 8);
    });
    it('should have correct type output', () => {
      const cube = funcs.cube;
      assert.typeOf(cube(3), 'number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should give specific output by given input', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2, 3), 8);
    });
    it('should have correct type output', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower(3, 5), 'number');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should give specific output by given input', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(2.6), 3);
    });
    it('should have correct type output', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber(3.7), 'number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should give specific output by given input', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(2.2), 3);
    });
    it('should have correct type output', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp(3.7), 'number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should give specific output by given input', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('hello'), 'hello!');
    });
    it('should have correct type output', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint('world'), 'string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should give specific output by given input', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('hello', 'world'), 'hello world');
    });
    it('should have correct type output', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames('world', 'peace'), 'string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should give specific output by given input', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('world'), 'Hello world!');
    });
    it('should have correct type output', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting('world'), 'string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should give specific output by given input', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(3, 4), 12);
    });
    it('should have correct type output', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea(2, 5), 'number');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should give specific output by given input', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(3, 4), 6);
    });
    it('should have correct type output', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea(2, 5), 'number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should give specific output by given input', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(3), Math.PI * 9);
    });
    it('should have correct type output', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea(2), 'number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should give specific output by given input', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(3, 4, 5), 60);
    });
    it('should have correct type output', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume(2, 4, 5), 'number');
    });
  });
});
