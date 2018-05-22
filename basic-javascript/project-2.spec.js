const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project 2', () => {
  it('getBiggest', () => {
    const actual = funcs.getBiggest(5, 10);
    const expected = 10;

    expect(actual).toBe(expected);
  });

  it('greeting', () => {
    let actual = funcs.greeting('German');
    let expected = 'Guten Tag!';
    expect(actual).toBe(expected);

    actual = funcs.greeting('Spanish');
    expected = 'Hola!';
    expect(actual).toBe(expected);

    actual = funcs.greeting('random');
    expected = 'Hello!';
    expect(actual).toBe(expected);
  });

  it('isTenOrFive', () => {
    let actual = funcs.isTenOrFive(5);
    let expected = true;
    expect(actual).toBe(expected);

    actual = funcs.isTenOrFive(10);
    expected = true;
    expect(actual).toBe(expected);

    actual = funcs.isTenOrFive(11);
    expected = false;
    expect(actual).toBe(expected);
  });

  it('isInRange', () => {
    let actual = funcs.isInRange(25);
    let expected = true;
    expect(actual).toBe(expected);

    actual = funcs.isInRange(10);
    expected = false;
    expect(actual).toBe(expected);

    actual = funcs.isInRange(80);
    expected = false;
    expect(actual).toBe(expected);
  });

  it('isInteger', () => {
    let actual = funcs.isInteger(25);
    let expected = true;
    expect(actual).toBe(expected);

    actual = funcs.isInteger(10.3);
    expected = false;
    expect(actual).toBe(expected);
  });

  it('fizzBuzz', () => {
    let actual = funcs.fizzBuzz(30);
    let expected = 'fizzbuzz';
    expect(actual).toBe(expected);

    actual = funcs.fizzBuzz(10);
    expected = 'buzz';
    expect(actual).toBe(expected);

    actual = funcs.fizzBuzz(33);
    expected = 'fizz';
    expect(actual).toBe(expected);

    actual = funcs.fizzBuzz(328);
    expected = 328;
    expect(actual).toBe(expected);
  });

  it('isPrime', () => {
    let actual = funcs.isPrime(-4);
    let expected = false;
    expect(actual).toBe(expected);

    actual = funcs.isPrime(1);
    expected = false;
    expect(actual).toBe(expected);

    actual = funcs.isPrime(0);
    expected = false;
    expect(actual).toBe(expected);

    actual = funcs.isPrime(11);
    expected = true;
    expect(actual).toBe(expected);

    actual = funcs.isPrime(12);
    expected = false;
    expect(actual).toBe(expected);
  });


  it('returnFirst', () => {
    let actual = funcs.returnFirst([5, 4, 2]);
    let expected = 5;
    expect(actual).toBe(expected);

    actual = funcs.returnFirst(['car', 'train', 'boat']);
    expected = 'car';
    expect(actual).toBe(expected);
  });

  it('returnLast', () => {
    let actual = funcs.returnLast([5, 4, 2]);
    let expected = 2;
    expect(actual).toBe(expected);

    actual = funcs.returnLast(['car', 'train', 'boat']);
    expected = 'boat';
    expect(actual).toBe(expected);
  });

  it('getArrayLength', () => {
    const actual = funcs.getArrayLength(['car', 'train', 'boat']);
    const expected = 3;

    expect(actual).toBe(expected);
  });

  it('incrementByOne', () => {
    let actual = funcs.incrementByOne([5, 4, 2]);
    let expected = [6, 5, 3];
    expect(actual).toEqual(expected);
  });

  it('addItemToArray', () => {
    let actual = funcs.addItemToArray([5, 4, 2], 10);
    let expected = [5, 4, 2, 10];
    expect(actual).toEqual(expected);
  });

  it('addItemToFront', () => {
    let actual = funcs.addItemToFront([5, 4, 2], 10);
    let expected = [10, 5, 4, 2];
    expect(actual).toEqual(expected);
  });

  it('wordsToSentence', () => {
    const actual = funcs.wordsToSentence(['I', 'am', 'Groot']);
    const expected = "I am Groot";

    expect(actual).toBe(expected);
  });

  it('contains', () => {
    let actual = funcs.contains([5, 4, 2], 5);
    let expected = true; 
    expect(actual).toEqual(expected);

    actual = funcs.contains([5, 4, 2], 1);
    expected = false; 
    expect(actual).toEqual(expected);
  });

  it('addNumbers', () => {
    let actual = funcs.addNumbers([5, 4, 2]);
    let expected = 11; 
    expect(actual).toEqual(expected);
  });

  it('averageTestScore', () => {
    let actual = funcs.averageTestScore([5, 4, 2]);
    let expected = 3.67; 
    expect(actual).toBeCloseTo(expected);
  });

  it('largestNumber', () => {
    let actual = funcs.largestNumber([5, 4, 2]);
    let expected = 5; 
    expect(actual).toBe(expected);
  });
});
