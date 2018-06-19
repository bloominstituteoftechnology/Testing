const funcs = require('./project-2');

// Ron's ridiculous functions

const setType = (type, val) => {
  switch (type) {
    case "str":
    case "string":
      if(typeof val === "string") return val;
      return val.toString();
    case "num":
    case "number":
      return Number(val);
    case "bool":
    case "boolean":
      if (val === "true") return true;
      return false;
    default:
      return val;
  }
};

// See below for the raunchiest, hottest code ever in:
/* ~Compexity Gone Wild~ */
// Rated X. 18+ Only
const testBase = cb => {

  return (str, arr = []) => {
    // Tear the string bloody apart
    const strToArr = str.split(' ');
    const [ matcher, typeOfExpected, ...rest] = strToArr;
    const indexOfGiven = rest.indexOf('given');
    const expected = rest.slice(0, indexOfGiven).join(' ');
    const [given, typeOfArgs, ...args] = rest.slice(indexOfGiven);
    const typedExpected = setType(typeOfExpected, expected);
    const typedArgs = args.map(arg => setType(typeOfArgs, arg));
    // Return the `it` function 
    return it(`returns ${typeOfExpected} ${typedExpected} given ${typeOfArgs} ${typedArgs}`, () => {
      let actual;
      if (typeOfArgs === 'array') {
        actual = cb(arr);
      } else if (typeOfArgs === 'arguments') {
        actual = cb(...arguments);
      } else {
        actual = cb(...typedArgs);
      }
      const expectation = expect(actual);
      switch (matcher) {
        case "toBeCloseTo":
          expectation.toBeCloseTo(typedExpected);
          break;
        case "toBeFalsy":
          expectation.toBeFalsy();
          break;
        case "toBe":
        default:
          expectation.toBe(typedExpected);
          break;
      }
    });
  };
};

const testType = (str, cb, arr) => {
  const [_, __, type, given, typeOfArgs, ...args] = str.split(' ');
  const typedArgs = args.map(arg => setType(typeOfArgs, arg));
  return it(`Type-Check: returns type ${type} given ${typeOfArgs}s ${typedArgs}`, () => {
    // arrange
    const expected = type;
    // act
    let actual;
    if (typeOfArgs === 'array') {
      actual = typeof cb(arr);
    } else {
      actual = typeof cb(...typedArgs);
    }
    // assert
    expect(actual).toBe(expected);
  });
};

// Start Testing

describe('getBiggest', () => {
  const { getBiggest } = funcs;
  const testIt = testBase(getBiggest);

  testType('returns type number given num 3 5',getBiggest);

  describe('Correctly identifies the bigger value:',() => {
    testIt('toBe num 5 given num 3 5');
    testIt('toBe num 12 given num 12 12');
  });

  describe('Appropriatley handles non-number inputs:', () => {
    // testIt('toBeFalsy any falsy given string boys girls');
    // testIt('toBeFalsy any falsy given arguments',[null,"21"]);
    // skip
  });
});

describe('greeting', () => {
  const { greeting } = funcs;
  const testIt = testBase(greeting);

  testType('returns type string given string Japanese',greeting);

  describe('Returns the correct greeting:',() => {
    testIt(`toBe string Guten Tag! given string German`);
    testIt('toBe str Hola! given str Spanish');
    testIt('toBe str Hello! given str Japanese');
  });

  describe('Can ignore casing of input:',() => {
    testIt(`toBe string Guten Tag! given string german`);
    testIt('toBe str Hola! given str SPANISH');
    testIt('toBe str Hello! given str');
  });
});

describe('isTenOrFive', () => {
  const { isTenOrFive } = funcs;
  const testIt = testBase(isTenOrFive);

  testType('returns type boolean given num 3',isTenOrFive);

  describe('Correctly identifies number that is 10 or 5:', () => {
    testIt('toBe bool true given num 5');
    testIt('toBe bool true given num 10');
    testIt('toBe bool false given num 12');
  });
});

describe('isInRange', () => {
  const { isInRange } = funcs;
  const testIt = testBase(isInRange);

  testType('returns type boolean given num 42',isInRange);

  describe('Correctly identifies number in range:',()=>{
    testIt('toBe bool true given num 42');
    testIt('toBe bool false given num 69');
    testIt('toBe bool false given num -144');
  });
});

describe('fizzBuzz', () => {
  const { fizzBuzz } = funcs;
  const testIt = testBase(fizzBuzz);

  testType('returns type string given number 15',fizzBuzz);
  testType('returns type number given number 7',fizzBuzz);

  describe('Correctly returns fizz:',()=>{
    testIt('toBe string fizz given number 3');
    testIt('toBe string fizz given number 69');
  });
  describe('Correctly returns buzz:',()=>{
    testIt('toBe string buzz given number 5');
    testIt('toBe string buzz given number 80');
  });
  describe('Correctly returns fizzbuzz:',() => {
    testIt('toBe string fizzbuzz given number 15');
    testIt('toBe string fizzbuzz given number 75');
  });
});

describe('isPrime', () => {
  const { isPrime } = funcs;
  const testIt = testBase(isPrime);

  testType('returns type boolean given number 15',isPrime);

  describe('Correctly identifies primes:',()=>{
    testIt('toBe bool true given num 13');
    testIt('toBe bool true given num 104729');
  });

  describe('Correctly identifies non-primes:',()=>{
    testIt('toBe bool false given num 8');
    testIt('toBe bool false given num 1000000');
  });
});

describe('returnFirst', () => {
  const { returnFirst } = funcs;
  const testIt = testBase(returnFirst);

  describe('Correctly returns first element of array:',()=>{
    testIt('toBe num 42 given array',[42,69,12,144]);
    testIt('toBe string yes given array',['yes','no']);
  });
});

describe('returnLast', () => {
  const { returnLast } = funcs;
  const testIt = testBase(returnLast);

  describe('Correctly returns last element of array:',()=>{
    testIt('toBe num 144 given array',[42,69,12,144]);
    testIt('toBe string no given array',['yes','no']);
  });
});

/* Worked on below with Nando */
describe('getArrayLength', () => {
  let testFunction = funcs.getArrayLength
  it('returns a number', () => {
      // arrange
      let expected = "number"
      // act
      let actual = typeof testFunction([])
      // assert
      expect(actual).toBe(expected)
  })
  it('returns 1 given [10]', () => {
      let actual = testFunction([10])
      let expected = 1
      expect(actual).toBe(expected)
  })
  it('returns 3 given ["blabla",74,2]', () => {
      let actual = testFunction(["blabla", 74, 2])
      let expected = 3
      expect(actual).toBe(expected)
  })
})
describe('getArrayLength', () => {
  let testFunction = funcs.getArrayLength
  it('returns a number', () => {
      // arrange
      let expected = "number"
      // act
      let actual = typeof testFunction([])
      // assert
      expect(actual).toBe(expected)
  })
  it('returns 1 given [10]', () => {
      let actual = testFunction([10])
      let expected = 1
      expect(actual).toBe(expected)
  })
  it('returns 3 given ["blabla",74,2]', () => {
      let actual = testFunction(["blabla", 74, 2])
      let expected = 3
      expect(actual).toBe(expected)
  })
})
describe('incrementByOne', () => {
  let testFunction = funcs.incrementByOne
  // Testing for array output
  it('returns an array', () => {
      // arrange
      let expected = "object"
      // act
      let actual = typeof testFunction([])
      // assert
      expect(actual).toBe(expected)
  })
  it('returns an array #2', () => {
      // act
      let actual = testFunction([])
      // assert
      expect(actual).toHaveLength(0)
  })
  it('returns array w/ each value incremented by one', () => {
      let actual = testFunction([10, 11, 12])
      let expected = [11, 12, 13]
      expect(actual).toEqual(expected)
  })
})
describe('addItemToArray', () => {
  let testFunction = funcs.addItemToArray
  // Testing for array output
  it('returns an array', () => {
      let expected = "object"
      let actual = typeof testFunction([])
      expect(actual).toBe(expected)
  })
  it('returns an array #2', () => {
      let actual = testFunction([], 13)
      expect(actual).toHaveLength(1)
  })
  it('returns array w/ item added', () => {
      let actual = testFunction([10, 11, 12], 13)
      let expected = [10, 11, 12, 13]
      expect(actual).toEqual(expected)
  })
})
describe('addItemToFront', () => {
  let testFunction = funcs.addItemToFront
  // Testing for array output
  it('returns an array', () => {
      // arrange
      let expected = "object"
      // act
      let actual = typeof testFunction([])
      // assert
      expect(actual).toBe(expected)
  })
  it('returns an array #2', () => {
      // act
      let actual = testFunction([], 13)
      // assert
      expect(actual).toHaveLength(1)
  })
  it('returns array w/ item in front', () => {
      let actual = testFunction([10, 11, 12], 13)
      let expected = [13, 10, 11, 12]
      expect(actual).toEqual(expected)
  })
})
describe('wordsToSentence', () => {
  let testFunction = funcs.wordsToSentence
  // Testing for array output
  it('returns a string', () => {
      // arrange
      let expected = "string"
      // act
      let actual = typeof testFunction(['bla'])
      // assert
      expect(actual).toBe(expected)
  })
  it('returns String that concats all passed words', () => {
      let actual = testFunction(["Nando", "is", 'cool'])
      let expected = 'Nando is cool'
      expect(actual).toBe(expected)
  })
})
describe('contains', () => {
  let testFunction = funcs.contains
  // Testing for array output
  it('returns a boolean', () => {
      // arrange
      let expected = "boolean"
      // act
      let actual = typeof testFunction(['bla'], 'bla')
      // assert
      expect(actual).toBe(expected)
  })
  it('returns true if arg1 includes arg 2 ', () => {
      let actual = testFunction(["Nando", "is", 'cool'], 'Nando')
      let expected = true
      expect(actual).toBe(expected)
  })
})
describe('addNumbers', () => {
  let testFunction = funcs.addNumbers
  // Testing for array output
  it('returns a number', () => {
      // arrange
      let expected = "number"
      // act
      let actual = typeof testFunction([10, 50])
      // assert
      expect(actual).toBe(expected)
  })
  it('returns 60 given [10,50]', () => {
      let actual = testFunction([10, 50])
      let expected = 60
      expect(actual).toBe(expected)
  })
  it('returns -40 given [10,-50]', () => {
      let actual = testFunction([10, -50])
      let expected = -40
      expect(actual).toBe(expected)
  })
})
describe('averageTestScore', () => {
  let testFunction = funcs.averageTestScore
  // Testing for array output
  it('returns a number', () => {
      // arrange
      let expected = "number"
      // act
      let actual = typeof testFunction([10, 50])
      // assert
      expect(actual).toBe(expected)
  })
  it('returns 10 given [10,10]', () => {
      let actual = testFunction([10, 10])
      let expected = 10
      expect(actual).toBe(expected)
  })
  it('returns 55 given [10,100]', () => {
      let actual = testFunction([10, 100])
      let expected = 55
      expect(actual).toBe(expected)
  })
})
describe('largestNumber', () => {
  let testFunction = funcs.largestNumber
  // Testing for array output
  it('returns a number', () => {
      // arrange
      let expected = "number"
      // act
      let actual = typeof testFunction([10, 50])
      // assert
      expect(actual).toBe(expected)
  })
  it('returns 20 given [20,10]', () => {
      let actual = testFunction([20, 10])
      let expected = 20
      expect(actual).toBe(expected)
  })
  it('returns 55 given [10,55]', () => {
      let actual = testFunction([10, 55])
      let expected = 55
      expect(actual).toBe(expected)
  })
})
