const { getBiggest, greeting, isTenOrFive, isInRange, isInteger, fizzBuzz, isPrime, returnFirst, returnLast, getArrayLength, incrementByOne, addItemToEndOfArray, addItemToFront, wordsToSentence, contains, addNumbers, averageTestScore, largestNumber } = require('./project-2');


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
    expect(typeof getBiggest(0, 0) === 'number').toBeTruthy();
  });

  test('returns the largest number', () => {
    const input1 = 100;
    const input2 = -100;
    expect(getBiggest(input1, input1)).toBe(input1);
    expect(getBiggest(input2, input1)).toBe(input1);
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
    expect (greeting('German')).toBe('Guten Tag!');
    expect (greeting('Swedish')).toBe('Hello!');
  });

  test('returns a string', () => {
    expect(typeof greeting('') === 'string').toBeTruthy();
  });

  test('return a greeting based on the input', () => {
    expect (greeting('German')).toBe('Guten Tag!');
    expect (greeting('Spanish')).toBe('Hola!');
    expect (greeting(!('Spanish') || !('German'))).toBe('Hello!');
  });
});

describe('isTenOrFive', () => {

  it('compares parameter to 10 or 5 and returns a boolean', () => {
    expect(isTenOrFive(5)).toBe(true);
    expect(isTenOrFive(6)).toBe(false);
  });

  test('returns a boolean', () => {
    expect(typeof isTenOrFive(6) === 'boolean').toBeTruthy();
  });
})

// isInRange
describe('isInRange', () => {

  it('determines if the num is between 20 and 50', () => {
    expect(isInRange(35)).toBeTruthy();
  });

  test('returns a boolean', () => {
    expect(typeof isInRange(1) === 'boolean').toBeTruthy();
  });

  test('returns true if the number is between 20 and 50', () => {
    expect(isInRange(19.999)).toBe(false);
    expect(isInRange(50.0001)).toBe(false);
    expect(isInRange(20.0001)).toBe(true);
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
    expect(typeof isInteger(Math.PI) === 'boolean').toBeTruthy();
  });

  test('returns true if the number is zero or a negative integer', () => {
    expect(isInteger(0)).toBe(true);
    expect(isInteger(-10)).toBe(true);
    expect(isInteger(-5.5)).toBe(false);
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
    expect(fizzBuzz(1)).toBe(1);
  });

  test('returns a string or a number', () => {
    const input1 = fizzBuzz(1);
    const result = fizzBuzz(input1);
    const result2 = fizzBuzz(15);
    expect(typeof result === 'string' || typeof result === 'number').toBeTruthy
    expect(typeof result2 === 'string').toBeTruthy();
  });

  test('returns true if the number is zero or a negative integer', () => {
    expect(fizzBuzz(0)).toBe('fizzbuzz');
    expect(fizzBuzz(-30)).toBe('fizzbuzz');
  });

  test('expects the parameter to be a number (including string-numbers), not a string', () => {
    expect(fizzBuzz('30px')).toBe('fizzbuzz');
    expect(fizzBuzz(35)).toBeTruthy();
    expect(fizzBuzz('hi')).toBeNull();
  });
})

  // isPrime
  describe('isPrime', () => {

    it('determines if a parameter is an integer', () => {
      expect(isPrime(81749)).toBe(true);
      expect(isPrime(Math.PI)).toBe(false);
    });
  
    test('returns a boolean', () => {
      expect(typeof isPrime(10) === 'boolean').toBeTruthy();
    });
  
    test('returns false if the number is less than 2', () => {
      expect(isPrime(0)).toBe(false);
      expect(isPrime(1)).toBe(false);
      expect(isPrime(-3)).toBe(false);
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
    expect(returnFirst('')).toBe(null);
    expect(returnFirst('a string')).toBe(null);
  })

  test('throws an error if the parameter is null or undefined', () => {
    expect(() => returnFirst()).toThrow();
    expect(() => returnFirst(undefined)).toThrow();
    expect(() => returnFirst(null)).toThrow();
  })

  test('expects the return to be of any value', () => {
    const checkTruthyReturns =[
      [1], 
      ['string', 'another string'],  
      [{id: 1}],
      [function aNum(num) {return num}],
      [Date.now()],
      [true],
    ]
    checkTruthyReturns.forEach(ret => {
      expect(returnFirst(ret)).toBeTruthy();
    })
    const checkFalsyReturns = [
      [0],  
      [-0],
      [NaN],
      [false],
      [null],
      [undefined],
      [''],
    ]
    checkFalsyReturns.forEach(ret => {
      expect(returnFirst(ret)).toBeFalsy();
    })
  });
})

// returnLast
describe('returnLast', () => {

  it('returns the last item in an array', () => {
    expect(returnLast([1, 2, 3])).toBe(3);
    expect(returnLast(['Gem', 'Kat'])).toBe('Kat');
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
      expect(returnLast(val)).toBeUndefined();
    })
    expect(returnLast(['first', 'second'])).toBeTruthy();
  });
  
    test('expect array to have length', () => {
      expect(returnLast([])).toBeUndefined();
    })
  
    test('expect string to return null', () => {
      expect(returnLast('')).toBe(null);
      expect(returnLast('a string')).toBe(null);
    })
  
    test('throws an error if the parameter is null or undefined', () => {
      expect(() => returnLast()).toThrow();
      expect(() => returnLast(undefined)).toThrow();
      expect(() => returnLast(null)).toThrow();
    })
  
    test('expects the return to be of any value', () => {
      const checkTruthyReturns =[
        [1], 
        ['string', 'another string'],  
        [{id: 1}],
        [function aNum(num) {return num}],
        [Date.now()],
        [true],
      ]
      checkTruthyReturns.forEach(ret => {
        expect(returnLast(ret)).toBeTruthy();
      })
      const checkFalsyReturns = [
        [0],  
        [-0],
        [NaN],
        [false],
        [null],
        [undefined],
        [''],
      ]
      checkFalsyReturns.forEach(ret => {
        expect(returnLast(ret)).toBeFalsy();
      })
    });
  })

// getArrayLength
describe('getArrayLength', () => {

  it('returns the length of an array', () => {
    expect(getArrayLength([1, 2, 3])).toBe(3);
    expect(getArrayLength(['Gem', 'Kat'])).toBe(2);
    expect(getArrayLength([])).toBe(0);
  });
  
  test('expects the parameter to be an array', () => {
    const valuesToCheck =[
      1, 
      0,  
      {id: 1},
      Date.now(),
      NaN,
      true,
      false
    ]
    valuesToCheck.forEach(val => {
      expect(getArrayLength(val)).toBeUndefined();
    })
    expect(getArrayLength(function aNum(num) {return num})).toBeNull();

    expect(getArrayLength([1])).toBeTruthy();
  });

  test('expect string to return null', () => {
    expect(getArrayLength('')).toBe(null);
    expect(getArrayLength('a string')).toBe(null);
  })

  test('throws an error if the parameter is null or undefined', () => {
    expect(() => getArrayLength()).toThrow();
    expect(() => getArrayLength(undefined)).toThrow();
    expect(() => getArrayLength(null)).toThrow();
  })
  
  test('expects the return to be a number', () => {
    const checkReturns =[
      [1], 
      ['string'],  
      [{id: 1}],
      [function aNum(num) {return num}],
      [Date.now()],
      [true],
    ]
    checkReturns.forEach(ret => {
      expect(getArrayLength(ret)).toBe(1);
      expect(getArrayLength(ret)).toEqual(expect.any(Number));
    })
    const checkFalsyReturns = [
      [0],  
      [-0],
      [NaN],
      [false],
      [null],
      [undefined],
      [''],
    ]
    checkFalsyReturns.forEach(ret => {
      expect(getArrayLength(ret)).toBe(1);
    })
  });
})

// wordsToSentence
describe('wordsToSentence', () => {

  it('combines the elements of an array into a string', () => {
    expect(wordsToSentence([1, 2, 3])).toBe('1 2 3');
    expect(wordsToSentence(['Passed', 'the', 'test!'])).toBe('Passed the test!');
    expect(wordsToSentence([])).toBe('');
  });
  
  test('throws an error if the parameter is not an array', () => {
    const valuesToCheck =[
      1, 
      0,  
      {id: 1},
      Date.now(),
      function aNum(num) {return num},
      NaN,
      true,
      false,
      '',
      'string',
      undefined,
      null,
    ]
    valuesToCheck.forEach(val => {
      expect(() => wordsToSentence(val)).toThrowError();
    })
    expect(() => wordsToSentence()).toThrow();

    expect(wordsToSentence([1])).toBeTruthy();
  });
  
  test('expects the return to be a string', () => {
    const checkReturns =[
      [1], 
      ['string'],  
      [{id: 1}],
      [function aNum(num) {return num}],
      [Date.now()],
      [true],
      [0],  
      [-0],
      [NaN],
      [false],
    ]
    checkReturns.forEach(ret => {
      expect(wordsToSentence(ret)).toBeTruthy();
      expect(wordsToSentence(ret)).toEqual(expect.any(String));
    })
    const checkFalsyReturns = [
      [null],
      [undefined],
      [''],
    ]
    checkFalsyReturns.forEach(ret => {
      expect(wordsToSentence(ret)).toBeFalsy();
    })
  });
})

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
  addItemToEndOfArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
