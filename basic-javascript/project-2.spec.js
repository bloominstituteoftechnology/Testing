const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('get biggest number', () => {
    const getBiggest = funcs.getBiggest;
    
    const ExOne = getBiggest(2, 25);
    const ExTwo = getBiggest(4, 56);

    expect(ExOne).toEqual(25);
    expect(ExTwo).toEqual(56);
});
//---------------------------------------------------------------------------------------------- 

it('Switch language', () => {
    const greeting = funcs.greeting;
    
    const German = greeting('Guten Tag!');
    const Spanish = greeting('Hola!');
    const Default = greeting();

    expect(German).toEqual('Hello!');
    expect(Spanish).toEqual('Hello!');
    expect(Default).toEqual('Hello!');
});
//----------------------------------------------------------------------------------------------  

it('is ten or five', () => {
    const isTenOrFive = funcs.isTenOrFive;
    
    const ExOne = isTenOrFive(5);
    const ExTwo = isTenOrFive(25);
    const ExThree = isTenOrFive(10);

    expect(ExOne).toEqual(true);
    expect(ExTwo).toEqual(false);
    expect(ExThree).toEqual(true);
});
//----------------------------------------------------------------------------------------------  

it('is in range < 50 but > 20', () => {
    const isInRange = funcs.isInRange;
    
    const ExOne = isInRange(25);
    const ExTwo = isInRange(55);
    const ExThree = isInRange(33);

    expect(ExOne).toEqual(true);
    expect(ExTwo).toEqual(false);
    expect(ExThree).toEqual(true);
});

// test('isinrange', () => {
//     expect(funcs.isInRange(30)).toBeTruthy();
//     expect(funcs.isInRange(20)).toBeFalsy();
//     expect(funcs.isInRange(50)).toBeFalsy();
// });
//----------------------------------------------------------------------------------------------  

it('fizzbuzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
    
    const ExOne = fizzBuzz(15);
    const ExTwo = fizzBuzz(6);
    const ExThree = fizzBuzz(5);

    expect(ExOne).toEqual('fizzbuzz');
    expect(ExTwo).toEqual('fizz');
    expect(ExThree).toEqual('buzz');
});
//----------------------------------------------------------------------------------------------  

it('if number is prime?', () => {
    const isPrime = funcs.isPrime;
    
    const ExOne = isPrime(0);
    const ExTwo = isPrime(1);
    const ExThree = isPrime(7);

    expect(ExOne).toEqual(false);
    expect(ExTwo).toEqual(false);
    expect(ExThree).toEqual(true);
});
//----------------------------------------------------------------------------------------------  

it('Return first Array', () => {
    const returnFirst = funcs.returnFirst;
    
    const ExOne = returnFirst([0, 2, 3]);
    const ExTwo = returnFirst([2, 4, 6]);
    const ExThree = returnFirst([10, 400, 7]);

    expect(ExOne).toEqual(0);
    expect(ExTwo).toEqual(2);
    expect(ExThree).toEqual(10);
});
//----------------------------------------------------------------------------------------------  

it('Return last Array', () => {
    const returnLast = funcs.returnLast;
    
    const ExOne = returnLast([0, 2, 3]);
    const ExTwo = returnLast([2, 4, 6]);
    const ExThree = returnLast([10, 400, 7]);

    expect(ExOne).toEqual(3);
    expect(ExTwo).toEqual(6);
    expect(ExThree).toEqual(7);
});
//----------------------------------------------------------------------------------------------  

it('Get Array Length', () => {
    const getArrayLength = funcs.getArrayLength;
    
    const ExThree = getArrayLength([1, 1, 1, 1]);

    expect(ExThree).toEqual(4);
});
//----------------------------------------------------------------------------------------------  

it('Increment by one', () => {
    const incrementByOne = funcs.incrementByOne;
    
    const ExThree = incrementByOne([0]);

    expect(ExThree).toEqual([1]);
});
//----------------------------------------------------------------------------------------------  

it('Add item to array', () => {
    const addItemToArray = funcs.addItemToArray;
    
    const ExThree = addItemToArray([0, 2], 25);

    expect(ExThree).toEqual([0, 2, 25]);
});
//----------------------------------------------------------------------------------------------  

it('Add item to front', () => {
    const addItemToFront = funcs.addItemToFront;
    
    const ExThree = addItemToFront([0, 2], 25);

    expect(ExThree).toEqual([25, 0, 2]);
});
//----------------------------------------------------------------------------------------------  

it('Words into sentence', () => {
    const wordsToSentence = funcs.wordsToSentence;
    
    const pugs = wordsToSentence(['Comrade', 'and', 'Clementine']);

    expect(pugs).toEqual('Comrade and Clementine');
});
//----------------------------------------------------------------------------------------------  

it('contains', () => {
    const contains = funcs.contains;
    
    const ExOne = contains([2, 1], 2);
    const ExTwo = contains([2, 1], 25);

    expect(ExOne).toEqual(true);
    expect(ExTwo).toEqual(false);
});
//----------------------------------------------------------------------------------------------  

it('Add numbers', () => {
    const addNumbers = funcs.addNumbers;
    
    const ExOne = addNumbers([1, 2, 3, 4]);
    const ExTwo = addNumbers([1, 1, 1, 1]);

    expect(ExOne).toEqual(10);
    expect(ExTwo).toEqual(4);
});
//----------------------------------------------------------------------------------------------  

it('Average test score', () => {
    const averageTestScore = funcs.averageTestScore;
    
    const ExOne = averageTestScore([100, 100, 100]);

    expect(ExOne).toEqual(100);
});
//----------------------------------------------------------------------------------------------  

it('Largest number', () => {
    const largestNumber = funcs.largestNumber;
    
    const ExOne = largestNumber([100, 50, 25]);

    expect(ExOne).toEqual(100);
});
