const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project 2 testing', () => {
  it('should return the biggest value', () => {
    const getBiggest = funcs.getBiggest;

    const five = getBiggest(3, 5);
    const eleven = getBiggest(11, 6);
    const nine = getBiggest(4, 9);

    expect(five).toBe(5);
    expect(eleven).toBe(11);
    expect(nine).toBe(9);
  })

  it('should return a greeting in a certain language', () => {
    const greeting = funcs.greeting;

    const german = greeting('German');
    const spanish = greeting('Spanish');
    const english = greeting('default');

    expect(german).toBe('Guten Tag!');
    expect(spanish).toBe('Hola!');
    expect(english).toBe('Hello!');
  })

  it('should check to see if the number given is a 10 or 5', () => {
    const isTenOrFive = funcs.isTenOrFive;

    const ten = isTenOrFive(10);
    const five = isTenOrFive(5);
    const two = isTenOrFive(2);

    expect(ten).toBe(true);
    expect(five).toBe(true);
    expect(two).toBe(false);
  })

  it('should check to see if the number given is between 20 and 50', () => {
    const isInRange = funcs.isInRange;

    const ten = isInRange(10);
    const fifty = isInRange(50);
    const twentyFive = isInRange(25);

    expect(ten).toBe(false);
    expect(fifty).toBe(false);
    expect(twentyFive).toBe(true);
  })

  it('should check to see if the number given is an Integer', () => {
    const isInteger = funcs.isInteger;
     
    const ten = isInteger(10);
    const fifty = isInteger(50);
    const twentyFive = isInteger(25.2);
     
    expect(ten).toBe(true);
    expect(fifty).toBe(true);
    expect(twentyFive).toBe(false);
  })

  it('should return fizz, buzz, or fizzbuzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
     
    const ten = fizzBuzz(10);
    const fourtyFive = fizzBuzz(45);
    const nine = fizzBuzz(9);
     
    expect(ten).toBe('buzz');
    expect(fourtyFive).toBe('fizzbuzz');
    expect(nine).toBe('fizz');
  })
  
})