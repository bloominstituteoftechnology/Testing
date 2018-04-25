/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-1');
const expect = require('chai').expect;

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.


// watch 1:10:00 of video
// https://www.youtube.com/watch?v=p6PNiG5tyNc&feature=youtu.be

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should multiply the input by 10', () => {
      expect(funcs.multiplyByTen(25)).to.equal(250);
    })
    it('should be a number', () => {
      expect(funcs.multiplyByTen(5)).to.be.a('number');
    })
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should be a number', () => {
      expect(funcs.subtractFive(10)).to.be.a('number');
    })
    it('should subtract five', () => {
      expect(funcs.subtractFive(10)).to.equal(5);
    })
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean value', () => {
      const str1 = 'This string';
      const str2 = 'this longer string'
      expect(funcs.areSameLength(str1, str2)).to.be.a('boolean');
    })
    it('should compare string lengths', () => {
      const str1 = 'This string';
      const str2 = 'this longer string'
      expect(funcs.areSameLength(str1, str2)).to.equal(false);
    })
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean value', () => {
      expect(funcs.areEqual(9, 12)).to.be.a('boolean');
    })
    it('should compare numbers', () => {
      expect(funcs.areEqual(10, 10)).to.equal(true);
    })
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean value', () => {
      expect(funcs.lessThanNinety(86)).to.be.a('boolean');
    })
    it('should evaluate if a number is <90', () => {
      expect(funcs.lessThanNinety(28)).to.equal(true);
    })
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean value', () => {
      expect(funcs.greaterThanFifty(86)).to.be.a('boolean');
    })
    it('should evaluate if a number is >50', () => {
      expect(funcs.greaterThanFifty(1010)).to.equal(true);
    })
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should sum the numbers used as parameters', () => {
      expect(funcs.add(86, 14)).to.equal(100);
    })
    it('should return a number', () => {
      expect(funcs.add(10, 20)).to.be.a('number');
    })
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract the numbers used as parameters', () => {
      expect(funcs.subtract(86, 14)).to.equal(72);
    })
    it('should return a number', () => {
      expect(funcs.subtract(10, 20)).to.be.a('number');
    })
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide the numbers used as parameters', () => {
      expect(funcs.divide(30, 5)).to.equal(6);
    })
    it('should return a number', () => {
      expect(funcs.divide(100, 20)).to.be.a('number');
    })
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply the numbers used as parameters', () => {
      expect(funcs.multiply(2, 5)).to.equal(10);
    })
    it('should return a number', () => {
      expect(funcs.multiply(9, 6)).to.be.a('number');
    })
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return the remainder of the numbers used as parameters', () => {
      expect(funcs.getRemainder(5, 2)).to.equal(1);
    })
    it('should return a number', () => {
      expect(funcs.getRemainder(9, 6)).to.be.a('number');
    })
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean value', () => {
      expect(funcs.isEven(5)).to.be.a('boolean');
    })
    it('should evaluate true if number is even', () => {
      expect(funcs.isEven(10)).to.equal(true);
    })
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean value', () => {
      expect(funcs.isOdd(5)).to.be.a('boolean');
    })
    it('should evaluate true if number is odd', () => {
      expect(funcs.isOdd(9)).to.equal(true);
    })
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return num^2', () => {
      const arg = 5;
      const res = arg*arg;
      expect(funcs.square(arg)).to.equal(res);
    })
    it('should be a number', () => {
      expect(funcs.square(9)).to.be.a('number');
    })
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return num^3', () => {
      const arg = 5;
      const res = arg*arg*arg;
      expect(funcs.cube(arg)).to.equal(res);
    })
    it('should be a number', () => {
      expect(funcs.cube(9)).to.be.a('number');
    })
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return num^exp', () => {
      const num = 5;
      const exp = 4;
      const res = Math.pow(num, exp);
      expect(funcs.raiseToPower(num, exp)).to.equal(res);
    })
    it('should be a number', () => {
      expect(funcs.raiseToPower(9, 2)).to.be.a('number');
    })
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return an integer', () => {
      const num = 24.88;
      const yeti = funcs.roundNumber(num);
      expect(yeti % 1).to.equal(0);
    })
    it('should be a number', () => {
      expect(funcs.roundNumber(28.33)).to.be.a('number');
    })
  });

  describe('`roundUp`', () => { // this one needs to be cleaned up
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return an integer', () => {
      const num = 24.88;
      const yeti = funcs.roundUp(num);
      expect(yeti % 1).to.equal(0);
    })
    it('should be a number', () => {
      expect(funcs.roundUp(28.33)).to.be.a('number');
    })
    it('should round up instead of down', () => {
      const a = 25;
      const b = 24.2;
      const c = funcs.roundUp(b);
      if (b < a && b > (a - 1)) {
        expect(a).to.equal(c);
      } else expect(c).to.equal(Math.round(b));
    })
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      const taco = 'taco';
      expect(funcs.addExclamationPoint(taco)).to.be.a('string');
    })
    it('should add an exclamation point to the end of the string', () => {
      const taco = 'taco';
      const tacoX = funcs.addExclamationPoint(taco);
      const strEnd = tacoX[tacoX.length - 1]
      expect(strEnd).to.equal('!');
    })
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      const str1 = 'taco';
      const str2 = 'burrito';
      expect(funcs.combineNames(str1, str2)).to.be.a('string');
    })
    it('should combine the names', () => {
      const str1 = 'taco';
      const str2 = 'burrito';
      const combined = funcs.combineNames(str1, str2);
      expect(combined).to.equal(str1.concat(' ' + str2));
    })
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      const str1 = 'taco';
      expect(funcs.getGreeting(str1)).to.be.a('string');
    })
    it('should greet the name', () => {
      const str1 = 'taco';
      const greeting = 'Hello ';
      expect(funcs.getGreeting(str1)).to.equal(greeting.concat(str1 + '!'));
    })
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      expect(funcs.getRectangleArea(4,5)).to.be.a('number');
    })
    it('should provide the area of a square with the given inputs', () => {
      const l = 4;
      const w = 5;
      const area = l*w;
      expect(funcs.getRectangleArea(l,w)).to.equal(area);
    })
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      expect(funcs.getTriangleArea(4,5)).to.be.a('number');
    })
    it('should provide the area of a triangle with the given inputs', () => {
      const b = 4;
      const h = 5;
      const area = (b*h)/2;
      expect(funcs.getTriangleArea(b,h)).to.equal(area);
    })
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      expect(funcs.getCircleArea(4)).to.be.a('number');
    })
    it('should provide the area of a circle with the given input', () => {
      const radius = 4;
      const area = Math.PI*radius*radius;
      expect(funcs.getCircleArea(radius)).to.equal(area);
    })
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      expect(funcs.getRectangularPrismVolume(4)).to.be.a('number');
    })
    it('should provide the area of a circle with the given input', () => {
      const l = 4;
      const w = 5;
      const h = 10;
      const volume = l*w*h;
      expect(funcs.getRectangularPrismVolume(l,w,h)).to.equal(volume);
    })
  });
});
