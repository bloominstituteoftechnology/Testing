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
    it('should multiply number by 10', () => {
      const num = 20;
      const newMultiplyByTen = funcs.multiplyByTen(num);
      assert.equal(newMultiplyByTen, 200);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract number by 5', () => {
      const num = 20;
      const newSubtractFive = funcs.subtractFive(num);
      assert.equal(newSubtractFive, 15);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if two strings are equal length', () => {
      const str1 = 'foo';
      const str2 = 'bar';
      const newAreSameLength = funcs.areSameLength(str1, str2);
      assert.equal(newAreSameLength, true);
    });
    it('should return false if two strings are not equal length', () => {
      const str1 = 'foob';
      const str2 = 'bar';
      const newAreSameLength = funcs.areSameLength(str1, str2);
      assert.equal(newAreSameLength, false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if two numbers are equal', () => {
      const num1 = 2;
      const num2 = 2;
      const newAreEqual = funcs.areEqual(num1, num2);
      assert.equal(newAreEqual, true);
    });
    it('should return false if two numbers are not equal', () => {
      const num1 = 3;
      const num2 = 2;
      const newAreEqual = funcs.areEqual(num1, num2);
      assert.equal(newAreEqual, false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if number is less than 90', () => {
      const num = 2;
      const newLessThanNinety = funcs.lessThanNinety(num);
      assert.equal(newLessThanNinety, true);
    });
    it('should return false if number is greater than 90', () => {
      const num = 300;
      const newLessThanNinety = funcs.lessThanNinety(num);
      assert.equal(newLessThanNinety, false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return false if num is less than 50', () => {
      const num = 30;
      const newGreaterThanFifty = funcs.greaterThanFifty(num);
      assert.equal(newGreaterThanFifty, false);
    });
    it('should return true if num is greater than 50', () => {
      const num = 80;
      const newGreaterThanFifty = funcs.greaterThanFifty(num);
      assert.equal(newGreaterThanFifty, true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add two numbers', () => {
      const num1 = 1;
      const num2 = 2;
      const newAdd = funcs.add(num1, num2);
      assert.equal(newAdd, 3);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract two numbers', () => {
      const num1 = 1;
      const num2 = 2;
      const newSubtract = funcs.subtract(num1, num2);
      assert.equal(newSubtract, -1);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide two numbers', () => {
      const num1 = 10;
      const num2 = 2;
      const newDivide = funcs.divide(num1, num2);
      assert.equal(newDivide, 5);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply two numbers', () => {
      const num1 = 10;
      const num2 = 2;
      const newMultiply = funcs.multiply(num1, num2);
      assert.equal(newMultiply, 20);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder of two numbers', () => {
      const num1 = 10;
      const num2 = 2;
      const newGetRemainder = funcs.getRemainder(num1, num2);
      assert.equal(newGetRemainder, 0);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if even', () => {
      const num = 4;
      const newIsEven = funcs.isEven(num);
      assert.equal(newIsEven, true);
    });
    it('should return false if odd', () => {
      const num = 5;
      const newIsEven = funcs.isEven(num);
      assert.equal(newIsEven, false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if odd', () => {
      const num = 3;
      const newIsOdd = funcs.isOdd(num);
      assert.equal(newIsOdd, true);
    });
    it('should return false if even', () => {
      const num = 6;
      const newIsOdd = funcs.isOdd(num);
      assert.equal(newIsOdd, false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return square of number', () => {
      const num = 4;
      const newSquare = funcs.square(num);
      assert.equal(newSquare, 16);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return cube of number', () => {
      const num = 2;
      const newCube = funcs.cube(num);
      assert.equal(newCube, 8);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number raised to n power', () => {
      const num = 3;
      const exponent = 2;
      const newRaiseToPower = funcs.raiseToPower(num, exponent);
      assert.equal(newRaiseToPower, 9);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number rounded', () => {
      const num = 4.5;
      const newRoundNumber = funcs.roundNumber(num);
      assert.equal(newRoundNumber, 5);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number rounded up to the nearest whole number', () => {
      const num = 4.4;
      const newRoundUp = funcs.roundUp(num);
      assert.equal(newRoundUp, 5);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should concatenate a ! to the end of a string', () => {
      const str = 'hello';
      const newAddExclamationPoint = funcs.addExclamationPoint(str);
      assert.equal(newAddExclamationPoint, 'hello!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should combine two names', () => {
      const firstName = 'Jane';
      const lastName = 'Doe';
      const newCombineNames = funcs.combineNames(firstName, lastName);
      assert.equal(newCombineNames, 'Jane Doe');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return Hello + name!', () => {
      const name = 'John';
      const newGetGreeting = funcs.getGreeting(name);
      assert.equal(newGetGreeting, 'Hello John!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the rectangle area (length * width)', () => {
      const length = 4;
      const width = 2;
      const newGetRectangleArea = funcs.getRectangleArea(length, width);
      assert.equal(newGetRectangleArea, 8);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return area of the triangle (1/2*base*height)', () => {
      const base = 12;
      const height = 2;
      const newGetTriangleArea = funcs.getTriangleArea(base, height);
      assert.equal(newGetTriangleArea, 12);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the area of a circle (pi*r^2)', () => {
      const radius = 6;
      const newGetCircleArea = funcs.getCircleArea(radius);
      assert.equal(newGetCircleArea, 113.09733552923255);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the volume of a rectangular prism (l*w*h)', () => {
      const l = 3;
      const w = 4;
      const h = 2;
      const newGetRectangularPrismVolume = funcs.getRectangularPrismVolume(
        l,
        w,
        h
      );
      assert.equal(newGetRectangularPrismVolume, 24);
    });
  });
});
