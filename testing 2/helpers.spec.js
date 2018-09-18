const helpers = require('./helpers.js');
// what if one of the values is undefined > value
// what if one of the values is null > value
// what if one of the values is negative > algebraic sum
// what if both values are undefined > 0
// what if pass floats and round the result to 1 decimal
// what if the sum is larger than Number.MAX_VALUE

// what if one the values is a string > convert to number if possible, if not return false

describe('math helpers', () => {
  describe('add function', () => {
    it('should add two numbers', () => {
      // arrange, setup

      // act

      // assert
      expect(helpers.add(2, 2)).toBe(4);
      expect(helpers.add(3, 1)).toBe(4);
    });

    it('should return the provided value if the other value is undefined', () => {
      expect(helpers.add(undefined, 1)).toBe(1);
      expect(helpers.add(1, undefined)).toBe(1);
    });
  });

  describe('multiply function', () => {
    it('should multiply two numbers', () => {
      expect(helpers.multiply(2, 2)).toBe(4);
      expect(helpers.multiply(3, 1)).toBe(3);
    });
  });

  it.skip('should return false if a string cannot be converted', () => {
    expect(helpers.add(15, 'twenty')).toBe(false);
  });

  it.skip('should add two whole numbers', () => {
    // Arrange : set up the world
    const expected = 7;

    // Act : execute the tested code
    const actual = helpers.add(3, 4);

    // Assert : check the results are correct
    expect(actual).toBe(expected);
    // toBe is a matcher.
  });
});
