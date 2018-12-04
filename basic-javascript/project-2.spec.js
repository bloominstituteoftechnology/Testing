const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('project-2', () => {
    describe('getBiggest function', () => {
        it('If x is bigger than y, it should return x', () => {
            expect(funcs.getBiggest(5,1)).toBe(5);
        })
        it('If y is bigger than x, it should return y', () => {
            expect(funcs.getBiggest(1,5)).toBe(5);
        })
        it('If x is equal to y, it should return y', () => {
            expect(funcs.getBiggest(5,5)).toBe(5);
        })
        it('If x or y is NaN, it shold return null', () => {
            expect(funcs.getBiggest('5',5)).toBe(null);
        })
    })

    describe('gretting Function', () => {
        it('language other than German and Spanish, it should return Hello!', () => {
            expect(funcs.greeting('english')).toBe('Hello!');
        })
        it('If Spanish was enter, it should return Hola!', () => {
            expect(funcs.greeting('Spanish')).toBe('Hola!');
        })
        it('If spanish was enter, it should return Hola!', () => {
            expect(funcs.greeting('spanish')).toBe('Hola!');
        })
        it('If German was enter, it should return Guten Tag!', () => {
            expect(funcs.greeting('German')).toBe('Guten Tag!');
        })
        it('If german was enter, it should return Guten Tag!', () => {
            expect(funcs.greeting('german')).toBe('Guten Tag!');
        })
    })

    describe('isTenOrFive Function', () => {
        it('If number equal five, it should return true', () => {
            expect(funcs.isTenOrFive(5)).toBe(true);
        })
        it('If number equal ten, it should return true', () => {
            expect(funcs.isTenOrFive(10)).toBe(true);
        })
        it('If number equal to number other than ten, it should return false', () => {
            expect(funcs.isTenOrFive(15)).toBe(false);
        })
        it('if number is equal to string or anything other than number, it should return null', () => {
            expect(funcs.isTenOrFive('15')).toBe(null);
            expect(funcs.isTenOrFive({})).toBe(null);
            expect(funcs.isTenOrFive('sfs/./')).toBe(null);
            expect(funcs.isTenOrFive()).toBe(null);
        })
    })

    describe('isInRange Function', () => {
        it('If number is greater than 20, and less than 50, it should return true', () => {
            expect(funcs.isInRange(48)).toBe(true);
        })
        it('If number is greter than 20, and greter than 50, it should return false', () => {
            expect(funcs.isInRange(51)).toBe(false);
        })
        it('If number is least than 20, and less than 50, it should return false', () => {
            expect(funcs.isInRange(19)).toBe(false);
        })
        it('If number is equal to 20, it should return false', () => {
            expect(funcs.isInRange(20)).toBe(false);
        })
        it('If number is equal to 50, it should return false', () => {
            expect(funcs.isInRange(50)).toBe(false);
        })
        it('If number is other than number, such as string, it should return null', () => {
            expect(funcs.isInRange('sss')).toBe(null);
            expect(funcs.isInRange()).toBe(null);
        })
    })

    describe('isInteger Function', () => {
        it('If the number equal interger, it should return true', () => {
            expect(funcs.isInteger(15)).toBe(true);
        })
        it('If the number not equal to interger, it should return false', () => {
            expect(funcs.isInteger(15.6)).toBe(false);
        })
        it('If the number is not a number, it should return null', () => {
            expect(funcs.isInteger({})).toBe(null);
        })
    })

    describe('fizzBuzz Function', () => {
        it('If the number can be divide by 5, and divide by 3, return fizzbuzz', () => {
            expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
        })
        it('If the number can be divide by 5, but can not divide by 3, return buzz', () => {
            expect(funcs.fizzBuzz(5)).toBe('buzz');
        })
        it('If the number can not be divide by 5, but can be divide by 3, return fizz', () => {
            expect(funcs.fizzBuzz(3)).toBe('fizz');
        })
        it('If the number can not be divide by 5, and can not divide by 3, or it is not a number, return null', () => {
            expect(funcs.fizzBuzz(17)).toBe(null);
            expect(funcs.fizzBuzz('sss')).toBe(null);
        })
    })

    describe('isPrime Function', () => {
        it('If the number is prime number, it should return true', () => {
            expect(funcs.isPrime(2)).toBe(true);
            expect(funcs.isPrime(28)).toBe(false);
        })
        it('If number is not a number, it should return null', () => {
            expect(funcs.isPrime('ss')).toBe(null);
        })
    })

    describe('returnFirst Function', () => {
        it('If input a array of string or number, it should return the first number or string in the array', () => {
            expect(funcs.returnFirst([3,2,1,0])).toBe(3);
            expect(funcs.returnFirst(['ss','aa',5])).toBe('ss');
        })
        it('If a empty array, it should return null', () => {
            expect(funcs.returnFirst([])).toBe(null);
        })
    })

    describe('returunLast Function', () => {
        it('If input a array of string or number, it should return the last item in the arrya', () => {
            expect(funcs.returnLast([3,2,1,0])).toBe(0);
            expect(funcs.returnLast(['ss', 'aa', 5])).toBe(5);
        })
        it('If a empty array, it should return null', () => {
            expect(funcs.returnFirst([])).toBe(null);
        })
    })

    describe('getArrayLength Function', () => {
        it('If input a array, it should return the length of array', () => {
            expect(funcs.getArrayLength([1,5,1,5,4])).toBe(5);
        })
        it('If no Array was enter, it should return null', () => {
            expect(funcs.getArrayLength()).toBe(null);
        })
    })

    describe('incrementByOne Function', () => {
        it('If input a array of number, every number in the array should be inrement by one', () => {
            expect(funcs.incrementByOne([3,2,5,4,3])).toEqual([4,3,6,5,4]);
        })
        it('If input a array of number plus string, it should return null', () => {
            expect(funcs.incrementByOne([4,2,'5',4,3])).toBe(null);
        })
        it('If no array was enter, return null', () => {
            expect(funcs.incrementByOne()).toBe(null);
        })
    })

    describe('addItemToArray Function', () => {
        it('If array was provide, and item was provide, add item to the array', () => {
            expect(funcs.addItemToArray([3,53,2,4], 22)).toEqual([3,53,2,4,22]);
            expect(funcs.addItemToArray([3,53,2,4], 'ss')).toEqual([3,53,2,4,'ss']);
        })
        it('If item was not provide, return the array', () => {
            expect(funcs.addItemToArray([3,53,2,4])).toEqual([3,53,2, 4]);
        })
    })
    
    describe('addItemToFront Function', () => {
        it('If array was provide, and item was provide, add item to the front of array', () => {
            expect(funcs.addItemToFront([3,53,2,4], 22)).toEqual([22,3,53,2,4]);
            expect(funcs.addItemToFront([3,53,2,4], 'ss')).toEqual(['ss',3,53,2,4]);
        })
        it('If item was not provide, return the array', () => {
            expect(funcs.addItemToFront([3,53,2,4])).toEqual([3,53,2, 4]);
        })
    })

    describe('wordsToSentence Function', () => {
        it('If array of words provide, it should return a sentence', () => {
            expect(funcs.wordsToSentence(['kam','is','best','PM'])).toBe('kam is best PM')
        })
        it('If not array of world was provide, it should return null', () => {
            expect(funcs.wordsToSentence()).toBe(null);
        })
    })
    
    describe('contains Function', () => {
        it('If the array contain the item more than once, return true', () => {
            expect(funcs.contains([4,5,4,6,7], 4)).toBe(true);
        })
        it('If the array don;t contain the item, return false', () => {
            expect(funcs.contains([4,5,4,6,7], 8)).toBe(false);
        })
        it('If item ws not provide, return null', () => {
            expect(funcs.contains([4,5,4,6,7])).toBe(null);
        })
    })

    describe('addNumbers Function', () => {
        it('If array of number of provide, return the addnumbers', () => {
            expect(funcs.addNumbers([4,5,4,6])).toBe(19);
            expect(funcs.addNumbers([4])).toBe(4);
        })
        it('If anything another than number was in the array, return null', () => {
            expect(funcs.addNumbers([4,'4',5])).toBe(null);
        })
    })

    describe('averageTestScore Function', () => {
        it('If a array of test score was enter, return the averge test Score', () => {
            expect(funcs.averageTestScore([95,93,93])).toBeCloseTo(93.67,2)
        })
        it('If anything another than number was in the array, return null', () => {
            expect(funcs.averageTestScore([93,'94',93])).toBe(null);
        })
    })
    
})