const helpers = require('./project-1');

// start testing!

describe('tests for multiplyByTen()', () => {

  test('should multiply provided number by 10', () => {
    const expected = 50;
    const actual = helpers.multiplyByTen(5);

    expect(actual).toEqual(expected);
  });

  test('should return NaN when called with no value', () => {
    const product = helpers.multiplyByTen();

    expect(product).toBe(NaN);

    // not changing the code for this one; NaN makes more sense to me than 0 when given no input
  });

  // testing a few different input types; should throw error for any non-number

  test('should throw error when called with a string', () => {
    expect(() => {
      helpers.multiplyByTen('string');
    }).toThrow();
  });

  test('should throw error when called with a boolean', () => {
    expect(() => {
      helpers.multiplyByTen(true);
    }).toThrow();
  });

  test('should throw error when called with undefined variables', () => {
    expect(() => {
      helpers.multiplyByTen(undefinedVariable);
    }).toThrow();
  });

});

describe('tests for subtractFive()', () => {
  test('should return given number minus five', () => {
    const expected = 45;
    const actual = helpers.subtractFive(50);

    expect(actual).toEqual(expected);
  });

  test('should return NaN when called with no value', () => {
      const difference = helpers.subtractFive();

      expect(difference).toBe(NaN);
  });

  // same type-checking tests as multiplyByTen()

  test('should throw error when called with a string', () => {
    expect(() => {
      helpers.subtractFive('string');
    }).toThrow();
  });

  test('should throw error when called with a boolean', () => {
    expect(() => {
      helpers.subtractFive(true);
    }).toThrow();
  });

  test('should throw error when called with undefined variables', () => {
    expect(() => {
      helpers.subtractFive(undefinedVariable);
    }).toThrow();
  });

});

// starting with single tests from here on out in the interest of time

test('should return strings of same length', () => {
  const one = 'testone';
  const two = 'testtwo';
  const equal = helpers.areSameLength(one.length, two.length);

  expect(equal).toBe(true);
});

test('should return numbers of equal value', () => {
  const x = 3;
  const y = 3;
  const equalValue = helpers.areEqual(x, y);
  
  expect(x).toEqual(y);
});

test('should be true when given number is less than 90', () => {
  const isLess = helpers.lessThanNinety(45);

  expect(isLess).toBe(true);
});

test('should be true when given number is greater than 50', () => {
  const isGreater = helpers.greaterThanFifty(55);

  expect(isGreater).toBe(true);
});

test('should return the sum of two numbers', () => {
  const sum = 5 + 6;

  expect(sum).toBe(11);
});
