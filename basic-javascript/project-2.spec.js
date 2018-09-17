const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('should get the bigger number from the two provided numbers', () => {
    expect(funcs.getBiggest(4,2)).toBe(4);
    expect(funcs.getBiggest(2,2)).toBe(2);
    expect(funcs.getBiggest(1,5)).toBe(5);
});

it('should greet someone', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting('Japanese')).toBe('Hello!');
});

it('should check if provided number is 5 or 10', () => {
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(11)).toBe(false);
});

it('should check if provided number is between 20 and 50', () => {
    expect(funcs.isInRange(30)).toBe(true);
    expect(funcs.isInRange(50)).toBe(false);
});

it('should check if provided number is an integer', () => {
    expect(funcs.isInteger(30)).toBe(true);
    expect(funcs.isInteger(5.5)).toBe(false);
});

it('should check if provided number is can be divided by 3 and/or 5', () => {
    expect(funcs.fizzBuzz(30)).toBe('fizzbuzz');
    expect(funcs.fizzBuzz(5)).toBe('buzz');
    expect(funcs.fizzBuzz(9)).toBe('fizz');
    expect(funcs.fizzBuzz(7)).toBe(7);
});

it('should check if provided number is a prime number', () => {
    expect(funcs.isPrime(-2)).toBe(false);
    expect(funcs.isPrime(1)).toBe(false);
    expect(funcs.isPrime(9)).toBe(false);
    expect(funcs.isPrime(7)).toBe(true);
});

it('should return first element in array', () => {
    expect(funcs.returnFirst([0,1,2])).toBe(0);
    expect(funcs.returnFirst(['a','b','c'])).toBe('a');
});

it('should return last element in array', () => {
    expect(funcs.returnLast([0,1,2])).toBe(2);
    expect(funcs.returnLast(['a','b','c'])).toBe('c');
});

it('should get array\'s length', () => {
    expect(funcs.getArrayLength([0,1,2])).toBe(3);
    expect(funcs.getArrayLength(['a','b','c', 'd', 'e'])).toBe(5);
});

it('should increment each element in array by 1', () => {
    expect(funcs.incrementByOne([0,1,2])).toEqual([1,2,3]);
});

it('should add new item to array', () => {
    expect(funcs.addItemToArray([0,1,2], 3)).toEqual([0,1,2,3]);
    expect(funcs.addItemToArray(['a','b','c', 'd', 'e'], 3)).toEqual(['a','b','c', 'd', 'e', 3]);
});

it('should add new item to the front of the  array', () => {
    expect(funcs.addItemToFront([0,1,2], 3)).toEqual([3,0,1,2]);
    expect(funcs.addItemToFront(['a','b','c', 'd', 'e'], 'f')).toEqual(['f','a','b','c', 'd', 'e']);
});

it('should create a sentence with the array of words provided', () => {
    expect(funcs.wordsToSentence(['I', 'ate', 'lunch'])).toBe('I ate lunch');
});

it('should check if specified item is in the array', () => {
    expect(funcs.contains([1,2,2,2,2,2,3,4], 2)).toBe(true);
    expect(funcs.contains([1,2,2,2,2,2,3,4], 0)).toBe(false);
});

it('should add the numbers up in the array', () => {
    expect(funcs.addNumbers([1,2,3,4])).toBe(10);
});

it('should average an array of test scores', () => {
    expect(funcs.averageTestScore([60, 80, 100])).toBe(80);
});

it('should return the largest number in the array', () => {
    expect(funcs.largestNumber([60, 80, 100])).toBe(100);
});