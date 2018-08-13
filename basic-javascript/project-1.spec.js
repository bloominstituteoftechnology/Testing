const helpers = require('./project-1');

describe('multiply by ten', () => {
  test('Should multiply a number by ten', () => {
    expect(helpers.multiplyByTen(2)).toEqual(20);
    expect(helpers.multiplyByTen(10)).toEqual(100);
    expect(helpers.multiplyByTen(8.5)).toEqual(85);
    expect(helpers.multiplyByTen(-6)).toEqual(-60);
  })
  test('Should return false if value is undefined', () => {
    expect(helpers.multiplyByTen(undefined)).toEqual(false)
  })
})

describe('subtract by 5', () => {
  test('Should subtract 5 from a number', () => {
    expect(helpers.subtractFive(25)).toEqual(20);
    expect(helpers.subtractFive(105)).toEqual(100);
    expect(helpers.subtractFive(90)).toEqual(85);
    expect(helpers.subtractFive(-10)).toEqual(-15);
  })
  test('Should return false if value is undefined', () => {
    expect(helpers.subtractFive(undefined)).toEqual(false)
  })
})

describe('same length', () => {
  test('Strings should be the same length', () => {
    expect(helpers.areSameLength('abc', 'def')).toEqual(true);
    expect(helpers.areSameLength('12345', '1234567')).toEqual(false);
  })
  test('Should return false if value is undefined', () => {
    expect(helpers.areSameLength(undefined)).toEqual(false)
  })
})

describe('are equal', () => {
  test('Numbers should be equal', () => {
    expect(helpers.areEqual(14, 14)).toEqual(true);
    expect(helpers.areEqual(1, 23455)).toEqual(false);
  })
  test('Should return false if value is undefined', () => {
    expect(helpers.areEqual(undefined)).toEqual(false)
  })
})

describe('is less than 90', () => {
  test('Number should be less than 90', () => {
    expect(helpers.lessThanNinety(2)).toEqual(true);
    expect(helpers.lessThanNinety(108)).toEqual(false);
  })
  test('Should return false if number is undefined', () => {
    expect(helpers.lessThanNinety(undefined)).toEqual(false)
  })
})

describe('is greater than 50', () => {
  test('Number should be greater than 50', () => {
    expect(helpers.greaterThanFifty(2)).toEqual(false);
    expect(helpers.greaterThanFifty(108)).toEqual(true);
  })
  test('Should return false if number is undefined', () => {
    expect(helpers.greaterThanFifty(undefined)).toEqual(false)
  })
})

describe('add two numbers', () => {
  test('Should return the sum of two numbers', () => {
    expect(helpers.add(2, 6)).toEqual(8);
    expect(helpers.add(0, 44)).toEqual(44);
    expect(helpers.add(-10, 5)).toEqual(-5);
  })
  test('Should return false if number is undefined', () => {
    expect(helpers.add(undefined)).toEqual(false)
  })
})

describe('add subtract two numbers', () => {
  test('Should return the one number after being subtracted from the other', () => {
    expect(helpers.subtract(12, 6)).toEqual(6);
    expect(helpers.subtract(0, 44)).toEqual(-44);
    expect(helpers.subtract(200, 5)).toEqual(195);
  })
  test('Should return false if number is undefined', () => {
    expect(helpers.subtract(undefined)).toEqual(false)
  })
})
