const helpers = require('./project-1');

// start testing!

describe('helpers.js', () => {
  describe('jest', () => {
    test('should run tests', () => {
      // test all the things
    });

    it('should run tests using it() in addition to test()', () => {
      // Arrange : setup the world
      // Act : execute the code you're testing
      // Assert : check that it works
    });
  });

  describe('multiplyByTen()', () => {
    // low hanging fruit
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
    });
  });

  describe('subtractFive()', () => {
    it('should subtract 5 from provided number', () => {
      const expected = 25;

      const actual = helpers.subtractFive(30);

      expect(actual).toEqual(expected);
    });

    it('should return 0 when called with no value', () => {
      const difference = helpers.subtractFive();

      expect(difference).toBe(0);
    });

    it('should throw error when called with a string', () => {
      expect(() => {
        helpers.subtractFive('twenty five');
      }).toThrow();
    });
  });

  describe('areSameLength()', () => {
    it('should show that both strings are the same length', () => {
      const expected = true;

      const actual = helpers.areSameLength('hello', 'there');

      expect(actual).toBe(expected);
    });

    it('should throw error when called with something is not a string', () => {
      expect(() => {
        helpers.areSameLength(365);
      }).toThrow();
    });
  });

  describe('areEqual()', () => {
    it('should check for deep equality', () => {
      const x = { are: 'the same' };
      const y = { are: 'the same' };

      expect(x).toEqual(y);
    });
  });

describe('lessThanNinety()', () => {
  it('should say true if provided number is less than ninety otherwise it should say false', () => {
    const expected = true;

    const actual = helpers.lessThanNinety(55);

    expect(expected).toBe(actual);
  });

  it('should throw error when called with a string', () => {
    expect(() => {
      helpers.lessThanNinety('fifty five');
    }).toThrow();
  });
}); 

describe('greaterThanFifty()', () => {
  it('should say true if provided number is greater than ninety otherwise it should say false', () => {
    const expected = true;

    const actual = helpers.greaterThanFifty(105);

    expect(expected).toBe(actual);
  });

  it('should throw error when called with a string', () => {
    expect(() => {
      helpers.greaterThanFifty('one hundred five');
    }).toThrow();
  });
}); 
});