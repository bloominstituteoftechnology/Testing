// const helpers = require('./project-1');
const { 
  isNum, 
  isNumOrParsedStrNum,
  isNan,
  isEmptyStr,
  convertStrNum, 
  valType, 
  multiplyByTen, 
  subtractFive,
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

const bigNum = Math.pow(2, 81);
const smallNum = Math.pow(-2, 81);


describe('Jest', () => {
  test('Jest runs', () => {
  
  });
});


// multiplyByTen
describe('multiplyByTen', () => {

  it('multiplies a parameter by 10', () => {
    expect (multiplyByTen(2.4)).toBe(24);
  });

  test('returns a number', () => {
    const input = 0;
    const result = multiplyByTen(input);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(multiplyByTen(5)).toBeTruthy();
    expect(multiplyByTen('5')).toBeTruthy();
    expect(multiplyByTen('5px')).toBeTruthy();
    expect(multiplyByTen('hi')).toBeFalsy();
    expect(multiplyByTen(['hi'])).toBeFalsy();
    expect(multiplyByTen( { greeting: 'hi'} )).toBeFalsy();
    expect(multiplyByTen(NaN)).toBeFalsy();
    expect(multiplyByTen()).toBeFalsy();
  });

  test('multiplies a parameter by 10', () => {
    expect (multiplyByTen(-1)).toBe(-10);
    expect (multiplyByTen(0)).toBe(0);
    expect(multiplyByTen(bigNum)).toBe(bigNum * 10);
    expect(multiplyByTen(smallNum)).toBe(smallNum * 10);
    expect(multiplyByTen(bigNum)).toMatchSnapshot(expect.any(Number));
  });
})


// subtractFive
describe('subtractFive', () => {

  it('subtracts 5 from a parameter', () => {
    expect (subtractFive(12)).toBe(7);
    expect (subtractFive(5)).toBe(0);
    expect (subtractFive(0)).toBe(-5);
  });

  test('returns a number', () => {
    const result = subtractFive(bigNum);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(subtractFive(10)).toBeTruthy();
    expect(subtractFive('10')).toBeTruthy();
    expect(subtractFive('10px')).toBeTruthy();
    expect(subtractFive('hi')).toBeFalsy();
    expect(subtractFive(['hi'])).toBeFalsy();
    expect(subtractFive( { greeting: 'hi'} )).toBeFalsy();
    expect(subtractFive(NaN)).toBeFalsy();
    expect(subtractFive()).toBeFalsy();
    expect(subtractFive(bigNum)).toBe(bigNum - 5);
    expect(subtractFive(smallNum)).toBe(smallNum - 5);
    expect(subtractFive(bigNum)).toMatchSnapshot(expect.any(Number));
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
    const str2 = 'Gemma';
    const result = areSameLength(str1, str2);
    expect(typeof result === 'boolean').toBeTruthy();
  });

  test('expects the parameter to be a string', () => {
    expect(areSameLength('one', 'two')).toBeTruthy();
    expect(areSameLength('one', 'three')).toBeFalsy();
    expect(areSameLength([], 23)).toBeFalsy();
  });

  test('expects the parameters to have equal length', () => {
        
    // Arrange: setup the world
    const str1 = 'kat';
    const str2 = 'gem';
    const str3 = 'gemma';
    // Act: execute the code you're testing
    const result = areSameLength(str1, str2);
    const result2 = areSameLength(str1, str3);
    const result3 = areSameLength(str1, '');
    // Assert: check that it works
    expect(result).toBeTruthy();
    expect(result2).toBeFalsy();
    expect(result3).toBeFalsy();
  });

  test('throws an error if parameter is null', () => {
    expect(() => areSameLength(null, 'kat')).toThrow();
  })

  test('throws an error if there are 1 or less parameters', () => {
    expect(() => areSameLength('kat')).toThrow();
    expect(() => areSameLength()).toThrow();
  })
});


// areEqual
describe('areEqual', () => {

  it('compares whether 2 parameters are strictly equal', () => {
    expect(areEqual('Kat', 'kat')).toBe(false);
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
    expect(areEqual(param1, param2)).toStrictEqual(false);
    expect(areEqual(param2, param2)).toStrictEqual(true);
    expect(areEqual(param3, param3)).toBeTruthy()
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
});

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
});

// add
describe('add', () => {

  it('adds two parameters', () => {
    expect (add(10, 5)).toBe(15);
    expect(add('last', 'Name')).toBe('lastName');
  });

  test('returns a number or a string', () => {
    const input1 = Math.random();
    const input2 = Math.random();
    const result = add(input1, input2);
    expect(typeof result === 'number' || typeof result === 'string').toBeTruthy();
  });

  test('expects the parameters to be a number or a string', () => {
    expect(add('5', '5')).toBeTruthy();
    expect(add(5, 5)).toBeTruthy();
    expect(add('hi ', 'five')).toBeTruthy();
    expect(add(NaN, 5)).toBeFalsy();
    expect(add()).toBeFalsy();
  });

  it('adds two parameters', () => {
    expect (add(0, 5)).toBe(5);
    expect (add(-10, 5)).toBe(-5);
    expect (add(5, '5')).toBe('55');
    expect(add('my', 'Str')).toBe('myStr');
    expect(add(true, true)).toBe(2);
    const input1 = Math.random();
    const input2 = Math.random();
    const result = add(input1, input2);
    expect(result).toBe(input1 + input2);
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});

// subtract
describe('subtract', () => {

  it('subtracts the 2nd parameter from the 1st parameter', () => {
    expect(subtract(23, 8)).toBe(15)
  });

  test('returns a number', () => {
    const input1 = Math.random();
    const input2 = Math.random();
    const result = subtract(input1, input2);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or number-string', () => {
    expect(subtract('5', '6')).toBeTruthy();
    expect(subtract(5, 6)).toBeTruthy();
    expect(subtract(5, 5)).toBeFalsy();
    expect(subtract('hi ', 'five')).toBeNaN();
    expect(subtract()).toBeNaN();
  });

  test('if result is 0 it is falsy', () => {
    expect(subtract('5', '5')).toBeFalsy();
    expect(subtract(5, 5)).toBeFalsy();    
    expect(subtract('5', '5')).toBe(0);
    expect(subtract(5, 5)).toBe(0);
  });

  test('subtracts the 2nd parameter from the 1st parameter', () => {
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

describe('divide', () => {

  it('divides the 1st parameter by the 2nd parameter', () => {
    expect(divide(15, 5)).toBe(3);
  });

  test('returns a number', () => {
    const input1 = Math.random();
    const input2 = Math.random();
    const result = divide(input1, input2);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(divide('5', '5')).toBeTruthy();
    expect(divide('5', '-5')).toBeTruthy();
    expect(divide(5, 6)).toBeTruthy();
    expect(divide(5, 5)).toBeTruthy();
    expect(divide('hi ', 'five')).toBeNaN();
    expect(divide()).toBeNaN();
  });

  test('divides the 1st parameter by the 2nd parameter', () => {
    expect (divide(0, 5)).toBe(0);
    expect (divide(5, 0)).toBe(Infinity);
    expect (divide(-5, 0)).toBe(-Infinity);
    expect (divide(-10, 5)).toBe(-2);
    expect(divide('5', '1')).toBe(5);
    expect(divide('5', '5')).toBe(1);
    const input1 = Math.random();
    const input2 = Math.random();
    const result = divide(input1, input2);
    expect(result).toBe(input1 / input2);
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});

describe('multiply', () => {

  it('multiplies 2 parameters', () => {
    expect(multiply(1, 8)).toBe(8);
  });

  test('returns a number', () => {
    const input1 = Math.random();
    const input2 = Math.random();
    const result = multiply(input1, input2);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(multiply('5', '6')).toBeTruthy();
    expect(multiply('5', '0')).toBeFalsy();
    expect(multiply(5, 6)).toBeTruthy();
    expect(multiply(5, 0)).toBeFalsy();
    expect(multiply('hi ', 'five')).toBeNaN();
    expect(multiply()).toBeNaN();
  });

  test('multiplies 2 parameters', () => {
    expect (multiply(0, 5)).toBe(0);
    expect (multiply(-10, 8)).toBe(-80);
    expect(multiply('1', '8')).toBe(8);
    expect(multiply('0', '5')).toBe(0);
    const input1 = Math.random();
    const input2 = Math.random();
    const result = multiply(input1, input2);
    expect(result).toBe(input1 * input2);
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});

// getRemainder
describe('getRemainder', () => {

  it('provides the remainder after dividing the 1st parameter by the 2nd parameter', () => {
    expect(getRemainder(9, 3)).toBe(0)
    expect (getRemainder(9, 2)).toBe(1);
  });

  test('returns a number', () => {
    const input1 = Math.random();
    const input2 = Math.random();
    const result = getRemainder(input1, input2);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(getRemainder(5, 2)).toBeTruthy();
    expect(getRemainder(6, 2)).toBeFalsy();
    expect(getRemainder('hi ', 'five')).toBeNaN();
    expect(getRemainder()).toBeNaN();
  });

  test('provides 1 for odds and 0 for evens when the 2nd parameter is 2', () => {
    expect(getRemainder(3, 2)).toBe(1)
    expect (getRemainder(4, 2)).toBe(0);
    const input1 = Math.random();
    const input2 = 2;
    const result = getRemainder(input1, input2);
    expect(result).toBe(input1 % input2);
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});

// isEven
describe('isEven', () => {

  it('provides true for evens and false for odds', () => {
    expect(isEven(9)).toBeFalsy()
    expect (isEven(8)).toBeTruthy();
  });

  test('returns a boolean', () => {
    const input1 = Math.random();
    const result = isEven(input1);
    expect(typeof result === 'boolean').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(isEven(6)).toBeTruthy();
    expect(isEven(5)).toBeFalsy();
    expect(isEven('6')).toBeTruthy();
    expect(isEven('5')).toBeFalsy();
    expect(isEven()).toBeFalsy();
  });
});

// isOdd
describe('isOdd', () => {

  it('provides true for evens and false for odds', () => {
    expect(isOdd(8)).toBeFalsy()
    expect (isOdd(9)).toBeTruthy();
  });

  test('returns a boolean', () => {
    const input1 = Math.random();
    const result = isOdd(input1);
    expect(typeof result === 'boolean').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(isOdd(5)).toBeTruthy();
    expect(isOdd(6)).toBeFalsy();
    expect(isOdd('5')).toBeTruthy();
    expect(isOdd('6')).toBeFalsy();
  });
});

// square
describe('square', () => {

  it('squares a number', () => {
    expect(square(3)).toBe(9);
  });

  test('returns a number', () => {
    const input = Math.random();
    const result = square(input);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(square(5)).toBeTruthy();
    expect(square('5')).toBeTruthy();
    expect(square(0)).toBeFalsy();
  });

  test('squares a number', () => {
    expect(square(0)).toBe(0);
    expect(square('3')).toBe(9);
    const input = Math.random();
    const result = square(input);
    expect(result).toBe(input * input);
    expect(result).toBe(Math.pow(input, 2));
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});


// cube
describe('cube', () => {

  it('cubes a number', () => {
    expect(cube(3)).toBe(27);
    expect(cube('3')).toBe(27);
    const input = Math.random();
    const result = cube(input);
    expect(result).toBe(input * input * input);
    expect(result).toBe(Math.pow(input, 3));
    expect(result).toMatchSnapshot(expect.any(Number));
  });

  test('returns a number', () => {
    const input = Math.random();
    const result = cube(input);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(cube(5)).toBeTruthy();
    expect(cube('5')).toBeTruthy();
    expect(cube(0)).toBeFalsy();
  });

  test('cubes a number', () => {
    expect(cube(0)).toBe(0);
    expect(cube('3')).toBe(27);
    const input = Math.random();
    const result = cube(input);
    expect(result).toBe(input * input * input);
    expect(result).toBe(Math.pow(input, 3));
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});

// raiseToPower
describe('raiseToPower', () => {

  it('raises the 1st parameter to the power of the 2nd parameter', () => {
    expect(raiseToPower(3, 4)).toBe(81);
  });

  test('returns a number', () => {
    const input = Math.random();
    const result = raiseToPower(input, input);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameters to be a number', () => {
    expect(raiseToPower(5, 5)).toBeTruthy();
    expect(raiseToPower(0, 5)).toBeFalsy();
  });

  test('raises the 1st parameter to the power of the 2nd parameter', () => {
    const input = Math.random();
    expect(raiseToPower(input, 0)).toBe(1);
    expect(raiseToPower(0, input)).toBe(0);
    const result = raiseToPower(input, input);
    expect(result).toBe(Math.pow(input, input));
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});

// roundNumber
describe('roundNumber', () => {

  it('rounds a number up if the decimal is .5 or more', () => {
    expect(roundNumber(5.5)).toBe(6);
    expect(roundNumber(0.45)).toBe(0);
  });

  test('returns a number', () => {
    const input = Math.random();
    const result = roundNumber(input);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number', () => {
    expect(roundNumber(0.5)).toBeTruthy();
    expect(roundNumber(0.4)).toBeFalsy();
  });

  test('rounds a number up if the decimal is .5 or more', () => {
    expect(roundNumber(-5.51)).toBe(-6);
    expect(roundNumber(-5.5)).toBe(-5);
    expect(roundNumber(-0.5)).toBe(-0);
    const input = Math.random();
    const result = roundNumber(input);
    expect(result).toBe(Math.round(input));
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});

// roundUp
describe('roundUp', () => {

  it('rounds a number up if the decimal is greater than 0', () => {
    expect(roundUp(0.001)).toBe(1);
    expect(roundUp(0.0)).toBe(0);
  });


  test('returns a number', () => {
    const input = Math.random();
    const result = roundUp(input);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number', () => {
    expect(roundUp(0.001)).toBeTruthy();
    expect(roundUp(0.0)).toBeFalsy();
  });

  test('rounds a number up if the decimal is greater than 0', () => {
    expect(roundUp(-0.6)).toBe(-0);
    expect(roundUp(-5.4)).toBe(-5);
    const input = Math.random();
    const result = roundUp(input);
    expect(result).toBe(Math.ceil(input));
    expect(result).toBeGreaterThanOrEqual(input);
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});


// addExclamationPoint
describe('addExclamationPoint', () => {

  it('adds an exclamation point after a string using concatenation', () => {
    expect (addExclamationPoint('')).toBe('!');
    expect (addExclamationPoint('hi')).toBe('hi!');
    expect (addExclamationPoint(5)).toBe('5!');
  });

  test('returns a string', () => {
    const input1 = '';
    const result = addExclamationPoint(input1);
    expect(typeof result === 'string').toBeTruthy();
  });

  test('expects the parameter to be a number or a string (including empty strings)', () => {
    expect(addExclamationPoint('5')).toBeTruthy();
    expect(addExclamationPoint(5)).toBeTruthy();
    expect(addExclamationPoint('')).toBeTruthy();
  });
});

// combineNames
describe('combineNames', () => {

  it('concatenates 2 strings with a space in between', () => {
    const firstName = 'first';
    const lastName = 'last';
    expect (combineNames(firstName, lastName)).toBe(firstName + ' ' + lastName);
    expect (combineNames(firstName, lastName)).toBe('first last');
  });

  test('if the 1st parameter is an empty string, it concatenates a space before the lastName; if the 2nd parameter is an empty string, it concatenates a space after firstName; if the 2nd parameter is missing it concatenates a space and the string undefined after the firstName', () => {
  const firstName = 'first';
  const lastName = 'last';
  expect (combineNames('', lastName)).toBe(' ' + lastName);
  expect (combineNames(firstName, '')).toBe(firstName + ' ');
  expect (combineNames(firstName)).toBe(firstName + ' undefined');
  expect (combineNames(firstName, lastName)).toBe(firstName + ' ' + lastName);
  expect (combineNames(firstName, lastName)).toBe('first last');
});

  test('returns a string', () => {
    const input1 = '';
    const input2 = '';
    const result = combineNames(input1, input2);
    expect(typeof result === 'string').toBeTruthy();
  });

  test('expects the parameters to be a string (including empty strings) or a string-number', () => {
    expect(combineNames('5')).toBeTruthy();
    expect(combineNames(5)).toBeTruthy();
  });
});

// getGreeting
describe('getGreeting', () => {

  it('concatenates Hello, a space, a name, and an exclamation point', () => {
    const name = 'first';
    expect (getGreeting(name)).toBe('Hello ' + name + '!');
    expect (getGreeting(name)).toBe('Hello first!');
  });


  test('if the parameter is an empty string, it concatenates a space between the Hello and the exclamation point', () => {
  const name = '';
  expect (getGreeting(name)).toBe('Hello !');
});

test('if the parameter is missing it concatenates a space between Hello and the string undefined!', () => {
  const name = undefined;
  expect (getGreeting(name)).toBe('Hello undefined!');
  expect (getGreeting()).toBe('Hello undefined!');
});

  test('returns a string', () => {
    const input = '';
    const result = getGreeting(input);
    expect(typeof result === 'string').toBeTruthy();
  });

  test('expects the parameters to be a string (including empty strings) or a string-number', () => {
    expect(getGreeting('5')).toBeTruthy();
    expect(getGreeting(0)).toBeTruthy();
    expect(getGreeting(null)).toBeTruthy();
    expect(getGreeting([])).toBeTruthy();
  });
});


describe('getRectangleArea', () => {

  it('multiplies 2 parameters', () => {
    expect(getRectangleArea(1, 8)).toBe(8)
    expect (getRectangleArea(0, 5)).toBe(0);
    expect (getRectangleArea(-10, 8)).toBe(-80);
    expect(getRectangleArea('1', '8')).toBe(8);
    expect(getRectangleArea('0', '5')).toBe(0);
    const length = Math.random();
    const width = Math.random();
    const result = getRectangleArea(length, width);
    expect(result).toBe(length * width);
    expect(result).toMatchSnapshot(expect.any(Number));
  });

  test('returns a number', () => {
    const length = Math.random();
    const width = Math.random();
    const result = getRectangleArea(length, width);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(getRectangleArea('5', '6')).toBeTruthy();
    expect(getRectangleArea('5', '0')).toBeFalsy();
    expect(getRectangleArea(5, 6)).toBeTruthy();
    expect(getRectangleArea(5, 0)).toBeFalsy();
    expect(getRectangleArea('hi ', 'five')).toBeNaN();
    expect(getRectangleArea()).toBeNaN();
  });
});

describe('getTriangleArea', () => {

  it('multiplies 2 parameters and divde it by 2', () => {
    expect(getTriangleArea(1, 8)).toBe(4)
    expect (getTriangleArea(0, 5)).toBe(0);
    expect (getTriangleArea(-10, 8)).toBe(-40);
    expect(getTriangleArea('1', '8')).toBe(4);
    expect(getTriangleArea('0', '5')).toBe(0);
    const base = Math.random();
    const height = Math.random();
    const result = getTriangleArea(base, height);
    expect(result).toBe(base * height / 2);
    expect(result).toMatchSnapshot(expect.any(Number));
  });

  test('returns a number', () => {
    const base = Math.random();
    const height = Math.random();
    const result = getTriangleArea(base, height);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(getTriangleArea('5', '6')).toBeTruthy();
    expect(getTriangleArea('5', '0')).toBeFalsy();
    expect(getTriangleArea(5, 6)).toBeTruthy();
    expect(getTriangleArea(5, 0)).toBeFalsy();
    expect(getTriangleArea('hi ', 'five')).toBeNaN();
    expect(getTriangleArea()).toBeNaN();
  });
});

describe('getCircleArea', () => {

  it('calculates the area of a circle', () => {
    expect(getCircleArea(0)).toBe(0);
    expect(getCircleArea(3)).toBe(9*Math.PI);
    expect(getCircleArea('3')).toBeCloseTo(9*Math.PI);
    const radius = Math.random();
    const result = getCircleArea(radius);
    expect(result).toBeCloseTo(radius * radius * Math.PI);
    expect(result).toBeCloseTo(Math.PI * Math.pow(radius, 2));
    expect(result).toMatchSnapshot(expect.any(Number));
  });

  test('returns a number', () => {
    const radius = Math.random();
    const result = getCircleArea(radius);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(getCircleArea(5)).toBeTruthy();
    expect(getCircleArea('5')).toBeTruthy();
    expect(getCircleArea(0)).toBeFalsy();
  });
});

describe('getRectangularPrismVolume', () => {

  it('multiplies 3 parameters', () => {
    expect(getRectangularPrismVolume(3, 8, 2)).toBe(48)
  });

  test('returns a number', () => {
    const length = Math.random();
    const width = Math.random();
    const height = Math.random();
    const result = getRectangularPrismVolume(length, width, height);
    expect(typeof result === 'number').toBeTruthy();
  });

  test('expects the parameter to be a number or a string-number', () => {
    expect(getRectangularPrismVolume('5', '6', '1')).toBeTruthy();
    expect(getRectangularPrismVolume('5', '0', '1')).toBeFalsy();
    expect(getRectangularPrismVolume(5, 6, 1)).toBeTruthy();
    expect(getRectangularPrismVolume(5, 0, 1)).toBeFalsy();
    expect(getRectangularPrismVolume('hi ', 'five', '!')).toBeNaN();
    expect(getRectangularPrismVolume()).toBeNaN();
  });

  test('multiplies 3 parameters', () => {
    expect (getRectangularPrismVolume(0, 5, 1)).toBe(0);
    expect (getRectangularPrismVolume(-10, 8, 1)).toBe(-80);
    expect(getRectangularPrismVolume('1', '8', '1')).toBe(8);
    expect(getRectangularPrismVolume('0', '5', '1')).toBe(0);
    const length = Math.random();
    const width = Math.random();
    const height = Math.random();
    const result = getRectangularPrismVolume(length, width, height);
    expect(result).toBeCloseTo(length * width * height);
    expect(result).toMatchSnapshot(expect.any(Number));
  });
});