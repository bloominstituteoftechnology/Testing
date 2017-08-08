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
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const result = multiplyByTen(5);
      assert.typeOf(result, 'number');
    });
    it('should return the correct result', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const result = multiplyByTen(5);
      assert.equal(result, 50, 'these numbers are equal');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      const result = subtractFive(10);
      assert.typeOf(result, 'number')
    });
    it('should return the correct result', () => {
      const subtractFive = funcs.subtractFive;
      const result = subtractFive(10);
      assert.equal(result, 5,  'these numbers are equal')
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      const result = areSameLength('abc', 'def');
      assert.typeOf(result, 'boolean')
    });
    it('should return true', () => {
      const areSameLength = funcs.areSameLength;
      const result = areSameLength('abc', 'def');
      assert.equal(result, true)
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual;
      const result = areEqual(3, 3);
      assert.typeOf(result, 'boolean')
    });
    it('should return a true', () => {
      const areEqual = funcs.areEqual;
      const result = areEqual(3, 3);
      assert.equal(result, true)
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const result = lessThanNinety(75);
      assert.typeOf(result, 'boolean')
    });
    it('should return a true', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const result = lessThanNinety(75);
      assert.equal(result, true)
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const result = greaterThanFifty(75);
      assert.typeOf(result, 'boolean')
    });
    it('should return true', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const result = greaterThanFifty(75);
      assert.equal(result, true)
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.add;
      const result = add(5, 5);
      assert.typeOf(result, 'number');
    });
    it('should return true', () => {
      const add = funcs.add;
      const result = add(5, 5);
      assert.equal(result, 10);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      const result = subtract(7, 3);
      assert.typeOf(result, 'number');
    });
    it('should return 4', () => {
      const subtract = funcs.subtract;
      const result = subtract(7, 3);
      assert.equal(result, 4);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      const result = divide(9, 3);
      assert.typeOf(result, 'number');
    });
    it('should return 3', () => {
      const divide = funcs.divide;
      const result = divide(9, 3);
      assert.equal(result, 3);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('should be a number', () => {
      const multiply = funcs.multiply;
      const result = multiply(5, 5);
      assert.typeOf(result, 'number')
    });
    it('should return 25', () => {
      const multiply = funcs.multiply;
      const result = multiply(5, 5);
      assert.equal(result, 25)
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      const result = getRemainder(5, 2);
      assert.typeOf(result, 'number');
    });
    it('should return 1', () => {
      const getRemainder = funcs.getRemainder;
      const result = getRemainder(5, 2);
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
      result = isEven(4)
      assert.typeOf(result, 'boolean');
    });
    it('should return true', () => {
      const isEven = funcs.isEven;
      result = isEven(4)
      assert.equal(result, true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      const isOdd = funcs.isOdd;
      const result = isOdd(7);
      assert.typeOf(result, 'boolean');
    });
    it('should return true', () => {
      const isOdd = funcs.isOdd;
      const result = isOdd(7);
      assert.equal(result, true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const square = funcs.square;
      result = square(5);
      assert.typeOf(result, 'number');
    });
    it('should return 25', () => {
      const square = funcs.square;
      result = square(5);
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
      const result = cube(2);
      assert.typeOf(result, 'number');
    });
    it('should return 8', () => {
      const cube = funcs.cube;
      const result = cube(2);
      assert.equal(result, 8);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      const result = raiseToPower(5, 2);
      assert.typeOf(result, 'number');
    });
    it('should return 10', () => {
      const raiseToPower = funcs.raiseToPower;
      const result = raiseToPower(5, 2);
      assert.equal(result, 25);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      const result = roundNumber(7.9)
      assert.typeOf(result, 'number');
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      const result = roundNumber(7.9)
      assert.equal(result, 8);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      const result = roundUp(7.2);
      assert.typeOf(result, 'number');
    });
    it('should return 8', () => {
      const roundUp = funcs.roundUp;
      const result = roundUp(7.2);
      assert.equal(result, 8);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function')
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      result = addExclamationPoint('hello');
      assert.typeOf(result, 'string')
    });
    it('should return hello!', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      result = addExclamationPoint('hello');
      assert.equal(result, 'hello!')
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      const result = combineNames('Ryan', 'Sherrill');
      assert.typeOf(result, 'string')
    });
    it('should return Ryan Sherrill', () => {
      const combineNames = funcs.combineNames;
      const result = combineNames('Ryan', 'Sherrill');
      assert.equal(result, 'Ryan Sherrill')
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      const result = getGreeting('Brian');
      assert.typeOf(result, 'string')
    });
    it('should return Hello Brian!', () => {
      const getGreeting = funcs.getGreeting;
      const result = getGreeting('Brian');
      assert.equal(result, 'Hello Brian!')
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      const result = getRectangleArea(5, 2);
      assert.typeOf(result, 'number')
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      const result = getRectangleArea(5, 2);
      assert.equal(result, 10)
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      const result = getTriangleArea(5, 2);
      assert.typeOf(result, 'number')
    });
    it('should return 5', () => {
      const getTriangleArea = funcs.getTriangleArea;
      const result = getTriangleArea(5, 2);
      assert.equal(result, 5)
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
      assert.typeOf(result, 'number')
    });
    it('should return 78.53981633974483', () => {
      const getCircleArea = funcs.getCircleArea;
      const result = getCircleArea(5);
      assert.equal(result, 78.53981633974483)
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const result = getRectangularPrismVolume(2, 2, 2);
      assert.typeOf(result, 'number')
    });
    it('should return 8', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const result = getRectangularPrismVolume(2, 2, 2);
      assert.equal(result, '8')
    });
  });

});