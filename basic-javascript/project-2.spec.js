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
    const input1 = Math.random() * 19;
    const input2 = Math.random() + 50.0001;
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

  // isInteger
describe('isInteger', () => {

  it('determines if a parameter is an integer', () => {
    expect(isInteger(35)).toBe(true);
    expect(isInteger(Math.PI)).toBe(false);
  });

  test('returns a boolean', () => {
    const input1 = Math.random()
    const result = isInteger(input1);
    expect(typeof result === 'boolean').toBeTruthy();
  });

  test('returns true if the number is zero or a negative integer', () => {
        
    // Arrange: setup the world
    const input1 = 0;
    const input2 = -10;
    const input3 = -5.5
    // Act: execute the code you're testing
    const result = isInteger(input1);
    const result2 = isInteger(input2);
    const result3 = isInteger(input3);
    // Assert: check that it works
    // expect(getBiggest(input1, input1)).toBe(input1);
    expect(result).toBe(true);
    expect(result2).toBe(true);
    expect(result3).toBe(false);
  });

  test('expects the parameter to be a number, not a string', () => {
    expect(isInteger('35')).toBeFalsy();
    expect(isInteger(35)).toBeTruthy();
    expect(isInteger()).toBeFalsy();
  });
})

// fizzBuzz
describe('fizzBuzz', () => {

  it('determines if a parameter a multiple of 3 and/or 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(Math.PI)).toBe(Math.PI);
  });

  test('returns a string or a number', () => {
    const input1 = Math.random()
    const result = fizzBuzz(input1);
    const result2 = fizzBuzz(15);
    expect(typeof result === 'string' || typeof result === 'number').toBeTruthy
    expect(typeof result2 === 'string').toBeTruthy();
  });

  test('returns true if the number is zero or a negative integer', () => {
        
    // Arrange: setup the world
    const input1 = 6;
    const input2 = 10;
    const input3 = -30;
    // Act: execute the code you're testing
    const result = fizzBuzz(input1);
    const result2 = fizzBuzz(input2);
    const result3 = fizzBuzz(input3);
    // Assert: check that it works
    // expect(getBiggest(input1, input1)).toBe(input1);
    expect(result).toBe('fizz');
    expect(result2).toBe('buzz');
    expect(result3).toBe('fizzbuzz');
  });

  test('expects the parameter to be a number, not a string', () => {
    expect(fizzBuzz('30')).toBe('fizzbuzz');
    expect(fizzBuzz(35)).toBeTruthy();
    expect(fizzBuzz()).toBeFalsy();
  });
})

  // isPrime
  describe('isPrime', () => {

    it('determines if a parameter is an integer', () => {
      expect(isPrime(81749)).toBe(true);
      expect(isPrime(Math.PI)).toBe(false);
    });
  
    test('returns a boolean', () => {
      const input1 = Math.random()
      const result = isPrime(input1);
      expect(typeof result === 'boolean').toBeTruthy();
    });
  
    test('returns false if the number is less than 2', () => {
          
      // Arrange: setup the world
      const input1 = Math.random() * -1;
      const input2 = 0;
      const input3 = 1;
      // Act: execute the code you're testing
      const result = isPrime(input1);
      const result2 = isPrime(input2);
      const result3 = isPrime(input3);
      // Assert: check that it works
      // expect(getBiggest(input1, input1)).toBe(input1);
      expect(result).toBe(false);
      expect(result2).toBe(false);
      expect(result3).toBe(false);
    });
  
    test('expects the parameter to be a number, not a string', () => {
      expect(isPrime('2')).toBeFalsy();
      expect(isPrime(2)).toBeTruthy();
      expect(isPrime(null)).toBeFalsy();
    });
  })

  // returnFirst
  describe('returnFirst', () => {

it('returns the first item in an array', () => {
  expect(returnFirst([1, 2, 3])).toBe(1);
  expect(returnFirst(['Gem', 'Kat'])).toBe('Gem');
});

test('expects the parameter to be an array', () => {
  const valuesToCheck =[
    1, 
    0,  
    {id: 1},
    function aNum(num) {return num},
    Date.now(),
    NaN,
    true,
    false
  ]
  valuesToCheck.forEach(val => {
    expect(returnFirst(val)).toBeUndefined();
  })
  expect(returnFirst(['first', 'second'])).toBeTruthy();
});

  test('expect array to have length', () => {
    expect(returnFirst([])).toBeUndefined();
  })

  test('expect string to return null', () => {
    expect(returnFirst('')).toBeNull();
    expect(returnFirst('a string')).toBeNull();
  })


  test('throws an error if the parameter is null or undefined', () => {
    expect(() => returnFirst()).toThrow();
    expect(() => returnFirst(undefined)).toThrow();
    expect(() => returnFirst(null)).toThrow();
  })


// test('returns false if the number is less than 2', () => {
      
//   // Arrange: setup the world
//   const input1 = Math.random() * -1;
//   const input2 = 0;
//   const input3 = 1;
//   // Act: execute the code you're testing
//   const result = returnFirst(input1);
//   const result2 = returnFirst(input2);
//   const result3 = returnFirst(input3);
//   // Assert: check that it works
//   // expect(getBiggest(input1, input1)).toBe(input1);
//   expect(result).toBe(false);
//   expect(result2).toBe(false);
//   expect(result3).toBe(false);
// });

// test('expects the parameter to be a number, not a string', () => {
//   expect(isPrime('2')).toBeFalsy();
//   expect(isPrime(2)).toBeTruthy();
//   expect(isPrime(null)).toBeFalsy();
// });
})

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

// const isNum = val => {
//   return val === 0 || typeof val/1 === 'number';
// }

// const isNumOrParsedStrNum = val => {
//   const parsed = parseFloat(val)
//   return typeof parsed === 'number' && Boolean(val) || parsed === 0;
// }

// const isNan = val => {
//   return (isNum(val) === false && typeof val === 'number')
// }

// const isEmptyStr = val => {
//   return !Boolean(val) && typeof val === 'string';
// }

// const valType = (valArr) => {
//   if (Object.prototype.toString.call(valArr).slice(8, -1) !== 'Array') {
//     valArr = [valArr]
//   }
//   return valArr.map(val => Object.prototype.toString.call(val).slice(8, -1))
// }

// const convertStrNum = strNum => {
//   return parseFloat(strNum)
// }

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
