/* eslint-disable */
/* prefer-destructuring */

const assert = require('chai').assert;
const expect = require('chai').expect;
const funcs = require('../src/project-1');
// const itParam = require("mocha-param");



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
      assert.equal(add(4, 3), 7);
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
    });
    it("should return a value of 7", () => {
      expect(subtract(4, 3), 'nooo why fail??').to.equal(1);
      assert.equal(subtract(4, 3), 1);
    });
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
    });
    it("should return a value of 7", () => {
      expect(divide(4, 2), 'nooo why fail??').to.equal(2);
      assert.equal(divide(4, 2), 2);
    });
  });

  describe('`multiply`', () => {
    const multiply = funcs.multiply;
    it('should be a function', () => {
      expect(multiply).to.be.a("function"); 
      assert.typeOf(multiply, 'function');
    });
    it("should return a type of number", () => {
      expect(multiply(4, 2), errMess).to.be.a("number");
      assert.typeOf(multiply(4, 2), "number");
    });
    it("should return a value of 7", () => {
      expect(multiply(4, 2), 'nooo why fail??').to.equal(8);
      assert.equal(multiply(4, 2), 8);
    });
  });

  describe('`getRemainder`', () => {
    const getRemainder = funcs.getRemainder;
    it('should be a function', () => {
      expect(getRemainder).to.be.a("function");
      assert.typeOf(getRemainder, 'function');
    });
    it("should return a type of number", () => {
      expect(getRemainder(4, 2), errMess).to.be.a("number");
      assert.typeOf(getRemainder(4, 2), "number");
    });
    it("should return a value of 0", () => {
      expect(getRemainder(4, 2), 'nooo why fail??').to.equal(0);
      assert.equal(getRemainder(4, 2), 0);
    });
  });

  describe('`isEven`', () => {
    const isEven = funcs.isEven;
    it('should be a function', () => {
      expect(isEven).to.be.a("function");
      assert.typeOf(isEven, 'function');
    });
    it("should return a type of number", () => {
      expect(isEven(4), "nooo why fail??").to.be.a("boolean");
      assert.isBoolean(isEven(4), "boolean");
    });
    it("should return a value of 7", () => {
      expect(isEven(4), "nooo why fail??").to.equal(true);
      assert.equal(isEven(4), true);
    });
  });

  describe('`isOdd`', () => {
    const isOdd = funcs.isOdd;
    it('should be a function', () => {
      expect(isOdd).to.be.a("function");
      assert.typeOf(isOdd, 'function');
    });
    it("should return a type of number", () => {
      expect(isOdd(4), "nooo why fail??").to.be.a("boolean");
      assert.isBoolean(isOdd(4), "boolean");
    });
    it("should return a value of 7", () => {
      expect(isOdd(4), "nooo why fail??").to.equal(false);
      assert.equal(isOdd(4), false);
    });
  });

  describe('`square`', () => {
    const square = funcs.square;
    it('should be a function', () => {
      expect(square).to.be.a("function");
      assert.typeOf(square, 'function');
    });
    it("should return a type of number", () => {
      expect(square(4), errMess).to.be.a("number");
      assert.typeOf(square(4), "number");
    });
    it("should return a value of 0", () => {
      expect(square(4), 'nooo why fail??').to.equal(16);
      assert.equal(square(4), 16);
    });
  });

  describe('`cube`', () => {
    const cube = funcs.cube;
    it('should be a function', () => {
      expect(cube).to.be.a("function");
      assert.typeOf(cube, 'function');
    });
    it("should return a type of number", () => {
      expect(cube(4), errMess).to.be.a("number");
      assert.typeOf(cube(4), "number");
    });
    it("should return a value of 0", () => {
      expect(cube(4), 'nooo why fail??').to.equal(64);
      assert.equal(cube(4), 64);
    });
  });

  describe('`raiseToPower`', () => {
    const raiseToPower = funcs.raiseToPower;
    it('should be a function', () => {
      expect(raiseToPower).to.be.a("function");
      assert.typeOf(raiseToPower, 'function');
    });
    it("should return a type of number", () => {
      expect(raiseToPower(4, 2), errMess).to.be.a("number");
      assert.typeOf(raiseToPower(4, 2), "number");
    });
    it("should return a value of 0", () => {
      expect(raiseToPower(4, 2), 'nooo why fail??').to.equal(16);
      assert.equal(raiseToPower(4, 2), 16);
    });
  });

  describe('`roundNumber`', () => {
    const roundNumber = funcs.roundNumber;
    it('should be a function', () => {
      expect(roundNumber).to.be.a("function");
      assert.typeOf(roundNumber, 'function');
    });
    it("should return a type of number", () => {
      expect(roundNumber(4.3), errMess).to.be.a("number");
      assert.typeOf(roundNumber(4.3), "number");
    });
    it("should return a value of 0", () => {
      expect(roundNumber(4.3), 'nooo why fail??').to.equal(4);
      assert.equal(roundNumber(4.3), 4);
    });
  });

  describe('`roundUp`', () => {
    const roundUp = funcs.roundUp;
    it('should be a function', () => {
      expect(roundUp).to.be.a("function");
      assert.typeOf(roundUp, 'function');
    });
    it("should return a type of number", () => {
      expect(roundUp(4.3), errMess).to.be.a("number");
      assert.typeOf(roundUp(4.3), "number");
    });
    it("should return a value of 0", () => {
      expect(roundUp(4.3), 'nooo why fail??').to.equal(5);
      assert.equal(roundUp(4.3), 5);
    });
  });

  describe('`addExclamationPoint`', () => {
    const addExclamationPoint = funcs.addExclamationPoint;
    const name = addExclamationPoint("charlie");
    const long = name.length-1;
    it('should be a function', () => {
      expect(addExclamationPoint).to.be.a("function");
      assert.typeOf(addExclamationPoint, 'function');
    });
    it("should return a type of number", () => {
      expect(addExclamationPoint("charlie"), errMess).to.be.a("string");
      assert.typeOf(addExclamationPoint("charlie"), "string");
    });
    it("should return a value of !", () => {
      expect(name[long], 'nooo why fail??').to.equal('!');
      assert.equal(name[long], '!');
    });
  });

  describe('`combineNames`', () => {
    const combineNames = funcs.combineNames;
    const long = "charlie" + " Punit";
    
    it('should be a function', () => {
      expect(combineNames).to.be.a("function");
      assert.typeOf(combineNames, 'function');
    });
    it("should return a type of number", () => {
      expect(combineNames("charlie", " Punit"), errMess).to.be.a("string");
      assert.typeOf(combineNames("charlie", " Punit"), "string");
    });
    it("should return a value of charliePunit", () => {
      expect(combineNames("charlie", "Punit"), 'nooo why fail??').to.equal(long);
      assert.equal(combineNames("charlie", "Punit"), long);
    });
  });

  describe('`getGreeting`', () => {
    const getGreeting = funcs.getGreeting;
    const long = "Hello " + "Punit!";
    
    it('should be a function', () => {
      expect(getGreeting).to.be.a("function");
      assert.typeOf(getGreeting, 'function');
    });
    it("should return a type of number", () => {
      expect(getGreeting(" Punit"), errMess).to.be.a("string");
      assert.typeOf(getGreeting(" Punit"), "string");
    });
    it("should return a value of charliePunit", () => {
      expect(getGreeting("Punit"), 'nooo why fail??').to.equal(long);
      assert.equal(getGreeting("Punit"), long);
    });
  });

  describe('`getRectangleArea`', () => {
    const getRectangleArea = funcs.getRectangleArea;
    it('should be a function', () => {
      expect(getRectangleArea).to.be.a("function");
      assert.typeOf(getRectangleArea, 'function');
    });
    it("should return a type of number", () => {
      expect(getRectangleArea(4, 2), errMess).to.be.a("number");
      assert.typeOf(getRectangleArea(4, 2), "number");
    });
    it("should return a value of 0", () => {
      expect(getRectangleArea(4, 3), 'nooo why fail??').to.equal(12);
      assert.equal(getRectangleArea(4, 3), 12);
    });
  });

  describe('`getTriangleArea`', () => {
    const getTriangleArea = funcs.getTriangleArea;
    it('should be a function', () => {
      expect(getTriangleArea).to.be.a("function");
      assert.typeOf(getTriangleArea, 'function');
    });
    it("should return a type of number", () => {
      expect(getTriangleArea(4, 2), errMess).to.be.a("number");
      assert.typeOf(getTriangleArea(4, 2), "number");
    });
    it("should return a value of 0", () => {
      expect(getTriangleArea(4, 3), 'nooo why fail??').to.equal(6);
      assert.equal(getTriangleArea(4, 3), 6);
    });
  });

  describe('`getCircleArea`', () => {
    const getCircleArea = funcs.getCircleArea;
    it('should be a function', () => {
      expect(getCircleArea).to.be.a("function");
      assert.typeOf(getCircleArea, 'function');
    });
    it("should return a type of number", () => {
      expect(getCircleArea(4), errMess).to.be.a("number");
      assert.typeOf(getCircleArea(4), "number");
    });
    it("should return a value of 0", () => {
      expect(getCircleArea(4), 'nooo why fail??').to.equal(50.26548245743669);
      assert.equal(getCircleArea(4), 50.26548245743669);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
    it('should be a function', () => {
      expect(getRectangularPrismVolume).to.be.a("function");
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it("should return a type of number", () => {
      expect(getRectangularPrismVolume(4, 2, 1), errMess).to.be.a("number");
      assert.typeOf(getRectangularPrismVolume(4, 2, 1), "number");
    });
    it("should return a value of 0", () => {
      expect(getRectangularPrismVolume(4, 3, 1), 'nooo why fail??').to.equal(12);
      assert.equal(getRectangularPrismVolume(4, 3, 1), 12);
    });
  });
});
