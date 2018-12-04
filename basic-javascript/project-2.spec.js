const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2 testing', () => {
    it('find the largest number', () => {
        expect(funcs.getBiggest(10, 8)).toBe(10);
        expect(funcs.getBiggest(8, 12)).toBe(12);
        // make sure the input is a number
    });

    it('greetings in different languages', () => {
        expect(funcs.greeting('English')).toBe('Hello!');
        expect(funcs.greeting('Jibberish')).toBe('Hello!');
        // make sure the input is a string
    });

    it('check if it is 10 or 5', () => {
        expect(funcs.isTenOrFive(2)).toBe(false);
        expect(funcs.isTenOrFive(15)).toBe(false);
        // make sure input is a number
    });

    it('check if the number is <50 and >20', () => {
        expect(funcs.isInRange(30)).toBe(true);
        expect(funcs.isInRange(72)).toBe(false);
        // make sure input is a number
    });

    it('change a float into an integer', () => {
        expect(funcs.isInteger(3.2)).toBe(false);
        expect(funcs.isInteger(4)).toBe(true);
        // make sure input is a number
    });

    describe('fizzbuzz function testing', () => {
        it('should be divisible by 5', () => {
            expect(funcs.fizzBuzz(20)).toBe('buzz');
        });

        it('should be divisible by 3', () => {
            expect(funcs.fizzBuzz(9)).toBe('fizz');
        });

        it('should be divisible by both 5 & 3', () => {
            expect(funcs.fizzBuzz(30)).toBe('fizzbuzz');
        });

        it('return the number if not divisable by 5 or 3', () => {
            expect(funcs.fizzBuzz(14)).toBe(14);
        })
        // make sure input is a number
    });

    describe('if the number is prime', () => {
        it('check if the number is less than zero', () => {
            expect(funcs.isPrime(-2)).toBe(false);
        });

        it('return false if the number is 1 or 0', () => {
            expect(funcs.isPrime(1)).toBe(false);
        });

        it('check to see if number is divisible by more than just itself', () => {
            expect(funcs.isPrime(7)).toBe(true);
            expect(funcs.isPrime(6)).toBe(false);
            expect(funcs.isPrime(3)).toBe(true);
        })
        // make sure input is a number
    });

    it('should return first item in an array', () => {
        expect(funcs.returnFirst([1,2,3])).toBe(1);
        expect(funcs.returnFirst(['hi', 'hey', 'hello'])).toBe('hi');
        // make sure input is an array
    });

    it('should return the last item in an array', () => {
        expect(funcs.returnLast([1,2,3])).toBe(3);
        expect(funcs.returnLast(['hi', 'hey', 'hello'])).toBe('hello');
        // make sure input is an array
    });

    it('should return the length of the array', () => {
        expect(funcs.getArrayLength([])).toBe(0);
        expect(funcs.getArrayLength([1])).toBe(1);
        expect(funcs.getArrayLength([1,2])).toBe(2);
        expect(funcs.getArrayLength([1,2,3])).toBe(3);
        // make sure input is an array
    });

    it('should increase the argument by one', () => {
        expect(funcs.incrementByOne([4,5])).toEqual([5,6]);
        // make sure input is correct
    });

    it('should take an item and add it to an array', () => {
        expect(funcs.addItemToArray([1,2,3], 4)).toEqual([1,2,3,4]);
        // make sure input one is an array
        // make sure second input is not undefined or null
    });

    it('should add an item to the front of an array', () => {
        expect(funcs.addItemToFront([2,3,4], 1)).toEqual([1,2,3,4]);
        // make sure input one is an array
        // make sure second input is not undefine or null
    });

    it('should create sentence from words array', () => {
        expect(funcs.wordsToSentence(['do', 'you', 'need', 'help'])).toBe('do you need help');
        // make sure input is an array
        // make sure array is made of strings
        // make sure array items are all trimed of spaces
    })

    it('should check for a word within an array', () => {
        expect(funcs.contains(['hungry', 'hungry', 'hippo'], 'hippo')).toBe(true);
        expect(funcs.contains(['hungry', 'hungry', 'hippo'], 'badger')).toBe(false);
        // make sure input one is an array
        // make sure second input is not undefined or null
    });

    it('should add a list of number together', () => {
        expect(funcs.addNumbers([1,2,3,4])).toBe(10);
        // make sure input is an array of numbers
    });

    it('should find the average test score', () => {
        expect(funcs.averageTestScore([4,3,2,4,3])).toBe(3.2);
        // make sure the input is an array of numbers
    });

    it('should find the largest number in an array', () => {
        expect(funcs.largestNumber([4,3,8,2])).toBe(8);
        expect(funcs.largestNumber([2])).toBe(2);
        // make sure the input is an array of numbers
    });

});