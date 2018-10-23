const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2.js', () => {

    describe('getBiggest()', () => {

        it('should return the largest of two entered values', () => {
            const expected = 20;

            const actual = funcs.getBiggest(10, 20);

            expect(actual).toEqual(expected);
        })
        
    })

    describe('greeting()', () => {

        it('should return "Guten Tag!" if case is German', () => {
            const expected = 'Guten Tag!';

            const actual = funcs.greeting('German');

            expect(actual).toEqual(expected);
        })
        it('should return "Hola!" if case is Spanish', () => {
            const expected = 'Hola!';

            const actual = funcs.greeting('Spanish');

            expect(actual).toEqual(expected);
        })
    })

    describe('isTenOrFive()', () => {

        it('should return true if value is equal to 10', () => {
            const expected = true;

            const actual = funcs.isTenOrFive(10);

            expect(actual).toEqual(expected);
        })
        it('should return true if value is equal to 5', () => {
            const expected = true;

            const actual = funcs.isTenOrFive(5);

            expect(actual).toEqual(expected);
        })
    })

    describe('isInRange()', () => {

        it('should return true if number is greater than 20 and less than 50', () => {
            const expected = true;

            const actual = funcs.isInRange(35);

            expect(actual).toEqual(expected);
        })
        it('should return false if number is less than 20', () => {
            const expected = false;

            const actual = funcs.isInRange(15);

            expect(actual).toEqual(expected);
        })
        it('should return false if number is greater than 50', () => {
            const expected = false;

            const actual = funcs.isInRange(55);

            expect(actual).toEqual(expected);
        })
    })

    describe('isInteger()', () => {

        it('should return true if number is an integer', () => {
            const expected = true;

            const actual = funcs.isInteger(11);

            expect(actual).toEqual(expected);
        })
        it('should return false if number is not an integer', () => {
            const expected = false;

            const actual = funcs.isInteger(9.25);

            expect(actual).toEqual(expected);
        })
    })

    describe('fizzBuzz()', () => {

        it('should return "fizzbuzz" if number is divisible by both 3 and 5', () => {
            const expected = 'fizzbuzz';

            const actual = funcs.fizzBuzz(15);

            expect(actual).toEqual(expected);
        })
        it('should return "fizz" if number is divisible by 3', () => {
            const expected = 'fizz';

            const actual = funcs.fizzBuzz(9);

            expect(actual).toEqual(expected);
        })
        it('should return "buzz" if number is divisible by 5', () => {
            const expected = 'buzz';

            const actual = funcs.fizzBuzz(10);

            expect(actual).toEqual(expected);
        })
    })

    describe('isPrime()', () => {

        it('should return true if number is prime', () => {
            const expected = true;

            const actual = funcs.isPrime(13);

            expect(actual).toEqual(expected);
        })
        it('should return false if number is not prime', () => {
            const expected = false;

            const actual = funcs.isPrime(9);

            expect(actual).toEqual(expected);
        })
    })

    const testArray = [
        'testing',
        '1',
        '2',
        '3',
    ];

    const incArray = [
        1,
        2,
        3,
    ]

    const incArrayAfter = [
        2,
        3,
        4,
    ];

    describe('returnFirst()', () => {

        it('should return the first element of an array', () => {
            const expected = 'testing';
            const actual = funcs.returnFirst(testArray);
            expect(actual).toEqual(expected);
        })
    })

    describe('returnLast()', () => {

        it('should return the last element of an array', () => {
            const expected = '3';
            const actual = funcs.returnLast(testArray);
            expect(actual).toEqual(expected);
        })
    })

    describe('getArrayLength()', () => {

        it('should return the length of an array', () => {
            const expected = 4;
            const actual = funcs.getArrayLength(testArray);
            expect(actual).toEqual(expected);
        })
    })

    describe('incrementByOne()', () => {

        it('should return an array with each value increased by 1', () => {
            const expected = incArrayAfter;
            const actual = funcs.incrementByOne(incArray);
            expect(actual).toEqual(expected);
        })
    })

    describe('addItemToArray()', () => {

        it('should return an array with specified item added to it', () => {
            const expected = testArray;
            const actual = funcs.addItemToArray(['testing', '1', '2'], '3');
            expect(actual).toEqual(expected);
        })
    })

    describe('addItemToFront()', () => {

        it('should return an array with specified item added to the front', () => {
            const expected = testArray;
            const actual = funcs.addItemToFront(['1', '2', '3'], 'testing');
            expect(actual).toEqual(expected);
        })
    })

    describe('wordsToSentence()', () => {

        it('should return a string from a words array', () => {
            const expected = "testing 1 2 3";
            const actual = funcs.wordsToSentence(testArray);
            expect(actual).toEqual(expected);
        })
    })

    describe('contains()', () => {

        it('should return true if an array contains at least one of the specifed item', () => {
            const expected = true;
            const actual = funcs.contains(testArray, 'testing');
            expect(actual).toEqual(expected);
        })
    })

    describe('averageTestScore()', () => {

        it('should return the average of all entered scores', () => {
            const expected = 100;
            const actual = funcs.averageTestScore([90, 100, 110]);
            expect(actual).toEqual(expected);
        })
    })

    describe('largestNumber()', () => {

        it('should return the largest number in the array', () => {
            const expected = 110;
            const actual = funcs.largestNumber([90, 100, 110]);
            expect(actual).toEqual(expected);
        })
    })
    describe('async tests', () => {
        it('using a callback', done => {
            setTimeout(() => {
                done();
            }, 2000);
        });
        it('using promises', () => {
            return new Promise(resolve => {
                setTimeout(resolve, 250)
            })
        })
        it('using async/await', async () => {
            await new Promise(resolve => setTimeout(resolve, 500));
        })
    })
})