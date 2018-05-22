const funcs = require('./project-1');

// write your tests here
it('should multiply a number by 10', () => {
    //arrange
    const multiply = funcs.multiplyByTen;
    //act
    const actual = multiply(9);
    //assert
    expect(actual).toBe(90);
})

it('should subtract 5 from the number', () => {
    //arrange
    const sub = funcs.subtractFive;
    //act
    const actual = sub(10);
    //assert
    expect(actual).toBe(5);
})

it('should be the same length', () => {
    // arrange
    const check = funcs.areSameLength;
    // act
    const actual = check('dog','cat');
    // assert
    expect(actual).toBe(true);
})

it('should be equal', () => {
    // arrange
    const check = funcs.areEqual;
    // act
    const actual = check(10,5);
    // assert
    expect(actual).toBe(false);
})

it('should be less than 90', () => {
    //arrange
    const check = funcs.lessThanNinety;
    //act
    const actual = check(100);
    //assert
    expect(actual).toBe(false);

})

it('should be greater than 50', () => {
    //arrange
    const check = funcs.greaterThanFifty;
    //act
    const actual = check(0);
    //asser
    expect(actual).toBe(false);
})

it('should add x and y', () => {
    // arrange
    const check = funcs.add;
    //act
    const actual = check(2,2);
    //assert
    expect(actual).toBe(4);
})

it('should subtract x and y', () => {
    // arrange
    const check = funcs.subtract;
    // act
    const actual = check(10,1);
    // assert
    expect(actual).toBe(9);
})

it('should divide x and y', () => {
    // arrange
    const check = funcs.divide;
    // act
    const actual = check(100,10);
    // assert
    expect(actual).toBe(10);
})

it('should multiply x and y', () => {
    // arrange
    const check = funcs.multiply;
    // act
    const actual = check(2,2);
    // assert
    expect(actual).toBe(4);
})

it('should get the remainder between x and y', () => {
    // arrange
    const check = funcs.getRemainder;
    // act
    const actual = check(10,5);
    // assert
    expect(actual).toBe(0);
})

it('should check if the number is even', () => {
    //arrange
    const check = funcs.isEven;
    //act
    const actual = check(5);
    //assert
    expect(actual).toBe(false);
})

it('should check if the number is odd', () => {
    // arrange
    const check = funcs.isOdd;
    // act
    const actual = check(10);
    // assert
    expect(actual).toBe(false);
})

it('should square a number', () => {
    // arrange
    const check = funcs.square;
    // act
    const actual = check(5);
    // assert
    expect(actual).toBe(25);
})

it('should cube a number', () => {
    // arrange
    const check = funcs.cube;
    // act
    const actual = check(3);
    // assert
    expect(actual).toBe(27);
})

it('should raise x to the power of y', () => {
    // arrange
    const check = funcs.raiseToPower;
    // act
    const actual = check(2,2);
    // assert
    expect(actual).toBe(4);
})

it('should round a number', () => {
    // arrange
    const check = funcs.roundNumber;
    // act
    const actual = check(5.5);
    // assert
    expect(actual).toBe(6);
})

it('should add an exclamation point to the string', () => {
    // arrange
    const check = funcs.addExclamationPoint;
    // act
    const actual = check('hello');
    // assert
    expect(actual).toBe('hello!');
})

it('should combine the names passed', () => {
    // arrange
    const check = funcs.combineNames;
    // act
    const actual = check('anthony','calderaro');
    // assert
    expect(actual).toBe('anthony calderaro')
})

it('should greet the user passed', () => {
    // arrange
    const check = funcs.getGreeting;
    // act
    const actual = check('lily');
    // assert
    expect(actual).toBe('Hello lily!');
})

it('should multiply x and y', () => {
  // arrange
  const check = funcs.getRectangleArea;
  // act
  const actual = check(10, 10);
  // assert  
  expect(actual).toBe(100);
})

it('should multiply x and y, then divide by 2', () => {
    // arrange
    const check = funcs.getTriangleArea;
    // act
    const actual = check(10, 10);
    // assert
    expect(actual).toBe(50);
})

it('should multiply x and y, then by pi', () => {
    // arrange
    const check = funcs.getCircleArea;
    // act
    const actual = check(5, 5);
    // assert
    expect(actual).toBe(78.53981633974483);
})

it('should multiply x, y, and z', () => {
    // arrange
    const check = funcs.getRectangularPrismVolume;
    // act
    const actual = check(2, 2, 2);
    // assert
    expect(actual).toBe(8);
})
