// const chai = require('chai');
const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');
const cases = require('../src/project-1.js');

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
    it('should return 100 when passed 10 as argument', () => {
      const multiplyByTen = cases.multiplyByTen;
      expect(multiplyByTen(10)).to.equal(100);
    });

    it('should return a number', () => {
      const multiplyByTen = cases.multiplyByTen;
      expect(multiplyByTen(10)).to.be.a('number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    // begin here
    it('should return 105 when passed 110 as argument', () => {
      const subtractFive = cases.subtractFive;
      expect(subtractFive(110)).to.equal(105);
    });

    it('should return a number', () => {
      const subtractFive = cases.subtractFive;
      expect(subtractFive(10)).to.be.a('number');
    });

  });



  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    // begin here
    it('should return true if length on both are same', () => {
      const areSameLength = cases.areSameLength;
      expect(areSameLength('floor', 'table')).to.equal(true);
    });

    it('should return a boolean', () => {
      const areSameLength = cases.areSameLength;
      expect(areSameLength('floor', 'table')).to.be.a('boolean');
    });

  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    // begin here
    it('should return true if both are same', () => {
      const areEqual = cases.areEqual;
      expect(areEqual('table', 'table')).to.equal(true);
    });

    it('should return a boolean', () => {
      const areEqual = cases.areEqual;
      expect(areEqual('floor', 'table')).to.be.a('boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    // begin here
    it('should return true if number is less than 90', () => {
      const lessThanNinety = cases.lessThanNinety;
      expect(lessThanNinety(89)).to.equal(true);
    });

    it('should return a boolean', () => {
      const lessThanNinety = cases.lessThanNinety;
      expect(lessThanNinety(89)).to.be.a('boolean');
    });

  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if number is greater than 50', () => {
      const greaterThanFifty = cases.greaterThanFifty;
      expect(greaterThanFifty(51)).to.equal(true);
    });

    it('should return a boolean', () => {
      const greaterThanFifty = cases.greaterThanFifty;
      expect(greaterThanFifty(89)).to.be.a('boolean');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return 5 when passed 3 and 2 as arguments', () => {
      const add = cases.add;
      expect(add(3, 2)).to.equal(5);
    });

    it('should return a number', () => {
      const add = cases.add;
      expect(add(3, 2)).to.be.a('number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return 5 when passed 7 and 2 as arguments', () => {
      const subtract = cases.subtract;
      expect(subtract(7, 2)).to.equal(5);
    });

    it('should return a number', () => {
      const subtract = cases.subtract;
      expect(subtract(7, 2)).to.be.a('number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return 5 when passed 10 and 2 as arguments', () => {
      const divide = cases.divide;
      expect(divide(10, 2)).to.equal(5);
    });

    it('should return a number', () => {
      const divide = cases.divide;
      expect(divide(10, 2)).to.be.a('number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return 20 when passed 10 and 2 as arguments', () => {
      const multiply = cases.multiply;
      expect(multiply(10, 2)).to.equal(20);
    });

    it('should return a number', () => {
      const multiply = cases.multiply;
      expect(multiply(10, 2)).to.be.a('number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return 5 when passed 25 and 10 as arguments', () => {
      const getRemainder = cases.getRemainder;
      expect(getRemainder(25, 10)).to.equal(5);
    });

    it('should return a number', () => {
      const getRemainder = cases.getRemainder;
      expect(getRemainder(10, 2)).to.be.a('number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true when passed 24 as argument', () => {
      const isEven = cases.isEven;
      expect(isEven(24)).to.equal(true);
    });

    it('should return a boolean', () => {
      const isEven = cases.isEven;
      expect(isEven(10)).to.be.a('boolean');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true when passed 23 as argument', () => {
      const isOdd = cases.isOdd;
      expect(isOdd(23)).to.equal(true);
    });

    it('should return a boolean', () => {
      const isOdd = cases.isOdd;
      expect(isOdd(10)).to.be.a('boolean');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return 16 when passed 4 as argument', () => {
      const square = cases.square;
      expect(square(5)).to.equal(25);
    });

    it('should return a number', () => {
      const square = cases.square;
      expect(square(5)).to.be.a('number');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return 8 when passed 2 as argument', () => {
      const cube = cases.cube;
      expect(cube(2)).to.equal(8);
    });

    it('should return a number', () => {
      const cube = cases.cube;
      expect(cube(5)).to.be.a('number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return 16 when passed 2 and 4 as arguments', () => {
      const raiseToPower = cases.raiseToPower;
      expect(raiseToPower(2, 4)).to.equal(16);
    });

    it('should return a number', () => {
      const raiseToPower = cases.raiseToPower;
      expect(raiseToPower(2, 4)).to.be.a('number');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return 3 when passed 3.14 as argument', () => {
      const roundNumber = cases.roundNumber;
      expect(roundNumber(3.14)).to.equal(3);
    });

    it('should return a number', () => {
      const roundNumber = cases.roundNumber;
      expect(roundNumber(5.14)).to.be.a('number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return 4 when passed 3.14 as argument', () => {
      const roundUp = cases.roundUp;
      expect(roundUp(3.14)).to.equal(4);
    });

    it('should return a number', () => {
      const roundUp = cases.roundUp;
      expect(roundUp(5.14)).to.be.a('number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return up! when passed up as argument', () => {
      const addExclamationPoint = cases.addExclamationPoint;
      expect(addExclamationPoint('up')).to.equal('up!');
    });

    it('should return a string', () => {
      const addExclamationPoint = cases.addExclamationPoint;
      expect(addExclamationPoint('string')).to.be.a('string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return Nyan Schrodinger when passed Nyan and Schrodinger as arguments', () => {
      const combineNames = cases.combineNames;
      expect(combineNames('Nyan', 'Schrodinger')).to.equal('Nyan Schrodinger');
    });

    it('should return a string', () => {
      const combineNames = cases.combineNames;
      expect(combineNames('Nyan', 'Schrodinger')).to.be.a('string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return Hello Perry when passed Perry as an argument', () => {
      const getGreeting = cases.getGreeting;
      expect(getGreeting('Perry')).to.equal('Hello Perry!');
    });

    it('should return a string', () => {
      const getGreeting = cases.getGreeting;
      expect(getGreeting('Perry')).to.be.a('string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return 100 when passed 25, 4 as arguments', () => {
      const getRectangleArea = cases.getRectangleArea;
      expect(getRectangleArea(25, 4)).to.equal(100);
    });

    it('should return a number', () => {
      const getRectangleArea = cases.getRectangleArea;
      expect(getRectangleArea(25, 4)).to.be.a('number');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return 50 when passed 25, 4 as arguments', () => {
      const getTriangleArea = cases.getTriangleArea;
      expect(getTriangleArea(25, 4)).to.equal(50);
    });

    it('should return a number', () => {
      const getTriangleArea = cases.getTriangleArea;
      expect(getTriangleArea(25, 4)).to.be.a('number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return 78.5 when passed 5 as argument', () => {
      const getCircleArea = cases.getCircleArea;
      expect(getCircleArea(0)).to.equal(0);
    });

    it('should return a number', () => {
      const getCircleArea = cases.getCircleArea;
      expect(getCircleArea(0)).to.be.a('number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return 27 when passed 3, 3 and 3 as arguments', () => {
      const getRectangularPrismVolume = cases.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(3, 3, 3)).to.equal(27);
    });

    it('should return a number', () => {
      const getRectangularPrismVolume = cases.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(3, 3, 3)).to.be.a('number');
    });
  });
});
