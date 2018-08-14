const helpers = require('./project-1');
require('jest-extended');

// start testing!
describe("project-1", () => {

  describe('multiplyByTen', () => {
    it('should return the given number multiplied by ten', () => {
      //assert
      expect(helpers.multiplyByTen(undefined)).toBeNaN();
      expect(helpers.multiplyByTen('test')).toBeNaN();
      expect(helpers.multiplyByTen(false)).toEqual(0);
      expect(helpers.multiplyByTen(true)).not.toEqual(1);
    })
  })

  describe('subtractFive', () => {
    it('should return the given minus five', () => {
      expect(helpers.subtractFive(10)).toBe(5)
    })
    it('should return NaN', () => {
      expect(helpers.subtractFive('str')).toBe(NaN);
    })
  })

  describe('areSameLength', () => {
    it('should return true if length is equal', () => {
      expect(helpers.areSameLength('asdf', 'asdf')).toBeTruthy();
    })
    it('return false if lengths not equal', () => {
      expect(helpers.areSameLength('akafdasdf', 'afda')).toBeFalsy();
    })
  })

  describe('areEqual', () => {
    it('should return false if not equal', () => {
      expect(helpers.areEqual(5, 7)).toBeFalsy()
    })
    it('should return true if equal', () => {
      expect(helpers.areEqual(5, 5)).toBeTruthy()
    })
    it('should return true if no arguments provided', () => {
      expect(helpers.areEqual()).toBeTruthy()
    })
  })

  describe('lessThanNinety', () => {
    it('should return true if less than 90', () => {
      expect(helpers.lessThanNinety(89)).toBeTruthy()
    })
    it('should return false if greater than 90', () => {
      expect(helpers.lessThanNinety(91)).toBeFalsy()
    })
    it('should return false if no arguments provided', () => {
      expect(helpers.lessThanNinety()).toBeFalsy()
    })
  })

  describe('greaterThanFifty', () => {
    it('should return true if greater than 50', () => {
      expect(helpers.greaterThanFifty(60)).toBeTruthy()
    })
    it('should return false if less than 50', () => {
      expect(helpers.greaterThanFifty(49)).toBeFalsy()
    })
    it('should return false if no arguments provided', () => {
      expect(helpers.greaterThanFifty()).toBeFalsy()
    })
    it('should return a boolean', () => {
      expect(helpers.greaterThanFifty(49)).toBeBoolean()
    })
  })

  describe('add', () => {
    it('should return a number', () => {
      expect(helpers.add(5)).toBeNumber()
    })
    it('should return ten given two fives', () => {
      expect(helpers.add(5, 5)).toBe(10);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.add()).toBeNaN()
    })
  })

  describe('subtract', () => {
    it('should return a number', () => {
      expect(helpers.subtract(7)).toBeNumber()
    })
    it('should return 10 given 15 and 5', () => {
      expect(helpers.subtract(15, 5)).toBe(10);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.subtract()).toBeNaN()
    })
  })

  describe('divide', () => {
    it('should return a number', () => {
      expect(helpers.divide(25)).toBeNumber()
    })
    it('should return 10 given 100 and 10', () => {
      expect(helpers.divide(100, 10)).toBe(10);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.divide()).toBeNaN()
    })
  })

  describe('multiply', () => {
    it('should return a number', () => {
      expect(helpers.multiply(25)).toBeNumber()
    })
    it('should return 25 given 5 and 5', () => {
      expect(helpers.multiply(5, 5)).toBe(25);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.multiply()).toBeNaN()
    })
  })

  describe('getRemainder', () => {
    it('should return a number', () => {
      expect(helpers.getRemainder(25)).toBeNumber()
    })
    it('should return 0 given 25 and 5', () => {
      expect(helpers.getRemainder(5, 5)).toBe(0);
    })
    it('should return 1 given 22 and 7', () => {
      expect(helpers.getRemainder(22, 7)).toBe(1);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.getRemainder()).toBeNaN()
    })
  })

  describe('isEven', () => {
    it('should return a boolean', () => {
      expect(helpers.isEven(25)).toBeBoolean()
    })
    it('should return true if given 20', () => {
      expect(helpers.isEven(20)).toBeTruthy();
    })
  })
  
  describe('isOdd', () => {
    it('should return a boolean', () => {
      expect(helpers.isOdd(253455)).toBeBoolean()
    })
    it('should return true if given 19', () => {
      expect(helpers.isOdd(19)).toBeTruthy();
    })
    it('should return false if given 20', () => {
      expect(helpers.isOdd(20)).toBeFalsy()
    })
    it('should return a boolean if no arguments provided', () => {
      expect(helpers.isOdd()).toBeBoolean()
    })
  })

  describe('square', () => {
    it('should return a number', () => {
      expect(helpers.square(7)).toBeNumber()
    })
    it('should return 100 given 10', () => {
      expect(helpers.square(10)).toBe(100);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.square()).toBeNaN()
    })
  })

  describe('cube', () => {
    it('should return a number', () => {
      expect(helpers.cube(7)).toBeNumber()
    })
    it('should return 27 given 3', () => {
      expect(helpers.cube(3)).toBe(27);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.cube()).toBeNaN()
    })
  })

  describe('raiseToPower', () => {
    it('should return a number', () => {
      expect(helpers.raiseToPower(75)).toBeNumber()
    })
    it('should return 8 given 2 and 3', () => {
      expect(helpers.raiseToPower(2, 3)).toBe(8);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.raiseToPower()).toBeNaN()
    })
  })

  describe('roundNumber', () => {
    it('should return a number', () => {
      expect(helpers.roundNumber(6.5)).toBeNumber()
    })
    it('should return 4 given 3.5', () => {
      expect(helpers.roundNumber(3.5)).toBe(4);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.raiseToPower()).toBeNaN()
    })
  })

  describe('roundUp', () => {
    it('should return a number', () => {
      expect(helpers.roundUp(8)).toBeNumber()
    })
    it('should return 4 given 3.1', () => {
      expect(helpers.roundUp(3.1)).toBe(4);
    })
    it('should return NaN if no arguments provided', () => {
      expect(helpers.roundUp()).toBeNaN()
    })
  })

  describe('addExclamationPoint', () => {
    it('should return a string', () => {
      expect(helpers.addExclamationPoint()).toBeString();
    })
    it('should return an ! at the end', () => {
      expect(helpers.addExclamationPoint()).toContain('!');
    })
  })

  describe('combineNames', () => {
    it('should return a string', () => {
      expect(helpers.combineNames('first', 'last')).toBeString();
    })
    it('should return a white space', () => {
      expect(helpers.combineNames('first', 'last')).toContain(' ');
    })
  })

  describe('getGreeting', () => {
    it('should return a string', () => {
      expect(helpers.getGreeting('first', 'last')).toBeString();
    })
    it('should return a white space', () => {
      expect(helpers.getGreeting('first', 'last')).toContain(' ');
    })
  })

  describe('getRectangleArea', () => {
    it('should be a number', () => {
      expect(helpers.getRectangleArea(5, 3)).toBeNumber();
    })
    it('should return a product', () => {
      expect(helpers.getRectangleArea(5, 5)).toBe(25);
    })
  })

  describe('getTriangleArea', () => {
    it('should be a number', () => {
      expect(helpers.getTriangleArea(6, 4)).toBeNumber();
    })
    it('should return 8 given 4', () => {
      expect(helpers.getTriangleArea(4, 4)).toBe(8);
    })
  })

  describe('getCircleArea', () => {
    const expected = 78.539;  
    const actual = helpers.getCircleArea(5);
    it('should return floating point appoximation', () => {
      expect(actual).toBeCloseTo(expected, 2);
    })
  })

  describe('getRectangularPrismVolume', () => {
    const expected = 105;
    const actual = helpers.getRectangularPrismVolume(7, 3, 5);
    it('should return 105 given 7, 3, 5', () => {
      expect(actual).toBe(expected);
    })
  })

  // describe('myGetProduct', () => {
  //   //const expected = 105;
  //   //const actual = helpers.myGetProduct();
  //   it("random_testing", function() {
  //     // Failure message: 
  //     // This test has no failure messages
  //     for (let i = 0; i < 25; i++) {
  //       const arr = [];
  //       for (let j = 0; j < 8; j++) {
  //         arr.push(Math.floor((Math.random() * 51) - 15));
  //       }
  //       expect(helpers.myGetProduct(arr)).toEqual(helpers.getProduct(arr));
  //     }
  //   })
  //   it("not_random_testing", function() {
  //     // Failure message: 
  //     // This test has no failure messages
  //     const arr = [1,2,3,4];
  //     expect(helpers.myGetProduct(arr)).toEqual(helpers.getProduct(arr));
  //   })
  // })

})


