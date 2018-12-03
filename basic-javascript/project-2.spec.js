const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('testing project-2.js', () => {
    
    describe('getBiggest', () => {
        it('should return the biggest number', () => {
            const expected = 10;
            const actual = funcs.getBiggest(8, 10);
            expect(actual).toEqual(expected);
        })
    })

    describe('greeting', () => {
        it('should return a greeting in the specified language', () => {
            const expected = 'Hola!';
            const actual = funcs.greeting('Spanish');
            expect(actual).toEqual(expected);
        })
    })

    describe('isTenOrFive', () => {
        it('should verify if the number equals either 10 or 5', () => {
            const expected = true;
            const actual = funcs.isTenOrFive(5);
            expect(actual).toEqual(expected);
        })
    })

    describe('isInRange', () => {
        it('should verify if an input is between 20 and 50', () => {
            const expected = true;
            const actual = funcs.isInRange(30);
            expect(actual).toEqual(expected);
        })
    })

    describe('isInteger', () => {
        it('should verify that the input is an integer', () => {
            const expected = true;
            const actual = funcs.isInteger(4);
            expect(actual).toEqual(expected);
        })
    })

    describe('fizzBuzz', () => {
        it('should perform standard fizzbuzz operations', () => {
            const expected = 'fizzbuzz';
            const actual = funcs.fizzBuzz(15);
            expect(actual).toEqual(expected);
        })
    })

    describe('isPrime', () => {
        it('should verify that a number is a Prime number', () => {
            const expected = true;
            const actual = funcs.isPrime(7);
            expect(actual).toEqual(expected);
        })
    })

    describe('returnFirst', () => {
        it('should return the first item in an array', () => {
            const expected = 1;
            const actual = funcs.returnFirst([1,2,3,4,5]);
            expect(actual).toEqual(expected);
        })
    })

    describe('returnLast', () => {
        it('should return the last item in an array', () => {
            const expected = 5;
            const actual = funcs.returnLast([1,2,3,4,5]);
            expect(actual).toEqual(expected);
        })
    })

    describe('getArrayLength', () => {
        it('should return the length of an array', () => {
            const expected = 5;
            const actual = funcs.getArrayLength([1,4,2,5,3]);
            expect(actual).toEqual(expected);
        })
    })

    // describe('incrementByOne', () => {
    //     it('should return an array item incremented by one place each time', () => {
    //         const expected = [1, 2, 3, 4, 5];
    //         const actual = funcs.incrementByOne([1,2,3,4,5]);
    //         expect(actual).toEqual(expected);
    //     })
    // })

    describe('addItemToArray', () => {
        it('should add an item to the beginning of an array', () => {
            const expected = [1, 2, 3, 4, 5];
            const actual = funcs.addItemToFront([2, 3, 4, 5], 1);
            expect(actual).toEqual(expected);
        })
    })

    describe('addItemToFront', () => {
        it('should add an item to the beginning of the array', () => {
            const expected = [1, 2, 3, 4, 5];
            const actual = funcs.addItemToFront([2, 3, 4, 5], 1);
            expect(actual).toEqual(expected);
        })
    })

    describe('wordsToSentance', () => {
        it('should combine words into a sentance', () => {
            const expected = 'I eat ice cream';
            const actual = funcs.wordsToSentence(['I', 'eat', 'ice', 'cream']);
            expect(actual).toEqual(expected);
        })
    })

    describe('contains', () => {
        it('should tell us if the array contains the specified item', () => {
            const expected = true;
            const actual = funcs.contains(['I', 'eat', 'ice', 'cream'], 'eat');
            expect(actual).toEqual(expected);
        })
    })

    describe('addNumbers', () => {
        it('should add the numbers in an array', () => {
            const expected = 15;
            const actual = funcs.addNumbers([1,2,3,4,5]);
            expect(actual).toEqual(expected);
        })
    })

    describe('averageTestScore', () => {
        it('should return the average of an array', () => {
            const expected = 3;
            const actual = funcs.averageTestScore([1,2,3,4,5]);
            expect(actual).toEqual(expected);
        })
    })

    describe('largestNumber', () => {
        it('should return the largest number in an array', () => {
            const expected = 5;
            const actual = funcs.largestNumber([1,2,3,4,5]);
            expect(actual).toEqual(expected);
        })
    })
})