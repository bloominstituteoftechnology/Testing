const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('the functions in the `project-2.js` file', () => {

    describe('the getBiggest function', () => {
        it('should retrun the Biggest of the 2 integers given.', () => {
            expect(funcs.getBiggest(1100, 120)).toBeDefined();
            expect(funcs.getBiggest(1100, 120)).toBeTruthy();

            expect(funcs.getBiggest(1100, 120)).not.toBeNull();
            expect(funcs.getBiggest(1100, 120)).toEqual(1100);
        });
    });

    describe('the `greeting` function', () => {
        it('shold return the correct string for each greeting case', () => {
            expect(funcs.greeting('German')).toEqual('Guten Tag!');
            expect(funcs.greeting('Spanish')).toEqual('Hola!');
            expect(funcs.greeting('')).toEqual('Hello!');
            expect(funcs.greeting(' ')).toEqual('Hello!');
        });
    });


    describe('the is Ten or Five function', () => {
        it('should retun true if equal to 5 or 10', () => {
            expect(funcs.isTenOrFive(5)).toBe(true);
            expect(funcs.isTenOrFive(10)).toBe(true);

        });

        it('should return false if not 5 0r 10', () => {
            expect(funcs.isTenOrFive(7)).toBe(false);
            expect(funcs.isTenOrFive(3)).toBe(false);
            expect(funcs.isTenOrFive('7')).toBe(false);
            expect(funcs.isTenOrFive(13)).toBe(false);

        });

        
    });
    describe('the is in Range function', () => {
        it('should retutn true if within the stated range', () => {
            expect(funcs.isInRange(25)).toEqual(true);

        });
        it('should return return false if outside the range', () => {
            expect(funcs.isInRange(5)).toEqual(false);
            expect(funcs.isInRange(125)).toEqual(false);

        })


    });

    describe('the is Integer function', () => {
        it('should return true if an integer', () => {
            expect(funcs.isInteger(7)).toBe(true);
            expect(funcs.isInteger(17)).toBe(true);
        });

        it('should return false if  not an integer', () => {
            expect(funcs.isInteger(17.5)).toBe(false);
            expect(funcs.isInteger(2.222111111111111111)).toBe(false);           
        });


    });
    describe('the fizz buzz function', () => {
        it('should return the correct string', () => {
            expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
            expect(funcs.fizzBuzz(3)).toBe('fizz');
            expect(funcs.fizzBuzz(5)).toEqual('buzz');

        });


    });
    describe('the prime function', () => {
        it('should return true for any prinme number', () => {
            expect(funcs.isPrime(5)).toBe(true);
        });

        it('should return false for any non-prime number', () => {
            expect(funcs.isPrime(0)).toBe(false);
            expect(funcs.isPrime(-5)).toBe(false);
            expect(funcs.isPrime(1)).toBe(false);
        });


    });
    describe('', () => {});
    // describe('', () => {});
    // describe('', () => {});
    // describe('', () => {});
    // describe('', () => {});
    // describe('', () => {

    // });

    // describe('', () => {

    // });

    // describe('', () => {

    // });

    // describe('', () => {

    // });

    // describe('', () => {

    // });

    // describe('', () => {

    // });

});
