const funcs = require('../basic-javascript/project-1');

// write your tests here
it('should multiply by ten', () => {
    const multiplyByTen = funcs.multiplyByTen;
    const expected = 100;
    const actual = multiplyByTen(10);
    expect(actual).toBe(100);
});

it('should subtract five', () => {
    const subtractFive = funcs.subtractFive;
    const expected = 5;
    const actual = subtractFive(10)
    expect(actual).toBe(5);
});

it('should be same length', () => {
    const areSameLength =  funcs.areSameLength;
    const str1 = ('michael')
    const str2 = ('1234567')
    expect(str1.length).toEqual(str2.length);
});

it('should equal', () => {
    const areEqual = funcs.areEqual;
    const x = 50;
    const y = 50;
    expect(x).toEqual(y);
});

it('should be less than 90', () => {
    const lessThanNinety = funcs.lessThanNinety;
    const num = 89;
    expect(num).toBeLessThan(90);
});

it('should be greater than 50', () => {
    const greaterThanFifty = funcs.greaterThanFifty;
    const num = 51;
    expect(num).toBeGreaterThan(50);
})

it('should add', () => {
    const add = funcs.add;
    x = 2
    y = 3
    const sum = add(x,y)
    expect(sum).toBe(5);
});

it('should subtract', () => {
    const subtract = funcs.subtract;
    x = 3
    y = 1
    const answer = subtract(x,y)
    expect(answer).toBe(2);
});

it('should multiply', () => {
    const multiply = funcs.multiply;
    const answer = multiply(x,y)
    expect(answer).toBe(x*y)
})

it('should find remainder', () => {
    const getRemainder = funcs.getRemainder;
    x = 25
    y = 5
    const answer = getRemainder(x,y)
    expect(answer).toBe(x%y);
});

it('should be even', () => {
    const isEven = funcs.isEven;
    num = isEven(4)
    expect(num).toBe(true)
});

it('should be odd', () => {
    const isOdd = funcs.isOdd;
    num = isOdd(5)
    expect(num).toBe(true)
});

it('should square a number', () => {
    const square = funcs.square;
    num = 5
    answer = num * num;
    expect(answer).toBe(25)
});

it('should cube a number', () => {
    const cube = funcs.cube;
    num = 5
    answer = num * num * num;
    expect(answer).toBe(125)
});

it('should raise to an exponent', () => {
    const raiseToPower = funcs.raiseToPower;
    num = 4;
    exponent = 2;
    answer = (num ** exponent)
    expect(answer).toBe(16)
});

it('should round a number', () => {
    const roundNumber = funcs.roundNumber;
    answer = roundNumber(8.6);
    expect(answer).toBe(9);
});

it('should round a number up', () => {
    const roundUp = funcs.roundUp;
    answer = roundUp(5.2);
    expect(answer).toBe(6);
})



