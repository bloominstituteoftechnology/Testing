/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');
const itParam = require("mocha-param");



const errMess = "nooo why fail??";

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
      expect(multiplyByTen).to.be.a('function');
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should have a return type of number', () => {
      expect(multiplyByTen(5)).to.be.a('number');
      assert.typeOf(multiplyByTen(5), 'number');
    });
    it('should have a value of 50', () => {
      expect(multiplyByTen(5)).to.equal(50);
      assert.equal(multiplyByTen(5), 50);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    // begin here
    it('should have a return type of number', () => {
      expect(subtractFive(25)).to.be.a('number');
      assert.typeOf(subtractFive(25), 'number');
    });
    it('should have a value of 20', () => {
      expect(subtractFive(25)).to.equal(20);
      assert.equal(subtractFive(25), 20);
    });
  });

  describe('`areSameLength`', () => {
    const areSameLength = funcs.areSameLength;
    it('should be a function', () => {
      assert.typeOf(areSameLength, 'function');
    });
    // begin here
    it('should have a return type of boolean', () => {
      expect(areSameLength('abc', 'def'), "no why fail??").to.be.a('boolean');
      assert.isBoolean(areSameLength('abc', 'def'), 'boolean');
    });
    it('should have a value of true', () => {
      expect(areSameLength('abc', 'abc'), "no why fail??").to.equal(true);
      assert.isNotTrue(areSameLength('abc', 'daef'), false);
    });
  });

  describe('`areEqual`', () => {
    const areEqual = funcs.areEqual;
    it('should be a function', () => {
      assert.typeOf(areEqual, 'function');
    });
    // begin here
    it('should have a return type of boolean', () => {
      expect(areEqual('abc', 'def'), "nooo why fail??").to.be.a('boolean');
      assert.isBoolean(areEqual('abc', 'def'), 'boolean');
    });
    it('should have a value of true', () => {
      expect(areEqual('abc', 'abc'), 'nooo why fail??').to.equal(true);
      assert.isNotTrue(areEqual('abc', 'daef'), false);
    });
  });

  describe('`lessThanNinety`', () => {
    const lessThanNinety = funcs.lessThanNinety;
    it('should be a function', () => {
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should have a return type of boolean', () => {
      expect(lessThanNinety(83), "nooo why fail??").to.be.a('boolean');
      assert.isBoolean(lessThanNinety(92), 'boolean');
    });
    it('should have a value of true', () => {
      expect(lessThanNinety(83), 'nooo why fail??').to.equal(true);
      assert.isNotTrue(lessThanNinety(92), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    it('should be a function', () => {
      assert.typeOf(greaterThanFifty, 'function');
    });
    it("should have a return type of boolean", () => {
      expect(greaterThanFifty(56), "nooo why fail??").to.be.a("boolean");
      assert.isBoolean(greaterThanFifty(65), "boolean");
    });
    it("should have a value of true", () => {
      expect(greaterThanFifty(56), "nooo why fail??").to.equal(true);
      assert.isNotTrue(greaterThanFifty(49));
    })
  });

  describe('`add`', () => {
    const add = funcs.add;
    it('should be a function', () => {
      expect(add).to.be.a("function");
      assert.typeOf(add, 'function');
    });
    it("should return a type of number", () => {
      expect(add(4, 3), "nooo why fail??").to.be.a("number");
      assert.typeOf(add(4, 3), "number");
    });
    it("should return a value of 7", () => {
      expect(add(4, 3), "nooo why fail??").to.equal(7);
      assert(add(4, 3), 7);
    });
    // it("the type of the parameters should be a number", () => {
    //   itParam("test value is a number", [1, 2, 3])
    // })
  });

  describe('`subtract`', () => {
    const subtract = funcs.subtract;
    it('should be a function', () => {
      expect(subtract).to.be.a("function");
      assert.typeOf(subtract, 'function');
    });
    it("should return a type of number", () => {
      expect(subtract(4, 3), errMess).to.be.a("number");
      assert.typeOf(subtract(4, 3), "number");
    })
  });

  describe('`divide`', () => {
    const divide = funcs.divide;
    it('should be a function', () => {
      expect(divide).to.be.a("function");
      assert.typeOf(divide, 'function');
    });
    it("should return a type of number", () => {
      expect(divide(4, 2), errMess).to.be.a("number");
      assert.typeOf(divide(4, 2), "number");
    })
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
  });
});
