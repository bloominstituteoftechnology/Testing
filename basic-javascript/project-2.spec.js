const {
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
  } = require('./project-2');

describe('getBiggest', () => {
    test('type check: getBiggest', () => {
    const num1 = 1;
    const num2 = 4;
    const result = getBiggest(num1, num2);
    expect(typeof result === 'number').toBeTruthy();
    })

    test('result check: getBiggest', () => {
        const num1 = 1;
        const num2 = 10;
        const result = getBiggest(num1, num2);
        expect(result).toBe(10);
    })  
})

describe('greeting', () => {
    test('type check: greeting', () => {
    const input = 'German';
    const result = greeting(input);
    expect(typeof result === 'string').toBeTruthy();
    })

    test('german check: greeting', () => {
        const input = 'German';
        const result = greeting(input);
        expect(result).toBe('Guten Tag!');
    })  

    test('spanish check: greeting', () => {
        const input = 'Spanish';
        const result = greeting(input);
        expect(result).toBe('Hola!');
    })  
})

describe('isTenOrFive', () => {
  test('true check: isTenOrFive', () => {
    const num = 10;
    const result = isTenOrFive(num);
    expect(result).toBeTruthy();
  })
  
  test('false check: isTenOrFive', () => {
    const num = 7;
    const result = isTenOrFive(num);
    expect(result).toBeFalsy();
  })
})

describe('isInRange', () => {
  test('true check: isInRange', () => {
    const num = 10;
    const result = isInRange(num);
    expect(result).toBeFalsy();
  })
  
  test('false check: isInRange', () => {
    const num = 32;
    const result = isInRange(num);
    expect(result).toBeTruthy();
  })
})

describe('isInteger', () => {
    test('true check: isInteger', () => {
      const num = 'abc';
      const result = isInteger(num);
      expect(result).toBeFalsy();
    })
    
    test('false check: isInteger', () => {
      const num = 32;
      const result = isInteger(num);
      expect(result).toBeTruthy();
    })
})

describe('fizzBuzz', () => {
    test('true check: fizzBuzz', () => {
      const num = 12;
      const result = fizzBuzz(num);
      expect(result).toBe('fizz');
    })
    
    test('false check: fizzBuzz', () => {
      const num = 30;
      const result = fizzBuzz(num);
      expect(result).toBe('fizzbuzz');
    })
})

describe('isPrime', () => {
    test('true check: isPrime', () => {
      const num = -1;
      const result = isPrime(num);
      expect(result).toBeFalsy();
    })
    
    test('false check: isPrime', () => {
      const num = 17;
      const result = isPrime(num);
      expect(result).toBeTruthy();
    })
})

describe('returnFirst', () => {
    test('result check: returnFirst', () => {
      const arr = [0, 1, 2, 3];
      const result = returnFirst(arr);
      expect(result).toBe(0);
    })
})

describe('returnLast', () => {
    test('result check: returnLast', () => {
      const arr = [0, 1, 2, 3];
      const result = returnLast(arr);
      expect(result).toBe(3);
    })
})

describe('getArrayLength', () => {
    test('result check: getArrayLength', () => {
      const arr = [0, 1, 2, 3];
      const result = getArrayLength(arr);
      expect(result).toBe(4);
    })
})

describe('incrementByOne', () => {
    test('result check: incrementByOne', () => {
      const arr = [0, 1, 2, 3];
      const result = incrementByOne(arr);
      expect(result).toEqual([1,2,3,4]);
    })
})

describe('addItemToArray', () => {
    test('result check: addItemToArray', () => {
      const arr = [0, 1, 2, 3];
      const item = 4;
      const result = addItemToArray(arr, item);
      expect(result).toEqual([0,1,2,3,4]);
    })
})

describe('addItemToFront', () => {
    test('result check: addItemToFront', () => {
      const arr = [0, 1, 2, 3];
      const item = -1;
      const result = addItemToFront(arr, item);
      expect(result).toEqual([-1,0,1,2,3]);
    })
})

describe('wordsToSentence', () => {
    test('type check: wordsToSentence', () => {
        const input = ['Hello', 'World'];
        const result = wordsToSentence(input);
        expect(typeof result === 'string').toBeTruthy();
    })

    test('result check: wordsToSentence', () => {
        const input = ['Hello', 'World!'];
        const result = wordsToSentence(input);
        expect(result).toBe('Hello World!');
    })  
})

describe('contains', () => {
    test('true check: contains', () => {
        const arr = [1, 2, 3, 4, 10]
        const num = 10;
        const result = contains(arr, num);
        expect(result).toBeTruthy();
    })
    
    test('false check: contains', () => {
      const num = 10;
      const arr = [1, 2, 3, 4]
      const result = contains(num);
      expect(result).toBeFalsy();
    })
})

describe('addNumbers', () => {
    test('type check: addNumbers', () => {
        const nums = [1,2,3,4]
        const result = addNumbers(nums);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: addNumbers', () => {
        const nums = [1,2,3,4]
        const result = addNumbers(nums);
        expect(result).toBe(10);
    })  
})

describe('averageTestScore', () => {
    test('type check: averageTestScore', () => {
        const nums = [10,20,30,40,50]
        const result = averageTestScore(nums);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: averageTestScore', () => {
        const nums = [10,20,30,40,50]
        const result = averageTestScore(nums);
        expect(result).toBe(30);
    })  
})

describe('largestNumber', () => {
    test('type check: largestNumber', () => {
        const nums = [10,20,30,40,50]
        const result = largestNumber(nums);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: largestNumber', () => {
        const nums = [10,20,30,40,50]
        const result = largestNumber(nums);
        expect(result).toBe(50);
    })  
})