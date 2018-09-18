const funcs = require('../project-2');

it('should return the biggest number', () => {
    expect(funcs.getBiggest(-30, -31)).toBe(-30);
});

it('should return a greeting in german, spanish or english', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting('german')).toBe('Guten Tag!');
});

it('should return true if num = 10 or 5', () => {
    expect(funcs.isTenOrFive(10)).toBe(true);
});

it('should return true if num is between 60 and 20', () => {
    expect(funcs.isInRange(10)).toBe(false);
});

it('should return an integer', () => {
    expect(funcs.isInteger(10)).toBe(true);
});

it('should return fizzbuzz if %5 and %3 === 0', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
});

it('should return fizzbuzz if %5 and %3 === 0', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
});

it('should return true if num is prime', () => {
    expect(funcs.isPrime(7)).toBe(true);
});

it('should return First element of the array', () => {
    expect(funcs.returnFirst([1,2,3,4,5,6])).toBe(1);
});

it('should return the last element of the array', () => {
    expect(funcs.returnLast([1,2,3,4,5,6])).toBe(6);
});

it('should return the length of the array', () => {
    expect(funcs.getArrayLength([1,2,3,4,5,6])).toBe(6);
});

it('should increment all the items in an array by 1', () => {
    //changed toBe method to toEqual for Deep equality
    expect(funcs.incrementByOne([1,2,3,4,5,6])).toEqual([2,3,4,5,6,7]);
});

it('should add an item to the end of the array', () => {
    //changed toBe method to toEqual for Deep equality
    expect(funcs.addItemToArray([1,2,3,4,5,6], 'fernando')).toEqual([1,2,3,4,5,6,'fernando']);
});

it('should add an item to the beginning of the array', () => {
    expect(funcs.addItemToFront([1,2,3,4,5,6], 'fernando')).toEqual(['fernando',1,2,3,4,5,6]);
});

it('should return a sentence with the words provided in an array', () => {
    expect(funcs.wordsToSentence(['fernando', 'is', 'finishing', 'MVP'])).toBe('fernando is finishing MVP');
});

it('should return true if the item passed in is in the array', () => {
    expect(funcs.contains([1,2,3,4,5,6], 7)).toBe(false);
});

it('should return the sum of all the numbers in the array', () => {
    expect(funcs.addNumbers([1,2,3,4,5,6])).toBe(21);
});

it('should return the average score of all the scores in the array', () => {
    expect(funcs.averageTestScore([90,95,100,95,90])).toBe(94);
});

it('should return the biggest integer in the array', () => {
    expect(funcs.largestNumber([903,950,100,105,90])).toBe(950);
});



