const helpers = require('./project-1');

// start testing!
test('Multiply By Ten test 1', () => {
    expect(helpers.multiplyByTen(10)).toBe(100);
})

test('Multiply By Ten test 2', () => {
    expect(helpers.multiplyByTen(5)).toBe(50);
})

test('Multiply By Ten test 3', () => {
    expect(helpers.multiplyByTen(-1)).toBe(-10);
})
 
test('Subtractfive test 1', () => {
    expect(helpers.subtractFive(10)).toBe(5);
})

test('Subtractfive test 2', () => {
    expect(helpers.subtractFive(0)).toBe(-5);
})

test('Subtractfive test 3', () => {
    expect(helpers.subtractFive(5)).toBe(0);
})

test('areSameLength test 1', () => {
    expect(helpers.areSameLength('Hello', 'Pizza')).toBe(true);
})

test('areSameLength test 2', () => {
    expect(helpers.areSameLength('', '')).toBe(true);
})

test('areSameLength test 3', () => {
    expect(helpers.areSameLength('One', 'Three')).toBe(false);
})

test('areEqual test 1', () => {
    expect(helpers.areEqual((2+3), (1+4))).toBe(true);
})

test('areEqual test 2', () => {
    expect(helpers.areEqual('hello', 'hello')).toBe(true);
})


test('lessThanNinety test 1', () => {
    expect(helpers.lessThanNinety(-5)).toBe(true);
})

test('lessThanNinety test 2', () => {
    expect(helpers.lessThanNinety(0)).toBe(true);
})


