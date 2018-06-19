const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
//#1
it('get bigger number', () => {
    const getBigger = funcs.getBiggest;
    const Test1 = getBigger(5, 15);
    const Test2 = getBigger(8, 18);
    const Test3 = getBigger(5.5, 5.6);

    expect(Test1).toEqual(15);
    expect(Test2).toEqual(18);
    expect(Test3).toEqual(5.6);
})

//#2
it('get right greeting', () => {
    const getGreeting = funcs.greeting;

    const German = getGreeting('Guten Tag!');
    const Spanish = getGreeting('Hola!');
    const Default = getGreeting();
    const Random = getGreeting('gjhdfgsdd');

    expect(German).toEqual('Hello!');
    expect(Spanish).toEqual('Hello!');
    expect(Default).toEqual('Hello!');
    expect(Random).toEqual('Hello!');
})

//#3
it('is 10 or 5', () => {
    const tenOrFive = funcs.isTenOrFive;

    const Test1 = tenOrFive(10);
    const Test2 = tenOrFive(15);
    const Test3 = tenOrFive(5);

    expect(Test1).toEqual(true);
    expect(Test2).toEqual(false);
    expect(Test3).toEqual(true);
})

//#4
it('between 20 and 50 only', () => {
    const betweenTwentyAndFifty = funcs.isInRange;

    const Test1 = betweenTwentyAndFifty(10);
    const Test2 = betweenTwentyAndFifty(55);
    const Test3 = betweenTwentyAndFifty(35);

    expect(Test1).toEqual(false);
    expect(Test2).toEqual(false);
    expect(Test3).toEqual(true);
})

//#5
it('is an integer', () => {
    const isAnInteger = funcs.isInteger;

    const Test1 = isAnInteger(10.5);
    const Test2 = isAnInteger(15);
    const Test3 = isAnInteger(5.01);

    expect(Test1).toEqual(false);
    expect(Test2).toEqual(true);
    expect(Test3).toEqual(false);
})

//#6
it('is divisible by 3 and 5', () => {
    const threeAndFive = funcs.fizzBuzz;

    const Test1 = threeAndFive(10);
    const Test2 = threeAndFive(15);
    const Test3 = threeAndFive(6);

    expect(Test1).toEqual('buzz');
    expect(Test2).toEqual('fizzbuzz');
    expect(Test3).toEqual('fizz');
})

//#7
it('is this a prime number?', () => {
    const isPrime = funcs.isPrime;

    const Test1 = isPrime(10);
    const Test2 = isPrime(15);
    const Test3 = isPrime(5);

    expect(Test1).toEqual(false);
    expect(Test2).toEqual(false);
    expect(Test3).toEqual(true);
})

//#8
it('returns first of its array', () => {
    const firstOfArr = funcs.returnFirst;

    const Test1 = firstOfArr([0,1,5]);
    const Test2 = firstOfArr([5,2,1]);
    const Test3 = firstOfArr([2,8,4]);

    expect(Test1).toEqual(0);
    expect(Test2).toEqual(5);
    expect(Test3).toEqual(2);
})

//#9
it('returns first of its array', () => {
    const lastOfArr = funcs.returnLast;

    const Test1 = lastOfArr([0,1,5]);
    const Test2 = lastOfArr([5,2,1]);
    const Test3 = lastOfArr([2,8,4]);

    expect(Test1).toEqual(5);
    expect(Test2).toEqual(1);
    expect(Test3).toEqual(4);
})

//#10
it('returns array length', () => {
    const getArrLength = funcs.getArrayLength;

    const Test1 = getArrLength([0,1,5,6,77]);
    const Test2 = getArrLength([5,2]);
    const Test3 = getArrLength([2,8,4]);

    expect(Test1).toEqual(5);
    expect(Test2).toEqual(2);
    expect(Test3).toEqual(3);
})

//#11
it('increment by one', () => {
    const incrementedByOne = funcs.incrementByOne;

    const Test1 = incrementedByOne([5]);
    const Test2 = incrementedByOne([1]);
    const Test3 = incrementedByOne([4]);

    expect(Test1).toEqual([6]);
    expect(Test2).toEqual([2]);
    expect(Test3).toEqual([5]);
})

//#12
it('adds item to array', () => {
    const addItem = funcs.addItemToArray;

    const Test1 = addItem([0,1,5], 27);
    const Test2 = addItem([5,2,1], 12);
    const Test3 = addItem([2,8,4], 0);

    expect(Test1).toEqual([0,1,5,27]);
    expect(Test2).toEqual([5,2,1,12]);
    expect(Test3).toEqual([2,8,4,0]);
})

//#13
it('adds item to front of array', () => {
    const addItemToFront = funcs.addItemToFront;

    const Test1 = addItemToFront([0,1,5], 27);
    const Test2 = addItemToFront([5,2,1], 12);
    const Test3 = addItemToFront([2,8,4], 0);

    expect(Test1).toEqual([27,0,1,5]);
    expect(Test2).toEqual([12,5,2,1]);
    expect(Test3).toEqual([0,2,8,4]);
})

//#14
it('add words to sentence', () => {
    const wordsToSentence = funcs.wordsToSentence;

    const Test1 = wordsToSentence(['whats', 'up', 'bro']);
  
    expect(Test1).toEqual('whats up bro'); 
})

//#15
it('checks for item in array', () => {
    const contains = funcs.contains;

    const Test1 = contains([0,1,5], 5);
    const Test2 = contains([5,2,1], 12);
    const Test3 = contains([2,8,4], 0);

    expect(Test1).toEqual(true);
    expect(Test2).toEqual(false);
    expect(Test3).toEqual(false);
})

//#16
it('adds item to front of array', () => {
    const addNumbers  = funcs.addNumbers;

    const Test1 = addNumbers([0,1,5]);
    const Test2 = addNumbers([5,2,1]);
    const Test3 = addNumbers([2,8,4]);

    expect(Test1).toEqual(6);
    expect(Test2).toEqual(8);
    expect(Test3).toEqual(14);
})

//#17
it('get the average', () => {
    const averageTestScore = funcs.averageTestScore;

    const Test1 = averageTestScore([100,81,94]);
    const Test2 = averageTestScore([85,82,98]);
    const Test3 = averageTestScore([72,48,24]);

    expect(Test1).toEqual((100+94+81)/3);
    expect(Test2).toEqual((85 + 82 + 98)/3);
    expect(Test3).toEqual((72+48+24)/3);
})

//#18
it('gets largest number', () => {
    const largestNumber = funcs.largestNumber;

    const Test1 = largestNumber([0,1,5]);
    const Test2 = largestNumber([5,2,1]);
    const Test3 = largestNumber([2,8,4]);

    expect(Test1).toEqual(5);
    expect(Test2).toEqual(5);
    expect(Test3).toEqual(8);
})