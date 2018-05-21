const funcs = require('./project-1');

// write your tests here
it('should multiply a number by 10', () => {
    //arrange
    const multiply = funcs.multiplyByTen;
    //act
    const actual = multiply(9);
    //assert
    expect(actual).toBe(90);
})