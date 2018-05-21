const funcs = require('./project-1');

// write your tests here

describe('default', () => {
    it('run the tests', () => {});
});

describe('times 10 function', () => {             //PASSED
    it('should multiply a num by 10', () => {
        //arrange
        const multiplyByTen = funcs.multiplyByTen;

        // act
        const forty = multiplyByTen(4);

        //assert
        expect(forty).toBe(40);
    })
})

describe('minus 5 function', () => {       //PASSED
    it('should subtract 5 from a num', () => {
        //arrange
        const subtractFive = funcs.subtractFive;

        //act
        const twenty = subtractFive(25);

        //assert
        expect(twenty).toBe(20);
        
    })
})

describe('same length function', () => {        //PASSED
    it('should check for matching length values', () => {
        //arrange
        const areSameLength = funcs.areSameLength;

        //act
        const same = areSameLength('Hi', 'Yo');
        const different = areSameLength('Hi', 'Hello');

        //assert
        expect(same).toBe(true);
        expect(different).toBe(false);
    })
})

describe('are equal function', () => {      //PASSED
    it('should check for equal values', () => {
        //arrange
        const areEqual = funcs.areEqual;

        //act
        const equal = areEqual(2, 2);
        const notEqual = areEqual(4, 5);

        //assert
        expect(equal).toBe(true);
        expect(notEqual).toBe(false);
    })
})

describe('less than 90 function', () => {       //PASSED
    it('Should check if a num is less than 90', () => {
        //arrange
        const lessThanNinety = funcs.lessThanNinety;

        //act
        const lessThan = lessThanNinety(43);
        const greaterThan = lessThanNinety(99);

        //assert
        expect(lessThan).toBe(true);
        expect(greaterThan).toBe(false);
    })
})

describe('greater than 50 function', () => {        //PASSED
    it('Should check if a num is greater than 50', () => {
        //arrange
        const greaterThanFifty = funcs.greaterThanFifty;

        //act
        const greaterThan = greaterThanFifty(56);
        const lessThan = greaterThanFifty(35);

        //assert
        expect(lessThan).toBe(false);
        expect(greaterThan).toBe(true);
    })
})

describe('add', () => {        //PASSED
    it('Should add two numbers', () => {
        //arrange
        const add = funcs.add;

        //act
        const six = add(3, 3);

        //assert
        expect(six).toBe(6);
    })
})

describe('subtract function', () => {        //PASSED
    it('Should subtract two numbers', () => {
        //arrange
        const subtract = funcs.subtract;

        //act
        const six = subtract(9, 3);

        //assert
        expect(six).toBe(6);
    })
})

describe('divide function', () => {     //PASSED
    it('Should divide two numbers', () => {
        //arrange
        const divide = funcs.divide;

        //act
        const two = divide(12, 6);

        //assert
        expect(two).toBe(2);
    })
})

describe('multiply function', () => {       //PASSED
    it('should multiply two numbers', () => {
        //arrange
        const multiply = funcs.multiply;

        //act
        const sixty = multiply(6, 10);

        //assert
        expect(sixty).toBe(60);
    })
})

describe('get remainder function', () => {      //PASSED
    it('should return the remainder of 2 numbers', () => {
        //arrange
        const getRemainder = funcs.getRemainder;

        //act
        const one = getRemainder(7, 3);

        //assert
        expect(one).toBe(1);
    })
})

describe('isEven', () => {      //PASSED
    it('should check if a number is even or not', () => {
        //arrange
        const isEven = funcs.isEven;

        //act
        const even = isEven(6);
        const notEven = isEven(7);

        expect(even).toBe(true);
        expect(notEven).toBe(false);
    })
})

describe('is odd function', () => {     //PASSED
    it('should check if a number is odd or not', () => {
        //arrange
        const isOdd = funcs.isOdd;

        //act
        const odd = isOdd(3);
        const notOdd = isOdd(2);

        //assert
        expect(odd).toBe(true);
        expect(notOdd).toBe(false);
    })
})

describe('square function', () => {         //PASSED
    it('should square a number', () => {
        //arrange
        const square = funcs.square;

        //act
        const twentyFive = square(5);

        //assert
        expect(twentyFive).toBe(25);
    })
})

describe('cube function', () => {           //PASSED
    it('should cube a number', () => {
        //arrange
        const cube = funcs.cube;

        //act
        const eightThousand = cube(20);

        //assert
        expect(eightThousand).toBe(8000);
    })
})

describe('raise to power function', () => {     //PASSED
    it('should raise a given number, to a given power', () => {
        //arrange
        const raiseToPower = funcs.raiseToPower;

        //act
        const sixteenEightOhSeven = raiseToPower(7, 5);

        //assert
        expect(sixteenEightOhSeven).toBe(16807);
    })
})

describe('round number function', () => {      //PASSED
    it('should round a given number', () => {
        //arrange
        const roundNumber = funcs.roundNumber;

        //act
        const twenty = roundNumber(20.49);

        //assert 
        expect(twenty).toBe(20);
    })
})

describe('round up function', () => {       //PASSED
    it('should round a given number up', () => {
        //arrange
        const roundUp = funcs.roundUp;

        //act
        const five = roundUp(4.9);

        //assert
        expect(five).toBe(5);
    })
})

describe(' add ! function', () => {     //PASSED
    it('should add a ! character to end of string', () => {
        //arrange
        const addExclamationPoint = funcs.addExclamationPoint;

        //act
        const exclaimHey = addExclamationPoint('Hey');
        const exclaimWait = addExclamationPoint('Wait');

        //assert
        expect(exclaimHey).toBe('Hey!');
        expect(exclaimWait).toBe('Wait!');
    })
})

describe('combine names function', () => {      //PASSED
    it('Should combine first, and last names', () => {
        //arrange
        const combineNames = funcs.combineNames;

        //act
        const fullName = combineNames('John', 'Holmes');

        //assert
        expect(fullName).toBe('John Holmes');
    })
})

describe('get greeting function', () => {       //PASSED
    it('should return hello, along with the name and a !', () => {
        //arrange
        const getGreeting = funcs.getGreeting;

        //act
        const helloMatt = getGreeting('Matt');

        //assert
        expect(helloMatt).toBe('Hello Matt!');
    })
})

describe('get Rectangle Area function', () => {     //PASSED
    it('should return the length times the width', () => {
        //arrange
        const getRectangleArea = funcs.getRectangleArea;

        //act
        const twenty = getRectangleArea(2, 10);

        //assert
        expect(twenty).toBe(20);
    })
})

describe('get triangle area function', () => {     //PASSED
    it('should give us 0.5 times the base, times the height', () => {
        //arrange
        const getTriangleArea = funcs.getTriangleArea;

        //act
        const oneThirty = getTriangleArea(20, 13);

        expect(oneThirty).toBe(130);
    })
})

describe('get circle area function', () => {       //PASSED
    it('should give the area of a circle, given some data.', () => {
        //arrange
        const getCircleArea = funcs.getCircleArea;

        //act
        const area = getCircleArea(8);

        //assert
        expect(area).toBe(201.06192982974676);
    })
})

describe('get rectangular prism volume function', () => {   //PASED
    it('should return the volume of a rectangular prism', () => {
        //arrange
        const getRectangularPrismVolume = funcs.getRectangularPrismVolume;

        //act
        const seventyTwo = getRectangularPrismVolume(4, 3, 6);

        //assert
        expect(seventyTwo).toBe(72);
    })
})
