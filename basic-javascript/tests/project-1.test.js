/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of
//         - a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    const { multiplyByTen } = funcs;
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should return a number', () => {
      const result = multiplyByTen(1);
      assert.typeOf(result, 'number');
    });
    it('should return the correct number', () => {
      const tests = [5, 23, 0, -5];
      const answers = [50, 230, 0, -50];
      tests.forEach((each, i) => {
        const result = multiplyByTen(each);
        assert.equal(result, answers[i]);
      });
    });
  });

  describe('`subtractFive`', () => {
    const { subtractFive } = funcs;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const result = subtractFive(10);
      assert.typeOf(result, 'number');
    });
    it('should return the correct number', () => {
      const tests = [5, 23, 0, -5];
      const answers = [0, 18, -5, -10];
      tests.forEach((each, i) => {
        const result = subtractFive(each);
        assert.equal(result, answers[i]);
      });
    });
  });

  describe('`areSameLength`', () => {
    const { areSameLength } = funcs;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const result = areSameLength('this', 'that');
      assert.typeOf(result, 'boolean');
    });
    it('should return the correct boolean value', () => {
      const tests = [['this', 'that'], ['this', 'other thing']];
      const answers = [true, false];
      tests.forEach((each, i) => {
        const result = areSameLength(each[0], each[1]);
        assert.equal(result, answers[i]);
      });
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'number');
    });
  });

  describe('`lessThanNinety`', () => {
    const { lessThanNinety } = funcs;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean value', () => {
      const result = lessThanNinety(20);
      assert.typeOf(result, 'boolean');
    });
    it('should return the corrent boolean value', () => {
      const tests = [80, 90, 100, 0, -90];
      const answers = [true, false, false, true, true];
      tests.forEach((each, i) => {
        const result = lessThanNinety(each);
        assert.equal(result, answers[i]);
      });
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'number');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'number');
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
    const { isEven } = funcs;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean value', () => {
      const result = isEven(20);
      assert.typeOf(result, 'boolean');
    });
    it('should return the corrent boolean value', () => {
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
    const { addExclamationPoint } = funcs;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      const result = addExclamationPoint('Nathan kicks ass');
      assert.typeOf(result, 'string');
    });
    it('should properly add an exclamation point to the end of the string', () => {
      const tests = ['Nathan kicks ass', ''];
      const answers = ['Nathan kicks ass!', '!'];
      tests.forEach((each, i) => {
        const result = addExclamationPoint(each);
        assert.equal(result, answers[i]);
      });
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
