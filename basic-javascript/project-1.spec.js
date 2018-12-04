const helpers = require('./project-1');

// start testing!

test('should run tests', () => {});


describe('project-1.js', () => {

    describe('multiplyByTen', () => {
	    it('should multiply number by 10', () => {
	        const expected = 100;
	        const actual = helpers.multiplyByTen(10);
	        expect(actual).toEqual(expected);
	    });
    });

    describe('subtractFive', () => {
        it('should subtract a number by five', () => {
            const expected = 5;
            const actual = helpers.subtractFive(10);
            expect(actual).toEqual(expected);
        });
    });

    describe('areSameLength', () => {
        it('should be same length', () => {
            const expected = true;
            const actual = helpers.areSameLength('hello', 'three');
            expect(actual).toEqual(expected);
        });
    });

    describe('areEqual', () => {
        it('should be equal', () => {
            const expected = true;
            const actual = helpers.areEqual(4, 4);
            expect(actual).toEqual(expected);
        });
    });

    describe('lessThanNinety', () => {
        it('should be less than ninety', () => {
            const expected = true;
            const actual = helpers.lessThanNinety(10);
            expect(actual).toEqual(expected);
        });
    });

    describe('greaterThanFifty', () => {
        it('should greater than fifty', () => {
            const expected = true;
            const actual = helpers.greaterThanFifty(51);
            expect(actual).toEqual(expected);
        });
    });

    describe('add', () => {
        it('should add', () => {
            const expected = 5;
            const actual = helpers.add(2, 3);
            expect(actual).toEqual(expected);
        });
    });

    describe('subtract', () => {
        it('should subtract', () => {
            const expected = 10;
            const actual = helpers.subtract(15, 5);
            expect(actual).toEqual(expected);
        });
    });

    describe('divide', () => {
        it('should divide', () => {
            const expected = 2;
            const actual = helpers.divide(6, 3);
            expect(actual).toEqual(expected);
        });
    });

    describe('multiply', () => {
        it('should multiply', () => {
            const expected = 20;
            const actual = helpers.multiply(10, 2);
            expect(actual).toEqual(expected);
        });
    });

    describe('getRemainder', () => {
        it('should get a remainder', () => {
            const expected = 5;
            const actual = helpers.getRemainder(5, 10);
            expect(actual).toEqual(expected);
        });
    });

    describe('isEven', () => {
        it('should be even', () => {
            const expected = true;
            const actual = helpers.isEven(2);
            expect(actual).toEqual(expected);
        });
    });

    describe('isOdd', () => {
        it('should be odd', () => {
            const expected = true;
            const actual = helpers.isOdd(1);
            expect(actual).toEqual(expected);
        });
    });

    describe('square', () => {
        it('should squared', () => {
            const expected = 16;
            const actual = helpers.square(4);
            expect(actual).toEqual(expected);
        });
    });

    describe('cude', () => {
        it('should cubed', () => {
            const expected = 8;
            const actual = helpers.cube(2);
            expect(actual).toEqual(expected);
        });
    });

    describe('raiseToPower', () => {
        it('should raise a number to a power of another number', () => {
            const expected = 100;
            const actual = helpers.raiseToPower(10, 2);
            expect(actual).toEqual(expected);
        });
    });
    
    describe('roundNumber', () => {
        it('should round to a whole number', () => {
            const expected = 5;
            const actual = helpers.roundNumber(4.7);
            expect(actual).toEqual(expected);
        });
    });

    describe('roundUp', () => {
        it('should round up to the nearest whole number', () => {
            const expected = 5;
            const actual = helpers.roundUp(4.1);
            expect(actual).toEqual(expected);
        });
    });

    describe('addExclamationPoint', () => {
        it('should add an exclamation point', () => {
            const expected = 'hello!';
            const actual = helpers.addExclamationPoint('hello');
            expect(actual).toEqual(expected);
        });
    });

    describe('combineNames', () => {
        it('should combine names', () => {
            const expected = 'steven oneill';
            const actual = helpers.combineNames('steven', 'oneill');
            expect(actual).toEqual(expected);
        });
    });

    describe('getGreeting', () => {
        it('should give you a greeting', () => {
            const expected = 'Hello steven!';
            const actual = helpers.getGreeting('steven');
            expect(actual).toEqual(expected);
        });
    });

    describe('getRectangleArea', () => {
        it('should be equal to length * width', () => {
            const expected = 6;
            const actual = helpers.getRectangleArea(2, 3);
            expect(actual).toEqual(expected);
        });
    });

    describe('getTriangleArea', () => {
        it('should be equal to 0.5 * base * height', () => {
            const expected = 5;
            const actual = helpers.getTriangleArea(2, 5);
            expect(actual).toEqual(expected);
        });
    });

    describe('getCircleArea', () => {
        it('should be equal to pi * radius * radius', () => {
            const expected = 12.566370614359172953850573533118;
            const actual = helpers.getCircleArea(2);
            expect(actual).toEqual(expected);
        });
    });

    describe('getRectangularPrismVolume', () => {
        it('should be equal to width * height * length', () => {
            const expected = 50;
            const actual = helpers.getRectangularPrismVolume(5, 2, 5);
            expect(actual).toEqual(expected);
        });
    });
});