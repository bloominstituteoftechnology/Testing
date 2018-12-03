const helpers = require('./project-1');

const {
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
    getRectangularPrismVolume
  } = require('./project-1');

describe('multiplyByTen', () => {
    test('type check: multiplyByTen', () => {
    const input = 1;
    const result = multiplyByTen(input);
    expect(typeof result === 'number').toBeTruthy();
    })

    test('result check: multiplyByTen', () => {
        const input = 1;
        const result = multiplyByTen(input);
        expect(result).toBe(10);
    })  
})

describe('subtractFive', () => {
    test('type check: subtractFive', () => {
    const input = 10;
    const result = subtractFive(input);
    expect(typeof result === 'number').toBeTruthy();
    })

    test('result check: subtractFive', () => {
        const input = 10;
        const result = subtractFive(input);
        expect(result).toBe(5);
    })  
})

describe('areSameLength', () => {
    test('result check: areSameLength', () => {
        const str1 = 'give';
        const str2 = 'live';
        const result = areSameLength(str1, str2);
        expect(result).toBeTruthy();
    })  
})

describe('areEqual', () => {
    test('result check: areEqual', () => {
        const num1 = 5;
        const num2 = 5;
        const result = areEqual(num1, num2);
        expect(result).toBeTruthy();
    })  
})

describe('lessThanNinety', () => {
    test('type check: lessThanNinety', () => {
    const input = 1;
    const result = lessThanNinety(input);
    expect(typeof result === 'boolean').toBeTruthy();
    })

    test('result check: lessThanNinety', () => {
        const input = 100;
        const result = lessThanNinety(input);
        expect(result).toBe(false);
    })  
})

describe('greaterThanFifty', () => {
    test('type check: greaterThanFifty', () => {
    const input = 1;
    const result = greaterThanFifty(input);
    expect(typeof result === 'boolean').toBeTruthy();
    })

    test('result check: greaterThanFifty', () => {
        const input = 100;
        const result = greaterThanFifty(input);
        expect(result).toBe(true);
    })  
})

describe('add', () => {
    test('type check: add', () => {
        const num1 = 5;
        const num2 = 5;
        const result = add(num1, num2);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: add', () => {
        const num1 = 5;
        const num2 = 5;
        const result = add(num1, num2);
        expect(result).toBe(10);
    })  
})

describe('subtract', () => {
    test('type check: subtract', () => {
        const num1 = 5;
        const num2 = 5;
        const result = subtract(num1, num2);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: subtract', () => {
        const num1 = 5;
        const num2 = 5;
        const result = subtract(num1, num2);
        expect(result).toBe(0);
    })  
})

describe('divide', () => {
    test('type check: divide', () => {
        const num1 = 5;
        const num2 = 5;
        const result = divide(num1, num2);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: divide', () => {
        const num1 = 10;
        const num2 = 5;
        const result = divide(num1, num2);
        expect(result).toBe(2);
    })  
})

describe('multiply', () => {
    test('type check: multiply', () => {
        const num1 = 5;
        const num2 = 5;
        const result = multiply(num1, num2);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: multiply', () => {
        const num1 = 10;
        const num2 = 5;
        const result = multiply(num1, num2);
        expect(result).toBe(50);
    })  
})

describe('getRemainder', () => {
    test('type check: getRemainder', () => {
        const num1 = 5;
        const num2 = 5;
        const result = getRemainder(num1, num2);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: getRemainder', () => {
        const num1 = 11;
        const num2 = 5;
        const result = getRemainder(num1, num2);
        expect(result).toBe(1);
    })  
})

describe('isEven', () => {
    test('result check: isEven', () => {
        const num1 = 11;
        const result = isEven(num1);
        expect(result).toBeFalsy();
    })  
})

describe('isOdd', () => {
    test('result check: isOdd', () => {
        const num1 = 11;
        const result = isOdd(num1);
        expect(result).toBeTruthy();
    })  
})

describe('square', () => {
    test('type check: square', () => {
        const num1 = 5;
        const num2 = 5;
        const result = square(num1, num2);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: square', () => {
        const num1 = 5;
        const num2 = 5;
        const result = square(num1, num2);
        expect(result).toBe(25);
    })  
})

describe('cube', () => {
    test('type check: cube', () => {
        const num1 = 5;
        const num2 = 5;
        const num3 = 5;
        const result = cube(num1, num2, num3);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: cube', () => {
        const num1 = 5;
        const num2 = 5;
        const num3 = 5;
        const result = cube(num1, num2, num3);
        expect(result).toBe(125);
    })  
})

describe('raiseToPower', () => {
    test('type check: raiseToPower', () => {
        const num1 = 5;
        const num2 = 5;
        const result = raiseToPower(num1, num2)
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: raiseToPower', () => {
        const num1 = 5;
        const num2 = 2;
        const result = raiseToPower(num1, num2);
        expect(result).toBe(25);
    })  
})

describe('roundNumber', () => {
    test('type check: roundNumber', () => {
    const input = 1.5;
    const result = roundNumber(input);
    expect(typeof result === 'number').toBeTruthy();
    })

    test('result check: roundNumber', () => {
        const input = 1.7;
        const result = roundNumber(input);
        expect(result).toBe(2);
    })  
})

describe('roundUp', () => {
    test('type check: roundUp', () => {
    const input = 1.5;
    const result = roundUp(input);
    expect(typeof result === 'number').toBeTruthy();
    })

    test('result check: roundUp', () => {
        const input = 1.7;
        const result = roundUp(input);
        expect(result).toBe(2);
    })  
})

describe('addExclamationPoint', () => {
    test('type check: addExclamationPoint', () => {
    const input = 'hello';
    const result = addExclamationPoint(input);
    expect(typeof result === 'string').toBeTruthy();
    })

    test('result check: addExclamationPoint', () => {
        const input = 'hello';
        const result = addExclamationPoint(input);
        expect(result).toBe('hello!');
    })  
})

describe('combineNames', () => {
    test('type check: combineNames', () => {
    const name1 = 'Rahul';
    const name2 = 'Desai'
    const result = combineNames(name1, name2);
    expect(typeof result === 'string').toBeTruthy();
    })

    test('result check: combineNames', () => {
        const name1 = 'Rahul';
        const name2 = 'Desai'
        const result = combineNames(name1, name2);
        expect(result).toBe('Rahul Desai');
    })  
})

describe('getGreeting', () => {
    test('type check: getGreeting', () => {
    const input = 'Rahul';
    const result = getGreeting(input);
    expect(typeof result === 'string').toBeTruthy();
    })

    test('result check: getGreeting', () => {
        const input = 'Rahul';
        const result = getGreeting(input);
        expect(result).toBe('Hello Rahul!');
    })  
})

describe('getRectangleArea', () => {
    test('type check: getRectangleArea', () => {
        const num1 = 5;
        const num2 = 5;
        const result = getRectangleArea(num1, num2)
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: getRectangleArea', () => {
        const num1 = 10;
        const num2 = 5;
        const result = getRectangleArea(num1, num2);
        expect(result).toBe(50);
    })  
})

describe('getTriangleArea', () => {
    test('type check: getTriangleArea', () => {
        const num1 = 5;
        const num2 = 5;
        const result = getTriangleArea(num1, num2)
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: getTriangleArea', () => {
        const num1 = 10;
        const num2 = 5;
        const result = getTriangleArea(num1, num2);
        expect(result).toBe(25);
    })  
})

describe('getCircleArea', () => {
    test('type check: getCircleArea', () => {
        const num1 = 5;
        const result = getCircleArea(num1)
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: getCircleArea', () => {
        const num1 = 1;
        const num2 = Math.PI;
        const result = getCircleArea(num1);
        const expected = num1**2 * num2;
        expect(result).toBe(expected);
    })  
})

describe('getRectangularPrismVolume', () => {
    test('type check: getRectangularPrismVolume', () => {
        const num1 = 5;
        const num2 = 5;
        const num3 = 5;
        const result = getRectangularPrismVolume(num1, num2, num3);
        expect(typeof result === 'number').toBeTruthy();
    })
    test('result check: getRectangularPrismVolume', () => {
        const num1 = 5;
        const num2 = 5;
        const num3 = 5;
        const result = getRectangularPrismVolume(num1, num2, num3);
        expect(result).toBe(125);
    })  
})