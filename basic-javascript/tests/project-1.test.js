/* eslint-disable prefer-destructuring */
const chai = require('chai');

const assert = chai.assert;
const expect = chai.expect;
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
    const num = multiplyByTen(3);
    it('should return a number', () => {
      assert.typeOf(num, 'number');
    });
    it('should return 30', () => {
      expect(num).to.equal(30);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    const num = subtractFive(12);
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      expect(num).to.be.a('number');
    });
    it('should equal 7', () => {
      expect(num).to.equal(7);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    const check = areSameLength('1234', '5678');
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean (true/false)', () => {
      expect(check).to.be.a('boolean');
    });
    it('should return true', () => {
      expect(check).to.equal(true);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    const check = areEqual(5, 5);
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean (true/false)', () => {
      expect(check).to.be.a('boolean');
    });
    it('should return true', () => {
      expect(check).to.equal(true);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    const check = lessThanNinety(90);
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean (true/false)', () => {
      expect(check).to.be.a('boolean');
    });
    it('should return false', () => {
      expect(check).to.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    const check = greaterThanFifty(50);
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean (true/false)', () => {
      expect(check).to.be.a('boolean');
    });
    it('should return false', () => {
      expect(check).to.equal(false);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    const result = add(18, 4);
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should add up to 22', () => {
      expect(result).to.equal(22);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    const result = subtract(20, 8);
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 12', () => {
      expect(result).to.equal(12);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    const result = divide(12, 3);
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 4', () => {
      expect(result).to.equal(4);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    const result = multiply(12, 12);
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 144', () => {
      expect(result).to.be.equal(144);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    const result = getRemainder(18, 4);
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 2', () => {
      expect(result).to.equal(2);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    const result = isEven(2);
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean (true/false)', () => {
      assert.typeOf(result, 'boolean');
    });
    it('should return true', () => {
      assert.equal(result, true);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    const result = isOdd(1);
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean (true/false)', () => {
      assert.typeOf(result, 'boolean');
    });
    it('should return true', () => {
      assert.equal(result, true);
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    const result = square(5);
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 25', () => {
      assert.equal(result, 25);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    const result = cube(2);
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 8', () => {
      expect(result).to.equal(8);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    const result = raiseToPower(5, 5);
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 3125', () => {
      expect(result).to.equal(3125);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    const result = roundNumber(4.49);
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 4', () => {
      expect(result).to.equal(4);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    const result = roundUp(4.2);
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 5', () => {
      assert.equal(result, 5);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    const result = addExclamationPoint('Hello');
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('string');
    });
    it('should return `Hello!`', () => {
      assert.equal(result, 'Hello!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    const result = combineNames('Austen', 'Allred');
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('string');
    });
    it('should return `Austen Allred!`', () => {
      expect(result).to.equal('Austen Allred');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    const result = getGreeting('Spongebob');
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('string');
    });
    it('should return `Hello Spongebob!`', () => {
      assert.equal(result, 'Hello Spongebob!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    const result = getRectangleArea(8, 4);
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 32', () => {
      expect(result).to.be.equal(32);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    const result = getTriangleArea(14, 4);
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 28', () => {
      assert.equal(result, 28);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    const result = getCircleArea(2);
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return the area of a 2in circle', () => {
      assert.equal(result, Math.PI * 4);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    const result = getRectangularPrismVolume(2, 3, 4);
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      expect(result).to.be.a('number');
    });
    it('should return 24', () => {
      expect(result).to.equal(24);
    });
  });
});
