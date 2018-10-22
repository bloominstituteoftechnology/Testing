const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-1.js', () => {
    describe('getBiggest', () => {
        it('should the biggest number', () => {
            const expected = 100;

            const actual = funcs.getBiggest(10, 100);

            expect(actual).toEqual(expected);
        });

        it('should return 0 when called with no value', () => {
            const product = funcs.getBiggest();

            expect(product).toBe(0);
        });

        it('should throw an error when called with a string', () => {
            expect( () => { funcs.getBiggest('five', 'four') }).toThrow();
        });
    });

    describe('greeting', () => {
        it('should return a greeting in the specified language', () => {
            const expected = 'Guten Tag!';

            const actual = funcs.greeting('German');

            expect(actual).toEqual(expected);
        });

        it('should return Hello! when called with no value', () => {
            const product = funcs.greeting();

            expect(product).toBe('Hello!');
        });
    });

    describe('isTenOrFive', () => {
        it('should return true if the number is either 10 or 5', () => {
            const expected = true;

            const actual = funcs.isTenOrFive(10);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = funcs.isTenOrFive();

            expect(product).toBe(false);
        });

        it('should throw an error when called with a string', () => {
            expect( () => { funcs.isTenOrFive('five') }).toThrow();
        });
    });

    describe('isInRange', () => {
        it('should return true if the number is in range of 20 and 50', () => {
            const expected = true;

            const actual = funcs.isInRange(30);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = funcs.isInRange();

            expect(product).toBe(false);
        });

        it('should throw an error when called with a string', () => {
            expect( () => { funcs.isInRange('five') }).toThrow();
        });
    });

    describe('isInteger', () => {
        it('should return true if the number is an integer', () => {
            const expected = true;

            const actual = funcs.isInteger(2);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = funcs.isInteger();

            expect(product).toBe(false);
        });

        it('should throw an error when called with a string', () => {
            expect( () => { funcs.isInteger('five') }).toThrow();
        });
    });

    describe('fizzBuzz', () => {
        it('should return fizzbuzz, fizz, or buzz or the number', () => {
            const expected = 2;

            const actual = funcs.fizzBuzz(2);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = funcs.fizzBuzz();

            expect(product).toBe('no fizzbuzz');
        });

        it('should throw an error when called with a string', () => {
            expect( () => { funcs.fizzBuzz('five') }).toThrow();
        });
    });

    describe('isPrime', () => {
        it('should return true if the number is a prime', () => {
            const expected = true;

            const actual = funcs.isPrime(2);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = funcs.isPrime();

            expect(product).toBe(false);
        });

        it('should throw an error when called with a string', () => {
            expect( () => { funcs.isPrime('five') }).toThrow();
        });
    });

    describe('returnFirst', () => {
        it('should return the first item in the array', () => {
            const expected = 'one';

            const actual = funcs.returnFirst(['one', 'two', 'three']);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = funcs.returnFirst();

            expect(product).toBe(0);
        });
    });

    describe('returnLast', () => {
        it('should return the last item in the array', () => {
            const expected = 'three';

            const actual = funcs.returnLast(['one', 'two', 'three']);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = funcs.returnFirst();

            expect(product).toBe(0);
        });
    });

    describe('getArrayLength', () => {
        it('should return length of the array', () => {
            const expected = 3;

            const actual = funcs.getArrayLength(['one', 'two', 'three']);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = funcs.getArrayLength();

            expect(product).toBe(0);
        });
    });

    describe('incrementByOne', () => {
        it('should increment by one', () => {
            const expected = [2];

            const actual = funcs.incrementByOne([1]);

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            const product = funcs.incrementByOne();

            expect(product).toBe(0);
        });
    });

    describe('addItemToArray', () => {
        it('should add an item into the array', () => {
            const expected = ['one', 'two', 'three', 'four'];

            const actual = funcs.addItemToArray(['one', 'two', 'three'], 'four');

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            expect(() => {funcs.addItemToArray()}).toThrow();
        });
    });

    describe('addItemToFront', () => {
        it('should add an item into the front of the array', () => {
            const expected = ['four','one', 'two', 'three'];

            const actual = funcs.addItemToFront(['one', 'two', 'three'], 'four');

            expect(actual).toEqual(expected);
        });

        it('should return false when called with no value', () => {
            expect(() => {funcs.addItemToFront()}).toThrow();
        });
    });

    describe('wordsToSentence', () => {
        it('should take an array of words and put them together as a sentence', () => {
            const expected = 'I love programming';

            const actual = funcs.wordsToSentence(['I', 'love', 'programming']);

            expect(actual).toEqual(expected);
        });

        it('should throw and error when called with no value', () => {
            expect(() => {funcs.wordsToSentence()}).toThrow();
        });
    });

    describe('contains', () => {
        it('should return true if the item exists in the array', () => {
            const expected = true;

            const actual = funcs.contains(['I', 'love', 'programming'], 'love');

            expect(actual).toEqual(expected);
        });

        it('should throw and error when called with no value', () => {
            expect(() => {funcs.contains()}).toThrow();
        });
    });

    describe('addNumbers', () => {
        it('should return the sum of the numbers', () => {
            const expected = 3;

            const actual = funcs.addNumbers([1, 1, 1]);

            expect(actual).toEqual(expected);
        });

        it('should throw and error when called with no value', () => {
            expect(() => {funcs.addNumbers()}).toThrow();
        });

        it('should throw and error when called with string', () => {
            expect(() => {funcs.addNumbers('one', 'two', 1)}).toThrow();
        });
    });

    describe('averageTestScore', () => {
        it('should return the average sum of the numbers', () => {
            const expected = 1;

            const actual = funcs.averageTestScore([1, 1, 1]);

            expect(actual).toEqual(expected);
        });

        it('should throw and error when called with no value', () => {
            expect(() => {funcs.averageTestScore()}).toThrow();
        });

        it('should throw and error when called with string', () => {
            expect(() => {funcs.averageTestScore('one', 'two', 1)}).toThrow();
        });
    });

    describe('largestNumber', () => {
        it('should return the largest number from the array', () => {
            const expected = 5;

            const actual = funcs.largestNumber([1, 5, 3]);

            expect(actual).toEqual(expected);
        });

        it('should throw and error when called with no value', () => {
            expect(() => {funcs.largestNumber()}).toThrow();
        });

        it('should throw and error when called with string', () => {
            expect(() => {funcs.largestNumber('one', 'two', 1)}).toThrow();
        });
    });
});
