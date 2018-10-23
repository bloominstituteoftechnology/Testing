const helpers = require('./project-1');

// start testing!
//#1-5
describe('MultplyByTen', () =>{
    it('Should multiply number by 10', () => {
        expect(helpers.multiplyByTen(10)).toBe(100);
        expect(helpers.multiplyByTen(5)).toBe(50);
        expect(helpers.multiplyByTen(-1)).toBe(-10);
    });

    it('Should return false when one of the values is undefined',() => {
        expect(helpers.multiplyByTen(undefined)).toEqual(false);
    })
})

describe('Subtractfive', () => {
    it('Should subtract number by 5', () => {
        expect(helpers.subtractFive(10)).toBe(5);
        expect(helpers.subtractFive(0)).toBe(-5);
        expect(helpers.subtractFive(5)).toBe(0);
    });

})

describe('areSameLength', () => {
    it('Should return equal if the two strings have the same length', () => {
        expect(helpers.areSameLength('Hello', 'Pizza')).toBe(true);
        expect(helpers.areSameLength('', '')).toBe(true);
        expect(helpers.areSameLength('One', 'Three')).toBe(false);
    });

})

describe('areEqual', () => {
    it('Should return true if parameters passed are equal', () => {
        expect(helpers.areEqual((2+3), (1+4))).toBe(true);
        expect(helpers.areEqual('hello', 'hello')).toBe(true);
        expect(helpers.areEqual(undefined, undefined)).toBe(true);
    });
})

describe('lessThanNinety', () => {
    it('Should return true if number passed is less than 90', () => {
        expect(helpers.lessThanNinety(-5)).toBe(true);
        expect(helpers.lessThanNinety(0)).toBe(true);
    });
})

//#6-10

describe('greaterThanFifty', () => {
    it('Should return true if number passed is greater than 50', () => {
        expect(helpers.greaterThanFifty(100)).toBe(true);
        expect(helpers.greaterThanFifty(-60)).toBe(false);
    });
})

describe('add', () =>{
    it('Should return the sum of two numbers passed', () => {
        expect(helpers.add(2,3)).toBe(5);
        expect(helpers.add(-1,3)).toBe(2);
        expect(helpers.add(23.2,45.5)).toBe(68.7);
    });

    it('Should return false when one of the values is undefined',() => {
        expect(helpers.add(undefined,2)).toEqual(false);
    });
})

describe('subtract', () =>{
    it('Should return the differnece of two numbers passed', () => {
        expect(helpers.subtract(0,0)).toBe(0);
        expect(helpers.subtract(-4, -3)).toBe(-1);
        expect(helpers.subtract(20,15)).toBe(5);
    });

    it('Should return false when one of the values is undefined',() => {
        expect(helpers.subtract(undefined,2)).toEqual(false);
    });
})

describe('divide', () => {
    it('Should return the quotient of the two numbers passed',() =>{
        expect(helpers.divide(10,5)).toBe(2);
        expect(helpers.divide(-50,5)).toBe(-10);
    });
})

describe('multiply', () => {
    it('Should return the product of the two numbers passed',() =>{
        expect(helpers.multiply(10,5)).toBe(50);
        expect(helpers.multiply(-50,5)).toBe(-250);
    });
})


//#11-15

describe('getRemainder', () => {
    it('Should return the remainder of the two numbers divided',() =>{
        expect(helpers.getRemainder(12,5)).toBe(2);
        expect(helpers.getRemainder(-50,3)).toBe(-2);
    });
})

describe('isEven', () => {
    it('Should return true if the number is even', ()=> {
        expect(helpers.isEven(20)).toEqual(true);
        expect(helpers.isEven(15)).toEqual(false);
    })
})

describe('isOdd', () => {
    it('Should return true if the number is odd', ()=> {
        expect(helpers.isOdd(20)).toEqual(false);
        expect(helpers.isOdd(15)).toEqual(true);
    })
})

describe('square', () => {
    it('Should return the square of the number passed', () =>{
        expect(helpers.square(4)).toBe(16);
        expect(helpers.square(-3)).toBe(9);
    })
})

describe('cube', () => {
    it('Should return the cube of the number passed', () =>{
        expect(helpers.cube(4)).toBe(64);
        expect(helpers.cube(-3)).toBe(-27);
    })
})

//#16-20

describe('raiseToPower', () => {
    it('Should return the number passed raised to the power of the exponent passed', () => {
        expect(helpers.raiseToPower(2,5)).toBe(32);
        expect(helpers.raiseToPower(1,0)).toBe(1);
    })
})

describe('roundNumber', () => {
    it('Should return the number given rounded to the nearest whole number', () => {
        expect(helpers.roundNumber(63.5)).toBe(64);
        expect(helpers.roundNumber(-4.3)).toBe(-4);
    })
})

describe('roundUp', () => {
    it('Should return the number given rounded up to the nearest whole number', () => {
        expect(helpers.roundUp(63.2)).toBe(64);
        expect(helpers.roundUp(-4.3)).toBe(-4);
    })
})

describe('addExclamationPoint', () => {
    it('Should return the string given but with an exclamation at the end', () => {
        expect(helpers.addExclamationPoint('hello')).toBe('hello!');
        expect(helpers.addExclamationPoint('')).toBe('!');
    })
})

describe('combineNames', () => {
    it('Should return the two names passed combined to a single string', () => {
        expect(helpers.combineNames('Kevin','Tena')).toBe('Kevin Tena');
        expect(helpers.combineNames('Juju ', "Smith-Schuster")).toBe('Juju  Smith-Schuster');
    })
})