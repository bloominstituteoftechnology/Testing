const helpers = require('./project-1');

// start testing!
//#1
it('multiply by 10', () => {
    const numTimesTen = helpers.multiplyByTen;
    const timesTwo = numTimesTen(2);
    const timesFive = numTimesTen(5);
    const timesZero = numTimesTen(0);
    const timesNaN = numTimesTen(undefined);
    const timesStr = numTimesTen('str');

    expect(timesTwo).toEqual(20);
    expect(timesFive).toEqual(50);
    expect(timesZero).toEqual(0);
    expect(timesNaN).toBeNaN();
    expect(timesStr).toBeNaN();
});

//#2
it('subtract five', () => {
    const minusFive = helpers.subtractFive;
    const Nine = minusFive(9);
    const Ten = minusFive(10);
    const Undef = minusFive(undefined);
    const NegNum = minusFive(-5);

    expect(Nine).toEqual(4);
    expect(Ten).toEqual(5);
    expect(Undef).toBeNaN();
    expect(NegNum).toEqual(-10);
});

//#3
it('are same length?', () => {
    const sameLength = helpers.areSameLength;
    const Test1 = sameLength('mango', '12345');
    const Test2 = sameLength('apple', 'banana');

    expect(Test1).toEqual(true);
    expect(Test2).toEqual(false);
})

//#4
it('are they equal?', () => {
    const areEquals = helpers.areEqual;
    const Test1 = areEquals('mango', 'mango');
    const Test2 = areEquals('mango', 'mang0');
    const Test3 = areEquals('45', 45);
    
    expect(Test1).toEqual(true);
    expect(Test2).toEqual(false);
    expect(Test3).toBe(false);
})

//#5
it('less than 90', () => {
    const lessNinety = helpers.lessThanNinety;
    const Test1 = lessNinety('89');
    const Test2 = lessNinety('91');
    
    expect(Test1).toEqual(true);
    expect(Test2).toEqual(false);
})

//#6
it('greater than 50', () => {
    const greaterFifty = helpers.greaterThanFifty;
    const Test1 = greaterFifty(49);
    const Test2 = greaterFifty(51);

    expect(Test1).toEqual(false);
    expect(Test2).toEqual(true);
})

//#7
it('add two numbers', () => {
    const added = helpers.add;
    const Test1 = added(1, 7);
    const Test2 = added(9, 13);

    expect(Test1).toEqual(8);
    expect(Test2).toEqual(22);
})

//#8
it('subtract two numbers', () => {
    const subtracted = helpers.subtract;
    const Test1 = subtracted(8, 5);
    const Test2 = subtracted(82, 33);

    expect(Test1).toEqual(3);
    expect(Test2).toEqual(49);
})

//#9
it('divide two numbers', () => {
    const divided = helpers.divide;
    const Test1 = divided(15, 3);
    const Test2 = divided(18, 6);

    expect(Test1).toEqual(5);
    expect(Test2).toEqual(3);
})

//#10
it('multiply two numbers', () => {
    const multiplied = helpers.multiply;
    const Test1 = multiplied(3, 4);
    const Test2 = multiplied(18, 5);

    expect(Test1).toEqual(12);
    expect(Test2).toEqual(90);
})

//#11
it('get the remainder', () => {
    const theRemainder = helpers.getRemainder;
    const Test1 = theRemainder(10, 4);
    const Test2 = theRemainder(9, 8);

    expect(Test1).toEqual(2);
    expect(Test2).toEqual(1);
})

//#12
it('is it even?', () => {
    const veryEven = helpers.isEven;
    const Test1 = veryEven(11);
    const Test2 = veryEven(22);

    expect(Test1).toEqual(false);
    expect(Test2).toEqual(true);
})

//#13
it('is it odd?', () => {
    const veryOdd = helpers.isOdd;
    const Test1 = veryOdd(22);
    const Test2 = veryOdd(11);

    expect(Test1).toEqual(false);
    expect(Test2).toEqual(true);
})

//#14
it('is it squared?', () => {
    const squared = helpers.square;
    const Test1 = squared(8);
    const Test2 = squared(10);

    expect(Test1).toEqual(64);
    expect(Test2).toEqual(100);
})

//#15
it('cube a number', () => {
    const cubed = helpers.cube;
    const Test1 = cubed(3);
    const Test2 = cubed(5);

    expect(Test1).toEqual(27);
    expect(Test2).toEqual(125);
})

//#16
it('raise to a power', () => {
    const raisedToPower = helpers.raiseToPower;
    const Test1 = raisedToPower(2,4);
    const Test2 = raisedToPower(4,5);

    expect(Test1).toEqual(16);
    expect(Test2).toEqual(1024);
})

//#17
it('round a number', () => {
    const rounded = helpers.roundNumber;
    const Test1 = rounded(3.4);
    const Test2 = rounded(18.5);

    expect(Test1).toEqual(3);
    expect(Test2).toEqual(19);
})

//#18
it('round up a number', () => {
    const roundedUp = helpers.roundUp;
    const Test1 = roundedUp(3.04);
    const Test2 = roundedUp(18.5);

    expect(Test1).toEqual(4);
    expect(Test2).toEqual(19);
})

//#19
it('add exclamation point', () => {
    const addedExclmation = helpers.addExclamationPoint;
    const Test1 = addedExclmation("hello");
    const Test2 = addedExclmation("(o)_(o)");

    expect(Test1).toEqual("hello!");
    expect(Test2).toEqual("(o)_(o)!");
})

//#20
it('add exclamation point', () => {
    const addedExclmation = helpers.addExclamationPoint;
    const Test1 = addedExclmation("hello");
    const Test2 = addedExclmation("(o)_(o)");

    expect(Test1).toEqual("hello!");
    expect(Test2).toEqual("(o)_(o)!");
})

//#21
it('get the greeting', () => {
    const getGreetings = helpers.getGreeting;
    const Test1 = getGreetings("Sagar");
    const Test2 = getGreetings("(o)_(o)");

    expect(Test1).toEqual("Hello Sagar!");
    expect(Test2).toEqual("Hello (o)_(o)!");
})

//#22
it('get rectangular area', () => {
    const getRectArea = helpers.getRectangleArea;
    const Test1 = getRectArea(5,6);
    const Test2 = getRectArea(7,9);

    expect(Test1).toEqual(30);
    expect(Test2).toEqual(63);
})

//#23
it('get triangle area', () => {
    const getTriArea = helpers.getTriangleArea;
    const Test1 = getTriArea(5,6);
    const Test2 = getTriArea(7,9);

    expect(Test1).toEqual(15);
    expect(Test2).toEqual(31.5);
})

//#24
it('get circular area', () => {
    const getCircArea = helpers.getCircleArea;
    const Test1 = getCircArea(5);
    const Test2 = getCircArea(7);

    expect(Test1).toEqual(Math.PI * 25);
    expect(Test2).toEqual(Math.PI * 49);
})

//#25
it('get rectangular prism area', () => {
    const getRectPrismArea = helpers.getRectangularPrismVolume;
    const Test1 = getRectPrismArea(5, 6, 8);
    const Test2 = getRectPrismArea(7, 9, 4);

    expect(Test1).toEqual(240);
    expect(Test2).toEqual(252);
})