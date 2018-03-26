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
      const multiplyByTen = funcs.multiplyByTen(10);
      assert.typeOf(multiplyByTen, 'number');
    });
    // begin here
    it('should equals to 100', () => {
      const multiplyByTen = funcs.multiplyByTen(5);
      assert.equal(multiplyByTen, 50);
    })
    it('should return the correct answer', ()=> {
      const tests = [10, -5];
      const answers = [100, -50];
      tests.forEach((each, i) => {
        const result = funcs.multiplyByTen(each);
        assert.equal(result, answers[i]);
      });
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive(25);
      assert.typeOf(subtractFive, 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength('test', 'none');
      assert.typeOf(areSameLength, 'boolean');
    });
    it('should report true', () => {
      const areSameLength = funcs.areSameLength('test', 'none');
      assert.equal(areSameLength, true);
    })
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual(5, 5);
      assert.typeOf(areEqual, 'boolean');
    });
    it('should report false', () => {
      const areEqual = funcs.areEqual(5, 6);
      assert.equal(areEqual, false);
    })
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety(45);
      assert.typeOf(lessThanNinety, 'boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty(70);
      assert.typeOf(greaterThanFifty, 'boolean');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add(7, 5);
      assert.typeOf(add, 'number');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract(15, 10);
      assert.typeOf(subtract, 'number');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide(50, 10);
      assert.typeOf(divide, 'number');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply(5, 7);
      assert.typeOf(multiply, 'number');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder(32, 6);
      assert.typeOf(getRemainder, 'number');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven(64);
      assert.typeOf(isEven, 'boolean');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd(11);
      assert.typeOf(isOdd, 'boolean');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square(4);
      assert.typeOf(square, 'number');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube(3);
      assert.typeOf(cube, 'number');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower(2, 4);
      assert.typeOf(raiseToPower, 'number');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber(12.5);
      assert.typeOf(roundNumber, 'number');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp(12.6);
      assert.typeOf(roundUp, 'number');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint('bang');
      assert.typeOf(addExclamationPoint, 'string');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames('Nikhil', 'Kamineni');
      assert.typeOf(combineNames, 'string');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting('Nikhil');
      assert.typeOf(getGreeting, 'string');
    });
  });

  describe('`getRectangleArea`', () => {
    const { getRectangleArea } = funcs;
    
    it('should be a function', () => {
      // const getRectangleArea = funcs.getRectangleArea(2, 4);
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the area', () => {
      const area = getRectangleArea(2, 4);
      assert.typeOf(area, 'number');
    })
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea(3, 6);
      assert.typeOf(getTriangleArea, 'number');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea(4);
      assert.typeOf(getCircleArea, 'number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume(3, 4, 5);
      assert.typeOf(getRectangularPrismVolume, 'number');
    });
  });
});
