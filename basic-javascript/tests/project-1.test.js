/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const expect = require('chai').expect;
const chai = require('chai');
const sinon = require('sinon-chai');
const asserttype = require('chai-asserttype');

const funcs = require('../src/project-1');

chai.use(asserttype);

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
    it('Should return num multiplied by 10', () => {
      assert.equal(multiplyByTen(1), 10);
      assert.equal(multiplyByTen(-3), -30);
    });
    it('Should return a number', () => {
      assert.typeOf(num, 'number');
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('Should return num - 5', () => {
      assert.equal(subtractFive(182), 177);
      assert.equal(subtractFive(2), -3);
      assert.equal(subtractFive(5), 0);
    });
    it('Should return a number', () => {
      assert.typeOf(num, 'number');
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if the arguments have the same length', () => {
      assert.equal(areSameLength('dhsj73d', '598734jhd'), false);
      assert.equal(areSameLength('mouse!', 'modest'), true);
    });
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if the arguments are equal', () => {
      assert.equal(areEqual(5, 5), true);
    });
    it('Should return a booleaen', () => {
      expect(true).to.be.boolean();
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if the argument is less than 90', () => {
      assert.equal(lessThanNinety(111), false);
      assert.equal(lessThanNinety(42), true);
    });
    it('Should return a booleaen', () => {
      expect(true).to.be.boolean();
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if the argument is greater than 50', () => {
      assert.equal(greaterThanFifty(333), true);
      assert.equal(greaterThanFifty(21), false);
    });
    it('Should return a booleaen', () => {
      expect(true).to.be.boolean();
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return the sum of the two arguments', () => {
      expect(add(1, 5)).to.equal(6);
      expect(add(-2, 6)).to.equal(4);
    });
    it('Should return a number', () => {
      expect(add(1, 5)).to.be.a('number');
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return the remainder of x - y', () => {
      expect(subtract(1, 5)).to.equal(-4);
      expect(subtract(-2, 6)).to.equal(-8);
    });
    it('Should return a number', () => {
      expect(subtract(1, 5)).to.be.a('number');
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return the quotients of x divided by y', () => {
      expect(divide(144, 12)).to.equal(12);
      expect(divide(84, 2)).to.equal(42);
    });
    it('Should return a number', () => {
      expect(divide(84, 2)).to.be.a('number');
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return the product of x multiplied by y', () => {
      expect(multiply(12, 12)).to.equal(144);
      expect(multiply(84, 2)).to.equal(168);
    });
    it('Should return a number', () => {
      expect(multiply(84, 2)).to.be.a('number');
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the product of x multiplied by y', () => {
      expect(getRemainder(12, 12)).to.equal(0);
      expect(getRemainder(85, 14)).to.equal(1);
    });
    it('Should return a number', () => {
      expect(getRemainder(84, 14)).to.be.a('number');
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return true if the argument is even', () => {
      assert.equal(isEven(333), false);
      assert.equal(isEven(42), true);
    });
    it('Should return a booleaen', () => {
      expect(true).to.be.boolean();
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if the argument is odd', () => {
      assert.equal(isOdd(331), true);
      assert.equal(isOdd(42), false);
    });
    it('Should return a booleaen', () => {
      expect(true).to.be.boolean();
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('Should return the square of num', () => {
      expect(square(12)).to.equal(144);
      expect(square(5)).to.equal(25);
    });
    it('Should return a number', () => {
      expect(square(84)).to.be.a('number');
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of num', () => {
      expect(cube(12)).to.equal(1728);
      expect(cube(5)).to.equal(125);
    });
    it('Should return a number', () => {
      expect(cube(42)).to.be.a('number');
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it("should return the argument after raising it to the exponent's power", () => {
      expect(raiseToPower(12, 3)).to.equal(1728);
      expect(raiseToPower(5, 7)).to.equal(78125);
    });
    it('Should return a number', () => {
      expect(raiseToPower(42, 2)).to.be.a('number');
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return the argument after rounding it', () => {
      expect(roundNumber(12.3)).to.equal(12);
      expect(roundNumber(5.7)).to.equal(6);
    });
    it('Should return a number', () => {
      expect(roundNumber(42.2)).to.be.a('number');
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return the argument after rounding it', () => {
      expect(roundUp(12.3)).to.equal(13);
      expect(roundUp(5.7)).to.equal(6);
    });
    it('Should return a number', () => {
      expect(roundUp(42.2)).to.be.a('number');
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return the argument after adding an exclamation point to it', () => {
      expect(addExclamationPoint('Cowboy Dan')).to.equal('Cowboy Dan!');
      expect(addExclamationPoint('Barney')).to.equal('Barney!');
    });
    it('Should return a string', () => {
      expect(addExclamationPoint('Liz')).to.be.a('string');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return the combined variables', () => {
      expect(combineNames('Cowboy', 'Dan')).to.equal('Cowboy Dan');
      expect(combineNames('Super', 'Woman')).to.equal('Super Woman');
    });
    it('Should return a string', () => {
      expect(combineNames('Super Woman')).to.be.a('string');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it("should return the string 'Hello  {name}!'", () => {
      expect(getGreeting('Lambda School')).to.equal('Hello Lambda School!');
      expect(getGreeting('Isaac Brock')).to.equal('Hello Isaac Brock!');
    });
    it('Should return a string', () => {
      expect(getGreeting('Isaac Brock')).to.be.a('string');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the Rectangle area', () => {
      expect(getRectangleArea(6, 4)).to.equal(24);
      expect(getRectangleArea(12, 5)).to.equal(60);
    });
    it('Should return a number', () => {
      expect(getRectangleArea(12, 5)).to.be.a('number');
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return the triangle area', () => {
      expect(getTriangleArea(6, 4)).to.equal(12);
      expect(getTriangleArea(12, 5)).to.equal(30);
    });
    it('Should return a number', () => {
      expect(getTriangleArea(12, 5)).to.be.a('number');
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the Circle area', () => {
      expect(getCircleArea(4, 4)).to.equal(50.26548245743669);
      expect(getCircleArea(12, 12)).to.equal(452.3893421169302);
    });
    it('Should return a number', () => {
      expect(getCircleArea(12, 12)).to.be.a('number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the Rectangular Prism Volume', () => {
      expect(getRectangularPrismVolume(2, 4, 12)).to.equal(96);
      expect(getRectangularPrismVolume(3, 7, 4)).to.equal(84);
    });
    it('Should return a number', () => {
      expect(getRectangularPrismVolume(3, 9, 2)).to.be.a('number');
    });
  });
});
