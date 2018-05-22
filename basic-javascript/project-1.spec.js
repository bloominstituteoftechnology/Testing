const funcs = require('./project-1');
// write your tests here

describe('default', () => {
    it('run the tests', () => { });
});

describe('projecct 1 testing', () => {
    it('should multiple by 10', () => {
        const multiplyByTen = funcs.multiplyByTen;

        const oneHundred = multiplyByTen(10);
        const oneFifty = multiplyByTen(15);
        const twenty = multiplyByTen(2);

        expect(oneHundred).toBe(100);
        expect(oneFifty).toBe(150);
        expect(twenty).toBe(20);
    });

    it('should subtract 5', () => {
        const subtractFive = funcs.subtractFive;

        const five = subtractFive(10);
        const ten = subtractFive(15);
        const twenty = subtractFive(25);

        expect(five).toBe(5);
        expect(ten).toBe(10);
        expect(twenty).toBe(20);
    });

    it('should checck if two strings have the same length', () => {
        const areSameLength = funcs.areSameLength;

        const city = "New York";
        const state = "New York";
        const country = "America";

        const istrue = areSameLength(city, state);
        const isfalse = areSameLength(city, country);
        const alsoTrue = areSameLength(state, city);

        expect(istrue).toBe(true);
        expect(isfalse).toBe(false);
        expect(alsoTrue).toBe(true);
    });

    it('should check if 2 nums are equal', () => {
        const areEqual = funcs.areEqual;

        const isequal = areEqual(10, 10);
        const notequal = areEqual(10, 100);
        const alsofalse = areEqual(10, '10');

        expect(isequal).toBe(true);
        expect(notequal).toBe(false);
        expect(alsofalse).toBe(false);
    });

    it('should be true for any value less than 90', () => {
        const lessThanNinety = funcs.lessThanNinety;

        const sixty = lessThanNinety(60);
        const twenty = lessThanNinety(20);
        const twoHundred = lessThanNinety(200);

        expect(sixty).toBe(true);
        expect(twenty).toBe(true);
        expect(twoHundred).toBe(false);
    });

    it('should be true for any value greater than 50', () => {
        const greaterThanFifty = funcs.greaterThanFifty;

        const sixty = greaterThanFifty(60);
        const twenty = greaterThanFifty(20);
        const twoHundred = greaterThanFifty(200);

        expect(sixty).toBe(true);
        expect(twenty).toBe(false);
        expect(twoHundred).toBe(true);
    });

    it('should return the value sum of 2 digits', () => {
        const add = funcs.add;

        const sixty = add(20, 40);
        const twenty = add(15, 5);
        const twoHundred = add(150, 50);

        expect(sixty).toBe(60);
        expect(twenty).toBe(20);
        expect(twoHundred).toBe(200);
    });

    it('should return the value difference of 2 digits', () => {
        const subtract = funcs.subtract;

        const sixty = subtract(80, 20);
        const twenty = subtract(25, 5);
        const twoHundred = subtract(250, 50);

        expect(sixty).toBe(60);
        expect(twenty).toBe(20);
        expect(twoHundred).toBe(200);
    });

    it('should return the value dividend of 2 digits', () => {
        const divide = funcs.divide;

        const sixty = divide(360, 6);
        const twenty = divide(100, 5);
        const twoHundred = divide(500, 2.5);

        expect(sixty).toBe(60);
        expect(twenty).toBe(20);
        expect(twoHundred).toBe(200);
    });

    it('should return the value product of 2 digits', () => {
        const multiply = funcs.multiply;

        const sixty = multiply(10, 6);
        const twenty = multiply(4, 5);
        const twoHundred = multiply(100, 2);

        expect(sixty).toBe(60);
        expect(twenty).toBe(20);
        expect(twoHundred).toBe(200);
    });

    it('should return the remainder of 2 digits', () => {
        const getRemainder = funcs.getRemainder;

        const four = getRemainder(10, 6);
        const one = getRemainder(5, 4);
        const zero = getRemainder(100, 2);

        expect(four).toBe(4);
        expect(one).toBe(1);
        expect(zero).toBe(0);
    });

    it('should check if a digit is even', () => {
        const isEven = funcs.isEven;

        const ten = isEven(10);
        const five = isEven(5);
        const hundred = isEven(100);

        expect(ten).toBe(true);
        expect(five).toBe(false);
        expect(hundred).toBe(true);
    });

    it('should check if a digit is odd', () => {
        const isOdd = funcs.isOdd;

        const ten = isOdd(10);
        const five = isOdd(5);
        const hundred = isOdd(100);

        expect(ten).toBe(false);
        expect(five).toBe(true);
        expect(hundred).toBe(false);
    });

    it('should return the squared number', () => {
        const square = funcs.square;

        const twentyFive = square(5);
        const fourtyNine = square(7);
        const hundred = square(10);

        expect(twentyFive).toBe(25);
        expect(fourtyNine).toBe(49);
        expect(hundred).toBe(100);
    });

    it('should return the cubed number', () => {
        const cube = funcs.cube;

        const eight = cube(2);
        const twentyseven = cube(3);
        const sixtyfour = cube(4);

        expect(eight).toBe(8);
        expect(twentyseven).toBe(27);
        expect(sixtyfour).toBe(64);
    });

    it('should return the number raised to the power given', () => {
        const raiseToPower = funcs.raiseToPower;

        const eight = raiseToPower(2, 3);
        const sixteen = raiseToPower(4, 2);
        const sixHundredTwentyFive = raiseToPower(5, 4);

        expect(eight).toBe(8);
        expect(sixteen).toBe(16);
        expect(sixHundredTwentyFive).toBe(625);
    });

    it('should return the number rounded to the nearest whole number', () => {
        const roundNumber = funcs.roundNumber;

        const eight = roundNumber(7.8);
        const sixteen = roundNumber(16.3);
        const four = roundNumber(4.4999999);

        expect(eight).toBe(8);
        expect(sixteen).toBe(16);
        expect(four).toBe(4);
    });

    it('should return the number rounded up', () => {
        const roundUp = funcs.roundUp;

        const eight = roundUp(7.8);
        const sixteen = roundUp(15.3);
        const four = roundUp(3.4999999);

        expect(eight).toBe(8);
        expect(sixteen).toBe(16);
        expect(four).toBe(4);
    });

    it('should return the string with an ! added on', () => {
        const addExclamationPoint = funcs.addExclamationPoint;

        const eight = addExclamationPoint(8);
        const sixteen = addExclamationPoint('16');
        const city = addExclamationPoint('new york');

        expect(eight).toBe('8!');
        expect(sixteen).toBe('16!');
        expect(city).toBe('new york!');
    });

    it('should return a string with the 2 given names combined', () => {
        const combineNames = funcs.combineNames;

        const justin = combineNames('Justin', 'Mathew');
        const jack = combineNames('jack', 'dawson');
        const jekm = combineNames('je', 'km');

        expect(justin).toBe('Justin Mathew');
        expect(jack).toBe('jack dawson');
        expect(jekm).toBe('je km');
    });

    it('should return a greeting with the given name', () => {
        const getGreeting = funcs.getGreeting;

        const justin = getGreeting('Justin');
        const jack = getGreeting('jack');
        const jekm = getGreeting('jekm');

        expect(justin).toBe('Hello Justin!');
        expect(jack).toBe('Hello jack!');
        expect(jekm).toBe('Hello jekm!');
    });

    it('should return area of the rectangle given', () => {
        const getRectangleArea = funcs.getRectangleArea;

        const twelve = getRectangleArea(4, 3);
        const nine = getRectangleArea(3, 3);
        const fifteen = getRectangleArea(3, 5);

        expect(twelve).toBe(12);
        expect(nine).toBe(9);
        expect(fifteen).toBe(15);
    });

    it('should return area of the triangle given', () => {
        const getTriangleArea = funcs.getTriangleArea;

        const six = getTriangleArea(4, 3);
        const nine = getTriangleArea(3, 6);
        const fifteen = getTriangleArea(3, 10);

        expect(six).toBe(6);
        expect(nine).toBe(9);
        expect(fifteen).toBe(15);
    });

    it('should return area of the circle given', () => {
        const getCircleArea = funcs.getCircleArea;

        const threeSquaredPi = getCircleArea(3);
        const sixSquaredPi = getCircleArea(6);
        const tenSquaredPi = getCircleArea(10);

        expect(threeSquaredPi).toBe(9 * Math.PI);
        expect(sixSquaredPi).toBe(36 * Math.PI);
        expect(tenSquaredPi).toBe(100 * Math.PI);
    });

    it('should return volume of the prism given', () => {
        const getRectangularPrismVolume = funcs.getRectangularPrismVolume;

        const twentySeven = getRectangularPrismVolume(3, 3, 3);
        const thirtySix = getRectangularPrismVolume(6, 3, 2);
        const hundred = getRectangularPrismVolume(10, 5, 2);

        expect(twentySeven).toBe(27);
        expect(thirtySix).toBe(36);
        expect(hundred).toBe(100);
    });
});