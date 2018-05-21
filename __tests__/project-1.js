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
    expect(test2).toBeCloseTo(1);
    expect(test3).toBeCloseTo(.5);
});

//-----------------------------------------------------------------------------------
it('getRemainder', () => {
    //arrange
    const getRemainder = p1functions.getRemainder;
    //actual
    const test1 = getRemainder(100,10);
    const test3 = getRemainder(80, 10);
    //assert
    expect(test1).toBe(0);
    expect(test3).toBeCloseTo(0);
});



//   isEven,
//   isOdd,
//   square,
//   cube,
//   raiseToPower,
//   roundNumber,
//   roundUp,
//   addExclamationPoint,
//   combineNames,
//   getGreeting,
//   getRectangleArea,
//   getTriangleArea,
//   getCircleArea,
//   getRectangularPrismVolume