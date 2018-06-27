const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('tests functions in project-2.js', () => {
    it('should get the biggest number', () => {
        expect(funcs.getBiggest(10, 100)).toBe(100);
    })
    it('should greet in correct language', () => {
        expect(funcs.greeting("Spanish")).toBe("Hola!");
    })
    it('should return true if number is 5 or 10', () => {
        expect(funcs.isTenOrFive(10)).toBe(true);
    })
    it('determine if number is within range', () => {
        expect(funcs.isInRange(100)).toBe(false);
    })
    it('should determine if input is integer', () => {
        expect(funcs.isInteger('fish')).toBe(false);
    })
    it('should do the fizzbuzz thing', () => {
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    })
    it('should determine if number is prime', () => {
        expect(funcs.isPrime(17)).toBe(true);
    })
    it('should return first item in array', () => {
        expect(funcs.returnFirst([1, 2, 3, 4])).toBe(1);
    })
    it('should return last item in array', () => {
        expect(funcs.returnLast([1, 2, 3, 4])).toBe(4);
    })
    it('should return array length', () => {
        expect(funcs.getArrayLength([1, 2, 3, 4])).toBe(4);
    })
    it('should increment all numbers in array by one', () => {
        // so apparently this one is working...
        // okay now I'm not so sure any of these are working...
        const arr = [1, 2, 3, 4];
        expect(funcs.incrementByOne(arr)).toEqual([2, 3, 4, 5]);
    })
    it('should add item to end of array', () => {
        // thought I figured it out, but no
        // still working on this one too
        // which means the same logic should also apply here...
        const arr = [1, 2, 3, 4];
        expect(funcs.addItemToArray(arr, 5)).toEqual([1, 2, 3, 4, 5]);
    })
    it('should add item to front of array', () => {
       // well I need to figure this one out
    })
    // I can't understand why the two array methods above are not
    // working, even after I switched to using toEqual
    it('should convert an array to a string', () => {
        expect(funcs.wordsToSentence(['it', 'is'])).toEqual('it is');
    })
    it('should determine if array contains item', () => {
        const arr = [1];
        const item = 1;
        expect(funcs.contains(arr, item)).toEqual(true);
    })
    it('should return sum of numbers in array', () => {
        const arr = [1, 2, 3, 4];
        expect(funcs.addNumbers(arr)).toEqual(10);
    })
    it('should return average test scores', () => {
        const testScores = [88, 99, 30, 100, 100, 30, 100, 100];
        expect(funcs.averageTestScore(testScores)).toEqual(80.875);
    })
    it('should return largest number in array', () => {
        const array = [1, 2, 3, 4];
        expect(funcs.largestNumber(array)).toEqual(4);
    })
})