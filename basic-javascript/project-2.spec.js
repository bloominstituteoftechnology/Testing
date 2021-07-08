const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('should return the largest number or either number if they are equal', () => {
    expect(funcs.getBiggest(2, 8)).toBe(8);
    expect(funcs.getBiggest(-3, 1)).toBe(1);
    expect(funcs.getBiggest(5, 5)).toBe(5);
});

it('should return a greeting in the language specified', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting('Spanish')).toBe('Hola!');
    expect(funcs.greeting('')).toBe('Hello!');
});

it('should return true if num provided is 5 or 10', () => {
    expect(funcs.isTenOrFive(5)).toBeTruthy();
    expect(funcs.isTenOrFive(10)).toBeTruthy();
    expect(funcs.isTenOrFive(9)).toBeFalsy();
});

it('should return true if num is between 20 and 50', () => {
    expect(funcs.isInRange(5)).toBeFalsy();
    expect(funcs.isInRange(20)).toBeFalsy();
    expect(funcs.isInRange(33)).toBeTruthy();
});

it('should return true if a num is an integer', () => {
    expect(funcs.isInteger(5.5)).toBeFalsy();
    expect(funcs.isInteger(20.9)).toBeFalsy();
    expect(funcs.isInteger(33)).toBeTruthy();
});

it('should return fizzbuzz if number is divisble by 3 and 5, fizz if only divisible by 3 and buzz if only divisible by 5. if none of these just return the num.', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    expect(funcs.fizzBuzz(5)).toBe('buzz');
    expect(funcs.fizzBuzz(3)).toBe('fizz');
    expect(funcs.fizzBuzz(11)).toBe(11);
});

it('should return true if a number is prime', () => {
    expect(funcs.isPrime(9)).toBeFalsy();
    expect(funcs.isPrime(8)).toBeFalsy();
    expect(funcs.isPrime(17)).toBeTruthy();
});

it('should return the first item in an array', () => {
    expect(funcs.returnFirst([1,3,5,7,9])).toBe(1);
    expect(funcs.returnFirst(['Spanish', 'german', 'french'])).toBe('Spanish');
    expect(funcs.returnFirst([''])).toBe('');
});

it('should return the last item in an array', () => {
    expect(funcs.returnLast([1,3,5,7,9])).toBe(9);
    expect(funcs.returnLast(['Spanish', 'german', 'french'])).toBe('french');
    expect(funcs.returnLast([''])).toBe('');
});

it('should return the length of an array', () => {
    expect(funcs.getArrayLength([1,3,5,7,9])).toBe(5);
    expect(funcs.getArrayLength(['Spanish', 'german', 'french'])).toBe(3);
    expect(funcs.getArrayLength([''])).toBe(1);
});

it('should return an array with each item incremented by 1', () => {
    expect(funcs.incrementByOne([1,3,5,7,9])).toEqual([2,4,6,8,10]);
    expect(funcs.incrementByOne([-1])).toEqual([0]);
});

it('should return the array with an item added to the end', () => {
    expect(funcs.addItemToArray([1,3,5,7,9], 2)).toEqual([1,3,5,7,9,2]);
    expect(funcs.addItemToArray(['Spanish', 'german', 'french'], 'mandarin')).toEqual(['Spanish', 'german', 'french', 'mandarin']);
});

it('should return the array with an item added to the beginning', () => {
    expect(funcs.addItemToFront([1,3,5,7,9], 'bat')).toEqual(['bat',1,3,5,7,9]);
    expect(funcs.addItemToFront(['Spanish', 'german', 'french'], 8)).toEqual([8,'Spanish', 'german', 'french']);
});

it('should return a sentence out of an array of strings', () => {
    expect(funcs.wordsToSentence(['I','am','batman'])).toEqual('I am batman');
    expect(funcs.wordsToSentence(['Spanish', 'german', 'french'])).toEqual('Spanish german french');
});

it('checks if an array contains a specified item', () => {
    expect(funcs.contains([1,3,5,7,9], 5)).toBeTruthy();
    expect(funcs.contains(['Spanish', 'german', 'french'], 'french')).toBeTruthy();
    expect(funcs.contains([1,3,5,7,9], 2)).toBeFalsy();
});

it('should return the sum of an array of numbers', () => {
    expect(funcs.addNumbers([2,3,5,7,9])).toBe(26);
    expect(funcs.addNumbers([-8,9,0,2])).toBe(3);
})

it('should return the average of an array of test scores', () => {
    expect(funcs.averageTestScore([77,88,95,90])).toBe(87.5);
});

it('should return the largest number in an array', () => {
    expect(funcs.largestNumber([2,3,5,7,9])).toBe(9);
    expect(funcs.largestNumber([-8,9,0,2])).toBe(9);
});
