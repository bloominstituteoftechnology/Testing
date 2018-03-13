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
    it('should multiply num by 10', () => {
      const { multiplyByTen } = funcs;
      let result = 0;

      result = multiplyByTen(9);
      assert.equal(result, 90);

      result = multiplyByTen(5);
      assert.equal(result, 50);

      result = multiplyByTen(0);
      assert.equal(result, 0);
    });
    it('should return a number', () => {
      const { multiplyByTen } = funcs;
      let result = 0;
      result = multiplyByTen(5);
      assert.typeOf(result, 'number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract 5 from num', () => {
      const { subtractFive } = funcs;
      let result = subtractFive(9);
      assert.equal(result, 4);
    });
    it('should return a number', () => {
      const { subtractFive } = funcs;
      let result = 0;
      result = subtractFive(5);
      assert.typeOf(result, 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if strings are the same length', () => {
      const { areSameLength } = funcs;
      let result;

      result = areSameLength('Guelmis', 'Cortina');
      assert.equal(result, true);

      result = areSameLength('Hello', 'Wide World');
      assert.equal(result, false);

      result = areSameLength('', '');
      assert.equal(result, true);

      result = areSameLength('Hello', '');
      assert.equal(result, false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if x and y are equal', () => {
      const { areEqual } = funcs;
      let result;
      result = areEqual('hello', 'hello');
      assert.equal(result, true);

      result = areEqual('hello', 'world');
      assert.equal(result, false);

      result = areEqual('5', 5);
      assert.equal(result, false);

      result = areEqual('hello', {});
      assert.equal(result, false);

      result = areEqual('hello', 5);
      assert.equal(result, false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if num < 90', () => {
      const { lessThanNinety } = funcs;
      let result;
      result = lessThanNinety(90);
      assert.equal(result, false);

      result = lessThanNinety(89);
      assert.equal(result, true);

      result = lessThanNinety(100);
      assert.equal(result, false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if num > 50', () => {
      const { greaterThanFifty } = funcs;
      let result;
      result = greaterThanFifty(50);
      assert.equal(result, false);

      result = greaterThanFifty(89);
      assert.equal(result, true);

      result = greaterThanFifty(100);
      assert.equal(result, true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return the result of x + y', () => {
      const { add } = funcs;
      let result;
      result = add(90, 100);
      assert.equal(result, 190);

      result = add(2, 2);
      assert.equal(result, 4);

      result = add(0, 0);
      assert.equal(result, 0);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return the result of x - y', () => {
      const { subtract } = funcs;
      let result;
      result = subtract(90, 100);
      assert.equal(result, -10);

      result = subtract(2, 2);
      assert.equal(result, 0);

      result = subtract(0, 0);
      assert.equal(result, 0);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return the result of x / y', () => {
      const { divide } = funcs;
      let result;
      result = divide(90, 100);
      assert.equal(result, 0.9);

      result = divide(0, 2);
      assert.equal(result, 0);

      result = divide(4, 0);
      assert.equal(result, 'Infinity');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return the result of x * y', () => {
      const { multiply } = funcs;
      let result;
      result = multiply(90, 100);
      assert.equal(result, 9000);

      result = multiply(0, 2);
      assert.equal(result, 0);

      result = multiply(4, 0);
      assert.equal(result, 0);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the result of x % y', () => {
      const { getRemainder } = funcs;
      let result;
      result = getRemainder(90, 100);
      assert.equal(result, 90);

      result = getRemainder(0, 2);
      assert.equal(result, 0);

      result = getRemainder(9, 5);
      assert.equal(result, 4);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if num is even', () => {
      const { isEven } = funcs;
      let result;
      result = isEven(100);
      assert.equal(result, true);

      result = isEven(2);
      assert.equal(result, true);

      result = isEven(15);
      assert.equal(result, false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if num is odd', () => {
      const { isOdd } = funcs;
      let result;
      result = isOdd(100);
      assert.equal(result, false);

      result = isOdd(2);
      assert.equal(result, false);

      result = isOdd(15);
      assert.equal(result, true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the square of a number', () => {
      const { square } = funcs;
      let result;
      result = square(100);
      assert.equal(result, 10000);

      result = square(2);
      assert.equal(result, 4);

      result = square(15);
      assert.equal(result, 225);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of a number', () => {
      const { cube } = funcs;
      let result;
      result = cube(9);
      assert.equal(result, 729);

      result = cube(2);
      assert.equal(result, 8);

      result = cube(15);
      assert.equal(result, 3375);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return num raised to exponent', () => {
      const { raiseToPower } = funcs;
      let result;
      result = raiseToPower(2, 2);
      assert.equal(result, 4);

      result = raiseToPower(9, 3);
      assert.equal(result, 729);

      result = raiseToPower(15, 3);
      assert.equal(result, 3375);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round num', () => {
      const { roundNumber } = funcs;
      let result;
      result = roundNumber(10.9);
      assert.equal(result, 11);

      result = roundNumber(2);
      assert.equal(result, 2);

      result = roundNumber(15.4);
      assert.equal(result, 15);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round up num', () => {
      const { roundUp } = funcs;
      let result;
      result = roundUp(10.9);
      assert.equal(result, 11);

      result = roundUp(2);
      assert.equal(result, 2);

      result = roundUp(15.4);
      assert.equal(result, 16);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add the `!` char to a string', () => {
      const { addExclamationPoint } = funcs;
      let result;
      result = addExclamationPoint('Hello World');
      assert.equal(result, 'Hello World!');
    });
    it('should return a string', () => {
      const { addExclamationPoint } = funcs;
      let result;
      result = addExclamationPoint('Hello');
      assert.typeOf(result, 'string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should combine both inputs', () => {
      const { combineNames } = funcs;
      let result;
      result = combineNames('Guelmis', 'Cortina');
      assert.equal(result, 'Guelmis Cortina');
    });
    it('should return a string', () => {
      const { combineNames } = funcs;
      let result;
      result = combineNames('Guelmis', 'Cortina');
      assert.typeOf(result, 'string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return the greeting `Hello (name)!`', () => {
      const { getGreeting } = funcs;
      let result;
      result = getGreeting('Guelmis');
      assert.equal(result, 'Hello Guelmis!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the area of a rectangle', () => {
      const { getRectangleArea } = funcs;
      let result;
      result = getRectangleArea(20, 25);
      assert.equal(result, 500);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return the area of a triangle', () => {
      const { getTriangleArea } = funcs;
      let result;
      result = getTriangleArea(20, 25);
      assert.equal(result, 250);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the area of a circle', () => {
      const { getCircleArea } = funcs;
      let result;
      result = getCircleArea(2, 1);
      assert.equal(result, 12.566370614359172);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the volume of a rectangular prism', () => {
      const { getRectangularPrismVolume } = funcs;
      let result;
      result = getRectangularPrismVolume(5, 5, 10);
      assert.equal(result, 250);
    });
  });
});
