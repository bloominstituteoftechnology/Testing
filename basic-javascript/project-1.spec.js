const funcs = require('./project-1');

// write your tests here
it('multiplyByTen', () => {
    expect(funcs.multiplyByTen(8)).toBe(80)
})

it('subtractFive', () => {
    expect(funcs.subtractFive(8)).toBe(3)
})

it('areSameLength', () => {
    expect(funcs.areSameLength('kenzie', 'amanda')).toBeTruthy()
})

it('areEqual', () => {
    expect(funcs.areEqual('8', '4 * 2')).toBeTruthy()
})