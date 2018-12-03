const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// describe('MultiplyByTen', () => {
//     it('it should multiply the number passed by ten', () => {
//         expect(helpers.multiplyByTen(4)).toEqual(40);

//         })
//     it('should return false if undefined is passed', () => {
//         expect(helpers.multiplyByTen(undefined)).toEqual(false)
//         })
//     })


describe('getBiggest', () => {
    it('it should return value of x if greater than y', () => {
        expect(funcs.getBiggest(20, 15)).toEqual(20);
    })
    it('it should return y if x is equal to y', () => {
        expect(funcs.getBiggest(20, 20)).toEqual(20);
    })
    it('it should return y is y is greater than x', () => {
        expect(funcs.getBiggest(20, 25)).toEqual(25);
    })
})

describe('greeting', () => {
    it('it should return greeting for German', () => {
        expect(funcs.greeting('German')).toEqual('Guten Tag!');
    })
    it('it should return greeting in Spanish', () => {
        expect(funcs.greeting('Spanish')).toEqual('Hola!');
    })
    it('it should pass hello when nothing is passed', () => {
        expect(funcs.greeting()).toEqual("Hello!");
    })
})

describe('isTenOrFive', () => {
    it('should return true if number passed is 10 or 5 or false if not', () => {
        expect(funcs.isTenOrFive(10)).toEqual(true);
        expect(funcs.isTenOrFive(5)).toEqual(true);
        expect(funcs.isTenOrFive(7)).toEqual(false);
    })
})

describe('isInRange', () => {
    it('it should return true if number is between 20 and 50 ', () => {
        expect(funcs.isInRange(25)).toEqual(true);
    })
    it('it should return false if number is outside of 20 - 50', () => {
        expect(funcs.isInRange(19)).toEqual(false);
    })
})

describe('isInteger', () => {
    it('it returns true if number is whole', () => {
        expect(funcs.isInteger(4)).toEqual(true);
    })
    it('it should return false if not a whole number', () => {
        expect(funcs.isInteger(4.4)).toEqual(false);
    })
})

describe('fizzBuzz', () => {
    it('it should return fizzbuzz if number is divisible by 5 and 3', () => {
        expect(funcs.fizzBuzz(15)).toEqual('fizzbuzz');
        expect(funcs.fizzBuzz(30)).toEqual('fizzbuzz');
    })
    it('it should return buzz if only divisible by 5', () => {
        expect(funcs.fizzBuzz(20)).toEqual('buzz');
    })
    it('it should return fizz if only divisible by 3', () => {
        expect(funcs.fizzBuzz(9)).toEqual('fizz');
    })
})

describe('isPrime', () => {
    it('it should return false if number is less than 0', () => {
        expect(funcs.isPrime(-1)).toEqual(false);
    })
    it('it should return false if number is 1 or 0', () => {
        expect(funcs.isPrime(1)).toEqual(false);
        expect(funcs.isPrime(0)).toEqual(false);
    })
    it('it should return false if number is not a prime number', () => {
        expect(funcs.isPrime(27)).toEqual(false);
    })
    it('it should return true if number is a prime number', () => {
        expect(funcs.isPrime(29)).toEqual(true);
        expect(funcs.isPrime(97)).toEqual(true);
    })
})

describe('returnFirst', () => {
    it('it should return first item in an array', () => {
        expect(funcs.returnFirst([2,3,4,5,6])).toEqual(2);
    })
    it('it should return false if array is empty', () => {
        expect(funcs.returnFirst([])).toEqual(false);
    })
})

describe('returnLast', () => {
    it('it should return last item of an array', () => {
        expect(funcs.returnLast([2,4,5,2,4,5])).toEqual(5);
    })
})

describe('getArrayLenght', () => {
    it('it should return length of an array', () => {
        expect(funcs.getArrayLength([2,4,2,4,2,4])).toEqual(6);
    })
})

describe('incrementByOne', () => {
    it('it should return array incemented by one', () => {
        expect(funcs.incrementByOne([1,2,3,4,5,6])).toEqual([2,3,4,5,6,7])
    })
})

describe('addItemToArray', () => {
    it('it should return array with pushed item', () => {
        expect(funcs.addItemToArray([1,2,3,4,5], 6)).toEqual([1,2,3,4,5,6])
    })
})

describe('addItemToFront', () => {
    it('it should add item passed to front of array', () => {
        expect(funcs.addItemToFront([1,2,3,4,5],0)).toEqual([0,1,2,3,4,5])
        })
 })

 describe('wordsToSentence', () => {
     it('it should return array of words to a string', () => {
         expect(funcs.wordsToSentence(['hello', 'how', 'are', 'you'])).toEqual('hello how are you');
     })
 })

 describe('contains', () => {
     it('it should return true if an array contains an item', () => {
         expect(funcs.contains([1,2,3,4], 2)).toEqual(true);
         expect(funcs.contains(['hey', 'how', 'are', 'you'], 'hey')).toEqual(true);
     })
     it('it should return false if item passed in not in array', () => {
        expect(funcs.contains([1,2,3,4,5], 6)).toEqual(false);
     })
 })

 describe('addNumbers', () => {
     it('it should add number passed to sum', () => {
         expect(funcs.addNumbers([12])).toEqual(12);/////not working
     })
 })

 describe('averageTestScore', () => {
     it('it should return the average test score', () => {
         expect(funcs.averageTestScore([100, 50, 100, 50])).toEqual(75);
     })
 })

 describe('largestNumber', () => {
     it('it should return the largest number of an array', () => {
         expect(funcs.largestNumber([1,2,3,4,5])).toEqual(5);
     })
 })




