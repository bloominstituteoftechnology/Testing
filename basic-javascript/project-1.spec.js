const helpers = require('./project-1');

describe('project-1.js', () => {
  describe('multiplyByTen', () => {
    it('multiply a number by ten', () => {
      const expected = 100;
      const actual = helpers.multiplyByTen(10);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.multiplyByTen();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.multiplyByTen("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('subtractFive()', () => {
    it('subtracts a number by 5', () => {
      const expected = 5;
      const actual = helpers.subtractFive(10);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.subtractFive();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.subtractFive("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('areSameLength()', () => {
    it('checks the length of both strings and outputs boolean', () => {
      const expected = false;
      const actual = helpers.areSameLength("green", "blue");
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.areSameLength();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.areSameLength("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('areEqual()', () => {
    it('checks the value of two numbers and returns if they are equal', () => {
      const expected = true;
      const actual = helpers.areEqual(1, 1);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.areEqual();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.areEqual("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('lessThanNinety()', () => {
    it('checks the value of two numbers and returns if they are equal', () => {
      const expected = true;
      const actual = helpers.lessThanNinety(89);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.lessThanNinety();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.lessThanNinety("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('greaterThanFifty()', () => {
    it('checks the value of two numbers and returns if they are equal', () => {
      const expected = true;
      const actual = helpers.greaterThanFifty(51);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.greaterThanFifty();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.greaterThanFifty("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('add()', () => {
    it('checks if both values added are the correct value', () => {
      const expected = 10;
      const actual = helpers.add(5, 5);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.add();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.add("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('subtract()', () => {
    it('checks if both values subtracted are the correct value', () => {
      const expected = 1;
      const actual = helpers.subtract(6, 5);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.subtract();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.subtract("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('divide()', () => {
    it('checks if both values divided are the correct value', () => {
      const expected = 2;
      const actual = helpers.divide(6, 3);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.divide();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.divide("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('multiply()', () => {
    it('checks if both values multiplied are the correct value', () => {
      const expected = 30;
      const actual = helpers.multiply(6, 5);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.multiply();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.multiply("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('getRemainder()', () => {
    it('checks if the returned value is the remainder of the input', () => {
      const expected = 1;
      const actual = helpers.getRemainder(6, 5);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.getRemainder();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.getRemainder("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('isEven()', () => {
    it('checks if input value is even', () => {
      const expected = true;
      const actual = helpers.isEven(6);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.isEven();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.isEven("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('isOdd()', () => {
    it('checks if input value is odd', () => {
      const expected = true;
      const actual = helpers.isOdd(5);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.isOdd();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.isOdd("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('square()', () => {
    it('checks if input value is squared', () => {
      const expected = 25;
      const actual = helpers.square(5);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.square();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.square("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('cube()', () => {
    it('checks if input value is cubed', () => {
      const expected = 125;
      const actual = helpers.cube(5);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.cube();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.cube("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('raiseToPower()', () => {
    it('checks if input value is raised to power', () => {
      const expected = 8;
      const actual = helpers.raiseToPower(2, 3);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.raiseToPower();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.raiseToPower("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('roundNumber()', () => {
    it('checks if input number is rounded', () => {
      const expected = 7;
      const actual = helpers.roundNumber(7.4);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.roundNumber();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.roundNumber("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('roundUp()', () => {
    it('checks if input number is rounded up', () => {
      const expected = 8;
      const actual = helpers.roundUp(7.6);
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.roundUp();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a string was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.roundUp("5");
      expect(actual).toEqual(expected)
    })
  })
  describe('addExclamationPoint()', () => {
    it('checks if output equals input + !', () => {
      const expected = "help!";
      const actual = helpers.addExclamationPoint("help");
      expect(actual).toEqual(expected);
    })
    it('return "invalid entry" if nothing was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.addExclamationPoint();
      expect(actual).toEqual(expected)
    })
    it('return "invalid entry" if a number was entered', () => {
      const expected = "invalid entry";
      const actual = helpers.addExclamationPoint(5);
      expect(actual).toEqual(expected)
    })
  })
})

// add error tests for subtract and fixed code for invalid states