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
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      let num = '2';
      expect(multiplyByTen(num)).to.be.a('number');
    });
    it('should return 50 when 5 is passed in as num', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const expectedSum = 50;
      let num = 5;
      expect(multiplyByTen(num)).to.equal(50);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      let num = '5';
      expect(subtractFive(num)).to.be.a('number');
    });
    it('should return 0 when 5 is passed in as num', () => {
      const subtractFive = funcs.subtractFive;
      const expectedVal = 0;
      let num = 5;
      expect(subtractFive(num)).to.equal(0);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      let str1 = 'cat';
      let str2 = 'hat'
      expect(areSameLength(str1, str2)).to.be.a('boolean');
    });
    it('should return true if length of string are same', () => {
      const areSameLength = funcs.areSameLength;
      let str1 = 'cat';
      let str2 = 'hat';
      expect(areSameLength(str1, str2)).to.equal(true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual;
      let str1 = 'cat';
      let str2 = 'hat'
      expect(areEqual(str1, str2)).to.be.a('boolean');
    });
    it('should return true if items are the same', () => {
      const areEqual = funcs.areEqual;
      let str1 = 'hat';
      let str2 = 'hat';
      expect(areEqual(str1, str2)).to.equal(true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      let num = 91;
      expect(lessThanNinety(num)).to.be.a('boolean');
    });
    it('should return true if number is less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      let num = 89;
      expect(lessThanNinety(num)).to.equal(true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      let num = 49;
      expect(greaterThanFifty(num)).to.be.a('boolean');
    });
    it('should return true if number more than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      let num = 51;
      expect(greaterThanFifty(num)).to.equal(true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.add;
      let num = 10;
      let num2 = 20;
      expect(add(num, num2)).to.be.a('number');
    });
    it('should return 30 if arguements are 10 and 20', () => {
      const add = funcs.add;
      let num = 10;
      let num2 = 20;
      let expectedVal = 30;
      expect(add(num, num2)).to.equal(expectedVal);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      let num = 20;
      let num2 = 10;
      expect(subtract(num, num2)).to.be.a('number');
    });
    it('should return `10` if arguements are 20 and 10', () => {
      const subtract = funcs.subtract;
      let num = 20;
      let num2 = 10;
      let expectedVal = 10;
      expect(subtract(num, num2)).to.equal(expectedVal);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      let num = 20;
      let num2 = 10;
      expect(divide(num, num2)).to.be.a('number');
    });
    it('should return `2` if arguements are 20 and 10', () => {
      const divide = funcs.divide;
      let num = 20;
      let num2 = 10;
      let expectedVal = 2;
      expect(divide(num, num2)).to.equal(expectedVal);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      let num = 20;
      let num2 = 10;
      expect(multiply(num, num2)).to.be.a('number');
    });
    it('should return `200` if arguements are 20 and 10', () => {
      const multiply = funcs.multiply;
      let num = 20;
      let num2 = 10;
      let expectedVal = 200;
      expect(multiply(num, num2)).to.equal(expectedVal);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      let num = 21;
      let num2 = 10;
      expect(getRemainder(num, num2)).to.be.a('number');
    });
    it('should return `1` if arguements are 21 and 10', () => {
      const getRemainder = funcs.getRemainder;
      let num = 21;
      let num2 = 10;
      let expectedVal = 1;
      expect(getRemainder(num, num2)).to.equal(expectedVal);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      const isEven = funcs.isEven;
      let num = 20;
      expect(isEven(num)).to.be.a('boolean');
    });
    it('should return true if arguements is 20', () => {
      const isEven = funcs.isEven;
      let num = 20;
      let expectedVal = true;
      expect(isEven(num)).to.equal(expectedVal);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      const isOdd = funcs.isOdd;
      let num = 21;
      expect(isOdd(num)).to.be.a('boolean');
    });
    it('should return true if arguements is 21', () => {
      const isOdd = funcs.isOdd;
      let num = 21;
      let expectedVal = true;
      expect(isOdd(num)).to.equal(expectedVal);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const square = funcs.square;
      let num = 10;
      expect(square(num)).to.be.a('number');
    });
    it('should return 100 if arguements is 10', () => {
      const square = funcs.square;
      let num = 10;
      let expectedVal = 100;
      expect(square(num)).to.equal(expectedVal);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      let num = 10;
      expect(cube(num)).to.be.a('number');
    });
    it('should return 1000 if arguements is 10', () => {
      const cube = funcs.cube;
      let num = 10;
      let expectedVal = 1000;
      expect(cube(num)).to.equal(expectedVal);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      let num = 10;
      let num2 = 2;
      expect(raiseToPower(num, num2)).to.be.a('number');
    });
    it('should return 20 if arguements is 10 and 2', () => {
      const raiseToPower = funcs.raiseToPower;
      let num = 10;
      let num2 = 2;
      let expectedVal = 20;
      expect(raiseToPower(num, num2)).to.equal(expectedVal);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      let num = 10.11;
      expect(roundNumber(num)).to.be.a('number');
    });
    it('should return 10 if arguements is 10.11', () => {
      const roundNumber = funcs.roundNumber;
      let num = 10.11;
      let expectedVal = 10;
      expect(roundNumber(num)).to.equal(expectedVal);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      let num = 10.11;
      expect(roundUp(num)).to.be.a('number');
    });
    it('should return 11 if arguements is 10.11', () => {
      const roundUp = funcs.roundUp;
      let num = 10.11;
      let expectedVal = 11;
      expect(roundUp(num)).to.equal(expectedVal);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      let str = 'candy';
      expect(addExclamationPoint(str)).to.be.a('string');
    });
    it('should return candy! if arguements is candy', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      let str = 'candy';
      let expectedVal = 'candy!';
      expect(addExclamationPoint(str)).to.equal(expectedVal);
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      let str = 'candy';
      let str2 = 'land';
      expect(combineNames(str, str2)).to.be.a('string');
    });
    it('should return "candy land" if arguements is candy and land', () => {
      const combineNames = funcs.combineNames;
      let str = 'candy';
      let str2 = 'land';
      let expectedVal = 'candy land';
      expect(combineNames(str, str2)).to.equal(expectedVal);
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      let str = 'John';
      expect(getGreeting(str)).to.be.a('string');
    });
    it('should return "Hello John!" if arguements is John', () => {
      const getGreeting = funcs.getGreeting;
      let str = 'John';
      let expectedVal = 'Hello John!';
      expect(getGreeting(str)).to.equal(expectedVal);
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      let num = 20;
      let num2 = 10;
      expect(getRectangleArea(num, num2)).to.be.a('number');
    });
    it('should return 200 if arguements are 29 and 10', () => {
      const getRectangleArea = funcs.getRectangleArea;
      let num = 20;
      let num2 = 10;
      let expectedVal = 200;
      expect(getRectangleArea(num, num2)).to.equal(expectedVal);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      let num = 10;
      let num2 = 20;
      expect(getTriangleArea(num, num2)).to.be.a('number');
    });
    it('should return 100 if arguements are 29 and 10', () => {
      const getTriangleArea = funcs.getTriangleArea;
      let num = 10;
      let num2 = 20;
      let expectedVal = 100;
      expect(getTriangleArea(num, num2)).to.equal(expectedVal);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      let num = 10;
      expect(getCircleArea(num)).to.be.a('number');
    });
    it('should return 314.1592653589793 if arguements is 10', () => {
      const getCircleArea = funcs.getCircleArea;
      let num = 10;
      let expectedVal = 314.1592653589793;
      expect(getCircleArea(num)).to.equal(expectedVal);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      let num = 10;
      let num2 = 20;
      let num3 = 10;
      expect(getRectangularPrismVolume(num, num2, num3)).to.be.a('number');
    });
    it('should return 2000 if arguements are 10, 20 and 10', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      let num = 10;
      let num2 = 20;
      let num3 = 10;
      let expectedVal = 2000;
      expect(getRectangularPrismVolume(num, num2, num3)).to.equal(expectedVal);
    });
  });
});
