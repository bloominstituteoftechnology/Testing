// const helpers = require('./project-1');
const { multiplyByTen, subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume } = require('./project-1');

// start testing!
/* eslint-disable arrow-parens */
describe('Jest', () => {
  test('Jest runs', () => {
  
  });
});


// multiplyByTen
describe('multiplyByTen', () => {

  it('multiplies a parameter by 10', () => {
    expect (multiplyByTen(2.4)).toBe(24);
    expect (multiplyByTen(-1)).toBe(-10);
    expect (multiplyByTen(0)).toBe(0);
    const input = Math.random();
    const result = multiplyByTen(input);
    expect(result).toBe(input * 10);
    expect(result).toMatchSnapshot(expect.any(Number));
  });

  test('returns a number', () => {
    const input = 0;
    const result = multiplyByTen(input);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(multiplyByTen('5')).toBeTruthy();
    expect(multiplyByTen(5)).toBeTruthy();
    expect(multiplyByTen('hi')).toBeFalsy();
    expect(multiplyByTen(['hi'])).toBeFalsy();
    expect(multiplyByTen( { greeting: 'hi'} )).toBeFalsy();
    expect(multiplyByTen(NaN)).toBeFalsy();
    expect(multiplyByTen()).toBeFalsy();
  });
})


// subtractFive
describe('subtractFive', () => {

  it('subtracts 5 from a parameter', () => {
    expect (subtractFive(12)).toBe(7);
    expect (subtractFive(5)).toBe(0);
    expect (subtractFive(0)).toBe(-5);
    const input = Math.random();
    const result = subtractFive(input);
    expect(result).toBe(input - 5);
    expect(result).toMatchSnapshot(expect.any(Number));
  });

  test('returns a number', () => {
    const input = 12;
    const result = subtractFive(input);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(subtractFive('10')).toBeTruthy();
    expect(subtractFive(10)).toBeTruthy();
    expect(subtractFive('hi')).toBeFalsy();
    expect(subtractFive(['hi'])).toBeFalsy();
    expect(subtractFive( { greeting: 'hi'} )).toBeFalsy();
    expect(subtractFive(NaN)).toBeFalsy();
    expect(subtractFive()).toBeFalsy();
  });
})


// areSameLength
describe('areSameLength', () => {

  it('compares the length of 2 strings', () => {
    expect(areSameLength('Kat', 'Gem')).toBe(true);
    expect(areSameLength('Kat', 'Gemma')).toBe(false);
  });

  test('returns a boolean', () => {
    const str1 = 'Kat';
    const str2 = 'Gem';
    const result = areSameLength(str1, str2);
    expect(typeof result === 'boolean').toBeTruthy();
  });

  test('expects the parameter to be a string', () => {

    const str1 = 'kat';
    const str2 = 'gem';
    
    expect(typeof str1 === 'string').toBeTruthy();
    expect(typeof str2 === 'string').toBeTruthy();
    expect(areSameLength('one', 'two')).toBeTruthy();
    expect(areSameLength('one', 'three')).toBeFalsy();
  });

  test('expects the parameters to have equal length', () => {
        
    // Arrange: setup the world
    const str1 = 'kat';
    const str2 = 'gem';
    const str3 = 'gemma';
    // Act: execute the code you're testing
    const result = areSameLength(str1, str2);
    const result2 = areSameLength(str1, str3);
    // Assert: check that it works
    expect(typeof str1 === 'string').toBeTruthy();
    expect(typeof str2 === 'string').toBeTruthy();
    expect(typeof str3 === 'string').toBeTruthy();
    expect(areSameLength(str1, str2)).toBeTruthy();
    expect(areSameLength(str1, str3)).toBeFalsy();
    expect(result).toBeTruthy();
    expect(result2).toBeFalsy();
  });

  test('throws an error if given non-string', () => {
    expect(() => areSameLength([])).toThrow();
    expect(() => areSameLength(10)).toThrow();
    expect(() => areSameLength({})).toThrow();
    expect(() => areSameLength(true)).toThrow();
    expect(() => areSameLength(null)).toThrow();
  })
})


// areEqual
describe('areEqual', () => {

  it('compares whether 2 parameters are strictly equal', () => {
    expect(areEqual('Kat', 'Gem')).toBe(false);
    expect(areEqual('5', 5)).toBe(false);
    expect(areEqual(5, 5)).toBe(true);
  });

  test('returns a boolean', () => {
    const param1 = '5';
    const param2 = 5;
    const result = areEqual(param1, param2);
    expect(typeof result === 'boolean').toBeTruthy();
  });


  test('expects the 2 parameters to be strictly equal', () => {
    const param1 = '5';
    const param2 = 5;
    const param3 = true;
    expect(areEqual(param1, param1)).toStrictEqual(areEqual(param1, param1));
    expect(areEqual(param2, param2)).toStrictEqual(areEqual(param2, param2));
    expect(areEqual(param3, param3)).toStrictEqual(areEqual(param3, param3))
    expect(areEqual(param1, param2)).toBeFalsy();
  });
})

// lessThanNinety
describe('lessThanNinety', () => {

  it('compares whether a parameter is under 90', () => {
    const num1 = 89;
    const num2 = 90;
    expect(num1).toBeLessThan(90)
    expect(lessThanNinety(num1)).toBeFalsy;
    expect(lessThanNinety(num2)).toBeTruthy;
  });

  test('returns a boolean', () => {
    let num = 89.9;
    const result = lessThanNinety(num);
    expect(typeof result === 'boolean').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(lessThanNinety('10')).toBeTruthy();
    expect(lessThanNinety(10)).toBeTruthy();
    expect(lessThanNinety('hi')).toBeFalsy();
    expect(lessThanNinety(['hi'])).toBeFalsy();
    expect(lessThanNinety( { greeting: 'hi'} )).toBeFalsy();
    expect(lessThanNinety(NaN)).toBeFalsy();
    expect(lessThanNinety()).toBeFalsy();
  });

  test('expects the parameter is under 90', () => {
    const num1 = 89;
    const num2 = 90;
    expect(num1).toBeLessThan(90)
    expect(lessThanNinety(num1)).toBeFalsy;
    expect(lessThanNinety(num2)).toBeTruthy;
  });

})

// greaterThanFifty
describe('greaterThanFifty', () => {

  it('compares whether a parameter is over 50', () => {
    const num1 = 50;
    const num2 = 50.1;
    expect(num2).toBeGreaterThan(50)
    expect(greaterThanFifty(num1)).toBeFalsy;
    expect(greaterThanFifty(num2)).toBeTruthy;
  });

  test('returns a boolean', () => {
    let num = 50.1;
    const result = greaterThanFifty(num);
    expect(typeof result === 'boolean').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(greaterThanFifty('100')).toBeTruthy();
    expect(greaterThanFifty(100)).toBeTruthy();
    expect(greaterThanFifty('hi')).toBeFalsy();
    expect(greaterThanFifty(['hi'])).toBeFalsy();
    expect(greaterThanFifty( { greeting: 'hi'} )).toBeFalsy();
    expect(greaterThanFifty(NaN)).toBeFalsy();
    expect(greaterThanFifty()).toBeFalsy();
  });

  test('expects the parameter is under 90', () => {
    const num1 = 50;
    const num2 = 50.1;
    expect(num2).toBeGreaterThan(50)
    expect(greaterThanFifty(num1)).toBeFalsy;
    expect(greaterThanFifty(num2)).toBeTruthy;
  });
});

// add
describe('add', () => {

  it('adds two parameters', () => {
    expect (add(5, '5')).toBe('55');
    expect (add(0, 5)).toBe(5);
    expect (add(-10, 5)).toBe(-5);
    const input1 = Math.random();
    const input2 = Math.random();
    const result = add(input1, input2);
    expect(result).toBe(input1 + input2);
    expect(result).toMatchSnapshot(expect.any(Number));
  });

  test('returns a number', () => {
    const input1 = Math.random();
    const input2 = Math.random();
    const result = add(input1, input2);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(add('5', '5')).toBeTruthy();
    expect(add(5, 5)).toBeTruthy();
    expect(add('hi ', 'five')).toBeTruthy();
    expect(add(NaN)).toBeFalsy();
    expect(add()).toBeFalsy();
  });

  test('adds two parameters', () => {
    expect (add(5, '5')).toBe('55');
    expect (add(0, 5)).toBe(5);
    expect (add(-10, 5)).toBe(-5);
    expect(add('hi ', 'five')).toBe('hi five');
    expect(add(true, true)).toBe(2);
    const input1 = Math.random();
    const input2 = Math.random();
    const result = add(input1, input2);
    expect(result).toBe(input1 + input2);
  });
});

// subtract
describe('subtract', () => {

  it('subtracts the 2nd parameter from the 1st parameter', () => {
    expect(subtract(23, 8)).toBe(15)
    expect (subtract(0, 5)).toBe(-5);
    expect (subtract(-10, 5)).toBe(-15);
    expect(subtract('5', '6')).toBe(-1);
    expect(subtract('5', '5')).toBe(0);
    const input1 = Math.random();
    const input2 = Math.random();
    const result = subtract(input1, input2);
    expect(result).toBe(input1 - input2);
    expect(result).toMatchSnapshot(expect.any(Number));
  });

  test('returns a number', () => {
    const input1 = Math.random();
    const input2 = Math.random();
    const result = subtract(input1, input2);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(subtract('5', '6')).toBeTruthy();
    expect(subtract('5', '5')).toBeFalsy();
    expect(subtract(5, 6)).toBeTruthy();
    expect(subtract(5, 5)).toBeFalsy();
    expect(subtract('hi ', 'five')).toBeNaN();
    expect(subtract()).toBeNaN();
  });

  test('subtracts the 2nd parameter from the 1st parameter', () => {
    expect(subtract(23, 8)).toBe(15)
    expect (subtract(0, 5)).toBe(-5);
    expect (subtract(-10, 5)).toBe(-15);
    expect(subtract('5', '6')).toBe(-1);
    expect(subtract('5', '5')).toBe(0);
    const input1 = Math.random();
    const input2 = Math.random();
    const result = subtract(input1, input2);
    expect(result).toBe(input1 - input2);
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});



// const divide = (x, y) => {
//   return x / y;
// };

// const multiply = (x, y) => {
//   return x * y;
// };

// const getRemainder = (x, y) => {
//   return x % y;
// };

// const isEven = num => {
//   if (num % 2 === 0) {
//     return true;
//   }
//   return false;
// };

// const isOdd = num => {
//   if (num % 2 === 0) {
//     return false;
//   }
//   return true;
// };

// const square = num => {
//   return num * num;
// };

// const cube = num => {
//   return num * num * num;
// };

// const raiseToPower = (num, exponent) => {
//   return num ** exponent;
// };

// const roundNumber = num => {
//   return Math.round(num);
// };

// const roundUp = num => {
//   return Math.ceil(num);
// };

// const addExclamationPoint = str => {
//   return (str += '!');
// };

// const combineNames = (firstName, lastName) => {
//   return `${firstName} ${lastName}`;
// };

// const getGreeting = name => {
//   return `Hello ${name}!`;
// };

// const getRectangleArea = (length, width) => {
//   return length * width;
// };

// const getTriangleArea = (base, height) => {
//   return 0.5 * base * height;
// };

// const getCircleArea = radius => {
//   return Math.PI * radius * radius;
// };

// const getRectangularPrismVolume = (length, width, height) => {
//   return width * height * length;
// };

// module.exports = {
//   multiplyByTen,
//   subtractFive,
//   areSameLength,
//   areEqual,
//   lessThanNinety,
//   greaterThanFifty,
//   add,
//   subtract,
//   divide,
//   multiply,
//   getRemainder,
//   isEven,
//   isOdd,
//   square,
//   cube,
//   raiseToPower,
//   roundNumber,
//   roundUp,
//   addExclamationPoint,
//   combineNames,
//   getGreeting,
//   getRectangleArea,
//   getTriangleArea,
//   getCircleArea,
//   getRectangularPrismVolume
// };