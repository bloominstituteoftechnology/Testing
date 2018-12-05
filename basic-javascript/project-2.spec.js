const f = require('./project-2');

it('should return the larger value between x and y', () => {
  expect(f.getBiggest(5, 3)).toBe(5);
  expect(f.getBiggest(5, '3')).toBe(5);
  expect(f.getBiggest('c', 'a')).toBe('c');
});

it('should return a greeting based on language', () => {
  expect(f.greeting('German')).toBe('Guten Tag!');
  expect(f.greeting('Spanish')).toBe('Hola!');
  expect(f.greeting(null)).toBe('Hello!');
});

it('should return true if number is the integer 10 or 5', () => {
  expect(f.isTenOrFive(10)).toBe(true);
  expect(f.isTenOrFive(5)).toBe(true);
  expect(f.isTenOrFive('5')).toBe(false);
});

it('should return true if number is < 50 and > 20', () => {
  expect(f.isInRange(35)).toBe(true);
  expect(f.isInRange(55)).toBe(false);
  expect(f.isInRange(50)).toBe(false);
});

it('should return true if number is an integer', () => {
  expect(f.isInteger(4)).toBe(true);
  expect(f.isInteger(4.5)).toBe(false);
  expect(f.isInteger('4.5')).toBe(false);
});

it('should return fizzbuzz etc. if number is divisible by 5 and/or 3', () => {
  expect(f.fizzBuzz(15)).toBe('fizzbuzz');
  expect(f.fizzBuzz(10)).toBe('buzz');
  expect(f.fizzBuzz('15')).toBe('fizzbuzz');
  expect(f.fizzBuzz(6)).toBe('fizz');
});

it('should return true for a prime number', () => {
  expect(f.isPrime(3)).toBe(true);
  expect(f.isPrime(9)).toBe(false);
});

it('should return the first element of an array', () => {
  expect(f.returnFirst([1, 2])).toBe(1);
});

it('should return the last element of an array', () => {
  expect(f.returnLast([1, 2])).toBe(2);
});

it('should return the length of an array', () => {
  expect(f.getArrayLength([1, 2])).toBe(2);
});

it('should increment each element of an array by one', () => {
  expect(f.incrementByOne([1, 2])).toEqual([2, 3]);
});

it('should add an item to an array then return that array', () => {
  expect(f.addItemToArray([1, 2], '3')).toEqual([1, 2, '3']);
});

it('should add an item to the front of an array then return that array', () => {
  expect(f.addItemToFront([1, 2], '3')).toEqual(['3', 1, 2]);
});

it('should return a sentence from an array of words', () => {
  expect(f.wordsToSentence(['Hey', 'Sam!'])).toBe('Hey Sam!');
});

it('should return true if array contains item', () => {
  expect(f.contains([1, '3'], '3')).toBe(true);
  expect(f.contains([1, '3'], 4)).toBe(false);
});

it('should return the sum of numbers in an array', () => {
  expect(f.addNumbers([1, 2])).toBe(3);
});

it('should return average of test scores in an array', () => {
  expect(f.averageTestScore([1, 3])).toBe(2);
});

it('should return the largest number in an array', () => {
  expect(f.largestNumber([1, 2])).toBe(2);
  expect(f.largestNumber([1, '2'])).toBe('2');
});
