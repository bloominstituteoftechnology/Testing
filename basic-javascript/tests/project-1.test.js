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
    it('should be of type number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      number = multiplyByTen(2);
      assert.typeOf(number, 'number')
    })
    it('should return 20', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(2), 20);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should be of type number', () => {
      const subtractFive = funcs.subtractFive;
      let number = subtractFive(20);
      assert.typeOf(number, 'number')
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      const bool = areSameLength('one', 'see');
      assert.isBoolean(bool);
    });
    it('should return true', () => {
      const areSameLength = funcs.areSameLength;
      const isTrue = areSameLength('one', 'see');
      assert.equal(isTrue, true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual;
      const bool = areEqual(10, 10);
      assert.isBoolean(bool);
    });
    it('should return true', () => {
      const areEqual = funcs.areEqual;
      const result = areEqual(10, 10);
      assert.isOk(result);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const bool = lessThanNinety(80);
      assert.isBoolean(bool);
    });
    it('should return true', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const result = lessThanNinety(80);
      assert.isOk(result);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const result = greaterThanFifty(60);
      assert.isBoolean(result);
    });
    it('should return false', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const result = greaterThanFifty(40);
      assert.isNotOk(result);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.add;
      const result = add(20, 10);
      assert.typeOf(result, 'number');
    });
    it('should return 30', () => {
      const add = funcs.add;
      const result = add(10, 20);
      assert.equal(result, 30);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      const result = subtract(100 - 40);
      assert.typeOf(result, 'number');
    });
    it('should return 60', () => {
      const subtract = funcs.subtract;
      const result = subtract(100, 40);
      assert.equal(result, 60);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      const result = divide(10, 2);
      assert.typeOf(result, 'number');
    });
    it('should return 5', () => {
      const divide = funcs.divide;
      const result = divide(10, 2);
      assert.equal(result, 5);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      const result = multiply(10, 2);
      assert.typeOf(result, 'number');
    });
    it('should return 50', () => {
      const multiply = funcs.multiply;
      const result = multiply(10, 5);
      assert.equal(result, 50);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      const result = getRemainder(10, 3);
      assert.typeOf(result, 'number');
    });
    it('should return 1', () => {
      const getRemainder = funcs.getRemainder;
      const result = getRemainder(10, 3);
      assert.equal(result, 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      const isEven = funcs.isEven;
      const result = isEven(10, 2);
      assert.isBoolean(result);
    });
    it('should return true', () => {
      const isEven = funcs.isEven;
      const result = isEven(2);
      assert.isOk(result);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      const isOdd = funcs.isOdd;
      const result = isOdd(10);
      assert.isBoolean(result);
    });
    it('should return false', () => {
      const isOdd = funcs.isOdd;
      const result = isOdd(2);
      assert.isNotOk(result);
    });
    it('should return true', () => {
      const isOdd = funcs.isOdd;
      const result = isOdd(5);
      assert.isOk(result);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const square = funcs.square;
      const result = square(3);
      assert.typeOf(result, 'number');
    });
    it('should return 25', () => {
      const square = funcs.square;
      const result = square(5);
      assert.equal(result, 25);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      const result = cube(3);
      assert.typeOf(result, 'number');
    });
    it('should return 27', () => {
      const cube = funcs.cube;
      const result = cube(3);
      assert.equal(result, 27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      const result = raiseToPower(3, 2);
      assert.typeOf(result, 'number');
    });
    it('should return 32', () => {
      const raiseToPower = funcs.raiseToPower;
      const result = raiseToPower(2, 5);
      assert.equal(result, 32);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      const result = roundNumber(3.23);
      assert.typeOf(result, 'number');
    });
    it('should return 32', () => {
      const roundNumber = funcs.roundNumber;
      const result = roundNumber(3.23);
      assert.equal(result, 3);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      const result = roundUp(4.01);
      assert.typeOf(result, 'number');
    });
    it('should return 10', () => {
      const roundUp = funcs.roundUp;
      const result = roundUp(9.01);
      assert.equal(result, 10);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function')
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      const result = addExclamationPoint('hello');
      assert.typeOf(result, 'string');
    });
    it('should add `!` to end of the string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      const result = addExclamationPoint('hello');
      const expectedResult = 'hello!'
      assert.equal(result, expectedResult);
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      const result = combineNames('John', 'Doe');
      assert.typeOf(result, 'string');
    });
    it('should return `Jane Doe`', () => {
      const combineNames = funcs.combineNames;
      const result = combineNames('Jane', 'Doe');
      const expectedResult = 'Jane Doe';
      assert.equal(result, expectedResult);
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      const result = getGreeting('John');
      assert.typeOf(result, 'string');
    });
    it('should return `Hello John!`', () => {
      const getGreeting = funcs.getGreeting;
      const result = getGreeting('John');
      const expectedResult = 'Hello John!'
      assert.equal(result, expectedResult);
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      const result = getTriangleArea(5, 12);
      assert.typeOf(result, 'number');
    });
    it('should return 275', () => {
      const getTriangleArea = funcs.getTriangleArea;
      const result = getTriangleArea(10, 55);
      assert.equal(result, 275);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      const result = getCircleArea(5);
      assert.typeOf(result, 'number');
    });
    it('should return 452', () => {
      const getCircleArea = funcs.getCircleArea;
      const result = getCircleArea(12);
      assert.equal(Math.round(result), 452);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const result = getRectangularPrismVolume(5, 5, 5);
      assert.typeOf(result, 'number');
    });
    it('should return 1800', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const result = getRectangularPrismVolume(12, 15, 10);
      assert.equal(result, 1800);
    });
  });
});
