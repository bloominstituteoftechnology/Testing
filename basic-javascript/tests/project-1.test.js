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
    const multiplyByTen = funcs.multiplyByTen;
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should return the product of a num and 10', () => {
      const product = multiplyByTen(2);
      assert.equal(product, 20);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return the difference of a num and 5', () => {
      const diff = subtractFive(6);
      assert.equal(diff, 1);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return if lengths are equal', () => {
      const checkLength = areSameLength(4, 4);
      assert.equal(checkLength, true);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return if two values are equal', () => {
      const checkValue = areEqual(6, 6);
      assert.equal(checkValue, true);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true if num is less than 90', () => {
      const checkNum = lessThanNinety(80);
      assert.equal(checkNum, true);
    });
    it('should return false if num is greater than 90', () => {
      const checkNum = lessThanNinety(91);
      assert.equal(checkNum, false);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true if num is greater than 50', () => {
      const checkNum = greaterThanFifty(51);
      assert.equal(checkNum, true);
    });
    it('should return false if num is less than 50', () => {
      const checkNum = greaterThanFifty(40);
      assert.equal(checkNum, false);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return addition of two nums', () => {
      const sum = add(4, 5);
      assert.equal(sum, 9);
    });
    it('should return addition of two nums', () => {
      const sum = add(6, 8);
      assert.equal(sum, 14);
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return difference of two nums', () => {
      const diff = subtract(8, 6);
      assert.equal(diff, 2);
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return division of two nums', () => {
      const div = divide(10, 5);
      assert.equal(div, 2);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return product of two nums', () => {
      const prod = multiply(8, 8);
      assert.equal(prod, 64);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return remainder of two nums', () => {
      const modulo = getRemainder(35, 8);
      assert.equal(modulo, 3);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return true if num is even', () => {
      const checkEven = isEven(2);
      assert.equal(checkEven, true);
    });
    it('should return false if num is not even', () => {
      const checkEven = isEven(3);
      assert.equal(checkEven, false);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if num is odd', () => {
      const checkOdd = isOdd(13);
      assert.equal(checkOdd, true);
    });
    it('should return false if num is not odd', () => {
      const checkOdd = isOdd(12);
      assert.equal(checkOdd, false);
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => { 
      assert.typeOf(square, 'function');
    });
    it('should return square', () => {
      const isSquare = square(9);
      assert.equal(isSquare, 81);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return square root', () => {
      const cubed = cube(3);
      assert.equal(cubed, 27);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return value raised to power', () => {
      const powered = raiseToPower(5, 3);
      assert.equal(powered, 125)
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should round a number', () => {
      const rounded = roundNumber(99.1);
      assert.equal(rounded, 99);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should round num up', () => {
      const roundedUp = roundUp(99.9);
      assert.equal(roundedUp, 100);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add !', () => {
      const x = addExclamationPoint('Hello');
      assert.equal(x, 'Hello!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should combine names', () => {
      const combine = combineNames('Mike', 'Streltsoff');
      assert.equal(combine, 'Mike Streltsoff');
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return greeting', () => {
      const greeting = getGreeting('Terrie');
      assert.equal(greeting, 'Hello Terrie!');
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return area of rectangle', () => {
      const area = getRectangleArea(4, 8);
      assert.equal(area, 32);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return triangle area', () => {
      const triArea = getTriangleArea(4, 8);
      assert.equal(triArea, 16);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return circle area', () => {
      const cirArea = getCircleArea(10, 10);
      assert.equal(cirArea, 314.1592653589793);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return area of prism', () => {
      const priArea = getRectangularPrismVolume(7, 64, 21);
      assert.equal(priArea, 9408);
    });
  });
});
