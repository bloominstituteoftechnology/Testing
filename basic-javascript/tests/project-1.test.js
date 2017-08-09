const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
//const expect = chai.expect;

chai.use(sinonChai);

// we've gone ahead and gotten a start here for you
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {

  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      //assert.typeOf(multiplyByTen, 'function');
      expect(multiplyByTen).to.be.a('function');
    });
    // begin here
    it('should return a number', () => {
      const timesTen = funcs.multiplyByTen(15);
      assert.typeOf(timesTen, 'number');  // this test is redundant dropping it in future. next test
           // checks for return type (implicitly) and return value. Increasing signal to noise ratio. Opposite if I was a 'consultant' :)
    });
    it('should return 15 by 10', () => {
      const timesTen = funcs.multiplyByTen(15);
      assert.equal(timesTen, 150);
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should return 15 by 10', () => {
      const subFive = funcs.subtractFive(15);
      assert.equal(subFive, 10);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true for two equal length strings ', () => {
      const sameLength = funcs.areSameLength('bla', 'sha');
      assert.equal(sameLength, true);
    });
    it('should return false  for two unequal strings ', () => {
      const sameLength = funcs.areSameLength('bl', 'sha');
      assert.equal(sameLength, false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return true for two equal numbers ', () => {
      const equalNums = funcs.areEqual(2, 2);
      assert.equal(equalNums, true);
    });
    it('should return false for two unequal numbers ', () => {
      const UnEqualNums = funcs.areEqual(3, 2);
      assert.equal(UnEqualNums, false);
    });
    it('should return true for two equal objects ', () => {
      const objectUnderTest = {a:1};
      const secondObjectUndertest = objectUnderTest;
      const equalObjects = funcs.areEqual(objectUnderTest, secondObjectUndertest);
      assert.equal(equalObjects, true);
    });
    it('should return false for two unequal objects ', () => {
      const objectUnderTest = {a:1};
      const secondObjectUndertest = {a:1}; //equal but different pointers
      const equalObjects = funcs.areEqual(objectUnderTest, secondObjectUndertest);
      assert.equal(equalObjects, false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return true for parameter less than 90', () => {
      const shouldRetTrue = funcs.lessThanNinety(23);
      assert.equal(shouldRetTrue, true);
    });
    it('should return true for minus parameter values ', () => {
      const shouldRetTrue = funcs.lessThanNinety(-23);
      assert.equal(shouldRetTrue, true);
    });
    it('should return true for parameter zero', () => {
      const shouldRetTrue = funcs.lessThanNinety(0);
      assert.equal(shouldRetTrue, true);
    });
    it('should return false for parameter 90', () => {
      const shouldRetTrue = funcs.lessThanNinety(90);
      assert.equal(shouldRetTrue, false);
    });
    it('should return false for parameter 99', () => {
      const shouldRetTrue = funcs.lessThanNinety(99);
      assert.equal(shouldRetTrue, false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return true for parameter greater than 50', () => {
      const shouldRetTrue = funcs.greaterThanFifty(51);
      assert.equal(shouldRetTrue, true);
    });
    it('should return false for value 50 ', () => {
      const shouldRetFalse = funcs.greaterThanFifty(50);
      assert.equal(shouldRetFalse, false);
    });
    it('should return false for value 49 ', () => {
      const shouldRetFalse = funcs.greaterThanFifty(49);
      assert.equal(shouldRetFalse, false);
    });
    it('should return false for value -49 ', () => {
      const shouldRetFalse = funcs.greaterThanFifty(-49);
      assert.equal(shouldRetFalse, false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return 5 for add (2,2)', () => {
      const addResult = funcs.add(2,2);
      assert.equal(addResult, 4);
    });
    it('should return -2 for value 2 for add (2)', () => {
      const addResult = funcs.add(2, -4);
      assert.equal(addResult, -2);
    });

  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return 7 for sub (5,-2)', () => {
      const subResult = funcs.subtract(5,-2);
      assert.equal(subResult, 7);
    });
    it('should return 0 for value 2 - 2', () => {
      const subResult = funcs.subtract(2, 2);
      assert.equal(subResult, 0);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return 2 for divide (4,2)', () => {
      const divResult = funcs.divide(4, 2);
      assert.equal(divResult, 2);
    });
    it('should return .5 for divide (2,4)', () => {
      const divResult = funcs.divide(2, 4);
      assert.equal(divResult, .5);
    });

    it('should return long decimal for divide (2,4.7)', () => {
      const divResult = funcs.divide(2, 4.7);
      assert.equal(divResult, .425531914893617);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return 8 for multiply (4,2)', () => {
      const mulResult = funcs.multiply(4, 2);
      assert.equal(mulResult, 8);
    });
    it('should return 8 for multiply (2,4)', () => {
      const mulResult = funcs.multiply(2, 4);
      assert.equal(mulResult, 8);
    });
    it('should return 8 for multiply (-2,-4)', () => {
      const mulResult = funcs.multiply(-2, -4);
      assert.equal(mulResult, 8);
    });
    it('should return -8.2 for multiply (2,-4.1)', () => {
      const mulResult = funcs.multiply(2, -4.1);
      assert.equal(mulResult, -8.2);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return 2 for getRemainder (4,2)', () => {
      const getRemResult = funcs.getRemainder(4, 2);
      assert.equal(getRemResult, 0);
    });
    it('should return .5 for getRemainder (2,4)', () => {
      const getRemResult = funcs.getRemainder(2, 4);
      assert.equal(getRemResult, 2);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return true for 6', () => {
      const isEvenResult = funcs.isEven(6);
      assert.equal(isEvenResult, true);
    });
    it('should return false for 7', () => {
      const isEvenResult = funcs.isEven(7);
      assert.equal(isEvenResult, false);
      });
      it('should return true for -2', () => {
        const isEvenResult = funcs.isEven(-2);
        assert.equal(isEvenResult, true);
      });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return true for 7', () => {
      const isOddResult = funcs.isOdd(7);
      assert.equal(isOddResult, true);
    });
    it('should return false for 6', () => {
      const isOddResult = funcs.isOdd(6);
      assert.equal(isOddResult, false);
      });
      it('should return true for -3', () => {
        const isOddResult = funcs.isOdd(-3);
        assert.equal(isOddResult, true);
      });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return 36 for param 6', () => {
      const squareResult = funcs.square(6);
      assert.equal(squareResult, 36);
    });
      it('should return 36 for param -6', () => {
        const squareResult = funcs.square(-6);
        assert.equal(squareResult, 36);
      });
      it('should return 4.41 for param -2.1', () => {
        const squareResult = funcs.square(-2.1);
        assert.equal(squareResult, 4.41);
      });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return 27 for param 3', () => {
      const cubeResult = funcs.cube(3);
      assert.equal(cubeResult, 27);
    });
      it('should return -27 for param -3', () => {
        const cubeResult = funcs.cube(-3);
        assert.equal(cubeResult, -27);
      });
      it('should return -9.261 for param -2.1', () => {
        const cubeResult = funcs.cube(-2.1);
        assert.equal(cubeResult, -9.261000000000001);
      });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('2 pow 3 should return 8', () => {
      const powResult = funcs.raiseToPower(2, 3);
      assert.equal(powResult,8);
    });
    it('2 pow 0 should return 1', () => {
      const powResult = funcs.raiseToPower(2, 0);
      assert.equal(powResult,1);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return 5 for param -5.0', () => {
      const roundResult = funcs.roundNumber(5.0);
      assert.equal(roundResult, 5);
    });
    it('should return 5 for param 5.1', () => {
      const roundResult = funcs.roundNumber(5.1);
      assert.equal(roundResult, 5);
    });
    it('should return 5 for param 5.4', () => {
      const roundResult = funcs.roundNumber(5.4);
      assert.equal(roundResult, 5);
    });
    it('should return 6 for param 5.6', () => {
      const roundResult = funcs.roundNumber(5.6);
      assert.equal(roundResult, 6);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return 6 for param 5.4', () => {
      const roundUpResult = funcs.roundUp(5.4);
      assert.equal(roundUpResult, 6);
    });
    it('should return 6 for param 5.0', () => {
      const roundUpResult = funcs.roundUp(5.0);
      assert.equal(roundUpResult, 5);
    });
    it('should return 6 for param 5.4', () => {
      const roundUpResult = funcs.roundUp(5.7);
      assert.equal(roundUpResult, 6);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function')
    });
    it('should return blah! for param blah', () => {
      const exResult = funcs.addExclamationPoint('blah');
      assert.equal(exResult, 'blah!');
    });
    it('should return !! for param !', () => {
      const exResult = funcs.addExclamationPoint('!');
      assert.equal(exResult, '!!');
    });
    it('should return ! for param empty string ', () => {
      const exResult = funcs.addExclamationPoint('');
      assert.equal(exResult, '!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
    it('should return Pat Collins for param Pat Collins', () => {
      const combineNamesResult = funcs.combineNames('Pat', 'Collins');
      assert.equal(combineNamesResult, 'Pat Collins');
    });
    it('should return Pat Collins for param Pat Collins', () => {
      const combineNamesResult = funcs.combineNames('Pat', '');
      assert.equal(combineNamesResult, 'Pat ');
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
    it('should return 6 for input 2,3', () => {
      const rectResult = funcs.getRectangleArea(3, 2);
      assert.equal(rectResult, 6);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
    it('should return 20 for input 10,4', () => {
      const triangResult = funcs.getTriangleArea(10, 4);
      assert.equal(triangResult, 20);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
    it('should return 6 for input 2,3', () => {
      const circResult = funcs.getCircleArea(3);
      assert.equal(circResult, 28.274333882308138);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
    it('should return 36 for input 2,3, 6', () => {
      const recVoluResult = funcs.getRectangularPrismVolume(2,3,6);
      assert.equal(recVoluResult, 36);
    });
  });

});
