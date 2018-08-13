const funcs = require('./project-2');

it('should return the biggest of the 2 values passed, if equal return one of the values', () => {
    expect(funcs.getBiggest(2, 5)).toEqual(5);
    expect(funcs.getBiggest(10, 10)).toEqual(10);
    expect(funcs.getBiggest(500, 5)).toEqual(500);
})

describe('Return Greeting depending on value passed in', () => {
    it(`should return 'Guten Tag!`, () => {
        expect(funcs.greeting('German')).toEqual('Guten Tag!');
    })

    it('should return Hola!', () => {
        expect(funcs.greeting('Spanish')).toEqual('Hola!');
    })

    it('should return Hello!', () => {
        expect(funcs.greeting('Random Language!')).toEqual('Hello!');
    })
});

it('should return true if number passed is 10 or 5, otherwise return false', () => {
    expect(funcs.isTenOrFive(5)).toEqual(true);
    expect(funcs.isTenOrFive(10)).toEqual(true);
    expect(funcs.isTenOrFive(55)).toEqual(false);
})

it('should return true if number passed is less than 50 but greater than 20, otherwise return false', () => {
    expect(funcs.isInRange(50)).toEqual(false);
    expect(funcs.isInRange(20)).toEqual(false);
    expect(funcs.isInRange(49)).toEqual(true);
})

it('should return true if number passed is an integer, otherwise return false', () => {
    expect(funcs.isInteger(5.5)).toEqual(false);
    expect(funcs.isInteger('Hey')).toEqual(false);
    expect(funcs.isInteger(6)).toEqual(true);
})

describe('Return fizz / buzz / fizzbuzz depending on value passed in', () => {
    it('should return fizz', () => {
        expect(funcs.fizzBuzz(3)).toEqual('fizz');
    })
    it('should return buzz', () => {
        expect(funcs.fizzBuzz(5)).toEqual('buzz');
    })
    it('should return fizzbuzz', () => {
        expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
    })
})

it('should return true if number passed is prime, otherwise return false', () => {
    expect(funcs.isPrime(2)).toEqual(true);
    expect(funcs.isPrime(18)).toEqual(false);
    expect(funcs.isPrime(101)).toEqual(true);
})

it('should return the first value of the array passed in', () => {
    expect(funcs.returnFirst([5, 2, 3, 2])).toEqual(5);
    expect(funcs.returnFirst([2])).toEqual(2);
    expect(funcs.returnFirst(['Hey', 213213, 2342343, 36562])).toEqual('Hey');
})

it('should return the last value of the array passed in', () => {
    expect(funcs.returnLast([5, 2, 3, 2])).toEqual(2);
    expect(funcs.returnLast([2])).toEqual(2);
    expect(funcs.returnLast(['Hey', 213213, 2342343, 36562])).toEqual(36562);
})

it('should return the length of the array passed in', () => {
    expect(funcs.getArrayLength([2, 3, 3, 4])).toEqual(4)
    expect(funcs.getArrayLength([1])).toEqual(1)
    expect(funcs.getArrayLength([2, 54, 4, 'Hey', 23])).toEqual(5)
})

it('should increment every item in the array passed in by 1', () => {
    expect(funcs.incrementByOne([5, 4, 3])).toEqual([6, 5, 4]);
    expect(funcs.incrementByOne([10001, 34, 3])).toEqual([10002, 35, 4]);
    expect(funcs.incrementByOne([1, 1, 1])).toEqual([2, 2, 2]);
})

it('should add an item to the array passed in with the value passed in', () => {
    expect(funcs.addItemToArray([4, 3, 2], 'Hey')).toEqual([4, 3, 2, 'Hey']);
    expect(funcs.addItemToArray([1, 1, 1], 1)).toEqual([1, 1, 1, 1]);
    expect(funcs.addItemToArray([10, 100, 200], 'Test')).toEqual([10, 100, 200, 'Test']);
})

it('should add an item to the front of the array passed in with the value passed in', () => {
    expect(funcs.addItemToFront([4, 3], 'Hi')).toEqual(['Hi', 4, 3]);
    expect(funcs.addItemToFront([100, 25, 33], 5)).toEqual([5, 100, 25, 33]);
    expect(funcs.addItemToFront([2000000], 1)).toEqual([1, 2000000]);
})

it('should return each letter with a space inbetween them with the string passed in', () => {
    expect(funcs.wordsToSentence('Sentence')).toEqual('S e n t e n c e')
    expect(funcs.wordsToSentence('Holy')).toEqual('H o l y')
    expect(funcs.wordsToSentence('RandomWord')).toEqual('R a n d o m W o r d')
})

it('should return true if value provided is in the array provided, otherwise return false', () => {
    expect(funcs.contains([3, 3, 3, 5], 5)).toEqual(true);
    expect(funcs.contains([1, 2, 3, 'Hey'], 'Hey')).toEqual(true);
    expect(funcs.contains([3, 3, 3, 5], 6)).toEqual(false);
})

it('should return the sum of all the numbers in the array passed in', () => {
    expect(funcs.addNumbers([5, 5])).toEqual(10);
    expect(funcs.addNumbers([5, 5, 10, 25])).toEqual(45);
    expect(funcs.addNumbers([25, 2])).toEqual(27);
})

it('should return the average test score of all the numbers in the array passed in', () => {
    expect(funcs.averageTestScore([5, 10, 25, 10])).toEqual(12.5);
    expect(funcs.averageTestScore([25.5, 2, 1, 0])).toEqual(7.125);
    expect(funcs.averageTestScore([20, 0, 0, 0])).toEqual(5);
})

it('should return the largest number of all the numbers in the array passed in', () => {
    expect(funcs.largestNumber([5, 20, 1000])).toEqual(1000);
    expect(funcs.largestNumber([500012, 34234234, 234234234.45])).toEqual(234234234.45);
    expect(funcs.largestNumber([234234, 2342, 1, 1])).toEqual(234234);
})