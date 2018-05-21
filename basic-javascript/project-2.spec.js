const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
+it('gets biggest of 2 and 9', () => {
  +  const biggest = funcs.getBiggest(2, 9);
  +  expect(biggest).toBe(9)
  +})
  +
  +describe('greeting func', () => {
  +  it('greets in german', () => {
  +    expect(funcs.greeting('German')).toBe('Guten Tag!')
  +  })
  +  it('greets in english as default', () => {
  +    expect(funcs.greeting()).toBe('Hello!')
  +  })
  +  it('greets in spanish, que galan', () => {
  +    expect(funcs.greeting('Spanish')).toBe('Hola!') // wrong, needs a ¡
  +  })
  +})
  +
  +it('is only 10 or 5', () => {
  +  expect(funcs.isTenOrFive(5)).toBe(true)
  +  expect(funcs.isTenOrFive(10)).toBe(true)
  +  expect(funcs.isTenOrFive(234234.234234)).toBe(false)
  +})
  +
  +it('tests if in range', () => {
  +  expect(funcs.isInRange(25)).toBe(true)
  +  expect(funcs.isInRange(2)).toBe(false)
  +})
  +
  +it('tests if integer', () => {
  +  expect(funcs.isInteger(2)).toBe(true)
  +  expect(funcs.isInteger(232.23)).toBe(false)
  +  expect(funcs.isInteger('2')).toBe(false)
  +})
  +
  +it('gives you a dev job', () => {
  +  expect(funcs.fizzBuzz(3)).toBe('fizz')
  +  expect(funcs.fizzBuzz(5)).toBe('buzz')
  +  expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
  +})
  +
  +it('PRIME TIME BABY', () => {
  +  expect(funcs.isPrime(3)).toBe(true)
  +  expect(funcs.isPrime(2304982304)).toBe(false)
  +})
  +
  +it('returns first item in array', () => {
  +  expect(funcs.returnFirst([0, 1, 2, 3, 4, 4, 5, 3, 2, 3,])).toBe(0)
  +  expect(funcs.returnFirst('this works haha')).toBe('t')
  +})
  +
  +it('returns last item in array', () => {
  +  expect(funcs.returnLast([0, 1, 23, 3, 444])).toBe(444)
  +})
  +
  +it('will show you the length of array', () => {
  +  expect(funcs.getArrayLength([1])).toBe(1)
  +})
  +
  +it('adds one to everything in array', () => {
  +  const arr = [0, 1, 2, 3]
  +  const expectedArr = [1, 2, 3, 4]
  +  expect(funcs.incrementByOne(arr)).toEqual(expectedArr)
  +})
  +
  +it('pushes item to end array', () => {
  +  const expected = [1, 2, 3]
  +  expect(funcs.addItemToArray([1, 2], 3)).toEqual(expected)
  +})
  +
  +it('pushes item to front of array', () => {
  +  const expected = [3, 1, 2]
  +  expect(funcs.addItemToFront([1, 2], 3)).toEqual(expected)
  +})
  +
  +it('takes array of strings makes them sentence', () => {
  +  const actual = ['I', 'am', 'a', 'Person']
  +  const expected = 'I am a Person'
  +  expect(funcs.wordsToSentence(actual)).toBe(expected)
  +})
  +
  +it('adds all numbers in array', () => {
  +  const sum = 10
  +  expect(funcs.addNumbers([1, 2, 3, 4])).toBe(sum)
  +})
  +
  +it('averages array of numbers', () => {
  +  const average = (1 + 2 + 3 + 4) / 4
  +  expect(funcs.averageTestScore([1, 2, 3, 4,])).toBe(average)
  +})
  +
  +it('will return biggest number in array', () => {
  +  const biggest = 15
  +  expect(funcs.largestNumber([1, 3, 2, 0.00003, 15])).toBe(biggest)
  +})