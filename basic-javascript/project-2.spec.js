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
        // why isn't this one working?
        // hold on, let's try something else...
        expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
    })
    it('should add item to end of array', () => {
        // thought I figured it out, but no
        const arr = [1, 2];
        expect(funcs.addItemToArray(arr, 3)).toEqual([1, 2, 3]);
    })
    it('should add item to front of array', () => {
       expect(funcs.addItemToFront([1, 2], 3)).toEqual([3, 1, 2]);
    })
    // I can't understand why the two array methods above are not
    // working, even after I switched to using toEqual
    
})