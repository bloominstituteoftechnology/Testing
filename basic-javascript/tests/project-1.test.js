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
    it('should multiple by ten', () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(10)).to.equal(100);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract num by five', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(10), 5)
    })
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if strings are the same length', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('travis', 'travis'), true);
    })
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should evaluate if nums are equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(10, 10), true);
    })
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be a number less than ninty', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(80), true);
      assert.equal(lessThanNinety(90), false);
    })
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be a number greater than fifty', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(50), false);
      assert.equal(greaterThanFifty(51), true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add two values together', () => {
      const add = funcs.add;
      assert.equal(add(5,5), 10)
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract two values', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(5,5), 0)
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide two values', () => {
      const divide = funcs.divide;
      assert.equal(divide(5,5), 1)
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
        it('should multiply two values', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(5,5), 25)
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should getRemainder two values', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(6,5), 1)
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should isEven two values', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(2), true);
      assert.equal(isEven(3), false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should isOdd two values', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(3), true);
      assert.equal(isOdd(2), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should square the num', () => {
      const square = funcs.square;
      assert.equal(square(5), 25);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should cube the num', () => {
      const cube = funcs.cube;
      assert.equal(cube(5), 125);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return num ^ num2 fucker', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2,3), 8);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round number', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(4.5), 5);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round number up', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(4.1), 5);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add an exclamation point to the string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('hello'),'hello!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should concat names', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Jerry', 'Brown'), 'Jerry Brown');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return name with hello in greeting', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Vance'), 'Hello Vance!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the area of a rectangle given the width and length', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(5, 5), 25);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return the area of a triangle', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(5, 5), 12.5);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the area of a circle', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(2), 12.566370614359172);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the volume of a prism', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(2,2,2), 8);
    });
  });
});
