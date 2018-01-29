const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  const multiplyByTen = funcs.multiplyByTen;
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return a number', () => {
      assert.typeOf(multiplyByTen(1), 'number');
    });
    it('should return the number multiplied by 10', () => {
      assert.strictEqual(multiplyByTen(1), 10);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(subtractFive(10), 'number');
    });
    it('should return the number subtracted by Five', () => {
      assert.strictEqual(subtractFive(10), 5);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(areSameLength('test', 'test1'), 'boolean');
    });
    it('should return false for test1 = test', () => {
      assert.strictEqual(areSameLength('test', 'test1'), false);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(areEqual('test', 'test1'), 'boolean');
    });
    it('should return false for test1 = test', () => {
      assert.strictEqual(areEqual('test', 'test1'), false);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(lessThanNinety(80), 'boolean');
    });
    it('should return a true for 80 < 90', () => {
      assert.strictEqual(lessThanNinety(80), true);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      assert.typeOf(greaterThanFifty(80), 'boolean');
    });
    it('should return a true for 80 > 50', () => {
      assert.strictEqual(greaterThanFifty(80), true);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(add(1, 2), 'number');
    });
    it('should return 3 for (1+2)', () => {
      assert.strictEqual(add(1, 2), 3);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(subtract(2, 1), 'number');
    });
    it('should return 1 for (2-1)', () => {
      assert.strictEqual(subtract(2, 1), 1);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(divide(10, 5), 'number');
    });
    it('should return 2 for (10/5)', () => {
      assert.strictEqual(divide(10, 5), 2);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(multiply(10, 5), 'number');
    });
    it('should return 50 for (10*5)', () => {
      assert.strictEqual(multiply(10, 5), 50);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRemainder(10, 3), 'number');
    });
    it('should return 3.33.. for (10/3)', () => {
      assert.strictEqual(getRemainder(10, 3), (10 % 3));
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(isEven(10), 'boolean');
    });
    it('should return true for (10)', () => {
      assert.strictEqual(isEven(10), true);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(isOdd(10), 'boolean');
    });
    it('should return true for (13)', () => {
      assert.strictEqual(isOdd(13), true);
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(square(16), 'number');
    });
    it('should return 16 for (4)', () => {
      assert.strictEqual(square(4), 16);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(cube(3), 'number');
    });
    it('should return 27 for (3)', () => {
      assert.strictEqual(cube(3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(raiseToPower(3, 2), 'number');
    });
    it('should return 9 for (3,2)', () => {
      assert.strictEqual(raiseToPower(3, 2), 9);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(roundNumber(3.33333), 'number');
    });
    it('should return 3 for (3.3333)', () => {
      assert.strictEqual(roundNumber(3.3333), 3);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(roundUp(3.33333), 'number');
    });
    it('should return 3 for (3.3333)', () => {
      assert.strictEqual(roundUp(3.3333), 4);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(addExclamationPoint('test'), 'string');
    });
    it(`should return 'test!' for ('test')`, () => {
      assert.strictEqual(addExclamationPoint('test'), 'test!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(combineNames('test', 'test2'), 'string');
    });
    it(`should return 'test test2' for ('test', 'test2')`, () => {
      assert.strictEqual(combineNames('test', 'test2'), 'test test2');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      assert.typeOf(getGreeting('test'), 'string');
    });
    it(`should return 'Hello test!' for ('test')`, () => {
      assert.strictEqual(getGreeting('test'), 'Hello test!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getRectangleArea(2, 5), 'number');
    });
    it('should return the area of a rectangle width * length', () => {
      assert.strictEqual(getRectangleArea(2, 5), 10);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getTriangleArea(2, 5), 'number');
    });
    it('should return the area of a Triangle width * length / 2', () => {
      assert.strictEqual(getTriangleArea(2, 5), 5);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(getCircleArea(2), 'number');
    });
    it('should return the area of a circle', () => {
      assert.strictEqual(getCircleArea(2), Math.PI * 2 * 2);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const grpv = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(grpv, 'function');
    });
    it('should return a number', () => {
      assert.typeOf(grpv(1, 2, 3), 'number');
    });
    it('should return the volume of a rectangular prism', () => {
      assert.strictEqual(grpv(1, 2, 3), 6);
    });
  });
});
