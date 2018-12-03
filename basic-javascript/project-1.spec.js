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

  test('same length - should return false', () => {
    const expected = false;
    const areSameLength = helpers.areSameLength;

    const result = areSameLength('classic', 'cars');

    expect(result).toBe(expected);
  });

  test('equal - should return false', () => {
    const expected = false;
    const areEqual = helpers.areEqual;

    const result = areEqual(5, '5');

    expect(result).toBe(expected);
  });

  test('less than 90 - should return true', () => {
    const expected = true;
    const lessThanNinety = helpers.lessThanNinety;

    const result = lessThanNinety(5);

    expect(result).toBe(expected);
  });

  test('greater than 50 - should return true', () => {
    const expected = true;
    const greaterThanFifty = helpers.greaterThanFifty;

    const result = greaterThanFifty(51);

    expect(result).toBe(expected);
  });


});