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
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should multiply given int by 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(2), 20);
    });
  });
});


describe('`subtractFive`', () => {
  it('should be a function', () => {
    const subtractFive = funcs.subtractFive;
    assert.typeOf(subtractFive, 'function');
  });

  it('should subtract 5 from a given input', () => {
    const subtractFive = funcs.subtractFive;
    assert.equal(subtractFive(9), 4, 'is that four?');
  // assert.typeOf(subtractFive('string'), 'Type a number only please');
  });
});

describe('`areSameLength`', () => {
  it('should be a function', () => {
    const areSameLength = funcs.areSameLength;
    assert.typeOf(areSameLength, 'function');
  });
});

describe('`areEqual`', () => {
  it('should be a function', () => {
    const areEqual = funcs.areEqual;
    assert.typeOf(areEqual, 'function');
  });
});

describe('`lessThanNinety`', () => {
  it('should be a function', () => {
    const lessThanNinety = funcs.lessThanNinety;
    assert.typeOf(lessThanNinety, 'function');
  });
  /* it('should check if given int is less than 90', () => {
    const lessThanNinety = funcs.lessThanNinety;
    assert.isBelow(lessThanNinety(89), 90, '89 is stricly less than 90');
  }); */
});

describe('`greaterThanFifty`', () => {
  it('should be a function', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    assert.typeOf(greaterThanFifty, 'function');
  });
  /* it('should check if given int is greater than 50', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    assert.isAbove(greaterThanFifty(51), 50, '51 is stricly greater than 50');
  }); */
});

describe('`square`', () => {
  it('should be a function', () => {
    const square = funcs.square;
    assert.typeOf(square, 'function');
  });
  it('should multiply given int by given int itself', () => {
    const square = funcs.square;
    assert.equal(square(3), 9);
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
  it('should multiply given int by given int itself', () => {
    const square = funcs.square;
    assert.equal(square(3), 9);
  });
});

describe('`cube`', () => {
  it('should be a function', () => {
    const cube = funcs.cube;
    assert.typeOf(cube, 'function');
  });
  it('should multiply given int by itself twice', () => {
    const cube = funcs.cube;
    assert.equal(cube(3), 27);
  });
});

describe('`raiseToPower`', () => {
  it('should be a function', () => {
    const raiseToPower = funcs.raiseToPower;
    assert.typeOf(raiseToPower, 'function');
  });
  /* it('should raise the given int to the power of the next given exponent', () => {
    const raiseToPower = funcs.raiseToPower;
    assert.equal(raiseToPower(2), (3), 8);
  }); */
});

describe('`roundNumber`', () => {
  it('should be a function', () => {
    const roundNumber = funcs.roundNumber;
    assert.typeOf(roundNumber, 'function');
  });
  it('should round off given int to a whole number', () => {
    const roundNumber = funcs.roundNumber;
    assert.equal(roundNumber(3.14), 3);
  });
});

describe('`roundUp`', () => {
  it('should be a function', () => {
    const roundUp = funcs.roundUp;
    assert.typeOf(roundUp, 'function');
  });
  it('should round up given int to the next greater number', () => {
    const roundUp = funcs.roundUp;
    assert.equal(roundUp(3.7), 4);
  });
});

describe('`addExclamationPoint`', () => {
  it('should be a function', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    assert.typeOf(addExclamationPoint, 'function');
  });
  it('should add an exclamation point to a string', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    assert.equal(addExclamationPoint('Hello'), 'Hello!');
  });
});

describe('`combineNames`', () => {
  it('should be a function', () => {
    const combineNames = funcs.combineNames;
    assert.typeOf(combineNames, 'function');
  });
  it('should multiply given int by given int itself', () => {
    const square = funcs.square;
    assert.equal(square(3), 9);
  });
});

describe('`getGreeting`', () => {
  it('should be a function', () => {
    const getGreeting = funcs.getGreeting;
    assert.typeOf(getGreeting, 'function');
  });
  it('should multiply given int by given int itself', () => {
    const square = funcs.square;
    assert.equal(square(3), 9);
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
  it('should multiply given int by given int itself', () => {
    const square = funcs.square;
    assert.equal(square(3), 9);
  });
});

describe('`getCircleArea`', () => {
  it('should be a function', () => {
    const getCircleArea = funcs.getCircleArea;
    assert.typeOf(getCircleArea, 'function');
  });
  it('should multiply given int by given int itself', () => {
    const square = funcs.square;
    assert.equal(square(3), 9);
  });
});

describe('`getRectangularPrismVolume`', () => {
  it('should be a function', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    assert.typeOf(getRectangularPrismVolume, 'function');
  });
  it('should multiply given int by given int itself', () => {
    const square = funcs.square;
    assert.equal(square(3), 9);
  });
});
