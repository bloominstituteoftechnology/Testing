const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
describe('default', () => {
    it('run the tests', () => {});
  });


  describe("getBiggest", () => {
    it('Decide which is larger x or y', () => {
      expect(funcs.getBiggest(4,5)).toBe(5);
    });
  });

      describe ('greeting', () => {
    it('Return you r greeting in english, spanish or German', () => {
      expect(funcs.greeting('Spanish')).toBe('Hola!');
      expect(funcs.greeting('German')).toBe('Guten Tag!');
      expect(funcs.greeting()).toMatch('Hello!')
    });
  });
 
      describe ('isTenorFive', () => {
    it('return true if number is ten or five, else return false', () => {
      expect(funcs.isTenOrFive(5)).toBe(true);
      expect(funcs.isTenOrFive(10)).toBe(true);
      expect(funcs.isTenOrFive('sdfsd')).toBe(false)
    })
  })


      describe ('isInRange', () => {
    it('return true if number is lesser than 50 and greater than 20, else return false', () => {
      expect(funcs.isInRange(30)).toBe(true);
      expect(funcs.isInRange(30)).toBe(true);
      expect(funcs.isInRange(50)).toBe(false);
    })
  })
      describe ('isInteger', () => {
    it('return true if number is an integer, else return false', () => {
      expect(funcs.isInteger(4)).toBe(true);
      expect(funcs.isInteger(4.5)).toBe(false);
    })
  })
      describe ('fizzBuzz', () => {
    it('return fizzbuzz if number is divisible by 5 and 3, return buzz if number is divisible by 5, return fizz if number is divisible by 3', () => {
    expect(funcs.fizzBuzz(15)).toBe('fizzbuzz');
    expect(funcs.fizzBuzz(5)).toBe('buzz');
    expect(funcs.fizzBuzz(3)).toBe('fizz');
    expect(funcs.fizzBuzz(16)).toBe(16);


    })
  })
      describe ('isPrime', () => {
    it('return false if number is negative, zero, one, or even, else return true', () => {
      expect(funcs.isPrime(-1)).toBe(false);
      expect(funcs.isPrime(0)).toBe(false);
      expect(funcs.isPrime(1)).toBe(false);
      expect(funcs.isPrime(4)).toBe(false);
      expect(funcs.isPrime(5)).toBe(true);
    })
  })
      describe ('returnFirst', () => {
    it('return first number in an array', () => {
      expect(funcs.returnFirst([1,2,3])).toBe(1);
    })
  })
      describe ('returnLast', () => {
    it('return last number in an array', () => {
      expect(funcs.returnLast([1,2,3])).toBe(3);
    })
  })
      describe ('getArrayLength', () => {
    it('return the length of an array', () => {
      expect(funcs.getArrayLength([1,2,3,9])).toBe(4);
    })
  })
      describe ('incrementByOne', () => {
    it('return array with values incremented by one', () => {
      expect(funcs.incrementByOne([4])).toEqual([5]);
    })
  })
      describe ('addItemtoArray', () => {
    it('return an array with item added', () => {
      expect(funcs.addItemToArray([3,4,6,7], 5)).toEqual([3,4,6,7,5]);
    })
  })
      describe ('addItemtoFront', () => {
    it('return array with item added to front of array', () => {
      expect(funcs.addItemToFront([3,4,6,7], 5)).toEqual([5,3,4,6,7]);
    })
  })

      describe('should concatenate words into a sentence', () => {
        // it('It should be called with an array', () => {
        //     expect(funcs.wordsToSentences)
        //     .toHaveBeenCalledWith(expect.any(Array));
    
        // });
        it('should be an array of strings', () => {
            expect(funcs.wordsToSentence(['Tommy' + ' Jones'])).toBe('Tommy Jones')
        })
    })
      describe ('contains', () => {
    it('return true if item is contained in the array, return false if not', () => {
      expect(funcs.contains([1,2,3,4,5], 4)).toBe(true);
      expect(funcs.contains([3,4,5,6], 7)).toBe(false);
    })
  })
      describe ('addNumbers', () => {
    it('return sum of numbers added together', () => {
      expect(funcs.addNumbers([1,2,3,4,5])).toBe(15);
    })
  })
      describe ('averageTestScore', () => {
    it('return average of all test score sums', () => {
      expect(funcs.averageTestScore([234,565,876,898,909])).toBe(696.4)
    })
  })
      describe ('largestNumber', () => {
    it('return the largest number in an array', () => {
      expect(funcs.largestNumber([1,2,3,4,5,6,7,8,9,0,10])).toBe(10);
    })
  })
