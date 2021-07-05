const helpers = require('./project-1');

// start testing!

it('multiply number by 10', () => {
    const numTimesTen = helpers.multiplyByTen;

    const timesTwo = numTimesTen(2);
    const timesTen = numTimesTen(10);

    expect(timesTwo).toEqual(20);
    expect(timesTen).toEqual(100);
});

it('subtract number by 5', () => {
    const minusFive = helpers.subtractFive;

    const Hundred = minusFive(100);
    const Zero = minusFive(0);

    expect(Hundred).toEqual(95);
    expect(Zero).toEqual(-5);
});

it('2 values are the same length', () => {
    const sameLength = helpers.areSameLength;

    const Values1 = sameLength('Das', '123');
    const Values2 = sameLength('DasMA', '1234');

    expect(Values1).toEqual(true);
    expect(Values2).toEqual(false);
});

it('2 values are equal', () => {
    const Equal = helpers.areEqual;

    const Values1 = Equal('Das', 'Das');
    const Values2 = Equal('DasMA', 'DasGMa');

    expect(Values1).toEqual(true);
    expect(Values2).toEqual(false);
});

it('tests if values are less than 90', () => {
    const ninetyLess = helpers.lessThanNinety;

    const Values1 = ninetyLess('50');
    const Values2 = ninetyLess('200');

    expect(Values1).toEqual(true);
    expect(Values2).toEqual(false);
});

it('tests if values are more than 50', () => {
    const fiftyMore = helpers.greaterThanFifty;

    const Values1 = fiftyMore('40');
    const Values2 = fiftyMore('200');

    expect(Values1).toEqual(false);
    expect(Values2).toEqual(true);
});

it('Add two numbers', () => {
    const addTwoNumbers = helpers.add;

    const value1 = addTwoNumbers(2, 3);
    const value2 = addTwoNumbers(-3, 3);

    expect(value1).toBe(5);
    expect(value2).toBe(0);
});

it('minus 2 numbers; return sum', () => {
    const subtract = helpers.subtract;

    const one = subtract(4, 3);
    const five = subtract(10, 5);

    expect(one).toBe(1);
    expect(five).toBe(5);
});


it('divide 2 numbers; return sum', () => {
    const divide = helpers.divide;

    const four = divide(12, 3);
    const two = divide(10, 5);

    expect(four).toBe(4);
    expect(two).toBe(2);
});


it('multiply 2 numbers; return sum', () => {
    const multiply = helpers.multiply;

    const six = multiply(2, 3);
    const ten = multiply(2, 5);

    expect(six).toBe(6);
    expect(ten).toBe(10);
});

it('get remainder of 2 numbers', () => {
    const getRemainder = helpers.getRemainder;

    const value1 = getRemainder(10, 3);
    const value2 = getRemainder(21, 4);

    expect(value1).toBe(1);
    expect(value2).toBe(1);
});

it('checks for even number', () => {
    const isEven = helpers.isEven;

    const Value1 = isEven('66');
    const Value2 = isEven('333');

    expect(Value1).toEqual(true);
    expect(Value2).toEqual(false);
});

it('checks for odd number', () => {
    const isOdd = helpers.isOdd;

    const Value1 = isOdd('66');
    const Value2 = isOdd('333');

    expect(Value1).toEqual(false);
    expect(Value2).toEqual(true);
});

it('checks for square number', () => {
    const square = helpers.square;

    const eightyOne = square(9, 9);
    const four = square(2, 2);

    expect(eightyOne).toBe(81);
    expect(four).toBe(4);
});

it('checks for cubed number', () => {
    const cubed = helpers.cube;

    const twentySeven = cubed(3, 3, 3);
    const eight = cubed(2, 2, 2);

    expect(twentySeven).toBe(27);
    expect(eight).toBe(8);
});

it('checks for raise to power', () => {
    const raiseToPower = helpers.raiseToPower;

    const Power = raiseToPower(3, 5);

    expect(Power).toBe(243);
});

it('checks for round number', () => {
    const roundNumber = helpers.roundNumber;

    const round = roundNumber(3.3);

    expect(round).toBe(3);
});


it('checks for roundup number', () => {
    const roundUp = helpers.roundUp;

    const upRound = roundUp(1.95);

    expect(upRound).toBe(2);
});

it('adds exclamation to string', () => {
    const addExclamationPoint = helpers.addExclamationPoint;

    const Value = addExclamationPoint('Das');

    expect(Value).toBe('Das!');
});

it('combine names', () => {
    const combineNames = helpers.combineNames;

    const Value = combineNames('Das', 'Ma');

    expect(Value).toBe('Das Ma');
});

it('get greeting', () => {
    const getGreeting = helpers.getGreeting;

    const Value = getGreeting('Das');

    expect(Value).toBe('Hello Das!');
});

it('get Rectangle Area', () => {
    const getRectangleArea = helpers.getRectangleArea;

    const Value = getRectangleArea(4, 4);

    expect(Value).toBe(16);
});

it('get Triangle Area', () => {
    const getTriangleArea = helpers.getTriangleArea;

    const Value = getTriangleArea(3, 2);

    expect(Value).toBe(3);
});

it('get Circle Area', () => {
    const getCircleArea = helpers.getCircleArea;

    const Value = getCircleArea(2);

    expect(Value).toBe(Math.PI * 4);
});

it('get Rectangular prism Volume', () => {
    const getRectangularPrismVolume = helpers.getRectangularPrismVolume;

    const Value = getRectangularPrismVolume(2, 2, 2);

    expect(Value).toBe(8);
});
