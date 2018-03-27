/* eslint-disable */

const assert = require('chai').assert;
const funcs = require('../src/project-1');
const expect = require('chai').expect;

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
    it('should return a number multiplied by 10', () => {
      const twenty = multiplyByTen(2);
      assert.typeOf(twenty, 'number', 'Test requires number');
      assert.equal(twenty, 20, 'Test input 2 expected 20');
    })
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should return five less between number passed in', () => {
      const five = subtractFive(10);
      assert.typeOf(five, 'number');
      assert.deepEqual(five, 5);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true if functions are same length', () => {
      expect(areSameLength('abcde','fghij')).to.be.true;
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    it('should return false if not equal', () => {
      assert.deepEqual(areEqual(3,4), false, '3 and 4 are not equal');
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be a number less than 90', () => {
      assert.isTrue(lessThanNinety(80), 'inputted 80, should have returned true');
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be a number greater than fifty', () => {
      expect(greaterThanFifty(60)).to.equal(true, 'should return true if input greater than fifty');
      expect(greaterThanFifty(40)).to.equal(false);
    });
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      assert.typeOf(add, 'function');
    });
    it('should add up the two parameters', () => {
      expect(add(4, 5)).to.equal(9, "should add up two inputted parameters");
    });
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      assert.typeOf(subtract, 'function');
    });
    it('should subtract the two inputted parameters', () => {
      expect(subtract(9, 4)).to.equal(5, 'should subtract second input from first');
    });
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      assert.typeOf(divide, 'function');
    });
    it('should divide two inputted parameters', () => {
      assert.deepEqual(divide(6,2), 3, 'not dividing two numbers properly');
    })
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      assert.typeOf(multiply, 'function');
    });
    it('should multiply two inputted parameters', () => {
      const six = multiply(2, 3);
      assert.typeOf(six, 'number', 'should return a number');
      assert.deepEqual(six, 6, 'is not multiplying two numbers properly');
    })
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder', () => {
      assert.deepEqual(getRemainder(9, 2), 1, 'should return remainder');
    })
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      assert.typeOf(isEven, 'function');
    });
    it('should be an even number', () => {
      assert.isTrue(isEven(4), 'should return true when an even number is inputted');
    })
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      assert.typeOf(isOdd, 'function');
    });
    it('should be an odd number', () => {
      assert.isFalse(isOdd(4), 'should return false when an even number is inputted');
    })
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      assert.typeOf(square, 'function');
    });
    it('should return the square of a number', () => {
      assert.deepEqual(square(2), 4)
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      assert.typeOf(cube, 'function');
    });
    it('should return the cube of a number', () => {
      assert.deepEqual(cube(2), 8);
    });
  });

  describe('`raiseToPower`', () => {
    const { raiseToPower } = funcs;
    it('should be a function', () => {
      assert.typeOf(raiseToPower, 'function');
    });
    it('should raise to the power of inputted value', () => {
      expect(raiseToPower(2, 3)).to.equal(8);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      assert.typeOf(roundNumber, 'function');
    });
    it('should round the inputted number', () => {
      assert.deepEqual(roundNumber(5.5), 6);
    })
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      assert.typeOf(roundUp, 'function');
    });
    it('should round the number up', () => {
      assert.deepEqual(roundUp(5.2), 6);
    })
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    it('should be a function', () => {
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should add an exclamation to the end', () => {
      assert.deepEqual(addExclamationPoint('test'), 'test!');
    })
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    it('should be a function', () => {
      assert.typeOf(combineNames, 'function');
    });
    it('should combine 2 strings', () => {
      assert.strictEqual(combineNames('name1', 'name2'), 'name1 name2');
    })
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    it('should be a function', () => {
      assert.typeOf(getGreeting, 'function');
    });
    it('should greet user after recieving username', () => {
      const name = 'Brad';
      expect(getGreeting(name)).to.equal('Hello Brad!')
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return area of rectangle given l and w', () => {
      expect(getRectangleArea(3,4)).to.equal(12);
    })
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return area of rectangle given b, h', () => {
      expect(getTriangleArea(3,4)).to.equal(.5*3*4);
    })
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return the area of a circle given a radius', () => {
      expect(getCircleArea(2)).to.equal(Math.PI * 4)
    })
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return area of rectangular prism', () => {
      assert.strictEqual(getRectangularPrismVolume(23,12,36), (23*12*36));
    })
  });
});
