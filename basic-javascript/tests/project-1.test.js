const assert = require('chai').assert;
const funcs = require('../src/project-1');
const expect = require('chai').expect;

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
    it('should return a number multiplied by ten given that a number is passed in', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const twenty = multiplyByTen(2);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a the difference between a number and five given that a number is passed in', () => {
      const subtractFive = funcs.subtractFive;
      const seven = subtractFive(12);
      assert.typeOf(seven, 'number');
      assert.equal(seven, 7);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return false when passed two unequal strings', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('hop', 'hoop'), false);
    });
    it('should return true when passed two equal strings', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('hop', 'pop'), true);
    });
   /* it('should return a boolean value when given two strings', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('str1', 'str2'), 'boolean');
    }); */
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if passed two numbers that are equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(2, 2), true);
    });
    it('should return false if passed two numbers that are not equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(2, 3), false);
    });
    /* it('should return a boolean value given two numbers', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(2, 2), 'boolean');
    }); */
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if passed a number that is less than ninety', () => {
      expect(funcs.lessThanNinety(10)).to.equal(true);
    });
    it('should return false if passed a number that is greater than or equal to ninety', () => {
      expect(funcs.lessThanNinety(100)).to.equal(false);
      expect(funcs.lessThanNinety(90)).to.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if passed a number that is greater than fifty', () => {
      expect(funcs.greaterThanFifty(62)).to.equal(true);
    });
    it('should return false if passed a number that is less than or equal to fifty', () => {
      expect(funcs.greaterThanFifty(27)).to.equal(false);
      expect(funcs.greaterThanFifty(50)).to.equal(false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return the sum when given two numbers', () => {
      const add = funcs.add;
      const three = add(1, 2);
      assert.typeOf(three, 'number');
      assert.equal(three, 3);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return the difference when given two numbers', () => {
      const subtract = funcs.subtract;
      const four = subtract(9, 5);
      assert.typeOf(four, 'number');
      assert.equal(four, 4);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a quotient when give two numbers', () => {
      const divide = funcs.divide;
      const two = divide(6, 3);
      assert.typeOf(two, 'number');
      assert.equal(two, 2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a product when given two numbers', () => {
      expect(funcs.multiply(4, 5)).to.equal(20);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('given two numbers should return the remainder of one number divided by the other number', () => {
      expect(funcs.getRemainder(10, 4)).to.equal(2);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if a number is even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(12), true);
    });
    it('should return false if a number is not even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(13), false);
    });
    it('should return a boolean value', () => {
      const isEven = funcs.isEven;
      assert.equal(typeof isEven(321), 'boolean');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if a number is odd', () => {
      expect(funcs.isOdd(3)).to.equal(true);
    });
    it('should return false if a number is not even', () => {
      expect(funcs.isOdd(4)).to.equal(false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a square when passed a number', () => {
      const square = funcs.square;
      const nine = square(3);
      assert.typeOf(nine, 'number');
      assert.equal(nine, 9);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a cube when passed a number', () => {
      expect(funcs.cube(2)).to.equal(8);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('given two numbers should return a number equal to one number to the power of the second number', () => {
      expect(funcs.raiseToPower(2, 2)).to.equal(4);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return number rounded to nearest integer when passed a number', () => {
      expect(funcs.roundNumber(0.7)).to.equal(1);
    });
    it('should return a number when passed a number', () => {
      expect(funcs.roundNumber(0.7)).to.be.a('number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number when passed a number', () => {
      expect(funcs.roundUp(1.6)).to.be.a('number');
    });
    it('should return a number rounded to the next integer when passed a number', () => {
      expect(funcs.roundUp(1.6)).to.equal(2);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string when passed a string', () => {
      expect(funcs.addExclamationPoint('Hey')).to.be.a('string');
    });
    it('should return Hey! when passed Hey', () => {
      expect(funcs.addExclamationPoint('Hey')).to.equal('Hey!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string when passed two strings', () => {
      expect(funcs.combineNames('cole', 'phillips')).to.be.a('string');
    });
    it('should return cole phillips when passed cole and phillips', () => {
      expect(funcs.combineNames('cole', 'phillips')).to.equal('cole phillips');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string when passed a string', () => {
      expect(funcs.getGreeting('Cole')).to.be.a('string');
    });
    it('should return Hello Cole when passed Cole', () => {
      expect(funcs.getGreeting('Cole')).to.equal('Hello Cole!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number when passed two numbers', () => {
      expect(funcs.getRectangleArea(2, 5)).to.be.a('number');
    });
    it('should return the area of a rectangle when passed two numbers', () => {
      expect(funcs.getRectangleArea(2, 5)).to.equal(10);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number when passed two numbers', () => {
      expect(funcs.getTriangleArea(2, 3)).to.be.a('number');
    });
    it('should return the area of a triangle when passed two numbers', () => {
      expect(funcs.getTriangleArea(2, 3)).to.equal(0.5 * 2 * 3);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number when passed a number', () => {
      expect(funcs.getCircleArea(5)).to.be.a('number');
    });
    it('should return the area of a circle when passed a number', () => {
      expect(funcs.getCircleArea(5)).to.equal(Math.PI * 25);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number when passed three numbers', () => {
      expect(funcs.getRectangularPrismVolume(1, 2, 3)).to.be.a('number');
    });
    it('should return the volume of a rectangular prism when given three numbers', () => {
      expect(funcs.getRectangularPrismVolume(1, 2, 3)).to.equal(1 * 2 * 3);
    });
  });
});
