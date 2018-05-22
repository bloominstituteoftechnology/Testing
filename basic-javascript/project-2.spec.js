const funcs = require('./project-2');

describe('Project 2', () => {

    it('should return the larger num', () => {
        expect(funcs.getBiggest(5, 10)).toBe(10)
    })
    
    it('checks language, returns hello in that language', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!')
        expect(funcs.greeting('Spanish')).toBe('Hola!')
        expect(funcs.greeting('default')).toBe('Hello!')
    })
        
    it('checks if num 5 or 10', () => {
        expect(funcs.isTenOrFive(10)).toBe(true)
        expect(funcs.isTenOrFive(1)).toBe(false)
    })
    
    it('checks if num between 20 to 50', () => {
        expect(funcs.isInRange(25)).toBe(true)
        expect(funcs.isInRange(19)).toBe(false)
    })
    
    it('checks if num is integer', () => {
        expect(funcs.isInteger(5)).toBe(true)
        expect(funcs.isInteger(5.5)).toBe(false)
    })
    
    it('should return fizz if divisible by 3, buzz if divisible by 5, and fizzbuzz if by 15, or the num if none', () => {
        expect(funcs.fizzBuzz(3)).toBe('fizz')
        expect(funcs.fizzBuzz(5)).toBe('buzz')
        expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
        expect(funcs.fizzBuzz(7)).toBe(7)
    })
    
    it('should return first num of array', () => {
        expect(funcs.returnFirst( [5, 10] )).toBe(5)
    })
    
    it('should return last num of array', () => {
        expect(funcs.returnLast( [5, 10] )).toBe(10)
    })
    
    it('should return length of array', () => {
        expect(funcs.getArrayLength( [5, 10] )).toBe(2)
    })
    
    it('should return nums of array incremented by one', () => {
        expect(funcs.incrementByOne( [5, 10] )).toEqual( [6, 11] )
    })
    
    it('should add num to end of array', () => {
        expect(funcs.addItemToFront( [5, 10], 0 )).toEqual( [0, 5, 10] )
    })
    
    it('should add num to beginning of array', () => {
        expect(funcs.addItemToArray( [5, 10], 15 )).toEqual( [5, 10, 15] )
    })

    it('should take words and make a sentence', () => {
        expect(funcs.wordsToSentence( ['Darth', 'Vader'] )).toEqual( 'Darth Vader' )
    })
    
    it('check if the counter contains num', () => {
        expect(funcs.contains( [5, 10], 5 )).toBe(true)
        expect(funcs.contains( [5, 10], 15 )).toBe(false)
    })
    
    it('should take array of numbers and return their sum', () => {
        expect(funcs.addNumbers( [5, 10, 15] )).toBe(30)
    })
    
    it('should take array of numbers and return the average', () => {
        expect(funcs.averageTestScore( [5, 10, 15] )).toBe(10)
    })
    
    it('should take array of numbers and return the largest number', () => {
        expect(funcs.largestNumber( [5, 10, 15] )).toBe(15)
    })

})