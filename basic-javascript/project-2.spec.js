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

it('Should return last value of an array', () => {
  expect(funcs.returnLast(['fumo', 'sakuya', 'reimu'])).toBe('reimu')
})

it('Should return the array length', () => {
  expect(funcs.getArrayLength(['fumo', 'sakuya', 'reimu'])).toBe(3)
})

it('Should increment by one in a array', () => {
  const expected = [3, 6, 9]
  expect(funcs.incrementByOne([2, 5, 8])).toEqual(expected)
})

it('Should have a new item in array', () => {
  const expected = ['fumo', 'sakuya', 'reimu'];
  expect(funcs.addItemToArray(['fumo', 'sakuya'], 'reimu')).toEqual(expected)
})

it('Should have the new item added to the front', () => {
  const expected = ['reimu', 'fumo', 'sakuya'];
  expect(funcs.addItemToFront(['fumo', 'sakuya'], 'reimu')).toEqual(expected)
})

it('Should have words be in a sentence', () => {
  const expected = "I love fumos"
  expect(funcs.wordsToSentence(['I', 'love', 'fumos'])).toEqual(expected)
})

it('Should check if item in a array', () => {
  expect(funcs.contains(['fumo', 'sakuya', 'reimu'], 'fumo')).toBeTruthy()
  expect(funcs.contains(['fumo', 'sakuya', 'reimu'], 'mokou')).toBeFalsy()
})

it('Should add all numbers in a array', () => {
  const expected = 1000;
  expect(funcs.addNumbers([100, 300, 100, 500])).toEqual(expected)
})

it('Should average out test scores', () => {
  expect(funcs.averageTestScore([40, 20, 10, 0, 100])).toBe(34)
})

it('Should return largest number in array', () => {
  expect(funcs.largestNumber([50, 80, 300, -100, 20])).toBe(300)
})