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