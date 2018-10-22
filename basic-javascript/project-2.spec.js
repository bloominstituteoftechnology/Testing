const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('should take in a number x and a number y and return the larger of the two',()=>{
    expect(funcs.getBiggest(39,78)).toBe(78);
    expect(funcs.getBiggest(100,100)).toBe(100);
    expect(funcs.getBiggest(100,99)).toBe(100);
})
it('should return a greeting given a language string',()=>{
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting('Spanish')).toBe('Hola!');
    expect(funcs.greeting()).toBe('Hello!')
})
it('should return true given 5 or 10 else return false',()=>{
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive()).toBe(false);
})
it('should return true for a number between 20 and 50 else return false',()=>{
    expect(funcs.isInRange(50)).toBe(false);
    expect(funcs.isInRange(20)).toBe(false);
    expect(funcs.isInRange(30)).toBe(true);
})
it('should return true for an integer else return false',()=>{
    expect(funcs.isInteger(8.99)).toBe(false);
    expect(funcs.isInteger(9)).toBe(true);
    expect(funcs.isInteger(10)).toBe(true);
})
it('should return a string or the given num that is passed in depending on parameter met or unmet',()=>{
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    expect(funcs.fizzBuzz(5)).toBe('buzz');
    expect(funcs.fizzBuzz(3)).toBe('fizz');
    expect(funcs.fizzBuzz(1)).toBe(1);
})
it('should return a bool depending on whether or not a number is prime',()=>{
    expect(funcs.isPrime(-1)).toBe(false);
    expect(funcs.isPrime(1)).toBe(false);
    expect(funcs.isPrime(2)).toBe(true)
})
it('should return first item of an array',()=>{
    expect(funcs.returnFirst([1,2,3])).toBe(1);
    expect(funcs.returnFirst(['string',2])).toBe('string');
    expect(funcs.returnFirst(['word','dog',true])).toBe('word');
})
it('should return last item of an array',()=>{
    expect(funcs.returnLast([1,2,3])).toBe(3);
    expect(funcs.returnLast([])).toBe(undefined);
    expect(funcs.returnLast(['word',2,true])).toBe(true);
})
it('should return length of an array',()=>{
    expect(funcs.getArrayLength([1,2,3])).toBe(3);
    expect(funcs.getArrayLength([])).toBe(0);
    expect(funcs.getArrayLength([1,2])).toBe(2);
})
it('should increment each item of an array by 1',()=>{
    expect(funcs.incrementByOne([1,2,3])).toEqual([2,3,4]);
    expect(funcs.incrementByOne(['a',2,4])).toEqual([NaN,3,5]);
    expect(funcs.incrementByOne([3,5,7])).toEqual([4,6,8]);
})
it('should add an item to array at end',()=>{
    expect(funcs.addItemToArray([1,2,3],4)).toEqual([1,2,3,4]);
})
it('should add an item to front of array',()=>{
    expect(funcs.addItemToFront([1,2,3],4)).toEqual([4,1,2,3]);
})
it('should concatenate an array of words to a sentence',()=>{
    expect(funcs.wordsToSentence(['Hello','world!'])).toBe('Hello world!');
})
it('should return a bool on whether an array contains an item or not.',()=>{
    expect(funcs.contains([1,2,3],3)).toBe(true);
    expect(funcs.contains([1,2,3],4)).toBe(false);
})
it('should return the total of all of the numbers of an array added together',()=>{
    expect(funcs.addNumbers([1,2,3])).toBe(6);
    expect(funcs.addNumbers([2,5,8])).toBe(15);
})
it('should return the average of test scores given an array of test scores',()=>{
    expect(funcs.averageTestScore([22,88,99])).toBeCloseTo(69.67);
    expect(funcs.averageTestScore([80,90,100])).toBeCloseTo(90);
})
it('should return the largest number given an array of integers',()=>{
    expect(funcs.largestNumber([1,3,4])).toBe(4);
    expect(funcs.largestNumber([99,100,1000])).toBe(1000);
})