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
    it('should return n * 10', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const n = 5;
      assert.equal(multiplyByTen(n), n * 10);
    });
    it('should return 0 when num is 0', () => {
      const multiplyByTen = funcs.multiplyByTen;
      const n = 0;
      assert.equal(multiplyByTen(n), n * 10);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 5 when n = 10', () => {
      const subtractFive = funcs.subtractFive;
      const n = 10;
      assert.equal(subtractFive(n), n - 5);
    });
    it('should return -5 when n = 0', () => {
      const subtractFive = funcs.subtractFive;
      const n = 2;
      assert.equal(subtractFive(n), n - 5);
    });
    it('should return -7 when n = -2', () => {
      const subtractFive = funcs.subtractFive;
      const n = -3;
      assert.equal(subtractFive(n), n - 5);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return false when strings are different lengths', () => {
      const areSameLength = funcs.areSameLength;
      assert.isFalse(areSameLength('abc', 'abcd'), 'abc and abcd are not the same length');
    });
    it('should return true when strings are same length', () => {
      const areSameLength = funcs.areSameLength;
      assert.isTrue(areSameLength('abc', 'def'), 'abc and def are the same length');
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true when nums are equal', () => {
      const areEqual = funcs.areEqual;
      assert.isTrue(areEqual(1, 1), '1 is equal to 1');
    });
    it('should return false when nums are not equal', () => {
      const areEqual = funcs.areEqual;
      assert.isFalse(areEqual(2, 4), '2 is not equal to 4');
      assert.isFalse(areEqual(3, '3'), '3 is not equal to "3"');
      assert.isFalse(areEqual(0, null), '0 is not equal to null');
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true when num is less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.isTrue(lessThanNinety(89), '89 is less than 90');
      assert.isTrue(lessThanNinety(-100), '-100 is less than 90');
    });
    it('should return false when num is not less than 90', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.isFalse(lessThanNinety(90), '90 is equal to 90');
      assert.isFalse(lessThanNinety(91), '91 is more than 90');
      assert.isFalse(lessThanNinety(1000), '1000 is more than 90');
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true when num is greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.isTrue(greaterThanFifty(51), '51 is greater than 50');
      assert.isTrue(greaterThanFifty(1000), '1000 is greater than 50');
    });
    it('should return false when num is not greater than 50', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.isFalse(greaterThanFifty(50), '50 is equal to 50');
      assert.isFalse(greaterThanFifty(-51), '-51 is less than 50');
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return the addition of x and y', () => {
      const add = funcs.add;
      assert.equal(add(5, 4), 9, 'the sum of 5 and 4 is 9');
      assert.equal(add(0, 4), 4, 'the sum of 0 and 4 is 4');
      assert.equal(add(4, -5), -1, 'the sum of 4 and -5 is -1');
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return the subtraction of x and y', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(10, 4), 6, '10 minus 4 equals 6');
      assert.equal(subtract(-10, 4), -14, '-10 minus 4 equals -14');
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return x divided by y', () => {
      const divide = funcs.divide;
      assert.equal(divide(12, 3), 4, '12 divided by 3 is 4');
      assert.equal(divide(0, 3), 0, '0 divided by 3 is 0');
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return the multiple of x and y', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(10, 6), 60, '10 times 6 is 60');
      assert.equal(multiply(0, 13432), 0, '0 times 13432 is 0');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder of x divided by y', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(9, 8), 1, 'the remainder of 9 divided by 8 is 1');
      assert.equal(getRemainder(4, 7), 4, 'the remainder of 4 divided by 7 is 4');
      assert.equal(getRemainder(-9, 8), -1, 'the remainder of -9 divided by 8 is -1');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true if num is even', () => {
      const isEven = funcs.isEven;
      assert.isTrue(isEven(80), '80 is even');
      assert.isTrue(isEven(4), '4 is even');
      assert.isTrue(isEven(-12), '-12 is even');
    });
    it('should return false if num is not even', () => {
      const isEven = funcs.isEven;
      assert.isFalse(isEven(79), '79 is not even');
      assert.isFalse(isEven(-3), '-3 is not even');
      assert.isFalse(isEven(43413241), '43413241 is not even');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true if num is odd', () => {
      const isOdd = funcs.isOdd;
      assert.isTrue(isOdd(23), '23 is odd');
      assert.isTrue(isOdd(171), '171 is odd');
    });
    it('should return false if num is not odd', () => {
      const isOdd = funcs.isOdd;
      assert.isFalse(isOdd(20), '20 is not odd');
      assert.isFalse(isOdd(0), '0 is not odd');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return the square of num', () => {
      const square = funcs.square;
      assert.equal(square(2), 4, '2 squared is 4');
      assert.equal(square(6), 36, '6 squared is 36');
      assert.equal(square(0), 0, '0 squared is 0');
      assert.equal(square(-12), 144, '-12 squared is 144');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return the num cubed', () => {
      const cube = funcs.cube;
      assert.equal(cube(4), 64, '4 cubed is 64');
      assert.equal(cube(0), 0, '0 cubed is 0');
      assert.equal(cube(-3), -27, '3 cubed is -27');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return num to the power exponent', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(3, 5), 243, '3 to the 5th power is 243');
      assert.equal(raiseToPower(4, 0), 1, '4 to the power of 0 is 1');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number rounded to the nearest integer', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(4.943), 5, '4.943 rounds to 5');
      assert.equal(roundNumber(3.01), 3, '3.01 rounds to 3');
      assert.equal(roundNumber(17.5), 18, '17.5 rounds to 18');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number rounded up the the nearest integer', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(4.3), 5, '4.3 rounds up to 5');
      assert.equal(roundUp(11.000000000000001), 12, '11.000000000000001 rounds up to 12');
      assert.equal(roundUp(14.77), 15, '14.77 rounds up to 15');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return the string with an exclamation point on the end', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('hello'), 'hello!', 'hello becomes hello!');
      assert.equal(addExclamationPoint('hello world'), 'hello world!', 'hello world becomes hello world!');
      assert.equal(addExclamationPoint('!!!'), '!!!!', '!!! becomes !!!!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return the names combined', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('hello', 'world'), 'hello world', 'hello and world become hello world');
      assert.equal(combineNames('Rick', 'James'), 'Rick James', 'Rick and James become Rick James');
      assert.equal(combineNames('Ben', 'Jerry', 'Joe'), 'Ben Jerry', 'Ben Jerry and Joe become Ben Jerry');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return name with a Hello greeting', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Andy'), 'Hello Andy!', 'Andy should return Hello Andy!');
      assert.equal(getGreeting('   test   '), 'Hello    test   !', '   test    should return Hello    test   !');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return the area of a rectangle given a length and a width', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(4, 3), 12, 'a rectangle with a length of 4 and width of 3 should have an area of 12');
      assert.equal(getRectangleArea(133, 144), 19152, 'a rectangle with a length of 133 and width of 144 should have an area of 19152');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return the area of a triangle with a given base and height', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(2, 5), 5, 'a base of 2 and height of 5 should return 5');
      assert.equal(getTriangleArea(44, 30), 660, 'a base of 44 and height of 30 should return 660');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the area of a circle with a given radius', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(5), 78.53981633974483, 'a radius of 5 should return 78.53981633974483');
      assert.equal(getCircleArea(12), 452.3893421169302, 'a radius of 12 should return 452.3893421169302');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return the volume of a rectangular prism with a given length, width, and height', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(11, 13, 4), 572, '11, 13, and 4 should return a volume of 572');
      assert.equal(getRectangularPrismVolume(8, 7, 9), 504, '8, 7, and 9 should return a volume of 572');
    });
  });
});
