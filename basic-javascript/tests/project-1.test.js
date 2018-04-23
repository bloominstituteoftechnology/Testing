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
    // begin here
    it('should return a number multiplied by 10', () => {
      const num = 5;
      const multByTen = funcs.multiplyByTen;
      const product = multByTen(num);
      assert.equal(product, 50);
      assert.typeOf(product, 'number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number minus 5', () => {
      const num = 10;
      const subByFive = funcs.subtractFive;
      const sum = subByFive(num);
      assert.equal(sum, 5);
      assert.typeOf(sum, 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it("should return truthiness of two string's length", () => {
      const str1 = 'this';
      const str2 = 'that';
      const str3 = 'those';
      const same = funcs.areSameLength;
      const trueThis = same(str1, str2);
      const falseThat = same(str1, str3);
      assert.isTrue(trueThis, 'true');
      assert.isNotTrue(falseThat, 'false');
      assert.typeOf(trueThis, 'boolean');
      assert.isBoolean(falseThat, 'true, this is a boolean');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return truthiness of two numbers', () => {
      const num1 = 5;
      const num2 = 5;
      const num3 = 6;
      const areEqual = funcs.areEqual;
      const yup = areEqual(num1, num2);
      const nope = areEqual(num1, num3);
      assert.equal(yup, true);
      assert.equal(nope, false);
      assert.isBoolean(yup, 'yes, this is a boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return truthiness of num if less than 90', () => {
      const num1 = 25;
      const num2 = 150;
      const lessNinety = funcs.lessThanNinety;
      const yup = lessNinety(num1);
      const nope = lessNinety(num2);
      assert.isTrue(yup, '25 is less than 90');
      assert.isNotTrue(nope, '150 is not less than 90');
      assert.isBoolean(yup, 'this is true');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return truthiness of a num if greater than 50', () => {
      const num1 = 25;
      const num2 = 150;
      const greaterFifty = funcs.greaterThanFifty;
      const yup = greaterFifty(num2);
      const nope = greaterFifty(num1);
      assert.isTrue(yup, '150 is greater than 50');
      assert.isNotTrue(nope, '25 is not greater than 50');
      assert.isBoolean(yup, 'this is true');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add two numbers and return the sum', () => {
      const num1 = 5;
      const num2 = 10;
      const add = funcs.add;
      const sum = add(num1, num2);
      assert.equal(sum, 15);
      assert.typeOf(sum, 'number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract two numbers and return the sum', () => {
      const num1 = 10;
      const num2 = 5;
      const sub = funcs.subtract;
      const sum = sub(num1, num2);
      assert.equal(sum, 5);
      assert.typeOf(sum, 'number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide two numbers and return the quotient', () => {
      const num1 = 10;
      const num2 = 5;
      const divide = funcs.divide;
      const quotient = divide(num1, num2);
      assert.equal(quotient, 2);
      assert.typeOf(quotient, 'number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply two number and return the product', () => {
      const num1 = 10;
      const num2 = 5;
      const mult = funcs.multiply;
      const product = mult(num1, num2);
      assert.equal(product, 50);
      assert.typeOf(product, 'number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder of two numbers', () => {
      const num1 = 10;
      const num2 = 5;
      const mod = funcs.getRemainder;
      const quotient = mod(num1, num2);
      assert.equal(quotient, 0);
      assert.typeOf(quotient, 'number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return truthiness of a number if even', () => {
      const num1 = 2;
      const num2 = 3;
      const even = funcs.isEven;
      const yup = even(num1);
      const nope = even(num2);
      assert.isTrue(yup, '2 is even');
      assert.isNotTrue(nope, '3 is not even');
      assert.isBoolean(yup, 'this is true');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return truthiness of a number if odd', () => {
      const num1 = 3;
      const num2 = 2;
      const odd = funcs.isOdd;
      const yup = odd(num1);
      const nope = odd(num2);
      assert.isTrue(yup, '3 is odd');
      assert.isNotTrue(nope, '2 is not odd');
      assert.isBoolean(yup, 'this is true');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the square of a number', () => {
      const num = 3;
      const square = funcs.square;
      assert.equal(square(num), 9);
      assert.typeOf(square(num), 'number');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of a number', () => {
      const num = 3;
      const cube = funcs.cube;
      assert.equal(cube(num), 27);
      assert.typeOf(cube(num), 'number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return the number raised to the exponent', () => {
      const num = 3;
      const exponent = 2;
      const pow = funcs.raiseToPower;
      assert.equal(pow(num, exponent), 9);
      assert.typeOf(pow(num, exponent), 'number');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number, rounded', () => {
      const num1 = 2.3;
      const num2 = 2.6;
      const rounded = funcs.roundNumber;
      assert.equal(rounded(num1), 2);
      assert.equal(rounded(num2), 3);
      assert.typeOf(rounded(num1), 'number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return the ceiling of a number', () => {
      const num1 = 2.2;
      const num2 = 4.8;
      const up = funcs.roundUp;
      assert.equal(up(num1), 3);
      assert.equal(up(num2), 5);
      assert.typeOf(up(num1), 'number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add an exclamation point to the end of a string', () => {
      const str = 'Hello Testing World';
      const addZazz = funcs.addExclamationPoint;
      const invoke = addZazz(str);
      assert.equal(invoke, 'Hello Testing World!');
      assert.typeOf(invoke, 'string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return two strings, separated by one space', () => {
      const str1 = 'Kevin';
      const str2 = 'Durant';
      const combine = funcs.combineNames;
      const invoke = combine(str1, str2);
      assert.equal(invoke, 'Kevin Durant');
      assert.typeOf(invoke, 'string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should prepend "Hello ", to a string, and append "!"', () => {
      const str = 'Kevin Durant';
      const greet = funcs.getGreeting;
      const invoke = greet(str);
      assert.equal(invoke, 'Hello Kevin Durant!');
      assert.typeOf(invoke, 'string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the area of a rectangle, where length * width = area', () => {
      const num1 = 10;
      const num2 = 5;
      const area = funcs.getRectangleArea;
      const result = area(num1, num2);
      assert.equal(result, 50);
      assert.typeOf(result, 'number');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return the area of a triangle', () => {
      const base = 5;
      const height = 10;
      const triArea = funcs.getTriangleArea;
      const area = triArea(base, height);
      assert.equal(area, 25);
      assert.typeOf(area, 'number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the area of a circle', () => {
      const radius = 5;
      const getCircArea = funcs.getCircleArea;
      const area = getCircArea(radius);
      assert.equal(area, 78.53981633974483);
      assert.typeOf(area, 'number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the volume of a rectangular prism', () => {
      const width = 5;
      const height = 10;
      const length = 10;
      const getPrismVol = funcs.getRectangularPrismVolume;
      const volume = getPrismVol(width, height, length);
      assert.equal(volume, 500);
      assert.typeOf(volume, 'number');
    });
  });
});
