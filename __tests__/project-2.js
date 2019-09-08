const p2functions = require('../basic-javascript/project-2');

// describe('Should concatenate words into a sentence', () => {
//     it('It should be called with an array', () => {
//         expect(p2functions.wordsToSentence)
//         .toHaveBeenCalledWith(expect.any(Array));
//     });
//     it('It should return', () => {
//         const sentence = p2functions.wordsToSentence(['Hello', 'me', 'hungry']);
//         expect(sentence).toBe('Hello me hungry');
//     })
// });

//----------------------------------------------------------------------------------
it('getBiggest', () => {
    //arrange
    const getBiggest = p2functions.getBiggest;
    //act
    const test1 = getBiggest(10,20);
    const test2 = getBiggest(20,10);
    const test3 = getBiggest(10,10);
    //assert
    expect(test1).toBe(20);
    expect(test2).toBe(20);
    expect(test3).toBe(10);
    });

//----------------------------------------------------------------------------------
it('greeting', () => {
    //arrange
    const greeting = p2functions.greeting;
    //act
    const test1 = greeting('German');
    const test2 = greeting('Spanish');
    const test3 = greeting('');
    //assert
    expect(test1).toBe('Guten Tag!');
    expect(test2).toBe('Hola!');
    expect(test3).toBe('Hello!');
    });

//----------------------------------------------------------------------------------
it('isTenOrFive', () => {
    //arrange
    const isTenOrFive = p2functions.isTenOrFive;
    //act
    const test1 = isTenOrFive(10);
    const test2 = isTenOrFive(0);
    const test3 = isTenOrFive(2);
    //assert
    expect(test1).toBe(true);
    expect(test2).toBe(false);
    expect(test3).toBe(false);
    });
    

//-------------------------------------------------------------------------------------
//I'm going to start testing inputs here, so like types of inputs
// //----------------------------------------------------------------------------------
it('isInRange', () => {
    //arrange
    const isInRange = p2functions.isInRange;
    //act
    const test1 = isInRange(49);
    const test2 = isInRange(20);

    // const test3 = isInRange(10);

    //assert
    expect(test1).toBe(true);
    expect(test2).toEqual(expect.any(Boolean));
    // expect(test3).toBeCalledWith(expect.any(number));
    // says that this needs a mock or a spy
    });
    

// //----------------------------------------------------------------------------------
it('isInteger', () => {
    //arrange
    const isInteger = p2functions.isInteger;
    //act
    const test1 = isInteger(10);
    const test2 = isInteger(20);
    const test3 = isInteger(0.001);
    //assert
    expect(test1).toBe(true);
    expect(test2).toEqual(expect.any(Boolean));
    expect(test3).toBe(false);
    });

// //----------------------------------------------------------------------------------
// it('fizzBuzz', () => {
//     //arrange
//     const fizzBuzz = p2functions.fizzBuzz;

//     // function randocall(fn) {
//     //     return fn(Math.floor(Math.random() * 6 + 1));
//     //   }
      
//     //   test('randocall calls its callback with a number', () => {
//     //     const mock = jest.fn();
//     //     randocall(mock);
//     //     expect(mock).toBeCalledWith(expect.any(Number));
//     //   }); 

//     //act
//     const test1 = fizzBuzz(0.1); //num
//     const test2 = fizzBuzz(15); //fizzbuzz
//     const test3 = fizzBuzz(5); //buzz
//     const test4 = fizzBuzz(3); //fizz
//     const test5 = fizzBuzz(5);
//     const test6 = fizzBuzz(15);

//     //assert
//     expect(test1).toBe(0.1);
//     expect(test2).toBe('fizzbuzz');
//     expect(test3).toBe('buzz');
//     expect(test4).toBe('fizz');
//     expect(test5).toEqual(expect.any(String));
//     expect(test6).toHaveBeenCalledWith(expect.any(Number));
//     });      //or.toBeCalledWith??

// //From here on on this file, I'm just going to type what tests to run for each

// //----------------------------------------------------------------------------------
// it('isPrime', () => {
//     //arrange
//     const isPrime = p2functions.isPrime;
//     //act
//     const test1 = isPrime(10,20);
//     const test2 = isPrime(20,10);
//     const test3 = isPrime(10,10);
//     //assert
//     expect(test1).toBe(20);
//     expect(test2).toBe(20);
//     expect(test3).toBe(10);
//     });

//run type check for input and boolean check for output
//run test with num = -1, 0, 3

// //----------------------------------------------------------------------------------
// it('returnFirst', () => {
//     //arrange
//     const returnFirst = p2functions.returnFirst;
//     //act
//     const test1 = returnFirst(10,20);
//     const test2 = returnFirst(20,10);
//     const test3 = returnFirst(10,10);
//     //assert
//     expect(test1).toBe(20);
//     expect(test2).toBe(20);
//     expect(test3).toBe(10);
//     });

//run typecheck for input and output for array 
//run test with arr = [1,2,3]

// //----------------------------------------------------------------------------------
// it('returnLast', () => {
//     //arrange
//     const returnLast = p2functions.returnLast;
//     //act
//     const test1 = returnLast(10,20);
//     const test2 = returnLast(20,10);
//     const test3 = returnLast(10,10);
//     //assert
//     expect(test1).toBe(20);
//     expect(test2).toBe(20);
//     expect(test3).toBe(10);
//     });

//run typecheck for input and output for array 
//run test with arr = [1,2,3]

// //----------------------------------------------------------------------------------
// it('getArrayLength', () => {
//     //arrange
//     const getArrayLength = p2functions.getArrayLength;
//     //act
//     const test1 = getArrayLength(10,20);
//     const test2 = getArrayLength(20,10);
//     const test3 = getArrayLength(10,10);
//     //assert
//     expect(test1).toBe(20);
//     expect(test2).toBe(20);
//     expect(test3).toBe(10);
//     });

//typecheck input: array, typecheck output: number
//run with [somearray] as parameter

// //----------------------------------------------------------------------------------
// it('incrementByOne', () => {
//     //arrange
//     const incrementByOne = p2functions.incrementByOne;
//     //act
//     const test1 = incrementByOne(10,20);
//     const test2 = incrementByOne(20,10);
//     const test3 = incrementByOne(10,10);
//     //assert
//     expect(test1).toBe(20);
//     expect(test2).toBe(20);
//     expect(test3).toBe(10);
//     });

//typecheck input: array(withnumbers), typecheck output: array
//failcheck input: array(withwords)
//successcheck: run with [somearray] with number items

// //----------------------------------------------------------------------------------
// it('addItemToArray', () => {
//     //arrange
//     const addItemToArray = p2functions.addItemToArray;
//     //act
//     const test1 = addItemToArray(10,20);
//     const test2 = addItemToArray(20,10);
//     const test3 = addItemToArray(10,10);
//     //assert
//     expect(test1).toBe(20);
//     expect(test2).toBe(20);
//     expect(test3).toBe(10);
//     });

//typecheck inputs: array, anything
// how to do type check for two parameters???
//successcheck: run with [somearray] with word items + 'string'


// //----------------------------------------------------------------------------------
// it('addItemToFront', () => {
//     //arrange
//     const addItemToFront = p2functions.addItemToFront;
//     //act
//     const test1 = addItemToFront(10,20);
//     const test2 = addItemToFront(20,10);
//     const test3 = addItemToFront(10,10);
//     //assert
//     expect(test1).toBe(20);
//     expect(test2).toBe(20);
//     expect(test3).toBe(10);
//     });

//typecheck inputs: array, anything
//successcheck: run with [somearray] with word items + 'string'

// //----------------------------------------------------------------------------------
// it('wordsToSentence', () => {
//     //arrange
//     const wordsToSentence = p2functions.wordsToSentence;
//     //act
//     const test1 = wordsToSentence(10,20);
//     const test2 = wordsToSentence(20,10);
//     const test3 = wordsToSentence(10,10);
//     //assert
//     expect(test1).toBe(20);
//     expect(test2).toBe(20);
//     expect(test3).toBe(10);
//     });

//typecheck inputs: array of strings
//typecheck outputs: string
//successcheck: run with [somearray] of strings

// //----------------------------------------------------------------------------------
describe('checks to see if an array contains any item', () => {
    it('contains', () => {
        //arrange
        const contains = p2functions.contains;
        let arr1 = [];
        let arr2 = [1,2,3]
        let item = 1;
        
        //act
        const test1 = contains(arr1, item); //false
        const test2 = contains(arr2, item); //true
        const test3 = contains(arr2, item); //boolean

        //assert
        expect(test1).toBe(false);
        expect(test2).toBe(true);
        expect(test3).toEqual(expect.any(Boolean));
        });
});

//need to still typecheck input for an array and 

// //----------------------------------------------------------------------------------
// describe('will add all numbers in array')
//     it('addNumbers', () => {
//         //arrange
//         const addNumbers = p2functions.addNumbers;
//         //act
//         const test1 = addNumbers(10,20);
//         const test2 = addNumbers(20,10);
//         const test3 = addNumbers(10,10);
//         //assert
//         expect(test1).toBe(20);
//         expect(test2).toBe(20);
//         expect(test3).toBe(10);
//         });

//hmmm... for here i want to typecheck the input making sure
//that it is an array of numbers
//successcheck: run with [array] of numbers
//typecheck: output number

// //----------------------------------------------------------------------------------
// it('averageTestScore', () => {
//     //arrange
//     const averageTestScore = p2functions.averageTestScore;
//     //act
//     const test1 = averageTestScore(10,20);
//     const test2 = averageTestScore(20,10);
//     const test3 = averageTestScore(10,10);
//     //assert
//     expect(test1).toBe(20);
//     expect(test2).toBe(20);
//     expect(test3).toBe(10);
//     });

//typecheck: input: [array] of numbers
//typecheck: output: number
//successcheck: [array] of numbers

// //----------------------------------------------------------------------------------
// it('largestNumber', () => {
//     //arrange
//     const largestNumber = p2functions.largestNumber;
//     //act
//     const test1 = largestNumber(10,20);
//     const test2 = largestNumber(20,10);
//     const test3 = largestNumber(10,10);
//     //assert
//     expect(test1).toBe(20);
//     expect(test2).toBe(20);
//     expect(test3).toBe(10);
//     });

//typecheck input: [array] of numbers
//typecheck output: number
//successcheck: run with [array] of numbers