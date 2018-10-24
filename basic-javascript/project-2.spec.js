const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
test('should run tests', () => {});

describe('project-1.js', () => {    
    describe('getBiggest', () => {
	it('should get biggest number', () => {
	    const expected = 11;
	    const actual = funcs.getBiggest(11, 10);
	    expect(actual).toEqual(expected);
	});

	it('should get biggest number', () => {
	    const expected = 10;
	    const actual = funcs.getBiggest(10, 10);
	    expect(actual).toEqual(expected);
	});
    });

    //unfinished
    describe('greeting', () => {
	it('should greet', () => {
	    const expected = 'Hello!';
	    const actual = funcs.greeting();
	    expect(funcs.greeting('German')).toBe('Guten Tag!');
	});
    });

    describe('isTenOrFive', () => {
	it('should check if 10 or 5', () => {
	    const expected = true;
	    const actual = funcs.isTenOrFive(5);
	    expect(actual).toEqual(expected);
	});
	it('should check if 10 or 5', () => {
	    const expected = false;
	    const actual = funcs.isTenOrFive(6);
	    expect(actual).toEqual(expected);
	});
    });

    describe('isInRange', () => {
	it('should check if it\'s in range', () => {
	    const expected = true;
	    const actual = funcs.isInRange(40);
	    expect(actual).toEqual(expected);
	});
		it('should check if it\'s in range', () => {
	    const expected = false;
	    const actual = funcs.isInRange(4);
	    expect(actual).toEqual(expected);
	});
    });

    describe('isInteger', () => {
	it('should check if it\'s an integer', () => {
	    const expected = true;
	    const actual = funcs.isInteger(4);
	    expect(actual).toEqual(expected);
	});
	it('should check if it\'s an integer', () => {
	    const expected = false;
	    const actual = funcs.isInteger(4.5);
	    expect(actual).toEqual(expected);
	});
    });

    describe('fizzBuzz', () => {
	it('should return fizz', () => {
	    const expected = 'fizz';
	    const actual = funcs.fizzBuzz(9);
	    expect(actual).toEqual(expected);
	});
	it('should return buzz', () => {
	    const expected = 'buzz';
	    const actual = funcs.fizzBuzz(25);
	    expect(actual).toEqual(expected);
	});
	it('should return fizzbuzz', () => {
	    const expected = 'fizzbuzz';
	    const actual = funcs.fizzBuzz(15);
	    expect(actual).toEqual(expected);
	});
    });
    
    describe('isPrime', () => {
	it('should return false', () => {
	    const expected = false;
	    const actual = funcs.isPrime(-9);
	    expect(actual).toEqual(expected);
	});
	it('should return false', () => {
	    const expected = false;
	    const actual = funcs.isPrime(1);
	    expect(actual).toEqual(expected);
	});
	it('should return false', () => {
	    const expected = false;
	    const actual = funcs.isPrime(15);
	    expect(actual).toEqual(expected);
	});
	it('should return true', () => {
	    const expected = true;
	    const actual = funcs.isPrime(5);
	    expect(actual).toEqual(expected);
	});
    });
        
    describe('returnFirst', () => {
	it('should return first', () => {
	    const arr = ['a', 'b'];
	    const expected = 'a';
	    const actual = funcs.returnFirst(arr);
	    expect(actual).toEqual(expected);
	});
    });

    describe('returnLast', () => {
	it('should return first', () => {
	    const arr = ['a', 'b'];
	    const expected = 'b';
	    const actual = funcs.returnLast(arr);
	    expect(actual).toEqual(expected);
	});
    });

    describe('returnLast', () => {
	it('should return first', () => {
	    const arr = ['a', 'b'];
	    const expected = 'b';
	    const actual = funcs.returnLast(arr);
	    expect(actual).toEqual(expected);
	});
    });

    describe('getArrayLength', () => {
	it('should return first', () => {
	    const arr = ['a', 'b'];
	    const expected = 2;
	    const actual = funcs.getArrayLength(arr);
	    expect(actual).toEqual(expected);
	});
    });

    describe('incrementByOne', () => {
	it('should return first', () => {
	    const arr = [1, 2];
	    const expected = [2, 3];
	    const actual = funcs.incrementByOne(arr);
	    expect(actual).toEqual(expected);
	});
    });

    describe('incrementByOne', () => {
	it('should return first', () => {
	    const arr = [1, 2];
	    const expected = [2, 3];
	    const actual = funcs.incrementByOne(arr);
	    expect(actual).toEqual(expected);
	});
    });

    describe('addItemToArray', () => {
	it('should return 1 2 3', () => {
	    const arr = [1, 2];
	    const item = 3;
	    const expected = [1, 2, 3];
	    const actual = funcs.addItemToArray(arr, item);
	    expect(actual).toEqual(expected);
	});
    });
    
    describe('addItemToFront', () => {
	it('should return last item first', () => {
	    const arr = [1, 2];
	    const item = 3;
	    const expected = [3, 1, 2];
	    const actual = funcs.addItemToFront(arr, item);
	    expect(actual).toEqual(expected);
	});
    });

    describe('wordsToSentence', () => {
	it('should return sentence', () => {
	    const arr = ['Hello', 'there!'];
	    const expected = 'Hello there!';
	    const actual = funcs.wordsToSentence(arr);
	    expect(actual).toEqual(expected);
	});
    });

    describe('contains', () => {
    	it('should return true', () => {
    	    const arr = [1, 2];
	    const item = 2;
    	    const expected = true;
    	    const actual = funcs.contains(arr, 2);
    	    expect(actual).toEqual(expected);
    	});
	it('should return false', () => {
    	    const arr = [1, 2];
	    const item = 3;
    	    const expected = false;
    	    const actual = funcs.contains(arr, 5);
    	    expect(actual).toEqual(expected);
    	});
    });

    describe('addNumbers', () => {
	it('should return added values', () => {
	    const numbers = [3, 4];
	    const expected = 7;
	    const actual = funcs.addNumbers(numbers);
	    expect(actual).toEqual(expected);
	});
    });

    describe('averageTestScore', () => {
	it('should return average score', () => {
	    const totalSumScores = [3, 4];
	    const expected = 3.5;
	    const actual = funcs.averageTestScore(totalSumScores);
	    expect(actual).toEqual(expected);
	});
    });

    describe('largestNumber', () => {
	it('should return average score', () => {
	    const totalSumScores = [3, 4];
	    const expected = 4;
	    const actual = funcs.largestNumber(totalSumScores);
	    expect(actual).toEqual(expected);
	});
    });
});
