const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project 2 testing', () => {
  it('should return the biggest value', () => {
    const getBiggest = funcs.getBiggest;

    const five = getBiggest(3, 5);
    const eleven = getBiggest(11, 6);
    const nine = getBiggest(4, 9);

    expect(five).toBe(5);
    expect(eleven).toBe(11);
    expect(nine).toBe(9);
  })

  it('should return a greeting in a certain language', () => {
    const greeting = funcs.greeting;

    const german = greeting('German');
    const spanish = greeting('Spanish');
    const english = greeting('default');

    expect(german).toBe('Guten Tag!');
    expect(spanish).toBe('Hola!');
    expect(english).toBe('Hello!');
  })

  it('should check to see if the number given is a 10 or 5', () => {
    const isTenOrFive = funcs.isTenOrFive;

    const ten = isTenOrFive(10);
    const five = isTenOrFive(5);
    const two = isTenOrFive(2);

    expect(ten).toBe(true);
    expect(five).toBe(true);
    expect(two).toBe(false);
  })

  it('should check to see if the number given is between 20 and 50', () => {
    const isInRange = funcs.isInRange;

    const ten = isInRange(10);
    const fifty = isInRange(50);
    const twentyFive = isInRange(25);

    expect(ten).toBe(false);
    expect(fifty).toBe(false);
    expect(twentyFive).toBe(true);
  })

  it('should check to see if the number given is an Integer', () => {
    const isInteger = funcs.isInteger;
     
    const ten = isInteger(10);
    const fifty = isInteger(50);
    const twentyFive = isInteger(25.2);
     
    expect(ten).toBe(true);
    expect(fifty).toBe(true);
    expect(twentyFive).toBe(false);
  })

  it('should return fizz, buzz, or fizzbuzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
     
    const ten = fizzBuzz(10);
    const fourtyFive = fizzBuzz(45);
    const nine = fizzBuzz(9);
     
    expect(ten).toBe('buzz');
    expect(fourtyFive).toBe('fizzbuzz');
    expect(nine).toBe('fizz');
  })
  
  it('should check to see if the number given is a prime number', () => {
    const isPrime = funcs.isPrime;

    const ten = isPrime(10);
    const fifty = isPrime(50);
    const thirteen = isPrime(13);

    expect(ten).toBe(false);
    expect(fifty).toBe(false);
    expect(thirteen).toBe(true);
  })

  it('should return the first value in the array', () => {
    const returnFirst = funcs.returnFirst;

    const ten = returnFirst([10, 5, 15]);
    const fifty = returnFirst([50, 20, 10]);
    const thirteen = returnFirst([13, 14, 15, 16]);

    expect(ten).toBe(10);
    expect(fifty).toBe(50);
    expect(thirteen).toBe(13);
  })

  it('should return the last value in the array', () => {
    const returnLast = funcs.returnLast;

    const fifteen = returnLast([10, 5, 15]);
    const ten = returnLast([50, 20, 10]);
    const sixteen = returnLast([13, 14, 15, 16]);

    expect(fifteen).toBe(15);
    expect(ten).toBe(10);
    expect(sixteen).toBe(16);
  })

  it('should return the length of the array', () => {
    const getArrayLength = funcs.getArrayLength;

    const three = getArrayLength([10, 5, 15]);
    const two = getArrayLength([50, 20]);
    const four = getArrayLength([13, 14, 15, 16]);

    expect(three).toBe(3);
    expect(two).toBe(2);
    expect(four).toBe(4);
  })

  it('should return the values given plus 1', () => {
    const incrementByOne = funcs.incrementByOne;

    const arr1 = incrementByOne([10, 5, 15]);
    const arr2 = incrementByOne([50, 20]);
    const arr3 = incrementByOne([13, 14, 15, 16]);

    expect(arr1).toEqual([11, 6, 16]);
    expect(arr2).toEqual([51, 21]);
    expect(arr3).toEqual([14, 15, 16, 17]);
  })

  it('should return the array with the new item added', () => {
    const addItemToArray = funcs.addItemToArray;

    const fourteen = addItemToArray([10, 5, 15], 14);
    const twentyOne = addItemToArray([50, 20], 21);
    const seventeen = addItemToArray([13, 14, 15, 16], 17);

    expect(fourteen).toEqual([10, 5, 15, 14]);
    expect(twentyOne).toEqual([50, 20, 21]);
    expect(seventeen).toEqual([13, 14, 15, 16, 17]);
  })

  it('should return the array with the new item added to the front', () => {
    const addItemToFront = funcs.addItemToFront;

    const fourteen = addItemToFront([10, 5, 15], 14);
    const twentyOne = addItemToFront([50, 20], 21);
    const seventeen = addItemToFront([13, 14, 15, 16], 17);

    expect(fourteen).toEqual([14, 10, 5, 15]);
    expect(twentyOne).toEqual([21, 50, 20]);
    expect(seventeen).toEqual([17, 13, 14, 15, 16]);
  })

  it('shouldthe arr of words into a sentence string', () => {
    const wordsToSentence = funcs.wordsToSentence;

    const arr1 = wordsToSentence(['why', 'hello', 'there']);
    const arr2 = wordsToSentence(['hi', 'there']);
    const arr3 = wordsToSentence(['how', 'is', 'it', 'going']);

    expect(arr1).toEqual('why hello there');
    expect(arr2).toEqual('hi there');
    expect(arr3).toEqual('how is it going');
  })

  it('should check to see if the given array contains the given value', () => {
    const contains = funcs.contains;

    const fourteen = contains([10, 5, 15], 14);
    const twenty = contains([50, 20], 20);
    const sixteen = contains([13, 14, 15, 16], 16);

    expect(fourteen).toEqual(false);
    expect(twenty).toEqual(true);
    expect(sixteen).toEqual(true);
  })

  it('should return the sum of all the numbers in the array', () => {
    const addNumbers = funcs.addNumbers;

    const thirty = addNumbers([10, 5, 15]);
    const seventy = addNumbers([50, 20]);
    const hundred = addNumbers([10, 20, 30, 40]);

    expect(thirty).toEqual(30);
    expect(seventy).toEqual(70);
    expect(hundred).toEqual(100);
  })

  it('should return the avg of all the numbers in the array', () => {
    const averageTestScore = funcs.averageTestScore;

    const ten = averageTestScore([10, 5, 15]);
    const thirtyFive = averageTestScore([50, 20]);
    const twentyFive = averageTestScore([10, 20, 30, 40]);

    expect(ten).toEqual(10);
    expect(thirtyFive).toEqual(35);
    expect(twentyFive).toEqual(25);
  })

  it('should return the largest number in the array', () => {
    const largestNumber = funcs.largestNumber;

    const fifteen = largestNumber([10, 5, 15]);
    const fifty = largestNumber([50, 20]);
    const fourty = largestNumber([10, 20, 30, 40]);

    expect(fifteen).toEqual(15);
    expect(fifty).toEqual(50);
    expect(fourty).toEqual(40);
  })
  
})