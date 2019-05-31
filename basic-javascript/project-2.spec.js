const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('getBiggest', () => {
    it('return y if its larger than x', () => {
        expect(funcs.getBiggest(10, 30)).toBe(30)
    })
    it('return x if its larger than y', () => {
        expect(funcs.getBiggest(100, 30)).toBe(100)
    })
    it('return either if same', () => {
        expect(funcs.getBiggest(100, 100)).toBe(100)
    })
})

describe('greeting', () => {
    it('return guten tag when german selected as arg', () => {
        expect(funcs.greeting('German').toBe('Guten Tag!'))
    })
    it('return hola when spanish selected as arg', () => {
        expect(funcs.greeting('Spanish').toBe('Hola!'))
    })
    it('return Hello when english selected as arg', () => {
        expect(funcs.greeting('English').toBe('Hello!'))
    })
})

describe('isTenOrFive', ()=> {
    it('return true when num is 10 or 5', () => {
        expect(funcs.isTenOrFive(10)).toBeTruthy()
        expect(funcs.isTenOrFive(5)).toBeTruthy()
    })
    it('return false when num is not 5 pr 10', () => {
        expect(funcs.isTenOrFive(156)).toBeFalsy()
        expect(funcs.isTenOrFive(100)).toBeFalsy()
        
    })
    it('return NaN when num is not a number', () => {
        expect(funcs.isTenOrFive('ten')).toBeNaN()
        expect(funcs.isTenOrFive(undefined)).toBeNaN()     
    })
})

describe('isInRange', ()=> {
    it('return true when in range', () => {
        expect(funcs.isInRange(35)).toBeTruthy()
        expect(funcs.isInRange("27")).toBeTruthy()
    })
    it('return false when not in range', () => {
        expect(funcs.isInRange(35)).toBeFalsy()
        expect(funcs.isInRange("27")).toBeFalsy()
    })
    it('return NaN when num is not a number', () => {
        expect(funcs.isInRange('ten')).toBeNaN()
        expect(funcs.isInRange(undefined)).toBeNaN()     
    })
})
describe('isInteger', ()=> {
    it('return true when integer', () => {
        expect(funcs.isInteger(3)).toBeTruthy()
        expect(funcs.isInteger("27")).toBeTruthy()
    })
    it('return false when not integer', () => {
        expect(funcs.isInteger(35.5)).toBeFalsy()
        expect(funcs.isInteger("27.2")).toBeFalsy()
    })
    it('return NaN when num is not a number', () => {
        expect(funcs.isInteger('ten')).toBeNaN()
        expect(funcs.isInteger(undefined)).toBeNaN()     
    })
})
describe('isPrime', ()=> {
    it('return true when integer', () => {
        expect(funcs.isPrime(7)).toBeTruthy()
        expect(funcs.isPrime("17")).toBeTruthy()
    })
    it('return false when not prime or less than 0', () => {
        expect(funcs.isPrime(14)).toBeFalsy()
        expect(funcs.isPrime("12")).toBeFalsy()
        expect(funcs.isPrime(-1)).toBeFalsy()
    })
    it('return NaN when num is not a number', () => {
        expect(funcs.isPrime('ten')).toBeNaN()
        expect(funcs.isPrime(undefined)).toBeNaN()     
    })
})

describe('returnFirst', ()=> {
    it('return first item in array', () => {
        expect(funcs.returnFirst([2, 8, 4, 15, 25])).toBe(2)
        expect(funcs.returnFirst([122, 8000, 455, 1252, 125])).toBe(122)
        expect(funcs.returnFirst([202, 82, 41, 5, 205])).toBe(202)
        expect(funcs.returnFirst(['this', 'array', 'has', 'words'])).toBe('this')
    })
})
describe('returnLast', ()=> {
    it('return Last item in array', () => {
        expect(funcs.returnLast([2, 8, 4, 15, 25])).toBe(25)
        expect(funcs.returnLast([122, 8000, 455, 1252, 125])).toBe(125)
        expect(funcs.returnLast([202, 82, 41, 5, 205])).toBe(205)
        expect(funcs.returnLast(['this', 'array', 'has', 'words'])).toBe('words')
    })
})
describe('getArrayLength', ()=> {
    it('rgetArrayLength item in array', () => {
        expect(funcs.getArrayLength([2, 8, 4, 15, 25])).toBe(5)
        expect(funcs.getArrayLength([122, 8000, 455, 1252, 125, 555])).toBe(6)
        expect(funcs.getArrayLength([202, 82, 41, 5, 205, 2, 11, 23, 9, 4])).toBe(10)
        expect(funcs.getArrayLength(['this', 'array', 'has', 'words'])).toBe(4)
    })
})


