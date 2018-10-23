const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
const helpers = require('./project-2');

// start testing!
it('should run function tests', () => {
    expect(helpers.getBiggest(1, 5)).toBe(5);
    expect(helpers.getBiggest(11, -5)).toBe(11);

    expect(helpers.greeting('German')).toBe('Guten Tag!');
    expect(helpers.greeting('Spanish')).toBe('Hola!');
    expect(helpers.greeting('English')).toBe('Hello!');

    expect(helpers.isTenOrFive(10)).toBe(true);
    expect(helpers.isTenOrFive(5)).toBe(true);
    expect(helpers.isTenOrFive(8)).toBe(false);

    expect(helpers.isInRange(25)).toBe(true);
    expect(helpers.isInRange(5)).toBe(false);
    expect(helpers.isInRange(58)).toBe(false);

    expect(helpers.isInteger(11)).toBe(true);
    expect(helpers.isInteger(5.22)).toBe(false);
    expect(helpers.isInteger('string')).toBe(false);

    expect(helpers.fizzBuzz(15)).toBe('fizzbuzz');
    expect(helpers.fizzBuzz(20)).toBe('buzz');
    expect(helpers.fizzBuzz(6)).toBe('fizz');

    expect(helpers.isPrime(-4)).toBe(false);
    expect(helpers.isPrime(1)).toBe(false);
    expect(helpers.isPrime(7)).toBe(true);

    expect(helpers.returnFirst([3,2,5,6,2])).toBe(3);
    expect(helpers.returnFirst([5,7,3,1,56])).toBe(5);

    expect(helpers.returnLast([3,2,5,6,2])).toBe(2);
    expect(helpers.returnLast([2,15,878,45,21])).toBe(21);

    expect(helpers.getArrayLength([3,2,5,6,2])).toBe(5);
    expect(helpers.getArrayLength([6,4,35,2,5,7,1])).toBe(7);

    expect(helpers.incrementByOne([6,4,35,2,5,7,1])).toEqual([7,5,36,3,6,8,2]);
    expect(helpers.incrementByOne([1,2,3,4,5,6,7,8])).toEqual([2,3,4,5,6,7,8,9]);

    expect(helpers.addItemToArray([3,2,5,6,2], 144)).toEqual([3,2,5,6,2,144]);
    expect(helpers.addItemToArray([9,2,3,4], 5)).toEqual([9,2,3,4,5]);

    expect(helpers.addItemToFront([3,2,5,6,2], 144)).toEqual([144,3,2,5,6,2]);
    expect(helpers.addItemToFront([7,6,1,354,12], 21)).toEqual([21,7,6,1,354,12]);

    expect(helpers.wordsToSentence(['I', 'went', 'to', 'the', 'store'], 144)).toBe('I went to the store');
    expect(helpers.wordsToSentence(['I', 'am', 'learning', 'TDD', 'testing'], 144)).toBe('I am learning TDD testing');


    expect(helpers.contains([3,2,5,6,2], 144)).toBe(false);
    expect(helpers.contains([3,2,5,6,2], 5)).toBe(true);

    expect(helpers.addNumbers([3,2,5,6,2])).toBe(18);
    expect(helpers.addNumbers([7,9,4,6,23,5])).toBe(54);

    expect(helpers.averageTestScore([80,99,95,76,74,86,82,93])).toBe(85.625);
    expect(helpers.averageTestScore([75,97,92,94,85,78,82,93])).toBe(87);

    expect(helpers.largestNumber([80,99,95,76,74,86,82,93])).toBe(99);
    expect(helpers.largestNumber([-80,-99,-95,-76,-74,-86,-82,-93])).toBe(0);
});

75+97+92+94+85+78+82+93