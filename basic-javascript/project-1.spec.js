const helpers = require('./project-1');

it('should multiply the number passed by 10', () => {
    expect(helpers.multiplyByTen(4)).toEqual(40);
    expect(helpers.multiplyByTen(6)).toEqual(60);
    expect(helpers.multiplyByTen(10)).toEqual(100);
});

it('should subtract the number passed by 5', () => {
    expect(helpers.subtractFive(5)).toEqual(0);
    expect(helpers.subtractFive(100)).toEqual(95);
    expect(helpers.subtractFive(30)).toEqual(25);
})

it('should return true if the two values provided are the same length, otherwise false', () => {
    expect(helpers.areSameLength('hello', 'test5')).toEqual(true);
    expect(helpers.areSameLength('hell', 'test5')).toEqual(false);
    expect(helpers.areSameLength(5, 'test5ssssss')).toEqual(false);
})

it('should return true if the two values provided are equal', () => {
    expect(helpers.areEqual(5, 5)).toEqual(true);
    expect(helpers.areEqual('hello', 'hello')).toEqual(true);
    expect(helpers.areEqual(5, 6)).toEqual(false);
})

it('should return true if value provided is less than 90, otherwise false', () => {
    expect(helpers.lessThanNinety(50)).toEqual(true);
    expect(helpers.lessThanNinety(90)).toEqual(false);
    expect(helpers.lessThanNinety(-20)).toEqual(true);
})

it('should return true if value provided is greater than 50, otherwise false', () => {
    expect(helpers.greaterThanFifty(50)).toEqual(false);
    expect(helpers.greaterThanFifty(51)).toEqual(true);
    expect(helpers.greaterThanFifty(90)).toEqual(true);
})

it('should add the two numbers passed and return the value', () => {
    expect(helpers.add(5, 5)).toEqual(10);
    expect(helpers.add(10, 5)).toEqual(15);
    expect(helpers.add(-5, 5)).toEqual(0);
})