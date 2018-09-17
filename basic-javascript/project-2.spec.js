const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('get biggest number', () => {
    const getBiggest = funcs.getBiggest;
    
    const Value1 = getBiggest(10, 11);
    const Value2 = getBiggest(-5, 0);

    expect(Value1).toEqual(11);
    expect(Value2).toEqual(0);
});

it('Switch language', () => {
    const greeting = funcs.greeting;
    
    const German = greeting('Guten Tag!');
    const Spanish = greeting('Hola!');
    const Default = greeting();

    expect(German).toEqual('Hello!');
    expect(Spanish).toEqual('Hello!');
    expect(Default).toEqual('Hello!');
});

it('is ten or five', () => {
    const isTenOrFive = funcs.isTenOrFive;
    
    const Value1 = isTenOrFive(5);
    const Value2 = isTenOrFive(50);
    const Value3 = isTenOrFive(10);

    expect(Value1).toEqual(true);
    expect(Value2).toEqual(false);
    expect(Value3).toEqual(true);
});

it('is in range < 50 but > 20', () => {
    const isInRange = funcs.isInRange;
    
    const Value1 = isInRange(10);
    const Value2 = isInRange(23);
    const Value3 = isInRange(60);

    expect(Value1).toEqual(false);
    expect(Value2).toEqual(true);
    expect(Value3).toEqual(false);
});

it('is integer', () => {
    const Integer = funcs.isInteger;

    const Value1 = Integer(3);
    const Value2 = Integer(3.5);

    expect(Value1).toEqual(true);
    expect(Value2).toEqual(false);

});

it('fizzbuzz', () => {
    const fizzBuzz = funcs.fizzBuzz;
    
    const Value1 = fizzBuzz(30);
    const Value2 = fizzBuzz(12);
    const Value3 = fizzBuzz(10);

    expect(Value1).toEqual('fizzbuzz');
    expect(Value2).toEqual('fizz');
    expect(Value3).toEqual('buzz');
});

it('if number is prime?', () => {
    const isPrime = funcs.isPrime;
    
    const Value1 = isPrime(0);
    const Value2 = isPrime(1);
    const Value3 = isPrime(7);

    expect(Value1).toEqual(false);
    expect(Value2).toEqual(false);
    expect(Value3).toEqual(true);
});

it('Return first Array', () => {
    const returnFirst = funcs.returnFirst;
    
    const Value1 = returnFirst([0, 1, 2]);
    const Value2 = returnFirst([3, 4, 5]);
    const Value3 = returnFirst([6, 8, 7]);

    expect(Value1).toEqual(0);
    expect(Value2).toEqual(3);
    expect(Value3).toEqual(6);
});

it('Return last Array', () => {
    const returnLast = funcs.returnLast;
    
    const Value1 = returnLast([0, 1, 2]);
    const Value2 = returnLast([3, 4, 5]);
    const Value3 = returnLast([6, 8, 7]);

    expect(Value1).toEqual(2);
    expect(Value2).toEqual(5);
    expect(Value3).toEqual(7);
});

it('Get Array Length', () => {
    const getArrayLength = funcs.getArrayLength;
    
    const Value = getArrayLength([0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3]);

    expect(Value).toEqual(17);
});

it('Increment by one', () => {
    const incrementByOne = funcs.incrementByOne;
    
    const Value = incrementByOne([0]);

    expect(Value).toEqual([1]);
});

it('Add item to array', () => {
    const addItemToArray = funcs.addItemToArray;
    
    const Value = addItemToArray([0, 1], 2);

    expect(Value).toEqual([0, 1, 2]);
});

it('Add item to front', () => {
    const addItemToFront = funcs.addItemToFront;
    
    const ExThree = addItemToFront([0, 1], 2);

    expect(ExThree).toEqual([2, 0, 1]);
});

it('Words into sentence', () => {
    const wordsToSentence = funcs.wordsToSentence;
    
    const Value = wordsToSentence(['Das', 'and', 'Jas']);

    expect(Value).toEqual('Das and Jas');
});

it('contains', () => {
    const contains = funcs.contains;
    
    const Value1 = contains([0, 1], 1);
    const Value2 = contains([0, 1], 2);

    expect(Value1).toEqual(true);
    expect(Value2).toEqual(false);
});

it('Add numbers', () => {
    const addNumbers = funcs.addNumbers;
    
    const Value1 = addNumbers([1, 2, 3, 4]);
    const Value2 = addNumbers([5, 6, 7, 8]);

    expect(Value1).toEqual(10);
    expect(Value2).toEqual(26);
});

it('Average test score', () => {
    const averageTestScore = funcs.averageTestScore;
    
    const Value = averageTestScore([10, 10, 10]);

    expect(Value).toEqual(10);
});

it('Largest number', () => {
    const largestNumber = funcs.largestNumber;
    
    const Value = largestNumber([1, 2, 3]);

    expect(Value).toEqual(3);
});