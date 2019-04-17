const helpers = require('./project-1');

// start testing!
describe('Project 1 Assessment', () => {
    it('runs the tests', () => {
        expect(true).toBe(true);
    })

    describe('Multiple by Ten', () => {
        it('should multiple the number passed by ten.', () => {
            expect(helpers.multiplyByTen(1)).toBe(10);
            expect(helpers.multiplyByTen(0)).toBe(0);
        })
    })

    describe('Subtract 5', () => {
        it('should subtract 5 from the number passed.', () => {
            expect(helpers.subtractFive(5)).toBe(0);
            expect(helpers.subtractFive(10)).toBe(5);
        })
    })

    describe('Are Same Length', () => {
        it('should return true if lengths of 2 strings are the same.', () => {
            expect(helpers.areSameLength('abc', 'dcf')).toBe(true);
            expect(helpers.areSameLength('1234', 'dcff')).toBe(true);
            expect(helpers.areSameLength('', '')).toBe(true);
        })

        it('should return false if lengths of 2 strings are different.', () => {
            expect(helpers.areSameLength('abc', 'dcfa')).toBe(false);
            expect(helpers.areSameLength('12345', 'dcff')).toBe(false);
            expect(helpers.areSameLength('', 'a')).toBe(false);
        })
    })

    describe('Are Equal', () => {
        it('should return true if 2 values are equal.', () => {
            expect(helpers.areEqual('abc', 'abc')).toBe(true);
            expect(helpers.areEqual(5, 5)).toBe(true);
        })

        it('should return false if 2 values are not equal.', () => {
            expect(helpers.areEqual('abc', 'abcd')).toBe(false);
            expect(helpers.areEqual(4, 5)).toBe(false);
        })
    })

    describe('Less Than 90', () => {
        it('should return true if number is less than 90.', () => {
            expect(helpers.lessThanNinety(10)).toBe(true);
            expect(helpers.lessThanNinety(20)).toBe(true);
        })

        it('should return false if number is greater than 90.', () => {
            expect(helpers.lessThanNinety(91)).toBe(false);
            expect(helpers.lessThanNinety(100)).toBe(false);
        })
    })

    describe('Greater Than 50', () => {
        it('should return false if number is less than 50.', () => {
            expect(helpers.greaterThanFifty(10)).toBe(false);
            expect(helpers.greaterThanFifty(20)).toBe(false);
        })

        it('should return true if number is greater than 50.', () => {
            expect(helpers.greaterThanFifty(91)).toBe(true);
            expect(helpers.greaterThanFifty(100)).toBe(true);
        })
    })

    describe('Add', () => {
        it('should return the sum of 2 numbers.', () => {
            expect(helpers.add(1,2)).toBe(3);
            expect(helpers.add(-1,2)).toBe(1);
            expect(helpers.add(-1,-1)).toBe(-2);
        })
    })

    describe('Subtract', () => {
        it('should return the different of 2 numbers.', () => {
            expect(helpers.subtract(1,2)).toBe(-1);
            expect(helpers.subtract(-1,2)).toBe(-3);
            expect(helpers.subtract(-1,-1)).toBe(0);
        })
    })

    describe('Multiply', () => {
        it('should return the product of 2 numbers.', () => {
            expect(helpers.multiply(1,2)).toBe(2);
            expect(helpers.multiply(-2,3)).toBe(-6);
            expect(helpers.multiply(-3,-10)).toBe(30);
        })
    })

    describe('Divide', () => {
        it('should return the quotient of 2 numbers.', () => {
            expect(helpers.divide(1,2)).toBe(0.5);
            expect(helpers.divide(-10,2)).toBe(-5);
            expect(helpers.divide(6,2)).toBe(3);
        })
    }) 

    describe('Get Remainder', () => {
        it('should return the the remainder of 2 numbers.', () => {
            expect(helpers.getRemainder(17, 5)).toBe(2);
            expect(helpers.getRemainder(-5, 20)).toBe(-5);
            expect(helpers.getRemainder(10, 8)).toBe(2);
        })
    })

    describe('Is Even', () => {
        it('should return true if number is even.', () => {
            expect(helpers.isEven(10)).toBe(true);
            expect(helpers.isEven(20)).toBe(true);
        })

        it('should return false if number is odd.', () => {
            expect(helpers.isEven(91)).toBe(false);
            expect(helpers.isEven(101)).toBe(false);
        })
    })

    describe('Is Odd', () => {
        it('should return true if number is odd.', () => {
            expect(helpers.isOdd(11)).toBe(true);
            expect(helpers.isOdd(21)).toBe(true);
        })

        it('should return false if number is even.', () => {
            expect(helpers.isOdd(90)).toBe(false);
            expect(helpers.isOdd(100)).toBe(false);
        })
    })

    describe('Square', () => {
        it('should return the square of number passed.', () => {
            expect(helpers.square(11)).toBe(121);
            expect(helpers.square(5)).toBe(25);
        })
    })

    describe('Cube', () => {
        it('should return the cube of number passed.', () => {
            expect(helpers.cube(3)).toBe(27);
            expect(helpers.cube(5)).toBe(125);
        })
    })

    describe('Raise To Power', () => {
        it('should return the based number to the exponent power.', () => {
            expect(helpers.raiseToPower(3,2)).toBe(9);
            expect(helpers.raiseToPower(5,2)).toBe(25);
        })
    })

    describe('Round Number', () => {
        it('should return the number passed in, rounded to the nearest integer.', () => {
            expect(helpers.roundNumber(3.2)).toBe(3);
            expect(helpers.roundNumber(5.6)).toBe(6);
        })
    })

    describe('Round Up', () => {
        it('should return the number passed in, rounded up to the nearest integer.', () => {
            expect(helpers.roundUp(3.2)).toBe(4);
            expect(helpers.roundUp(5.6)).toBe(6);
        })
    })

    describe('Add Exclaimation Point', () => {
        it('should return the string passed in with an exclaimation at the end.', () => {
            expect(helpers.addExclamationPoint('test')).toBe('test!');
            expect(helpers.addExclamationPoint('')).toBe('!');
        })
    })

    describe('Combine Names', () => {
        it('should return the concatenation of the names passed.', () => {
            expect(helpers.combineNames('John', 'Doe')).toBe('John Doe');
            expect(helpers.combineNames('Jean', 'Doe')).toBe('Jean Doe');
        })
    })
})