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
    it('multiplyByTen(5) to equal 50', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(5), 50);
    });
    it('multiplyByTen(-5) to equal 50', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(-5), -50);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('subtractFive(5) to equal 0', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(5), 0);
    });
    it('subtractFive(32) to equal 27', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(32), 27);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('areSameLength(`hello`, `heart`) to equal true', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('hello', 'heart'), true);
    });
    it('areSameLength(`hi`, `heart`) to equal false', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('hi', 'heart'), false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('areEqual(4, 4) to equal true', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(4, 4), true);
    });
    it('areEqual(false, false) to equal true', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(false, false), true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('lessThanNinety(89) to equal true', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(89), true);
    });
    it('lessThanNinety(1024) to equal false', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(1024), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('greaterThanFifty(55) to equal true', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.strictEqual(greaterThanFifty(55), true);
    });
    it('greaterThanFifty(49) to equal false', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.strictEqual(greaterThanFifty(49), false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('add(1, 2), to equal 3', () => {
      const add = funcs.add;
      assert.strictEqual(add(1, 2), 3);
    });
    it('add(99, 1), to equal 3', () => {
      const add = funcs.add;
      assert.strictEqual(add(99, 1), 100);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('subtract(5, 1), to equal 4', () => {
      const subtract = funcs.subtract;
      assert.strictEqual(subtract(5, 1), 4);
    });
    it('subtract(99, 10), to equal 89', () => {
      const subtract = funcs.subtract;
      assert.strictEqual(subtract(99, 10), 89);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('divide(4, 2), to equal 2', () => {
      const divide = funcs.divide;
      assert.strictEqual(divide(4, 2), 2);
    });
    it('divide(9, 3), to equal 3', () => {
      const divide = funcs.divide;
      assert.strictEqual(divide(9, 3), 3);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('multiply(11, 5), to equal 55', () => {
      const multiply = funcs.multiply;
      assert.strictEqual(multiply(11, 5), 55)
    });
    it('multiply(12, 3), to equal 36', () => {
      const multiply = funcs.multiply;
      assert.strictEqual(multiply(12, 3), 36)
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('getRemainder(0, 3) to equal ', () => {
      const getRemainder = funcs.getRemainder;
      assert.strictEqual(getRemainder(0, 3), 0);
    });
    it('getRemainder(1, 3) to equal ', () => {
      const getRemainder = funcs.getRemainder;
      assert.strictEqual(getRemainder(1, 3), 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('isEven(98), to equal true', () => {
      const isEven = funcs.isEven;
      assert.strictEqual(isEven(98), true);
    });
    it('isEven(11), to equal false', () => {
      const isEven = funcs.isEven;
      assert.strictEqual(isEven(11), false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('isOdd(3) to equal true', () => {
      const isOdd = funcs.isOdd;
      assert.strictEqual(isOdd(3), true);
    });
    it('isOdd(44) to equal false', () => {
      const isOdd = funcs.isOdd;
      assert.strictEqual(isOdd(44), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('square(2) to equal 4', () => {
      const square = funcs.square;
      assert.strictEqual(square(2), 4);
    });
    it('square(9) to equal 81', () => {
      const square = funcs.square;
      assert.strictEqual(square(9), 81);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('cube(2) to equal 8', () => {
      const cube = funcs.cube;
      assert.strictEqual(cube(2), 8);
    });
    it('cube(3) to equal 27', () => {
      const cube = funcs.cube;
      assert.strictEqual(cube(3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('raiseToPower(2, 3), to equal 8', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.strictEqual(raiseToPower(2, 3), 8);
    });
    it('raiseToPower(3, 3), to equal 27', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.strictEqual(raiseToPower(3, 3), 27);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('roundNumber(2.9) to equal 3', () => {
      const roundNumber = funcs.roundNumber;
      assert.strictEqual(roundNumber(2.9), 3);
    });
    it('roundNumber(2.1) to equal 2', () => {
      const roundNumber = funcs.roundNumber;
      assert.strictEqual(roundNumber(2.1), 2);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('roundUp(3.1) to equal 4', () => {
      const roundUp = funcs.roundUp;
      assert.strictEqual(roundUp(3.1), 4);
    });
    it('roundUp(99.01) to equal 100', () => {
      const roundUp = funcs.roundUp;
      assert.strictEqual(roundUp(99.01), 100);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('addExclamationPoint(`Hello World`) to equal `Hello World!`', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.strictEqual(addExclamationPoint('Hello World'), 'Hello World!');
    });
    it('addExclamationPoint(Stop) to equal Stop!', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.strictEqual(addExclamationPoint('Stop'), 'Stop!')
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
    it('combineNames(`Fred`, `Flinstone`) to equal `Fred Flinstone`', () => {
      const combineNames = funcs.combineNames;
      assert.strictEqual(combineNames('Fred', 'Flinstone'), 'Fred Flinstone');
    });
    it('combineNames(`Barney`, `Rubble`) to equal `Barney Rubble`', () => {
      const combineNames = funcs.combineNames;
      assert.strictEqual(combineNames('Barney', 'Rubble'), 'Barney Rubble');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
    it('getGreeting(`Donald`) to equal `Hello Donald!`', () => {
      const getGreeting = funcs.getGreeting;
      assert.strictEqual(getGreeting('Donald'), 'Hello Donald!')
    });
    it('getGreeting(`Freddy`) to equal `Hello Freddy!`', () => {
      const getGreeting = funcs.getGreeting;
      assert.strictEqual(getGreeting('Freddy'), 'Hello Freddy!')
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
    it('getRectangleArea(2, 2) to equal 4', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.strictEqual(getRectangleArea(2, 2), 4)
    });
    it('getRectangleArea(9, 4) to equal 36', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.strictEqual(getRectangleArea(9, 4), 36)
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
    it('getTriangleArea(2, 5) to equal 5', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.strictEqual(getTriangleArea(2, 5), 5)
    });
    it('getTriangleArea(3, 10) to equal 15', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.strictEqual(getTriangleArea(3, 10), 15)
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
    it('getCircleArea(10) to equal 314.16', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.strictEqual(getCircleArea(10), 314.1592653589793)
    });
    it('getCircleArea(3.5) to equal 38.48', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.strictEqual(getCircleArea(3.5), 38.48451000647496)
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
    it('getRectangularPrismVolume(4, 1.5, 3) to equal 18', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.strictEqual(getRectangularPrismVolume(4, 1.5, 3), 18)
    });
    it('getRectangularPrismVolume(3, 3, 3) to equal 27', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.strictEqual(getRectangularPrismVolume(3, 3, 3), 27)
    });
  });

});
