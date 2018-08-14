const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
it('if x > y return x otherwise return y', () => {
    expect(funcs.getBiggest(20, 10)).toEqual(20);
    expect(funcs.getBiggest(20,22)).toEqual(22);
})

describe('switch greeting', () => {
    it('if greeting is German', () => {
    expect(funcs.greeting('German')).toEqual('Guten Tag!');
    })
    it('if greeting is Spanish', () => {
    expect(funcs.greeting('Spanish')).toEqual('Hola!');
    })
    it('if greeting is other language', () => {
    expect(funcs.greeting('Armenian')).toEqual('Hello!');
    })
})

it('if number 10 or 5 return true', () => {
    expect(funcs.isTenOrFive(23)).toEqual(false);
    expect(funcs.isTenOrFive(10 || 5)).toEqual(true);
})

it('if number is between 50 and 20', () => {
    expect(funcs.isInRange(32)).toEqual(true);
    expect(funcs.isInRange(100)).toEqual(false);
})

it('is an integer', () => {
    expect(funcs.isInteger(10)).toEqual(true);
    expect(funcs.isInteger(-10)).toEqual(true);
    expect(funcs.isInteger('10')).toEqual(false);
})

describe('fizzbuzz', () => {
    it('is divisible by 5 & 3 returns fizzbuzz', () => {
        expect(funcs.fizzBuzz(15)).toMatch('fizzbuzz');
    })
    it('is divisible by 5', () => {
        expect(funcs.fizzBuzz(10)).toMatch('buzz');
    })
    it('is divisible by 3', () => {
        expect(funcs.fizzBuzz(9)).toMatch('fizz');
    })
})

describe('isprime', () => {
    it('if num < 0', () => {
        expect(funcs.isPrime(-2)).toBeFalsy();
    })
    it('if num is 1 or num is 0', () => {
        expect(funcs.isPrime(0 || 1)).toBeFalsy();
    })
    it('if number is prime', () => {
        expect(funcs.isPrime(3)).toBeTruthy();
    })
})

it('returns first item of array', () => {
    const arr = ['love','then','now']
    expect(funcs.returnFirst(arr)).toEqual('love');
})

it('returns last item of array', () => {
    const arr = ['more','moreee', 'moreeee']
    expect(funcs.returnLast(arr)).toEqual('moreeee');
})

it('add ones to the numbers in the array', () => {
    const num = [10, 12 , 4, 22]
    expect(funcs.incrementByOne(num)).toEqual([11,13,5,23])
})

it('add item to end of array', () => {
    const list = ['dog', 'cat', 'lemon']
    expect(funcs.addItemToArray(list, 'cherry')).toEqual(['dog','cat','lemon','cherry'])
})

it('add item to the front of the array', () => {
    const amazing = ['Holly', 'Megan', 'Simon', 'Tyson']
    expect(funcs.addItemToFront(amazing, 'Logan')).toEqual(['Logan', 'Holly', 'Megan', 'Simon', 'Tyson'])
})

/* it('word count in a sentence', () => {
    let sentence = 'Phrase of the gods'
    expect(funcs.wordsToSentence(sentence)).toBe('P h r a s e  o f  t h e  g o d s')
})
*/

describe('if an array contains an item', () => {
    let arr = ['dog', 'woof', 'meow', 'cat']
    let item = 'cat'
    it('contains item', () => {
        expect(funcs.contains(arr, item)).toBeTruthy();
    })
    it('contains no item', () => {
        expect(funcs.contains(arr, 'love')).toBeFalsy();
    })
})

it('add numbers in ', () => {
    let num = [23, 3, 324, 4390]
    expect(funcs.addNumbers(num)).toEqual(4740);
})

it('average of test scores', () => {
    let scores = [92, 43, 32, 89, 78, 33, 98, 56]
    expect(funcs.averageTestScore(scores)).toEqual(65.125)
})

it('get the largest number', () => {
    let bigNumbers = [200, 300, 400, 500, 600, 1000, 10001]
    expect(funcs.largestNumber(bigNumbers)).toEqual(10001)
})