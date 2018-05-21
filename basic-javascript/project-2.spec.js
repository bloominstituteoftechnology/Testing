const funcs = require('./project-2');

describe('Basic Javascript 2', () => {
  it('Get Biggest', () => {
    const larger = funcs.getBiggest(5, 2);
    const equal = funcs.getBiggest(4, 4);
    expect(larger).toBe(5);
    expect(equal).toBe(4);
  })
  it('Greeting', () => {
    const german = funcs.greeting('German');
    const other = funcs.greeting('foobar');
    expect(german).toBe('Guten Tag!');
    expect(other).toBe('Hello!');
  })
  it('Is Ten Or Five', () => {
    const actual = funcs.isTenOrFive(5);
    expect(actual).toBeTruthy();
  })
  it('Is Between Twenty and Fifty', () => {
    const actual = funcs.isInRange(42);
    expect(actual).toBeTruthy();
  })
  it('Is An Integer', () => {
    const actual = funcs.isInteger(42);
    expect(actual).toBeTruthy();
  })
  it('FizzBuzz', () => {
    const actual = funcs.fizzBuzz(10);
    expect(actual).toBe('buzz');
  })
  it('Number Is Prime', () => {
    const actual = funcs.isPrime(7);
    expect(actual).toBeTruthy();
  })
  it('Return First Item', () => {
    const actual = funcs.returnFirst([1, 2]);
    expect(actual).toBe(1);
  })
  it('Return Last Item', () => {
    const actual = funcs.returnLast([1, 2]);
    expect(actual).toBe(2);
  })
  it('Get Array Length', () => {
    const actual = funcs.getArrayLength([1, 2]);
    expect(actual).toBe(2);
  })
  it('Increment Array Items', () => {
    const actual = funcs.incrementByOne([1, 2]);
    expect(actual).toEqual([2, 3]);
  })
  it('Add Item to Array', () => {
    const actual = funcs.addItemToArray([1, 2], 3);
    expect(actual).toEqual([1, 2, 3]);
  })
  it('Add Item to Front of Array', () => {
    const actual = funcs.addItemToFront([1, 2], 3);
    expect(actual).toEqual([3, 1, 2]);
  })
  it('Words to Sentence', () => {
    const actual = funcs.wordsToSentence(['foo', 'bar']);
    expect(actual).toBe('foo bar');
  })
  it('Array Contains', () => {
    const actual = funcs.contains([1, 2], 1);
    expect(actual).toBeTruthy();
  })
  it('Add Numbers in Array', () => {
    const actual = funcs.addNumbers([1, 2]);
    expect(actual).toBe(3);
  })
  it('Average Test Score', () => {
    const actual = funcs.averageTestScore([1, 2]);
    expect(actual).toBe(1.5);
  })
  it('Largest Number', () => {
    const actual = funcs.largestNumber([1, 2]);
    expect(actual).toBe(2);
  })
})