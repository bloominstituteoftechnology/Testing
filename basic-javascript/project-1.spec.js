const funcs = require('./project-1');

describe('Basic Javascript 1', () => {
  it('Multiply By Ten', () => {
    const actual = funcs.multiplyByTen(5);
    expect(actual).toBe(50);
  })
  it('Subtract Five', () => {
    const actual = funcs.subtractFive(12);
    expect(actual).toBe(7);
  })
  it('Equivalent Length', () => {
    const actual = funcs.areSameLength('foo', 'bar');
    expect(actual).toBeTruthy();
  })
  it('Equivalent Parameters', () => {
    const actual = funcs.areEqual(1, 1);
    expect(actual).toBeTruthy();
  })
  it('Less Than Ninety', () => {
    const actual = funcs.lessThanNinety(22);
    expect(actual).toBeTruthy();
  })
  it('Greater Than Fifty', () => {
    const actual = funcs.greaterThanFifty(71);
    expect(actual).toBeTruthy();
  })
  it('Adding', () => {
    const actual = funcs.add(2, 2);
    expect(actual).toBe(4);
  })
  it('Subtracting', () => {
    const actual = funcs.subtract(4, 1);
    expect(actual).toBe(3);
  })
  it('Multiplying', () => {
    const actual = funcs.multiply(5, 3);
    expect(actual).toBe(15);
  })
  it('Get Remainder', () => {
    const actual = funcs.getRemainder(15, 4);
    expect(actual).toBe(3);
  })
  it('Even Number', () => {
    const actual = funcs.isEven(16);
    expect(actual).toBeTruthy();
  })
  it('Odd Number', () => {
    const actual = funcs.isOdd(11);
    expect(actual).toBeTruthy();
  })
  it('Square', () => {
    const actual = funcs.square(11);
    expect(actual).toBe(121);
  })
  it('Cube', () => {
    const actual = funcs.cube(3);
    expect(actual).toBe(27);
  })
  it('Raise To Power', () => {
    const actual = funcs.raiseToPower(3, 2);
    expect(actual).toBe(9);
  })
  it('Round Number', () => {
    const actual = funcs.roundNumber(2.4);
    expect(actual).toBe(2);
  })
  it('Round Up', () => {
    const actual = funcs.roundUp(2.4);
    expect(actual).toBe(3);
  })
  it('Add Exclamation Point', () => {
    const actual = funcs.addExclamationPoint('foobar');
    expect(actual).toBe('foobar!');
  })
  it('Combine Names', () => {
    const actual = funcs.combineNames('foo','bar');
    expect(actual).toBe('foo bar');
  })
  it('Get Greeting', () => {
    const actual = funcs.getGreeting('foobar');
    expect(actual).toBe('Hello foobar!');
  })
  it('Get Rectangle Area', () => {
    const actual = funcs.getRectangleArea(2, 3);
    expect(actual).toBe(6);
  })
  it('Get Triangle Area', () => {
    const actual = funcs.getTriangleArea(2, 3);
    expect(actual).toBe(3);
  })
  it('Get Circle Area', () => {
    const actual = funcs.getCircleArea(2);
    expect(actual).toBe(12.566370614359172);
  })
  it('Get Triangle Area', () => {
    const actual = funcs.getRectangularPrismVolume(2, 3, 4);
    expect(actual).toBe(24);
  })
})

// write your tests here
