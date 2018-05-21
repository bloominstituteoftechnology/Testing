const funcs = require('./project-1');

// write your tests here
describe('Project 1', () => {
    describe('multiplyByTen', () => {
        it('should multiply a number by ten', () => {
            // arrange
            const expected = 50;
            const multiplyByTen = funcs.multiplyByTen;

            // act
            const actual = multiplyByTen(5);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('subtractFive', () => {
        it('should subtract a number by five', () => {
            // arrange
            const expected = 0;
            const subtractFive = funcs.subtractFive;

            // act
            const actual = subtractFive(5);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('areSameLength', () => {
        it('should return a boolean value', () => {
            // arrange
            const areSameLength = funcs.areSameLength;

            // act
            const actual = areSameLength('are', 'cat');

            // assert
            expect(actual).toBeTruthy();
        });
    });

    describe('areEqual', () => {
        it('should return a boolean value', () => {
            // arrange
            const areEqual = funcs.areEqual;

            // act
            const actual = areEqual(3, 3);

            // assert
            expect(actual).toBeTruthy();
        });
    });

    describe('lessThanNinety', () => {
        it('should return a boolean value', () => {
            // arrange
            const lessThanNinety = funcs.lessThanNinety;

            // act
            const actual = lessThanNinety(30);
            const actual2 = lessThanNinety(300);            

            // assert
            expect(actual).toBeTruthy();
            expect(actual2).toBeFalsy();            
        });
    });

    describe('greaterThanFifty', () => {
        it('should return a boolean value', () => {
            // arrange
            const greaterThanFifty = funcs.greaterThanFifty;

            // act
            const actual = greaterThanFifty(30);
            const actual2 = greaterThanFifty(300);

            // assert
            expect(actual).toBeFalsy();
            expect(actual2).toBeTruthy();
        });
    });

    describe('add', () => {
        it('should add two numbers', () => {
            // arrange
            const expected = 8;
            const add = funcs.add;

            // act
            const actual = add(3, 5);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('subtract', () => {
        it('should subtract two numbers', () => {
            // arrange
            const expected = -2;
            const subtract = funcs.subtract;

            // act
            const actual = subtract(3, 5);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('divide', () => {
        it('should divide two numbers', () => {
            // arrange
            const expected = 2;
            const divide = funcs.divide;

            // act
            const actual = divide(10, 5);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('multiply', () => {
        it('should multiply two numbers', () => {
            // arrange
            const expected = 50;
            const multiply = funcs.multiply;

            // act
            const actual = multiply(10, 5);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('getRemainder', () => {
        it('should return the remainder of a division', () => {
            // arrange
            const expected = 4;
            const getRemainder = funcs.getRemainder;

            // act
            const actual = getRemainder(9, 5);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('isEven', () => {
        it('should return a boolean value', () => {
            // arrange
            const isEven = funcs.isEven;

            // act
            const actual = isEven(2);
            const actual2 = isEven(9);

            // assert
            expect(actual).toBeTruthy();
            expect(actual2).toBeFalsy();
        });
    });

    describe('isOdd', () => {
        it('should return a boolean value', () => {
            // arrange
            const isOdd = funcs.isOdd;

            // act
            const actual = isOdd(9);
            const actual2 = isOdd(2);

            // assert
            expect(actual).toBeTruthy();
            expect(actual2).toBeFalsy();
        });
    });

    describe('square', () => {
        it('should square a number', () => {
            // arrange
            const expected = 100;
            const square = funcs.square;

            // act
            const actual = square(10);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('cube', () => {
        it('should cube a number', () => {
            // arrange
            const expected = 1000;
            const cube = funcs.cube;

            // act
            const actual = cube(10);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('raiseToPower', () => {
        it('should raise a number to the power of an exponent ', () => {
            // arrange
            const expected = 4;
            const raiseToPower = funcs.raiseToPower;

            // act
            const actual = raiseToPower(2, 2);

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('roundNumber', () => {
        it('should round a number', () => {
            // arrange
            const roundNumber = funcs.roundNumber;

            // act
            const actual = roundNumber(2.7);
            const actual2 = roundNumber(5.3);            

            // assert
            expect(actual).toBe(3);
            expect(actual2).toBe(5);            
        });
    });

    describe('roundUp', () => {
        it('should round up a number', () => {
            // arrange
            const roundUp = funcs.roundUp;

            // act
            const actual = roundUp(2.7);
            const actual2 = roundUp(5.3);

            // assert
            expect(actual).toBe(3);
            expect(actual2).toBe(6);
        });
    });

    describe('addExclamationPoint', () => {
        it('add an exclamation point to a string', () => {
            // arrange
            const expected = 'are you ready!';
            const addExclamationPoint = funcs.addExclamationPoint;

            // act
            const actual = addExclamationPoint('are you ready');

            // assert
            expect(actual).toBe(expected);
        });
    });

    describe('combineNames', () => {
        it('combines a first and last name to form a full name', () => {
            // arrange
            const expected = 'Nedu Robert';
            const combineNames = funcs.combineNames;

            // act
            const actual = combineNames('Nedu', 'Robert');

            // assert
            expect(actual).toBe(expected);
        });
    });
})