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
    const multiplyByTen = funcs.multiplyByTen;
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should be a number', () => {
      const result = multiplyByTen(10);
      assert.typeOf(result, 'number');
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a 5', () => {
      const result = subtractFive(10);
      assert.equal(result, 5);
    });
    it('should return -5', () => {
      const result = subtractFive(0);
      assert.equal(result, -5);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true', () => {
      const result = areSameLength('True', 'True');
      assert.equal(result, true);
    });
    it('should return false', () => {
      const result = areSameLength('False', 'True');
      assert.equal(result, false);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return true', () => {
      const result = areEqual(3, 3);
      assert.equal(result, true);
    });
    it('should return true', () => {
      const result = areEqual('5', '5');
      assert.equal(result, true);
    });
    it('should return false', () => {
      const result = areEqual('52', '5');
      assert.equal(result, false);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true', () => {
      const result = lessThanNinety(80);
      assert.equal(result, true);
    });
    it('should return false', () => {
      const result = lessThanNinety(91);
      assert.equal(result, false);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true', () => {
      const result = greaterThanFifty(70);
      assert.equal(result, true);
    });
    it('should return false', () => {
      const result = greaterThanFifty(45);
      assert.equal(result, false);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return 20', () => {
      const result = add(17, 3);
      assert.equal(result, 20);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return 20', () => {
      const result = subtract(30, 10);
      assert.equal(result, 20);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return 3', () => {
      const result = divide(30, 10);
      assert.equal(result, 3);
    });
    it('should return -3', () => {
      const result = divide(30, -10);
      assert.equal(result, -3);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return 100', () => {
      const result = multiply(10, 10);
      assert.equal(result, 100);
    });
    it('should return -24', () => {
      const result = multiply(3, -8);
      assert.equal(result, -24);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return 1', () => {
      const result = getRemainder(25, 8);
      assert.equal(result, 1);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return true', () => {
      const result = isEven(2);
      assert.equal(result, true);
    });
    it('should return false', () => {
      const result = isEven(1);
      assert.equal(result, false);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return false', () => {
      const result = isOdd(2);
      assert.equal(result, false);
    });
    it('should return true', () => {
      const result = isOdd(1);
      assert.equal(result, true);
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return 25', () => {
      const result = square(5);
      assert.equal(result, 25);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return 27', () => {
      const result = cube(3);
      assert.equal(result, 27);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return 8', () => {
      const result = raiseToPower(2, 3);
      assert.equal(result, 8);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return 2', () => {
      const result = roundNumber(2.4);
      assert.equal(result, 2);
    });
    it('should return 3', () => {
      const result = roundNumber(2.6);
      assert.equal(result, 3);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return 5', () => {
      const result = roundUp(4.1);
      assert.equal(result, 5);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return hello world!', () => {
      const result = addExclamationPoint('hello world');
      assert.equal(result, 'hello world!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return Sergey Nam', () => {
      const result = combineNames('Sergey', 'Nam');
      assert.equal(result, 'Sergey Nam');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return Hello Sergey!', () => {
      const result = getGreeting('Sergey');
      assert.equal(result, 'Hello Sergey!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return 24', () => {
      const result = getRectangleArea(6, 4);
      assert.equal(result, 24);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return 12', () => {
      const result = getTriangleArea(6, 4);
      assert.equal(result, 12);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return ~154', () => {
      const result = getCircleArea(7);
      assert.equal(result, Math.PI * 49);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return 64', () => {
      const result = getRectangularPrismVolume(8, 4, 2);
      assert.equal(result, 64);
    });
  });
});
