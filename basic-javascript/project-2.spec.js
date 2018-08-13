const funcs = require('./project-2');

it('should return the biggest of the 2 values passed, if equal return one of the values', () => {
    expect(funcs.getBiggest(2, 5)).toEqual(5);
    expect(funcs.getBiggest(10, 10)).toEqual(10);
    expect(funcs.getBiggest(500, 5)).toEqual(500);
})
