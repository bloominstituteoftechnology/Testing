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
    const { multiplyByTen } = funcs;
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    it('should multiply by 10 and return the number', () => {
      const twenty = multiplyByTen(2);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`subtractFive`', () => {
    const { subtractFive } = funcs;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract five and return the number', () => {
      const twenty = subtractFive(25);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`areSameLength`', () => {
    const { areSameLength } = funcs;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true, if both strings have same length', () => {
      const stringLengthMatchTrue = areSameLength('Hello World', 'abc def ghi');
      assert.typeOf(stringLengthMatchTrue, 'boolean');
      assert.isTrue(stringLengthMatchTrue);
    });
    it('should return false, if both strings do not have same length', () => {
      const stringLengthMatchFalse = areSameLength('Hello World', 'abc');
      assert.typeOf(stringLengthMatchFalse, 'boolean');
      assert.isFalse(stringLengthMatchFalse);
    });
  });

  describe('`areEqual`', () => {
    const { areEqual } = funcs;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return true, if both values are the same, otherwise, return false', () => {
      const areEqualValues = areEqual('Hello', 'Hello');
      assert.typeOf(areEqualValues, 'boolean');
      assert.isTrue(areEqualValues);
      const areNotEqualValues = areEqual('Hello', 'Hola');
      assert.typeOf(areNotEqualValues, 'boolean');
      assert.isFalse(areNotEqualValues);
    });
  });

  describe('`lessThanNinety`', () => {
    const { lessThanNinety } = funcs;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true, if number is less than 90', () => {
      const isTwentyLessThanNinety = lessThanNinety(20);
      assert.typeOf(isTwentyLessThanNinety, 'boolean');
      assert.isTrue(isTwentyLessThanNinety);
    });
  });

  describe('`greaterThanFifty`', () => {
    const { greaterThanFifty } = funcs;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true, if number is greater than 50', () => {
      const isSeventyGreaterThanFifty = greaterThanFifty(70);
      assert.typeOf(isSeventyGreaterThanFifty, 'boolean');
      assert.isTrue(isSeventyGreaterThanFifty);
    });
  });

  describe('`add`', () => {
    const { add } = funcs;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should return the sum (type: number) of two numbers', () => {
      const twenty = add(10, 10);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`subtract`', () => {
    const { subtract } = funcs;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should return the difference (type: number) of two numbers', () => {
      const twenty = subtract(30, 10);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`divide`', () => {
    const { divide } = funcs;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should return the quotient (type: number) of two numbers', () => {
      const twenty = divide(200, 10);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`multiply`', () => {
    const { multiply } = funcs;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should return the product (type: number) of two numbers', () => {
      const twenty = multiply(10, 2);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`getRemainder`', () => {
    const { getRemainder } = funcs;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder (type: number) of two numbers', () => {
      const twenty = getRemainder(100, 80);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`isEven`', () => {
    const { isEven } = funcs;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should return true, if the number is an even number', () => {
      const isEvenNumber = isEven(1024);
      assert.typeOf(isEvenNumber, 'boolean');
      assert.isTrue(isEvenNumber);
    });
  });

  describe('`isOdd`', () => {
    const { isOdd } = funcs;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should return true, if the number is an odd number', () => {
      const isOddNumber = isOdd(111);
      assert.typeOf(isOddNumber, 'boolean');
      assert.isTrue(isOddNumber);
    });
  });

  describe('`square`', () => {
    const { square } = funcs;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return squared value (type: number) of the number', () => {
      const TwentyFive = square(5);
      assert.typeOf(TwentyFive, 'number');
      assert.equal(TwentyFive, 25);
    });
  });

  describe('`cube`', () => {
    const { cube } = funcs;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return cubed value (type: number) of the number', () => {
      const oneTwentyFive = cube(5);
      assert.typeOf(oneTwentyFive, 'number');
      assert.equal(oneTwentyFive, 125);
    });
  });

  describe('`raiseToPower`', () => {
    const { raiseToPower } = funcs;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number raised to given exponent', () => {
      const oneTwentyFive = raiseToPower(5, 3);
      assert.typeOf(oneTwentyFive, 'number');
      assert.equal(oneTwentyFive, 125);
    });
  });

  describe('`roundNumber`', () => {
    const { roundNumber } = funcs;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number after rounding', () => {
      const Two = roundNumber(1.5);
      assert.typeOf(Two, 'number');
      assert.equal(Two, 2);
    });
  });

  describe('`roundUp`', () => {
    const { roundUp } = funcs;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number after rounding up', () => {
      const Two = roundUp(1.1);
      assert.typeOf(Two, 'number');
      assert.equal(Two, 2);
    });
  });

  describe('`addExclamationPoint`', () => {
    const { addExclamationPoint } = funcs;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should contain `!` at the end of the string', () => {
      const stringWithExclamation = addExclamationPoint('Congrats');
      assert.typeOf(stringWithExclamation, 'string');
      assert.equal(stringWithExclamation, 'Congrats!');
    });
  });

  describe('`combineNames`', () => {
    const { combineNames } = funcs;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should return combined firstname & lastname', () => {
      const fullname = combineNames('John', 'Doe');
      assert.typeOf(fullname, 'string');
      assert.equal(fullname, 'John Doe');
    });
  });

  describe('`getGreeting`', () => {
    const { getGreeting } = funcs;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a greeting string', () => {
      const greeting = getGreeting('John');
      assert.typeOf(greeting, 'string');
      assert.equal(greeting, 'Hello John!');
    });
  });

  describe('`getRectangleArea`', () => {
    const { getRectangleArea } = funcs;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return area (type: number) of a rectangle', () => {
      const area = getRectangleArea(20, 10);
      assert.typeOf(area, 'number');
      assert.equal(area, 200);
    });
  });

  describe('`getTriangleArea`', () => {
    const { getTriangleArea } = funcs;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return area (type: number) of a triangle', () => {
      const area = getTriangleArea(10, 20);
      assert.typeOf(area, 'number');
      assert.equal(area, 100);
    });
  });

  describe('`getCircleArea`', () => {
    const { getCircleArea } = funcs;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return area (type: number) of a circle', () => {
      const area = getCircleArea(10);
      assert.typeOf(area, 'number');
      assert.equal(area, Math.PI * Math.pow(10, 2));
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const { getRectangularPrismVolume } = funcs;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return volume (type: number) of a rectangular prism', () => {
      const volume = getRectangularPrismVolume(50, 25, 10);
      assert.typeOf(volume, 'number');
      assert.equal(volume, 12500);
    });
  });
});
