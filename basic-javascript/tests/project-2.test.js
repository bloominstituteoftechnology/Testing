
const assert = require('chai').assert;
const funcs = require('../src/project-2');
const expect = require('chai').expect

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project 2 Basic JS Functions', () =>{
    describe('getBiggest',() => {
        const getBiggest = funcs.getBiggest
        it('should be a function', () => {
            expect(getBiggest).to.be.a('function')
        });
        it('should give result of getBiggest(2,3) to be 3',() =>{
            expect(getBiggest(2,3)).to.equal(3)
        })
    });

    describe('greeting',() => {
        const greeting = funcs.greeting
        it('should be a function', () => {
            expect(greeting).to.be.a('function')
        });
        it('should give result of greeting(spanish) to Hola!',() =>{
            expect(greeting('Spanish')).to.equal('Hola!')
        })
    });

    describe('isTenOrFive',() => {
        const isTenOrFive = funcs.isTenOrFive
        it('should be a function', () => {
            expect(isTenOrFive).to.be.a('function')
        });
        it('should give result of isTenOrFive(10) to be true',() =>{
            expect(isTenOrFive(10)).to.equal(true)
        })
    });

    describe('isInRange',() => {
        const isInRange = funcs.isInRange
        it('should be a function', () => {
            expect(isInRange).to.be.a('function')
        });
        it('should give result of isInRange(10) to be false',() =>{
            expect(isInRange(10)).to.equal(false)
        })
    });

    describe('isInteger',() => {
        const isInteger = funcs.isInteger
        it('should be a function', () => {
            expect(isInteger).to.be.a('function')
        });
        it('should give result of isInteger(10.5) to be false',() =>{
            expect(isInteger(10.5)).to.equal(false)
        })
    });

    describe('fizzBuzz',() => {
        const fizzBuzz = funcs.fizzBuzz
        it('should be a function', () => {
            expect(fizzBuzz).to.be.a('function')
        });
        it('should give result of fizzBuzz(15) to be fizzbuzz',() =>{
            expect(fizzBuzz(15)).to.equal('fizzbuzz')
        })
    });
    describe('fizzBuzz',() => {
        const fizzBuzz = funcs.fizzBuzz
        it('should be a function', () => {
            expect(fizzBuzz).to.be.a('function')
        });
        it('should give result of fizzBuzz(15) to be fizzbuzz',() =>{
            expect(fizzBuzz(15)).to.equal('fizzbuzz')
        })
    });

    describe('isPrime',() => {
        const isPrime = funcs.isPrime
        it('should be a function', () => {
            expect(isPrime).to.be.a('function')
        });
        it('should give result of isPrime(-1) to be false',() =>{
            expect(isPrime(-1)).to.equal(false)
        })
        it('should give result of isPrime(7) to be true',() =>{
            expect(isPrime(7)).to.equal(true)
        })
        it('should give result of isPrime(15) to be false',() =>{
            expect(isPrime(15)).to.equal(false)
        })
    });
    describe('returnFirst',() => {
        const returnFirst = funcs.returnFirst
        it('should be a function', () => {
            expect(returnFirst).to.be.a('function');
        });
        it('should give result of returnFirst([1,2,4]) to be 1',() =>{
            expect(returnFirst([1,2,4])).to.equal(1);
        })
    });

    describe('returnLast',() => {
        const returnLast = funcs.returnLast
        it('should be a function', () => {
            expect(returnLast).to.be.a('function');
        });
        it('should give result of returnLast([1,2,4]) to be 4',() =>{
            expect(returnLast([1,2,4])).to.equal(4);
        })
    });

    describe('getArrayLength',() => {
        const getArrayLength = funcs.getArrayLength
        it('should be a function', () => {
            expect(getArrayLength).to.be.a('function');
        });
        it('should give result of getArrayLength([1,2,4]) to be 3',() =>{
            expect(getArrayLength([1,2,4])).to.equal(3);
        })
    });

    describe('incrementByOne',() => {
        const incrementByOne = funcs.incrementByOne
        it('should be a function', () => {
            expect(incrementByOne).to.be.a('function');
        });
        it('should give result of incrementByOne([1,2,4]) to be [2,3,5]',() =>{
            expect(incrementByOne([1,2,4])[0]).to.equal(2);
        })
    });
    describe('addItemToArray',() => {
        const addItemToArray = funcs.addItemToArray
        const returnLast=funcs.returnLast
        it('should be a function', () => {
            expect(addItemToArray).to.be.a('function');
        });
        it('should give length of addItemToArray([1,2,4],3) to be 4 ',() =>{
            expect(addItemToArray([1,2,4],3).length).to.equal(4);
        })
        it('should give result of returnLast(addItemToArray([1,2,4])) to be 3',() =>{
            expect(returnLast(addItemToArray([1,2,4],3))).to.equal(3);
        })
    });

    describe('addItemToFront',() => {
        const addItemToFront = funcs.addItemToFront
        const returnFirst=funcs.returnFirst
        it('should be a function', () => {
            expect(addItemToFront).to.be.a('function');
        });
        it('should give length of addItemToFront([1,2,4],3) to be 4 ',() =>{
            expect(addItemToFront([1,2,4],3).length).to.equal(4);
        })
        it('should give result of returnLast(addItemToFront([1,2,4])) to be 3',() =>{
            expect(returnFirst(addItemToFront([1,2,4],3))).to.equal(3);
        })
    });

    describe('wordsToSentence',() => {
        const wordsToSentence = funcs.wordsToSentence
        it('should be a function', () => {
            expect(wordsToSentence).to.be.a('function');
        });
        it('should give result of wordsToSentence to be "Hello Jason Man"',() =>{
            expect(wordsToSentence(['Hello','Jason','Man'])).to.equal('Hello Jason Man');
        })
    });

    describe('contains',() => {
        const contains = funcs.contains
        it('should be a function', () => {
            expect(contains).to.be.a('function');
        });
        it('should give result of contains([1,2,4],3) to be false',() =>{
            expect(contains([1,2,4],3)).to.equal(false);
        })
        it('should give result of contains([1,2,4],4) to be true',() =>{
            expect(contains([1,2,4],4)).to.equal(true);
        })
    });

    describe('averageTestScore',() => {
        const averageTestScore = funcs.averageTestScore
        it('should be a function', () => {
            expect(averageTestScore).to.be.a('function');
        });
        it('should give result of averageTestScore([2,4,3] to be 3',() =>{
            expect(averageTestScore([2,4,3])).to.equal(3);
        })
    });

    describe('largestNumber',() => {
        const largestNumber = funcs.largestNumber
        it('should be a function', () => {
            expect(largestNumber).to.be.a('function');
        });
        it('should give result of largestNumber([2,4,3] to be 4',() =>{
            expect(largestNumber([2,4,3])).to.equal(4);
        })
    });

})