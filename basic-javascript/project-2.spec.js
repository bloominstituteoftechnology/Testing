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

describe('isTenOrFive', () => {
  // arrange
  const isTenOrFive = funcs.isTenOrFive;

  it('returns error if input is a string', () => {
    //act
    const strOne = 'German';

    //assert
    expect(() => {
      isTenOrFive(strOne);
    }).toThrow();
  });
  it('returns true if input is 5', () => {
    //act
    const numOne = 5;

    //assert
    expect(isTenOrFive(numOne)).toEqual(true);
  });
});

describe('isInRange', () => {
  // arrange
  const isInRange = funcs.isInRange;

  it('returns error if input is not a number', () => {
    //act
    const strOne = 'German';

    //assert
    expect(() => {
      isInRange(strOne);
    }).toThrow();
  });
  it('returns true if input is 22', () => {
    //act
    const numOne = 22;

    //assert
    expect(isInRange(numOne)).toEqual(true);
  });
});

describe('isInteger', () => {
  // arrange
  const isInteger = funcs.isInteger;

  it('returns error if input is not a number', () => {
    //act
    const strOne = 'German';

    //assert
    expect(() => {
      isInteger(strOne);
    }).toThrow();
  });
  it('returns true if input is 22', () => {
    //act
    const numOne = 22;

    //assert
    expect(isInteger(numOne)).toEqual(true);
  });
});

describe('fizzBuzz', () => {
  // arrange
  const fizzBuzz = funcs.fizzBuzz;

  it('returns error if input is not a number', () => {
    //act
    const strOne = 'German';

    //assert
    expect(() => {
      fizzBuzz(strOne);
    }).toThrow();
  });
  it(`returns 'fizz' if input is divisible by 3`, () => {
    //act
    const numOne = 21;

    //assert
    expect(fizzBuzz(numOne)).toEqual('fizz');
  });
});

describe('isPrime', () => {
  // arrange
  const isPrime = funcs.isPrime;

  it('returns error if input is not a number', () => {
    //act
    const strOne = 'German';

    //assert
    expect(() => {
      isPrime(strOne);
    }).toThrow();
  });
  it(`returns 'true' if input is prime`, () => {
    //act
    const numOne = 37;

    //assert
    expect(isPrime(numOne)).toEqual(true);
  });
});

describe('isPrime', () => {
  // arrange
  const isPrime = funcs.isPrime;

  it('returns error if input is not a number', () => {
    //act
    const strOne = 'German';

    //assert
    expect(() => {
      isPrime(strOne);
    }).toThrow();
  });
  it(`returns 'true' if input is prime`, () => {
    //act
    const numOne = 37;

    //assert
    expect(isPrime(numOne)).toEqual(true);
  });
});

describe('returnFirst', () => {
  // arrange
  const returnFirst = funcs.returnFirst;

  it('returns error if input is not an array', () => {
    //act
    const strOne = 'apples';

    //assert
    expect(() => {
      returnFirst(strOne);
    }).toThrow();
  });
  it(`returns first item in array`, () => {
    //act
    const arrOne = ['pizza', 'burgers'];

    //assert
    expect(returnFirst(arrOne)).toEqual(arrOne[0]);
  });
});

describe('returnLast', () => {
  // arrange
  const returnLast = funcs.returnLast;

  it('returns error if input is not an array', () => {
    //act
    const strOne = 'apples';

    //assert
    expect(() => {
      returnLast(strOne);
    }).toThrow();
  });
  it(`returns the last item in array`, () => {
    //act
    const arrOne = ['pizza', 'burgers'];

    //assert
    expect(returnLast(arrOne)).toEqual(arrOne[arrOne.length - 1]);
  });
});

describe('getArrayLength', () => {
  // arrange
  const getArrayLength = funcs.getArrayLength;

  it('returns error if input is not an array', () => {
    //act
    const strOne = 'apples';

    //assert
    expect(() => {
      getArrayLength(strOne);
    }).toThrow();
  });
  it(`returns the array length given an array`, () => {
    //act
    const arrOne = ['pizza', 'burgers'];

    //assert
    expect(getArrayLength(arrOne)).toEqual(arrOne.length);
  });
});
