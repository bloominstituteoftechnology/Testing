const helpers = require('./project-1');

// git init
// npm init -y
// yarn add jest --dev
// change "test" script to be "jest --watch --verbose"
// add .gitignore file and ignore node_modules
// create .js files and .test.js / .spec.js
// yarn test

// start testing!

// make sure your tests can fail!
// test with different values and expected results

test.skip('run tests', () => {
  // Arrange: set up what your tests need
  // a value that you know should be result of the operation
  const expected = 50;

  // Act: execute the tested code
  // the operation itself
  const actual = helpers.multiplyByTen(5);

  // Assert: check results are correct
  // checking the operation
  // toBe is a matcher
  expect(actual).toBe(expected);
});


test('multiplyByTen', () => {

  expect(helpers.multiplyByTen(5)).toBe(50)
  expect(helpers.multiplyByTen('5')).toBe(50)
  expect(helpers.multiplyByTen('hello')).toBe('Please provide a number')
  expect(helpers.multiplyByTen([])).toBe('Please provide a number')
  expect(helpers.multiplyByTen(undefined)).toBe('Please provide a number')
  expect(helpers.multiplyByTen(null)).toBe('Please provide a number')
  
});


test('subtractFive', () => {

  expect(helpers.subtractFive(5)).toBe(0)
  expect(helpers.subtractFive('5')).toBe(0)
  expect(helpers.subtractFive([])).toBe('Please provide a number')
  expect(helpers.subtractFive(undefined)).toBe('Please provide a number')
  expect(helpers.subtractFive(null)).toBe('Please provide a number')
  
});


test('areSameLength', () => {
  
  expect(helpers.areSameLength('gg', 'gg')).toBe(true)
  expect(helpers.areSameLength('gg', ['g','g'])).toBe(true)
  expect(helpers.areSameLength([], [])).toBe(true)
  expect(helpers.areSameLength([1], [])).toBe(false)
  expect(helpers.areSameLength('hello', 'hey')).toBe(false)
  expect(helpers.areSameLength([], undefined)).toBe('Please provide a pair of strings or arrays to compare')
  expect(helpers.areSameLength('hello', 5)).toBe('Please provide a pair of strings or arrays to compare')

});


test('areEqual', () => {

  expect(helpers.areEqual('gg', 'gg')).toBe(true)

});


test('lessThanNinety', () => {

  expect(helpers.lessThanNinety(50)).toBe(true)
  expect(helpers.lessThanNinety(500)).toBe(false)
  expect(helpers.lessThanNinety([50])).toBe('please provide a number')
  expect(helpers.lessThanNinety('50')).toBe('please provide a number')

});


test('greaterThanFifty', () => {

  expect(helpers.greaterThanFifty(75)).toBe(true)
  expect(helpers.greaterThanFifty(30)).toBe(false)
  expect(helpers.greaterThanFifty([50])).toBe('please provide a number')
  expect(helpers.greaterThanFifty('50')).toBe('please provide a number')

});


