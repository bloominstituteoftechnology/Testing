const funcs = require('./project-2');

it('should get the biggest between x and y', () => {
    // arrange
    const check = funcs.getBiggest;
    // act
    const actual = check(5, 4);
    // assert
    expect(actual).toBe(5);
})

it('should greet you based on your language', () => {
    // arrange
    const check = funcs.greeting;
    // act
    const actual = check('German');
    // assert
    expect(actual).toBe('Guten Tag!');
})

it('should decide if the number is ten or five', () => {
  // arrange
  const check = funcs.isTenOrFive;
  // act
  const actual = check(4);
  // assert  
  expect(actual).toBe(false);
})

it('should check if a number is in range', () => {
    // arrange
    const check = funcs.isInRange;
    //act
    const actual = check(100);
    // assert
    expect(actual).toBe(false);
})