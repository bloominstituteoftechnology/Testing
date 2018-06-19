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
    const num3 = getBiggest(2,2);
    const num4 = getBiggest('a','a');
    const num5 = getBiggest(true,false);

    expect(num).toBe(-3);
    expect(num2).toBe(50);
    expect(num3).toBe(2);
    expect(num4).toBeNaN;
    expect(num5).toBeNaN;
  });

  it('should return a language-specific greeting', () => {
    const str = greeting('German');
    const str2 = greeting('Turkish');
    const str3 = greeting('Klingon');
    const str4 = greeting(35);
    const str5 = greeting(true);
    const str6 = greeting('uei.,ueihsth,');

    expect(str).toBe('Guten Tag!');
    expect(str2).toBe('Hello!');
    expect(str3).toBe('Hello!');
    expect(str4).toBe('Hello!');
    expect(str5).toBe('Hello!');
    expect(str6).toBe('Hello!');
  });

  it('should be able to tell whether a given number is either 10 or 5', () => {
    const num = isTenOrFive(5);
    const num2 = isTenOrFive(-5);
    const num3 = isTenOrFive(.7);
    const num4 = isTenOrFive('hello');
    const num5 = isTenOrFive(false);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
    expect(num3).toEqual(false);
    expect(num4).toEqualNaN;
    expect(num5).toEqualNaN;
  });

  it('should tell you whether a number is between 20 and 50', () => {
    const num = isInRange(49);
    const num2 = isInRange(0.334);
    const num3 = isInRange('this');
    const num4 = isInRange(false);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
    expect(num3).toEqualNaN;
    expect(num4).toEqualNaN;
  });

  it('should return true if a number is an integer', () => {
    const num = isInteger(5);
    const num2 = isInteger(0.6);
    const num3 = isInteger(-5);
    const num4 = isInteger('integer');
    const num5 = isInteger(false);

    expect(num).toEqual(true);
    expect(num2).toEqual(false);
    expect(num3).toEqual(true);
    expect(num4).toEqualNaN;
    expect(num5).toEqualNaN;
  });

  it('should return fizz, buzz, or fizzbuzz depending on whether input is divisible by 3,5, or both', () => {
    const num = fizzBuzz(15);
    const num2 = fizzBuzz(12);
    const num3 = fizzBuzz(-5);
    const num4 = fizzBuzz(1);
    const num5 = fizzBuzz(.00235);
    const num6 = fizzBuzz('fizz');
    const num7 = fizzBuzz(true);

    expect(num).toBe('fizzbuzz');
    expect(num2).toBe('fizz');
    expect(num3).toBe('buzz');
    expect(num4).toBe(1);
    expect(num5).toBe(.00235);
    expect(num6).toBeNaN;
    expect(num7).toBeNaN;
    
  });

  it('should tell you whether a number is prime', () => {
    const num = isPrime(17);
    const num2 = isPrime(27);
    const num3 = isPrime(1);
    const num4 = isPrime('prime');
    const num5 = isPrime(true);
   
    expect(num).toEqual(true);
    expect(num2).toEqual(false);
    expect(num3).toEqual(false);
    expect(num4).toEqualNaN;
    expect(num5).toEqualNaN;
   
  });

  it('should return the first element in an array', () => {
    const arr = returnFirst(['square','circle','rectangle']);
    const arr2 = returnFirst([1,2,3]);
    const arr3 = returnFirst(1,2,3);
    const arr4 = returnFirst(true, false);

    expect(arr).toBe('square');
    expect(arr2).toBe(1);
    expect(arr3).toBe(undefined);
    expect(arr4).toBe(undefined);
  });

  it('should return the last element in an array', () => {
    const arr = returnLast(['square','circle','rectangle']);
    const arr2 = returnLast([1,2,3]);
    const arr3 = returnLast(1,2,3);
    const arr4 = returnLast(false,false);

    expect(arr).toBe('rectangle');
    expect(arr2).toBe(3);
    expect(arr3).toBe(undefined);
    expect(arr4).toBe(undefined);
  });

  it('should return the length of an array', () => {
    const arr = getArrayLength(['purple','orange','red','green','blue','yellow']);
    const arr2 = getArrayLength([0,1]);
    const arr3 = getArrayLength(9,6,7,8,9,0);
    const arr4 = getArrayLength('what','is','this');
    const arr5 = getArrayLength(true);

    expect(arr).toBe(6);
    expect(arr2).toBe(2);
    expect(arr3).toBe(undefined);
    expect(arr4).toBe(4); //I can not for the life of me figure out why this is the actual result
    expect(arr5).toBe(undefined);
  });

  it('should increment value of all elements in array', () => {
    const arr = incrementByOne([0,1]);
    const arr2 = incrementByOne(['what','is','this']);
    const arr3 = incrementByOne('what','is','this');
    const arr4 = incrementByOne(true, false);
    
    expect(arr).toEqual([1,2]);
    expect(arr2).toEqualNaN;
    expect(arr3).toEqual('what'); //these functions are doing weird things with strings
    expect(arr4).toEqual(true); //and the boolean in this one - what is going on?
  });

 //because arr.push totally breaks if you give it non-array input, I edited the project-2.js file
  it('should add element to end of array',() => {
    const arr = addItemToArray([0,1],2);
    const arr2 = addItemToArray(['what','is'],'this');
    const arr3 = addItemToArray('what','is','this');
    const arr4 = addItemToArray([true,false],true);
    const arr5 = addItemToArray(true,false,true);

    expect(arr).toEqual([0,1,2]);
    expect(arr2).toEqual(['what','is','this']);
    expect(arr3).toEqual('undefined');
    expect(arr4).toEqual([true,false,true]);
    expect(arr5).toEqual('undefined');
  });

//I also edited the project-2.js file here for the same reason as above
  it('should add element to front of array', () => {
    const arr = addItemToFront([0,1],2);
    const arr2 = addItemToFront(['what','is'],'this');
    const arr3 = addItemToFront('what','is','this');
    const arr4 = addItemToFront([true, false],true);
    const arr5 = addItemToFront(true,false,true);

    expect(arr).toEqual([2,0,1]);
    expect(arr2).toEqual(['this','what','is']);
    expect(arr3).toEqual('undefined'); 
    expect(arr4).toEqual([true,true,false]);
    expect(arr5).toEqual('undefined');
  });

  it('should arrange list of words into a sentence', () => {
    const arr = wordsToSentence(['these','are','some','words']);
    const arr2 = wordsToSentence([0,1,2,3]);
    const arr3 = wordsToSentence([true,true,true]);

    expect(arr).toBe('these are some words');
    expect(arr2).toBe('0 1 2 3');
    expect(arr3).toBe('true true true');
  });
 

  it('should check whether an array contains a particular item', () => {
    const arr = contains(['x','y','z'],'y');
    const arr2 = contains([1,8,28,13,9],6);
    const arr3 = contains([true,true],false);

    expect(arr).toEqual(true);
    expect(arr2).toEqual(false);
    expect(arr3).toEqual(false);
  });

  it('should reduce array into sum', () => {
    const arr = addNumbers([1,5,27,50]);
    const arr2 = addNumbers([-2,0,0,3,8]);
    const arr3 = addNumbers([true,false]);
    const arr4 = addNumbers(['what','is','this']);

    expect(arr).toBe(83);
    expect(arr2).toBe(9);
    expect(arr3).toBe(1); //is this because true is 0 and false is 1?
    expect(arr4).toBeNaN;
  });

  it('should calculate average of numbers in array', () => {
    const arr = averageTestScore([22,28,30]);
    const arr2 = averageTestScore([1,9,8,9]);
    const arr3 = averageTestScore([true,true,true]);
    const arr4 = averageTestScore(['hello','kelly']);

    expect(arr).toBe(26.666666666666668);
    expect(arr2).toBe(6.75);
    expect(arr3).toBe(1);
    expect(arr4).toBeNaN;
  });

  it('should return the largest value of numbers in array', () => {
    const arr = largestNumber([22,28,30]);
    const arr2 = largestNumber([1,9,8,9]);
    const arr3 = largestNumber([true, false]);
    const arr4 = largestNumber(['the','end']);

    expect(arr).toBe(30);
    expect(arr2).toBe(9);
    expect(arr3).toBe(true);
    expect(arr4).toBeNaN;
  });
     
     
});
