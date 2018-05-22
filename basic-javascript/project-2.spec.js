const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('default', () => {
  it('runs the test', () => {})
})


describe('greeting', () => {
  it('should check all the language greeting', () => {
    const getGreeting = funcs.greeting

    const german = getGreeting('German');
    const spanish = getGreeting('Spanish')
    const noLang = getGreeting();

    expect(german).toBe('Guten Tag!');
    expect(spanish).toBe('Hola!');
    expect(noLang).toBe('Hello!');
  })
})

describe('isTenOrFive', () => {
  it('should check if passed argument is 5 or 10', () => {
    const actual = funcs.isTenOrFive(5)
    expect(actual).toBeTruthy();
  })
})


describe('isInRange', ()=> {
  it('should check if passed argument is within range of 20 and 50', () => {
    const truthy = funcs.isInRange(44);
      const falsy = funcs.isInRange(60);
      expect(truthy).toBeTruthy();
      expect(falsy).toBeFalsy();
  })
})


describe('fizzBuzz', () => {
  it('should check if num is divisible by 5 and 3 or only 3 or 5', () => {
    const fizz = funcs.fizzBuzz(3);
    const buzz = funcs.fizzBuzz(5);
    const fizzbuzz = funcs.fizzBuzz(15);

     expect(fizz).toEqual('fizz')
     expect(buzz).toEqual('buzz');
     expect(fizzbuzz).toEqual('fizzbuzz');

  })
})
