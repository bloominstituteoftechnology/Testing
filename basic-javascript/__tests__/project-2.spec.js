const funcs = require('../project-2');


describe('getBiggest()', ()=> {
    it('should return x when x is larger', ()=> {
        const actual = funcs.getBiggest(4, 1);
        expect(actual).toBe(4);
    });

    it('should return y when y is larger', ()=> {
        const actual = funcs.getBiggest(-12, 0);
        expect(actual).toBe(0);
    });

    it('should return y when x and y are equal', ()=> {
        const actual = funcs.getBiggest(0, 0);
        expect(actual).toBe(0);
    });
});

describe('greeting()', ()=> {
    it('should return Hello when no language specified', ()=> {
        const actual = funcs.greeting();
        expect(actual).toBe('Hello!');
    });

    it('should return Guten Tag when language is German', ()=> {
        const actual = funcs.greeting('German');
        expect(actual).toBe('Guten Tag!');
    });

    it('should return Hola when language is Spanish', ()=> {
        const actual = funcs.greeting('Spanish');
        expect(actual).toBe('Hola!');
    });

    it('should return I dont speak Italian when language is Italian', ()=> {
        const actual = funcs.greeting('Italian');
        expect(actual).toBe('I dont speak Italian');
    });
});

describe('isTenOrFive()', ()=> {
    it('should return true when num = 10', ()=> {
        const actual = funcs.isTenOrFive(10);
        expect(actual).toBeTruthy();
    });

    it('should return true when num = 5', ()=> {
        const actual = funcs.isTenOrFive(5);
        expect(actual).toBeTruthy();
    });
    
    it('should return false if num is anything other than 10 or 5', ()=> {
        const actual = funcs.isTenOrFive(2);
        expect(actual).toBeFalsy();
    });
});

describe('isInRange()', ()=> {
    it('should return true when num is between 20 and 50', ()=> {
        const actual = funcs.isInRange(21);
        expect(actual).toBeTruthy();
    });

    it('should return false when num > 50', ()=> {
        const actual = funcs.isInRange(51);
        expect(actual).toBeFalsy();
    });
    
    it('should return false if num < 20', ()=> {
        const actual = funcs.isInRange(19);
        expect(actual).toBeFalsy();
    });

    it('should return true if num = 20', ()=> {
        const actual = funcs.isInRange(20);
        expect(actual).toBeTruthy();
    });

    it('should return true if num = 50', ()=> {
        const actual = funcs.isInRange(50);
        expect(actual).toBeTruthy();
    });
});

describe('isInteger()', ()=> {
    it('should return true if number is an integer', ()=> {
        const actual = funcs.isInteger(1);
        expect(actual).toBeTruthy();
    });

    it('should return false if number is not an integer', ()=> {
        const actual = funcs.isInteger(1.1);
        expect(actual).toBeFalsy();
    })
});

describe('fizzBuzz()', ()=> {
    it('should return fizzbuzz if number is divisible by 5 and 3', ()=> {
        const actual = funcs.fizzBuzz(15);
        expect(actual).toBe('fizzbuzz');
    });

    it('should return buzz is number is divible by 5 and not 3', ()=> {
        const actual = funcs.fizzBuzz(20);
        expect(actual).toBe('buzz');
    });

    it('should return fizz if number is divisible by 3 and not 5', ()=> {
        const actual = funcs.fizzBuzz(18);
        expect(actual).toBe('fizz');
    });
});

describe('isPrime()', ()=> {
    it('should return false if number is negative', ()=> {
        const actual = funcs.isPrime(-1);
        expect(actual).toBeFalsy();
    });

    it('should return false if number is 1', ()=> {
        const actual = funcs.isPrime(1);
        expect(actual).toBeFalsy();
    });

    it('should return false if number is 0', ()=> {
        const actual = funcs.isPrime(0);
        expect(actual).toBeFalsy();
    });

    it('should return false if number is divisible by any number in the range 2-number', ()=> {
        const actual = funcs.isPrime(8);
        expect(actual).toBeFalsy();
    });

    it('should return true if the number is not divisible by any number in the range 2-number', ()=> {
        const actual = funcs.isPrime(7);
        expect(actual).toBeTruthy();
    });
});

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
