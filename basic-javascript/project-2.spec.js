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

it('should check if the number is an integer', () => {
    // arrange
    const check = funcs.isInteger;
    // act
    const actual = check(5);
    // assert
    expect(actual).toBe(true);
})

it('should work through fizz buzz', () => {
    // arrange
    const check = funcs.fizzBuzz;
    // act
    const actual = check(5);
    // assert
    expect(actual).toBe('buzz')
})

it('should check if it is a prime number', () => {
    // arrange
    const check = funcs.isPrime;
    // act
    const actual = check(7);
    // assert
    expect(actual).toBe(true);
})

it('should return the first item in the array', () => {
    // arrange
    const check = funcs.returnFirst;
    // act
    const actual = check([1, 2, 3]);
    // assert
    expect(actual).toBe(1);
})

it('should return the last item in the array', () => {
    // arrange
    const check = funcs.returnLast;
    // act
    const actual = check([1, 2, 3]);
    // assert
    expect(actual).toBe(3);
})

it('should get the array length', () => {
    // arrange
    const check = funcs.getArrayLength;
    // act
    const actual = check([1, 2, 3]);
    // assert
    expect(actual).toBe(3);
})

it('should increment the array by 1', () => {
    // arrange
    const check = funcs.incrementByOne
    // act
    const actual = check([1, 2, 3])
    // assert
    expect(actual).toEqual([2, 3, 4]);
})

it('should add an item to the array', () => {
    // arrange
    const check = funcs.addItemToArray;
    // act
    const actual = check([1, 2, 3], 4);
    // assert
    expect(actual).toEqual([1, 2, 3, 4])
})

it('should add an item to the front of the array', () => {
    // arrange
    const check = funcs.addItemToFront;
    // act
    const actual = check([1, 2, 3], 4);
    // assert
    expect(actual).toEqual([4, 1, 2, 3]);
})

it('should make the words a sentence', () => {
    // arrange
    const check = funcs.wordsToSentence;
    // act
    const actual = check(['hello', 'world!']);
    // assert
    expect(actual).toEqual('hello world!');
})

it('should check if an item is contained in the array', () => {
    // arrange
    const check = funcs.contains;
    // act
    const actual = check([1, 2, 3], 1)
    // assert
    expect(actual).toBe(true)
})

it('should add numbers in an array', () => {
    // arrange
    const check = funcs.addNumbers;
    // act
    const actual = check([1, 2, 3, 4, 5])
    // assert
    expect(actual).toBe(15)
})

it('should average test score', () => {
    // arrange
    const check = funcs.averageTestScore;
    // act
    const actual = check([50, 50, 50, 50])
    // assert
    expect(actual).toEqual(50);
})

it('should check the largest number', () => {
    // arrange
    const check = funcs.largestNumber;
    // act
    const actual = check([1, 2, 3, 4]) 
    // assert
    expect(actual).toBe(4);
})