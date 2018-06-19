const helpers = require('./project-1');

describe('multiplyByTen', () => {
  test('Correct multiplication', () => {
    const actual = helpers.multiplyByTen(2);
    expect(actual).toEqual(20);
  });
  test('By NaN', () => {
    const actual = helpers.multiplyByTen(NaN);
    expect(actual).toEqual(NaN);
  });
  test('By a number in String format', () => {
    const actual = helpers.multiplyByTen('2');
    expect(actual).toEqual(20);
  });
  test('By a String other than a digit', () => {
    const actual = helpers.multiplyByTen('hola');
    expect(actual).toEqual(NaN);
  });
});
describe('subtractFive', () => {
  test('worng substraction', () => {
    const actual = helpers.subtractFive(5);
    expect(actual).not.toEqual(1);
  });
  test('Correct substraction', () => {
    const actual = helpers.subtractFive(5);
    expect(actual).toEqual(0);
  });
  test('param is NaN', () => {
    const actual = helpers.subtractFive(NaN);
    expect(actual).toBe(NaN);
  });
  test('param is String', () => {
    const actual = helpers.subtractFive(5);
    expect(actual).toEqual(0);
  });
  test('result must be less than passed param', () => {
    const actual = helpers.subtractFive(-10);
    expect(actual).toBeLessThan(-10);
  });
});
describe('areSameLength', () => {
  test('same Strings must have the same length', () => {
    const actual = helpers.areSameLength('Hola', 'Hola');
    expect(actual).toEqual(true);
  });
  test('Capitalization do not affect the result', () => {
    const actual = helpers.areSameLength('hola', 'HOLA');
    expect(actual).toBe(true);
  });
  test('Different strigns with different length must return false', () => {
    const actual = helpers.areSameLength('Hola', 'Caracola');
    expect(actual).toBe(false);
  });
  test('compare a String with an Array', () => {
    const actual = helpers.areSameLength(['h', 'o', 'l', 'a'], 'hola');
    expect(actual).toBe(true);
  });
  test('compare with a Number', () => {
    const actual = helpers.areSameLength(1234, 'hola');
    expect(actual).toBe(false);
  });
});
describe('areEqual', () => {
  test('Type coercion returns false', () => {
    const actual = helpers.areEqual(1, '1');
    expect(actual).toBe(false);
  });
  test('params of same type...', () => {
    const actual = helpers.areEqual(1, 1);
    expect(actual).toBe(true);
    expect(helpers.areEqual({}, {})).toBe(false);
    expect(helpers.areEqual([], [])).toBe(false);
    expect(helpers.areEqual({ a: 1 }, { a: 1 })).toBe(false);
  });
  test('params os smae type, but different value must return false', () => {
    const actual = helpers.areEqual(1, 2);
    expect(actual).toBe(false);
  });
});
describe('lessThanNinety', () => {
  test.each([[90], [100], [2000]])('values <= 90 must return false', value => {
    const actual = helpers.lessThanNinety(value);
    expect(actual).toBe(false);
  });
  test.each([[89], [1], [-90]])('values > 90 must return true', value => {
    const actual = helpers.lessThanNinety(value);
    expect(actual).toBe(true);
  });
});
describe.only('greaterThanFifty', () => {
  test.each([[51], [Infinity]])('values > 50, must return true', value => {
    const actual = helpers.greaterThanFifty(value);
    expect(actual).toBe(true);
  });
  test.each([[50], [-50]])('vales <= 50, must return false', value => {
    const actual = helpers.greaterThanFifty(value);
    expect(actual).toBe(false);
  });
});
describe('add', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('subtract', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('divide', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('multiply', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('getRemainder', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('isEven', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('isOdd', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('square', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('cube', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('raiseToPower', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('roundNumber', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('roundUp', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('addExclamationPoint', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('combineNames', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('getGreeting', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('getRectangleArea', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('getTriangleArea', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('getCircleArea', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
describe('getRectangularPrismVolum', () => {
  test('', () => {
    const actual = helper;
    expect(actual).matcher();
  });
});
