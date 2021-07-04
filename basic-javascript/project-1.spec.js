const helpers = require('./project-1');

// start testing!
describe('isEven', () => {
    it.only('should return true for even numbers', () => {
      expect(helpers.isEven(4)).toBeTruthy();
      expect(helpers.isEven(0)).toBeTruthy();
    });
    it.only('should return false for odd numbers', () => {
      expect(helpers.isEven(3)).toBeFalsy();
      expect(helpers.isEven(-1)).toBeFalsy();
    });
  });

  describe('isOdd', () => {
      it.only('should return true for odd numbers', () => {
        expect(helpers.isOdd(9)).toBeTruthy();
      });
      it.only('should return false for even numbers', () => {
        expect(helpers.isOdd(8)).toBeFalsy();
      });
  });

  describe('divide', () => {
    it.only('should divide numbers', () => {
        const expected = 2;
        const actual = (4, 2);
        expect(actual).toEqual(expected)
    });
  });
  
  describe('multiply', () => {
    it.only('should multiply numbers', () => {
       expect(helpers.multiply(4,4)).toEqual(16)
    });
  });

  describe('getRemainder', () => {
    it.only('should return the remainder', () => {
       expect(helpers.getRemainder(10,8)).toEqual(2)
    });
  });

  describe('square', () => {
    it.only('should square numbers', () => {
        expect(helpers.square(5)).toEqual(25);
    });
  });

  describe('cube', () => {
    it.only('should cube number', () => {
        expect(helpers.cube(5)).toEqual(125);
    });
  });

describe('raiseToPower', () => {
    it.only('should be raised to the power of itself times the exponent', () => {
        expect(helpers.raiseToPower(5,2)).toEqual(32);
    });
});

describe('roundNumber', () => {
    it.only('should round any valid number', () => {
        expect(helpers.roundNumber(5.5)).toEqual(6);
    });
});

describe('addExclamationPoint', () => {
    it.only('should add an ! on the end of a str', () => {
        expect(helpers.addExclamationPoint('This is an example')).toBe('This is an example!')
    });
});

describe('combineNames', () => {
    it.only('should combine two strings into a full name', () => {
        expect(helpers.combineNames('Brandon', 'Hopper')).toBe('Brandon Hopper')
    });
});

describe('getGreeting', () => {
    it.only('should take a string and return a greeting', () => {
        expect(helpers.getGreeting('Brandon')).toBe('Hello Brandon!')
    });
});

describe('getRectangleArea', () => {
    it.only('should calculate an area by multuplying len x wid', () => {
        expect(helpers.getRectangleArea(4,3)).toEqual(12);
    });
});

describe('getTriangleArea', () => {
    it.only('should calculate base and hieight * 0.5', () => {
        expect(helpers.getTriangleArea(4,3)).toEqual(6);
    });
});

describe('getCircleArea', () => {
    it.only('should calculate the radius of a cirlce', () => {
        expect(helpers.getRectangleArea(14)).toEqual(28);
    });
});

describe('getRectanglePrismVolume', () => {
    it.only('should calculate the volume', () => {
        expect(helpers.getRectangularPrismVolume(4,3,5)).toEqual(60);
    });
});

describe('multiplyByTen', () => {
    it.only('should multiply numbers by 10', () => {
        expect(helpers.multiplyByTen(5)).toEqual(50);
    });
});

describe('subtractFive', () => {
    it.only('should subtract by 5', () => {
        expect(helpers.subtractFive(10)).toEqual(5);
    });
});

describe('areSameLength', () => {
    it.only('should return true is the strings are the same length', () => {
        expect(helpers.areSameLength('car', 'van')).toBeTruthy();
        expect(helpers.areSameLength('band', 'can')).toBeFalsy();
    });
});

describe('areEqual', () => {
    it.only('should return true if the same', () => {
        expect(helpers.areEqual(4, 4)).toBeTruthy();
    });
});

describe('lessThanNinety', () => {
    it.only('should return true if bigger than 90', () => {
        expect(helpers.lessThanNinety(4)).toBeTruthy();
        expect(helpers.lessThanNinety(100)).toBeFalsy();
    });
});

describe('greaterThanFifty', () => {
    it.only('should return true if bigger than 50', () => {
        expect(helpers.greaterThanFifty(5)).toBeFalsy();
        expect(helpers.greaterThanFifty(55)).toBeTruthy();
    });
});