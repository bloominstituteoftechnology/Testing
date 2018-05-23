const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/


describe('return biggest number', () => {
    it('Should compare and return the bigger number of the two', () => {
        //arange
        const bigger = funcs.getBiggest;
        //act
        const A = 3;
        const B = 5;
        const bigProd = bigger(A,B);
        //assert
        expect(bigProd).toBeGreaterThan(A);

    });

});
describe('return greet', () => {
    it('Should return a greeting in the language entered.Selection: German, Spanish, default is English', () => {
        //arange
        const greet = funcs.greeting;
        const gcall = (string) => {
            if (string === 'German') {
                expect(greetPrompt).toBe('Guten Tag!') 
            } else if (string === 'Spanish') {
                expect(greetPrompt).toBe('Hola!') 
            } else {
                expect(greetPrompt).toBe('Hello!')
            }
        }
        //act
        const A = 'German';
        const B = 'Spanish';
        let greetPrompt;
        // const greetPrompt = greet(B);
        // gcall(A);
        const laguage = (lang) => {
            greetPrompt = greet(lang);
            gcall(lang)
        }
        laguage(B)
      
    });

});

describe('is ten or five ', () => {
    it('Should return true or false if value is 5 or 10 ', () => {
        //arange
        const tenorFive = funcs.isTenOrFive;

        //act
        const A = 5;
        const B = 10;
        const tfprod = tenorFive(A);
        //assert
        expect(tfprod).toEqual(true)


    });

});

describe('number is within range', () => {
    it('Should return true if number is between 50 and 20', () => {
        //arange
        const range = funcs.isInRange;
        //act
        const A = 3;
        const B = 21;
        const rprod = range(B)

        //assert
        expect(rprod).toBe(true)

    });

});

describe('input is an integer', () => {
    it('Should return true if input is an integer ', () => {
        //arange
        const integer = funcs.isInteger;
        //act
        const A = 2;
        const intProd = integer(A);
        //assert
        expect(intProd).toBe(true)
    });
});

describe('fizzbuzz', () => {
    it('Should return fizzbuzz, buzz or fizz if num is divisible by 5, 3 or both', () => {
        //arange
        const fizzfunc = funcs.fizzBuzz;
        //act
        const A = 1;
        const B = 15;
        let fprod;       
        //assert        
        const evaluate = (num) => {
            if (num % 5 === 0 && num % 3 === 0) {
                expect(fprod).toBe('fizzbuzz')
              } else if (num % 5 === 0) {
                expect(fprod).toBe('buzz')
              } else if (num % 3 === 0) {
                expect(fprod).toBe('fizz')
              }
              return num;
        }
        const callFizz = (num) => {
            fprod = fizzfunc(num);
            evaluate(num);

        }
        callFizz(B)

    });

});

describe('return true if prime', () => {
    it('Should return true if the number is a prime', () => {
        //arange
        const prime = funcs.isPrime;
        
        //act
        const A = 3;
        const B = 5;
        const pProd = prime(A);
        //assert
        expect(pProd).toBe(true);

    });

});

describe('return first value of array', () => {
    it('Should return the value at index 0 of an array ', () => {
        //arange
        const fvalue = funcs.returnFirst;
        //act
        const arr = [3,5,7];
        const fprod = fvalue(arr);

        //assert
        expect(fprod).toEqual(3)

    });

});
describe('return last value of array ', () => {
    it('Should return the value at the last index of the array', () => {
        //arange
        const lvalue = funcs.returnLast;
        //act
        const arr = [3,7,9];
        const lprod = lvalue(arr);

        //assert
        expect(lprod).toEqual(9);
    });
});

describe('return length of array', () => {
    it('Should return the length of the array', () => {
        //arange
        const lengthArr = funcs.getArrayLength;
        //act
        const A = [3,7,9,12];
        const lprod = lengthArr(A);

        //assert
        expect(lprod).toEqual(4);
    });
});

describe('increase array values by one', () => {
    it('Should increment the values of the array at each index', () => {
        //arange
        const increment = funcs.incrementByOne;
        //act
        const A = [2,5,7,12];
        const B = [3,6,8,13];
        const incProd = increment(A);

        //assert
        expect(incProd).toEqual(B);
    });
});

describe('add to array from back', () => {
    it('Should push new value to array, adding to array', () => {
        //arange
        const addTo = funcs.addItemToArray;
        //act
        const A = [3, 7, 9, 12, 15];
        const B = 7;
        const C = [3,7,9,12,15,7];
        const addProd = addTo(A, B);
        //assert
        expect(addProd).toEqual(C);
    });
});

describe('add to array from front', () => {
    it('Should unshift new value to array, adding to array', () => {
        //arange
        const addTo = funcs.addItemToFront;
        //act
        const A = [3, 7, 12, 9, 6];
        const B = 12;
        const c = [12,3,7,12,9,6];
        const addProd = addTo(A,B);
        //assert
        expect(addProd).toEqual(c)
    });
});

describe('array of words to sentence', () => {
    it('Should concatenate the string values of the array into one sentence', () => {
        //arange
        const arrToW = funcs.wordsToSentence;
        //act
        const A = ['Today', 'is Monday', 'the day way easy', 'kind of boring', 'lots of repetition']
        const B = 'Today is Monday the day way easy kind of boring lots of repetition';
        const aToWprod = arrToW(A);
        //assert
        expect(aToWprod).toEqual(B)
    });
});

describe('check if array contains passed value', () => {
    it('Should return true if the second argument passed matches any value on the array', () => {
        //arange
        const checkContent = funcs.contains;
        //act
        const A = [2,5,7,9,12,3];
        const B = 3;
        const checkProd = checkContent(A,B)
        //assert
        expect(checkProd).toBe(true)
    });

});
describe('add the individual values of the array', () => {
    it('Should return the net sum of all the values of the array', () => {
        //arange
        const addValues = funcs.addNumbers;
        //act
        const A = [3,2,5,7,9,12];
        const B = 3 + 2 + 5 + 7 + 9 + 12;
        const addProd = addValues(A);
        //assert
        expect(addProd).toEqual(B)
    });

});
describe('average value of array', () => {
    it(' ', () => {
        //arange
        const average = funcs.averageTestScore;
        //act
        const A = [3,2,5,7,9,12];
        const B = (3 + 2 + 5 + 7 + 9 + 12)/ 6;
        const avgProd = average(A);
        //assert
        expect(avgProd).toEqual(B);

    });

});
describe('return the biggest value of the array', () => {
    it('Should return the largest value in the array', () => {
        //arange
        const large = funcs.largestNumber;
        //act
        const A = [3,5,7,9,12];
        const B = 12;
        const largeProd = large(A);
        //assert
        expect(largeProd).toEqual(B)

    });

});
