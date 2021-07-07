const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('should return the bigger of the two numbers', () => {
  expect(funcs.getBiggest(2,3)).toEqual(3);
  expect(funcs.getBiggest(4,1)).toEqual(4);
  expect(funcs.getBiggest(88,77)).toEqual(88);
})

it('should return greeting in the language supplied', () => {
  expect(funcs.greeting('German')).toEqual('Guten Tag!');
  expect(funcs.greeting('Spanish')).toEqual('¡Hola!');
  expect(funcs.greeting()).toEqual('Hello!');
})

it('should return true or false depending if the number is 10 or 5', () => {
  expect(funcs.isTenOrFive(5)).toEqual(true);
  expect(funcs.isTenOrFive(10)).toEqual(true);
  expect(funcs.isTenOrFive(8)).toEqual(false);
  expect(funcs.isTenOrFive('five')).toEqual(false);
  expect(funcs.isTenOrFive('ten')).toEqual(false);
  expect(funcs.isTenOrFive('what')).toEqual(false);
})

it('should be in range', () => {
  expect(funcs.isInRange(20)).toEqual(false);
  expect(funcs.isInRange(21)).toEqual(true);
  expect(funcs.isInRange(49)).toEqual(true);
  expect(funcs.isInRange(50)).toEqual(false);
})

it('should be in range', () => {
  expect(funcs.isInteger(21.1)).toEqual(false);
  expect(funcs.isInteger(21)).toEqual(true);
})

it('should return fizz, buzz, or fizzbuzz depending if number is divisble by 5, 3, or both', () => {
  expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
  expect(funcs.fizzBuzz(10)).toEqual('buzz');
  expect(funcs.fizzBuzz(9)).toEqual('fizz');
  expect(funcs.fizzBuzz(7)).toEqual(7);
})

it('should return true or false depending if number is prime', () => {
  expect(funcs.isPrime(2)).toEqual(true);
  expect(funcs.isPrime(3)).toEqual(true);
  expect(funcs.isPrime(5)).toEqual(true);
  expect(funcs.isPrime(8)).toEqual(false);
})

it('should return the first item of the array', () => {
  expect(funcs.returnFirst([1,2,3])).toEqual(1);
  expect(funcs.returnFirst([2,3,4])).toEqual(2);
  expect(funcs.returnFirst([3,4,5])).toEqual(3);
})

it('should return the last item of the array', () => {
  expect(funcs.returnLast([1,2,3])).toEqual(3);
  expect(funcs.returnLast([2,3,4])).toEqual(4);
  expect(funcs.returnLast([3,4,5])).toEqual(5);
})

it('should return the length of the array', () => {
  expect(funcs.getArrayLength([1,2,3])).toEqual(3);
  expect(funcs.getArrayLength([1,2,3,4,5])).toEqual(5);
  expect(funcs.getArrayLength([1,2,3,4,5,6,7,8,9,10])).toEqual(10);
})

it('should increment each element of the array by one and return the array', () => {
  expect(funcs.incrementByOne([2,4,6])).toEqual([3,5,7]);
})

it('should return the array with the second argument as the last item in the array', () => {
  expect(funcs.addItemToArray([1,2,3], 4)).toEqual([1,2,3,4]);
  expect(funcs.addItemToArray([2,3,4], 5)).toEqual([2,3,4,5]);
  expect(funcs.addItemToArray([3,4,5], 6)).toEqual([3,4,5,6]);
})

it('should return the array with the 2nd argument being added to the beginning of the array', () => {
  expect(funcs.addItemToFront([1,2,3], 4)).toEqual([4,1,2,3]);
  expect(funcs.addItemToFront([2,3,4], 5)).toEqual([5,2,3,4]);
  expect(funcs.addItemToFront([3,4,5], 6)).toEqual([6,3,4,5]);
})

it('should return a string that forms a sentence from an array of words', () => {
  expect(funcs.wordsToSentence(['The', 'day', 'has', 'begun!'])).toEqual('The day has begun!');
})

it('should return true if array contains item or should return false otherwise', () => {
  const bigOldArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  expect(funcs.contains(bigOldArray, 'A')).toEqual(true);
  expect(funcs.contains(bigOldArray, 'a')).toEqual(false);
  expect(funcs.contains(bigOldArray, '0')).toEqual(false);
  expect(funcs.contains(bigOldArray, 'Q')).toEqual(true);
})

it('should add all numbers in an array and return the sum', () => {
  const array1 = [3,191,2058208];
  const array2 = [1,52,2085,2939];
  const array3 = [488,21,290];

  expect(funcs.addNumbers(array1)).toEqual(2058402);
  expect(funcs.addNumbers(array2)).toEqual(5077);
  expect(funcs.addNumbers(array3)).toEqual(799);
})

it('should return the average of the numbers in the array', () => {
  const testScores1 = [88, 79, 93];
  const testScores2 = [66, 91, 82, 100, 105];
  const testScores3 = [94, 91, 88, 88];

  expect(funcs.averageTestScore(testScores1)).toEqual((88+79+93)/3);
  expect(funcs.averageTestScore(testScores2)).toEqual((66+91+82+100+105)/5);
  expect(funcs.averageTestScore(testScores3)).toEqual((94+91+88+88)/4);
})

it('should return the integer of highest value in the array', () => {
  const array1 = [2, 3, 3000];
  const array2 = [300, 40, 159];
  const array3 = [100, 140, 1999];

  expect(funcs.largestNumber(array1)).toEqual(3000);
  expect(funcs.largestNumber(array2)).toEqual(300);
  expect(funcs.largestNumber(array3)).toEqual(1999);
})