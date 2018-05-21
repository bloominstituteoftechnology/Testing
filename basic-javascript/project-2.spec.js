const funcs = require('../basic-javascript/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

//testy testing test code
it('Testing the test', () => { });

it('Should bring back the higher number', () => {
  expect(funcs.getBiggest(5, 3)).toBe(5)
})

it('Should return proper languages', () => {
  expect(funcs.greeting('German')).toBe('Guten Tag!')
  expect(funcs.greeting('Spanish')).toBe('Hola!')
  expect(funcs.greeting('')).toBe('Hello!')
})

it('Should check if number is 10 or 5', () => {
  expect(funcs.isTenOrFive(3)).toBeFalsy()
  expect(funcs.isTenOrFive(10)).toBeTruthy()
  expect(funcs.isTenOrFive(5)).toBeTruthy()
})

it('Number should be in range', () => {
  expect(funcs.isInRange(18)).toBeFalsy()
  expect(funcs.isInRange(30)).toBeTruthy()
})

it('Number should return proper fizz buzzes', () => {
  expect(funcs.fizzBuzz(3)).toBe('fizz')
  expect(funcs.fizzBuzz(5)).toBe('buzz')
  expect(funcs.fizzBuzz(2)).toBe(2)
})

it('Number should be checked if prime', () => {
  expect(funcs.isPrime(10)).toBeFalsy()
  expect(funcs.isPrime(7)).toBeTruthy()
})

it('Should return first value of an array', () => {
  expect(funcs.returnFirst([3, 2, 1])).toBe(3)
  expect(funcs.returnFirst(['fumo', 'sakuya', 'reimu'])).toBe('fumo')
})

