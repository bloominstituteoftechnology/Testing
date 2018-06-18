const helpers = require('./project-1');

// start testing!
describe('project-1', () => { // describe.only will run only the tests in that particular suite
    describe('multiplyByTen', () => {
        it('returns NaN when given a non numeric value', () => {
            expect(helpers.multiplyByTen(undefined)).toBeNaN();
            expect(helpers.multiplyByTen('two')).toBeNaN();
            expect(helpers.multiplyByTen(false)).toEqual(0);
            expect(helpers.multiplyByTen(true)).toEqual(10); 
        })
        it('should return the given number multiplied by 10', () => {});
    });
});

// write down test ideas below
// should return the right amount given a numeric value
// another idea

describe('isEven', () => {
    it('isEven should return true for even numbers', () => {
        expect(helpers.isEven(4)).toBeTruthy();
        expect(helpers.isEven(0)).toBeTruthy();
    });

    it('isEven should return false for odd numbers', () => {
        expect(helpers.isEven(3)).toBeFalsy();
        expect(helpers.isEven(-1)).toBeFalsy();
    });

});

describe('subtractFive', () => {
    it('returns NaN when given a non numeric value', () => {
        expect(helpers.subtractFive(undefined)).toBeNaN();
        expect(helpers.subtractFive('two')).toBeNaN();
        expect(helpers.subtractFive(false)).toBe(-5);
        expect(helpers.subtractFive(true)).toEqual(-4); 
    })

    it('should return the given number subtracted by 5', () => {
        expect(helpers.subtractFive(5)).toEqual(0);
        expect(helpers.subtractFive(15)).toEqual(10);
        expect(helpers.subtractFive(16)).toEqual(11);
    });
});

describe('areSameLength', () => {
    // it('should return true if lengths are the same', () => {
    //     expect(helpers.areSameLength().toBeUndefined());
    // })

    it ('should return true if lengths are the same or false if not', () => {
        expect(helpers.areSameLength('test', 'test')).toBeTruthy();
        expect(helpers.areSameLength('tests', 'test')).toBeFalsy();
    })

    // come back and figure out what if one str is missing 
})

describe('areEqual', () => {
    it('should return true if arguments pass strict equality', () => {
        expect(helpers.areEqual(5, 5)).toBe(true);
        expect(helpers.areEqual(5, '5')).toEqual(false); // even though toEqual doesnt check for deep equality, the function does 
        expect(helpers.areEqual('test', 5)).toBe(false);
        expect(helpers.areEqual(true, true)).toBe(true);
        expect(helpers.areEqual(true, false)).toBe(false);
    })
})

describe('lessThanNinety', () => {
    it('should return true if given number is less than 90', () => {
        expect(helpers.lessThanNinety(89)).toBeTruthy();
        expect(helpers.lessThanNinety(90)).toBeFalsy();
        expect(helpers.lessThanNinety('test')).toBeFalsy();  
    })
})

describe('greaterThanFifty', () => {
    it('should return true if given number is greater than 50', () => {
        expect(helpers.greaterThanFifty(51)).toBeTruthy();
        expect(helpers.greaterThanFifty(49)).toBeFalsy();
        expect(helpers.greaterThanFifty(50)).toBeFalsy();
        expect(helpers.greaterThanFifty('test')).toBeFalsy();
    })
})

describe('add', () => {
    it('can add two numbers', () => {
        expect(helpers.add(50, 5)).toEqual(55);
        // expect(helpers.add('50', 5)).toBeNaN();
        // const max = Math.max;
        // expect(helpers.add(max, 2)).toBeNaN(); // same as class code on multiply, figure out why doesnt work 
    })
})







