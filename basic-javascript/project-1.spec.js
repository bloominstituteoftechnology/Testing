const funcs = require('./project-1');

// write your tests here
describe('multiply by 10 function', () => {
  it('should multiply by 10', () => {
    // arrange
    const multiplyByTen = funcs.multiplyByTen;
    // act
    const actual = multiplyByTen(5);

    // assert
    expect(actual).toBe(50);
  });
});
