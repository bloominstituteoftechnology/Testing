const helpers = require('./project-1');

describe('multiplyByTen()', ()=> {
    it('should multiply given number by 10', () => {
        const expected = 100;
        const actual = helpers.multiplyByTen(10);
        expect(actual).toEqual(expected);
    });
    
    //test for undefined
    
    it('should return 0 when called with no value', () =>{
        const product = helpers.multiplyByTen();
        expect(product).toBe(0);
    });
    
    //test for string
    
    it('should throw error when called with a string', () => {
        expect(() => {
            helpers.multiplyByTen('five');
        }).toThrow();
    });
    
    });

    describe('subtractFive()', () => {
        it('should subtract five from the given number', () => {
            const actual = helpers.subtractFive(75);
            expect(actual).toEqual(70);
        });

        it('should return NaN when called with a string', () => {
            const actual = helpers.subtractFive();
            expect(actual).toBe(NaN);
        });
    });

    describe('areSameLength()', ()=> {
        it('should return true if strings are same length', ()=> {
            const actual = helpers.areSameLength('hello', 'howdy');
            expect(actual).toBeTruthy();
        });

        it('should return false if strings are not same length', ()=> {
            const actual = helpers.areSameLength('good morning', 'sup');
            expect(actual).toBeFalsy();
        });
    });

    describe('areEqual()', ()=> {
        it('should return true if values are equal', ()=> {
            const actual = helpers.areEqual(5, 5);
            expect(actual).toBeTruthy();
        });

        it('should return false if values are not equal', ()=> {
            const actual = helpers.areEqual(5, -5);
            expect(actual).toBeFalsy();
        });
    });

    describe('lessThanNinety()', ()=> {
        it('should return true if number is less than 90', ()=> {
            const actual = helpers.lessThanNinety(3);
            expect(actual).toBeTruthy();
        });

        it('should return false if number is greater than 90', ()=> {
            const actual = helpers.lessThanNinety(91);
            expect(actual).toBeFalsy();
        });

        it('should return false if number is equal to 90', ()=> {
            const actual = helpers.lessThanNinety(90);
            expect(actual).toBeFalsy();
        });
    });

    describe('greaterThanFifty()', ()=> {
        it('should return true if number is greater than 50', ()=> {
            const actual = helpers.greaterThanFifty(53);
            expect(actual).toBeTruthy();
        });

        it('should return false if number is less than 50', ()=> {
            const actual = helpers.greaterThanFifty(1);
            expect(actual).toBeFalsy();
        });

        it('should return false if number is equal to 50', ()=> {
            const actual = helpers.greaterThanFifty(50);
            expect(actual).toBeFalsy();
        });
    });

    describe('add()', ()=> {
        it('should return the sum of given numbers', ()=> {
            const actual = helpers.add(4, -12);
            expect(actual).toEqual(-8);
        });
    });

    describe('subtract()', ()=> {
        it('should return the difference of given numbers', ()=> {
            const actual = helpers.subtract(4, 12);
            expect(actual).toEqual(-8);
        });
    });

    describe('multiply()', ()=> {
        it('should return the product of given numbers', ()=> {
            const actual = helpers.multiply(4, 12);
            expect(actual).toEqual(48);
        });
    });

    describe('divide()', ()=> {
        it('should return the quotient of given numbers', ()=> {
            const actual = helpers.divide(12, 4);
            expect(actual).toEqual(3);
        });
    });

    describe('getRemainder()', ()=> {
        it('should return the remainder of division of given numbers', ()=> {
            const actual = helpers.getRemainder(57, 8);
            expect(actual).toEqual(1);
        });
        
        it('should return 0 if there is no remainder', ()=> {
            const actual = helpers.getRemainder(56, 8);
            expect(actual).toEqual(0);
        });
    });

    describe('isEven()', ()=> {
        it('should return true if the number is even', ()=> {
            const actual = helpers.isEven(4);
            expect(actual).toBeTruthy();
        });

        it('should return false if number is odd', ()=> {
            const actual = helpers.isEven(7);
            expect(actual).toBeFalsy();
        });
    });

    describe('isOdd()', ()=> {
        it('should return true if the number is odd', ()=> {
            const actual = helpers.isOdd(7);
            expect(actual).toBeTruthy();
        });

        it('should return false if number is even', ()=> {
            const actual = helpers.isOdd(4);
            expect(actual).toBeFalsy();
        });
    });

    describe('square()', ()=> {
        it('should return the product of multiplying given number by itself', ()=> {
            const actual = helpers.square(7);
            expect(actual).toEqual(49);
        });
    });

    describe('cube()', ()=> {
        it('should return the cube of a number', ()=> {
            const actual = helpers.cube(2);
            expect(actual).toEqual(8);
        });
    });

    describe('raiseToPower()', ()=> {
        it('should raise the number to the power of the exponent', ()=> {
            const actual = helpers.raiseToPower(2, 4);
            expect(actual).toEqual(16);
        });
    });

    describe('roundNumber()', ()=> {
        it('should round a number down to the nearest whole integer', ()=> {
            const actual = helpers.roundNumber(3.4);
            expect(actual).toBe(3);
        });

        it('should round a number up to the nearest whole integer', ()=> {
            const actual = helpers.roundNumber(3.9);
            expect(actual).toBe(4);
        });

        it('should round float of x.5 up to the nearest whole integer', ()=> {
            const actual = helpers.roundNumber(3.5);
            expect(actual).toBe(4);
        });
    });

    describe('roundUp()', ()=> {
        it('should round a number up to the nearest whole integer', ()=> {
            const actual = helpers.roundNumber(3.9);
            expect(actual).toBe(4);
        });

        it('should round up to the nearest whole integer', ()=> {
            const actual = helpers.roundNumber(3.5);
            expect(actual).toBe(4);
        });
    });

    describe('addExclamationPoint()', ()=> {
        it('should add an exclamation point to the end of the string', ()=> {
            const actual = helpers.addExclamationPoint('hello');
            expect(actual).toBe('hello!');
        });
    });

    describe('combineNames()', ()=> {
        it('should combine two names', ()=> {
            const actual = helpers.combineNames('Alexandra', 'Swartz');
            expect(actual).toBe('Alexandra Swartz');
        });

        it('should return McNoName in place of undefined last name', ()=> {
            const actual = helpers.combineNames('Alexandra');
            expect(actual).toBe('Alexandra McNoName');
        });
    });

    describe('getGreeting()', ()=> {
        it('should return Hello and given name', ()=> {
            const actual = helpers.getGreeting('Alexandra');
            expect(actual).toBe('Hello Alexandra!');
        });

        it('should return hello you if name is not defined', ()=> {
            const actual = helpers.getGreeting();
            expect(actual).toBe('Hello you!');
        });
    });
    
    describe('getRectangleArea()', ()=> {
        it('should return the product of length and width', ()=> {
            const actual = helpers.getRectangleArea(3, 5);
            expect(actual).toEqual(15);
        });

        it('should return message Rectangles need a length and a width if only one value given', ()=> {
            const actual = helpers.getRectangleArea(3);
            expect(actual).toBe('Rectangles need a length and a width');
        });
    });

    describe('getTriangleArea()', ()=> {
        it('should return the product of base and height times .5', ()=> {
            const actual = helpers.getTriangleArea(3, 5);
            expect(actual).toEqual(7.5);
        });

        it('should return message Triangles need a base and a height if only one value given', ()=> {
            const actual = helpers.getTriangleArea(3);
            expect(actual).toBe('Triangles need a base and a height');
        });
    });

    describe('getCircleArea()', ()=> {
        it('should return the product of radius squared times pi rounded to nearest integer', ()=> {
            const actual = helpers.getCircleArea(6);
            expect(actual).toEqual(113);
        });

        it('should return message Circles need a radius if one is not given', ()=> {
            const actual = helpers.getCircleArea();
            expect(actual).toBe('Circles need a radius');
        });
    });

    describe('getRectangularPrismVolume()', ()=> {
        it('should return the product of height times length times width', ()=> {
            const actual = helpers.getRectangularPrismVolume(2, 3, 4);
            expect(actual).toEqual(24);
        });

        it('should return message Prisms need a width, height, and length if one is not given', ()=> {
            const actual = helpers.getRectangularPrismVolume();
            expect(actual).toBe('Prisms need a width, height, and length');
        });
    });

// start testing!
