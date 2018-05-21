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

  })
})
