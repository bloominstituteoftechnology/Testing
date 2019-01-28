const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// describe('the functions in the `project-2.js` file', () => {

    describe('the getBiggest function', () => {
        it('should retrun the Biggest of the 2 integers given.', () => {
            expect(funcs.getBiggest(1100, 120)).toBeDefined();
            expect(funcs.getBiggest(1100, 120)).toBeTruthy();

            expect(funcs.getBiggest(1100, 120)).not.toBeNull();
            expect(funcs.getBiggest(1100, 120)).toEqual(1100);
        });
    });

    describe('the `greeting` function', () => {
        describe('the greeting function', () => {
            expect(funcs.greeting('German')).toEqual('Guten Tag!');
            expect(funcs.greeting('Spanish')).toEqual('Hola!');
            expect(funcs.greeting('')).toEqual('Hello!');
            expect(funcs.greeting(' ')).toEqual('Hello!');
        });
    });


    describe('the is Ten or Five function', () => {
        expect(funcs.isTenOrFive(5)).toBe(true);
        expect(funcs.isTenOrFive(10)).toBe(true);
        expect(funcs.isTenOrFive(7)).toBe(false);
        expect(funcs.isTenOrFive(3)).toBe(false);
        expect(funcs.isTenOrFive('7')).toBe(false);
        expect(funcs.isTenOrFive(13)).toBe(false);

        
    });
    describe('the is in Range function', () => {
        expect(funcs.isInRange(25)).toEqual(true);

        expect(funcs.isInRange(5)).toEqual(false);
        expect(funcs.isInRange(125)).toEqual(false);

    });

    describe('the is Integer function', () => {
        expect(funcs.isInteger(7)).toBe(true);
        expect(funcs.isInteger(17)).toBe(true);

        expect(funcs.isInteger(17.5)).toBe(false);
        expect(funcs.isInteger(2.222111111111111111)).toBe(false);

    });
    describe('the fizz buzz function', () => {
        expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
        expect(funcs.fizzBuzz(3)).toBe('fizz');
        expect(funcs.fizzBuzz(5)).toEqual('buzz');


    });
    describe('the is prime function', () => {
        
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

// });
