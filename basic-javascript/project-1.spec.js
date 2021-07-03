const helpers = require('./project-1');

// start testing!

describe('multiplyByTen', () => {
  it('returns NaN when given a non numeric value', () => {
    expect(helpers.multiplyByTen(undefined)).toBeNaN();
    expect(helpers.multiplyByTen('five')).toBeNaN();
  });

  it('should return the given number multiplied by 10', () => {
    expect(helpers.multiplyByTen(5)).toBe(50);
    expect(helpers.multiplyByTen(-3)).toBe(-30);
  });
});

describe('subtractFive', () => {
  it('returns NaN when given a non numeric value', () => {
    expect(helpers.subtractFive(undefined)).toBeNaN();
    expect(helpers.subtractFive('five')).toBeNaN();
  });

  it('should return the given number minus 5', () => {
    expect(helpers.subtractFive(5)).toBe(0);
    expect(helpers.subtractFive(-3)).toBe(-8);
  });
});

describe('areSameLength', () => {
  it('should return true if str1 has the same length than str2', () => {
    expect(helpers.areSameLength("Hi my name","We are the same length")).toBe(false);
    expect(helpers.areSameLength("","")).toBe(true);
    expect(helpers.areSameLength("Hi","")).toBe(false);
    expect(helpers.areSameLength("12345","67590")).toBe(true);
  });
});

describe('areEqual', () => {
  it('should return true if x is equal to y', () => {
    expect(helpers.areEqual("Hi my name is","Hi my name is")).toBeTruthy();
    expect(helpers.areEqual("","")).toBeTruthy();
    expect(helpers.areEqual(4,4)).toBeTruthy();
  });
  it('should return false if x is different to y', () => {
    expect(helpers.areEqual("Hi my name is","hi my name is")).toBeFalsy();
    expect(helpers.areEqual("Hi","")).toBeFalsy();
    expect(helpers.areEqual("12345","67590")).toBeFalsy();
    expect(helpers.areEqual(4,'4')).toBeFalsy();
  });
});

describe('lessThanNinety', () => {
  it('should return true if num is less than 90', () => {
    expect(helpers.lessThanNinety(89)).toBeTruthy();
    expect(helpers.lessThanNinety("89")).toBeTruthy();
    expect(helpers.lessThanNinety(4)).toBeTruthy();
  });
  it('should return false if x is different to y', () => {
    expect(helpers.lessThanNinety(90)).toBeFalsy();
    expect(helpers.lessThanNinety("Hi","")).toBeFalsy();
    expect(helpers.lessThanNinety("12345","67590")).toBeFalsy();
    expect(helpers.lessThanNinety('94')).toBeFalsy();
  });
});






describe('isEven', () => {
  it('should return true for even numbers', () => {
    expect(helpers.isEven(4)).toBeTruthy();
    expect(helpers.isEven(0)).toBeTruthy();
  });
  it('should return false for odd numbers', () => {
    expect(helpers.isEven(3)).toBeFalsy();
    expect(helpers.isEven(-1)).toBeFalsy();
  });
});

// should return the right amount given a numeric value
// another idea