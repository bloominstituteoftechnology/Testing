const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('project-2.js', () => {
    
    //TEST FOR FUNCTION ** getBiggest **
    describe('getBiggest', () => {
        it('should return biggest number out of two numbers', () => {
            const expected = 20;
            const actual = funcs.getBiggest(10, 20);
            expect(actual).toBe(expected);
        });
        
        it('should return null when any of arguments are not number', () => {
            expect(funcs.getBiggest({}, 'ty')).toBe(null)
            expect(funcs.getBiggest('s', [])).toBe(null)
            expect(funcs.getBiggest('s', 'ty')).toBe(null)
        })

        it('should return undefined when any of arguments is not entered..', () => {
            expect(funcs.getBiggest()).toBe(undefined);
            expect(funcs.getBiggest(20)).toBe(undefined)
        })
    });

    //TEST FOR FUNCTION ** greeting **
    describe('greeting', () => {
        it('should greet according to language entered..', () => {
            const expected = 'Guten Tag!';
            const actual = funcs.greeting('German');
            expect(actual).toBe(expected);
        });

        it('should return only Hello! if entered other language than GERMAN and SPANISH', () => {
            expect(funcs.greeting('English')).toBe('Hello!')
        });
    });

    //TEST FOR FUNCTION ** isTenOrFive **
    describe('isTenOrFive', () => {
        it('should return true if number 5 or 10', () => {
            const expected = true;
            const actual = funcs.isTenOrFive(10);
            expect(actual).toBe(expected);
        });
        
        it('should return false if number is not 5 or 10', () => {
            expect(funcs.isTenOrFive(9)).toBe(false);
        })

        it('should return undefined when any of arguments is not entered..', () => {
            expect(funcs.isTenOrFive()).toBe(undefined);
        })
    });

    //TEST FOR FUNCTION ** isInRange **
    describe('isInRange', () => {
        it('should return true if number < 50 ond > 20', () => {
            const expected = true;
            const actual = funcs.isInRange(40);
            expect(actual).toBe(expected);
        });
        
        it('should return false if number is not <50 and > 20', () => {
            expect(funcs.isInRange(80)).toBe(false);
        })

        it('should return undefined when any of arguments is not entered..', () => {
            expect(funcs.isInRange()).toBe(undefined);
        })
    });

    //TEST FOR FUNCTION ** isInRange **
    describe('isInteger', () => {
        it('should return true if number is integer', () => {
            const expected = true;
            const actual = funcs.isInteger(40);
            expect(actual).toBe(expected);
        });
        
        it('should return false if number is not integer', () => {
            expect(funcs.isInteger(80.5)).toBe(false);
        })

        it('should return undefined when any of arguments is not entered..', () => {
            expect(funcs.isInteger()).toBe(undefined);
        })
    });

    //TEST FOR FUNCTION ** fizzBuzz **
    describe('fizzBuzz', () => {
        it('should return fizzbuzz if number is divisible by 5 and 3', () => {
            const expected = 'fizzbuzz';
            const actual = funcs.fizzBuzz(15);
            expect(actual).toBe(expected);
        });
        
        it('should return buzz if number is divisible by 5 only', () => {
            expect(funcs.fizzBuzz(50)).toBe('buzz');
        })

        it('should return buzz if number is divisible by 3 only', () => {
            expect(funcs.fizzBuzz(6)).toBe('fizz');
        })
    });

    //TEST FOR FUNCTION ** isPrime **
    describe('isInteger', () => {
        it('should return true if number is prime', () => {
            const expected = true;
            const actual = funcs.isPrime(17);
            expect(actual).toBe(expected);
        });
        
        it('should return false if number is not prime', () => {
            expect(funcs.isPrime(80)).toBe(false);
        })

        it('should return false if number is less than 2', () => {
            expect(funcs.isPrime(0)).toBe(false);
            expect(funcs.isPrime(1)).toBe(false);
            //expect(funcs.isPrime(0.3)).toBe(false);
        })
    });

    //TEST FOR FUNCTION ** returnFirst **
    describe('isInteger', () => {
        it('should return first element of given array..', () => {
            const expected = 10;
            const actual = funcs.returnFirst([10,20,30]);
            expect(actual).toBe(expected);
        });
        
        it('should return null if given is not an array', () => {
            expect(funcs.returnFirst(80)).toBe(null);
        })

        it('should return undefined if given array is empty', () => {
            expect(funcs.returnFirst([])).toBe(undefined);
        })
    });

    //TEST FOR FUNCTION ** returnLast **
    describe('isInteger', () => {
        it('should return first element of given array..', () => {
            const expected = 30;
            const actual = funcs.returnLast([10,20,30]);
            expect(actual).toBe(expected);
        });
        
        it('should return null if given is not an array', () => {
            expect(funcs.returnLast(80)).toBe(null);
        })

        it('should return undefined if given array is empty', () => {
            expect(funcs.returnLast([])).toBe(undefined);
        })
    });
    
    //TEST FOR FUNCTION ** getArrayLength **
    describe('isInteger', () => {
        it('should return lat element of given array..', () => {
            const expected = 3;
            const actual = funcs.getArrayLength([10,20,30]);
            expect(actual).toBe(expected);
        });
        
        it('should return null if given is not an array', () => {
            expect(funcs.getArrayLength(80)).toBe(null);
        })
    });
    
    //TEST FOR FUNCTION ** incrementByOne **
    describe('isInteger', () => {
        it('should return array with all element incremented by one .', () => {
            const expected = [11, 21, 31];
           //console.log(expected);
            const actual = funcs.incrementByOne([10, 20, 30]);
            //console.log(actual);
            expect(actual).toEqual(expected);
        });
        
        it('should return null if given is not an array', () => {
            expect(funcs.incrementByOne(80)).toBe(null);
        })

        it('should return undefined if given array is empty', () => {
            expect(funcs.incrementByOne([])).toBe(undefined);
        })
    });

    //TEST FOR FUNCTION ** addItemToArray **
    describe('addItemToArray', () => {
        it('should add given item to array at the end..', () => {
            const expected = [10, 20, 30, "abc"];
            const actual = funcs.addItemToArray([10, 20, 30], "abc");
            expect(actual).toEqual(expected);
        });
    });

    //TEST FOR FUNCTION ** addItemToFront **
    describe('addItemToFront', () => {
        it('should add given item to array at the front..', () => {
            const expected = ["abc", 10, 20, 30];
            const actual = funcs.addItemToFront([10, 20, 30], "abc");
            expect(actual).toEqual(expected);
        });
    });
    
    //TEST FOR FUNCTION ** wordsToSentence **
    describe('wordsToSentence', () => {
	    it('should return sentence', () => {
	        const arr = ['Hello', 'World!'];
	        const expected = 'Hello World!';
	        const actual = funcs.wordsToSentence(arr);
	        expect(actual).toEqual(expected);
	    });
    });
    
    //TEST FOR FUNCTION ** contains **
    describe('contains', () => {
    	it('should return true', () => {
    	    const arr = [10,20,25];
	        const item = 25;
    	    const expected = true;
    	    const actual = funcs.contains(arr, item);
    	    expect(actual).toEqual(expected);
    	});
    
        it('should return false', () => {
    	    const arr = [10,20];
	        const item = 25;
    	    const expected = false;
    	    const actual = funcs.contains(arr, item);
    	    expect(actual).toEqual(expected);
    	});
    });
    
    //TEST FOR FUNCTION ** addNumbers **
    describe('addNumbers', () => {
        it('should return added values', () => {
            const numbers = [10, 10, 10];
            const expected = 30;
            const actual = funcs.addNumbers(numbers);
            expect(actual).toEqual(expected);
        });
    });

    //TEST FOR FUNCTION ** averageTestScore **
    describe('averageTestScore', () => {
        it('should return average score', () => {
            const totalSumScores = [10, 10];
            const expected = 10;
            const actual = funcs.averageTestScore(totalSumScores);
            expect(actual).toEqual(expected);
        });
    });
    
    //TEST FOR FUNCTION ** largestNumber **
    describe('largestNumber', () => {
	    it('should return average score', () => {
	        const totalSumScores = [10,20,30,40,50];
	        const expected = 50;
	        const actual = funcs.largestNumber(totalSumScores);
	        expect(actual).toEqual(expected);
	    });
    });

});

