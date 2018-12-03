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
test('Jest runs', () => {

});

test('multiply by ten', () => {
    const input = 10;
    const expected = 100;
    expect(multiplyByTen(input)).toEqual(expected);
})

test('subtract 5', () => {
    const input = 25;
    const expected = 20;
    expect(subtractFive(input)).toEqual(expected);
})

test('same length string', () => {
    const input1 = 'mary';
    const input2 = 'lary';
    expect(areSameLength(input1,input2)).toBeTruthy();
})

test('x & y are equal', () => {
    const input1 = 4;
    const input2 = 4;
    expect(areEqual(input1,input2)).toBeTruthy();
})

test('number is less than 90', () => {
    const input = 40;
    
    expect(lessThanNinety(input)).toBeTruthy();
})

test('number is greater than 50', () => {
    const input = 60;
    
    expect(greaterThanFifty(input)).toBeTruthy();
})

test('adding successful', () => {
    const input1 = 6;
    const input2 = 4;
    const expected = 10; 
    
    expect(add(input1,input2)).toEqual(expected);
})

test('subtracting successful', () => {
    const input1 = 6;
    const input2 = 4;
    const expected = 2; 
    
    expect(subtract(input1,input2)).toEqual(expected);
})

test('dividing successful', () => {
    const input1 = 6;
    const input2 = 3;
    const expected = 2; 
    
    expect(divide(input1,input2)).toEqual(expected);
})

test('multiplying successful', () => {
    const input1 = 6;
    const input2 = 2;
    const expected = 12; 
    
    expect(multiply(input1,input2)).toEqual(expected);
})


