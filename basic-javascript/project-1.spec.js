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



test('areEqual test 1', () => {
    
})

test('areEqual test 2', () => {
    
})


test('lessThanNinety test 1', () => {
    expect(helpers.lessThanNinety(-5)).toBe(true);
})

test('lessThanNinety test 2', () => {
    expect(helpers.lessThanNinety(0)).toBe(true);
})

//#6-10

test('greaterThanFifty test 1', () => {
    expect(helpers.greaterThanFifty(100)).toBe(true);
})

test('greaterThanFifty test 2', () => {
    expect(helpers.greaterThanFifty(-60)).toBe(false);
})

test('add test 1', () => {
    expect(helpers.add(2,3)).toBe(5);
})

test('add test 2', () => {
    expect(helpers.add(-1,3)).toBe(2);
})

test('add test 3', () => {
    expect(helpers.add(23.2,45.5)).toBe(68.7);
})

test('subtract test 1', () => {
    expect(helpers.subtract(20,15)).toBe(5);
})

test('subtract test 2', () => {
    expect(helpers.subtract(-4, -3)).toBe(-1);
})

test('subtract test 3', () => {
    expect(helpers.subtract(0,0)).toBe(0);  
})
