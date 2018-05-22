const funcs = require('./project-2');

describe('default', () => {
    it('should run the test', () => {
    })
})

describe('get biggest function', () => {    //PASSED
    it('should get the biggest value out of 2', () => {
        //arrange
        const getBiggest = funcs.getBiggest;

        //act
        const yIsBiggest = getBiggest(3, 9);

        //assert
        expect(yIsBiggest).toBe(9);
    })
})

describe('greeting function', () => {       //PASSED
    it('should give a greeting in a language', () => {
        //arrange
        const greeting = funcs.greeting;

        //act
        const helloEspanol = greeting('Spanish');

        //assert
        expect(helloEspanol).toBe('Hola!');
    })
})

describe('is ten or five function', () => {     //PASSED
    it('should return true if a number is 10 or 5, and false if not', () => {
        //arrange
        const isTenOrFive = funcs.isTenOrFive;

        //act
        const trueFive = isTenOrFive(5);
        const trueTen = isTenOrFive(10);
        const falseNum = isTenOrFive(6);

        //assert
        expect(trueFive).toBe(true);
        expect(trueTen).toBe(true);
        expect(falseNum).toBe(false);
    })
})

describe('is in range function', () => {        //PASSED
    it('should return true if num is between 20 and 50, and false if not.', () => {
        //arrange
        const isInRange = funcs.isInRange;

        //act
        const inRange = isInRange(30);
        const outOfRange19 = isInRange(19);
        const outOfRange51 = isInRange(51);

        expect(inRange).toBe(true);
        expect(outOfRange19).toBe(false);
        expect(outOfRange51).toBe(false);
    })
})

describe('is integer function', () => {     //PASSED
    it('should check if num is a number', () => {
        //arrange
        const isInteger = funcs.isInteger;

        //act
        const integer = isInteger(15);
        const notInteger = isInteger('string');

        expect(integer).toBe(true);
        expect(notInteger).toBe(false);
    })
})

describe('fizz buzz function', () => {      //PASSED
    it('should check modulo 3 and 5', () => {
        //arrange
        const fizzBuzz = funcs.fizzBuzz;

        //act
        const fizzbuzz = fizzBuzz(15);
        const buzz = fizzBuzz(5);
        const fizz = fizzBuzz(6);

        //assert
        expect(fizzbuzz).toBe('fizzbuzz');
        expect(buzz).toBe('buzz');
        expect(fizz).toBe('fizz');
    })
})

describe('is prime function', () => {       //PASSED
    it('should check is a num is prime', () => {
        //arrange
        const isPrime = funcs.isPrime;

        //act
        const prime = isPrime(7);
        const notPrime = isPrime(12);

        //assert
        expect(prime).toBe(true);
        expect(notPrime).toBe(false);
    })
})

describe('return first function', () => {       //PASSED
    it('should return the first item in an array', () => {
        //arrange
        const returnFirst = funcs.returnFirst;

        //act
        const first = returnFirst(['first', 'second', 'third']);

        //assert
        expect(first).toBe('first');
    })
})

describe('return last function', () => {        //PASSED
    it('should return the last item in an array', () => {
        //arrange
        const returnLast = funcs.returnLast;

        //act
        const last = returnLast(['first', 'second', 'last']);

        //assert
        expect(last).toBe('last');
    })
})

describe('get array length function', () => {    //PASSED
    it('should give the length of a given array', () => {
        //arange
        const getArrayLength = funcs.getArrayLength;

        //act
        const four = getArrayLength([1, 2, 3, 4]);

        //assert
        expect(four).toBe(4);
    })
})

describe('increment by one function', () => {      //PASSED
    it('should increment all by one', () => {

        //arrange
        const incrementByOne = funcs.incrementByOne;

        //act
        const incremented = incrementByOne([1, 2, 3]);

        //assert
        expect(incremented).toEqual([2, 3, 4]);
    })
})

describe('add item to array function', () => {      //PASSED
    it('should add an item to an array', () => {
        //arrange
        const addItemToArray = funcs.addItemToArray;

        //act
        const oneList = addItemToArray([1, 1, 1, 1], 4);

        //assert
        expect(oneList).toEqual([1, 1, 1, 1, 4]);
    })
})

describe('add item to front function', () => {      //PASSED
    it('should add an item to the front of an array', () => {
        //arrange
        const addItemToFront = funcs.addItemToFront;

        //act
        const fourAndOnes = addItemToFront([1, 1, 1, 1], 4);

        //assert
        expect(fourAndOnes).toEqual([4, 1, 1, 1, 1]);
    })
})

describe('words to sentence function', () => {      //PASSED
    it('should combine words to a sentence', () => {
        //arrange
        const wordsToSentence = funcs.wordsToSentence;

        //act
        const heyThere = wordsToSentence(['Hey', 'There']);

        //assert
        expect(heyThere).toBe('Hey There');
    })
})

describe('contains function', () => {
    it('should return true if item is in array', () => {
        //arrange
        const contains = funcs.contains;

        //act
        const isTrue = contains([1, 2, 4], 2);
        const isFalse = contains([1, 2, 3, 4], 6);

        //assert
        expect(isTrue).toBe(true);
        expect(isFalse).toBe(false);
    })
})

describe('addNumbers function', () => {     //PASSED
    it('should add all given numbers', () => {
        //arrange
        const addNumbers = funcs.addNumbers;

        //act
        const eight = addNumbers([2, 4, 2]);

        //assert
        expect(eight).toBe(8);
    })
})

describe('average test scores function', () => {        //PASSED
    it('should give the average test score', () => {
        //arrange
        const averageTestScore = funcs.averageTestScore;

        //act
        const average = averageTestScore([50, 98, 90, 76, 83]);

        expect(average).toBe(79.4);
    })
})

describe('largest number function', () => {     //PASSED
    it('should return the largest number inan array', () => {
        //arrange
        const largestNumber = funcs.largestNumber;

        //act
        const largestIs17 = largestNumber([1, 12, 17, 10, 9]);

        //assert
        expect(largestIs17).toBe(17);
    })
})

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
