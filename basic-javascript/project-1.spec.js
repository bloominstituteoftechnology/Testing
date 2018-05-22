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

  it('checks if number', () => {
    // arrange
    const numbers = [1, 2, 3];
    // act
    const actual = numbers;
    // assert
    expect(numbers).toBe(actual);
  });

  it('checks if an array', () => {
    // arrange
    const numbers = [1, 2, 3];
    const expected = 'array';
    // act
    const actual = Array.isArray(numbers);
    // assert
    expect(actual).toBe(true);
  });
});

describe('subtract by 5 function', () => {
  it('should subtract five', () => {
    // arrange
    const subtractFive = funcs.subtractFive;
    //act
    const actual = subtractFive(3);
    // assert
    expect(actual).toBe(-2);
  });

  it('checks if number', () => {
    // arrange
    const numbers = [1, 2, 3];
    // act
    const actual = numbers;
    // assert
    expect(numbers).toBe(actual);
  });

  it('checks if an array', () => {
    // arrange
    const numbers = [1, 2, 3];
    const expected = 'array';
    // act
    const actual = Array.isArray(numbers);
    // assert
    expect(actual).toBe(true);
  });
});

describe('strings should be same length', () => {
  it('should be true if both strings are equal', () => {
    // arrange
    const areSameLength = funcs.areSameLength;
    const str1 = 'foo';
    const str2 = 'bar';
    // act
    const actual = areSameLength(str1, str2);
    // assert
    expect(actual).toBe(true);
  });
});
