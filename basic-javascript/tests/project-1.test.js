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
  it('should return 0 when multiplied by 0', () => {
      const multiplyByTenWithZero = funcs.multiplyByTen(0);
      assert.equal(multiplyByTenWithZero, 0);
  });
  it('multiplied by 10 should produce 100', () => {
      const multiplyByTenGetHun = funcs.multiplyByTen(10);
      assert.equal(multiplyByTenGetHun, 100);
  })
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('result is a postive num', () => {
      assert.equal (funcs.subtractFive(6), 1);
    })
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('strings should be equal', () => {
      const str1 = 'Hello';
      const str2 = 'World';
      assert.isTrue(funcs.areSameLength(str1, str2));
    });
    it('strings should not be equal', () => {
      const str1 = 'Hi';
      const str2 = 'World';
      assert.isNotTrue(funcs.areSameLength(str1, str2));
    });
    it('empty strings are equal', () => {
      const str1 = '';
      const str2 = '';
      assert.isTrue(funcs.areSameLength(str1, str2));
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('numbers should be equal', () => {
      assert.isTrue(funcs.areEqual(2,2));
    });
    it('numbers should not be equal', () => {
      assert.isNotTrue(funcs.areEqual(2,1));
    });
    it('strings should be equal', () => {
      assert.isTrue(funcs.areEqual('one', 'one'));
    });
    it('strings should not be equal', () => {
      assert.isNotTrue(funcs.areEqual('one', 'two'));
    });
    it('value should be equal', () => {
      assert.isTrue(funcs.areEqual(true, true));
    });
    it('value should not be equal', () => {
      assert.isNotTrue(funcs.areEqual(false, true));
    });
    it('value should be equal', () => {
      const obj1 = {a: 'a'};
      const obj2 = obj1;
      assert.isTrue(funcs.areEqual(obj1, obj2));
    });
    it('value should be equal', () => {
      const obj1 = {a: 'a'};
      const obj2 = {a: 'a'};
      assert.isNotTrue(funcs.areEqual(obj1, obj2));
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be greater than 90 is false', () => {
      assert.isFalse(funcs.lessThanNinety(100));
    });
    it('should be greater than 90 is true', () => {
      assert.isTrue(funcs.lessThanNinety(80));
    });
    it('should be false when exactly equal to 90', () => {
      assert.isFalse(funcs.lessThanNinety(90));
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('When greater than 50 is true', () => {
      assert.isTrue(funcs.greaterThanFifty(100));
    });
    it('When less than 50 is false', () => {
      assert.isFalse(funcs.greaterThanFifty(40));
    });
    it('When exactly equal to 50 is false', () => {
      assert.isFalse(funcs.greaterThanFifty(50));
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('2 plus 3 equals 5', () => {
      assert.equal(funcs.add(2, 3), 5);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('3 minus 2 equals 1', () => {
      assert.equal(funcs.subtract(3, 2), 1);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('if ten divided by two equals five, then it is true', () => {
      assert.equal(funcs.divide(10, 2), 5);
    });
    it('if ten divided by two does not equals five, then it is false', () => {
      assert.notEqual(funcs.divide(10, 2), 6);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('if ten times two equals twenty, it is true', () => {
      assert.equal(funcs.multiply(10, 2), 20);
    });
    it('if ten times two does equals twenty, it is false', () => {
      assert.notEqual(funcs.multiply(10, 2), 25);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('if ten divided by two has no remainder, it is true', () => {
      assert.equal(funcs.getRemainder(10, 2), 0);
    });
    it('if ten divided by three has remainder or one, it is true', () => {
      assert.equal(funcs.getRemainder(10, 3), 1);
    });
    it('if zero divided by three has no remainder, it is true', () => {
      assert.equal(funcs.getRemainder(0, 3), 0);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('if the number is even, then it is true', () => {
      assert.isTrue(funcs.isEven(10));
    });
    it('if the number is not even, then it is false', () => {
      assert.isFalse(funcs.isEven(11));
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('if the number is odd, it is true', () => {
      assert.isTrue(funcs.isOdd(11));
    });
    it('if the number is not odd, it is false', () => {
      assert.isFalse(funcs.isOdd(10));
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('if the square of two is four, it is true', () => {
      assert.equal(funcs.square(2), 4);
    });
    it('if the square of negative two is four, it is true', () => {
      assert.equal(funcs.square(-2), 4);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('if the cube of two is eight, it is true', () => {
      assert.equal(funcs.cube(2), 8);
    });
    it('if the cube of -two is eight, it is true', () => {
      assert.equal(funcs.cube(-2), -8);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('if two raised to the power of three is eight then it is true', () => {
      assert.equal(funcs.raiseToPower(2, 3), 8);
    });
    it('if two raised to the power of negative three is negative eight then it is true', () => {
      assert.equal(funcs.raiseToPower(2, -3), .125);
    });
    it('if two raised to the power of zero is one then it is true', () => {
      assert.equal(funcs.raiseToPower(2, 0), 1);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('if 2.4 rounded is 2, it is true ', () => {
      assert.equal(funcs.roundNumber(2.4), 2);
    });
    it('if 2.5 rounded is 3, it is true ', () => {
      assert.equal(funcs.roundNumber(2.5), 3);
    });
    it('if 2.6 rounded is 3, it is true ', () => {
      assert.equal(funcs.roundNumber(2.6), 3);
    });
    it('if -2.4 rounded is -2, it is true ', () => {
      assert.equal(funcs.roundNumber(-2.4), -2);
    });
    it('if -2.6 rounded is -3, it is true ', () => {
      assert.equal(funcs.roundNumber(-2.6), -3);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('if 2.9 rounded is 3, it is true ', () => {
      assert.equal(funcs.roundUp(2.9), 3);
    });
    it('if 2.1 rounded is 3, it is false ', () => {
      assert.equal(funcs.roundUp(2.1), 3);
    });
    it('if -2.9 rounded is -3, it is true ', () => {
      assert.equal(funcs.roundUp(-2.9), -2);
    });
    it('if -2.1 rounded is -3, it is true ', () => {
      assert.equal(funcs.roundUp(-2.1), -2);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function')
    });
    it('if str has an ! on the end, its true', () => {
      assert.equal(funcs.addExclamationPoint('hello'), 'hello!');
    });
    it('if empty str has an !, its true', () => {
      assert.equal(funcs.addExclamationPoint(''), '!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
  });

});
