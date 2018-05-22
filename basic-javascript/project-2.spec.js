const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2', () => {
    describe('getBiggest', () => {
      it('should be a function', () => {
        const getBiggest = funcs.getBiggest;
        assert.typeOf(getBiggest, 'function');
      });
      it('should return a number', () => {
        const num1 = 222;
        const num2 = 222;
        const getBiggest = funcs.getBiggest;
        const biggest = getBiggest(num1, num2);
        expect(biggest).to.be.a('number');
      });
      it('should return first number when it is larger', () => {
        const num1 = 200;
        const num2 = 20;
        const getBiggest = funcs.getBiggest;
        const biggest = getBiggest(num1, num2);
        expect(biggest).to.equal(num2);
      });
      it('should return second number when it is larger', () => {
        const num1 = 20;
        const num2 = 200;
        const getBiggest = funcs.getBiggest;
        const biggest = getBiggest(num1, num2);
        expect(biggest).to.equal(num2);
      });
    });
  
    describe('greeting', () => {
      it('should be a function', () => {
        const greeting = funcs.greeting;
        assert.typeOf(greeting, 'function');
      });
      it('should return a string', () => {
        const str1 = 'hello';
        const greeting = funcs.greeting;
        const greeted = greeting(str1);
        expect(greeted).to.be.a('string');
      });
      it('if language is German responds with a greeting in German', () => {
        const str1 = 'German';
        const greeting = funcs.greeting;
        const greeted = greeting(str1);
        expect(greeted).to.equal('Guten Tag!');
      });
      it('if language is Spanish responds with a greeting in Spanish', () => {
        const str1 = 'Spanish';
        const greeting = funcs.greeting;
        const greeted = greeting(str1);
        expect(greeted).to.equal('Hola!');
      });
      it('responds with greeting if no language is provided', () => {
        const str1 = '';
        const greeting = funcs.greeting;
        const greeted = greeting(str1);
        expect(greeted).to.equal('Hello!');
      });
    });
  
    describe('isTenOrFive', () => {
      it('should be a function', () => {
        const isTenOrFive = funcs.isTenOrFive;
        assert.typeOf(isTenOrFive, 'function');
      });
      it('should return a number', () => {
        const input1 = 'str';
        const isTenOrFive = funcs.isTenOrFive;
        const tenOrFive = isTenOrFive(input1);
        expect(tenOrFive).to.be.a('boolean');
      });
      it('if 10 or 5 returns true', () => {
        const num1 = 10;
        const isTenOrFive = funcs.isTenOrFive;
        const tenOrFive = isTenOrFive(num1);
        expect(tenOrFive).to.equal(true);
      });
      it('if not 10 or 5 returns false', () => {
        const num1 = true;
        const isTenOrFive = funcs.isTenOrFive;
        const tenOrFive = isTenOrFive(num1);
        expect(tenOrFive).to.equal(false);
      });
    });
  
    describe('isInRange', () => {
      it('should be a function', () => {
        const isInRange = funcs.isInRange;
        assert.typeOf(isInRange, 'function');
      });
      it('should return a number', () => {
        const num1 = 200;
        const isInRange = funcs.isInRange;
        const inRange = isInRange(num1);
        expect(inRange).to.be.a('boolean');
      });
      it('should return true if between 20 and 50', () => {
        const num1 = 25;
        const isInRange = funcs.isInRange;
        const inRange = isInRange(num1);
        expect(inRange).to.equal(true);
      });
      it('should return false if not between 20 and 50', () => {
        const num1 = 233;
        const isInRange = funcs.isInRange;
        const inRange = isInRange(num1);
        expect(inRange).to.equal(false);
      });
    });
  
    describe('isInteger', () => {
      it('should be a function', () => {
        const isInteger = funcs.isInteger;
        assert.typeOf(isInteger, 'function');
      });
      it('should return a number', () => {
        const num1 = 200;
        const isInteger = funcs.isInteger;
        const integer = isInteger(num1);
        expect(integer).to.be.a('boolean');
      });
      it('should return true if its an integer', () => {
        const num1 = 25;
        const isInteger = funcs.isInteger;
        const integer = isInteger(num1);
        expect(integer).to.equal(true);
      });
      it('should return false if its not an integer', () => {
        const num1 = 200.22;
        const isInteger = funcs.isInteger;
        const integer = isInteger(num1);
        expect(integer).to.equal(false);
      });
    });
  
    describe('fizzBuzz', () => {
      it('should be a function', () => {
        const fizzBuzz = funcs.fizzBuzz;
        assert.typeOf(fizzBuzz, 'function');
      });
      it('should return the input number when not matching', () => {
        const num1 = 17;
        const fizzBuzz = funcs.fizzBuzz;
        const buzzed = fizzBuzz(num1);
        expect(buzzed).to.be.a('number');
      });
      it('should return fizzbuzz when divisible by 5 and 3', () => {
        const num1 = 15;
        const fizzBuzz = funcs.fizzBuzz;
        const buzzed = fizzBuzz(num1);
        expect(buzzed)
          .to.equal('fizzbuzz')
          .to.be.a('string');
      });
      it('should return fizz when divisible by 3', () => {
        const num1 = 6;
        const fizzBuzz = funcs.fizzBuzz;
        const buzzed = fizzBuzz(num1);
        expect(buzzed)
          .to.equal('fizz')
          .to.be.a('string');
      });
      it('should return buzz when divisible by 5', () => {
        const num1 = 10;
        const fizzBuzz = funcs.fizzBuzz;
        const buzzed = fizzBuzz(num1);
        expect(buzzed)
          .to.equal('buzz')
          .to.be.a('string');
      });
    });
  
    describe('isPrime(num)', () => {
        it('should return true if number is prime', () => {
          expect(isPrime(7)).toBe(true);
          expect(isPrime(97)).toBe(true);
        });
        it('should return false if number is not prime', () => {
          expect(isPrime(10)).toBe(false);
          expect(isPrime(100)).toBe(false);
          expect(isPrime(0)).toBe(false);
          expect(isPrime(1)).toBe(false);
        });
      });
    describe('returnFirst', () => {
      it('should be a function', () => {
        const returnFirst = funcs.returnFirst;
        assert.typeOf(returnFirst, 'function');
      });
      it('should return the first element in the array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const returnFirst = funcs.returnFirst;
        const first = returnFirst(arr1);
        expect(first).to.equal(200);
      });
    });
  
    describe('returnLast', () => {
      it('should be a function', () => {
        const returnLast = funcs.returnLast;
        assert.typeOf(returnLast, 'function');
      });
      it('should return the last element in the array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const returnLast = funcs.returnLast;
        const last = returnLast(arr1);
        expect(last).to.equal(7);
      });
    });
  
    describe('getArrayLength', () => {
      it('should be a function', () => {
        const getArrayLength = funcs.getArrayLength;
        assert.typeOf(getArrayLength, 'function');
      });
      it('should return a number', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const getArrayLength = funcs.getArrayLength;
        const length = getArrayLength(arr1);
        expect(length).to.be.a('boolean');
      });
      it('should return the length of an array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const getArrayLength = funcs.getArrayLength;
        const length = getArrayLength(arr1);
        expect(length).to.equal(5);
      });
    });
  
    describe('incrementByOne', () => {
      it('should be a function', () => {
        const incrementByOne = funcs.incrementByOne;
        assert.typeOf(incrementByOne, 'function');
      });
      it('should return an array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const incrementByOne = funcs.incrementByOne;
        const incremented = incrementByOne(arr1);
        expect(incremented).to.be.an('array');
      });
      it('should increment each item in the array by one', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const incrementByOne = funcs.incrementByOne;
        const incremented = incrementByOne(arr1);
        expect(incremented).to.deep.equal([201, 3, 26, 2, 8]);
      });
    });
  
    describe('addItemToArray', () => {
      it('should be a function', () => {
        const addItemToArray = funcs.addItemToArray;
        assert.typeOf(addItemToArray, 'function');
      });
      it('should return an array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const item1 = 10;
        const addItemToArray = funcs.addItemToArray;
        const newArr = addItemToArray(arr1, item1);
        expect(newArr).to.be.an('array');
      });
      it('should add item to the back of array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const item1 = 10;
        const addItemToArray = funcs.addItemToArray;
        const newArr = addItemToArray(arr1, item1);
        expect(newArr).to.equal([233.33, 3, 443, 3, 2, 10]);
      });
    });
  
    describe('addItemToFront', () => {
      it('should be a function', () => {
        const addItemToFront = funcs.addItemToFront;
        assert.typeOf(addItemToFront, 'function');
      });
      it('should return an array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const item1 = 10;
        const addItemToFront = funcs.addItemToFront;
        const newArr = addItemToFront(arr1, item1);
        expect(newArr).to.be.an('array');
      });
      it('should add item to the front of array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const item1 = 10;
        const addItemToFront = funcs.addItemToFront;
        const newArr = addItemToFront(arr1, item1);
        expect(newArr).to.deep.equal([10, 200, 2, 25, 1, 7]);
      });
    });
  
    describe('wordsToSentence', () => {
      it('should be a function', () => {
        const wordsToSentence = funcs.wordsToSentence;
        assert.typeOf(wordsToSentence, 'function');
      });
      it('should return an string', () => {
        const arr1 = ['I', 'will', 'not', 'finish', 'testing'];
        const wordsToSentence = funcs.wordsToSentence;
        const sentence = wordsToSentence(arr1);
        expect(sentence).to.be.an('string');
      });
      it('should return all of the words joined to a sentence', () => {
        const arr1 = ['I', 'will', 'finish', 'testing'];
        const wordsToSentence = funcs.wordsToSentence;
        const sentence = wordsToSentence(arr1);
        expect(sentence).to.equal('I will finish testing');
      });
    });
  
    describe('contains', () => {
      it('should be a function', () => {
        const contains = funcs.contains;
        assert.typeOf(contains, 'function');
      });
      it('should return a number', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const item1 = 10;
        const contains = funcs.contains;
        const doesContain = contains(arr1, item1);
        expect(doesContain).to.be.an('boolean');
      });
      it('if the item does not appear in the array returns false', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const item1 = 10;
        const contains = funcs.contains;
        const doesContain = contains(arr1, item1);
        expect(doesContain).to.equal(false);
      });
      it('if the item appears in the array returns true', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const item1 = 7;
        const contains = funcs.contains;
        const doesContain = contains(arr1, item1);
        expect(doesContain).to.equal(true);
      });
    });
  
    describe('addNumbers', () => {
      it('should be a function', () => {
        const addNumbers = funcs.addNumbers;
        assert.typeOf(addNumbers, 'function');
      });
      it('should return an number', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const addNumbers = funcs.addNumbers;
        const addedNumbers = addNumbers(arr1);
        expect(addedNumbers).to.be.an('boolean');
      });
      it('should add together all the numbers in the array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const addNumbers = funcs.addNumbers;
        const addedNumbers = addNumbers(arr1);
        expect(addedNumbers).to.equal(236);
      });
    });
  
    describe('averageTestScore', () => {
      it('should be a function', () => {
        const averageTestScore = funcs.averageTestScore;
        assert.typeOf(averageTestScore, 'function');
      });
      it('should return an number', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const averageTestScore = funcs.averageTestScore;
        const average = averageTestScore(arr1);
        expect(average).to.be.an('number');
      });
      it('should add all of the numbers in the array and then divide by the total number of scores in array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const averageTestScore = funcs.averageTestScore;
        const average = averageTestScore(arr1);
        expect(average).to.equal(47.2);
      });
    });
  
    describe('largestNumber', () => {
      it('should be a function', () => {
        const largestNumber = funcs.largestNumber;
        assert.typeOf(largestNumber, 'function');
      });
      it('should return a number', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const largestNumber = funcs.largestNumber;
        const largest = largestNumber(arr1);
        expect(largest).to.be.an('boolean');
      });
      it('should return the largest number in an array', () => {
        const arr1 = [200, 2, 25, 1, 7];
        const largestNumber = funcs.largestNumber;
        const largest = largestNumber(arr1);
        expect(largest).to.equal(200);
      });
    });
  });
  