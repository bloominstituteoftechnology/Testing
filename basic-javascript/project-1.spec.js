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

it('')