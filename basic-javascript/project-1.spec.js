const helpers = require('./project-1');

// Ron's lazy functions

const testBase = cb => {
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
  return (str, arr = [], matcher = "toBe") => {
    const strToArr = str.split(' ');
    const [ returns, typeOfExpected, expected, given, typeOfArgs, ...args ] = strToArr;
    const typedExpected = setType(typeOfExpected, expected);
    const typedArgs = 
      typeOfArgs === "array" || typeOfArgs === "arguments" ? 
        arr 
        : 
        args.map(arg => setType(typeOfArgs, arg));
    
    return it(`returns ${typeof typedExpected} ${typedExpected} given ${typeof typedArgs[0]} ${typedArgs}`, () => {
      const actual = cb(...typedArgs);
      const expectation = expect(actual);
      switch (matcher) {
        case "toBe":
          expectation.toBe(typedExpected);
          break;
        case "toBeCloseTo":
          expectation.toBeCloseTo(typedExpected);
          break;
        case "toBeFalsy":
          expectation.toBeFalsy();
          break;
      }
    });
  };
};

const testType = (type, args, cb) => it(`Type-Check: returns ${type} given ${typeof args[0]}s ${args}`, () => {
    // arrange
    const expected = type;
    // act
    const actual = typeof cb(...args);
    // assert
    expect(actual).toBe(expected);
  });

// start testing!
describe('multiplyByTen', () => {
  const testIt = testBase(helpers.multiplyByTen);

  describe('multiplies positive integers by 10', () => {
    testIt('returns num 20 given num 2');
    testIt('returns num 100 given num 10');
  });
  describe('multiplies negative integers by 10', () => {
    testIt('returns num -50 given num -5');
    testIt('returns num -100 given num -10');
  });
  describe('handles edge cases appropriately', () => {
    it('returns NaN for non-number inputs', () => {
      expect(helpers.multiplyByTen('hello')).toBeNaN();
    });
    it.skip('returns NaN for numbers outside allowable range', () => {
      expect(helpers.multiplyByTen(Infinity)).toBeNaN();
      expect(helpers.multiplyByTen(-Infinity)).toBeNaN();
    });
  });
});

describe('subtractFive', () => {
  const { subtractFive } = helpers;
  const testIt = testBase(subtractFive);

  describe('appropriately subtracts five', () => {
    testIt('returns num 2 given num 7 5')
    testIt('returns num -8 given num -3 5');
  });
});

describe('areSameLength', () => {
  const { areSameLength } = helpers;
  const testIt = testBase(areSameLength);

  describe('correctly identifies same lengths', () => {
    testIt('returns bool true given str jazzlike quizzing');
    testIt('returns bool false given str quidditch demonstrably');
  });

  // describe('handles non-standard input', () => {
  //   testIt('returns bool false for num 21 181');
  // });
});

describe('areEqual', () => {
  const { areEqual } = helpers;
  const testIt = testBase(areEqual);

  describe('correctly identifies equality', () => {
    testIt('returns bool true for str "1" "1"');
    testIt('returns bool true for str "abc" "abc"');
  });

  describe('returns false for type mismatch', () => {
    testIt('returns bool false given array',[1,"1"]);
    testIt('returns bool false given array',[null, 0]);
  });
});

describe('lessThan90', () => {
  const { lessThanNinety } = helpers;
  const testIt = testBase(lessThanNinety);

  describe('correctly identifies numbers less than 90', () => {
    testIt('returns bool true given num 89');
    testIt('returns bool false given num 91');
  });

  describe('returns false for type mismatch', () => {
    testIt('returns bool false for str cookies');
    // testIt('returns bool false for bool false');
    //skip
  });
});

describe('greaterThanFifty', () => {
  const { greaterThanFifty } = helpers;
  const testIt = testBase(greaterThanFifty);
  describe('correctly identifies numbers > 50', () => {
    testIt('returns bool true for num 51');
    testIt('returns bool false for num 42');
  });

  describe('returns a boolean', () => {
    it('returns a boolean', () => {
      // arrange
      const expected = "boolean";
      // act
      const actual = typeof greaterThanFifty(49);
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('add', () => {
  const functionTest = helpers.add;

  it(`returns a ${type = 'number'}`, () => {
    // arrange
    const expected = type;
    // act
    const actual = typeof functionTest(2, 2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly adds numbers', () => {
    it(`return 12 given 9, 3`, () => {
      // arrange
      const expected = 12;
      // act
      const actual = functionTest(9, 3);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return -1 given -5, 4`, () => {
      // arrange
      const expected = -1;
      // act
      const actual = functionTest(-5, 4);
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('substract', () => {
  const functionTest = helpers.subtract;

  it(`returns a ${type = 'number'}`, () => {
    // arrange
    const expected = type;
    // act
    const actual = typeof functionTest(2, 2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly subtracts numbers', () => {
    it(`return 6 given 9, 3`, () => {
      // arrange
      const expected = 6;
      // act
      const actual = functionTest(9, 3);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return -9 given -5, 4`, () => {
      // arrange
      const expected = -9;
      // act
      const actual = functionTest(-5, 4);
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('multiply', () => {
  const functionTest = helpers.multiply;

  it(`returns a ${type = 'number'}`, () => {
    // arrange
    const expected = type;
    // act
    const actual = typeof functionTest(2, 2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly multiplies numbers', () => {
    it(`return 27 given 9, 3`, () => {
      // arrange
      const expected = 27;
      // act
      const actual = functionTest(9, 3);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return  -20 given -5, 4`, () => {
      // arrange
      const expected = -20;
      // act
      const actual = functionTest(-5, 4);
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('divide', () => {
  const functionTest = helpers.divide;

  it(`returns a ${type = 'number'}`, () => {
    // arrange
    const expected = type;
    // act
    const actual = typeof functionTest(2, 2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly divides numbers', () => {
    it(`return 3 given 9, 3`, () => {
      // arrange 
      const expected = 3;
      // act
      const actual = functionTest(9, 3);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return -5 given -20, 4`, () => {
      // arrange
      const expected = -5;
      // act
      const actual = functionTest(-20, 4);
      // assert
      expect(actual).toBe(expected);
    });
  });

  describe('edge cases', () => {
    it.skip(`return NaN given the divisor is 0`, () => {
      //act
      const actual = functionTest(5, 0);
      // assert
      expect(actual).toBeNaN();
    });
  });
});

describe('getRemainder', () => {
  const functionTest = helpers.getRemainder;

  it(`returns a ${type = 'number'}`, () => {
    // arrange
    const expected = type;
    // act
    const actual = typeof functionTest(2, 2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly gets remainder of numbers', () => {
    it(`return 0 given 9, 3`, () => {
      // arrange 
      const expected = 0;
      // act
      const actual = functionTest(9, 3);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return 1 given 97, 12`, () => {
      // arrange
      const expected = 1;
      // act
      const actual = functionTest(97, 12);
      // assert
      expect(actual).toBe(expected);
    });
  });

  describe('edge cases', () => {
    it.skip(`return NaN given the divisor is 0`, () => {
      //act
      const actual = functionTest(5, 0);
      // assert
      expect(actual).toBeNaN();
    });
  });
});

describe('isEven', () => {
  const functionTest = helpers.isEven;

  it(`returns a boolean`, () => {
    // arrange
    const expected = 'boolean';
    // act
    const actual = typeof functionTest(2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly returns true if even', () => {
    it(`return true given 12`, () => {
      // arrange 
      const expected = true;
      // act
      const actual = functionTest(12);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return false given 4.44`, () => {
      // arrange
      const expected = false;
      // act
      const actual = functionTest(4.44);
      // assert
      expect(actual).toBe(expected);
    });
  });

});

describe('isOdd', () => {
  const functionTest = helpers.isOdd;

  it(`returns a boolean`, () => {
    // arrange
    const expected = 'boolean';
    // act
    const actual = typeof functionTest(2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly returns true if odd', () => {
    it(`return true given 9`, () => {
      // arrange 
      const expected = true;
      // act
      const actual = functionTest(9);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return false given 12`, () => {
      // arrange 
      const expected = false;
      // act
      const actual = functionTest(12);
      // assert
      expect(actual).toBe(expected);
    });
    it.skip(`return false given 4.44`, () => {
      // arrange
      const expected = false;
      // act
      const actual = functionTest(4.44);
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('square', () => {
  const functionTest = helpers.square;

  it(`returns a ${type = 'number'}`, () => {
    // arrange
    const expected = type;
    // act
    const actual = typeof functionTest(2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly returns true if even', () => {
    it(`return 81 given 9`, () => {
      // arrange 
      const expected = 81;
      // act
      const actual = functionTest(9);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return 144 given -12`, () => {
      // arrange 
      const expected = 144;
      // act
      const actual = functionTest(-12);
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('cube', () => {
  const functionTest = helpers.cube;

  it(`returns a number`, () => {
    // arrange
    const expected = 'number';
    // act
    const actual = typeof functionTest(2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly returns true if even', () => {
    it(`return 729 given 9`, () => {
      // arrange 
      const expected = 729;
      // act
      const actual = functionTest(9);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return -1728 given -12`, () => {
      // arrange 
      const expected = -1728;
      // act
      const actual = functionTest(-12);
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('raiseToPower', () => {
  const functionTest = helpers.raiseToPower;

  it(`returns a number`, () => {
    // arrange
    const expected = 'number';
    // act
    const actual = typeof functionTest(2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly raises number by exponent', () => {
    it(`return 8 given 2, 3`, () => {
      // arrange 
      const expected = 8;
      // act
      const actual = functionTest(2, 3);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return 248,832 given 12, 5`, () => {
      // arrange 
      const expected = 248832;
      // act
      const actual = functionTest(12, 5);
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('roundNumber', () => {
  const functionTest = helpers.roundNumber;

  it(`returns a number`, () => {
    // arrange
    const expected = 'number';
    // act
    const actual = typeof functionTest(2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly rounds number', () => {
    it(`return 12 given 11.5`, () => {
      // arrange 
      const expected = 12;
      // act
      const actual = functionTest(11.5);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return -7 given -7.3`, () => {
      // arrange 
      const expected = -7;
      // act
      const actual = functionTest(-7.3);
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('roundUp', () => {
  const functionTest = helpers.roundUp;

  it(`returns a number`, () => {
    // arrange
    const expected = 'number';
    // act
    const actual = typeof functionTest(2);
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly rounds number', () => {
    it(`return 12 given 11.5`, () => {
      // arrange 
      const expected = 12;
      // act
      const actual = functionTest(11.5);
      // assert
      expect(actual).toBe(expected);
    });
    it(`return 69 given 69.3`, () => {
      // arrange 
      const expected = 70;
      // act
      const actual = functionTest(69.3);
      // assert
      expect(actual).toBe(expected);
    });
    it.skip(`return -8 given -7.3`, () => {
      // arrange 
      const expected = -8;
      // act
      const actual = functionTest(-7.3);
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('addExclmationPoint', () => {
  const functionTest = helpers.addExclamationPoint;

  it(`returns a string`, () => {
    // arrange
    const expected = 'string';
    // act
    const actual = typeof functionTest('hello');
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly exclaims the string', () => {
    it(`return 'hello!' given 'hello'`, () => {
      // arrange 
      const expected = "hello!";
      // act
      const actual = functionTest("hello");
      // assert
      expect(actual).toBe(expected);
    });
    it(`return 'boobies!' given boobies`, () => {
      // arrange 
      const expected = 'boobies!';
      // act
      const actual = functionTest('boobies');
      // assert
      expect(actual).toBe(expected);
    });
    it.skip(`return '!' given ''`, () => {
      // arrange 
      const expected = '!';
      // act
      const actual = functionTest();
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('combineNames', () => {
  const functionTest = helpers.combineNames;

  it(`returns a string`, () => {
    // arrange
    const expected = 'string';
    // act
    const actual = typeof functionTest('ronald', 'lebagel');
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly combines names', () => {
    it(`return 'ronald lebagel' given 'ronald', 'lebagel'`, () => {
      // arrange 
      const expected = "ronald lebagel";
      // act
      const actual = functionTest('ronald', 'lebagel');
      // assert
      expect(actual).toBe(expected);
    });
    it(`return 'jack geoff' given 'jack', 'geoff'`, () => {
      // arrange 
      const expected = 'jack geoff';
      // act
      const actual = functionTest('jack', 'geoff');
      // assert
      expect(actual).toBe(expected);
    });
    it.skip(`return '' given ''`, () => {
      // arrange 
      const expected = '';
      // act
      const actual = functionTest();
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('getGreeting', () => {
  const functionTest = helpers.getGreeting;

  it(`returns a string`, () => {
    // arrange
    const expected = 'string';
    // act
    const actual = typeof functionTest('Ronald');
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly greets user', () => {
    it(`return 'Hello Ronald!' given 'Ronald`, () => {
      // arrange 
      const expected = 'Hello Ronald!';
      // act
      const actual = functionTest('Ronald');
      // assert
      expect(actual).toBe(expected);
    });
    it(`return 'Hello Jack! given 'Jack'`, () => {
      // arrange 
      const expected = 'Hello Jack!';
      // act
      const actual = functionTest('Jack');
      // assert
      expect(actual).toBe(expected);
    });
    it.skip(`return 'Hello !' given ''`, () => {
      // arrange 
      const expected = 'Hello !';
      // act
      const actual = functionTest();
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('getGreeting', () => {
  const functionTest = helpers.getGreeting;

  it(`returns a string`, () => {
    // arrange
    const expected = 'string';
    // act
    const actual = typeof functionTest('Ronald');
    // assert
    expect(actual).toBe(expected);
  });

  describe('correctly greets user', () => {
    it(`return 'Hello Ronald!' given 'Ronald`, () => {
      // arrange 
      const expected = 'Hello Ronald!';
      // act
      const actual = functionTest('Ronald');
      // assert
      expect(actual).toBe(expected);
    });
    it(`return 'Hello Jack! given 'Jack'`, () => {
      // arrange 
      const expected = 'Hello Jack!';
      // act
      const actual = functionTest('Jack');
      // assert
      expect(actual).toBe(expected);
    });
    it.skip(`return 'Hello !' given ''`, () => {
      // arrange 
      const expected = 'Hello !';
      // act
      const actual = functionTest();
      // assert
      expect(actual).toBe(expected);
    });
  });
});

describe('getRectangleArea', () => {
  const { getRectangleArea } = helpers;
  const testIt = testBase(getRectangleArea);

  testType('number',[5,5],getRectangleArea);

  describe(`Returns the area of a rectangle`, () => {
    testIt(`returns num 36 given num 6 6`);
    testIt(`returns num 10 given num 2 5`);
  });

  describe(`Approriately handles negative inputs`, () => {
    it('Returns falsy given num 6 -6', () => {
      // act
      const actual = getRectangleArea(6,-6);
      // assert
      expect(actual).toBeFalsy();
    });
  });
});

describe('getTriangleArea', () => {
  const { getTriangleArea } = helpers;
  const testIt = testBase(getTriangleArea);

  testType('number',[5,5],getTriangleArea);

  describe(`Returns the area of a triangle given positive integers`, () => {
    testIt(`returns num 18 given num 6 6`);
    testIt(`returns num 5 given num 2 5`);
  });

  describe(`Approriately handles negative inputs`, () => {
    it('Returns falsy given num 6 -6', () => {
      // act
      const actual = getTriangleArea(6,-6);
      // assert
      expect(actual).toBeFalsy();
    });
  });
});

describe('getCircleArea', () => {
  const { getCircleArea } = helpers;
  const testIt = testBase(getCircleArea);

  testType('number',[5],getCircleArea);

  describe(`Returns the area of a triangle given positive integers`, () => {
    testIt(`returns num 12.57 given num 2`,[],"toBeCloseTo");
    testIt(`returns num 452.39 given num 12`,[],"toBeCloseTo");
  });

  describe(`Approriately handles negative inputs`, () => {
    it('Returns falsy given a num -6', () => {
      // act
      const actual = getCircleArea(-6);
      // assert
      expect(actual).toBeFalsy();
    });
    testIt(`returns falsy given num -6'`,[],"toBeFalsy");
  });
});

describe('getRectangularPrismVolume', () => {
  const { getRectangularPrismVolume } = helpers;
  const testIt = testBase(getRectangularPrismVolume);

  testType('number',[5,5,5],getRectangularPrismVolume);

  describe(`Returns the area of a rectangle`, () => {
    testIt(`returns num 216 given num 6 6 6`);
    testIt(`returns num 6 given num 1 2 3`);
  });

  describe(`Approriately handles negative inputs`, () => {
    it('Returns bool false given num 6 -6 -12', () => {
      // act
      const actual = getRectangularPrismVolume(6,-6,-12);
      // assert
      expect(actual).toBeFalsy();
    });
  });
});