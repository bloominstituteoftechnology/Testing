const helpers = require('./project-2')
it('should return the greatest value', () => {
  expect(helpers.getBiggest(10, 5)).toEqual(10)
})

it('should return a string', () => {
  expect(helpers.greeting('English')).toEqual('Hello!')
})

it('should return true when number is strictly equal to 10 or 5', () => {
  expect(helpers.isTenOrFive(5)).toEqual(true)
})

it('should return true if number value is between 20 - 50', () => {
  expect(helpers.isInRange(35)).toEqual(true)
})

it('should return true if number is an integer/whole number', () => {
  expect(helpers.isInteger(5)).toEqual(true)
})

it('should return a string', () => {
  expect(helpers.fizzBuzz(9)).toEqual('fizz')
})

it('should return true if number is prime', () => {
  expect(helpers.isPrime(3)).toEqual(true)
})

it('should return the first index of the array', () => {
  expect(helpers.returnFirst([ 99, 1, 2, 3, 4 ])).toEqual(99)
})

it('should return the last index of the array', () => {
  expect(helpers.returnLast([ 2, 4, 354, 32, 432, 666 ])).toEqual(666)
})
it('should return the length of the given array', () => {
  expect(helpers.getArrayLength([ 2, 434, 23, 4342, 32, 43 ])).toEqual(6)
})

it('should return a new array with all the indexes incremented by one', () => {
  expect(helpers.incrementByOne([ 3, 4, 5, 6, 67 ])).toEqual([ 4, 5, 6, 7, 68 ])
})

it('should add the item paramater to the end of the given array', () => {
  expect(helpers.addItemToArray([ 1, 2, 3 ], 4)).toEqual([ 1, 2, 3, 4 ])
})

it('should the given item to the front of the array', () => {
  expect(helpers.addItemToFront([ 1, 2, 3 ], 0)).toEqual([ 0, 1, 2, 3 ])
})

it('should return a new sentence with a space inbetween each letter', () => {
  expect(helpers.wordsToSentence('luis')).toEqual('l u i s')
})

it('should return true if array contains the passed in item', () => {
  expect(helpers.contains([ 1, 2, 3, 666 ], 666)).toEqual(true)
})

it('should return the addition of all indexs added up', () => {
  expect(helpers.addNumbers([ 1, 2, 3, 4 ])).toEqual(10)
})

it('should return the average of all test scores', () => {
  expect(helpers.averageTestScore([ 10, 10, 20, 30 ])).toEqual(17.5)
})

it('should return the greatest number of the array', () => {
  expect(helpers.largestNumber([ 1, 4, 2, 5, 666 ])).toEqual(666)
})
// whoops.. there is no test suite for this file. You'll simply just have to create one :/
