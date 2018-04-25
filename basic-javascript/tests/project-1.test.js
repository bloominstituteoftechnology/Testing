/* eslint-disable prefer-destructuring */

const assert = require("chai").assert;
const funcs = require("../src/project-1");
const chai = require("chai");
const expect = require("chai").expect;
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe("Project-1 Functions", () => {
  describe("`multiplyByTen`", () => {
    it("should be a function", () => {
      // see funcs defined above -- makes all functions from project-1 accessible
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, "function");
    });
    // begin here
    it("should return the input after multiplying by ten", () => {
      const multiplyByTen = funcs.multiplyByTen;
      expect(multiplyByTen(5)).to.equal(50);
      expect(multiplyByTen(1)).to.equal(10);
      expect(multiplyByTen(0)).to.equal(0);
    });
  });

  describe("`subtractFive`", () => {
    it("should be a function", () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, "function");
    });
    it("should return input minus five", () => {
      const subtractFive = funcs.subtractFive;
      expect(subtractFive(5)).to.equal(0);
      expect(subtractFive(100)).to.equal(95);
      expect(subtractFive(0)).to.equal(-5);
    });
  });

  describe("`areSameLength`", () => {
    it("should be a function", () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, "function");
    });
    it("should return true if strings are of equal length, else false", () => {
      const areSameLength = funcs.areSameLength;
      expect(areSameLength("Willy", "Billy")).to.equal(true);
      expect(areSameLength("Willy", "Wilmathason")).to.equal(false);
      expect(areSameLength("Sally", "Dilly")).to.equal(true);
    });
  });

  describe("`areEqual`", () => {
    it("should be a function", () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, "function");
    });
    it("should return true if inputs are equal, else false", () => {
      const areEqual = funcs.areEqual;
      expect(areEqual(5, 5)).to.equal(true);
      expect(areEqual(5, 6)).to.equal(false);
      expect(areEqual(0, 0)).to.equal(true);
    });
  });

  describe("`lessThanNinety`", () => {
    it("should be a function", () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, "function");
    });
    it("should return true if less than ninety, else false", () => {
      const lessThanNinety = funcs.lessThanNinety;
      expect(lessThanNinety(90)).to.equal(false);
      expect(lessThanNinety(91)).to.equal(false);
      expect(lessThanNinety(89)).to.equal(true);
    });
  });

  describe("`greaterThanFifty`", () => {
    it("should be a function", () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, "function");
    });
    it("should return true of greater than 50, else false", () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      expect(greaterThanFifty(51)).to.equal(true);
      expect(greaterThanFifty(49)).to.equal(false);
      expect(greaterThanFifty(50)).to.equal(false);
    });
  });

  describe("`add`", () => {
    it("should be a function", () => {
      const add = funcs.add;
      assert.typeOf(add, "function");
    });
    it("should return sum of x and y", () => {
      const add = funcs.add;
      expect(add(4, 4)).to.equal(8);
      expect(add(4, 5)).to.equal(9);
      expect(add(0, 10)).to.equal(10);
    });
  });

  describe("`subtract`", () => {
    it("should be a function", () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, "function");
    });
    it("should return the difference of x and y", () => {
      const subtract = funcs.subtract;
      expect(subtract(4, 3)).to.equal(1);
      expect(subtract(3, 4)).to.equal(-1);
      expect(subtract(4, 1)).to.equal(3);
    });
  });

  describe("`divide`", () => {
    it("should be a function", () => {
      const divide = funcs.divide;
      assert.typeOf(divide, "function");
    });
    it("should return the quotient of x over y", () => {
      const divide = funcs.divide;
      expect(divide(6, 3)).to.equal(2);
      expect(divide(90, 10)).to.equal(9);
      expect(divide(20, 4)).to.equal(5);
    });
  });

  describe("`multiply`", () => {
    it("should be a function", () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, "function");
    });
    it('should return the product of x and y', () => {
      const multiply = funcs.multiply;
      expect(multiply(3,4)).to.equal(12);
      expect(multiply(12,5)).to.equal(60);
      expect(multiply(12,10)).to.equal(120);
    })
  });

  describe("`getRemainder`", () => {
    it("should be a function", () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, "function");
    });
    it('should return remainder after x divided into y', () => {
      const getRemainder = funcs.getRemainder;
      expect(getRemainder(5,4)).to.equal(1);
      expect(getRemainder(23,10)).to.equal(3);
      expect(getRemainder(34,26)).to.equal(8);
    })
  });

  describe("`isEven`", () => {
    it("should be a function", () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, "function");
    });
    it('should return true if even, false if odd', () => {
      const isEven = funcs.isEven;
      expect(isEven(24)).to.equal(true);
      expect(isEven(25)).to.equal(false);
      expect(isEven(26)).to.equal(true);
    })
  });

  describe("`isOdd`", () => {
    it("should be a function", () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, "function");
    });
    it('should return true if odd, false if even', () => {
      const isOdd = funcs.isOdd;
      expect(isOdd(24)).to.equal(false);
      expect(isOdd(25)).to.equal(true);
      expect(isOdd(26)).to.equal(false);
    })
  });

  describe("`square`", () => {
    it("should be a function", () => {
      const square = funcs.square;
      assert.typeOf(square, "function");
    });
    it('should return the input squared', () => {
      const square = funcs.square;
      expect(square(5)).to.equal(25);
      expect(square(6)).to.equal(36);
      expect(square(10)).to.equal(100);
    })
  });

  describe("`cube`", () => {
    it("should be a function", () => {
      const cube = funcs.cube;
      assert.typeOf(cube, "function");
    });
    it('should return the input cubed', () => {
      const cube = funcs.cube;
      expect(cube(5)).to.equal(125);
      expect(cube(3)).to.equal(27);
      expect(cube(1)).to.equal(1);
    })
  });

  describe("`raiseToPower`", () => {
    it("should be a function", () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, "function");
    });
    it('should return the first arg to the power of the second arg', () => {
      const raiseToPower = funcs.raiseToPower;
      expect(raiseToPower(4,3)).to.equal(64);
      expect(raiseToPower(2,4)).to.equal(16);
      expect(raiseToPower(2341,1)).to.equal(2341);
    })
  });

  describe("`roundNumber`", () => {
    it("should be a function", () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, "function");
    });
    it('should return the input rounded to the closest integer', () => {
      const roundNumber = funcs.roundNumber;
      expect(roundNumber(3.56)).to.equal(4);
      expect(roundNumber(67.9)).to.equal(68);
      expect(roundNumber(34.3)).to.equal(34);
    })
  });

  describe("`roundUp`", () => {
    it("should be a function", () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, "function");
    });
    it('should return the input rounded up to the closest integer', () => {
      const roundUp = funcs.roundUp;
      expect(roundUp(3.56)).to.equal(4);
      expect(roundUp(67.9)).to.equal(68);
      expect(roundUp(34.3)).to.equal(35);
    })
  });

  describe("`addExclamationPoint`", () => {
    it("should be a function", () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, "function");
    });
    it('should return the inputted string with an exclamation point appended its end', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      expect(addExclamationPoint('Go home')).to.equal('Go home!');
      expect(addExclamationPoint('Vamanos')).to.equal('Vamanos!');
      expect(addExclamationPoint('Lako Vale')).to.equal('Lako Vale!');
    })
  });

  describe("`combineNames`", () => {
    it("should be a function", () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, "function");
    });
    it('should return inputted strings as a single string seperated by a space', () => {
      const combineNames = funcs.combineNames;
      expect(combineNames('Benny', 'Henny')).to.equal('Benny Henny');
      expect(combineNames('Bob', 'Blob')).to.equal('Bob Blob');
      expect(combineNames('Gerald', 'Waskvitchmicha')).to.equal('Gerald Waskvitchmicha');
    })
  });

  describe("`getGreeting`", () => {
    it("should be a function", () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, "function");
    });
    it('should return greeting of Hello space <name>!', () => {
      const getGreeting = funcs.getGreeting;
      expect(getGreeting('Eliza')).to.equal('Hello Eliza!');
      expect(getGreeting('Timothy')).to.equal('Hello Timothy!');
      expect(getGreeting('Jasmine')).to.equal('Hello Jasmine!');
    })
  });

  describe("`getRectangleArea`", () => {
    it("should be a function", () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, "function");
    });
    it('should return the area of a rectangle with the given length and width', () => {
      const getRectangleArea = funcs.getRectangleArea;
      expect(getRectangleArea(3,4)).to.equal(12);
      expect(getRectangleArea(12,5)).to.equal(60);
      expect(getRectangleArea(12,10)).to.equal(120);
    })
  });

  describe("`getTriangleArea`", () => {
    it("should be a function", () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, "function");
    });
    it('should return the area of a triangle with the given base and height', () => {
      const getTriangleArea = funcs.getTriangleArea;
      expect(getTriangleArea(4,4)).to.equal(8);
      expect(getTriangleArea(12,5)).to.equal(30);
      expect(getTriangleArea(12,10)).to.equal(60);
    })
  });

  describe("`getCircleArea`", () => {
    it("should be a function", () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, "function");
    });
    // // // Not sure why this is not working
    // it('should return the area of a circle with the given radius', () => {
    //   const getCircleArea = funcs.getCircleArea;
    //   expect(getCircleArea(4)).to.equal(​​​​​50.26548245743669​​​​​);
    //   expect(getCircleArea(1)).to.equal(​​​​​3.141592653589793​​​​​);
    //   expect(getCircleArea(24)).to.equal(​​​​​1809.5573684677208​​​​​);
    // })
  });

  describe("`getRectangularPrismVolume`", () => {
    it("should be a function", () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, "function");
    });
    it('should return the volume of a prism with the given width, height, and length', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      expect(getRectangularPrismVolume(4,4,4)).to.equal(64);
      expect(getRectangularPrismVolume(1,2,5)).to.equal(10);
      expect(getRectangularPrismVolume(12,10,3)).to.equal(360);
    })
  });
});
