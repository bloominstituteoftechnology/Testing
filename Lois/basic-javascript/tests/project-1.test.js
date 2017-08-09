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
    // begin here
    it('should return a number', () => {
      const timesTen = funcs.multiplyByTen(15);
      assert.typeOf(timesTen, 'number');
    });
    it('should multiply the input by 10', () => {
      const timesTen = funcs.multiplyByTen(15);
      assert.equal(timesTen, 150);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return a number', () => {
      const minusFive = funcs.subtractFive(15);
      assert.typeOf(minusFive, 'number');
    });
    it('should multiply the input by 10', () => {
      const minusFive = funcs.subtractFive(15);
      assert.equal(minusFive, 10);
    }); 
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const compareStr = funcs.areSameLength('hi', 'hello');
      assert.typeOf(compareStr, 'boolean');
    });
    it('should return true for the same length', () => {
      const compareStr = funcs.areSameLength('hi', 'yo');
      assert.equal(compareStr, true);
    });
    it('should return false for different lengths', () => {
      const compareStr = funcs.areSameLength('hi', 'hello');
      assert.equal(compareStr, false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const equalNums = funcs.areEqual(12, 13);
      assert.typeOf(equalNums, 'boolean');
    });
    it('should return true for the same input', () => {
      const equalNums = funcs.areEqual(12, 12);
      assert.equal(equalNums, true);
    });
    it('should return false for different inputs', () => {
      const equalNums = funcs.areEqual(12, 13);
      assert.equal(equalNums, false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      const compareToNinety = funcs.lessThanNinety(40);
      assert.typeOf(compareToNinety, 'boolean');
    });
    it('should return true for input less than 90', () => {
      const compareToNinety = funcs.lessThanNinety(40);
      assert.equal(compareToNinety, true);
    });
    it('should return false for input 90 or more', () => {
      const compareToNinety = funcs.lessThanNinety(120);
      assert.equal(compareToNinety, false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const compareToFifty = funcs.greaterThanFifty(40);
      assert.typeOf(compareToFifty, 'boolean');
    });
    it('should return true for input greater than 50', () => {
      const compareToFifty = funcs.greaterThanFifty(89);
      assert.equal(compareToFifty, true);
    });
    it('should return false for input 50 or less', () => {
      const compareToFifty = funcs.greaterThanFifty(40);
      assert.equal(compareToFifty, false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const addNums = funcs.add(12, 23);
      assert.typeOf(addNums, 'number');
    });
    it('should add the numbers', () => {
      const addNums = funcs.add(12, 23);
      assert.equal(addNums, 35);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const subtractNums = funcs.subtract(52, 8);
      assert.typeOf(subtractNums, 'number');
    });
    it('should subtract the numbers', () => {
      const subtractNums = funcs.subtract(52, 8);
      assert.equal(subtractNums, 44);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const divideNums = funcs.divide(12, 4);
      assert.typeOf(divideNums, 'number');
    });
    it('should divide the numbers', () => {
      const divideNums = funcs.divide(12, 4);
      assert.equal(divideNums, 3);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('should return a number', () => {
      const multiplyNums = funcs.multiply(2, 7);
      assert.typeOf(multiplyNums, 'number');
    });
    it('should multiply the numbers', () => {
      const multiplyNums = funcs.multiply(2, 7);
      assert.equal(multiplyNums, 14);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
      it('should return a number', () => {
      const remainder = funcs.getRemainder(52, 8);
      assert.typeOf(remainder, 'number');
    });
    it('should return the remainder of the numbers', () => {
      const remainder = funcs.getRemainder(52, 8);
      assert.equal(remainder, 4);
    });
});

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
      it('should return a boolean', () => {
      const evenNum = funcs.isEven(8);
      assert.typeOf(evenNum, 'boolean');
    });
    it('should return true for an even number', () => {
      const evenNum = funcs.isEven(8);
      assert.equal(evenNum, true);
    });
    it('should return false for an odd number', () => {
      const evenNum = funcs.isEven(7);
      assert.equal(evenNum, false);
    })
});

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
      it('should return a boolean', () => {
      const oddNum = funcs.isOdd(7);
      assert.typeOf(oddNum, 'boolean');
    });
    it('should return true for an odd number', () => {
      const oddNum = funcs.isOdd(7);
      assert.equal(oddNum, true);
    });
    it('should return false for an even number', () => {
      const oddNum = funcs.isOdd(4);
      assert.equal(oddNum, false);
    })
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const numSquared = funcs.square(4);
      assert.typeOf(numSquared, 'number');
    });
    it('should return the square of the input', () => {
      const numSquared = funcs.square(4);
      assert.equal(numSquared, 16);
    })
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const numCubed = funcs.cube(4);
      assert.typeOf(numCubed, 'number');
    });
    it('should return the cube of the input', () => {
      const numCubed = funcs.cube(4);
      assert.equal(numCubed, 64);
    })
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
      it('should return a number', () => {
      const numToPower = funcs.raiseToPower(2, 3);
      assert.typeOf(numToPower, 'number');
    });
    it('should return the first number to the power of the second', () => {
      const numToPower = funcs.raiseToPower(2, 3);
      assert.equal(numToPower, 8);
    })
});

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const numRounded = funcs.roundNumber(4.68);
      assert.typeOf(numRounded, 'number');
    });
    it('should round the number properly', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(4.68), 5);
      assert.equal(roundNumber(4.21), 4);
    })
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const numRoundedUp = funcs.roundUp(4.12);
      assert.typeOf(numRoundedUp, 'number');
    });
    it('should round the number up', () => {
      const roundNumber = funcs.roundUp;
      assert.equal(roundNumber(4.12), 5);
      assert.equal(roundNumber(4.61), 5);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function')
    });
    it('should return a string', () => {
      const strWithExclam = funcs.addExclamationPoint('Hello');
      assert.typeOf(strWithExclam, 'string');
    });
    it('should the string followed by an exclamation point', () => {
      const strWithExclam = funcs.addExclamationPoint('Hello');
      assert.equal(strWithExclam, 'Hello!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
    it('should be a string', () => {
      const fullName = funcs.combineNames('Bill', 'Potts');
      assert.typeOf(fullName, 'string');
    });
    it('should combine the first and last name', () => {
      const fullName = funcs.combineNames('Bill', 'Potts');
      assert.equal(fullName, 'Bill Potts');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
    it('should return a string', () => {
      const greeting = funcs.getGreeting('Picard');
      assert.typeOf(greeting, 'string');
    });
    it('should return a greeting with the input', () => {
      const greeting = funcs.getGreeting('Picard');
      assert.equal(greeting, 'Hello Picard!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
    it('should return a number', () => {
      const rectangleArea = funcs.getRectangleArea(4, 3);
      assert.typeOf(rectangleArea, 'number');
    });
    it('should return the area of the rectangle', () => {
      const rectangleArea = funcs.getRectangleArea(4, 3);
      assert.equal(rectangleArea, 12);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
    it('should return a number', () => {
      const triangleArea = funcs.getTriangleArea(4, 3);
      assert.typeOf(triangleArea, 'number');
    });
    it('should return the area of the triangle', () => {
      const triangleArea = funcs.getTriangleArea(4, 3);
      assert.equal(triangleArea, 6);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
    it('should return a number', () => {
      const circleArea = funcs.getCircleArea(2);
      assert.typeOf(circleArea, 'number');
    });
    it('should return the area of the circle', () => {
      const circleArea = funcs.getCircleArea(2);
      assert.equal(circleArea, 12.566370614359172);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
    it('should be a number', () => {
      const prismVolume = funcs.getRectangularPrismVolume(4, 3, 2);
      assert.typeOf(prismVolume, 'number');
    });
    it('should return the volume of rectangular prism', () => {
      const prismVolume = funcs.getRectangularPrismVolume(4, 3, 2);
      assert.equal(prismVolume, 24);
    });
  });

});