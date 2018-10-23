const helpers = require('./project-1');

// start testing!
describe('project-1.js', () => {
    const apple = 'apple';
    const guava = 'guava';
    const pear = 'pear';
    const number = 4;
    const number2 = 5;
    describe('multiplyByTen()', () => {
        it('Should multiply the number by 10.', () => {
            const actual = helpers.multiplyByTen(4);
            const expected = 40;
            expect(actual).toEqual(expected);
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.multiplyByTen();
            expect(actual).toThrow();
        });
        it('Should throw error when called with a string', () => {
            const actual = () => helpers.multiplyByTen('25');
            expect(actual).toThrow();
        });
    });
    describe('subtractFive()', () => {
        it('Should subtract the number by 5.', () => {
            const actual = helpers.subtractFive(4);
            const expected = -1;
            expect(actual).toEqual(expected);
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.subtractFive();
            expect(actual).toThrow();
        });
        it('Should throw error when called with a string', () => {
            const actual = () => helpers.subtractFive('25');
            expect(actual).toThrow();
        });
    });
    describe('areSameLength()', () =>{
        it('Should return true if called with 2 strings of same lengths', () => {
            const actual = helpers.areSameLength(apple, guava);
            const expected = true;
            expect(actual).toBe(expected);
        });
        it('Should return false if called with 2 strings of differing lengths', () => {
            const actual = helpers.areSameLength(apple, pear);
            const expected = false;
            expect(actual).toBe(expected);
        });
        it('Should throw an error if called with no arguments.', () => {
            const actual = () => helpers.areSameLength();
            expect(actual).toThrow();
        });
        it('Should throw an error if called with one argument.', () => {
            const actual = () => helpers.areSameLength(apple);
            expect(actual).toThrow();
        });
        it('Should throw an error if called with numbers.', () => {
            const actual = () => helpers.areSameLength(number, number);
            expect(actual).toThrow();
        });
    });
    describe('areEqual()', () => {
        it('Should return true if equal.', () => {
            const actual = helpers.areEqual(number, 4);
            const expected = true;
            expect(actual).toBe(expected);
        });
        it('Should return false if the 2 arguments are not equal.', () => {
            const actual = helpers.areEqual(number, number2);
            const expected = false;
            expect(actual).toBe(expected);
        });
        it('Should throw an error if called with no arguments.', () => {
            const actual = () => helpers.areSameLength();
            expect(actual).toThrow();
        });
        it('Should throw an error if called with one argument.', () => {
            const actual = () => helpers.areSameLength(number);
            expect(actual).toThrow();
        });
        it('Should return true if same strings.', () => {
            const actual = helpers.areEqual(apple, 'apple');
            const expected = true;
            expect(actual).toBe(expected);
        });
        it('Should return false if the 2 strings are not equal.', () => {
            const actual = helpers.areEqual(apple, guava);
            const expected = false;
            expect(actual).toBe(expected);
        });
    });
    describe('lessThanNinety()', () => {
        it('Should return true if number is less than 90.', () => {
            const actual = helpers.lessThanNinety(number);
            const expected = true;
            expect(actual).toBe(expected);
        });
        it('Should return false if number is 90.', () => {
            const actual = helpers.lessThanNinety(90);
            const expected = false;
            expect(actual).toBe(expected);
        });
        it('Should throw an error if called with no arguments.', () => {
            const actual = () => helpers.lessThanNinety();
            expect(actual).toThrow();
        });
        it('Should throw error when called with a string', () => {
            const actual = () => helpers.lessThanNinety('25');
            expect(actual).toThrow();
        });
    });
    describe('greaterThanFifty()', () => {
        it('Should return true if number is than 50.', () => {
            const actual = helpers.greaterThanFifty(51);
            const expected = true;
            expect(actual).toBe(expected);
        });
        it('Should return false if number is 50.', () => {
            const actual = helpers.greaterThanFifty(50);
            const expected = false;
            expect(actual).toBe(expected);
        });
        it('Should throw an error if called with no arguments.', () => {
            const actual = () => helpers.greaterThanFifty();
            expect(actual).toThrow();
        });
        it('Should throw error when called with a string', () => {
            const actual = () => helpers.greaterThanFifty('25');
            expect(actual).toThrow();
        });
    });
    describe('add()', () => {
        it('Should add the number arguments.', () => {
            const actual = helpers.add(number, number2);
            const expected = 9;
            expect(actual).toEqual(expected);
        });
        it('Should add the string arguments.', () => {
            const actual = helpers.add(apple, guava);
            const expected = 'appleguava';
            expect(actual).toEqual(expected);
        });
        it('Should add the number and string arguments.', () => {
            const actual = helpers.add(apple, number);
            const expected = 'apple4';
            expect(actual).toEqual(expected);
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.add();
            expect(actual).toThrow();
        });
        it('Should throw error when called with only one argument.', () => {
            const actual = () => helpers.add('25');
            expect(actual).toThrow();
        });
    });
    describe('subtract()', () => {
        it('Should subtract the number arguments.', () => {
            const actual = helpers.subtract(number, number2);
            const expected = -1;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.subtract(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.subtract();
            expect(actual).toThrow();
        });
        it('Should throw error when called with only one argument.', () => {
            const actual = () => helpers.subtract('25');
            expect(actual).toThrow();
        });
    });
    describe('divide()', () => {
        it('Should divide the number arguments.', () => {
            const actual = helpers.divide(50, 2);
            const expected = 25;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.divide(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.divide();
            expect(actual).toThrow();
        });
        it('Should throw error when called with only one argument.', () => {
            const actual = () => helpers.divide('25');
            expect(actual).toThrow();
        });
    });
    describe('multiply()', () => {
        it('Should multiply the number arguments.', () => {
            const actual = helpers.multiply(50, 2);
            const expected = 100;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.multiply(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.multiply();
            expect(actual).toThrow();
        });
        it('Should throw error when called with only one argument.', () => {
            const actual = () => helpers.multiply('25');
            expect(actual).toThrow();
        });
    });
    describe('getRemainder()', () => {
        it('Should get the remainder of the number arguments.', () => {
            const actual = helpers.getRemainder(15, 4);
            const expected = 3;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.getRemainder(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.getRemainder();
            expect(actual).toThrow();
        });
        it('Should throw error when called with only one argument.', () => {
            const actual = () => helpers.getRemainder(4);
            expect(actual).toThrow();
        });
    });
    describe('isEven()', () => {
        it('Should return true if the number argument is even.', () => {
            const actual = helpers.isEven(4);
            const expected = true;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.isEven(apple);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.isEven();
            expect(actual).toThrow();
        });
        it('Should throw error when called with multiple arguments.', () => {
            const actual = () => helpers.isEven(4, 5);
            expect(actual).toThrow();
        });
    });
    describe('isOdd()', () => {
        it('Should return true if the number argument is odd.', () => {
            const actual = helpers.isOdd(5);
            const expected = true;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.isOdd(apple);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.isOdd();
            expect(actual).toThrow();
        });
        it('Should throw error when called with multiple arguments.', () => {
            const actual = () => helpers.isOdd(4, 5);
            expect(actual).toThrow();
        });
    });
    describe('square()', () => {
        it('Should square the number argument.', () => {
            const actual = helpers.square(5);
            const expected = 25;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.square(apple);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.square();
            expect(actual).toThrow();
        });
        it('Should throw error when called with multiple arguments.', () => {
            const actual = () => helpers.square(4, 5);
            expect(actual).toThrow();
        });
    });
        describe('cube()', () => {
            it('Should cube the number argument.', () => {
                const actual = helpers.cube(5);
                const expected = 125;
                expect(actual).toEqual(expected);
            });
            it('Should throw an error with string arguments.', () => {
                const actual = () => helpers.cube(apple);
                expect(actual).toThrow();
            });
            it('Should throw error when called with no value.', () => {
                const actual = () => helpers.cube();
                expect(actual).toThrow();
            });
            it('Should throw error when called with multiple arguments.', () => {
                const actual = () => helpers.cube(4, 5);
                expect(actual).toThrow();
            });
    });
    describe('raiseToPower()', () => {
        it('Should raise first argument to power of second.', () => {
            const actual = helpers.raiseToPower(2, 3);
            const expected = 8;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.raiseToPower(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.raiseToPower();
            expect(actual).toThrow();
        });
        it('Should throw error when called with only one argument.', () => {
            const actual = () => helpers.raiseToPower(4);
            expect(actual).toThrow();
        });
    });
    describe('roundNumber()', () => {
        it('Should round number.', () => {
            const actual = helpers.roundNumber(3.14);
            const expected = 3;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.roundNumber(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.roundNumber();
            expect(actual).toThrow();
        });
        it('Should throw error when called with multiple arguments.', () => {
            const actual = () => helpers.roundNumber(4, 5);
            expect(actual).toThrow();
        });
    });
    describe('roundUp()', () => {
        it('Should round up number.', () => {
            const actual = helpers.roundUp(3.14);
            const expected = 4;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.roundUp(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.roundUp();
            expect(actual).toThrow();
        });
        it('Should throw error when called with multiple arguments.', () => {
            const actual = () => helpers.roundUp(4, 5);
            expect(actual).toThrow();
        });
    });
    describe('addExclamationPoint()', () =>{
        it('Should add an ! to end of string.', () => {
            const actual = helpers.addExclamationPoint(apple);
            const expected = 'apple!';
            expect(actual).toBe(expected);
        });
        it('Should throw an error if called with no arguments.', () => {
            const actual = () => helpers.addExclamationPoint();
            expect(actual).toThrow();
        });
        it('Should throw an error if called with multiple arguments.', () => {
            const actual = () => helpers.addExclamationPoint(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw an error if called with a number.', () => {
            const actual = () => helpers.addExclamationPoint(number);
            expect(actual).toThrow();
        });
    });
    describe('combineNames()', () =>{
        it('Should combine 2 arguments into 1 string with space in between arguments.', () => {
            const actual = helpers.combineNames(apple, guava);
            const expected = 'apple guava';
            expect(actual).toBe(expected);
        });
        it('Should throw an error if called with no arguments.', () => {
            const actual = () => helpers.combineNames();
            expect(actual).toThrow();
        });
        it('Should throw an error if called with one argument.', () => {
            const actual = () => helpers.combineNames(apple);
            expect(actual).toThrow();
        });
        it('Should throw an error if called with numbers.', () => {
            const actual = () => helpers.combineNames(number, number);
            expect(actual).toThrow();
        });
    });
    describe('getGreeting()', () =>{
        it('Should return a greeting.', () => {
            const actual = helpers.getGreeting("Mark");
            const expected = 'Hello Mark!';
            expect(actual).toBe(expected);
        });
        it('Should throw an error if called with no arguments.', () => {
            const actual = () => helpers.getGreeting();
            expect(actual).toThrow();
        });
        it('Should throw an error if called with multiple arguments.', () => {
            const actual = () => helpers.getGreeting(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw an error if called with numbers.', () => {
            const actual = () => helpers.getGreeting(number, number);
            expect(actual).toThrow();
        });
    });
    describe('getRectangleArea()', () => {
        it('Should return area of rectangle as if the 2 arguments are the respective length and width.', () => {
            const actual = helpers.getRectangleArea(4, 5);
            const expected = 20;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.getRectangleArea(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.getRectangleArea();
            expect(actual).toThrow();
        });
        it('Should throw error when called with 1 argument.', () => {
            const actual = () => helpers.getRectangleArea(4);
            expect(actual).toThrow();
        });
    });
    describe('getTriangleArea()', () => {
        it('Should return area of triangle as if the 2 arguments are the respective base and height.', () => {
            const actual = helpers.getTriangleArea(4, 5);
            const expected = 10;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with string arguments.', () => {
            const actual = () => helpers.getTriangleArea(apple, guava);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.getTriangleArea();
            expect(actual).toThrow();
        });
        it('Should throw error when called with 1 argument.', () => {
            const actual = () => helpers.getTriangleArea(4);
            expect(actual).toThrow();
        });
    });
    describe('getCircleArea()', () => {
        it('Should return area of triangle as if the argument is the radius of a circle.', () => {
            const actual = helpers.getCircleArea(4);
            const expected = 50.2655;
            expect(actual).toBeCloseTo(expected);
        });
        it('Should throw an error with a string argument.', () => {
            const actual = () => helpers.getCircleArea(apple);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.getCircleArea();
            expect(actual).toThrow();
        });
        it('Should throw error when called with multiple arguments.', () => {
            const actual = () => helpers.getCircleArea(4, 5);
            expect(actual).toThrow();
        });
    });
    describe('getRectangularPrismVolume()', () => {
        it('Should return area of a prism as if the arguments are the respective length, width, height of a prism.', () => {
            const actual = helpers.getRectangularPrismVolume(4, 5, 6);
            const expected = 120;
            expect(actual).toEqual(expected);
        });
        it('Should throw an error with a string argument.', () => {
            const actual = () => helpers.getRectangularPrismVolume(apple);
            expect(actual).toThrow();
        });
        it('Should throw error when called with no value.', () => {
            const actual = () => helpers.getRectangularPrismVolume();
            expect(actual).toThrow();
        });
        it('Should throw error when called with one argument.', () => {
            const actual = () => helpers.getRectangularPrismVolume(4);
            expect(actual).toThrow();
        });
        it('Should throw error when called with two arguments.', () => {
            const actual = () => helpers.getRectangularPrismVolume(4, 5);
            expect(actual).toThrow();
        });
        it('Should throw error when called with more then 3 arguments.', () => {
            const actual = () => helpers.getRectangularPrismVolume(4, 5, 6, 7);
            expect(actual).toThrow();
        });
    });
});