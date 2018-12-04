const { getBiggest, greeting, isTenOrFive, isInRange, isInteger, fizzBuzz, isPrime, returnFirst, returnLast, getArrayLength, incrementByOne, addItemToArray, addItemToFront, wordsToSentence, contains, addNumbers, averageTestScore, largestNumber } = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


/* eslint-disable arrow-parens */

describe('Jest', () => {
  test('Jest runs', () => {
  
  });
});

// getBiggest
describe('getBiggest', () => {

  it('compares 2 numbers and/or string-numbers and returns the largest number', () => {
    expect(getBiggest(6, 5)).toBe(6);
  });

  test('returns a number', () => {
    const input1 = Math.random();
    const input2 = Math.random();
    const result = getBiggest(input1, input2);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('returns the largest number', () => {
        
    // Arrange: setup the world
    const input1 = Math.random() * 100;
    const input2 = input1 - 1;
    const input3 = Math.random() * 100;
    // Act: execute the code you're testing
    const result = getBiggest(input1, input2);
    const result2 = getBiggest(input2, input1);
    // Assert: check that it works
    expect(getBiggest(input1, input1)).toBe(input1);
    expect(result).toBe(input1);
    expect(result2).toBe(input1);
    expect(result).toBeGreaterThanOrEqual(result-1)
    expect(getBiggest(input1, input3)).toBe(Math.max(input1, input3));
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(getBiggest('10', 5)).toBeTruthy();
    expect(getBiggest(10, 5)).toBeTruthy();
    expect(getBiggest()).toBeFalsy();
  });
})

// greeting
describe('greeting', () => {

  it('return a greeting based on the input', () => {
    const input1 = 'German';
    const input2 = 'Swedish';
    const result = greeting(input1);
    const result2 = greeting(input2);
    expect (result).toBe('Guten Tag!');
    expect (result2).toBe('Hello!');
  });

  test('returns a string', () => {
    const input1 = '';
    const result = greeting(input1);
    expect(typeof result === 'string').toBeTruthy();
  });

  test('return a greeting based on the input', () => {
    const input1 = 'German';
    const input2 = 'Spanish';
    const result = greeting(input1);
    const result2 = greeting(input2);
    const result3 = greeting(!input1 || !input2);
    expect (result).toBe('Guten Tag!');
    expect (result2).toBe('Hola!');
    expect (result3).toBe('Hello!');
  });
});

describe('isTenOrFive', () => {

  it('compares parameter to 10 or 5 and returns a boolean', () => {
    const input1 = Math.random();
    const input2 = 5;
    expect(isTenOrFive(input2)).toBe(true);
    expect(isTenOrFive(input1)).toBe(false);
  });

  test('returns a boolean', () => {
    const input1 = Math.random()*20;
    const result = isTenOrFive(input1);
    expect(typeof result === 'boolean').toBeTruthy();
  });
})

// isInRange
describe('isInRange', () => {

  it('determines if the num is between 20 and 50', () => {
    expect(isInRange(35)).toBeTruthy();
  });

  test('returns a boolean', () => {
    const input1 = Math.random()
    const result = isInRange(input1);
    expect(typeof result === 'boolean').toBeTruthy();
  });

  test('returns true if the number is between 20 and 50', () => {
        
    // Arrange: setup the world
    const input1 = Math.random() * 10;
    const input2 = Math.random() * 10 + 55;
    const input3 = Math.random() + 35;
    // Act: execute the code you're testing
    const result = isInRange(input1);
    const result2 = isInRange(input2);
    const result3 = isInRange(input3);
    // Assert: check that it works
    // expect(getBiggest(input1, input1)).toBe(input1);
    expect(result).toBe(false);
    expect(result2).toBe(false);
    expect(result3).toBe(true);
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(isInRange('35')).toBeTruthy();
    expect(isInRange(35)).toBeTruthy();
    expect(isInRange()).toBeFalsy();
  });
})

// const isInteger = num => {
//   if (Math.floor(num) === num) {
//     return true;
//   }
//   return false;
// };

// const fizzBuzz = num => {
//   if (num % 5 === 0 && num % 3 === 0) {
//     return 'fizzbuzz';
//   } else if (num % 5 === 0) {
//     return 'buzz';
//   } else if (num % 3 === 0) {
//     return 'fizz';
//   }
//   return num;
// };

// const isPrime = num => {
//   if (num < 0) {
//     return false;
//   }
//   if (num === 1 || num === 0) {
//     return false;
//   }
//   for (let i = 2; i < num; i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const returnFirst = arr => {
//   return arr[0];
// };

// const returnLast = arr => {
//   return arr[arr.length - 1];
// };

// const getArrayLength = arr => {
//   return arr.length;
// };

// const incrementByOne = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i]++;
//   }
//   return arr;
// };

// const addItemToArray = (arr, item) => {
//   arr.push(item);
//   return arr;
// };

// const addItemToFront = (arr, item) => {
//   arr.unshift(item);
//   return arr;
// };

// const wordsToSentence = words => {
//   let newSentence = '';
//   for (let i = 0; i < words.length; i++) {
//     if (i === 0) {
//       newSentence += `${words[i]}`;
//     } else {
//       newSentence += ` ${words[i]}`;
//     }
//   }
//   return newSentence;
// };

// const contains = (arr, item) => {
//   let itemCounter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       itemCounter++;
//     }
//   }
//   if (itemCounter > 0) {
//     return true;
//   }
//   return false;
// };

// const addNumbers = numbers => {
//   let sumOfNumbers = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sumOfNumbers += numbers[i];
//   }
//   return sumOfNumbers;
// };

// const averageTestScore = testScores => {
//   let totalSumScores = 0;
//   let numberOfScore = 0;
//   for (let i = 0; i < testScores.length; i++) {
//     totalSumScores += testScores[i];
//     numberOfScore++;
//   }
//   return totalSumScores / numberOfScore;
// };

// const largestNumber = numbers => {
//   let biggestInteger = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > biggestInteger) {
//       biggestInteger = numbers[i];
//     }
//   }
//   return biggestInteger;
// };

// module.exports = {
//   getBiggest,
//   greeting,
//   isTenOrFive,
//   isInRange,
//   isInteger,
//   fizzBuzz,
//   isPrime,
//   returnFirst,
//   returnLast,
//   getArrayLength,
//   incrementByOne,
//   addItemToArray,
//   addItemToFront,
//   wordsToSentence,
//   contains,
//   addNumbers,
//   averageTestScore,
//   largestNumber
// };
