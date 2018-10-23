const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2.js', ()=>{
    describe('jest', ()=>{
        test('should run tests', () =>{});
        it ('should run tests using it instead of test',()=>{})
    })
    describe('getBiggest', ()=>{
        it ('should determine the biggest of two numbers', ()=>{
            expect(funcs.getBiggest(1,2)).toEqual(2);
            expect(funcs.getBiggest(2,2)).toEqual(2);
            expect(funcs.getBiggest(3,2)).toEqual(3);
        })
        it('should throw error when called with no values', ()=>{
            expect(()=>{funcs.getBiggest();}).toThrow();
            expect(()=>{funcs.getBiggest(2);}).toThrow();
        })
        it('should throw error when called with a value other than a number', ()=>{
            expect(()=>{funcs.getBiggest('hello');}).toThrow();
            expect(()=>{funcs.getBiggest(true);}).toThrow();
        })
    })
    describe('greeting', ()=>{
        it ('should return "hello" in different languages', ()=>{
            
            expect(funcs.greeting('English')).toEqual('Hello!');
            expect(funcs.greeting('')).toEqual('Hello!');
            expect(funcs.greeting('Spanish')).toEqual('Hola!');
            expect(funcs.greeting('German')).toEqual('Guten Tag!');
        })
        it ('should throw error when called with a value other than a string', ()=>{
            expect(()=>{funcs.greeting(2);}).toThrow();
            expect(()=>{funcs.greeting(true);}).toThrow();
            expect(()=>{funcs.greeting([]);}).toThrow();
            expect(()=>{funcs.greeting({});}).toThrow();
        })
    })
    describe('isTenOrFive', ()=>{
        it ('should determine if a number is ten or five', ()=>{
            expect(funcs.isTenOrFive(5)).toEqual(true);
            expect(funcs.isTenOrFive(10)).toEqual(true);
            expect(funcs.isTenOrFive(7)).toEqual(false);
        })
        it ('should throw error when called with a value other than a number', ()=>{
            expect(()=>{funcs.isTenOrFive();}).toThrow();
            expect(()=>{funcs.isTenOrFive('true');}).toThrow();
            expect(()=>{funcs.isTenOrFive(true);}).toThrow();
            expect(()=>{funcs.isTenOrFive([]);}).toThrow();
            expect(()=>{funcs.isTenOrFive({});}).toThrow();
        })
    })
    describe('isInRange', ()=>{
        it ('should determine if a number is less than 50 and greater than 20', ()=>{
            expect(funcs.isInRange(5)).toEqual(false);
            expect(funcs.isInRange(20)).toEqual(false);
            expect(funcs.isInRange(21)).toEqual(true);
            expect(funcs.isInRange(50)).toEqual(false);
            expect(funcs.isInRange(77)).toEqual(false);
        })
        it ('should throw error when called with a value other than a number', ()=>{
            expect(()=>{funcs.isInRange();}).toThrow();
            expect(()=>{funcs.isInRange('true');}).toThrow();
            expect(()=>{funcs.isInRange(true);}).toThrow();
            expect(()=>{funcs.isInRange([]);}).toThrow();
            expect(()=>{funcs.isInRange({});}).toThrow();
        })
    })
    describe('isInteger', ()=>{
        it ('should determine if a number is an integer', ()=>{
            expect(funcs.isInteger(5)).toEqual(true);
            expect(funcs.isInteger(5.5)).toEqual(false);
            expect(funcs.isInteger(-3)).toEqual(true);
        })
        it ('should throw error when called with a value other than a number', ()=>{
            expect(()=>{funcs.isInteger();}).toThrow();
            expect(()=>{funcs.isInteger('true');}).toThrow();
            expect(()=>{funcs.isInteger(true);}).toThrow();
            expect(()=>{funcs.isInteger([]);}).toThrow();
            expect(()=>{funcs.isInteger({});}).toThrow();
        })
    })
    describe('fizzBuzz', ()=>{
        it ('should determine if a number is a multiple of 5, 3, or both', ()=>{
            expect(funcs.fizzBuzz(10)).toEqual('buzz');
            expect(funcs.fizzBuzz(6)).toEqual('fizz');
            expect(funcs.fizzBuzz(30)).toEqual('fizzbuzz');
            expect(funcs.fizzBuzz(37)).toEqual(37);
        })
        it ('should throw error when called with a value other than a number', ()=>{
            expect(()=>{funcs.fizzBuzz();}).toThrow();
            expect(()=>{funcs.fizzBuzz('true');}).toThrow();
            expect(()=>{funcs.fizzBuzz(true);}).toThrow();
            expect(()=>{funcs.fizzBuzz([]);}).toThrow();
            expect(()=>{funcs.fizzBuzz({});}).toThrow();
        })
    })
    describe('isPrime', ()=>{
        it ('should determine if a number is a prime number', ()=>{
            expect(funcs.isPrime(-1)).toEqual(false);
            expect(funcs.isPrime(0)).toEqual(false);
            expect(funcs.isPrime(1)).toEqual(false);
            expect(funcs.isPrime(2)).toEqual(true);
            expect(funcs.isPrime(37)).toEqual(true);
        })
        it ('should throw error when called with a value other than a number', ()=>{
            expect(()=>{funcs.isPrime();}).toThrow();
            expect(()=>{funcs.isPrime(1.1);}).toThrow();
            expect(()=>{funcs.isPrime('true');}).toThrow();
            expect(()=>{funcs.isPrime(true);}).toThrow();
            expect(()=>{funcs.isPrime([]);}).toThrow();
            expect(()=>{funcs.isPrime({});}).toThrow();
        })
    })
    describe('returnFirst', ()=>{
        it ('should return the first element of an array', ()=>{
            expect(funcs.returnFirst([1,2,3,4])).toEqual(1);
            expect(funcs.returnFirst([[1,2,],[3,4]])).toEqual([1,2,]);
        })
        it ('should throw error when called with a value other than a number', ()=>{
            expect(()=>{funcs.returnFirst();}).toThrow();
            expect(()=>{funcs.returnFirst(1.1);}).toThrow();
            expect(()=>{funcs.returnFirst('true');}).toThrow();
            expect(()=>{funcs.returnFirst(true);}).toThrow();
            expect(()=>{funcs.returnFirst({});}).toThrow();
            expect(()=>{funcs.returnFirst([]);}).toThrow();
        })
    })
    describe('returnLast', ()=>{
        it ('should return the last element of an array', ()=>{
            expect(funcs.returnLast([1,2,3,4])).toEqual(4);
            expect(funcs.returnLast([[1,2,],[3,4]])).toEqual([3,4]);
        })
        it ('should throw error when called with a value other than an array', ()=>{
            expect(()=>{funcs.returnLast();}).toThrow();
            expect(()=>{funcs.returnLast(1.1);}).toThrow();
            expect(()=>{funcs.returnLast('true');}).toThrow();
            expect(()=>{funcs.returnLast(true);}).toThrow();
            expect(()=>{funcs.returnLast({});}).toThrow();
            expect(()=>{funcs.returnLast([]);}).toThrow();
        })
    })
    describe('getArrayLength', ()=>{
        it ('should return the length of an array', ()=>{
            expect(funcs.getArrayLength([1,2,3,4])).toEqual(4);
            expect(funcs.getArrayLength([[1,2,],[3,4]])).toEqual(2);
            expect(funcs.getArrayLength([])).toEqual(0);
        })
        it ('should throw error when called with a value other than a array', ()=>{
            expect(()=>{funcs.getArrayLength()}).toThrow();
            expect(()=>{funcs.getArrayLength(undefined)}).toThrow();
            expect(()=>{funcs.getArrayLength(1.1)}).toThrow();
            expect(()=>{funcs.getArrayLength('true')}).toThrow();
            expect(()=>{funcs.getArrayLength(true)}).toThrow();
            expect(()=>{funcs.getArrayLength({})}).toThrow();
        })
    })
    describe('incrementByOne', ()=>{
        it ('should return an array with each element increase by 1', ()=>{
            expect(funcs.incrementByOne([1,2,3,4])).toEqual([2,3,4,5]);
        })
        it ('should throw error when called with a value other than a array', ()=>{
            expect(()=>{funcs.incrementByOne([])}).toThrow();
            expect(()=>{funcs.incrementByOne()}).toThrow();
            expect(()=>{funcs.incrementByOne(undefined)}).toThrow();
            expect(()=>{funcs.incrementByOne(1.1)}).toThrow();
            expect(()=>{funcs.incrementByOne('true')}).toThrow();
            expect(()=>{funcs.incrementByOne(true)}).toThrow();
            expect(()=>{funcs.incrementByOne({})}).toThrow();
        })
    })
    describe('addItemToArray', ()=>{
        it ('should return an array with the additional item added at the end of the array', ()=>{
            expect(funcs.addItemToArray([1,2,3,4], 5)).toEqual([1,2,3,4,5]);
            expect(funcs.addItemToArray([], 5)).toEqual([5]);
        })
        it ('should throw error when called with a value other than a array', ()=>{
            expect(()=>{funcs.addItemToArray([])}).toThrow();
            expect(()=>{funcs.addItemToArray([],)}).toThrow();
            expect(()=>{funcs.addItemToArray(undefined,{})}).toThrow();
            expect(()=>{funcs.addItemToArray(undefined)}).toThrow();
            expect(()=>{funcs.addItemToArray(1.1)}).toThrow();
            expect(()=>{funcs.addItemToArray('true')}).toThrow();
            expect(()=>{funcs.addItemToArray(true)}).toThrow();
            expect(()=>{funcs.addItemToArray({})}).toThrow();
        })
    })
    describe('addItemToFront', ()=>{
        it ('should return an array with the additional item added at the beginning of the array', ()=>{
            expect(funcs.addItemToFront([1,2,3,4], 5)).toEqual([5,1,2,3,4]);
            expect(funcs.addItemToFront([], 5)).toEqual([5]);
        })
        it ('should throw error when called with a value other than a array', ()=>{
            expect(()=>{funcs.addItemToFront([])}).toThrow();
            expect(()=>{funcs.addItemToFront([],)}).toThrow();
            expect(()=>{funcs.addItemToFront(undefined,{})}).toThrow();
            expect(()=>{funcs.addItemToFront(undefined)}).toThrow();
            expect(()=>{funcs.addItemToFront(1.1)}).toThrow();
            expect(()=>{funcs.addItemToFront('true')}).toThrow();
            expect(()=>{funcs.addItemToFront(true)}).toThrow();
            expect(()=>{funcs.addItemToFront({})}).toThrow();
        })
    })
    describe('addNumbers', ()=>{
        it ('should determine sum of all elements of an array', ()=>{
            expect(funcs.addNumbers([1,2,3,4,5])).toEqual(15);
            expect(funcs.addNumbers([])).toEqual(0);
        })
        it ('should throw error when called with a value other than a array', ()=>{

            expect(()=>{funcs.addNumbers([1,{},5])}).toThrow();
            expect(()=>{funcs.addNumbers(undefined)}).toThrow();
            expect(()=>{funcs.addNumbers(1.1)}).toThrow();
            expect(()=>{funcs.addNumbers('true')}).toThrow();
            expect(()=>{funcs.addNumbers(true)}).toThrow();
            expect(()=>{funcs.addNumbers({})}).toThrow();
        })
    })
    describe('averageTestScore', ()=>{
        it ('should determine the average value of all elements in an array', ()=>{
            expect(funcs.averageTestScore([1,2,3,4,5])).toEqual(3);
        })
        it ('should throw error when called with a value other than a array', ()=>{
            expect(()=>{funcs.averageTestScore([])}).toThrow();
            expect(()=>{funcs.averageTestScore([1,{},5])}).toThrow();
            expect(()=>{funcs.averageTestScore(undefined)}).toThrow();
            expect(()=>{funcs.averageTestScore(1.1)}).toThrow();
            expect(()=>{funcs.averageTestScore('true')}).toThrow();
            expect(()=>{funcs.averageTestScore(true)}).toThrow();
            expect(()=>{funcs.averageTestScore({})}).toThrow();
        })
    })
    describe('largestNumber', ()=>{
        it ('should determine the average value of all elements in an array', ()=>{
            expect(funcs.largestNumber([1,2,5,34,9])).toEqual(34);
        })
        it ('should throw error when called with a value other than a array', ()=>{
            expect(()=>{funcs.largestNumber([])}).toThrow();
            expect(()=>{funcs.largestNumber([1,{},5])}).toThrow();
            expect(()=>{funcs.largestNumber(undefined)}).toThrow();
            expect(()=>{funcs.largestNumber(1.1)}).toThrow();
            expect(()=>{funcs.largestNumber('true')}).toThrow();
            expect(()=>{funcs.largestNumber(true)}).toThrow();
            expect(()=>{funcs.largestNumber({})}).toThrow();
        })
    })
})