const { assert } = require('chai');
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
      const { multiplyByTen } = funcs;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const { subtractFive } = funcs;
      assert.typeOf(subtractFive, 'function');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const { areSameLength } = funcs;
      assert.typeOf(areSameLength, 'function');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const { areEqual } = funcs;
      assert.typeOf(areEqual, 'function');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const { lessThanNinety } = funcs;
      assert.typeOf(lessThanNinety, 'function');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const { greaterThanFifty } = funcs;
      assert.typeOf(greaterThanFifty, 'function');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const { add } = funcs;
      assert.typeOf(add, 'function');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const { subtract } = funcs;
      assert.typeOf(subtract, 'function');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const { divide } = funcs;
      assert.typeOf(divide, 'function');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const { multiply } = funcs;
      assert.typeOf(multiply, 'function');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const { getRemainder } = funcs;
      assert.typeOf(getRemainder, 'function');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const { isEven } = funcs;
      assert.typeOf(isEven, 'function');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const { isOdd } = funcs;
      assert.typeOf(isOdd, 'function');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const { square } = funcs;
      assert.typeOf(square, 'function');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const { cube } = funcs;
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const { raiseToPower } = funcs;
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const { roundNumber } = funcs;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const { roundUp } = funcs;
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const { addExclamationPoint } = funcs;
      assert.typeOf(addExclamationPoint, 'function');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const { combineNames } = funcs;
      assert.typeOf(combineNames, 'function');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const { getGreeting } = funcs;
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const { getRectangleArea } = funcs;
      assert.typeOf(getRectangleArea, 'function');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const { getTriangleArea } = funcs;
      assert.typeOf(getTriangleArea, 'function');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const { getCircleArea } = funcs;
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const { getRectangularPrismVolume } = funcs;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});
