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

  test('add should return 5', () => {
    const expected = 5;
    const add = helpers.add;

    const result = add(2, 3);

    expect(result).toBe(expected);
  });

  test('subtract should return 1', () => {
    const expected = 1;
    const subtract = helpers.subtract;

    const result = subtract(3, 2);

    expect(result).toBe(expected);
  });

  test('divide should return 2', () => {
    const expected = 2;
    const divide = helpers.divide;

    const result = divide(10, 5);

    expect(result).toBe(expected);
  });

  test('multiply should return 6', () => {
    const expected = 6;
    const multiply = helpers.multiply;

    const result = multiply(3, 2);

    expect(result).toBe(expected);
  });

  test('remainder should return 1', () => {
    const expected = 1;
    const getRemainder = helpers.getRemainder;

    const result = getRemainder(5, 2);

    expect(result).toBe(expected);
  });


});