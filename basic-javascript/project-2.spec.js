const funcs = require('./project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

// default
describe('default', () => {
    it('runs the test', () => {})
});

// getBiggest
describe('getBiggest', () => {
    it('returns the greater number between x and y', () => {
        // arrange
        const getBiggest = funcs.getBiggest;

        // act
        const actual = getBiggest(4, 7);

        // assert
        expect(actual).toBeGreaterThan(4);
    })
})

// // greeting
// describe('greeting', () => {
//     it('should return a German greeting', () => {
//         // arrange
//         const greeting = funcs.greeting;

//         // act
//         const actual = greeting('German');

//         // assert
//         expect(actual).toBe('Guten Tag!')
//     })
//     it('should return a Spanish greeting', () => {
//         // arrange
//         const greeting = funcs.greeting;

//         // act
//         const actual = greeting('Spanish');

//         // assert
//         expect(actual).toBe('Hola!')
//     })
//     it('should return a English greeting', () => {
//         // arrange
//         const greeting = funcs.greeting;

//         // act
//         const actual = greeting('English');

//         // assert
//         expect(actual).toBe('Hello!')
//     })
// })

describe('greeting', () => {
    it('should check all the language greeting', () => {
      const getGreeting = funcs.greeting
  
      const german = getGreeting('German');
      const spanish = getGreeting('Spanish')
      const noLang = getGreeting();
  
      expect(german).toBe('Guten Tag!');
      expect(spanish).toBe('Hola!');
      expect(noLang).toBe('Hello!');
    })
})

describe('isTenOrFive', () => {
    it('checks if number is 10 or a 5', () => {
        // arrange
        const isTenOrFive = funcs.isTenOrFive;
        const expected = true;

        // act
        const actual = isTenOrFive(5)

        // assert 
        expect(actual).toBe(expected)
    })
})