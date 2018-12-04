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

// start testing!

describe('Jest',() => {
    test('Jest is Running',()=>{

    })
});

describe('multiply by ten',() => {
    test('multiplys correctly',()=>{
        const input = 5;
        const expected = 50;
        const result = multiplyByTen(input);
        expect(result === expected)
    })
})

describe('Subtract Five',() => {
    test('minus five', () => {
        const input = 5;
        const expected = 0;
        const result = subtractFive(input);
        expect(expected === result)
    })
})

describe('Strings are the Same Length', () => {
    test('same length',() => {
        const i1 = i2 = "same length?";
        const result = areSameLength(i1,i2);
        expect(result === true)
    })
})

describe('are Equal',()=>{
    test('Strict equals',() => {
        const i1 = i2 = 2;
        const expected = true;
        const result = areEqual(i1,i2);
        expect(result === expected);
    })
})

describe('Less than 90',() => {
    test('less than 90', () => {
        const input = 89;
        const result = lessThanNinety(input);
        expect(result === true)
    })
    test('Equal to 90',()=>{
        const result = lessThanNinety(90);
        expect(result === false)
    })
})

describe('Greater than Fifty',()=>{
    test('Greater than 50',()=>{
        const input = 67;
        const result = greaterThanFifty(input);
        expect(result).toBe(true)
    })
    test('Less than 50',()=>{
        const input = 1;
        const result = greaterThanFifty(input);
        expect(result).toBe(false)
    })
})

describe('Add',() => {
    test('Two Numbers',() => {
        const i1 = 5;
        const i2 = 2;
        const expected = 7;
        const result = add(i1,i2);
        expect(result).toBe(expected);
    })
    test('negatives',()=>{
        const i1 = -3;
        const expected = -6;
        const result = add(i1,i1);
        expect(result).toBe(expected)
    })
})

describe('Subtract',() => {
    test('subtraction', () => {
        const input = 5;
        const expected = 0;
        expect(subtract(input,input)).toBe(expected)
    })
})

describe('Multiply',() => {
    test('Two Numbers',() => {
        const i1 = 5;
        const i2 = 2;
        const expected = 10;
        const result = multiply(i1,i2);
        expect(result).toBe(expected);
    })
    test('negatives',()=>{
        const i1 = -3;
        const expected = 9;
        const result = multiply(i1,i1);
        expect(result).toBe(expected)
    })
})

describe('Remainder',() => {
    test('Two Numbers',() => {
        const i1 = 5;
        const i2 = 2;
        const expected = 1;
        const result = getRemainder(i1,i2);
        expect(result).toBe(expected);
    })
})

describe('isEven',() => {
    test('Even Number',()=>{
        const input =  24;
        const result = isEven(input)
        expect(result).toBe(true)
    })
    test('Odd Number',()=>{
        const input =  25;
        const result = isEven(input)
        expect(result).toBe(false)
    })
})

describe('isOdd',() => {
    test('Even Number',()=>{
        const input =  24;
        const result = isOdd(input)
        expect(result).toBe(false)
    })
    test('Odd Number',()=>{
        const input =  25;
        const result = isOdd(input)
        expect(result).toBe(true)
    })
})

describe('square',()=>{
    test('squaring',()=>{
        const input = 4;
        const result = square(input);
        expect(result).toBe(16)
    })
})

describe('cube',()=>{
    test('cubing',()=>{
        const input = 2;
        const expected = 8;
        const result = cube(input);
        expect(result).toBe(expected);
    })
})

describe('Raise to Power',()=>{
    test('raise to power',()=>{
        const num = 5;
        const exp = 5;
        const expected = 3125;
        const result = raiseToPower(num,exp);
        expect(result).toBe(expected);
    })
})

describe('Round Number',()=>{
    test('round up',()=>{
        const input = 2.8;
        const expected = 3;
        const result = roundNumber(input);
        expect(result).toBe(expected);
    })
    test('round down',()=>{
        const input = 3.2;
        const expected = 3;
        const result = roundNumber(input);
        expect(result).toBe(expected);
    })
})

describe('Round Up',()=>{
    test('round up',()=>{
        const input = 2.8;
        const expected = 3;
        const result = roundUp(input);
        expect(result).toBe(expected);
    })
})

describe('Add Exclamation',()=>{
    test('returns string and adds exclamation point',() => {
        const input = "Hello World";
        const expected = "Hello World!";
        const result = addExclamationPoint(input);
        expect(result).toBe(expected)
    })
})

describe('Combine Names',()=>{
    test('returns string',()=>{
        const input = "hello";
        const result = combineNames(input);
        expect(typeof result).toBe('string')
    })
    test('Combines Names',() => {
        const first = "Drew";
        const last = "Johnson";
        const expected = "Drew Johnson";
        const result = combineNames(first,last);
        expect(result).toBe(expected);
    })
})

describe('Get Greeting',()=>{
    test('returns string',()=>{
        const input = "Drew";
        const result = getGreeting(input);
        expect(typeof result).toBe('string')
    })
    test('Returns correct greeting', () => {
        const input = "Drew";
        const expected = "Hello Drew!"
        const result = getGreeting(input);
        expect(result).toBe(expected)
    })
})

describe('Get Rectangle Area',()=>{
    test('rectangle area',()=>{
        const height = 3;
        const width = 5;
        const expected = 15;
        const result = getRectangleArea(height,width);
        expect(result).toBe(expected);
    })
})

describe('Get Triangle Area', () => {
    test('correct answer',() => {
        const base = 3;
        const height = 5;
        const result = getTriangleArea(base,height);
        expect(result).toBe(7.5)
    })
})

describe('Get Circle Area',() => {
    const radius = 1;
    const expected = 3.14;
    const result = getCircleArea(radius);
    expect(result).toBe(expected);
})

describe('Get Rectangular Prism volume',() => {
    test('correct answer', () => {
        const length = 4;
        const width = 2;
        const height = 5;
        const expected = 40;
        const result = getRectangularPrismVolume(length,width,height);
        expect(result).toBe(expected)
    })
})



