const { getBiggest,
	greeting,
	isTenOrFive,
	isInRange,
	isInteger,
	fizzBuzz,
	isPrime,
	returnFirst,
	returnLast,
	getArrayLength,
	incrementByOne,
	addItemToArray,
	addItemToFront,
	wordsToSentence,
	contains,
	addNumbers,
	averageTestScore,
	largestNumber,
      } = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project 2', () => {
  it('should compare two numbers and return the larger', () => {
    const num = getBiggest(-3,-4);
    const num2 = getBiggest(0.25,50);

    expect(num).toBe(-3);
    expect(num2).toBe(50);
  });

  it('should return a language-specific greeting', () => {
    const str = greeting('German');
    const str2 = greeting('Turkish');

    expect(str).toBe('Guten Tag!');
    expect(str2).toBe('Hello!');
  });

  it('should be able to tell whether a given number is either 10 or 5', () => {
    const num = isTenOrFive(5);
    const num2 = isTenOrFive(-5);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
  });

  it('should tell you whether a number is between 20 and 50', () => {
    const num = isInRange(49);
    const num2 = isInRange(0);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
  });

  it('should return true if a number is an integer', () => {
    const num = isInteger(5);
    const num2 = isInteger(0.6);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
  });

  it('should return fizz, buzz, or fizzbuzz depending on whether input is divisible by 3,5, or both', () => {
    const num = fizzBuzz(15);
    const num2 = fizzBuzz(12);
    const num3 = fizzBuzz(-5);
    const num4 = fizzBuzz(1);

    expect(num).toBe('fizzbuzz');
    expect(num2).toBe('fizz');
    expect(num3).toBe('buzz');
    expect(num4).toBe(1);
  });

  it('should tell you whether a number is prime', () => {
    const num = isPrime(17);
    const num2 = isPrime(27);
    const num3 = isPrime(1);
   
    expect(num).toEqual(true);
    expect(num2).toEqual(false);
    expect(num3).toEqual(false);
   
  });

  it('should return the first element in an array', () => {
    const arr = returnFirst(['square','circle','rectangle']);
    const arr2 = returnFirst([1,2,3]);

    expect(arr).toBe('square');
    expect(arr2).toBe(1);
  });

  it('should return the last element in an array', () => {
    const arr = returnLast(['square','circle','rectangle']);
    const arr2 = returnLast([1,2,3]);

    expect(arr).toBe('rectangle');
    expect(arr2).toBe(3);
  });

  it('should return the length of an array', () => {
    const arr = getArrayLength(['purple','orange','red','green','blue','yellow']);
    const arr2 = getArrayLength([0,1]);

    expect(arr).toBe(6);
    expect(arr2).toBe(2);
  });

  it('should increment value of all elements in array', () => {
    const arr = incrementByOne([0,1]);
    
    expect(arr).toEqual([1,2]);
  });

  it('should add element to end of array',() => {
    const arr = addItemToArray([0,1],2);

    expect(arr).toEqual([0,1,2]);
  });

  it('should add element to front of array', () => {
    const arr = addItemToFront([0,1],2);

    expect(arr).toEqual([2,0,1]);
  });

  it('should arrange list of words into a sentence', () => {
    const arr = wordsToSentence(['these','are','some','words']);

    expect(arr).toBe('these are some words');
  });
 

  it('should check whether an array contains a particular item', () => {
    const arr = contains(['x','y','z'],'y');
    const arr2 = contains([1,8,28,13,9],6);

    expect(arr).toEqual(true);
    expect(arr2).toEqual(false);
  });

  it('should reduce array into sum', () => {
    const arr = addNumbers([1,5,27,50]);
    const arr2 = addNumbers([-2,0,0,3,8]);

    expect(arr).toBe(83);
    expect(arr2).toBe(9);
  });

  it('should calculate average of numbers in array', () => {
    const arr = averageTestScore([22,28,30]);
    const arr2 = averageTestScore([1,9,8,9]);

    expect(arr).toBe(26.666666666666668);
    expect(arr2).toBe(6.75);
  });

  it('should return the largest value of numbers in array', () => {
    const arr = largestNumber([22,28,30]);
    const arr2 = largestNumber([1,9,8,9]);

    expect(arr).toBe(30);
    expect(arr2).toBe(9);
  });
     
     
});
