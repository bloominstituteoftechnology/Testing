const helpers = require('./project-1');

// start testing!

describe('project-1.js', () => {

    describe('multiplyByTen()', () => {

        it('should multiply provided number by ten', () => {
            
            const expected = 100;
            
            const actual = helpers.multiplyByTen(10);
            
            expect(actual).toEqual(expected);
        });
        
    })

    describe('subtractFive()', () => {

        it('should subtract provided number by five', () => {
            const expected = 95;
            
            const actual = helpers.subtractFive(100);
            
            expect(actual).toEqual(expected);
        });
    })
    describe('areSameLength()', () => {

        it('should return true of both strings are the same length', () => {
            const expected = true;
            
            const actual = helpers.areSameLength('hello', 'teach');
            
            expect(actual).toEqual(expected);
        });
    })

    describe('areEqual()', () => {

        it('should return true if both variables are deep equal', () => {
            const expected = true;
            const a = 'test123';
            const b = 'test123';
            const actual = helpers.areEqual(a, b);

            expect(actual).toEqual(expected);
        });
    })

    describe('lessThanNinety()', () => {

        it('should return true if number less than 90', () => {
            const expected = true;

            const actual = helpers.lessThanNinety(85);

            expect(actual).toEqual(expected);
        });
        it('should return false if number greater than 90', () => {
            const expected = false;

            const actual = helpers.lessThanNinety(95);

            expect(actual).toEqual(expected);
        });
    })

    describe('greaterThanFifty()', () => {

        it('should return true if number greater than 50', () => {
            const expected = true;

            const actual = helpers.greaterThanFifty(55);

            expect(actual).toEqual(expected);
        });
    })

    describe('add()', () => {

        it('should add together two values', () => {
            const expected = 4;

            const actual = helpers.add(2, 2);

            expect(actual).toEqual(expected);
        })
    })

    describe('subtract()', () => {

        it('should subtract the second value from the first', () => {
            const expected = 3;

            const actual = helpers.subtract(10, 7);

            expect(actual).toEqual(expected);
        })
    })

    describe('divide()', () => {

        it('should divide the first value by the second value', () => {
            const expected = 2;

            const actual = helpers.divide(10, 5);

            expect(actual).toEqual(expected);
        })
    })

    describe('multiply()', () => {

        it('should find the product of two values', () => {
            const expected = 100;

            const actual = helpers.multiply(50, 2);

            expect(actual).toEqual(expected);
        })
    })

    describe('getRemainder()', () => {

        it('should find the remainder of a quotient', () => {
            const expected = 1;

            const actual = helpers.getRemainder(10, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('isEven()', () => {

        it('should return true if number is even', () => {
            const expected = true;

            const actual = helpers.isEven(100);

            expect(actual).toEqual(expected);
        })
    })

    describe('isOdd()', () => {

        it('should return true if number is odd', () => {
            const expected = true;
            
            const actual = helpers.isOdd(99);

            expect(actual).toEqual(expected);
        })
    })

    describe('square()', () => {

        it('should return product of entered number multiplied by itself', () => {
            const expected = 144;

            const actual = helpers.square(12);

            expect(actual).toEqual(expected);
        })
    })

    describe('cube()', () => {

        it('should return cubic value (num^3) of entered value', () => {
            const expected = 27;

            const actual = helpers.cube(3);

            expect(actual).toEqual(expected);
        })
    })

    describe('raiseToPower()', () => {

        it('should raise first value to the power of second value', () => {
            const expected = 125;

            const actual = helpers.raiseToPower(5, 3);

            expect(actual).toEqual(expected);
        })
    })

    describe('roundNumber()', () => {

        it('should round value to the nearest integer', () => {
            const expected = 5;

            const actual = helpers.roundNumber(5.3);

            expect(actual).toEqual(expected);
        })
    })

    describe('roundUp()', () => {

        it('should round value up to the next integer', () => {
            const expected = 5;

            const actual = helpers.roundUp(4.1);

            expect(actual).toEqual(expected);
        })
    })

    describe('addExclamationPoint()', () => {

        it('should add a "!" at the end of a given string', () => {
            const expected = 'hello!';

            const actual = helpers.addExclamationPoint('hello');

            expect(actual).toEqual(expected);
        })
    })

    describe('combineNames()', () => {

        it('should combine two strings into a single string', () => {
            const expected = 'Michael Hacker';

            const actual = helpers.combineNames('Michael', 'Hacker');

            expect(actual).toEqual(expected);
        })
    })

    describe('getGreeting()', () => {

        it('should add "hello " to the front of a string and "!" to the end of it', () => {
            const expected = 'Hello Michael!';

            const actual = helpers.getGreeting('Michael');

            expect(actual).toEqual(expected);
        })
    })

    describe('getRectangleArea()', () => {

        it('should multiply two numbers together to return a product (L x W = area)', () => {
            const expected = 20;

            const actual = helpers.getRectangleArea(5, 4);

            expect(actual).toEqual(expected);
        })
    })

    describe('getTriangleArea()', () => {

        it('should multiply two given numbers and 0.5', () => {
            const expected = 25;

            const actual = helpers.getTriangleArea(10, 5);

            expect(actual).toEqual(expected);
        })
    })

    describe('getCircleArea()', () => {

        it('should multiply PI by given radius^2', () => {
            const expected = 28;

            const actual = Math.round(helpers.getCircleArea(3, 3));

            expect(actual).toEqual(expected);
        })
    })

    describe('getRectangularPrismVolume()', () => {

        it('should 3 values together (L x W x H)', () => {
            const expected = 60;

            const actual = helpers.getRectangularPrismVolume(3, 4, 5);

            expect(actual).toEqual(expected);
        })
    })
    
    
});