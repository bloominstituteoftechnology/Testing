const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('should return the bigger of two values', () => {
    expect(funcs.getBiggest(3, 4)).toBe(4);
    expect(funcs.getBiggest(3, 3)).toBe(3);
    expect(funcs.getBiggest(5, 2)).toBe(5);
    expect(funcs.getBiggest('hello', 1)).toBe(null);
});

it('should greet you in the specified language', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting('Spanish')).toBe('Hola!');
    expect(funcs.greeting('English')).toBe('Hello!');
});

it('should return whether the value is ten or five', () => {
    expect(funcs.isTenOrFive(10)).toBe(true);
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(undefined)).toBe(false);
});

it('should return whether the number is greater than 20 and less than 50', () => {
    expect(funcs.isInRange(37)).toBe(true);
    expect(funcs.isInRange(51)).toBe(false);
    expect(funcs.isInRange(NaN)).toBe(false);
});

it('should return whether the value is an integer', () => {
    expect(funcs.isInteger(5)).toBe(true);
    expect(funcs.isInteger(5.81)).toBe(false);
    expect(funcs.isInteger(9.1)).toBe(false);
});

it('should return \'fizzbuzz\' if divisible by 3 and 5, \'buzz\' if only divisible by 5, \'fizz\' if only divisible by 3, or the value if not either', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    expect(funcs.fizzBuzz(50)).toBe('buzz');
    expect(funcs.fizzBuzz(2)).toBe(2);
});

it('should return whether a value is a prime', () => {
    expect(funcs.isPrime(5)).toBe(true);
    expect(funcs.isPrime(15)).toBe(false);
    expect(funcs.isPrime(61)).toBe(true);
});

it('should return first item in array', () => {
    expect(funcs.returnFirst([1, 2, 3, 4, 5])).toBe(1);
    expect(funcs.returnFirst(['apple', 'pear', 'banana', 'orange'])).toBe('apple');
    expect(funcs.returnFirst([null, 8, 4, 3, 99])).toBe(null);
});

it('should return the last item in the array', () => {
    expect(funcs.returnLast([1, 2, 3, 4, 5])).toBe(5);
    expect(funcs.returnLast(['apple', 'pear', 'banana', 'orange'])).toBe('orange');
    expect(funcs.returnLast([null, 8, 4, 3, 99])).toBe(99);
});

it('should return the length of the array', () => {
    expect(funcs.getArrayLength([1, 2, 3, 4, 5])).toBe(5);
    expect(funcs.getArrayLength(['apple', 'pear', 'banana', 'orange'])).toBe(4);
    expect(funcs.getArrayLength([null, 8, 4, 3, 99])).toBe(5);
});

it('should increment every value in the array by 1', () => {
    expect(funcs.incrementByOne([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5, 6]);
    expect(funcs.incrementByOne([100, 200, 300, 400, 500])).toEqual([101, 201, 301, 401, 501]);
    expect(funcs.incrementByOne([null, 8, 4, 3, 99])).toEqual([1, 9, 5, 4, 100]);
});

it('should return the array with the item added at the end', () => {
    expect(funcs.addItemToArray([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 4, 5, 6]);
    expect(funcs.addItemToArray(['apple', 'pear', 'banana', 'orange'], 'kiwi')).toEqual(['apple', 'pear', 'banana', 'orange', 'kiwi']);
    expect(funcs.addItemToArray([null, 8, 4, 3, 99], null)).toEqual([null, 8, 4, 3, 99, null]);
});

it('should return the array with the item added at the front', () => {
    expect(funcs.addItemToFront([1, 2, 3, 4, 5], 6)).toEqual([6, 1, 2, 3, 4, 5]);
    expect(funcs.addItemToFront(['apple', 'pear', 'banana', 'orange'], 'kiwi')).toEqual(['kiwi', 'apple', 'pear', 'banana', 'orange']);
    expect(funcs.addItemToFront([null, 8, 4, 3, 99], null)).toEqual([null, null, 8, 4, 3, 99]);
});

it('should make a sentence out of separate words', () => {
    expect(funcs.wordsToSentence(['Hello,', 'world!'])).toBe('Hello, world!');
    expect(funcs.wordsToSentence(['My', 'name', 'is', 'Grant.'])).toBe('My name is Grant.');
    expect(funcs.wordsToSentence(['Testing,', 'testing,', 'funky', 'function!'])).toBe('Testing, testing, funky function!');
});

it('should return whether the array contains the item', () => {
    expect(funcs.contains([1, 2, 3, 4, 5], 6)).toBe(false);
    expect(funcs.contains(['apple', 'pear', 'banana', 'orange'], 'apple')).toBe(true);
    expect(funcs.contains([null, 8, 4, 3, 99], null)).toBe(true);
});

it('should return the sum of all the numbers in the array', () => {
    expect(funcs.addNumbers([1, 2, 3, 4, 5])).toBe(15);
    expect(funcs.addNumbers([10, 20, 30, 40, 50])).toBe(150);
    expect(funcs.addNumbers([111, 222, 333, 444, 555])).toBe(1665);
});

it('should return the mean average of the scores in the array', () => {
    expect(funcs.averageTestScore([1, 2, 3, 4, 5])).toBe(3);
    expect(funcs.averageTestScore([10, 20, 30, 40, 50])).toBe(30);
    expect(funcs.averageTestScore([111, 222, 333, 444, 555])).toBe(333);
});

it('should return the largest value in the array', () => {
    expect(funcs.largestNumber([1, 2, 3, 4, 5])).toBe(5);
    expect(funcs.largestNumber([10, 20, 30, 40, 50])).toBe(50);
    expect(funcs.largestNumber([111, 222, 333, 444, 555])).toBe(555);
    expect(funcs.largestNumber([1, 2, 3, 'bob'])).toBe(null);
})