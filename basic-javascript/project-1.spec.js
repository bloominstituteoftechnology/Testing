const funcs = require('./project-1');

// write your tests here

it('multiply number by 10', () => {
    const numTimesTen = funcs.multiplyByTen;
    
    const timesTwo = numTimesTen(2);
    const timesFour = numTimesTen(4);

    expect(timesTwo).toEqual(20);
    expect(timesFour).toEqual(40);
});

it('subtract number by 5', () => {
    const minusFive = funcs.subtractFive;

    const Ten = minusFive(10);
    const One = minusFive(1);

    expect(Ten).toEqual(5);
    expect(One).toEqual(-4);
});

it('tests is 2 values are same length?', () => {
    const sameLength = funcs.areSameLength;

    const ExOne = sameLength('pug', '123');
    const ExTwo = sameLength('kitty', '1234');

    expect(ExOne).toEqual(true);
    expect(ExTwo).toEqual(false);
});

it('tests if 2 values are equal?', () => {
    const equalSame = funcs.areEqual;

    const ExOne = equalSame('pug', 'pug');
    const ExTwo = equalSame('cat', 'kitty');

    expect(ExOne).toEqual(true);
    expect(ExTwo).toEqual(false);
});

it('tests if values are less than 90?', () => {
    const ninetyLess = funcs.lessThanNinety;

    const ExOne = ninetyLess('25');
    const ExTwo = ninetyLess('125');

    expect(ExOne).toEqual(true);
    expect(ExTwo).toEqual(false);
});

it('tests if values are greater than 50?', () => {
    const greaterThan50 = funcs.greaterThanFifty;

    const ExOne = greaterThan50('25');
    const ExTwo = greaterThan50('125');

    expect(ExOne).toEqual(false);
    expect(ExTwo).toEqual(true);
});

it('add 2 numbers; return sum', () => {
    const add = funcs.add;

    const seven = add(3, 4);
    const ten = add(5, 5);

    expect(seven).toBe(7);
    expect(ten).toBe(10);
});

it('minus 2 numbers; return sum', () => {
    const subtract = funcs.subtract;

    const one = subtract(4, 3);
    const five = subtract(10, 5);

    expect(one).toBe(1);
    expect(five).toBe(5);
});

it('divide 2 numbers; return sum', () => {
    const divide = funcs.divide;

    const four = divide(12, 3);
    const two = divide(10, 5);

    expect(four).toBe(4);
    expect(two).toBe(2);
});

it('multiply 2 numbers; return sum', () => {
    const multiply = funcs.multiply;

    const four = multiply(2, 2);
    const two = multiply(2, 1);

    expect(four).toBe(4);
    expect(two).toBe(2);
});

it('get remainder of 2 numbers', () => {
    const getRemainder = funcs.getRemainder;

    const one = getRemainder(10, 3);
    const two = getRemainder(18, 4);

    expect(one).toBe(1);
    expect(two).toBe(2);
});

it('checks for even number', () => {
    const isEven = funcs.isEven;

    const ExOne = isEven('22');
    const ExTwo = isEven('125');

    expect(ExOne).toEqual(true);
    expect(ExTwo).toEqual(false);
});

it('checks for odd number', () => {
    const isOdd = funcs.isOdd;

    const ExOne = isOdd('25');
    const ExTwo = isOdd('126');

    expect(ExOne).toEqual(true);
    expect(ExTwo).toEqual(false);
});

it('checks for square number', () => {
    const square = funcs.square;

    const nine = square(3, 3);
    const four = square(2, 2);

    expect(nine).toBe(9);
    expect(four).toBe(4);
});

it('checks for cubed number', () => {
    const cube = funcs.cube;

    const example = cube(2, 2, 2);

    expect(example).toBe(8);
});

it('checks for raise to power', () => {
    const raiseToPower = funcs.raiseToPower;

    const example = raiseToPower(2, 7);

    expect(example).toBe(128);
});


it('checks for round number', () => {
    const roundNumber = funcs.roundNumber;

    const example = roundNumber(1.2);

    expect(example).toBe(1);
});

it('checks for rounded up number', () => {
    const roundUp = funcs.roundUp;

    const example = roundUp(.95);

    expect(example).toBe(1);
});

it('adds exlamation point to string', () => {
    const addExclamationPoint = funcs.addExclamationPoint;

    const example = addExclamationPoint('pug');

    expect(example).toBe('pug!');
});

it('combine names', () => {
    const combineNames = funcs.combineNames;

    const example = combineNames('Clementine', 'Pug');

    expect(example).toBe('Clementine Pug');
});

it('get greeting', () => {
    const getGreeting = funcs.getGreeting;

    const example = getGreeting('Clementine');

    expect(example).toBe('Hello Clementine!');
});

it('get Rectangle Area', () => {
    const getRectangleArea = funcs.getRectangleArea;

    const example = getRectangleArea(2, 4);

    expect(example).toBe(8);
});

it('get Triangle Area', () => {
    const getTriangleArea = funcs.getTriangleArea;

    const example = getTriangleArea(2, 2);

    expect(example).toBe(2);
});

it('get Circle Area', () => {
    const getCircleArea = funcs.getCircleArea;

    const example = getCircleArea(2);

    expect(example).toBe(Math.PI * 4);
});

it('get Rectangular prism Volume', () => {
    const getRectangularPrismVolume = funcs.getRectangularPrismVolume;

    const example = getRectangularPrismVolume(3, 3, 3);

    expect(example).toBe(27);
});




