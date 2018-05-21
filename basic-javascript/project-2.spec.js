const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('get biggest', () => {
  it('should add its numbers', () => {
    const expected = 10;
    const getBiggest = funcs.getBiggest;
    
    const actual = getBiggest(10, 4);
    
    expect(actual).toEqual(expected);
  });
});


describe('add Numbers', () => {
  it('should add its numbers', () => {
    const expected = 8;
    const addNumbers = funcs.addNumbers;
    
    const actual = addNumbers(44);
    
    expect(actual).toEqual(expected);
  });
});

describe('greeting', () => {
  it('should greet in specific language', () => {
    const expected = 'Hola!';
    const greeting = funcs.greeting;
    
    const actual = greeting('Spanish');
    expect(actual).toEqual(expected);
  });
});

describe('isInRange', () => {
  it('should be in given range', () => {
    const expected = true;
    const isInRange = funcs.isInRange;
    
    const actual = isInRange('49');
    expect(actual).toEqual(expected);
  });
});

describe('fizzBuzz', () => {
  it('should fizzBuzz', () => {
    const input = 15;
    const fizzBuzz = funcs.fizzBuzz;
    
    const actual = fizzBuzz(input);
    if (input === 15) {
      expect(actual).toEqual('fizzbuzz');
    } else if (input === 10) {
      expect(actual).toEqual('buzz');
    } else if (input === 9) {
      expect(actual).toEqual('fizz');
    } else {
      expect(actual).toEqual(input);
    }
  });
});

describe('incrementByOne', () => {
  it('should be increment By One', () => {
    const expected = [4, 7, 88];
    const incrementByOne = funcs.incrementByOne;
    
    const actual = incrementByOne([3, 6, 87]);
    expect(actual).toEqual(expected);
  });
});