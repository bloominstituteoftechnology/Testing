const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

test('getBiggest', () => {

  expect(funcs.getBiggest(5, 2)).toBe(5)
  expect(funcs.getBiggest(-7858, 2697855410)).toBe(2697855410)
  expect(funcs.getBiggest(7858, '-2697855410')).toBe(7858)
  expect(funcs.getBiggest(-20, undefined)).toBe('Please provide two values')
  expect(funcs.getBiggest({}, 20)).toBe('Please provide two numbers')
  expect(funcs.getBiggest(15)).toBe('Please provide two values')

});



test('greeting', () => {

  expect(funcs.greeting('German')).toBe('Guten Tag!')
  expect(funcs.greeting('Spanish')).toBe('Hola!')
  expect(funcs.greeting('hello')).toBe('Please provide language')
  expect(funcs.greeting(undefined)).toBe('Please provide a string')
  expect(funcs.greeting({})).toBe('Please provide a string')
  expect(funcs.greeting(15)).toBe('Please provide a string')

});


test('returnFirst', () => {

  expect(funcs.returnFirst([0,5,3])).toBe(0)
  expect(funcs.returnFirst([])).toBe('array can\'t be empty' )
  expect(funcs.returnFirst({})).toBe('Please provide an array')
  expect(funcs.returnFirst(15)).toBe('Please provide an array')

});


test('returnLast', () => {

  expect(funcs.returnLast([0,5,3])).toBe(3)
  expect(funcs.returnLast([])).toBe('array can\'t be empty' )
  expect(funcs.returnLast({})).toBe('Please provide an array')
  expect(funcs.returnLast(15)).toBe('Please provide an array')

});


test('getArrayLength', () => {

  expect(funcs.getArrayLength([0,5,3])).toBe(3)
  expect(funcs.getArrayLength(null)).toBe('Please provide an array')
  expect(funcs.getArrayLength(15)).toBe('Please provide an array')

});



test('incrementByOne', () => {

  expect(funcs.incrementByOne([0,5,3])).toEqual([1,6,4])
  expect(funcs.incrementByOne(undefined)).toBe('Please provide an array')
  expect(funcs.incrementByOne(15)).toBe('Please provide an array')

});


test('addItemToArray', () => {

  expect(funcs.addItemToArray([0,5,3], 5)).toEqual([0,5,3,5])
  expect(funcs.addItemToArray([], 15)).toEqual([15])
  expect(funcs.addItemToArray(undefined)).toBe('please provide both values')
  expect(funcs.addItemToArray({}, 15)).toBe('Please provide an array')

});


test('addItemToFront', () => {

  expect(funcs.addItemToFront([0,5,3], 5)).toEqual([5,0,5,3])
  expect(funcs.addItemToFront([], 15)).toEqual([15])
  expect(funcs.addItemToFront(undefined)).toBe('please provide both values')
  expect(funcs.addItemToFront({}, 15)).toBe('Please provide an array')

});

