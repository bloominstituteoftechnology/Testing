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
describe('arrTest()', () => {
    it('should return the first', () => {
        expect(funcs.returnFirst([1, 3])).toEqual(1);
    })
})

//return last
    it('should return the last item in array', () => {
        expect(funcs.returnLast([1, 3])).toEqual(3);
    })    

//get array length
    it('should get length of array', () => {
        expect(funcs.getArrayLength([1, 3])).toEqual(2);
    })

//increment by one
    it('increment array items by 1', () => {
        expect(funcs.incrementByOne([1, 3])).toEqual([2, 4]);
    })

//add item to array
    it('should add item to end of array', () => {
        expect(funcs.addItemToArray([1, 3], 4)).toEqual([1, 3, 4]);
    })

//add item to front
    it('should add item to front', () => {
        expect(funcs.addItemToFront([1, 3], 2)).toEqual([2, 1, 3]);
    })


//words into a sentence
    it('should put words into a sentence', () => {
        expect(funcs.wordsToSentence(['hi', 'dude'])).toEqual('hi dude');
    })

//contains
    it('should count how many times item is part of array', () => {
        expect(funcs.contains([1, 1, 3], 1)).toBe(true);
    })

//add numbers
    it('should add numbers together', () => {
        expect(funcs.addNumbers([1, 3])).toEqual(4);
    })

//average test score
    it('should average the array numbers', () => {
        expect(funcs.averageTestScore([1, 3])).toEqual(2);
    })

//largest number
    it('should find the largest number', () => {
        expect(funcs.largestNumber([1, 3])).toEqual(3);
    })