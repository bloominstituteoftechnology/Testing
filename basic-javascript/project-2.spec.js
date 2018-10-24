const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

it('should return 5 given 4 and 5', () => {
expect(funcs.getBiggest(4,5)).toEqual(5);
expect(funcs.getBiggest(5,4)).toEqual(5);
})

it('should the proper greeting for the language', () => {
expect(funcs.greeting('German')).toEqual('Guten Tag!');
expect(funcs.greeting('Spanish')).toEqual('Hola!');
expect(funcs.greeting('')).toEqual('Hello!');
})

it('should return true for 10 or 5, and false for 6', () => {
expect(funcs.isTenOrFive(10)).toEqual(true);
expect(funcs.isTenOrFive(5)).toEqual(true);
expect(funcs.isTenOrFive(6)).toEqual(false);
})

it('should return true for numbers between 50 and 20, and false otherwise', () => {
expect(funcs.isInRange(49)).toEqual(true);
expect(funcs.isInRange(21)).toEqual(true);
expect(funcs.isInRange(19)).toEqual(false);
expect(funcs.isInRange(51)).toEqual(false);
})


it('should return true for 3, and false for 3.2', () => {
expect(funcs.isInteger(3)).toEqual(true);
expect(funcs.isInteger(3.2)).toEqual(false);
})

it('multiples of 3 and 5 should return \'fizzbuzz\'', () => {
expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
expect(funcs.fizzBuzz(30)).toEqual('fizzbuzz');
})

it('multiples of 3 should return \'fizz\'', () => {
expect(funcs.fizzBuzz(3)).toEqual('fizz');
expect(funcs.fizzBuzz(6)).toEqual('fizz');	
})

it('multiples of  5 should return \'buzz\'', () => {
expect(funcs.fizzBuzz(5)).toEqual('buzz');
expect(funcs.fizzBuzz(10)).toEqual('buzz');
})

it('other numbers should return themselves', () => {
expect(funcs.fizzBuzz(2)).toEqual(2);
expect(funcs.fizzBuzz(13)).toEqual(13);
})

it('should return \'true\' for prime numbers, and \'false\' for other numbers', () => {
expect(funcs.isPrime(49)).toEqual(false);
expect(funcs.isPrime(21)).toEqual(false);
expect(funcs.isPrime(13)).toEqual(true);
expect(funcs.isPrime(7)).toEqual(true);
})

it('should return the first object of an array', () => {
expect(funcs.returnFirst(['first item'])).toEqual('first item');
expect(funcs.returnFirst(['first item','second item'])).toEqual('first item');
})

it('should return the last object of an array', () => {
expect(funcs.returnLast(['only item'])).toEqual('only item');
expect(funcs.returnLast(['first item','second item','last item'])).toEqual('last item');
})

it('should return the length of an array', () => {
expect(funcs.getArrayLength(['',''])).toEqual(2);
expect(funcs.getArrayLength([])).toEqual(0);
expect(funcs.getArrayLength([''])).toEqual(1);
})

it('should return every item in the array plus one', () => {
expect(funcs.incrementByOne([1])).toEqual([2]);
expect(funcs.incrementByOne([1,2])).toEqual([2,3]);
expect(funcs.incrementByOne([-1,0,1,2,3,0])).toEqual([0,1,2,3,4,1]);
})

it('should add an item on to an array', () => {
expect(funcs.addItemToArray(['only item'],'new item')).toEqual(['only item','new item']);
})

it('should add an item on to the front of an array', () => {
expect(funcs.addItemToFront(['only item'],'new first item')).toEqual(['new first item','only item']);
})

it('should return a string based on an array', () => {
expect(funcs.wordsToSentence(['first','second'])).toEqual('first second');
expect(funcs.wordsToSentence([])).toEqual('');
expect(funcs.wordsToSentence([''])).toEqual('');
expect(funcs.wordsToSentence(['word'])).toEqual('word');
})

it('should return \'true\' if the array includes the object, and \'false\' otherwise', () => {
expect(funcs.contains(['included item'],'not included')).toEqual(false);
expect(funcs.contains(['included item'],'included item')).toEqual(true);
})

it('should add all numbers in the array', () => {
expect(funcs.addNumbers([1])).toEqual(1);
expect(funcs.addNumbers([1,2])).toEqual(3);
expect(funcs.addNumbers([-1,0,1,2,3,0])).toEqual(5);
})

it('should return the average values of test scores', () => {
expect(funcs.averageTestScore([100,0])).toEqual(50);
expect(funcs.averageTestScore([1,2])).toEqual(1.5);
})

it('should return the largest number', () => {
expect(funcs.largestNumber([100,0])).toEqual(100);
expect(funcs.largestNumber([1,2])).toEqual(2);
})



















