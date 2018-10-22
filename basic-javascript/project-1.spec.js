const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {
  describe('jest', () => {
    test('should run tests', () => {

    });

    it('should run tests using it() in addition to test()', () => {

    });
  });

  describe('multiplyByTen()', () => {
    
    it('should multiply provided number by ten', () => {
      const expected = 100;

      const actual = helpers.multiplyByTen(10);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const product = helpers.multiplyByTen();

      expect(product).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.multiplyByTen('five');
      }).toThrow();
    })
  })

  describe('subtractFive()', () => {
    it('should subtract five from provided number', () => {
      const expected = 5;

      const actual = helpers.subtractFive(10);

      expect(actual).toEqual(expected);
    })

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.multiplyByTen('five');
      }).toThrow();
    })
  })

  describe('areSameLength()', () => {
    it('should return true when strings are the same length', () => {
      const expected = true;
      const expected2 = false;

      const actual = helpers.areSameLength('same', 'emas');
      const actual2 = helpers.areSameLength('not', 'same');

      expect(actual).toEqual(expected);
      expect(actual2).toEqual(expected2);
    });
  })

  describe('areEqual()', () => {
    //checks that two values are equal
    it('should return true if equal and false if not equal', () => {
    const expected = true;
    const expected2 = false;

    const actual = helpers.areEqual(1, 1);
    const actual2 = helpers.areEqual(1, 2);

    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected2);
    })    
  })

  describe('lessThanNinety', () => {
    //checks that provided number is less than 90
    it('should return true if provided number is less than ninety, false if greater than ninety', () => {
    const expected = true;
    const expected2 = false;

    const actual = helpers.lessThanNinety(80);
    const actual2 = helpers.lessThanNinety(100);

    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected2);
    })
    
  })

  describe('greaterThanFifty()', () => {
    //checks that provided number is greater than 50
    it('should return true if greater than fifty, false if less than fifty', () => {
    const expected = true;
    const expected2 = false;

    const actual = helpers.greaterThanFifty(60);
    const actual2 = helpers.greaterThanFifty(40);

    expect(actual).toEqual(expected);
    expect(actual2).toEqual(expected2);
    })
  })

  describe('add()', () => {
    //adds two numbers
    it('should add two provided numbers', () => {
    const expected = 5;

    const actual = helpers.add(2, 3);

    expect(actual).toEqual(expected);
    })
  })

  describe('subtract', () => {
    //subtracts x from y
    it('should subtract y from x', () => {
      const expected = 4;
  
      const actual = helpers.subtract(6, 2);
  
      expect(actual).toEqual(expected);
      })
  })

  describe('divide', () => {
    it('should divide x by y', () => {
      const expected = 5;
  
      const actual = helpers.divide(10, 2);
  
      expect(actual).toEqual(expected);
      })
  })

  describe('multiply', () => {
    it('should add multiply provided numbers', () => {
      const expected = 6;
  
      const actual = helpers.multiply(2, 3);
  
      expect(actual).toEqual(expected);
      })
  })

  describe('getRemainder', () => {
    it('should return remainder after dividing x by y', () => {
      const expected = 2;
  
      const actual = helpers.getRemainder(10, 8);
  
      expect(actual).toEqual(expected);
      })
  })

  describe('isEven', () => {
    it('should return true if num is even', () => {
    const even = helpers.isEven(2);
    const odd = helpers.isEven(3);

      expect(even).toBe(true);
      expect(odd).toBe(false);
      })
  })

  describe('isOdd', () => {
    it('should return true if num is odd', () => {
    const even = helpers.isOdd(2);
    const odd = helpers.isOdd(3);

      expect(even).toBe(false);
      expect(odd).toBe(true);
      })
  })

  describe('square', () => {
    it('should return square of provided number', () => {
    const expected = 9;

    const actual = helpers.square(3);

      expect(actual).toEqual(expected);
      })
  })

  describe('cube', () => {
    it('should return cube of provided number', () => {
      const expected = 8;

      const actual = helpers.cube(2);

      expect(actual).toEqual(expected);
    })
  })

  describe('raiseToPower', () => {
    it('should return x raised to power of y', () => {
      const expected = 100;

      const actual = helpers.raiseToPower(10, 2);

      expect(actual).toEqual(expected);
    })
  })

  describe('roundNumber', () => {
    it('should round provided number', () => {
      const expectedUp = 25;
      const expectedDown = 24;

      const actualUp = helpers.roundNumber(24.6);
      const actualDown = helpers.roundNumber(24.4); 

      expect(actualUp).toEqual(expectedUp);
      expect(actualDown).toEqual(expectedDown);
    })
  })

  describe('roundUp', () => {
    it('should round provided number up', () => {
      const expected = 25;

      const actual = helpers.roundUp(24.4);

      expect(actual).toEqual(expected);
    })
  })

  describe('addExclamationPoint', () => {
    it('should add an exclamation point to provided string', () => {
      const expected = 'hello!';

      const actual = helpers.addExclamationPoint('hello');

      expect(actual).toEqual(expected);
    })
  })

  describe('combineNames', () => {
    it('should combine two strings into one', () => {
      const expected = 'loki odinson';

      const actual = helpers.combineNames('loki', 'odinson');

      expect(actual).toEqual(expected)
    })
  })

  describe('getGreeting', () => {
    it('should return the provided string preceded by the word "hello" and succeeded by an exclamation point', () => {
      const expected = 'Hello moto!';

      const actual = helpers.getGreeting('moto');

      expect(actual).toEqual(expected);
    })
  })

  describe('getRectangleArea', () => {
    it('should return the area of provided length and width', () => {
      const expected = 20;

      const actual = helpers.getRectangleArea(10, 2);

      expect(actual).toEqual(expected);
    })
  })

  describe('getTriangleArea', () => {
    it('should return the area of provided base and height', () => {
      const expected = 25;

      const actual = helpers.getTriangleArea(10, 5);

      expect(actual).toEqual(expected);
    })
  })

  describe('getCircleArea', () => {
    it('should return the area of provided radius', () => {
      const expected = 78.53981633974483;

      const actual = helpers.getCircleArea(5);
      
      expect(actual).toEqual(expected);
    })
  })

  describe('getRectangularPrismVolume', () => {
    it('should return the volume of a rectangular prism given the length, width, and height', () => {
      const expected = 150;

      const actual = helpers.getRectangularPrismVolume(3, 5, 10);

      expect(actual).toEqual(expected);
    })
  })
})