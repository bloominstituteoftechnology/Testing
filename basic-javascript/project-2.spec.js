const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('should return the greater value', () => {
  expect(funcs.getBiggest(10, 5)).toEqual(10)
})
 it('should return a string', () => {
  expect(funcs.greeting('Spanish')).toEqual('Hola!')
})
 it('should return true when input is strictly equal to 10 or 5', () => {
  expect(funcs.isTenOrFive(5)).toEqual(true)
})
 it('should return true if number is between 20 and 50', () => {
  expect(funcs.isInRange(27)).toEqual(true)
})
 it('should return true if number is an integer', () => {
  expect(funcs.isInteger(9)).toEqual(true)
})
 it('should return fizzbuzz if number is divisible by 5 and 3', () => {
  expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz')
})
 it('should return true if number is prime', () => {
  expect(funcs.isPrime(5)).toEqual(true)
})
 it('should return the first index of the array', () => {
  expect(funcs.returnFirst([ 0, 1, 2, 3, 4 ])).toEqual(0)
})
 it('should return the last index of the array', () => {
  expect(funcs.returnLast([ 2, 4, 8, 16, 32, 64 ])).toEqual(64)
})
it('should return the length of the given array', () => {
  expect(funcs.getArrayLength([ 2, 4, 8, 16, 32, 64 ])).toEqual(6)
})
 it('should return a new array with all the indexes incremented by one', () => {
  expect(funcs.incrementByOne([ 2, 4, 8, 16, 32, 64 ])).toEqual([ 3, 5, 9, 17, 33, 65 ])
})
 it('should add the passed item to the end of the given array', () => {
  expect(funcs.addItemToArray([ 1, 2, 3 ], 4)).toEqual([ 1, 2, 3, 4 ])
})
 it('should add the passed item to the front of the array', () => {
  expect(funcs.addItemToFront([ 1, 2, 3 ], 0)).toEqual([ 0, 1, 2, 3 ])
})
 it('should return a sentence with a space between each word', () => {
  expect(funcs.wordsToSentence(['kyran', 'is', 'the', 'best'])).toEqual('kyran is the best')
})
 it('should return true if array contains the passed in item', () => {
  expect(funcs.contains([ 1, 2, 3, 9 ], 9)).toEqual(true)
})
 it('should return the sum of numbers in an array', () => {
  expect(funcs.addNumbers([ 1, 2, 3, 4, 9 ])).toEqual(19)
})
 it('should return the average of numbers in an array', () => {
  expect(funcs.averageTestScore([ 30, 10, 20, 40 ])).toEqual(25)
})
 it('should return the largest number of the array', () => {
  expect(funcs.largestNumber([ 1, 4, 2, 5, 9 ])).toEqual(9)
})
