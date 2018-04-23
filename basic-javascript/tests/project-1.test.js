/* eslint-disable */

const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Func Test Suite', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should be a number', () => {
      const multiplyByTen = funcs.multiplyByTen(10);
      assert.typeOf(multiplyByTen, 'number');
    });
    it('should return the right number', () => {
      const multiplyByTen = funcs.multiplyByTen(10);
      assert.equal(multiplyByTen, 100, 'multiplyByTen(10) equals 100');
    });
  });


  describe('`subtractFive`', () => {

    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });

    it('should be a number', () => {
      const subtractFive = funcs.subtractFive(10 - 5);
      assert.typeOf(subtractFive, 'number');
    });

    it('should return the correct number', () => {
      const subtractFive = funcs.subtractFive(10);
      assert.equal(subtractFive, 5, 'subtractFive(10)equals5');
    });

  });

  describe('`areSameLength`', () => {

    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });

    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength('hi', 'hello');
      assert.typeOf(areSameLength, 'boolean');
    });

    it('should return a false boolean value', () => {
      const areSameLength = funcs.areSameLength('hi', 'hello');
      assert.equal(areSameLength, false, 'boolean');
    })
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean value', () => {
      assert.typeOf(areEqual(4, 2), 'boolean');
    });
    it('should return true if values match', () => {
      assert.strictEqual(areEqual(2, 2), true, 'boolean');
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean value', () => {
      assert.typeOf(lessThanNinety(89), 'boolean');
    });
    it('should return true if value is less than 90', () => {
      assert.isOk(lessThanNinety(89), 'boolean');
    });
    it('should return false if value is 90 or greater', () => {
      assert.notOk(lessThanNinety(91), 'boolean');
    });
  });

    describe('`greaterThanFifty`', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      it('should be a function', () => {
        assert.typeOf(greaterThanFifty, 'function');
      });
      it('should return a boolean', () => {
        assert.typeOf(greaterThanFifty(2), 'boolean');
      });
      it('should return true if value is greater than 50', () => {
        assert.isOk(greaterThanFifty(51));
      })
      it('should return false if value is less than 50', () => {
        assert.notOk(greaterThanFifty(49));
    });
  });
  
    describe('`add`', () => {
      it('should be a function', () => {
        const add = funcs.add;
        assert.typeOf(add, 'function');
      });
    });

    describe('`subtract`', () => {
      it('should be a function', () => {
        const subtract = funcs.subtract;
        assert.typeOf(subtract, 'function');
      });
    });

    describe('`divide`', () => {
      it('should be a function', () => {
        const divide = funcs.divide;
        assert.typeOf(divide, 'function');
      });
    });

    describe('`multiply`', () => {
      it('should be a function', () => {
        const multiply = funcs.multiply;
        assert.typeOf(multiply, 'function');
      });
    });

    describe('`getRemainder`', () => {
      it('should be a function', () => {
        const getRemainder = funcs.getRemainder;
        assert.typeOf(getRemainder, 'function');
      });
    });

    describe('`isEven`', () => {
      it('should be a function', () => {
        const isEven = funcs.isEven;
        assert.typeOf(isEven, 'function');
      });
    });

    describe('`isOdd`', () => {
      it('should be a function', () => {
        const isOdd = funcs.isOdd;
        assert.typeOf(isOdd, 'function');
      });
    });

    describe('`square`', () => {
      it('should be a function', () => {
        const square = funcs.square;
        assert.typeOf(square, 'function');
      });
    });

    describe('`cube`', () => {
      it('should be a function', () => {
        const cube = funcs.cube;
        assert.typeOf(cube, 'function');
      });
    });

    describe('`raiseToPower`', () => {
      it('should be a function', () => {
        const raiseToPower = funcs.raiseToPower;
        assert.typeOf(raiseToPower, 'function');
      });
    });

    describe('`roundNumber`', () => {
      it('should be a function', () => {
        const roundNumber = funcs.roundNumber;
        assert.typeOf(roundNumber, 'function');
      });
    });

    describe('`roundUp`', () => {
      it('should be a function', () => {
        const roundUp = funcs.roundUp;
        assert.typeOf(roundUp, 'function');
      });
    });

    describe('`addExclamationPoint`', () => {
      it('should be a function', () => {
        const addExclamationPoint = funcs.addExclamationPoint;
        assert.typeOf(addExclamationPoint, 'function');
      });
    });

    describe('`combineNames`', () => {
      it('should be a function', () => {
        const combineNames = funcs.combineNames;
        assert.typeOf(combineNames, 'function');
      });
    });

    describe('`getGreeting`', () => {
      it('should be a function', () => {
        const getGreeting = funcs.getGreeting;
        assert.typeOf(getGreeting, 'function');
      });
    });

    describe('`getRectangleArea`', () => {
      it('should be a function', () => {
        const getRectangleArea = funcs.getRectangleArea;
        assert.typeOf(getRectangleArea, 'function');
      });
    });

    describe('`getTriangleArea`', () => {
      it('should be a function', () => {
        const getTriangleArea = funcs.getTriangleArea;
        assert.typeOf(getTriangleArea, 'function');
      });
    });

    describe('`getCircleArea`', () => {
      it('should be a function', () => {
        const getCircleArea = funcs.getCircleArea;
        assert.typeOf(getCircleArea, 'function');
      });
    });

    describe('`getRectangularPrismVolume`', () => {
      it('should be a function', () => {
        const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
        assert.typeOf(getRectangularPrismVolume, 'function');
      });
    });
  });
