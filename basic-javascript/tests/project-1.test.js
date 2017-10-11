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
    it('should multiply by 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(4), 40);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract 5 from number', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(10), 5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should have the same length', () => {
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('abcd', 'efgh'), true);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('x and y should be equal', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(1, 1), true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('num should be less than ninety', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(70), true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('number should be greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(70), true);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add x and y', () => {
      const add = funcs.add;
      assert.equal(add(7, 7), 14);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subract x and y', () => {
      const subract = funcs.subtract;
      assert.equal(subract(10, 3), 7);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide x and y', () => {
      const divide = funcs.divide;
      assert.equal(divide(14, 2), 7);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply x and y', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(7, 10), 70);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should get the remainder of x and y', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(10, 7), 3);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('num should be a even number', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(2), true);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('num should be an odd number', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(7), true);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the square of num', () => {
      const square = funcs.square;
      assert.equal(square(7), 49);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of num', () => {
      const cube = funcs.cube;
      assert.equal(cube(3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return num by the exponet power', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(3, 3), 27);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should round the number', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(7.7), 8);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should round up the number', () => {
      const roundUp = funcs.roundNumber;
      assert.equal(roundUp(6.7), 7);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add ! to the edd of string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('Hello'), 'Hello!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should combine both strings into one', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('Firstname', 'Lastname'), 'Firstname Lastname');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should add name to greeting', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Brandon'), 'Hello Brandon!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the area of length and width', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(7, 7), 49);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should find the are of a triangle', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(7, 7), 24.5);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should find the area of a circle', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(7), 153.93804002589985);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the rectangular prism value', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(2, 2, 2), 8);
    });
  });
});
