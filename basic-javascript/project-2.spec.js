const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest()', () => {
    it('should compare two numbers and return the biggest number', () => {
        const expected = 25;
        const actual = funcs.getBiggest(25, 5);
        expect(actual).toEqual(expected);
    });
});

describe('greeting()', () => {
    it('should return a greeting in chosen language', () => {
        const expected = 'Hola!';
        const actual = funcs.greeting('Spanish');
        expect(actual).toEqual(expected);
    });
});

describe('isTenOrFive()', () => {
    it('should return true if number is equal to 10 or 5', () => {
        const expected = true;
        const actual = funcs.isTenOrFive(10);
        expect(actual).toEqual(expected);
    });
    it('should return false if number is not equal to 10 or 5', () => {
        const expected = false;
        const actual = funcs.isTenOrFive(105);
        expect(actual).toEqual(expected);
    });
});

describe('isInRange()', () => {
    it('should return true if number is less than 50 but greater than 20', () => {
        const expected = true;
        const actual = funcs.isInRange('25');
        expect(actual).toEqual(expected);
    });
    it('should return false if number is greater than 50 or less than 20', () => {
        const expected = false;
        const actual = funcs.isInRange('51');
        expect(actual).toEqual(expected);
    });
});

describe('isInteger()', () => {
    it('should return true', () => {
        const expected = true;
        const actual = funcs.isInteger(25);
        expect(actual).toEqual(expected);
    });
    it('should return false', () => {
        const expected = false;
        const actual = funcs.isInteger(5.1);
        expect(actual).toEqual(expected);
    });
});

describe('fizzBuzz()', () => {
    it('should return correct string', () => {
	const expected1 = 'fizzbuzz'
	const expected2 = 'buzz'
	const expected3 = 'fizz'
	const expected4 = 1
	const actual1 = funcs.fizzBuzz(15)
	const actual2 = funcs.fizzBuzz(5)
	const actual3 = funcs.fizzBuzz(3)
	const actual4 = funcs.fizzBuzz(1)
	expect(actual1).toEqual(expected1)
	expect(actual2).toEqual(expected2)
	expect(actual3).toEqual(expected3)
	expect(actual4).toEqual(expected4)
    });
});

describe('isPrime()', () => {
it('should return correct boolean', () => {
	const expected1 = true;
	const expected2 = false
	const actual1 = funcs.isPrime(-1)
	const actual2 = funcs.isPrime(1)
	const actual3 = funcs.isPrime(7)
	const actual4 = funcs.isPrime(4)
	expect(actual1).toEqual(expected2)
	expect(actual2).toEqual(expected2)
	expect(actual3).toEqual(expected1)
	expect(actual4).toEqual(expected2)
    });
});

describe('returnFirst()', () => {
    it('should return first item in an array', () => {
        const expected = 'first';
        const actual = funcs.returnFirst(['first', 'second', 'third']);
        expect(actual).toEqual(expected);
    });
});

describe('returnlast()', () => {
    it('should return last item in an array', () => {
        const expected = 'third';
        const actual = funcs.returnLast(['first', 'second', 'third']);
        expect(actual).toEqual(expected);
    });
});

describe('getArrayLength()', () => {
    it('should return array length', () => {
        const expected = 4;
        const actual = funcs.getArrayLength(['first', 'second', 'third', 'fourth']);
        expect(actual).toEqual(expected);
    });
});

describe('incrementByOne()', () => {
    it('should add one to each item in array', () => {
        const expected = [3,5,9];
        const actual = funcs.incrementByOne([2,4,8]);
        expect(actual).toEqual(expected);
    });
});

describe('addItemToArray()', () => {
    it('should add item to the end of array', () => {
        const expected = ['peanut butter', 'jelly', 'bread'];
        const actual = funcs.addItemToArray(['peanut butter', 'jelly'], 'bread');
        expect(actual).toEqual(expected);
    });
});

describe('addItemToFront()', () => {
    it('should add item to the beginnning of array', () => {
        const expected = ['bread', 'peanut butter', 'jelly'];
        const actual = funcs.addItemToFront(['peanut butter', 'jelly'], 'bread');
        expect(actual).toEqual(expected);
    });
});