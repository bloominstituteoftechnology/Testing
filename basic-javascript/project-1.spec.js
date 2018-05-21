const funcs = require('./project-1');

// write your tests here

// default  
describe('default', () => {
    it('runs the test', () => {})
});

// multiplyByTen
describe('multiplyByTen', () => {
    it('should multiply number by 10', () => {
        // arrange
        const expected = 20;
        const multiplyByTen = funcs.multiplyByTen;

        // act
        const actual = multiplyByTen(2);

        // assert 
        expect(actual).toBe(expected);
    })
})

// subtractFive
describe('subtractFive', () => {
    it('should subtract 5 from input number', () => {
        // arrange
        const expected = 20;
        const subtractFive = funcs.subtractFive;

        // add
        const actual = subtractFive(25);

        // assert
        expect(actual).toBe(expected)
    })
})

// areSameLength
describe('areSameLength', () => {
    it('compares the length of one string to another', () => {
        // arrange
        const areSameLength = funcs.areSameLength;

        // act
        const actual = areSameLength('abc', '123')

        // assert
        expect(actual).toBeTruthy();
    })
})
// areEqual 
describe('areEqual', () => {
    it('compares the numbers passed in to ensure they are equal', () => {
        // arrange
        const areEqual = funcs.areEqual;

        // act
        const actual = areEqual(7, 7)

        // assert
        expect(actual).toBeTruthy()
    })
})
// lessThanNinety
describe('lessThanNinety', () => {
    it('number is less than 90', () => {
        // arrange
        const lessThanNinety = funcs.lessThanNinety;

        // act
        const actual = lessThanNinety(45);

        // assert
        expect(actual).toBeTruthy();
    })
    it('number is less than 90', () => {
        // arrange
        const lessThanNinety = funcs.lessThanNinety;

        // act
        const actual = lessThanNinety(100);

        // assert
        expect(actual).toBeFalsy();
    })
})

// greaterThanFifty
describe('greaterThanFifty', () => {
    it('number is less than 50', () => {

        // arrange
        const greaterThanFifty = funcs.greaterThanFifty;

        // act
        const actual = greaterThanFifty(100);

        // assert
        expect(actual).toBeTruthy();

    })

    it('number is less than 50', () => {

        // arrange
        const greaterThanFifty = funcs.greaterThanFifty;

        // act
        const actual = greaterThanFifty(10);

        // assert
        expect(actual).toBeFalsy();
        
    })
})

// add
describe('add', () => {
    it('should be the sum of the two numbers', () => {
        // arrange
        const add = funcs.add;

        // act
        const actual = add(6, 14)

        // assert
        expect(actual).toEqual(20);
    })
})

// subtract
describe('subtract', () => {
    it('the difference between two numbers', () => {
        // arrange
        const subtract = funcs.subtract;

        // act 
        const actual = subtract(10, 3);

        // assert
        expect(actual).toEqual(7)
    })
})

// divide
describe('divide', () => {
    it('should return the quotient of the two numbers', () => {

        // arrange
        const divide = funcs.divide;

        // act
        const actual = divide(20, 4);

        // assert
        expect(actual).toEqual(5)
    })
})

// multiply
describe('multiply', () => {
    it('returns the product of the two numbers', () => { 
        // arrange
        const multiply = funcs.multiply;

        // act 
        const actual = multiply(20, 20)

        // assert
        expect(actual).toBe(400);
    })
})

// getRemainder

describe('getRemainder', () => {
    it('returns the remainder of x divided by y', () => {
        // arrange
        const getRemainder = funcs.getRemainder

        // act
        const actual = getRemainder(20, 6)

        // assert
        expect(actual).toEqual(2)
    })
})

// isEven
describe('isEven', () => {
    it('checks if number is even', () => {
        // arrange
        const isEven = funcs.isEven;

        // act
        const actual = isEven(20);

        // assert
        expect(actual).toBeTruthy()
    })
})

// isOdd 
describe('isOdd', () => {
    it('should return false if number is even', () => {
        // arrange
        const isOdd = funcs.isOdd;

        // act
        const actual = isOdd(20);

        // assert
        expect(actual).toBeFalsy()
    })
})

// square
describe('square', () => {
    it('should return the square of the number', () => {
        // arrange 
        const square = funcs.square;

        // act 
        const actual = square(4);

        // assert
        expect(actual).toEqual(16)
    })
})

// cube
describe('cube', () => {
    it('should return the cube of the number', () => {
        // arrange
        const cube = funcs.cube;

        // act
        const actual = cube(3);

        // assert
        expect(actual).toEqual(27);
    })
})