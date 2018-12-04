const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

test('should run tests', () => {});

describe('project-1.js', () => {    
    describe('getBiggest', () => {
        it('should get the biggest number', () => {
            const expected = 10;
            const actual = funcs.getBiggest(10, 9)
            expect(actual).toEqual(expected);
        });

        it('should get the biggest number', () => {
            const expected = 10;
            const actual = funcs.getBiggest(10, 10)
            expect(actual).toEqual(expected);
        });
    });
    
    describe('greeting', () => {
        expect(funcs.greeting('German')).toBe('Guten Tag!');
        expect(funcs.greeting('Spanish')).toBe('Hola!');
        expect(funcs.greeting('English')).toBe('Hello!');
        expect(funcs.greeting()).toBe('Hello!');  
    });

    describe('isTenOrFive', () => {
        it('should check if 10 or 5', () => {
            const expected = true;
	        const actual = funcs.isTenOrFive(10);
            expect(actual).toEqual(expected);
        });

        it('should check if 10 or 5', () => {
            const expected = false;
	        const actual = funcs.isTenOrFive(4);
            expect(actual).toEqual(expected);
        });
    });

    describe('isInRange', () => {
        it('should check if it\'s in range', () => {
            const expected = true;
	        const actual = funcs.isInRange(30);
            expect(actual).toEqual(expected);
        });

        it('should check if it\'s in range', () => {
            const expected = false;
	        const actual = funcs.isInRange(19);
            expect(actual).toEqual(expected);
        });
    });

    describe('isInteger', () => {
        it('should check to see if it is an integer', () => {
            const expected = true;
            const actual = funcs.isInteger(10)
            expect(actual).toEqual(expected);
        });

        it('should check to see if it is an integer', () => {
            const expected = false;
            const actual = funcs.isInteger(10.5)
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
            const actual = funcs.isPrime(-3);
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

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });

    // describe('getBiggest', () => {
    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 9)
    //         expect(actual).toEqual(expected);
    //     });

    //     it('should get the biggest number', () => {
    //         const expected = 10;
    //         const actual = funcs.getBiggest(10, 10)
    //         expect(actual).toEqual(expected);
    //     });
    // });
});