const helpers = require('./project-1');

// start testing!
test('multiply num by ten', () => {
    // Arrange : setup the world
    const expected = 100;
    const result = helpers.multiplyByTen(10);

    // Act : execute the code you're testing
    expect(result).toEqual(expected)
    // Assert : check that it works
})

test('subtract 5 from num', () => {
    const expected = 10;
    const result = helpers.subtractFive(15);

    expect(result).toEqual(expected);
})

describe('strings should equal same length', () => {
    test('string should be same length', () => {
        const a = 'hello';
        const b = 'olleh';
        expect(helpers.areSameLength(a, b)).toBe(true);
    })
    
})

test('param x and y should be equal', ()=> {
    expect(helpers.areEqual(1, 1)).toBe(true);
})

test('input should be less than ninety', () => {
    expect(helpers.lessThanNinety(4)).toBe(true);
})

test('add function', ()=> {
    expect(helpers.add(2, 2)).toEqual(4);
})

test('subtract function', () => {
    expect(helpers.subtract(3, 2)).toEqual(1);
})

test('divide function', ()=> {
    expect(helpers.divide(4, 2)).toEqual(2);
})

test('multiply function', ()=> {
    expect(helpers.multiply(5, 5)).toEqual(25);
})

test('get remainder function', ()=> {
    expect(helpers.getRemainder(5, 3)).toEqual(2);
})

test('is even function', ()=> {
    expect(helpers.isEven(4)).toBe(true);
})

test('is odd func', ()=> {
    expect(helpers.isOdd(3)).toBe(true);
})

test('squared func', ()=> {
    expect(helpers.square(5)).toEqual(25);
})

test('cubed func', ()=> {
    expect(helpers.cube(3)).toEqual(27);
})

test('raise to power func', ()=> {
    expect(helpers.raiseToPower(2, 3)).toEqual(8);
})

test('round number using Math.round', ()=> {
    expect(helpers.roundNumber(3.2)).toEqual(3);
})

test('round number using Math.ceil', ()=> {
    expect(helpers.roundUp(3.5)).toEqual(4);
})

test('add exclamation point func', ()=> {
    expect(helpers.addExclamationPoint('hello')).toBe('hello!');
})

test('combine name func', ()=> {
    expect(helpers.combineNames('hello', 'world')).toEqual('hello world');
})

test('greeting func', ()=> {
    expect(helpers.getGreeting('Lambda')).toEqual('Hello Lambda!');
})

test('rectangle area', ()=> {
    expect(helpers.getRectangleArea(2, 3)).toEqual(6);
})

test('get triangle area func', ()=> {
    expect(helpers.getTriangleArea(4, 4)).toEqual(8);
})

test('circle area func', ()=> {
    expect(helpers.getCircleArea(4)).toEqual(50.26548245743669);
})

test('rectangular prism volum func', ()=> {
    expect(helpers.getRectangularPrismVolume(4, 4, 4)).toEqual(64);
})