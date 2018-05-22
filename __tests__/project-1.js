const p1functions = require ('../basic-javascript/project-1');
//-------------------------------------------------------------------------------------

//Welcome to the world of testing simple functions, by Nalee Riddell

//-------------------------------------------------------------------------------------
it('multiplyByTen', () => {
//arrange
const multiplyByTen = p1functions.multiplyByTen;
//act
const test1 = multiplyByTen(-1);
const test2 = multiplyByTen(-0.1);
const test3 = multiplyByTen(0.1);
const test4 = multiplyByTen(1);
//assert
expect(test1).toBe(-10);
expect(test2).toBe(-1);
expect(test3).toBe(1);
expect(test4).toBe(10);
});

//-------------------------------------------------------------------------------------
it('subtractFive', () => {
    //arrange
    const subtractFive = p1functions.subtractFive;
    //act
    const test1 = subtractFive(-75);
    const test2 = subtractFive(199);
    const test3 = subtractFive(55.5);
    //assert
    expect(test1).toBe(-80);
    expect(test2).toBe(194);
    expect(test3).toBeCloseTo(50.5);
});

//------------------------------------------------------------------------------------
it('areSameLength', () => {
    //arrange
    const areSameLength = p1functions.areSameLength;
    //act
    const test1 = areSameLength('hello','bello');
    const test2 = areSameLength('tello', 'marchhhhhhh');
    //assert
    expect(test1).toBe(true);
    expect(test2).toBe(false);
});

//------------------------------------------------------------------------------------
it('areEqual', () => {
    //arrange
    const areEqual = p1functions.areEqual;
    //actual
    player1 = 'player1';
    const test1 = areEqual('player1','player1'); //true
    const test2 = areEqual('player1', player1); //true
    const test3 = areEqual('player1', 'player2') //false
    //assert
    expect(test1).toBe(true);
    expect(test2).toBe(true);
    expect(test3).toBe(false);
});

//------------------------------------------------------------------------------------
it('lessThanNinety', () => {
    //arrange
    const lessThanNinety = p1functions.lessThanNinety;
    //actual
    const test1 = lessThanNinety(90); //false
    const test2 = lessThanNinety(89.999); //true
    const test3 = lessThanNinety(-1); //true
    const test4 = lessThanNinety(10); //true
    //assert
    expect(test1).toBe(false);
    expect(test2).toBe(true);
    expect(test3).toBe(true);
    expect(test4).toBe(true);
});

//-----------------------------------------------------------------------------------
it('greaterThanFifty', () => {
    //arrange
    const greaterThanFifty = p1functions.greaterThanFifty;
    //actual
    const test1 = greaterThanFifty(49.9);
    const test2 = greaterThanFifty(0);
    const test3 = greaterThanFifty(55);
    //assert
    expect(test1).toBe(false);
    expect(test2).toBe(false);
    expect(test3).toBe(true);
});

//-----------------------------------------------------------------------------------
it('add', () => {
    //arrange
    const add = p1functions.add;
    //actual
    const test1 = add(-10,10);
    const test2 = add(.4,.4);
    const test3 = add('55','66');
    //assert
    expect(test1).toBe(0);
    expect(test2).toBeCloseTo(.8);
    expect(test3).toBe('5566');
});

//-----------------------------------------------------------------------------------
it('subtract', () => {
    //arrange
    const subtract = p1functions.subtract;
    //actual
    const test1 = subtract(-10,10);
    const test2 = subtract(.4,.4);
    //assert
    expect(test1).toBe(-20);
    expect(test2).toBeCloseTo(0);
});

//-----------------------------------------------------------------------------------
it('divide', () => {
    //arrange
    const divide = p1functions.divide;
    //actual
    const test1 = divide(100,10);
    const test2 = divide(50,50);
    const test3 = divide(1, 10);
    //assert
    expect(test1).toBe(10);
    expect(test2).toBe(1);
    expect(test3).toBeCloseTo(.1);
});

//-----------------------------------------------------------------------------------
it('multiply', () => {
    //arrange
    const multiply = p1functions.multiply;
    //actual
    const test1 = multiply(100,10);
    const test2 = multiply(.1,.1);
    const test3 = multiply(1, -2);
    //assert
    expect(test1).toBe(1000);
    expect(test2).toBeCloseTo(.01);
    expect(test3).toBe(-2);
});

//-----------------------------------------------------------------------------------
it('getRemainder', () => {
    //arrange
    const getRemainder = p1functions.getRemainder;
    //actual
    const test1 = getRemainder(100,10);
    const test2 = getRemainder(80, 10);
    //assert
    expect(test1).toBe(0);
    expect(test2).toBeCloseTo(0);
});

//-----------------------------------------------------------------------------------
it('isEven', () => {
    //arrange
    const isEven = p1functions.isEven;
    //actual
    const test1 = isEven(2);
    const test2 = isEven(1);

    //assert
    expect(test1).toBe(true);
    expect(test2).toBe(false);
});

//-----------------------------------------------------------------------------------
it('isOdd', () => {
    //arrange
    const isOdd = p1functions.isOdd;
    //actual
    const test1 = isOdd(1);
    const test2 = isOdd(.1);
    const test3 = isOdd(2);
    //assert
    expect(test1).toBe(true);
    expect(test2).toBe(true);
    expect(test3).toBe(false);
});

//-----------------------------------------------------------------------------------
it('square', () => {
    //arrange
    const square = p1functions.square;
    //actual
    const test1 = square(100);
    const test2 = square(.1);
    const test3 = square(-1);
    //assert
    expect(test1).toBe(10000);
    expect(test2).toBeCloseTo(.01);
    expect(test3).toBe(1);
});

//-----------------------------------------------------------------------------------
it('cube', () => {
    //arrange
    const cube = p1functions.cube;
    //actual
    const test1 = cube(-1);
    const test2 = cube(.2);
    const test3 = cube(10);
    //assert
    expect(test1).toBe(-1);
    expect(test2).toBeCloseTo(.008);
    expect(test3).toBe(1000);
});

//-----------------------------------------------------------------------------------
it('raiseToPower', () => {
    //arrange
    const raiseToPower = p1functions.raiseToPower;
    //actual
    const test1 = raiseToPower(10,2);
    const test2 = raiseToPower(.1,2);
    const test3 = raiseToPower(2,-.1);
    //assert
    expect(test1).toBe(100);
    expect(test2).toBeCloseTo(.01);
    expect(test3).toBeCloseTo(0.933);
});

//-----------------------------------------------------------------------------------
it('roundNumber', () => {
    //arrange
    const roundNumber = p1functions.roundNumber;
    //actual
    const test1 = roundNumber(1.5);
    const test2 = roundNumber(-1.5); //weird that this rounds to -1
    const test3 = roundNumber(1.1);
    //assert
    expect(test1).toBe(2);
    expect(test2).toBe(-1);
    expect(test3).toBe(1);
});

//-----------------------------------------------------------------------------------
it('roundUp', () => {
    //arrange
    const roundUp = p1functions.roundUp;
    //actual
    const test1 = roundUp(55.5);
    const test2 = roundUp(1.01);
    const test3 = roundUp(1.4);
    //assert
    expect(test1).toBe(56);
    expect(test2).toBe(2);
    expect(test3).toBe(2);
});

//-----------------------------------------------------------------------------------
it('addExclamationPoint', () => {
    //arrange
    const addExclamationPoint = p1functions.addExclamationPoint;
    //actual
    const test1 = addExclamationPoint('wow');
    const test2 = addExclamationPoint('meow!');
    const test3 = addExclamationPoint('lame...');
    //assert
    expect(test1).toBe('wow!');
    expect(test2).toBe('meow!!');
    expect(test3).toBe('lame...!');
});

//-----------------------------------------------------------------------------------
it('combineNames', () => {
    //arrange
    const combineNames = p1functions.combineNames;
    //actual
    const test1 = combineNames('Nalee', 'Riddell');
    const test2 = combineNames('Mike','Money');
    const test3 = combineNames('Tim', 'Timerton');
    //assert
    expect(test1).toBe('Nalee Riddell');
    expect(test2).toBe('Mike Money');
    expect(test3).toBe('Tim Timerton');
});

//-----------------------------------------------------------------------------------
it('getGreeting', () => {
    //arrange
    const getGreeting = p1functions.getGreeting;
    //actual
    const test1 = getGreeting('Ndawg');
    const test2 = getGreeting('TorCoolGuy');
    const test3 = getGreeting('well');
    //assert
    expect(test1).toBe('Hello Ndawg!');
    expect(test2).toBe('Hello TorCoolGuy!');
    expect(test3).toBe('Hello well!');
});

//-----------------------------------------------------------------------------------
it('getRectangleArea', () => {
    //arrange
    const getRectangleArea = p1functions.getRectangleArea;
    //actual
    const test1 = getRectangleArea(10,10);
    const test2 = getRectangleArea(.1,.1);
    const test3 = getRectangleArea(1, 20000);
    //assert
    expect(test1).toBe(100);
    expect(test2).toBeCloseTo(.01);
    expect(test3).toBe(20000);
});

//-----------------------------------------------------------------------------------
it('getTriangleArea', () => {
    //arrange
    const getTriangleArea = p1functions.getTriangleArea;
    //actual
    const test1 = getTriangleArea(1,1);
    const test2 = getTriangleArea(.1,1);
    const test3 = getTriangleArea(100,25);
    //assert
    expect(test1).toBeCloseTo(.5);
    expect(test2).toBeCloseTo(.05);
    expect(test3).toBe(1250);
});

//-----------------------------------------------------------------------------------
it('getCircleArea', () => {
    //arrange
    const getCircleArea = p1functions.getCircleArea;
    //actual
    const test1 = getCircleArea(10);
    const test2 = getCircleArea(.1);
    const test3 = getCircleArea(.001);
    //assert
    const pi = Math.PI;
    expect(test1).toBeCloseTo(100*pi);
    expect(test2).toBeCloseTo(.01*pi);
    expect(test3).toBeCloseTo(.00001*pi);
});

//-----------------------------------------------------------------------------------
it('getRectangularPrismVolume', () => {
    //arrange
    const getRectangularPrismVolume = p1functions.getRectangularPrismVolume;
    //actual
    const test1 = getRectangularPrismVolume(1,2,3);
    const test2 = getRectangularPrismVolume(.1,.1,.1);
    //assert
    expect(test1).toBe(6);
    expect(test2).toBeCloseTo(.001);
});