const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
//

describe('these functions on project 2', ()=> {
  describe('getting the biggest number', ()=> {
    it('will return the biggest number', () => {
      const biggest = funcs.getBiggest(1, 10)
      expect(biggest).toBe(10)
    })
  })

  describe('greetings', () => {
    it('will return a greeting in german', ()=> {
      const response =  funcs.greeting('German');
      expect(response).toBe('Guten Tag!')
    })

    it('will return a greeting in Spanish', ()=> {
      const response =  funcs.greeting('Spanish');
      expect(response).toBe('Hola!')
    })

    it('will return hello when there is no argument', ()=> {
      const response =  funcs.greeting();
      expect(response).toBe('Hello!')
    })

    it('will return hello when it does not recognize the argument', ()=> {
      const response =  funcs.greeting('foobar');
      expect(response).toBe('Hello!')
    })
  })

  describe('Checking for ten or five', () => {
    it('will return five if the argument if five', () => {
      const five = funcs.isTenOrFive(5);
      expect(five).toBe(true)
    })

    it('will return ten if the argument if ten', () => {
      const ten = funcs.isTenOrFive(10);
      expect(ten).toBe(true)
    })

    it('will return false if the argument is neither five or ten ', () => {
      const neither = funcs.isTenOrFive(3);
      expect(neither).toBe(false)
    })
  })

  describe('Checking for a number in the right range', () => {
    it('will return true if the number is in range', ()=> {
      expect(funcs.isInRange(25)).toBe(true)
    })

    it('will return false if the number is out of range', () => {
      expect(funcs.isInRange(60)).toBe(false)
    })
  })

  describe('Checking to see if it is an integer', ()=> {
    it('will return true if the number is an integer', ()=> {
      expect(funcs.isInteger(3)).toBe(true)

    })

    it('will return false if the number is not an integer', ()=> {
      expect(funcs.isInteger('3')).toBe(false)

    })

    it('will return false if the number is an float', ()=> {
      expect(funcs.isInteger(3.5)).toBe(false)
    })
  })

  describe('fizz buzz', () => {
    it('will return fizzbuzz if the number is divisible by five and three', ()=> {
      expect(funcs.fizzBuzz(15)).toBe('fizzbuzz')
    })

    it('will return fizz if the number is divisible by three', ()=> {
      expect(funcs.fizzBuzz(9)).toBe('fizz')
    })

    it('will return buzz if the number is divisible by five', ()=> {
      expect(funcs.fizzBuzz(25)).toBe('buzz')
    })

    it('will return the number if it is not divisible by five or three', ()=> {
      expect(funcs.fizzBuzz(7)).toBe(7)
    })
  })

  describe('isPrime', ()=> {
    it('will return true if the number is prime', ()=> {
      expect(funcs.isPrime(7)).toBe(true)
    })

    it('will return false if the number is not prime', ()=> {
      expect(funcs.isPrime(8)).toBe(false)
    })

    it('will return false if the number is zero', ()=> {
      expect(funcs.isPrime(0)).toBe(false)
    })

    it('will return false if the number is one ', ()=> {
      expect(funcs.isPrime(1)).toBe(false)
    })
  })

  describe('return first', ()=> {
    it('will return the first number in the array', ()=> {
      expect(funcs.returnFirst([1, 2, 3])).toBe(1)

    })

  })


  describe('returnLast', ()=> {
    it('will return the last number in the array', ()=> {
      expect(funcs.returnLast([1, 2, 3])).toBe(3)
    })

  })

  describe('getArrayLength', ()=> {
    it('will return the length of the array', ()=> {
      expect(funcs.getArrayLength([1, 2, 3])).toBe(3)
    })
  })

  describe('increment by one', ()=> {
    const result = funcs.incrementByOne([1, 2, 3])
      expect(result).toEqual([2, 3, 4])
  })

 })
