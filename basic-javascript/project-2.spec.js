const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
//get biggest
describe('getBiggest()', () => {
    it('should get biggest', () => {
        const answer = 4;
        const expected = funcs.getBiggest(4, 2);
        expect(answer).toBe(expected);
    });
});

//greeting
describe('greeting()', () => {
    it('should get proper greeting', () => {
        const answer = 'Guten Tag!';
        const expected = funcs.greeting('German');
        expect(answer).toEqual(expected);
    });
});

//is ten or five
describe('isTenOrFive()', () => {
    it('should return true if 10 or 5', () => {
        const answer = true;
        const expected = funcs.isTenOrFive(5);
        expect(answer).toBe(expected);
    });
});

//is in range
describe('isInRange()', () => {
    it('should return true if in range', () => {
        const answer = true;
        const expected = funcs.isInRange(30);
        expect(answer).toBe(expected);
    });
});

//is integer
describe('isInteger()', () => {
    it('should return true if integer', () => {
        const answer = true;
        const expected = funcs.isInteger(3);
        expect(answer).toBe(expected);
    });
});

//fizzBuzz
describe('fizzBuzz()', () => {
    it('should return true if fizzbuzz', () => {
        const answer = 'fizzbuzz';
        const expected = funcs.fizzBuzz(15);
        expect(answer).toEqual(expected);
    });
});

//is prime 
describe('isPrime()', () => {
    it('should return true if prime', () => {
        const answer = false;
        const expected = funcs.isPrime(15);
        expect(answer).toEqual(expected);
    });
});

//return first
describe('returnFirst()', () => {
    it('should return the first', () => {
        const expected = 1;
        const actual = helpers.returnFirst([1, 3]);
        expect(actual).toEqual(expected);
    });
});
    
​​​​​//returnLast​​​​​
​​​​​describe('returnLast()', () => {​​​​​
​​​​​    it('should returnLast', () => {​​​​​
​​​​​        const expected = 3;​​​​​
​​​​​        const actual = helpers.returnLast([1, 3]);​​​​​
​​​​​        expect(actual).toEqual(expected);​​​​​
​​​​​    });​​​​​
​​​​​});​​​​​

​​​​​//getArrayLength​​​​​
​​​​​describe.only('getArrayLength()', () => {​​​​​
​​​​​    it('should getArrayLength', () => {​​​​​
​​​​​        const expected = 2;​​​​​
​​​​​        const actual = helpers.getArrayLength([1, 3]);​​​​​
​​​​​        expect(actual).toEqual(expected);​​​​​
​​​​​    });​​​​​
​​​​​});​​​​​

//incrementByOne​​​​​
​​​​​describe('incrementByOne()', () => {​​​​​
​​​​​    it('should incrementByOne', () => {​​​​​
​​​​​        const expected = [2, 4];​​​​​
​​​​​        const actual = helpers.incrementByOne([1, 3]);​​​​​
​​​​​        expect(actual).toEqual(expected);​​​​​
​​​​​    });​​​​​
​​​​​});​​​​​

​​​​​//addItemToArray​​​​​
​​​​​describe('addItemToArray()', () => {​​​​​
​​​​​    it('should addItemToArray', () => {​​​​​
​​​​​        const expected = [1, 3, 4];​​​​​
​​​​​        const actual = helpers.addItemToArray([1, 3], 4);​​​​​
​​​​​        expect(actual).toEqual(expected);​​​​​
​​​​​    });​​​​​
​​​​​});​​​​​


​​​​​//addItemToFront​​​​​
​​​​​describe('addItemToFront()', () => {​​​​​
​​​​​    it('should addItemToFront', () => {​​​​​
​​​​​        const expected = [2, 1, 3];​​​​​
​​​​​        const actual = helpers.addItemToFront([1, 3], 2);​​​​​
​​​​​        expect(actual).toEqual(expected);​​​​​
​​​​​    });​​​​​
​​​​​});​​​​​

​​​​​//wordsToSentence​​​​​
​​​​​describe('wordsToSentence()', () => {​​​​​
​​​​​    it('should wordsToSentence', () => {​​​​​
​​​​​        const expected = 'hidude';​
​​​​​        const actual = helpers.wordsToSentence(['hi', 'dude']);​​​​​
​​​​​        expect(actual).toEqual(expected);​​​​​
​​​​​    });​​​​​
​​​​​});​​​​​

​​​​​//contains​​​​​
​​​​​describe('contains()', () => {​​​​​
​​​​​    it('should contains', () => {​​​​​
​​​​​        const expected = 2;​​
​​​​​        const actual = helpers.contains([1, 1, 3], 1);​​​​​
​​​​​        expect(actual).toEqual(expected);​​​​​
​​​​​    });​​​​​
​​​​​});​​​​​

​​​​​//addNumbers​​​​​
​​​​​describe('addNumbers()', () => {​​​​​
​​​​​    it('should addNumbers', () => {​​​​​
​​​​​        const expected = 4;​​​​​
​​​​​        const actual = helpers.addNumbers([1, 3]);​​​​​
​​​​​        expect(actual).toEqual(expected);​​​​​
​​​​​    });​​​​​
​​​​​});​​​​​

//averageTestScore​​​​​
​​​​​describe('averageTestScore()', () => {​​​​​
​​​​​    it('should averageTestScore', () => {​​​​​
​​​​​        const expected = 2;​​​​​
​​​​​        const actual = helpers.averageTestScore([1, 3]);​​​​​
​​​​​        expect(actual).toEqual(expected);​​​​​
​​​​​    });​​​​​
​​​​​});​​​​​

    ​​​​​//largestNumber​​​​​
​​​​​describe('largestNumber()', () => {​​​​​
​​​​​    it('should largestNumber', () => {​​​​​
​​​​​        const expected = 2;​​​​​
​​​​​        const actual = helpers.largestNumber([1, 3]);​​​​​
​​​​​        expect(actual).toEqual(expected);​​​​​
​​​​​    });​​​​​
​​​​​});​​​​​