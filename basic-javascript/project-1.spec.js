const helpers = require('./project-1');

//multipy by ten
describe('multiplyByTen()', () => {
    //low hanging fruit
    it('should multiply provided number by ten', () => {
        const expected = 100; 
        const actual = helpers.multiplyByTen(10);
        expect(actual).toEqual(expected);
    });

    //test for undefined
    it('should return 0 when called with no value', () => {
        const product = helpers.multiplyByTen();
        expect(product).toBe(0);
    });

    // //string input
    it('should throw error when called with a string', () => {
        expect(() => {
            helpers.multiplyByTen('five');
        }).toThrow();
    })
});

//subtract five
describe('subtractFive()', () => {
    it('should subtract five from the provided number', () => {
        const expected = 15;
        const actual = helpers.subtractFive(20);
        expect(actual).toEqual(expected);
    })

});

//are same length
describe('areSameLength()', () => {
    it('should say if the length of two inputs are equal or not', () => {
        const expected = true;
        const anwser = helpers.areSameLength('hi', 'yo');
        expect(anwser).toBe(expected);
    });

});

//are equal 
describe('areEqual()', () => {
    it('should say if two inputs are equal', () => {
        const expected = true;
        const answer = helpers.areEqual('hi', 'hi');
        expect(answer).toEqual(expected);
    });
});

//less than 90
describe('lessThanNinety()', () => {
    it('should say if it is less than 90', () => {
        const expected = true;
        const answer = helpers.lessThanNinety(75);
        expect(answer).toEqual(expected);
    });
});

//greater than 50 
describe('greaterThanFifty()', () => {
    it('should say if it is more than 50', () => {
        const expected = true;
        const answer = helpers.greaterThanFifty(75);
        expect(answer).toEqual(expected);
    });
});

//add
describe('add()', () => {
    it('should add two numbers', () => {
        const expected = 10;
        const answer = helpers.add(5, 5);
        expect(answer).toEqual(expected);
    });
});

//subtract
describe('subtract()', () => {
    it('should subtract two numbers', () => {
        const expected = 10;
        const answer = helpers.subtract(15, 5);
        expect(answer).toEqual(expected);
    });
});

//divide
describe('divide()', () => {
    it('should divide two numbers', () => {
        const expected = 10;
        const answer = helpers.divide(100, 10);
        expect(answer).toEqual(expected);
    });
});

//multiply
describe('multiply()', () => {
    it('should multiply two numbers', () => {
        const expected = 10;
        const answer = helpers.multiply(1, 10);
        expect(answer).toEqual(expected);
    });
});

//get remainder
describe('getRemainder()', () => {
    it('should get the remainder', () => {
        const expected = 1;
        const answer = helpers.getRemainder(10, 3);
        expect(answer).toEqual(expected);
    });
});

//is Even
describe('isEven()', () => {
    it('should test if even', () => {
        const expected = true;
        const answer = helpers.isEven(2);
        expect(answer).toEqual(expected);
    });
});

//isOdd
describe('isOdd()', () => {
    it('should test if odd', () => {
        const expected = true;
        const answer = helpers.isOdd(1);
        expect(answer).toEqual(expected);
    });
});

//square
describe('square()', () => {
    it('should multiple number by itself', () => {
        const expected = 121;
        const answer = helpers.square(11);
        expect(answer).toEqual(expected);
    });
});

//cube
describe('cube()', () => {
    it('should multiple number by twice', () => {
        const expected = 1000;
        const answer = helpers.cube(10);
        expect(answer).toEqual(expected);
    });
});

//raise to power
describe('raiseToPower()', () => {
    it('should raise to exponent', () => {
        const expected = 100;
        const answer = helpers.raiseToPower(10, 2);
        expect(answer).toEqual(expected);
    });
});

//round number
describe('roundNumber()', () => {
    it('should round number', () => {
        const expected = 100;
        const answer = helpers.roundNumber(100.3);
        expect(answer).toEqual(expected);
    });
});

//round up 
describe('roundUp()', () => {
    it('should round number up', () => {
        const expected = 101;
        const answer = helpers.roundUp(100.3);
        expect(answer).toEqual(expected);
    });
});

//add exclamation point
describe('addExclamationPoint()', () => {
    it('should add an exclamation point', () => {
        const expected = 'hi!';
        const answer = helpers.addExclamationPoint('hi');
        expect(answer).toEqual(expected);
    });
});

//combine names
describe('combineNames()', () => {
    it('should combine names', () => {
        const expected = 'clint kunz';
        const answer = helpers.combineNames('clint', 'kunz');
        expect(answer).toEqual(expected);
    });
});

//get greeting
describe('getGreeting()', () => {
    it('should get a greeting', () => {
        const expected = 'Hello Clint!';
        const answer = helpers.getGreeting('Clint');
        expect(answer).toEqual(expected);
    });
});

//get rectangle area
describe('getRectangleArea()', () => {
    it('should calculate the area of a rectangle', () => {
        const expected = 20;
        const answer = helpers.getRectangleArea(2, 10);
        expect(answer).toEqual(expected);
    });
});

//get triangle area
describe('getTriangleArea()', () => {
    it('should calculate the area of a triangle', () => {
        const expected = 25;
        const answer = helpers.getTriangleArea(10, 5);
        expect(answer).toEqual(expected);
    });
});

//get circle area
describe('getCircleArea()', () => {
    it('should calculate the area of a circle', () => {
        const expected = 28.274333882308138;
        const answer = helpers.getCircleArea(3);
        expect(answer).toEqual(expected);
    });
});

//get rectangle prism volume
describe('getRectangularPrismVolume()', () => {
    it('should calculate rectangular prism volume', () => {
        const expected = 50;
        const answer = helpers.getRectangularPrismVolume(5, 2, 5);
        expect(answer).toEqual(expected);
    });
});


// start testing!
