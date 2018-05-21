const funcs = require('../basic-javascript/project-1');

// write your tests here
it('should multiply by ten', () => {
    const multiplyByTen = funcs.multiplyByTen;
    const expected = 100;
    const actual = multiplyByTen(10);
    expect(actual).toBe(100);
});

