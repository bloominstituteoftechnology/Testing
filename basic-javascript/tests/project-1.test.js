/* eslint-disable prefer-destructuring */

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
    const multiplyByTen = funcs.multiplyByTen;
    it('should be a function', () => {
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should multiply by 10 and return the number', () => {
      const twenty = multiplyByTen(2);
      assert.typeOf(twenty, 'number');
      assert.equal(twenty, 20);
    });
  });

  describe('`subtractFive`', () => {
    const subtractFive = funcs.subtractFive;
    it('should be a function', () => {
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract 5 and return the number', () => {
      let arrN = [];
      for (let i = 1; i <= 3; i++) {
        random = Math.floor(Math.random() * Math.floor(100));
        arrN.push(random);
      }
      arrN.forEach(n => {
        const m = subtractFive(n + 5);
        assert.typeOf(m, 'number');
        assert.equal(m, n);
      })
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return true, if both strings have the same length', () => {
      const areSameLength = funcs.areSameLength('cat', 'dog');
      assert.typeOf(areSameLength, 'boolean');
      assert.isTrue(areSameLength);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should be equal between two numbers', () => {
      const areEqual = funcs.areEqual(95, 95);
      assert.typeOf(areEqual, 'boolean');
      assert.isTrue(areEqual);

      const Equal = funcs.areEqual('Cat', 'Cat')
      assert.typeOf(Equal, 'boolean');
      assert.isTrue(Equal);

      const notEqual = funcs.areEqual('Cat', 'Dog');
      assert.typeOf(notEqual, 'boolean');
      assert.isFalse(notEqual);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });

    it('should return true if less than 90', () => {
      const yass = funcs.lessThanNinety(5);
      assert.typeOf(yass, 'boolean');
      assert.isTrue(yass);
    });

    it('should return false if greater than 90', () => {
      const nahhh = funcs.lessThanNinety(95);
      assert.typeOf(nahhh, 'boolean');
      assert.isFalse(nahhh);
    })
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });

    it('should return true if greater than 50', () => {
      const yass = funcs.greaterThanFifty(500000000000000000000000000000000000001);
      assert.typeOf(yass, 'boolean');
      assert.isTrue(yass);
    });

    it('should return false if less than 50', () => {
      const nahhh = funcs.greaterThanFifty(1);
      assert.typeOf(nahhh, 'boolean');
      assert.isFalse(nahhh);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add two numbers', () => {
      let random1 = Math.floor(Math.random() * Math.floor(100));
      let random2 = Math.floor(Math.random() * Math.floor(100));
      const sum = funcs.add(random1, random2);
      assert.typeOf(sum, 'number');
      assert.equal(sum, random1 + random2);
      const notTheSum = funcs.add(random1, random2 + 1);
      assert.typeOf(notTheSum, 'number');
      assert.notEqual(notTheSum, random1 + random2);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract two numbers', () => {
      let random1 = Math.floor(Math.random() * Math.floor(100));
      let random2 = Math.floor(Math.random() * Math.floor(100));
      const diff = funcs.subtract(random1, random2);
      assert.typeOf(diff, 'number');
      assert.equal(diff, random1 - random2);
      const notTheDiff = funcs.subtract(random1, random2 - 1);
      assert.typeOf(notTheDiff, 'number');
      assert.notEqual(notTheDiff, random1 - random2);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide two numbers', () => {
      let random1 = Math.floor(Math.random() * Math.floor(100));
      let random2 = Math.floor(Math.random() * Math.floor(10)) + 1;
      const Q = funcs.divide(random1, random2);
      assert.typeOf(Q, 'number');
      assert.equal(Q, random1 / random2);
      const notTheQ = funcs.divide(random1, random2 + 1);
      assert.typeOf(notTheQ, 'number');
      assert.notEqual(notTheQ, random1 / random2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should multiply two numbers', () => {
      let random1 = Math.floor(Math.random() * Math.floor(100));
      let random2 = Math.floor(Math.random() * Math.floor(100));
      const P = funcs.multiply(random1, random2);
      assert.typeOf(P, 'number');
      assert.equal(P, random1 * random2);
      const notTheP = funcs.multiply(random1, random2 - 1);
      assert.typeOf(notTheP, 'number');
      assert.notEqual(notTheP, random1 * random2);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should get remainder of two numbers', () => {
      let random1 = 100;
      let random2 = 95;
      const mod = funcs.getRemainder(random1, random2);
      assert.typeOf(mod, 'number');
      assert.equal(mod, random1 % random2);
      const notTheMod = funcs.getRemainder(random1, random2 + 1);
      assert.typeOf(notTheMod, 'number');
      assert.notEqual(notTheMod, random1 % random2);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('is it Even...IS IT?!?!?!?!?!', () => {
      const evenNum = funcs.isEven(1024);
      assert.typeOf(evenNum, 'boolean');
      assert.isTrue(evenNum);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('is it even Odd...IS IT?!?!?!?!?!', () => {
      const oddNum = funcs.isOdd(1023);
      assert.typeOf(oddNum, 'boolean');
      assert.isTrue(oddNum);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should be the square of a number', () => {
      let randomSquare = Math.floor(Math.random() * Math.floor(100));
      const P = funcs.square(randomSquare);
      assert.typeOf(P, 'number');
      assert.equal(P, randomSquare * randomSquare);
      const notTheP = funcs.square(randomSquare);
      assert.typeOf(notTheP, 'number');
      assert.notEqual(notTheP, randomSquare * randomSquare + 1);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should be the CUBEW of a number', () => {
      let randomCube = Math.floor(Math.random() * Math.floor(100));
      const P = funcs.cube(randomCube);
      assert.typeOf(P, 'number');
      assert.equal(P, randomCube * randomCube * randomCube);
      const notTheP = funcs.cube(randomCube);
      assert.typeOf(notTheP, 'number');
      assert.notEqual(notTheP, randomCube * randomCube * randomCube + 1);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('POWERRRRRRRRRRRRRRRRRRRRRRRRRRRRRR!', () => {
      const whatever = funcs.raiseToPower(4, 2);
      assert.typeOf(whatever, 'number');
      assert.equal(whatever, 16);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('Round the Number', () => {
      const num = 9.5;
      const roundNum = funcs.roundNumber(num);
      assert.typeOf(roundNum, 'number');
      assert.equal(roundNum, 10);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('Round the Number UP', () => {
      const num = 9.1;
      const roundNumUp = funcs.roundUp(num);
      assert.typeOf(roundNumUp, 'number');
      assert.equal(roundNumUp, 10);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('Hello...its me youredfahkad;kldahkl', () => {
      const addEx = funcs.addExclamationPoint('Hello');
      assert.typeOf(addEx, 'string');
      assert.equal(addEx, 'Hello!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('Combine the names', () => {
      const name = funcs.combineNames('Clara', 'Andrew');
      assert.typeOf(name, 'string');
      assert.equal(name, 'Clara Andrew');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('Get the greeting', () => {
      const greetMe = funcs.getGreeting('Ben');
      assert.typeOf(greetMe, 'string');
      assert.equal(greetMe, 'Hello Ben!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should get a rectangle', () => {
      let random1 = Math.floor(Math.random() * Math.floor(100));
      let random2 = Math.floor(Math.random() * Math.floor(100));
      const P = funcs.getRectangleArea(random1, random2);
      assert.typeOf(P, 'number');
      assert.equal(P, random1 * random2);
      const notTheP = funcs.getRectangleArea(random1, random2 - 1);
      assert.typeOf(notTheP, 'number');
      assert.notEqual(notTheP, random1 * random2);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should get a triangle', () => {
      let random1 = Math.floor(Math.random() * Math.floor(100));
      let random2 = Math.floor(Math.random() * Math.floor(100));
      const P = funcs.getTriangleArea(random1, random2);
      assert.typeOf(P, 'number');
      assert.equal(P, random1 * random2 * .5);
      const notTheP = funcs.getTriangleArea(random1, random2 - 1);
      assert.typeOf(notTheP, 'number');
      assert.notEqual(notTheP, random1 * random2);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('a circle', () => {
      let random1 = Math.floor(Math.random() * Math.floor(100));
      const P = funcs.getCircleArea(random1);
      assert.typeOf(P, 'number');
      assert.equal(P, random1 * random1 * Math.PI);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should multiply two numbers', () => {
      let random1 = Math.floor(Math.random() * Math.floor(100));
      let random2 = Math.floor(Math.random() * Math.floor(100));
      let random3 = Math.floor(Math.random() * Math.floor(100));
      const P = funcs.getRectangularPrismVolume(random1, random2, random3);
      assert.typeOf(P, 'number');
      assert.equal(P, random1 * random2 * random3);
    });
  });
});
