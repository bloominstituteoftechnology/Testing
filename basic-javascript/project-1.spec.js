const helpers = require('./project-1');

// start testing!


describe('testing project-1.js', () => {

    describe('multiplyByTen', () => {
        it('should multiply input by 10', () => {
            const expected = 50;
            const actual = helpers.multiplyByTen(5);
            expect(actual).toEqual(expected);
        })
    })

    describe('subtractFive', () => {
        it('should subtract five', () => {
            const expected = 5;
            const actual = helpers.subtractFive(10);
            expect(actual).toEqual(expected);
        })
    })

    describe('areSameLength', () => {
        it('should ensure string lengths are equal', () => {
            // const expected = true;
            const actual = helpers.areSameLength('book', 'hola');
            expect(actual).toBe(true);
        })

        it('should return false when strings of different lengths are input', () => {
            const actual = helpers.areSameLength('cup', 'bowl');
            expect(actual).toBe(false);
        })
    })

    describe('areEqual', () => {
        it('should ensure values are equal', () => {
            // const expected = true;
            const actual = helpers.areEqual(5, 5);
            expect(actual).toBe(true);
        })
    })

    describe('lessThanNinety', () => {
        it('should ensure input is less than 90', () => {
        const expected = true;
        const actual = helpers.lessThanNinety(30);
        expect(actual).toEqual(expected); 
        })
    })

    describe('greaterThanFifty', () => {
        it('should ensure input is greater than 50', () => {
            const expected = true;
            const actual = helpers.greaterThanFifty(55);
            expect(actual).toEqual(expected);
        })
    })

    describe('add', () => {
        it('should add two inputs', () => {
            const expected = 10;
            const actual = helpers.add(5, 5);
            expect(actual).toEqual(expected);
        })
    })

    describe('subtract', () => {
        it('should subtract y from x', () => {
            const expected = 5;
            const actual = helpers.subtract(10, 5);
            expect(actual).toEqual(expected);
        })
    })

    describe('divide', () => {
        it('should divide x by y', () => {
            const expected = 2;
            const actual = helpers.divide(10, 5);
            expect(actual).toEqual(expected);
        })
    })

    describe('multiply', () => {
        it('should multiply x by y', () => {
            const expected = 10;
            const actual = helpers.multiply(2, 5);
            expect(actual).toEqual(expected);
        })
    })

    describe('getRemainder', () => {
        it('should give the remainder x % y', () => {
            const expected = 1;
            const actual = helpers.getRemainder(4, 3);
            expect(actual).toEqual(expected);
        })
    })

    describe('isEven', () => {
        it('should verify an input is even', () => {
            const expected = true;
            const actual = helpers.isEven(6);
            expect(actual).toEqual(expected);
        })

        it('should return false if the input is odd', () => {
            const actual = helpers.isEven(5);
            expect(actual).toBe(false);
        })
    })

    describe('isOdd', () => {
        it('should verify an input is odd', () => {
            const expected = true;
            const actual = helpers.isOdd(5);
            expect(actual).toEqual(expected);
        })

        it('should return false if an input is even', () => {
            const actual = helpers.isOdd(4);
            expect(actual).toBe(false);
        })
    })

    describe('square', () => {
        it('should multiply a number by itself', () => {
            const expected = 25;
            const actual = helpers.square(5);
            expect(actual).toEqual(expected);
        })
    })

    describe('cube', () => {
        it('should cube a number', () => {
            const expected = 8;
            const actual = helpers.cube(2);
            expect(actual).toEqual(expected);
        })
    })

    describe('raiseToPower', () => {
        it('should raise num to the power of an exponent', () => {
            const expected = 8;
            const actual = helpers.raiseToPower(2, 3);
            expect(actual).toEqual(expected);
        })
    })

    describe('roundNumber', () => {
        it('should round a number to the closest whole number', () => {
            const expected = 5;
            const actual = helpers.roundNumber(4.8);
            expect(actual).toEqual(expected);
        })
    })

    describe('roundUp', () => {
        it('should round a number to the whole number above it', () => {
            const expected = 5;
            const actual = helpers.roundUp(4.2);
            expect(actual).toEqual(expected);
        })
    })

    describe('addExclamationPoint', () => {
        it('should add an exclaimation point to a string', () => {
        const expected = 'Surprise!'
        const actual = helpers.addExclamationPoint('Surprise');
        expect(actual).toEqual(expected); 
        })
        
    })

    describe('combineNames', () => {
        it('should merge two strings with a space between them', () => {
            const expected = 'Leslie Knope';
            const actual = helpers.combineNames('Leslie', 'Knope');
            expect(actual).toEqual(expected);
        })
    })

    describe('getGreeting', () => {
        it('should preface an input with Hello', () => {
            const expected = 'Hello Katy!';
            const actual = helpers.getGreeting('Katy');
            expect(actual).toEqual(expected);
        })
    })

    describe('getRectangleArea', () => {
        it('should multiply x by y', () => {
            const expected = 20;
            const actual = helpers.getRectangleArea(4, 5);
            expect(actual).toEqual(expected);
        })
    })

    describe('getTriangleArea', () => {
        it('should return the area given base and height', () => {
            const expected = 12;
            const actual = helpers.getTriangleArea(4, 6);
            expect(actual).toEqual(expected);
        })
    })

    describe('getCircleArea', () => {
        it('should return the circle area given the radius', () => {
            const expected  = (Math.PI * 5 * 5);
            const actual = helpers.getCircleArea(5);
            expect(actual).toEqual(expected);
        })
    })

    describe('getRectangularPrismVolume', () => {
        it('should return the volume of a rectangular prism', () => {
            const expected = 120;
            const actual = helpers.getRectangularPrismVolume(4, 5, 6);
            expect(actual).toEqual(expected);
        })
    })
})