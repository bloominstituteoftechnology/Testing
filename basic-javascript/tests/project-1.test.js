/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;

// for practice, am going to be alternating among should, assert and expect, so bring in should and expect
const should = require('chai').should(); // but should be avoided according to documentation
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
      // assert.typeOf(multiplyByTen, 'object');
      multiplyByTen.should.be.a('function');
    });
    // begin here
    it('result should be a number that is a product of 10', () => {
      const num = 30;
      const result = multiplyByTen(num);
      assert.equal(result, 300);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      // assert.typeOf(subtractFive, 'array');
      expect(subtractFive).to.be.a('function');
    });
    it('should be a difference of five', () => {
      const num = 35;
      const result = subtractFive(num);
      assert.equal(result, 30);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      // assert.typeOf(areSameLength, 'number');
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if strings have the same length', () => {
      const str1 = 'same';
      const str2 = 'five';
      const result = areSameLength(str1, str2);
      assert.equal(result, true);
    });
    it('should return false if strings have the same length', () => {
      const str1 = 'same';
      const str2 = 'fives';
      const result = areSameLength(str1, str2);
      assert.equal(result, false);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      // assert.typeOf(areEqual, 'number');
      areEqual.should.be.a('function');
    });

    // you can use notStrictEqual also

    // test true
    it('should return true if arguments are strictly equal', () => {
      // assert.strictEqual(areEqual('5', 5), true); // fail
      assert.strictEqual(areEqual(5, 5), true); // pass
    });

    // test false
    it('should return false if arguments are strictly equal', () => {
      // assert.strictEqual(areEqual('5', 5), true); // fail
      assert.strictEqual(areEqual('5', 5), false); // pass
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      // assert.typeOf(lessThanNinety, 'number');
      expect(lessThanNinety).to.be.a('function');
    });
    it('should return true if number is less than 90', () => {
      // assert.equal(lessThanNinety(90), true); // fail
      assert.equal(lessThanNinety(80), true); // pass
    });
    it('should return false if number is greater than or equal to 90', () => {
      // assert.equal(lessThanNinety(80), false); // fail
      assert.equal(lessThanNinety(90), false);
      assert.equal(lessThanNinety(100), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      // assert.typeOf(greaterThanFifty, 'number');
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if the number is greater than 50', () => {
      // assert.equal(greaterThanFifty(50), true); // fail
      assert.equal(greaterThanFifty(55), true);
    });
    it('should return false if the number is equal to or less than fifty', () => {
      // assert.equal(greaterThanFifty(60), false); // fail
      assert.equal(greaterThanFifty(50), false);
      assert.equal(greaterThanFifty(40), false);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      // assert.typeOf(add, 'number');
      add.should.be.a('function');
    });
    it('result should be a number, equal to the sum of two numbers', () => {
      // assert.equal(add(2, 3), 6); // fail
      assert.equal(add(2, 3), 5); // pass
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      // assert.typeOf(subtract, 'number');
      expect(subtract).to.be.a('function');
    });
    it('result should be a difference of two numbers', () => {
      // assert.equal(subtract(4, 5), 1); // fail
      assert.equal(subtract(4, 5), -1); // pass
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      // assert.typeOf(divide, 'number');
      assert.typeOf(divide, 'function');
    });
    it(' divide by 3 should equal 3', () => {
      // assert.equal(divide(9, 3), 4); // fail
      assert.equal(divide(9, 3), 3); // pass
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      // assert.typeOf(multiply, 'number');
      multiply.should.be.a('function');
    });
    it('multiply 4 by 3 should equal 12', () => {
      // assert.equal(multiply(4, 3), 4); // fail
      assert.equal(multiply(4, 3), 12); // pass
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      // assert.typeOf(getRemainder, 'number');
      expect(getRemainder).to.be.a('function');
    });
    it('getRemainder 4 modular 3 should equal 1', () => {
      // assert.equal(getRemainder(4, 3), 4); // fail
      assert.equal(getRemainder(4, 3), 1); // pass
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      // assert.typeOf(isEven, 'number');
      assert.typeOf(isEven, 'function');
    });
    it('Should return true if num is even', () => {
      // assert.equal(isEven(5), true); // fail
      assert.equal(isEven(4), true); // pass
    });
    it('Should return false if num is odd', () => {
      // assert.equal(isEven(4), false); // fail
      assert.equal(isEven(5), false); // pass
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      // assert.typeOf(isOdd, 'number');
      isOdd.should.be.a('function');
    });
    it('Should return true if num is odd', () => {
      // assert.equal(isOdd(4), true); // fail
      assert.equal(isOdd(5), true); // pass
    });
    it('Should return false if num is even', () => {
      // assert.equal(isOdd(5), false); // fail
      assert.equal(isOdd(4), false); // pass
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      // assert.typeOf(square, 'object');
      expect(square).to.be.a('function');
    });
    it('Should return 16  when you square 4', () => {
      // assert.equal(square(4), 15); // fail
      assert.equal(square(4), 16); // pass
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      // assert.typeOf(cube, 'object');
      assert.typeOf(cube, 'function');
    });
    it('should return 27 when you cube 3 ', () => {
      // assert.equal(cube(3), 9); // fail
      assert.equal(cube(3), 27); // pass
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      // assert.typeOf(raiseToPower, 'object');
      raiseToPower.should.be.a('function');
    });
    it('should return 64 when raiseToPower 2 by 6 ', () => {
      // assert.equal(raiseToPower(2, 6), 65); // fail
      assert.equal(raiseToPower(2, 6), 64); // pass
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      // assert.typeOf(roundNumber, 'object');
      expect(roundNumber).to.be.a('function');
    });
    it('should return 5 when round 4.5 ', () => {
      // assert.equal(roundNumber(4.5), 4); // fail
      assert.equal(roundNumber(4.4), 4); // pass
      assert.equal(roundNumber(4.5), 5); // pass
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      // assert.typeOf(roundUp, 'object');
      assert.typeOf(roundUp, 'function');
    });
    it('should return 5 when round 4.5 ', () => {
      // assert.equal(roundUp(4.3), 4); // fail
      assert.equal(roundUp(4.3), 5); // pass
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      // assert.typeOf(addExclamationPoint, 'string');
      addExclamationPoint.should.be.a('function');
    });
    it('should return Hello World!', () => {
      // assert.equal(addExclamationPoint('Hello World!'), 'Hello World!'); // fail
      assert.equal(addExclamationPoint('Hello World'), 'Hello World!'); // pass
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      // assert.typeOf(combineNames, 'string');
      expect(combineNames).to.be.a('function');
    });
    it('should return Edward Manda', () => {
      // assert.equal(combineNames('Edward', 'Mandas'), 'Edward Manda'); // fail
      assert.equal(combineNames('Edward', 'Manda'), 'Edward Manda'); // pass
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      // assert.typeOf(getGreeting, 'string');
      assert.typeOf(getGreeting, 'function');
    });
    it('should return Hello World', () => {
      // assert.equal(getGreeting('Edward'), 'hi Edward'); // fail
      assert.equal(getGreeting('Edward'), 'Hello Edward!'); // pass
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      // assert.typeOf(getRectangleArea, 'string');
      getRectangleArea.should.be.a('function');
    });
    it('should return 30 when you have length 6 and width 5', () => {
      // assert.equal(getRectangleArea(5, 6), 31); // fail
      assert.equal(getRectangleArea(5, 6), 30); // pass
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      // assert.typeOf(getTriangleArea, 'string');
      expect(getTriangleArea).to.be.a('function');
    });
    it('should return 20 when you have base 4 and height 10', () => {
      // assert.equal(getTriangleArea(4, 10), 40); // fail
      assert.equal(getTriangleArea(4, 10), 20); // pass
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      // assert.typeOf(getCircleArea, 'string');
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return correct area given radius 6 -- cheating alittle here because We dealing with PI ', () => {
      // assert.equal(getCircleArea(6), 5); // fail
      assert.equal(getCircleArea(6), 36 * Math.PI); // pass
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      // assert.typeOf(getRectangularPrismVolume, 'string');
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return 60 when given width of 3 height of 4 and length of 5', () => {
      // getRectangularPrismVolume(3, 4, 5).should.equal(61); // fail
      getRectangularPrismVolume(3, 4, 5).should.equal(60); // pass
    });
  });
});
