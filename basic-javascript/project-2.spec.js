const funcs = require('./project-2');

describe(`${funcs.getBiggest.name}`, () => {
    const getBiggest = funcs.getBiggest;
    it('should return the x value if x is bigger than y', () => {
        expect(getBiggest(40,20)).toBe(40);
        expect(getBiggest(30,20)).toBe(30);
    })
    it('should return the y value if y is bigger than x', () => {
        expect(getBiggest(10,20)).toBe(20);
        expect(getBiggest(-5,20)).toBe(20);
    })
})

describe(`${funcs.greeting.name}`, () => {
    const greeting = funcs.greeting;
    it('should return the proper greeting depending on the input', () => {
        expect(greeting('German')).toBe('Guten Tag!');
        expect(greeting('Spanish')).toBe('Hola!');
        expect(greeting('Unknown')).toBe('Hello!');
    })
})
describe(`${funcs.isTenOrFive.name}`, () => {
    const isTenOrFive = funcs.isTenOrFive;
    it ('the argument should be a 5 or a 10 for it to return true', () => {
        expect(isTenOrFive(5)).toBeTruthy();
        expect(isTenOrFive(10)).toBeTruthy();
    })
    it ('any other number should return false that is not 5 or 10', () => {
        expect(isTenOrFive(4)).toBeFalsy();
        expect(isTenOrFive(11)).toBeFalsy();
    })
});

describe(`${funcs.isInRange.name}`, () => {
    const isInRange = funcs.isInRange;

    it ('should return true if the argument is less than 50 and greater than 20', () => {
        expect(isInRange(40)).toBeTruthy();
        expect(isInRange(25)).toBeTruthy();
        expect(isInRange(49)).toBeTruthy();
    })
    it ('should return false if the argument is not between 50 and 20', () => {
        expect(isInRange(19)).toBeFalsy();
        expect(isInRange(20)).toBeFalsy();
        expect(isInRange(50)).toBeFalsy();
    })
});

describe(`${funcs.isInteger.name}`, () => {
    const isInteger = funcs.isInteger;

    it('should return true for numbers that are true integers', () => {
        expect(isInteger(4)).toBeTruthy();
        expect(isInteger(42424)).toBeTruthy();
        expect(isInteger(-4151)).toBeTruthy();
    });
    it('should return false for numbers that are decimals', () => {
        expect(isInteger(4.3)).toBeFalsy();
    })
})
describe(`${funcs.fizzBuzz.name}`, () => {
    const fizzBuzz = funcs.fizzBuzz;
    it('should return fizzbuzz', () => {
        expect(fizzBuzz(15)).toMatch('fizzbuzz');
    })
    it('should return fizz', () => {
        expect(fizzBuzz(3)).toMatch('fizz');        
    })
    it('should return buzz', () => {
        expect(fizzBuzz(5)).toMatch('buzz');
    })
    it('should return number', () => {
        expect(fizzBuzz(7)).toBe(7);        
    })
});

describe(`${funcs.isPrime.name}`, () => {
    const isPrime = funcs.isPrime;
    
    it('should return true for a number that is prime', () => {
        expect(isPrime(5)).toBeTruthy();
    });
    it('should return false for negative numbers', () => {
        expect(isPrime(-4)).toBeFalsy();
    })
    it('should return false for a non-prime number', () => {
        expect(isPrime(6)).toBeFalsy();
    });
})
describe(`${funcs.returnFirst.name}`, () => {
    const returnFirst = funcs.returnFirst;
    const arr = [5,4,2,1];
    it('should return the first item in the array', () => {
        expect(returnFirst(arr)).toBe(5);
    });
});

describe(`${funcs.returnLast.name}`, () => {
    const returnLast = funcs.returnLast;
    const arr = [5,4,2,1];
    it('should return the last item in the array', () => {
        expect(returnLast(arr)).toBe(1);
    });
});


// whoops.. there is no test suite for this file. You'll simply just have to create one :/
