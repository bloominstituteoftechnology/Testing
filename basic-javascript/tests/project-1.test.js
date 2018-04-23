/* eslint-disable prefer-destructuring */

const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const funcs = require('../src/project-1');

chai.use(sinonChai);

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const multiplyByTen = funcs.multiplyByTen;
      const multipliedByTen = multiplyByTen(num1);
      expect(multipliedByTen).to.be.a('number');
    });
    it('should multiply number by 10', () => {
      const num1 = 10;
      const multiplyByTen = funcs.multiplyByTen;
      const multipliedByTen = multiplyByTen(num1);
      expect(multipliedByTen).to.equal(100);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const subtractFive = funcs.subtractFive;
      const subtractedFive = subtractFive(num1);
      expect(subtractedFive).to.be.a('number');
    });
    it('should subtract 5', () => {
      const num1 = 10;
      const subtractFive = funcs.subtractFive;
      const subtractedFive = subtractFive(num1);
      expect(subtractedFive).to.equal(5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const str1 = 'hello';
      const str2 = 'gdbye';
      const areSameLength = funcs.areSameLength;
      const sameLength = areSameLength(str1, str2);
      expect(sameLength).to.be.a('boolean');
    });
    it('should return true when length is the same', () => {
      const str1 = 'hello';
      const str2 = 'gdbye';
      const areSameLength = funcs.areSameLength;
      const sameLength = areSameLength(str1, str2);
      expect(sameLength).to.equal(true);
    });
    it('should return false when length is different', () => {
      const str1 = 'hello';
      const str2 = 'goodbye';
      const areSameLength = funcs.areSameLength;
      const sameLength = areSameLength(str1, str2);
      expect(sameLength).to.equal(false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const num1 = 233;
      const num2 = 233;
      const areEqual = funcs.areEqual;
      const equal = areEqual(num1, num2);
      expect(equal).to.be.a('boolean');
    });
    it('should return true when length is the same', () => {
      const num1 = 233;
      const num2 = 233;
      const areEqual = funcs.areEqual;
      const equal = areEqual(num1, num2);
      expect(equal).to.equal(true);
    });
    it('should return false when length is different', () => {
      const num1 = 233;
      const num2 = 12;
      const areEqual = funcs.areEqual;
      const equal = areEqual(num1, num2);
      expect(equal).to.equal(false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      const num1 = 233;
      const lessThanNinety = funcs.lessThanNinety;
      const isLessThanNinety = lessThanNinety(num1);
      expect(isLessThanNinety).to.be.a('boolean');
    });
    it('should return true when less than ninety', () => {
      const num1 = 2;
      const lessThanNinety = funcs.lessThanNinety;
      const isLessThanNinety = lessThanNinety(num1);
      expect(isLessThanNinety).to.equal(true);
    });
    it('should return false when not less than ninety', () => {
      const num1 = 233;
      const lessThanNinety = funcs.lessThanNinety;
      const isLessThanNinety = lessThanNinety(num1);
      expect(isLessThanNinety).to.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const num1 = 233;
      const greaterThanFifty = funcs.greaterThanFifty;
      const isGreaterThanFifty = greaterThanFifty(num1);
      expect(isGreaterThanFifty).to.be.a('boolean');
    });
    it('should return true when greater than fifty', () => {
      const num1 = 52;
      const greaterThanFifty = funcs.greaterThanFifty;
      const isGreaterThanFifty = greaterThanFifty(num1);
      expect(isGreaterThanFifty).to.equal(true);
    });
    it('should return false when not greater than fifty', () => {
      const num1 = 2;
      const greaterThanFifty = funcs.greaterThanFifty;
      const isGreaterThanFifty = greaterThanFifty(num1);
      expect(isGreaterThanFifty).to.equal(false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const num2 = 33;
      const add = funcs.add;
      const added = add(num1, num2);
      expect(added).to.be.a('number');
    });
    it('should add two numbers', () => {
      const num1 = 10;
      const num2 = 333;
      const add = funcs.add;
      const added = add(num1, num2);
      expect(added).to.equal(343);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const num2 = 33;
      const subtract = funcs.subtract;
      const subtracted = subtract(num1, num2);
      expect(subtracted).to.be.a('number');
    });
    it('should subtract two numbers', () => {
      const num1 = 10;
      const num2 = 333;
      const subtract = funcs.subtract;
      const subtracted = subtract(num1, num2);
      expect(subtracted).to.equal(-323);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const num2 = 33;
      const divide = funcs.divide;
      const divided = divide(num1, num2);
      expect(divided).to.be.a('number');
    });
    it('should divide two numbers', () => {
      const num1 = 330;
      const num2 = 10;
      const divide = funcs.divide;
      const divided = divide(num1, num2);
      expect(divided).to.equal(33);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      const num1 = 10;
      const num2 = 33;
      const multiply = funcs.multiply;
      const multiplied = multiply(num1, num2);
      expect(multiplied).to.be.a('number');
    });
    it('should multiply two numbers', () => {
      const num1 = 33;
      const num2 = 10;
      const multiply = funcs.multiply;
      const multiplied = multiply(num1, num2);
      expect(multiplied).to.equal(330);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const num2 = 33;
      const getRemainder = funcs.getRemainder;
      const remainder = getRemainder(num1, num2);
      expect(remainder).to.be.a('number');
    });
    it('should get the remainder of two numbers', () => {
      const num1 = 330;
      const num2 = 10;
      const getRemainder = funcs.getRemainder;
      const remainder = getRemainder(num1, num2);
      expect(remainder).to.equal(0);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      const num1 = 233;
      const isEven = funcs.isEven;
      const even = isEven(num1);
      expect(even).to.be.a('boolean');
    });
    it('should return true when even', () => {
      const num1 = 10;
      const isEven = funcs.isEven;
      const even = isEven(num1);
      expect(even).to.equal(true);
    });
    it('should return false when odd', () => {
      const num1 = 11;
      const isEven = funcs.isEven;
      const even = isEven(num1);
      expect(even).to.equal(false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      const num1 = 233;
      const isOdd = funcs.isOdd;
      const odd = isOdd(num1);
      expect(odd).to.be.a('boolean');
    });
    it('should return true when odd', () => {
      const num1 = 11;
      const isOdd = funcs.isOdd;
      const odd = isOdd(num1);
      expect(odd).to.equal(true);
    });
    it('should return false when even', () => {
      const num1 = 10;
      const isOdd = funcs.isOdd;
      const odd = isOdd(num1);
      expect(odd).to.equal(false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const square = funcs.square;
      const squared = square(num1);
      expect(squared).to.be.a('number');
    });
    it('should square a number', () => {
      const num1 = 10;
      const square = funcs.square;
      const squared = square(num1);
      expect(squared).to.equal(100);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const cube = funcs.cube;
      const cubed = cube(num1);
      expect(cubed).to.be.a('number');
    });
    it('should cube a number', () => {
      const num1 = 10;
      const cube = funcs.cube;
      const cubed = cube(num1);
      expect(cubed).to.equal(1000);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const num2 = 233;
      const raiseToPower = funcs.raiseToPower;
      const raisedToPower = raiseToPower(num1, num2);
      expect(raisedToPower).to.be.a('number');
    });
    it('should raise a number to a power', () => {
      const num1 = 10;
      const num2 = 2;
      const raiseToPower = funcs.raiseToPower;
      const raisedToPower = raiseToPower(num1, num2);
      expect(raisedToPower).to.equal(100);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const num1 = 233.333;
      const roundNumber = funcs.roundNumber;
      const roundedNumber = roundNumber(num1);
      expect(roundedNumber).to.be.a('number');
    });
    it('should round a number', () => {
      const num1 = 10.222;
      const roundNumber = funcs.roundNumber;
      const roundedNumber = roundNumber(num1);
      expect(roundedNumber).to.equal(10);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const num1 = 233.333;
      const roundUp = funcs.roundUp;
      const roundedNumber = roundUp(num1);
      expect(roundedNumber).to.be.a('number');
    });
    it('should round a number up', () => {
      const num1 = 10.222;
      const roundUp = funcs.roundUp;
      const roundedNumber = roundUp(num1);
      expect(roundedNumber).to.equal(11);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      const str1 = 'hello';
      const addExclamationPoint = funcs.addExclamationPoint;
      const addedExclamation = addExclamationPoint(str1);
      expect(addedExclamation).to.be.a('string');
    });
    it('should add an exclamation point to a string', () => {
      const str1 = 'heya';
      const addExclamationPoint = funcs.addExclamationPoint;
      const addedExclamation = addExclamationPoint(str1);
      expect(addedExclamation).to.equal('heya!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      const str1 = 'helloooo';
      const str2 = 'hello';
      const combineNames = funcs.combineNames;
      const combined = combineNames(str1, str2);
      expect(combined).to.be.a('string');
    });
    it('should add an exclamation point to a string', () => {
      const str1 = 'heya';
      const str2 = 'hello';
      const combineNames = funcs.combineNames;
      const combined = combineNames(str1, str2);
      expect(combined).to.equal('heya hello');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      const str1 = 'John';
      const getGreeting = funcs.getGreeting;
      const greeting = getGreeting(str1);
      expect(greeting).to.be.a('string');
    });
    it('should subtract 5', () => {
      const str1 = 'Frank';
      const getGreeting = funcs.getGreeting;
      const greeting = getGreeting(str1);
      expect(greeting).to.equal('Hello Frank!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const num2 = 233;
      const getRectangleArea = funcs.getRectangleArea;
      const area = getRectangleArea(num1, num2);
      expect(area).to.be.a('number');
    });
    it('should return the area of a rectangle', () => {
      const num1 = 10;
      const num2 = 2;
      const getRectangleArea = funcs.getRectangleArea;
      const area = getRectangleArea(num1, num2);
      expect(area).to.equal(20);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const num2 = 233;
      const getTriangleArea = funcs.getTriangleArea;
      const area = getTriangleArea(num1, num2);
      expect(area).to.be.a('number');
    });
    it('should return the area of a triangle', () => {
      const num1 = 10;
      const num2 = 2;
      const getTriangleArea = funcs.getTriangleArea;
      const area = getTriangleArea(num1, num2);
      expect(area).to.equal(10);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      const num1 = 100;
      const getCircleArea = funcs.getCircleArea;
      const area = getCircleArea(num1);
      expect(area).to.be.a('number');
    });
    it('should return a circles area', () => {
      const num1 = 10;
      const getCircleArea = funcs.getCircleArea;
      const area = getCircleArea(num1);
      expect(area).to.equal(314.1592653589793);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      const num1 = 233;
      const num2 = 233;
      const num3 = 233;
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const volume = getRectangularPrismVolume(num1, num2, num3);
      expect(volume).to.be.a('number');
    });
    it('should return rectangular prism volume', () => {
      const num1 = 10;
      const num2 = 2;
      const num3 = 233;
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      const volume = getRectangularPrismVolume(num1, num2, num3);
      expect(volume).to.equal(4660);
    });
  });
});
