const helpers = require('./project-1');

// start testing!
test('Is does it run?', ()=>{})

test('should multiply num by 10', ()=>{
    const expected = 100
    const actual = helpers.multiplyByTen(10)
    expect(actual).toBe(expected)
})

test('should subtract 5 from num', ()=>{
    const expected = 5
    const actual = helpers.subtractFive(10)
    expect(actual).toBe(expected)
})

test('Compare string lengths', ()=>{
    const test1 = 'bats';
    const test2 = 'cats';
    const actual = helpers.areSameLength(test1, test2)
    expect(actual).toBeTruthy()
})

test('Are equal', ()=>{
    const test1 = 'cats';
    const test2 = 'cats';
    const actual = helpers.areEqual(test1, test2)
    expect(actual).toBeTruthy()
})

test('Under 90', () =>{
    const test1 = 55;
    const actual = helpers.lessThanNinety(test1);
    expect(actual).toBeTruthy()
})

test('Over 50', ()=>{
    const test1 = 55;
    const actual = helpers.greaterThanFifty(test1)
    expect(actual).toBeTruthy()
})

test('add 2+2 = 4', () =>{
    const expected = 4;
    const test1 = 2;
    const test2 = 2;
    const actual = helpers.add(test1, test2)
    expect(actual).toBe(expected)
})

test('subtract 3-2 = 1', () =>{
    const expected = 1;
    const test1 = 3;
    const test2 = 2;
    const actual = helpers.subtract(test1, test2)
    expect(actual).toBe(expected)
})

test('multiply 4+2 = 2', () =>{
    const expected = 2;
    const test1 = 4;
    const test2 = 2;
    const actual = helpers.divide(test1, test2)
    expect(actual).toBe(expected)
})

test('multiply 2*2 = 4', () =>{
    const expected = 4;
    const test1 = 2;
    const test2 = 2;
    const actual = helpers.multiply(test1, test2)
    expect(actual).toBe(expected)
})

test('Remainder 3/2 is 1', () =>{
    const expected = 1;
    const test1 = 3;
    const test2 = 2;
    const actual = helpers.getRemainder(test1, test2)
    expect(actual).toBe(expected)
})

test('32 is Even', ()=>{
    const test1 = 32;
    const actual = helpers.isEven(test1)
    expect(actual).toBeTruthy()
})

test('21 is odd', ()=>{
    const test1 = 21;
    const actual = helpers.isOdd(test1)
    expect(actual).toBeTruthy()
})

test('2 squared is 4', ()=>{
    const expected = 4;
    const test1 = 2;
    const actual = helpers.square(test1)
    expect(actual).toBe(expected)
})

test('2 cubed is 8', ()=>{
    const expected = 8;
    const test1 = 2;
    const actual = helpers.cube(test1)
    expect(actual).toBe(expected)
})

test('2 to the 4th is 16', ()=>{
    const expected = 16;
    const test1 = 2;
    const test2 = 4;
    const actual = helpers.raiseToPower(test1, test2)
    expect(actual).toBe(expected)
})

test('Round 4.4 is 4', ()=>{
    const expected = 4;
    const test1=4.4;
    const actual = helpers.roundNumber(test1);
    expect(actual).toBe(expected)
});

test('Round up 4.4 is 5', ()=>{
    const expected = 5;
    const test1=4.4;
    const actual = helpers.roundUp(test1);
    expect(actual).toBe(expected)
});

test('Adds exclaimation point to hi', ()=>{
    const expected = 'hi!';
    const test1 = 'hi';
    const actual = helpers.addExclamationPoint(test1);
    expect(actual).toBe(expected);
});

test('John Jimson', ()=>{
    const expected = 'John Jimson';
    const test1 = 'John';
    const test2 = 'Jimson';
    const actual = helpers.combineNames(test1, test2);
    expect(actual).toBe(expected)
});

test('Adds Hello _! to any name' , ()=>{
    const expected = 'Hello Bobby!';
    const test1 = 'Bobby';
    const actual = helpers.getGreeting(test1);
    expect(actual).toBe(expected);
});

test('Rectangle width 2 , height 2, area 4', ()=>{
    const width = 2;
    const height = 2;
    const expected = 4;
    const actual = helpers.getRectangleArea(width, height);
    expect(actual).toBe(expected);

})

test('Triangle base 2, height 3, area 3', ()=>{
    const base = 2;
    const height = 3;
    const expected = 3;
    const actual = helpers.getTriangleArea(base, height);
    expect(actual).toBe(expected);
});

test('Circle radius 1 area is pi', ()=>{
    const radius = 1;
    const actual = helpers.getCircleArea(radius)
    expect(actual).toBe(Math.PI)
})

test('Prism width 2 , height 2, length 1, area 4', ()=>{
    const width = 2;
    const height = 2;
    const length = 1;
    const expected = 4;
    const actual = helpers.getRectangleArea(width, height, length);
    expect(actual).toBe(expected);

})



