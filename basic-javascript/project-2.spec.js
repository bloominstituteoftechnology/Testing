const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('Project 2', () => {
    describe('getBiggest', () => {
        it('should return the larger number', () => {
            // arrange
            const getBiggest = funcs.getBiggest;

            // act
            const actual = getBiggest(2, 9);
            const actual2 = getBiggest(23, 9);
            const actual3 = getBiggest(2, 2);                        

            // assert
            expect(actual).toBe(9);
            expect(actual2).toBe(23);
            expect(actual3).toBe(2);                        
        });
    });

    describe('greeting', () => {
        it('should return a greeting', () => {
            // arrange
            const greeting = funcs.greeting;

            // act
            const actual = greeting('German');
            const actual2 = greeting('Spanish');
            const actual3 = greeting('hey there!');

            // assert
            expect(actual).toBe('Guten Tag!');
            expect(actual2).toBe('Hola!');
            expect(actual3).toBe('Hello!');
        });
    });

    describe('isTenOrFive', () => {
        it('should return a boolean', () => {
            // arrange
            const isTenOrFive = funcs.isTenOrFive;

            // act
            const actual = isTenOrFive(5);
            const actual2 = isTenOrFive(10);
            const actual3 = isTenOrFive(34);

            // assert
            expect(actual).toBeTruthy();
            expect(actual2).toBeTruthy();
            expect(actual3).toBeFalsy();
        });
    });

    describe('isInRange', () => {
        it('should return a boolean', () => {
            // arrange
            const isInRange = funcs.isInRange;

            // act
            const actual = isInRange(5);
            const actual2 = isInRange(30);
            const actual3 = isInRange(50);

            // assert
            expect(actual).toBeFalsy();
            expect(actual2).toBeTruthy();
            expect(actual3).toBeFalsy();
        });
    });
})