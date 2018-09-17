const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('should return the bigger of the two parameters', () => {
    expect(funcs.getBiggest(4,2)).toBe(4);
})

test('should greet the user in the language passed as a parameter', () => {
  expect(funcs.greeting('German')).toBe('Guten Tag!');
})

test('should return true if the number is 5 or 10 else return false  ', () => {
  expect(funcs.isTenOrFive(10)).toBe(true);
  expect(funcs.isTenOrFive(5)).toBe(true);
  expect(funcs.isTenOrFive(8)).toBe(false);
  expect(funcs.isTenOrFive(9)).toBe(false);
})

test('should return true if NUMBER passed is less than 50 and greater thatn 20', () => {
  expect(funcs.isInRange('string')).toBe(false);
  expect(funcs.isInRange(50)).toBe(false);
  expect(funcs.isInRange(49)).toBe(true);
  expect(funcs.isInRange(51)).toBe(false);
  expect(funcs.isInRange(20)).toBe(false);
  expect(funcs.isInRange(21)).toBe(true);
  expect(funcs.isInRange(19)).toBe(false);
})

test('should return true if number is an integer', () => {
  expect(funcs.isInteger(5)).toBe(true)
  expect(funcs.isInteger(5.5)).toBe(false)
})

test('should return fixx if divisible by three, return buzz if divisible by 5, and return fizzbuzz if divisible by 3 and 5', () => {
  expect(funcs.fizzBuzz(6)).toBe('fizz')
  expect(funcs.fizzBuzz(10)).toBe('buzz')
  expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
  expect(funcs.fizzBuzz(16)).toBe(16)
})
