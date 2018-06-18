const helpers = require('./project-1');

// start testing!
describe.only('project-1', () => {
  describe('multiplyByTen', () => {
    it('can multiply 2 numbers', () => {
      // arrange
      const expected = 50;
  
      // act
      const actual = helpers.multiplyByTen(5);
  
      // assert
      expect(actual).toEqual(expected);
    })
  });

  describe('subtractFive', () => {
    it('can subtract by 5', () => {
      const expected = 50;
      const actual = helpers.subtractFive(55);
      
      expect(actual).toEqual(expected);
    })
  });

  describe('areSameLength', () => {
    it('arg1 and arg2, are the same length', () => {
      const expected = true;
      const areSameLength = helpers.areSameLength('this', 'that');

      expect(areSameLength).toEqual(expected);
    })
    it('arg1 and arg2, are not same length', () => {
      const expected = false;
      const actual = helpers.areSameLength('this', 'not');

      expect(actual).toEqual(expected);
    })
  });

  describe('areEqual', () => {
    it('50 and 50, are equal', () => {
      const expected = true;
      const actual = helpers.areEqual(50, 50);

      expect(actual).toEqual(expected);
    })
    it('50 and 25, are not equal', () => {
      const expected = false;
      const actual = helpers.areEqual(50, 25);

      expect(actual).toEqual(expected);
    })
  });

  describe('lessThanNinety', () => {
    it('is less than 90', () => {
      const expected = true;
      const actual = helpers.lessThanNinety(50);

      expect(actual).toEqual(expected);
    })
    it('is greater than 90', () => {
      const expected = false;
      const actual = helpers.lessThanNinety(100);

      expect(actual).toEqual(expected);
    })
  });

  describe('greaterThanFifty', () => {
    it('is greater than 50', () => {
      const expected = true;
      const actual = helpers.greaterThanFifty(55);

      expect(actual).toEqual(expected);
    })
    it('is equal to or less than 50', () => {
      const expected = false;
      const actual = helpers.greaterThanFifty(50);

      expect(actual).toEqual(expected);
    })
  });

  describe('add', () => {
    it('can add to numbers', () => {
      const expected = 50;
      const actual = helpers.add(20, 30);

      expect(actual).toEqual(expected);
    })
  });

  describe('subtract', () => {
    it('can subtract one number from another', () => {
      const expected = 50;
      const actual = helpers.subtract(100, 50);

      expect(actual).toEqual(expected);
    })
  });

  describe('divide', () => {
    it('can divide number by another', () => {
      const expected = 50;
      const actual = helpers.divide(100, 2);

      expect(actual).toEqual(expected);
    })
  });

  describe('multiply', () => {
    it('can multiply two numbers', () => {
      const expected = 50;
      const actual = helpers.multiply(25, 2);

      expect(actual).toEqual(expected);
    })
  });

  describe('getRemainder', () => {
    it('returns remainder', () => {
      const expected = 2;
      const actual = helpers.getRemainder(50, 4);

      expect(actual).toEqual(expected);
    })
  });

  describe('isEven', () => {
    it('number is even', () => {
      const expected = true;
      const actual = helpers.isEven(50);

      expect(actual).toEqual(expected);
    })
  });

  describe('isOdd', () => {
    it('number is odd', () => {
      const expected = true;
      const actual = helpers.isOdd(55);

      expect(actual).toEqual(expected);
    })
  });

  describe('square', () => {
    it('number squared', () => {
      const expected = 49;
      const actual = helpers.square(7);

      expect(actual).toEqual(expected);
    })
  });

  describe('cube', () => {
    it('cubed number', () => {
      const expected = 64;
      const actual = helpers.cube(4);

      expect(actual).toEqual(expected);
    })
  });

  describe('raiseToPower', () => {
    it('number x raised to power of y', () => {
      const expected = 64;
      const actual = helpers.raiseToPower(2, 6);

      expect(actual).toEqual(expected);
    })
  });

  describe('roundNumber', () => {
    it('number rounded', () => {
      const expected = 50;
      const actual = helpers.roundNumber(49.6);

      expect(actual).toEqual(expected);
    })
  });

  describe('roundUp', () => {
    it('number rounded up', () => {
      const expected = 50;
      const actual = helpers.roundUp(49.3);

      expect(actual).toEqual(expected);
    })
  });

  describe('addExclamationPoint', () => {
    it('added exclamation point', () => {
      const expected = 'welcome!';
      const actual = helpers.addExclamationPoint('welcome');

      expect(actual).toEqual(expected);
    })
  });

  describe('combineNames', () => {
    it('names combined', () => {
      const expected = 'fif ty';
      const actual = helpers.combineNames('fif', 'ty');

      expect(actual).toEqual(expected);
    })
  });

  describe('getGreeting', () => {
    it('added name to greeting', () => {
      const expected = 'Hello fifty!';
      const actual = helpers.getGreeting('fifty');

      expect(actual).toEqual(expected);
    })
  });

  describe('getRectangleArea', () => {
    it('area of rectangle received', () => {
      const expected = 50;
      const actual = helpers.getRectangleArea(10, 5);

      expect(actual).toEqual(expected);
    })
  });

  describe('getTriangleArea', () => {
    it('area of triangle received', () => {
      const expected = 50;
      const actual = helpers.getTriangleArea(10, 10);

      expect(actual).toEqual(expected);
    })
  });

  describe('getCircleArea', () => {
    it('area of circle received', () => {
      const expected = 10 ** 2 * Math.PI;
      const actual = helpers.getCircleArea(10);

      expect(actual).toEqual(expected);
    })
  });

  describe('getRectanglePrismVolume', () => {
    it('rectangle prism volume received', () => {
      const expected = 50;
      const actual = helpers.getRectangularPrismVolume(5, 5, 2);

      expect(actual).toEqual(expected);
    })
  })
});