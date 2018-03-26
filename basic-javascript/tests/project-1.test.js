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
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen(22);
      assert.isFinite(multiplyByTen, 'it should be a number');
    });
    it('should return a numb multiplied by 10', () => {
      const multiplyByTen = funcs.multiplyByTen(10);
      assert.equal(multiplyByTen, 100, 'Using 10 should equal 100');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      assert.isFinite(subtractFive(6), 'it should be a number');
    });
    it('should return a number subracted by 5', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(6), 1, 'Using 6 should yield 1');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should yield either true or false', () => {
      const areSameLength = funcs.areSameLength;
      assert.isBoolean(areSameLength('test1', 'test1andthensome'), 'not same length, so false');
      assert.isBoolean(areSameLength('test1', 'test2'), 'same length, so true');
    });
    it('should tell if two strings are same length', () => {
      const areSameLength = funcs.areSameLength;
      assert.isOk(areSameLength('test1', 'test2'), 'same length yields true');
      assert.isNotOk(areSameLength('beep', 'boooop'), 'not same length yields false');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should yield true or false', () => {
      const areEqual = funcs.areEqual;
      assert.isBoolean(areEqual(3, 3), 'same numbers yield boolean');
      assert.isBoolean(areEqual(3, 2), 'different numbers yield boolean');
    });
    it('should test if numbers are the same', () => {
      const areEqual = funcs.areEqual;
      assert.isOk(areEqual(3,3), 'same is true');
      assert.isNotOk(areEqual(3,16), 'different is false');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should yield true or false', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.isBoolean(lessThanNinety(3), 'true');
      assert.isBoolean(lessThanNinety(91), 'false');
    });
    it('should test if numbers are less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.isOk(lessThanNinety(89), '89 yields true');
      assert.isNotOk(lessThanNinety(91), '91 yields false');
      assert.isNotOk(lessThanNinety(90), '90 yields false');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should yield true or false', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.isBoolean(greaterThanFifty(3), 'false');
      assert.isBoolean(greaterThanFifty(91), 'true');
    });
    it('should test if numbers are less than 90', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.isOk(greaterThanFifty(51), '51 yields true');
      assert.isNotOk(greaterThanFifty(49), '49 yields false');
      assert.isNotOk(greaterThanFifty(50), '50 yields false');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.add;
      assert.isFinite(add(20,5), 'should yield a number');
    });
    it('should add properly', () => {
      const add = funcs.add;
      assert.equal(add(20,5), 25, '20 and 5 yield 25');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      assert.isFinite(subtract(20,5), 'should yield a number');
    });
    it('should subtract properly', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(20,5), 15, '20 and 5 yield 15');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      assert.isFinite(divide(20,5), 'should yield a number');
    });
    it('should divide properly', () => {
      const divide = funcs.divide;
      assert.equal(divide(20,5), 4, '20 and 5 yield 4');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      assert.isFinite(multiply(20,5), 'should yield a number');
    });
    it('should multiply properly', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(20,5), 100, '20 and 5 yield 100');
      assert.equal(multiply(20,0), 0, 'multiply by 0 yields 0');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      assert.isFinite(getRemainder(20,5), 'should yield a number');
    });
    it('should getRemainder properly', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(20, 6), 2, '20 and 6 yield 2');
      assert.equal(getRemainder(20, 5), 0, '20 and 5 yield 0');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should yield true or false', () => {
      const isEven = funcs.isEven;
      assert.isBoolean(isEven(3), 'odd numbers yield false');
      assert.isBoolean(isEven(2), 'even numbers yield true');
    });
    it('should test if numbers are the same', () => {
      const isEven = funcs.isEven;
      assert.isOk(isEven(6), '6 is even');
      assert.isNotOk(isEven(3), '3 is odd, so false');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should yield true or false', () => {
      const isOdd = funcs.isOdd;
      assert.isBoolean(isOdd(3), 'odd numbers yield true');
      assert.isBoolean(isOdd(2), 'even numbers yield false');
    });
    it('should test if numbers are the same', () => {
      const isOdd = funcs.isOdd;
      assert.isOk(isOdd(3), '3 is odd');
      assert.isNotOk(isOdd(6), '6 is even, so false');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const square = funcs.square;
      assert.isFinite(square(5), 'should yield a number');
    });
    it('should square properly', () => {
      const square = funcs.square;
      assert.equal(square(5), 25, '5 yields 25');
      assert.equal(square(0), 0, '0 yields 0');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      assert.isFinite(cube(6), 'should yield a number');
    });
    it('should cube properly', () => {
      const cube = funcs.cube;
      assert.equal(cube(2), 8, '2 yields 8');
      assert.equal(cube(0), 0, '0 yields 0');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.isFinite(raiseToPower(2,5), 'should yield a number');
    });
    it('should raiseToPower properly', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2, 5), 32, '2 and 5 yield 32');
      assert.equal(raiseToPower(0, 0), 1, '0 and 0 yields 1');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      assert.isFinite(roundNumber(5.345), 'should yield a number');
    });
    it('should roundNumber properly', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(7.5), 8, '7.5 should yield 8');
      assert.equal(roundNumber(7.4), 7, '7.4 should yield 7');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      assert.isFinite(roundUp(7.003), 'should yield a number');
    });
    it('should roundUp properly', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(7.00007), 8, '7.00007 should yield 8');
      assert.equal(roundUp(0.7), 1, '0.7 yields 1');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint('boogaloo'), 'string');
    });
    it('should return a string with a ! at the end', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('boogaloo')[8], '!', 'should end with an !');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames('Sean', 'Penn'), 'string');
    });
    it('should combine names', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Sean', 'Penn'), 'Sean Penn', 'Sean and Penn should yield Sean Penn');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting('Tim'), 'string');
    });
    it('should return a string with a ! at the end', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Tim'), 'Hello Tim!', 'Tim should yield "Hello Tim!"');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.isFinite(getRectangleArea(4, 5), 'should yield a number');
    });
    it('should getRectangleArea properly', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(8, 5), 40, '8 and 5 should yield 40');
      assert.equal(getRectangleArea(0, 6), 0, '0 yields 0');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.isFinite(getTriangleArea(4, 5), 'should yield a number');
    });
    it('should getTriangleArea properly', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(8, 5), 20, '8 and 5 should yield 20');
      assert.equal(getTriangleArea(0, 7), 0, '0 yields 0');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.isFinite(getCircleArea(4), 'should yield a number');
    });
    it('should getCircleArea properly', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(5), 25*Math.PI, '5 should yield ~78.5398163397');
      assert.equal(getCircleArea(0), 0, '0 yields 0');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.isFinite(getRectangularPrismVolume(4, 5, 6), 'should yield a number');
    });
    it('should getRectangularPrismVolume properly', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(1, 2, 3), 6, '1, 2 and 3 should yield 6');
      assert.equal(getRectangularPrismVolume(0, 65, 32), 0, '0 yields 0');
    });
  });
});
