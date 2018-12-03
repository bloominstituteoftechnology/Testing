const helpers = require('./project-1');

// start testing!
describe('Jest', () => {
  test('jest runs', () => {});
});

describe('multiplyByTen', () => {
  it('should multiply input by ten', () => {
    // arrange
    const multiplyByTen = helpers.multiplyByTen;

    //act
    const twenty = multiplyByTen(2);

    //assert
    expect(twenty).toEqual(20);
  });
});

describe('subtractFive', () => {
  it('should subtract 5 from input', () => {
    // arrange
    const subtractFive = helpers.subtractFive;

    //act
    const negativeThree = subtractFive(2);

    //assert
    expect(negativeThree).toEqual(-3);
  });
});

describe('areSameLength', () => {
  it('check if two strings are the same length', () => {
    // arrange
    const areSameLength = helpers.areSameLength;

    //act
    const stringOne = '1fishy';
    const stringTwo = 'sticks';

    const checkLength = areSameLength(stringOne, stringTwo);

    //assert
    expect(checkLength).toBe(true);
  });
});
