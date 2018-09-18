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
  expect(helpers.areSameLength('hello')).toBe('Please provide a pair of strings or arrays to compare')

});


test('areEqual', () => {

  expect(helpers.areEqual('gg', 'gg')).toBe(true)
  expect(helpers.areEqual('gg')).toBe('Please provide two values to compare')

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


test('add', () => {

  expect(helpers.add(10, 20)).toBe(30)
  expect(helpers.add(10, '20')).toBe('please provide two numbers')
  expect(helpers.add(15)).toBe('Please provide two values')

});


test('subtract', () => {

  expect(helpers.subtract(20, 10)).toBe(10)
  expect(helpers.subtract('20', 10)).toBe(10)
  expect(helpers.subtract({}, 20)).toBe('Please provide two numbers')
  expect(helpers.subtract(20, null)).toBe('Please provide two numbers')
  expect(helpers.subtract(15)).toBe('Please provide two values')

});


test('divide', () => {

  expect(helpers.divide(20, 2)).toBe(10)
  expect(helpers.divide('20', 2)).toBe(10)
  expect(helpers.divide(20, undefined)).toBe('Please provide two values')
  expect(helpers.divide(15)).toBe('Please provide two values')
  expect(helpers.divide(20, null)).toBe('Please provide two numbers')
  expect(helpers.divide([], 20)).toBe('Please provide two numbers')

});


test('multiply', () => {

  expect(helpers.multiply(20, 2)).toBe(40)
  expect(helpers.multiply('20', 2)).toBe(40)
  expect(helpers.multiply(20, undefined)).toBe('Please provide two values')
  expect(helpers.multiply([], 20)).toBe('Please provide two numbers')
  expect(helpers.multiply(15)).toBe('Please provide two values')

});


test('getRemainder', () => {

  expect(helpers.getRemainder(20, 2)).toBe(0)
  expect(helpers.getRemainder(7858, 2697855410)).toBe(7858)
  expect(helpers.getRemainder(7858, '2697855410')).toBe(7858)
  expect(helpers.getRemainder(20, undefined)).toBe('Please provide two values')
  expect(helpers.getRemainder({}, 20)).toBe('Please provide two numbers')
  expect(helpers.getRemainder(15)).toBe('Please provide two values')

});


test('isEven', () => {

  expect(helpers.isEven(20)).toBe(true)
  expect(helpers.isEven(77)).toBe(false)
  expect(helpers.isEven('77')).toBe(false)
  expect(helpers.isEven(undefined)).toBe('Please provide a value')
  expect(helpers.isEven(null)).toBe('Please provide a number')
  expect(helpers.isEven([])).toBe('Please provide a number')

});


test('isOdd', () => {

  expect(helpers.isOdd(20)).toBe(false)
  expect(helpers.isOdd(77)).toBe(true)
  expect(helpers.isOdd('77')).toBe(true)
  expect(helpers.isOdd(undefined)).toBe('Please provide a value')
  expect(helpers.isOdd(null)).toBe('Please provide a number')
  expect(helpers.isOdd({})).toBe('Please provide a number')

});


test('square', () => {

  expect(helpers.square(5)).toBe(25)
  expect(helpers.square('5')).toBe(25)
  expect(helpers.square(undefined)).toBe('Please provide a value')
  expect(helpers.square(null)).toBe('Please provide a number')
  expect(helpers.square({})).toBe('Please provide a number')

});


test('square', () => {

  expect(helpers.square(5)).toBe(25)
  expect(helpers.square('5')).toBe(25)
  expect(helpers.square(undefined)).toBe('Please provide a value')
  expect(helpers.square(null)).toBe('Please provide a number')
  expect(helpers.square({})).toBe('Please provide a number')

});



test('cube', () => {

  expect(helpers.cube(5)).toBe(125)
  expect(helpers.cube('5')).toBe(125)
  expect(helpers.cube(undefined)).toBe('Please provide a value')
  expect(helpers.cube(null)).toBe('Please provide a number')
  expect(helpers.cube({})).toBe('Please provide a number')

});



