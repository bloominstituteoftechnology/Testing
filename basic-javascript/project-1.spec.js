const helpers = require('./project-1');

// start testing!
describe('math things', () => {
  test('should mulitply by ten', () => {
    // arrange
    const expected = 50;
    const multiplyByTen = helpers.multiplyByTen;

    // act
    const product = multiplyByTen(5);

    // assert
    expect(product).toBe(expected);
  });

  test('should subtract five', () => {
    // arrange
    const expected = 5;
    const subtractFive = helpers.subtractFive;

    // act
    const result = subtractFive(10);

    // assert
    expect(result).toBe(expected);
  });


});