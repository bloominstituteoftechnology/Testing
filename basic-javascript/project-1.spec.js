const helpers = require('./project-1');

describe('multiply by ten', () => {
  it('should multiply a number by ten', () => {
    expect(helpers.multiplyByTen(0)).toEqual(0);
    expect(helpers.multiplyByTen(1)).toEqual(10);
    expect(helpers.multiplyByTen(10)).toEqual(100);
  });

  it('should check if argument is a number', () => {
    expect(helpers.multiplyByTen(' ')).toEqual(undefined);
    expect(helpers.multiplyByTen('4')).toEqual(undefined);
    expect(helpers.multiplyByTen('q')).toEqual(undefined);
    expect(helpers.multiplyByTen(undefined)).toEqual(undefined);
  });
});

describe('subtract five from argument', () => {
  it('should subtract five from argument', () => {
    expect(helpers.subtractFive(0)).toEqual(-5);
    expect(helpers.subtractFive(5)).toEqual(0);
    expect(helpers.subtractFive(10)).toEqual(5);
  });

  it('should check if argument is a number', () => {
    expect(helpers.subtractFive(' ')).toEqual(undefined);
    expect(helpers.subtractFive('4')).toEqual(undefined);
    expect(helpers.subtractFive('q')).toEqual(undefined);
    expect(helpers.subtractFive(undefined)).toEqual(undefined);
  });
});

describe('check equivalence of string lengths', () => {
  it('should check equivalence of string lengths', () => {
    expect(helpers.areSameLength('', '  ')).toEqual(false);
    expect(helpers.areSameLength('abc', 'abc')).toEqual(true);
    expect(helpers.areSameLength('ab', 'abc')).toEqual(false);
  });

  it('should return false when one of the arguments is undefined', () => {
    expect(helpers.areSameLength(undefined, 'abc')).toEqual(false);
  });

  it('should return false if one or both arguments are not strings', () => {
    expect(helpers.areSameLength(6, 'abc')).toEqual(false);
  });
});

describe('check equivalence', () => {
  it('should check equivalence', () => {
    expect(helpers.areEqual('abc', 'abc')).toEqual(true);
    expect(helpers.areEqual('ab', 'abc')).toEqual(false);
    expect(helpers.areEqual(8, 'abc')).toEqual(false);
    expect(helpers.areEqual(8, 8)).toEqual(true);
  });

  it('should return false when one of the arguments is undefined', () => {
    expect(helpers.areEqual(undefined, 'abc')).toEqual(false);
  });
});

describe('check if a number is less than 90', () => {
  it('should check if a number is less than 90', () => {
    expect(helpers.lessThanNinety(91)).toEqual(false);
    expect(helpers.lessThanNinety(90)).toEqual(false);
    expect(helpers.lessThanNinety(89)).toEqual(true);
  });

  it('should check if argument is a number', () => {
    expect(helpers.lessThanNinety(' ')).toEqual(undefined);
    expect(helpers.lessThanNinety('4')).toEqual(undefined);
    expect(helpers.lessThanNinety('q')).toEqual(undefined);
    expect(helpers.lessThanNinety(undefined)).toEqual(undefined);
  });
});

describe('check if a number is greater than 50', () => {
  it('should check if a number is greater than 50', () => {
    expect(helpers.greaterThanFifty(51)).toEqual(true);
    expect(helpers.greaterThanFifty(50)).toEqual(false);
    expect(helpers.greaterThanFifty(49)).toEqual(false);
  });

  it('should check if argument is a number', () => {
    expect(helpers.greaterThanFifty(' ')).toEqual(undefined);
    expect(helpers.greaterThanFifty('4')).toEqual(undefined);
    expect(helpers.greaterThanFifty('q')).toEqual(undefined);
    expect(helpers.greaterThanFifty(undefined)).toEqual(undefined);
  });
});
