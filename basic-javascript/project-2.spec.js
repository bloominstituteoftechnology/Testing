const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test('gets biggest value from 2 numbers', () => {
    expect(funcs.getBiggest(10, 5)).toBe(10);
    expect(funcs.getBiggest(-5, -1)).toBe(-1);
  });
  
  test('respond Hello in passed in language', () => {
    expect(funcs.greeting('German')).toBe('Guten Tag!');
    expect(funcs.greeting('Spanish')).toBe('Hola!');
  });
  
  test('only return true if number is 10 or 5', () => {
    expect(funcs.isTenOrFive(5)).toBe(true);
    expect(funcs.isTenOrFive(10)).toBe(true);
    expect(funcs.isTenOrFive(-10)).toBe(false);
    expect(funcs.isTenOrFive(-5)).toBe(false);
  });
  
  test('only return true if number between 50 and 20', () => {
    expect(funcs.isInRange(50)).toBe(false);
    expect(funcs.isInRange(35)).toBe(true);
  });
  
  test('only return true if number is int', () => {
    expect(funcs.isInteger(5)).toBe(true);
    expect(funcs.isInteger(-5)).toBe(true);
    expect(funcs.isInteger(5.2)).toBe(false);
  });
  
  test('returns fiz or buzz or fizbuzz', () => {
    expect(funcs.fizzBuzz(3)).toBe('fizz');
    expect(funcs.fizzBuzz(10)).toBe('buzz');
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
  });