const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('projecct 2 testing', () => {
    it('should return the biggest value', () => {
        const getBiggest = funcs.getBiggest;

        const twelve = getBiggest(12,5);
        const fifteen = getBiggest(12,15);
        const fifty = getBiggest(12,50);

        expect(twelve).toBe(12);
        expect(fifteen).toBe(15);
        expect(fifty).toBe(50);
    });

    it('should a greeting in the language chosen', () => {
        const greeting = funcs.greeting;

        const german = greeting('German');
        const spanish = greeting('Spanish');
        const english = greeting("other");

        expect(german).toBe('Guten Tag!');
        expect(spanish).toBe('Hola!');
        expect(english).toBe('Hello!');
    });

    it('should check to see if the number given is a 10 or 5', () => {
        const isTenOrFive = funcs.isTenOrFive;

        const ten = isTenOrFive(10);
        const five = isTenOrFive(5);
        const two = isTenOrFive(2);

        expect(ten).toBe(true);
        expect(five).toBe(true);
        expect(two).toBe(false);
    });

    it('should check to see if the number given is between 20 and 50', () => {
        const isInRange = funcs.isInRange;

        const ten = isInRange(10);
        const fifty = isInRange(50);
        const twentyFive = isInRange(25);

        expect(ten).toBe(false);
        expect(fifty).toBe(false);
        expect(twentyFive).toBe(true);
    });

    it('should check to see if the number given is an Integer', () => {
        const isInteger = funcs.isInteger;

        const ten = isInteger(10);
        const fifty = isInteger(50);
        const twentyFive = isInteger(25.2);

        expect(ten).toBe(true);
        expect(fifty).toBe(true);
        expect(twentyFive).toBe(false);
    });

    it('should return fizz, buzz, or fizzbuzz', () => {
        const fizzBuzz = funcs.fizzBuzz;

        const ten = fizzBuzz(10);
        const fourtyFive = fizzBuzz(45);
        const nine = fizzBuzz(9);

        expect(ten).toBe('buzz');
        expect(fourtyFive).toBe('fizzbuzz');
        expect(nine).toBe('fizz');
    });

    it('should check to see if the number given is a prime number', () => {
        const isPrime = funcs.isPrime;

        const ten = isPrime(10);
        const fifty = isPrime(50);
        const thirteen = isPrime(13);

        expect(ten).toBe(false);
        expect(fifty).toBe(false);
        expect(thirteen).toBe(true);
    });

    it('should return the first value in the array', () => {
        const returnFirst = funcs.returnFirst;

        const ten = returnFirst([10,5,15]);
        const fifty = returnFirst([50,20,10]);
        const thirteen = returnFirst([13,14,15,16]);

        expect(ten).toBe(10);
        expect(fifty).toBe(50);
        expect(thirteen).toBe(13);
    });

    it('should return the last value in the array', () => {
        const returnLast = funcs.returnLast;

        const fifteen = returnLast([10,5,15]);
        const ten = returnLast([50,20,10]);
        const sixteen = returnLast([13,14,15,16]);

        expect(fifteen).toBe(15);
        expect(ten).toBe(10);
        expect(sixteen).toBe(16);
    });

    it('should return the length of the array', () => {
        const getArrayLength = funcs.getArrayLength;

        const three = getArrayLength([10,5,15]);
        const two = getArrayLength([50,20]);
        const four = getArrayLength([13,14,15,16]);

        expect(three).toBe(3);
        expect(two).toBe(2);
        expect(four).toBe(4);
    });

    it('should return the values given plus 1', () => {
        const incrementByOne = funcs.incrementByOne;

        const arr1 = incrementByOne([10,5,15]);
        const arr2 = incrementByOne([50,20]);
        const arr3 = incrementByOne([13,14,15,16]);

        expect(arr1).toEqual([11,6,16]);
        expect(arr2).toEqual([51,21]);
        expect(arr3).toEqual([14,15,16,17]);
    });
});