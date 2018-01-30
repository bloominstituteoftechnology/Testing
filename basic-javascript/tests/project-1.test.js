/* eslint-disable */

const assert = require('chai').assert;
const funcs = require('../src/project-1');
const expect = require('chai').expect;

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
    it('should return 100 when passed 10', () => {
      expect(funcs.multiplyByTen(10)).to.equal(100);
    });
    it('should return a number', () => {
      expect(funcs.multiplyByTen(10)).to.be.a('number')
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 0 when passed 5', () => {
      const subtractFive = funcs.subtractFive;
      expect(funcs.subtractFive(5)).to.equal(0);
    });
    it('should return a number', () => {
      expect(funcs.subtractFive(5)).to.be.a('number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return false when passed two unequal strings', () => {
      expect(funcs.areSameLength('milk', 'bread')).to.equal(false);
    });
    it('should return true when passed two equal strings', () => {
      expect(funcs.areSameLength('milk', 'eggs')).to.equal(true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true if both numbers passed are the same', () => {
      expect(funcs.areEqual(1, 1)).to.equal(true);
    })
    it('should return false if both numbers passed are not equal', () => {
      expect(funcs.areEqual(1, 2)).to.equal(false);
    })
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true of num passed is less than 90', () => {
      expect(funcs.lessThanNinety(1)).to.equal(true);
    });
    it('should return false if num passed is greater than 90', () => {
      expect(funcs.lessThanNinety(91)).to.equal(false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if num passed is greater than 50', () => {
      expect(funcs.greaterThanFifty(51)).to.equal(true);
    });
    it('should retuen false if num passed is less than 50', () => {
      expect(funcs.greaterThanFifty(1)).to.equal(false);
    })
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return 10 when passed 5 and 5', () => {
      expect(funcs.add(5, 5)).to.equal(10);
    });
    it('should return a number when passed two numbers', () => {
      expect(funcs.add(5, 5)).to.be.a('number');
    })
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return 0 when passed 5 and 5', () => {
      expect(funcs.subtract(5, 5)).to.equal(0);
    });
    it('should return a number when passed two numbers', () => {
      expect(funcs.subtract(5, 5)).to.be.a('number');
    })
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return 10 when passed 100 and 10', () => {
      expect(funcs.divide(100, 10)).to.equal(10);
    });
    it('should return a number when passed two positve integers', () => {
      expect(funcs.divide(100, 10)).to.be.a('number');
    })
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return 100 when passed 10 and 10', () => {
      expect(funcs.multiply(10, 10)).to.equal(100);
    });
    it('should return a number when passed two integers', () => {
      expect(funcs.multiply(10, 10)).to.be.a('number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return 5 when passed 15 and 10', () => {
      expect(funcs.getRemainder(15, 10)).to.equal(5);
    });
    it('should return a number when passed two itegers', () => {
      expect(funcs.getRemainder(15, 10)).to.be.a('number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true when passed 2', () => {
      expect(funcs.isEven(2)).to.equal(true);
    });
    it('should return false when passed 3', () => {
      expect(funcs.isEven(3)).to.equal(false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true when passed 3', () => {
      expect(funcs.isOdd(3)).to.equal(true);
    });
    it('should return false when passed 2', () => {
      expect(funcs.isOdd(2)).to.equal(false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return 4 when passed 2', () => {
      expect(funcs.square(2)).to.equal(4);
    });
    it('should return a number when passed an integer', () => {
      expect(funcs.square(2)).to.be.a('number');
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
    it('should return a number when passed am integer', () => {
      expect(funcs.cube(2)).to.be.a('number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return 4 when passed 2 and 2', () => {
      expect(funcs.raiseToPower(2, 2)).to.equal(4);
    });
    it('should return a number when passed an integer', () => {
      expect(funcs.raiseToPower(2, 2)).to.be.a('number');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return 1 when passed 1.2', () => {
      expect(funcs.roundNumber(1.2)).to.equal(1);
    });
    it('should return a number when passed a number', () => {
      expect(funcs.roundNumber(1.2)).to.be.a('number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return 2 when passed 1.7', () => {
      expect(funcs.roundUp(1.7)).to.equal(2);
    });
    it('should return a number when passed a number', () => {
      expect(funcs.roundUp(1.7)).to.be.a('number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return pizza! when passed pizza', () => {
      expect(funcs.addExclamationPoint('pizza')).to.equal('pizza!');
    });
    it('should return a string when passed a string', () => {
      expect(funcs.addExclamationPoint('pizza')).to.be.a('string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return patrick sandoval when passed patrick and sandoval', () => {
      expect(funcs.combineNames('patrick', 'sandoval')).to.equal('patrick sandoval');
    });
    it('should return a string when passed two strings', () => {
      expect(funcs.combineNames('patrick', 'sandoval')).to.be.a('string');
    })
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return Hello patrick! when passed patrick', () => {
      expect(funcs.getGreeting('patrick')).to.equal('Hello patrick!');
    });
    it('should return a string when passed a string', () => {
      expect(funcs.getGreeting('patrick')).to.be.a('string');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return 4 when passed 2 and 2', () => {
      expect(funcs.getRectangleArea(2, 2)).to.equal(4);
    });
    it('should return a number when passed two integers', () => {
      expect(funcs.getRectangleArea(2, 2)).to.be.a('number');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return 2 when passed 2 and 2', () => {
      expect(funcs.getTriangleArea(2, 2)).to.equal(2);
    });
    it('should return a number when passed two integers', () => {
      expect(funcs.getTriangleArea(2, 2)).to.be.a('number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return calculated area when passed 10', () => {
      expect(funcs.getCircleArea(10)).to.equal(Math.PI * 100);
    });
    it('should return a number when passed an integer', () => {
      expect(funcs.getCircleArea(10)).to.be.a('number');
    })
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return 8 when passed 2, 2, and 2', () => {
      expect(funcs.getRectangularPrismVolume(2, 2, 2)).to.equal(8);
    });
    it('should return a number when passed 3 integers', () => {
      expect(funcs.getRectangularPrismVolume(2, 2, 2)).to.be.a('number');
    });
  });
});
