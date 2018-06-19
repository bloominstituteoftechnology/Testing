const funcs = require('./project-2');
// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('getBiggest', () => {
    it('should return X if its larger than Y', () => {
        expect(funcs.getBiggest(7, 5)).toEqual(7);
    })
    it('Should return y if its larger than X', () => { 
        expect(funcs.getBiggest(85, 1000)).toBe(1000);
    })
    it('Should return either X or Y if they are the same', () => { 
        expect(funcs.getBiggest(800, 800)).toBe(800);
    })
});

describe('greeting', () => {
    it('Should return \'Guten Tag!\' for German', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
    });
    it('Should return \'Hola!\' for Spanish', () => {
        expect(funcs.greeting('Spanish')).toBe('Hola!');
    });
    it('Should return \'Hello!\' if neither Spanish,German is entered',() => {
        // expect(funcs.greeting('Japanese')).toBe('Hello!');
        expect(funcs.greeting()).toBe('Hello!');
    })
});

describe('isTenorFive', () => {
    it('Should return true if number is 10 or 5', () => {
        expect(funcs.isTenOrFive(10)).toBe(true);
        expect(funcs.isTenOrFive(5)).toBe(true);
    })
    it('Should return false if number is not 10 or 5', () => {
        expect(funcs.isTenOrFive(15)).toBe(false);
        expect(funcs.isTenOrFive(4)).toBe(false);
        expect(funcs.isTenOrFive(34)).toBe(false);
        expect(funcs.isTenOrFive(2)).toBe(false);
    })
});

describe('isInRange', () => {
    it('Should return a number less than 50 and more than 20', () => {
        expect(funcs.isInRange(38)).toBe(true);
        expect(funcs.isInRange(49.5)).toBe(true);
        expect(funcs.isInRange(21)).toBe(true);
    })
    it('Should return false if not within parameters', () => {
        expect(funcs.isInRange(5)).toBe(false);
        expect(funcs.isInRange(100)).toBe(false);
        expect(funcs.isInRange(19)).toBe(false);
    })
});

describe('isInteger', () => {
    it('Should return true if the number is 7', () => {
        expect(funcs.isInteger(7)).toBe(true);
    })
    it('Should return false if number is 0.1', () => {
        expect(funcs.isInteger(0.1)).toBe(false);
    })
    it('Should return true for 0', () => {
        expect(funcs.isInteger(0)).toBe(true);
    })
});

describe('fizzBuzz', () => {
    it('Should return fizzBuzz if number is divisible by 5 and 3', () => {
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    })
    it('Should return buzz if number divisible by 5', () => {
        expect(funcs.fizzBuzz(20)).toBe('buzz');
    })
    it('Should return fizz if number is divisible by 3', () => {
        expect(funcs.fizzBuzz(9)).toBe('fizz');
    })
    it('Should return a number if not divisible by 3 or 5', () => {
        expect(funcs.fizzBuzz(7)).toBe(7);
    })
    it('Should return a number if not divisible by 3 or 5', () => {
        expect(funcs.fizzBuzz(8)).toBe(8);
    })
    it('Should return a number if not divisible by 3 or 5', () => {
        expect(funcs.fizzBuzz(11)).toBe(11);
    })
});

describe('isPrime', () => {
    it('Should return false if the number is less than 0', () => {
        expect(funcs.isPrime(-1)).toBe(false);
    })
    it('Should return false if number is not Prime', () => {
        expect(funcs.isPrime(50)).toBe(false);
        expect(funcs.isPrime(49)).toBe(false);
        expect(funcs.isPrime(10)).toBe(false);
        expect(funcs.isPrime(200)).toBe(false);
        expect(funcs.isPrime(0)).toBe(false);
    })
    it('Should return true if number is Prime', () => {
        expect(funcs.isPrime(5)).toBe(true);
        expect(funcs.isPrime(3)).toBe(true);
        expect(funcs.isPrime(11)).toBe(true);
        expect(funcs.isPrime(17)).toBe(true);
    })
});

describe('returnFirst', () => {
    it('Should return the first item in the array', () => {
        expect(funcs.returnFirst([5, 3, 43, 11, 31])).toBe(5);
        expect(funcs.returnFirst([7, 11, 200, 10, 111])).toBe(7);
        expect(funcs.returnFirst([17, 110, 2000, 100, 1110])).toBe(17);
    })
});

describe('returnLast', () => {
    it('Should return the last item in the array', () => {
        expect(funcs.returnLast([5, 3, 43, 11, 31])).toBe(31);
        expect(funcs.returnLast([7, 11, 200, 10, 111])).toBe(111);
        expect(funcs.returnLast([17, 110, 2000, 100, 1110])).toBe(1110);

    })
});

describe('getArrayLength', () => {
    it('Should return the lenght of the array', () => {
        expect(funcs.getArrayLength([5, 3, 43, 11, 31])).toBe(5);
        expect(funcs.getArrayLength([5, 3])).toBe(2);
        expect(funcs.getArrayLength([5, 3, 43, 11, 31, 66, 77, 352])).toBe(8);
        expect(funcs.getArrayLength([5, 3, 43, 111, 12, 15, 17])).toBe(7);
        expect(funcs.getArrayLength(['fe', 'fi', 'fo', 'fum'])).toBe(4);
    })
});

describe('incrementByOne', () => {
    it('Should return the array with the values going up by one', () => { 
        expect(funcs.incrementByOne([1, 2, 3])).toEqual([2, 3, 4]);
        expect(funcs.incrementByOne([4, 5, 6])).toEqual([5, 6, 7]);
        expect(funcs.incrementByOne([14, 31, 67])).toEqual([15, 32, 68]);
    })
});

describe('addItemToArray', () => {
    it('Should return array with item added at the end', () => {
        expect(funcs.addItemToArray([14, 31, 67], 7)).toEqual([14, 31, 67, 7]);
        expect(funcs.addItemToArray([1, 3, 122, 32, 12], 10)).toEqual([1, 3, 122, 32, 12, 10]);

    })
});


