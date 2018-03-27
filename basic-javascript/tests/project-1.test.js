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
    it('output should return a number', () => {
      assert.typeOf(funcs.multiplyByTen(10), 'number');
    });
    it('output should return correct number', () => {
      assert.equal(funcs.multiplyByTen(10), 100);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('output should return a number', () => {
      assert.typeOf(funcs.subtractFive(20), 'number');
    });
    it('output should return correct number', () => {
      assert.equal(funcs.subtractFive(20), 15);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('output should return a boolean', () => {
      assert.typeOf(funcs.areSameLength('Dani', 'kitty'), 'boolean');
    });
    it('output should return correct boolean', () => {
      assert.isTrue(funcs.areSameLength('hello', 'world'));
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('output should return a boolean', () => {
      assert.typeOf(funcs.areEqual('bird', 'Hook'), 'boolean');
    });
    it('output should return correct boolean', () => {
      assert.isFalse(funcs.areEqual('Leon', 'Terrie'));
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('output should return a boolean', () => {
      assert.typeOf(funcs.lessThanNinety(89), 'boolean');
    });
    it('should return the corrent boolean value', () => {
      const tests = [80, 90, 100, 0, -90];
      const answers = [true, false, false, true, true];
      tests.forEach((each, i) => {
        const result = funcs.lessThanNinety(each);
        assert.equal(result, answers[i]);
      });
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('output should return a boolean', () => {
      assert.typeOf(funcs.greaterThanFifty(57), 'boolean');
    });
    it('output should return correct boolean', () => {
      assert.isTrue(funcs.greaterThanFifty(67), 68);
      assert.isFalse(funcs.greaterThanFifty(13, 40));
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(funcs.add(6, 5), 'number');
    });
    it('should return correct number', () => {
      assert.equal(funcs.add(6, 5), 11);
      assert.equal(funcs.add(10, 5), 15);
      assert.equal(funcs.add(-2, 5), 3);
      assert.equal(funcs.add(6, 30), 36);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(funcs.subtract(6, 5), 'number');
    });
    it('should return correct number', () => {
      assert.equal(funcs.subtract(6, 5), 1);
      assert.equal(funcs.subtract(10, 5), 5);
      assert.equal(funcs.subtract(-2, 5), -7);
      assert.equal(funcs.subtract(100, 60), 40);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const { isEven } = funcs;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean value', () => {
      const { isEven } = funcs;
      const result = isEven(20);
      assert.typeOf(result, 'boolean');
    });
    it('should return the corrent boolean value', () => {
      const { isEven } = funcs;
      const tests = [1, 2, 3, 0, -1, -2];
      const answers = [false, true, false, true, false, true];
      tests.forEach((each, i) => {
        const result = isEven(each);
        assert.equal(result, answers[i]);
      });
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'number');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'object');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'object');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'object');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'object');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'object');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'string');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'string');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'string');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'string');
    });
  });
});
