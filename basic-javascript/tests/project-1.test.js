/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const expect = require('chai').expect;
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
    // begin here
    it('should return a number', () => {
      const result = multiplyByTen(2);
      expect(result).to.be.a('number');
    });
    it('should return a number multiplied by 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const num = 3;
      const product = multiplyByTen(num);
      expect(product).to.equal(30);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const result = subtractFive(2);
      expect(result).to.be.a('number');
    });
    it('should return the sum of a number minus 5', () => {
      const subtractFive = funcs.subtractFive;
      const num = 3;
      const product = subtractFive(num);
      expect(product).to.equal(-2);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean value', () => {
      const result = areSameLength('cat', 'dog');
      expect(result).to.be.a('boolean');
    });
    it('should return true if the lengths of two strings are the same and false otherwise', () => {
      const areSameLength = funcs.areSameLength;
      const str1 = 'cat';
      const str2 = 'dog';
      const str3 = 'parrot';
      const trueResult = areSameLength(str1, str2);
      const falseResult = areSameLength(str1, str3);

      expect(trueResult).to.equal(true);
      expect(falseResult).to.equal(false);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean value', () => {
      const result = areEqual('cat', 'dog');
      expect(result).to.be.a('boolean');
    });
    it('should return true if two parameters are equal', () => {
      const areEqual = funcs.areEqual;
      const str1 = 'cat';
      const str2 = 'cat';

      const trueResult = areEqual(str1, str2);
      expect(trueResult).to.equal(true);
    });
    it('should return false if two parameters are not equal', () => {
      const areEqual = funcs.areEqual;
      const str1 = 'cat';
      const str2 = 'cats';
      const falseResult = areEqual(str1, str2);
      expect(falseResult).to.equal(false);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean value', () => {
      const result = lessThanNinety(70);
      expect(result).to.be.a('boolean');
    });
    it('should return true if the num is less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const result = lessThanNinety(89);
      expect(result).to.equal(true);
    });
    it('should return false if the num is greater than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      const result = lessThanNinety(91);
      expect(result).to.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean value', () => {
      const result = greaterThanFifty(23);
      expect(result).to.be.a('boolean');
    });
    it('should return true if the num is greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const result = greaterThanFifty(89);
      expect(result).to.equal(true);
    });
    it('should return false if the num is less than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      const result = greaterThanFifty(49);
      expect(result).to.equal(false);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const result = add(2, 2);
      expect(result).to.be.a('number');
    });
    it('should return the sum of two numbers', () => {
      const add = funcs.add;
      const num1 = 5;
      const num2 = 6;
      const result = add(num1, num2);
      expect(result).to.equal(11);
    });
    it('should return a string', () => {
      const result = add('Cat', 'dog');
      expect(result).to.be.a('string');
    });
    it('should return a concatenation of two strings', () => {
      const add = funcs.add;
      const str1 = 'ABC';
      const str2 = 'DEF';
      const result = add(str1, str2);
      expect(result).to.equal('ABCDEF');
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const result = subtract(5, 2);
      expect(result).to.be.a('number');
    });
    it('should return the difference of two numbers', () => {
      const subtract = funcs.subtract;
      const num1 = 10;
      const num2 = 3;
      const result = subtract(num1, num2);
      expect(result).to.equal(7);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const result = divide(10, 2);
      expect(result).to.be.a('number');
    });
    it('should return the quotient of two numbers', () => {
      const divide = funcs.divide;
      const num1 = 10;
      const num2 = 2;
      const result = divide(num1, num2);
      expect(result).to.equal(5);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      const result = multiply(2, 4);
      expect(result).to.be.a('number');
    });
    it('should return the product of two numbers', () => {
      const multiply = funcs.multiply;
      const num1 = 10;
      const num2 = 2;
      const result = multiply(num1, num2);
      expect(result).to.equal(20);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const result = getRemainder(5, 2);
      expect(result).to.be.a('number');
    });
    it('should return the remainder of two numbers', () => {
      const getRemainder = funcs.getRemainder;
      const num1 = 10;
      const num2 = 3;
      const result = getRemainder(num1, num2);
      expect(result).to.equal(1);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean value', () => {
      const result = isEven(3);
      expect(result).to.be.a('boolean');
    });
    it('should return true if a number is even', () => {
      const isEven = funcs.isEven;
      const num = 80;
      const result = isEven(num);
      expect(result).to.equal(true);
    });
    it('should return false if a number is odd', () => {
      const isEven = funcs.isEven;
      const num = 81;
      const result = isEven(num);
      expect(result).to.equal(false);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean value', () => {
      const result = isOdd(5);
      expect(result).to.be.a('boolean');
    });
    it('should return true if a number is odd', () => {
      const isOdd = funcs.isOdd;
      const num = 81;
      const result = isOdd(num);
      expect(result).to.equal(true);
    });
    it('should return false if a number is even', () => {
      const isOdd = funcs.isOdd;
      const num = 80;
      const result = isOdd(num);
      expect(result).to.equal(false);
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const result = square(2);
      expect(result).to.be.a('number');
    });
    it('should return the square of a number', () => {
      const square = funcs.square;
      const num = 3;
      const result = square(num);
      expect(result).to.equal(9);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const result = cube(2);
      expect(result).to.be.a('number');
    });
    it('should return the cube of a number', () => {
      const cube = funcs.cube;
      const num = 3;
      const result = cube(num);
      expect(result).to.equal(27);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const result = raiseToPower(2, 4);
      expect(result).to.be.a('number');
    });
    it('should return the first number raised to the power of the second number', () => {
      const raiseToPower = funcs.raiseToPower;
      const num1 = 3;
      const num2 = 4;
      const result = raiseToPower(num1, num2);
      expect(result).to.equal(81);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const result = roundNumber(2.2);
      expect(result).to.be.a('number');
    });
    it('should be the rounded integer of a number', () => {
      const roundNumber = funcs.roundNumber;
      const num1 = 12.6;
      const result = roundNumber(num1);
      expect(result).to.equal(13);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const result = roundUp(2.1);
      expect(result).to.be.a('number');
    });
    it('should be the rounded up integer of a number', () => {
      const roundUp = funcs.roundUp;
      const num1 = 12.1;
      const result = roundUp(num1);
      expect(result).to.equal(13);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      const result = addExclamationPoint('Cat');
      expect(result).to.be.a('string');
    });
    it('should add an exclamation point to the end of a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      const str = 'Unicorns are awesome';
      const result = addExclamationPoint(str);
      expect(result).to.equal('Unicorns are awesome!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      const result = combineNames('Cat', 'dog');
      expect(result).to.be.a('string');
    });
    it('should combine two names', () => {
      const combineNames = funcs.combineNames;
      const name1 = 'Bob';
      const name2 = 'McBobson';
      const result = combineNames(name1, name2);
      expect(result).to.equal('Bob McBobson');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      const result = getGreeting();
      expect(result).to.be.a('string');
    });
    it('should greet a name passed in', () => {
      const getGreeting = funcs.getGreeting;
      const name = 'Lily';
      const result = getGreeting(name);
      expect(result).to.equal('Hello Lily!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      const result = getRectangleArea(2, 2);
      expect(result).to.be.a('number');
    });
    it('should return the calculated area of a rectangle', () => {
      const getRectangleArea = funcs.getRectangleArea;
      const width = 10;
      const height = 3;
      const result = getRectangleArea(width, height);
      expect(result).to.equal(30);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      const result = getTriangleArea(2, 10);
      expect(result).to.be.a('number');
    });
    it('should return the area of a triangle given base and height', () => {
      const getTriangleArea = funcs.getTriangleArea;
      const base = 10;
      const height = 5;
      const result = getTriangleArea(base, height);
      expect(result).to.equal(25);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      const result = getCircleArea(2);
      expect(result).to.be.a('number');
    });
    it('should return the area of a circle given the radius', () => {
      const getCircleArea = funcs.getCircleArea;
      const radius = 3;
      const result = getCircleArea(radius);
      expect(result).to.equal(Math.PI * radius * radius);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      const result = getRectangularPrismVolume(2, 2, 2);
      expect(result).to.be.a('number');
    });
    it('should return the volume of a prism given the 3 sides', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const side1 = 10;
      const side2 = 3;
      const side3 = 4;
      const result = getRectangularPrismVolume(side1, side2, side3);
      expect(result).to.equal(120);
    });
  });
});
