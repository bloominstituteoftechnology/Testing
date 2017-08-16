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
      assert.equal(subtractFive(num), num - 5);
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
    it('should output a number', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder(100, 37), 'number');
    });
    it('should properly evaluate the remainder of the quotient', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(100, 37), 26);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should output a boolean', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(5), 'boolean');
    });
    it('should properly evaluate whether number is even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(5), false);
      assert.equal(isEven(4), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should output a boolean', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(8), 'boolean');
    });
    it('should properly evaluate if number is odd', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(8), false);
      assert.equal(isOdd(5), true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should output a number', () => {
      const square = funcs.square;
      assert.typeOf(square(100), 'number');
    });
    it('should properly evaluate the square of a number', () => {
      const square = funcs.square;
      assert.equal(square(100), 10000);
      assert.equal(square(1), 1);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should output a number', () => {
      const cube = funcs.cube;
      assert.typeOf(cube(9), 'number');
    });
    it('should properly evaluate the cube of a number', () => {
      const cube = funcs.cube;
      assert.equal(cube(2), 8);
      assert.equal(cube(1), 1);
      assert.equal(cube(3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should output a number', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower(2, 6), 'number');
    });
    it('should properly evaluate the vaue of the number raised to the exponent', () => {
      const raiseToPower = funcs.raiseToPower;
      const num = Math.floor(Math.random()) * 10;
      const exponent = Math.floor(Math.random()) * 10;
      assert.equal(raiseToPower(num, exponent), num ** exponent);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should output a number', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber(6.99999), 'number');
    });
    it('should output a whole number', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(Number.isInteger(roundNumber(5.77)), true);
    });
    it('should properly round number', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(5.77), Math.round(5.77));
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should output a number', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp(3.14159), 'number');
    });
    it('should output a whole number', () => {
      const roundUp = funcs.roundUp;
      assert.equal(Number.isInteger(roundUp(3.14159)), true);
    });
    it('should properly round number up', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(3.14159), Math.ceil(3.14159));
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should output a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint('I\'ve arrived'), 'string');
    });
    it('should output the last character of the string !', () => {
      const stringOut = funcs.addExclamationPoint('I\'ve arrived');
      assert.equal(stringOut.charAt(stringOut.length - 1), '!');
    });
    it('should output the input string with ! at the end', () => {
      const stringIn = 'I\'ve arrived';
      const stringOut = funcs.addExclamationPoint(stringIn);
      assert.equal(stringOut, `${stringIn}!`);
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should output a string', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames('Jesse', 'James'), 'string');
    });
    it('should output a string that contains a space', () => {
      const combineNames = funcs.combineNames;
      assert.notEqual(combineNames('Jesse', 'James').indexOf(' '), -1);
    });
    it('should output that contains both input names', () => {
      const combineNames = funcs.combineNames;
      const name1 = 'Doctor';
      const name2 = 'Doolittle';
      assert.equal(combineNames(name1, name2), name1.concat(' ', name2));
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should output a string', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting('buddy'), 'string');
    });
    it('should greet the name passed in', () => {
      const getGreeting = funcs.getGreeting;
      const name = 'James Dooley III';
      assert.equal(getGreeting(name).includes(name), true);
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should output a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea(6, 8), 'number');
    });
    it('should output a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea(6, 8), 'number');
    });
    it('should should properly evaluate a rectangle are with length and width inputs', () => {
      const getRectangleArea = funcs.getRectangleArea;
      const length = Math.floor(Math.random()) * 10;
      const width = Math.floor(Math.random()) * 10;
      assert.equal(getRectangleArea(length, width), length * width);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should output a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea(6, 4), 'number');
    });
    it('should properly evaluate triangle area with base and height inputs', () => {
      const getTriangleArea = funcs.getTriangleArea;
      const base = Math.floor(Math.random()) * 10;
      const height = Math.floor(Math.random()) * 10;
      assert.equal(getTriangleArea(base, height), 0.5 * base * height);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should output a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea(5), 'number');
    });
    it('should properly evaluate circle area with radius input', () => {
      const getCircleArea = funcs.getCircleArea;
      const pi = Math.PI;
      const radius = Math.floor(Math.random()) * 10;
      assert.equal(getCircleArea(radius), pi * radius * radius);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should output a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume(4, 6, 8), 'number');
    });
    it('should properly evaluate prism volume with length, width, height inputs', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const length = Math.floor(Math.random()) * 10;
      const width = Math.floor(Math.random()) * 10;
      const height = Math.floor(Math.random()) * 10;
      assert.equal(getRectangularPrismVolume(length, width, height), length * width * height);
    });
  });
});
