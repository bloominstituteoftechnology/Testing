const funcs = require('./project-2');
const { isANumber, isAString, isAnArray, isAnObject, isAfunction, isBoolean } = require('@coetry/simpletypes');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// start testing!
describe('Jest', () => {
  test('jest runs', () => {});
});

describe('getBiggest', () => {
  it('returns the larger of two numbers', () => {
    // arrange
    const getBiggest = funcs.getBiggest;

    //act
    const numOne = 2;
    const numTwo = 3;

    const biggestNum = getBiggest(numOne, numTwo);

    //assert
    expect(biggestNum).toEqual(3);
  });
});

describe('greeting', () => {
  it('returns true if input is a string', () => {
    // arrange
    const greeting = funcs.greeting;

    //act
    const strOne = 'German';

    //assert
    expect(isAString(strOne)).toEqual(true);
  });
});
