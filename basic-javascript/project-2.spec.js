const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2.js', () => {

describe('getBiggest()', () => {
    it('should get biggest', () => {
        const answer = 10;
        const expected = funcs.getBiggest(10, 2);
        expect(answer).toBe(expected);
    });
}); // getBiggest

describe('greeting()', () => {
    it('should get proper greeting', () => {
        const answer = 'Hola!';
        const expected = funcs.greeting('Spanish');
        expect(answer).toEqual(expected);
    });
}); //greeting

describe('isTenOrFive()', () => {
    it('should return true if 10 or 5', () => {
        const answer = true;
        const expected = funcs.isTenOrFive(5);
        expect(answer).toBe(expected);
    });
}); //isTenOrFive

describe('isInRange()', () => {
    it('should return true if in range', () => {
        const answer = true;
        const expected = funcs.isInRange(34);
        expect(answer).toBe(expected);
    });
}); //isInRange

describe('isInteger()', () => {
    it('should return true if integer', () => {
        const answer = true;
        const expected = funcs.isInteger(98);
        expect(answer).toBe(expected);
    });
}); //'isInteger

describe('fizzBuzz()', () => {
    it('should return true if fizzbuzz', () => {
        const answer = 'fizzbuzz';
        const expected = funcs.fizzBuzz(15);
        expect(answer).toEqual(expected);
    });
}); //fizzBuzz

describe('isPrime()', () => {
    it('should return true if prime', () => {
        const answer = false;
        const expected = funcs.isPrime(91);
        expect(answer).toEqual(expected);
    });
}); //isPrime

describe('arrTest()', () => {
    it('should return the first', () => {
        expect(funcs.returnFirst([3, 4])).toEqual(3);
    })
}) //arrtest - return first

    it('should return the last item in array', () => {
        expect(funcs.returnLast([3, 4])).toEqual(4);
    })     // return last

    it('should get length of array', () => {
        expect(funcs.getArrayLength([3, 4])).toEqual(2);
    }) // array length

    it('increment array items by 1', () => {
        expect(funcs.incrementByOne([3, 4])).toEqual([4, 5]);
    }) // ++

    it('should add item to end of array', () => {
        expect(funcs.addItemToArray([3, 4], 5)).toEqual([3, 4, 5]);
    }) // add item to array

    it('should add item to front', () => {
        expect(funcs.addItemToFront([3, 4], 5)).toEqual([5, 3, 4]);
    }) //add item to the front

    it('should put words into a sentence', () => {
        expect(funcs.wordsToSentence(['di', 'umano'])).toEqual('di umano');
    })

    it('should count how many times item is part of array', () => {
        expect(funcs.contains([1, 1, 3], 1)).toBe(true);
    })

    it('should add numbers together', () => {
        expect(funcs.addNumbers([3, 3])).toEqual(6);
    })

    it('should average the array numbers', () => {
        expect(funcs.averageTestScore([1, 3])).toEqual(2);
    })

    it('should find the largest number', () => {
        expect(funcs.largestNumber([2000, 300])).toEqual(2000);
    })
}) // project-2.js
