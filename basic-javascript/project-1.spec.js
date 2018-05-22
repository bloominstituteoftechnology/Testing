const funcs = require('./project-1');

// write your tests here

describe('project 1', () => {
  it('mutliplyByTen', () => {
    const actual = funcs.multiplyByTen(5);
    const expected = 50;

    expect(actual).toBe(expected);
  })

  it('subtractFive', () => {
    const actual = funcs.subtractFive(20);
    const expected = 15;

    expect(actual).toBe(expected);
  })

  it('areSameLength', () => {
    const actual = funcs.areSameLength('hello', 'hello');
    const expected = true;

    expect(actual).toBe(expected);
  })

  it('lessThanNinety', () => {
    const actual = funcs.lessThanNinety(20);
    const expected = true;

    expect(actual).toBe(expected);
  })

  it('greaterThanFifty', () => {
    const actual = funcs.greaterThanFifty(90);
    const expected = true;

    expect(actual).toBe(expected);
  })

  it('add', () => {
    const actual = funcs.add(2, 2);
    const expected = 4;

    expect(actual).toBe(expected);
  })

  it('subtract', () => {
    const actual = funcs.subtract(6, 2);
    const expected = 4;

    expect(actual).toBe(expected);
  })

  it('divide', () => {
    let actual = funcs.divide(10, 5);
    let expected = 2;
    expect(actual).toBe(expected);

    actual = funcs.divide(10, 0);
    expected = Infinity;
    expect(actual).toBe(expected);
  })

  it('multiply', () => {
    const actual = funcs.multiply(10, 5);
    const expected = 50;

    expect(actual).toBe(expected);
  })

  it('getRemainder', () => {
    let actual = funcs.getRemainder(50, 13);
    let expected = 11;
    expect(actual).toBe(expected);

    actual = funcs.getRemainder(50, 10);
    expected = 0;
    expect(actual).toBe(expected);
  })

  it('isEven', () => {
    let actual = funcs.isEven(90);
    let expected = true;
    expect(actual).toBe(expected);

    actual = funcs.isEven(91);
    expected = false;
    expect(actual).toBe(expected);
  })

  it('isOdd', () => {
    let actual = funcs.isOdd(95);
    let expected = true;
    expect(actual).toBe(expected);

    actual = funcs.isOdd(4);
    expected = false;
    expect(actual).toBe(expected);
  })

  it('getRemainder', () => {
    let actual = funcs.getRemainder(50, 13);
    let expected = 11;
    expect(actual).toBe(expected);

    actual = funcs.getRemainder(50, 10);
    expected = 0;
    expect(actual).toBe(expected);
  })

  it('square', () => {
    const actual = funcs.square(5);
    const expected = 25;

    expect(actual).toBe(expected);
  })

  it('cube', () => {
    const actual = funcs.cube(5);
    const expected = 125;

    expect(actual).toBe(expected);
  })

  it('raiseToPower', () => {
    const actual = funcs.raiseToPower(5, 4);
    const expected = 625;

    expect(actual).toBe(expected);
  })

  it('raiseToPower', () => {
    const actual = funcs.raiseToPower(5, 4);
    const expected = 625;

    expect(actual).toBe(expected);
  })

  it('roundNumber', () => {
    const actual = funcs.roundNumber(20.4);
    const expected = 20;

    expect(actual).toBe(expected);
  })

  it('roundUp', () => {
    const actual = funcs.roundUp(20.4);
    const expected = 21;

    expect(actual).toBe(expected);
  })

  it('addExclamationPoint', () => {
    const actual = funcs.addExclamationPoint("hello");
    const expected = "hello!";

    expect(actual).toBe(expected);
  })

  it('combineNames', () => {
    const actual = funcs.combineNames("Mark", "Wong");
    const expected = "Mark Wong";

    expect(actual).toBe(expected);
  })

  it('getGreeting', () => {
    const actual = funcs.getGreeting("Mark");
    const expected = "Hello Mark!";

    expect(actual).toBe(expected);
  })

  it('getRectangleArea', () => {
    const actual = funcs.getRectangleArea(45, 10);
    const expected = 450;

    expect(actual).toBe(expected);
  })

  it('getTriangleArea', () => {
    const actual = funcs.getTriangleArea(45, 10, 10);
    const expected = 225;

    expect(actual).toBe(expected);
  })

  it('getCircleArea', () => {
    const actual = funcs.getCircleArea(20);
    const expected = 1256.64; 

    expect(actual).toBeCloseTo(expected);
  })

  it('getRectangularPrismVolume', () => {
    const actual = funcs.getRectangularPrismVolume(20, 10, 5);
    const expected = 1000;

    expect(actual).toBe(expected);
  })
});
