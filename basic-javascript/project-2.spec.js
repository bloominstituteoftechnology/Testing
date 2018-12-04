const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test('get bigger func', ()=> {
    expect(funcs.getBiggest(5, 2)).toEqual(5);
})

test('greeting func', ()=> {
    expect(funcs.greeting('German')).toEqual('Guten Tag!');
})

test('should be five or ten func', ()=> {
    expect(funcs.isTenOrFive(3)).toBe(false);
})

test('in range of 20 - 50', ()=> {
    expect(funcs.isInRange(10)).toBe(false);
})

test('is an integer', ()=> {
    expect(funcs.isInteger(5.23)).toBe(false);
})

describe('fizzbuzz func', ()=> {
    test('fizz buzz func to return fizzbuzz', ()=> {
        expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
    })
        
    test('fizz buzz to return buzz', ()=> {
        expect(funcs.fizzBuzz(25)).toEqual('buzz')
    })

    test('fizz buzz to return fizz', ()=> {
        expect(funcs.fizzBuzz(27)).toEqual('fizz')
    })
})

