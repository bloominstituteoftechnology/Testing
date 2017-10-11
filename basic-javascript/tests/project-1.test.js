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
    it('should return 50 when passed 5', () => {
      expect(funcs.multiplyByTen(5)).to.equal(50);
    });
    it('should return a number', () => {
      expect(funcs.multiplyByTen(5)).to.be.a('number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 5 when passed 10', () => {
      expect(funcs.subtractFive(10)).to.equal(5);
    });
    it('should return a number', () => {
      expect(funcs.subtractFive(10)).to.be.a('number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true when passed two strings of equal length', () => {
      expect(funcs.areSameLength('foo', 'bar')).to.equal(true);
    });
    it('should return false when passed two strings of different length', () => {
      expect(funcs.areSameLength('pizza', 'cheese')).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.areSameLength('foo', 'bar')).to.be.a('boolean');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true when passed the same number', () => {
      expect(funcs.areEqual(5, 5)).to.equal(true);
    });
    it('should return false when passed different numbers', () => {
      expect(funcs.areEqual(5, 6)).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.areEqual(5, 5)).to.be.a('boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true when passed a number less than 90', () => {
      expect(funcs.lessThanNinety(5)).to.equal(true);
    });
    it('should return false when passed a number greater than or equal to 90', () => {
      expect(funcs.lessThanNinety(95)).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.lessThanNinety(5)).to.be.a('boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true when passed a number greater than 50', () => {
      expect(funcs.greaterThanFifty(55)).to.equal(true);
    });
    it('should return false when passed a number less than or equal to 50', () => {
      expect(funcs.greaterThanFifty(5)).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.greaterThanFifty(5)).to.be.a('boolean');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return 15 when passed 5 and 10', () => {
      expect(funcs.add(5, 10)).to.equal(15);
    });
    it('should return a number', () => {
      expect(funcs.add(5, 10)).to.be.a('number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return 5 when passed 15 and 10', () => {
      expect(funcs.subtract(15, 10)).to.equal(5);
    });
    it('should return a number', () => {
      expect(funcs.subtract(15, 10)).to.be.a('number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return 5 when passed 100 and 20', () => {
      expect(funcs.divide(100, 20)).to.equal(5);
    });
    it('should return a number', () => {
      expect(funcs.divide(100, 20)).to.be.a('number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return 100 when passed 5 and 20', () => {
      expect(funcs.multiply(5, 20)).to.equal(100);
    });
    it('should return a number', () => {
      expect(funcs.multiply(5, 20)).to.be.a('number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return 5 when passed 25 and 20', () => {
      expect(funcs.getRemainder(25, 20)).to.equal(5);
    });
    it('should return a number', () => {
      expect(funcs.getRemainder(5, 20)).to.be.a('number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true when passed 4', () => {
      expect(funcs.isEven(4)).to.equal(true);
    });
    it('should return false when passed 5', () => {
      expect(funcs.isEven(5)).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.isEven(5)).to.be.a('boolean');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true when passed 5', () => {
      expect(funcs.isOdd(5)).to.equal(true);
    });
    it('should return false when passed 4', () => {
      expect(funcs.isOdd(4)).to.equal(false);
    });
    it('should return a boolean', () => {
      expect(funcs.isOdd(5)).to.be.a('boolean');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return 25 when passed 5', () => {
      expect(funcs.square(5)).to.equal(25);
    });
    it('should return a number', () => {
      expect(funcs.square(5)).to.be.a('number');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return 8 when passed 2', () => {
      expect(funcs.cube(2)).to.equal(8);
    });
    it('should return a number', () => {
      expect(funcs.cube(2)).to.be.a('number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return 16 when passed 2 and 4', () => {
      expect(funcs.raiseToPower(2, 4)).to.equal(16);
    });
    it('should return a number', () => {
      expect(funcs.raiseToPower(2, 4)).to.be.a('number');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return 5 when passed 5.3', () => {
      expect(funcs.roundNumber(5.3)).to.equal(5);
    });
    it('should return a number', () => {
      expect(funcs.roundNumber(5.3)).to.be.a('number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return 6 when passed 5.3', () => {
      expect(funcs.roundUp(5.3)).to.equal(6);
    });
    it('should return a number', () => {
      expect(funcs.roundUp(5.3)).to.be.a('number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return hello! when passed hello', () => {
      expect(funcs.addExclamationPoint('hello')).to.equal('hello!');
    });
    it('should return a string', () => {
      expect(funcs.addExclamationPoint('hello')).to.be.a('string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return Jon Snow when passed Jon and Snow', () => {
      expect(funcs.combineNames('Jon', 'Snow')).to.equal('Jon Snow');
    });
    it('should return a string', () => {
      expect(funcs.combineNames('Jon', 'Snow')).to.be.a('string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return Hello Jon! when passed Jon', () => {
      expect(funcs.getGreeting('Jon')).to.equal('Hello Jon!');
    });
    it('should return a string', () => {
      expect(funcs.getGreeting('Jon')).to.be.a('string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return 6 when passed 2 and 3', () => {
      expect(funcs.getRectangleArea(2, 3)).to.equal(6);
    });
    it('should return a number', () => {
      expect(funcs.getRectangleArea(2, 3)).to.be.a('number');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return 6 when passed 3 and 4', () => {
      expect(funcs.getTriangleArea(3, 4)).to.equal(6);
    });
    it('should return a number', () => {
      expect(funcs.getTriangleArea(3, 4)).to.be.a('number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the correct area when passed 5', () => {
      expect(funcs.getCircleArea(5)).to.equal(25 * Math.PI);
    });
    it('should return a number', () => {
      expect(funcs.getCircleArea(5)).to.be.a('number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return 24 when passed 2, 3, and 4', () => {
      expect(funcs.getRectangularPrismVolume(2, 3, 4)).to.equal(24);
    });
    it('should return a number', () => {
      expect(funcs.getRectangularPrismVolume(2, 3, 4)).to.be.a('number');
    });
  });
});
