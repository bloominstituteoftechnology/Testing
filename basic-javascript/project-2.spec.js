const funcs = require('./project-2');

// getBiggest
describe('Get biggest', () => {
  it('knows that the biggest between 1 and 10 is 10', () => {
    expect(funcs.getBiggest(1, 10)).toBe(10);
  });
  it('knows that the biggest between 30 and 29 is 30', () => {
    expect(funcs.getBiggest(30, 29)).toBe(30);
  });
  it('knows that the biggest between 3 and 3 is 3', () => {
    expect(funcs.getBiggest(3, 3)).toBe(3);
  });
});

// greeting
describe('Greeting', () => {
  it(`knows that in German we say 'Guten Tag!'`, () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!');
  });
  it(`knows that in Spanish we say 'Hola!'`, () => {
    expect(funcs.greeting('Spanish')).toBe('Hola!');
  });
  it(`doesn't know Hawaiian so we say 'Hello!'`, () => {
    expect(funcs.greeting('Hawaiian')).toBe('Hello!');
  });
});

// isTenOrFive
describe('Is ten of five', () => {
  it('knows that 10 is 10 or 5', () => {
    expect(funcs.isTenOrFive(10)).toBeTruthy();
  });
  it('knows that 5 is 10 or 5', () => {
    expect(funcs.isTenOrFive(5)).toBeTruthy();
  });
  it('knows that 0 is not 10 or 5', () => {
    expect(funcs.isTenOrFive(0)).toBeFalsy();
  });
});

// isInRange
describe('Is in range', () => {
  it('knows that 40 is in range', () => {
    expect(funcs.isInRange(40)).toBeTruthy();
  });
  it('knows that 51 is not in range', () => {
    expect(funcs.isInRange(51)).toBeFalsy();
  });
  it('knows that 20 is not in range', () => {
    expect(funcs.isInRange(20)).toBeFalsy();
  });
});

// isInteger
describe('Is integer', () => {
  it('knows that 40 is an integer', () => {
    expect(funcs.isInteger(40)).toBeTruthy();
  });
  it('knows that 2.5 is not an integer', () => {
    expect(funcs.isInteger(2.5)).toBeFalsy();
  });
  it('knows that -12 is an integer', () => {
    expect(funcs.isInteger(-12)).toBeTruthy();
  });
});

// fizzBuzz
describe('Fizzbuzz', () => {
  it('knows that 15 is divisible by 5 and 3', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
  });
  it('knows that 10 is divisible by 5', () => {
    expect(funcs.fizzBuzz(10)).toBe('buzz');
  });
  it('knows that 9 is divisible by 3', () => {
    expect(funcs.fizzBuzz(9)).toBe('fizz');
  });
  it('knows that 13 is not divisible by 5 or 3', () => {
    expect(funcs.fizzBuzz(13)).toBe(13);
  });
});

// isPrime
describe('Is prime', () => {
  it('knows that -10 is not a prime number', () => {
    expect(funcs.isPrime(-10)).toBeFalsy();
  });
  it('knows that 1 is not a prime number', () => {
    expect(funcs.isPrime(1)).toBeFalsy();
  });
  it('knows that 8 is not a prime number', () => {
    expect(funcs.isPrime(8)).toBeFalsy();
  });
  it('knows that 13 is not divisible by 5 or 3', () => {
    expect(funcs.isPrime(5)).toBeTruthy();
  });
});

// returnFirst
describe('Return first', () => {
  it('knows that 1 is the first item in [1,2,3]', () => {
    expect(funcs.returnFirst([1,2,3])).toBe(1);
  });
  it('knows that 3 is the first item in [3]', () => {
    expect(funcs.returnFirst([3])).toBe(3);
  });
  it(`knows that 'I' is the first item in ['I', 'You', 'Me']`, () => {
    expect(funcs.returnFirst(['I', 'You', 'Me'])).toBe('I');
  });
});

// returnLast
describe('Return first', () => {
  it('knows that 3 is the last item in [1,2,3]', () => {
    expect(funcs.returnLast([1,2,3])).toBe(3);
  });
  it('knows that 3 is the last item in [3]', () => {
    expect(funcs.returnLast([3])).toBe(3);
  });
  it(`knows that 'Me' is the last item in ['I', 'You', 'Me']`, () => {
    expect(funcs.returnLast(['I', 'You', 'Me'])).toBe('Me');
  });
});

// getArrayLength
describe('Get array length', () => {
  it('knows that the length of [1,2,3] is 3', () => {
    expect(funcs.getArrayLength([1,2,3])).toBe(3);
  });
  it('knows that the length of [3] is 1', () => {
    expect(funcs.getArrayLength([3])).toBe(1);
  });
  it(`knows that the length of [] is 0`, () => {
    expect(funcs.getArrayLength([])).toBe(0);
  });
});

// incrementByOne
describe('Increment by one', () => {
  it('knows that [1,2,3] plus 1 is [2,3,4]', () => {
    expect(funcs.incrementByOne([1,2,3])).toEqual([2,3,4]);
  });
  it('knows that [3] plus 1 is [4]', () => {
    expect(funcs.incrementByOne([3])).toEqual([4]);
  });
  it(`knows that ['its'] plus 1 is NaN`, () => {
    expect(funcs.incrementByOne(['its'])).toEqual([NaN]);
  });
});

// addItemToArray
describe('Add item to array', () => {
  it('knows that the 4 added to [1, 2, 3] is [1, 2, 3, 4]', () => {
    expect(funcs.addItemToArray([1,2,3], 4)).toEqual([1, 2, 3, 4]);
  });
  it('knows that the 4 added to [] is [4]', () => {
    expect(funcs.addItemToArray([], 4)).toEqual([4]);
  });
  it('knows that the 5 added to [1, 2, 3, 4] is [1, 2, 3, 4, 5]', () => {
    expect(funcs.addItemToArray([1,2,3,4], 5)).toEqual([1, 2, 3, 4, 5]);
  });
});

// addItemToFront
describe('Add item to from', () => {
  it('knows that the 4 added to the front of [1, 2, 3] is [4, 1, 2, 3]', () => {
    expect(funcs.addItemToFront([1,2,3], 4)).toEqual([4, 1, 2, 3]);
  });
  it('knows that the 4 added to the front of [] is [4]', () => {
    expect(funcs.addItemToFront([], 4)).toEqual([4]);
  });
  it('knows that the 5 added to the front of [1, 2, 3, 4] is [5, 1, 2, 3, 4]', () => {
    expect(funcs.addItemToFront([1,2,3,4], 5)).toEqual([5, 1, 2, 3, 4]);
  });
});

// wordsToSentence
describe('Words to sentence', () => {
  it(`knows that ['oh', 'hi', 'mark!'] equals 'oh hi mark!'`, () => {
    expect(funcs.wordsToSentence(['oh', 'hi', 'mark!'])).toEqual('oh hi mark!');
  });
  it(`knows that ['', '', ''] equals '  '`, () => {
    expect(funcs.wordsToSentence(['', '', ''])).toEqual('  ');
  });
  it(`knows that ['hi!'] equals 'hi!'`, () => {
    expect(funcs.wordsToSentence(['hi!'])).toEqual('hi!');
  });
});

// contains
describe('Contains', () => {
  it(`knows that 'mark!' is in ['oh', 'hi', 'mark!']`, () => {
    expect(funcs.contains(['oh', 'hi', 'mark!'], 'mark!')).toBeTruthy();
  });
  it(`knows that 0 is in [0, 1, 2]`, () => {
    expect(funcs.contains([0, 1, 2], 0)).toBeTruthy();
  });
  it(`knows that 100 is not in [0, 1, 2]`, () => {
    expect(funcs.contains([0, 1, 2], 100)).toBeFalsy();
  });
});

// addNumbers
describe('Add numbers', () => {
  it(`knows that the sum of [0, 1, 2] is 3`, () => {
    expect(funcs.addNumbers([0, 1, 2])).toEqual(3);
  });
  it(`knows that the sum of [12] is 12`, () => {
    expect(funcs.addNumbers([12])).toEqual(12);
  });
  it(`knows that the sum of [-10, 1, 5] is -4`, () => {
    expect(funcs.addNumbers([-10, 1, 5])).toEqual(-4);
  });
});

// averageTestScore
describe('Average test score', () => {
  it(`knows that the average of [0, 1, 2] is 1`, () => {
    expect(funcs.averageTestScore([0, 1, 2])).toEqual(1);
  });
  it(`knows that the average of [12] is 12`, () => {
    expect(funcs.averageTestScore([12])).toEqual(12);
  });
  it(`knows that the average of [-10, 1, 0] is -9`, () => {
    expect(funcs.addNumbers([-10, 1, 0])).toEqual(-9);
  });
});

// largestNumber
describe('Largest number', () => {
  it(`knows that the largest number in [0, 1, 2] is 2`, () => {
    expect(funcs.largestNumber([0, 1, 2])).toEqual(2);
  });
  it(`knows that the largest number in [12] is 12`, () => {
    expect(funcs.largestNumber([12])).toEqual(12);
  });
  it(`knows that the largest number in [-10, 1, 0] is 1`, () => {
    expect(funcs.largestNumber([-10, 1, 0])).toEqual(1);
  });
});