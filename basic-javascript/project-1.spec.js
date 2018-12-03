const helpers = require('./project-1');

// start testing!
test('Is does it run?', ()=>{})

test('should multiply num by 10', ()=>{
    const expected = 100
    const actual = helpers.multiplyByTen(10)
    expect(actual).toEqual(expected)
})

test('should subtract 5 from num', ()=>{
    const expected = 5
    const actual = helpers.subtractFive(10)
    expect(actual).toEqual(expected)
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

test('add adds', () =>{
    const expected = 4;
    const test1 = 2;
    const test2 = 2;
    const actual = helpers.add(test1, test2)
    expect(actual).toEqual(expected)
    
})