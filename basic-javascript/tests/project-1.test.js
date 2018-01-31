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
    const multiplyByTen = funcs.multiplyByTen;
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('returns a `number` multiplied by ten given that a number is passed in', () => {
      const twenty = multiplyByTen(2);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('returns a `number` minused from 5 given that a number is passed in', () => {
      const five = subtractFive(10);
      assert.typeOf(five, 'number');
      assert.equal(five, 5);
    });

  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return correct output and tyepof', () => {
      assert.equal(areSameLength([1, 2], [2, 3]), true);
      assert.typeOf(areSameLength([1, 2], [2, 3]), 'boolean');
    })
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return correct output and typeof', () => {
      assert.equal(areEqual(5, 5), true);
      assert.typeOf(areEqual(5, 3), 'boolean');
    });
  });


  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return correct output and typeof', () => {
      assert.equal(lessThanNinety(5), true);
      assert.typeOf(lessThanNinety(100), 'boolean');
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return correct output and typeof', () => {
      assert.equal(greaterThanFifty(5), false);
      assert.typeOf(greaterThanFifty(100), 'boolean');
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return correct output and typeof', () => {
      const ten = add(5, 5);
      assert.equal(ten, 10);
      assert.typeOf(ten, 'number');
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return correct output and typeof', () => {
      const four = subtract(9, 5);
      assert.equal(four, 4);
      assert.typeOf(four, 'number');
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return correct output and typeof', () => {
      const two = divide(10, 5);
      assert.equal(two, 2);
      assert.typeOf(two, 'number');
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return correct output and typeof', () => {
      const fifty = multiply(10, 5);
      assert.equal(fifty, 50);
      assert.typeOf(fifty, 'number');
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return correct output and typeof', () => {
      const one = getRemainder(11, 5);
      assert.equal(one, 1);
      assert.typeOf(one, 'number');
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = isEven(5);
      assert.equal(output, false);
      assert.typeOf(output, 'boolean');
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = isOdd(5);
      assert.equal(output, true);
      assert.typeOf(output, 'boolean');
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = square(5);
      assert.equal(output, 25);
      assert.typeOf(output, 'number');
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = cube(5);
      assert.equal(output, 125);
      assert.typeOf(output, 'number');
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = raiseToPower(5, 2);
      assert.equal(output, 25);
      assert.typeOf(output, 'number');
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = roundNumber(2.1);
      assert.equal(output, 2);
      assert.typeOf(output, 'number');
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = roundUp(3.8);
      assert.equal(output, 4);
      assert.typeOf(output, 'number');
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = addExclamationPoint('yay');
      assert.equal(output, "yay!");
      assert.typeOf(output, 'string');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = combineNames('jamie', 'domingo');
      assert.equal(output, "jamie domingo");
      assert.typeOf(output, 'string');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = getGreeting('jamie');
      assert.equal(output, "Hello jamie!");
      assert.typeOf(output, 'string');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = getRectangleArea(2, 3);
      assert.equal(output, 6);
      assert.typeOf(output, 'number');
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = getTriangleArea(5, 5);
      assert.equal(output, 12.5);
      assert.typeOf(output, 'number');
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = getCircleArea(2, 2);
      assert.equal(output, (2 * 2 * Math.PI));
      assert.typeOf(output, 'number');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return correct output and typeof', () => {
      const output = getRectangularPrismVolume(2, 4, 6);
      assert.equal(output, (2 * 4 * 6));
      assert.typeOf(output, 'number');
    });
  });
});
