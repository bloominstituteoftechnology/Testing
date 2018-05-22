const funcs = require('./project-1');

// write your tests here
describe('Project-1', () => {
    describe('`multiplyByTen`', () => {
      it('should be a function', () => {
        const multiplyByTen = funcs.multiplyByTen;
        assert.typeOf(multiplyByTen, 'function');
      });
      it('should multiply number by 10', () => {
        const num = 20;
        const newMultiplyByTen = funcs.multiplyByTen(num);
        expect(newMultiplyByTen).to.equal(200);
      });
    });
  
    describe('`subtractFive`', () => {
      it('should be a function', () => {
        const subtractFive = funcs.subtractFive;
        assert.typeOf(subtractFive, 'function');
      });
      it('should subtract number by 5', () => {
        const num = 10;
        const newSubtractFive = funcs.subtractFive(num);
        expect(newSubtractFive).to.equal(5);
      });
    });
  
    describe('`areSameLength`', () => {
      it('should be a function', () => {
        const areSameLength = funcs.areSameLength;
        assert.typeOf(areSameLength, 'function');
      });
      it('should return true if two strings are equal length', () => {
        const str1 = 'str';
        const str2 = 'ing';
        const newAreSameLength = funcs.areSameLength(str1, str2);
        expect(newAreSameLength).to.equal(true);
      });
      it('should return false if two strings are not equal length', () => {
        const str1 = 'stry';
        const str2 = 'ing';
        const newAreSameLength = funcs.areSameLength(str1, str2);
        expect(newAreSameLength).to.equal(false);
      });
    });
  
    describe('`areEqual`', () => {
      it('should be a function', () => {
        const areEqual = funcs.areEqual;
        assert.typeOf(areEqual, 'function');
      });
      it('should return true if two numbers are equal', () => {
        const num1 = 2;
        const num2 = 2;
        const newAreEqual = funcs.areEqual(num1, num2);
        expect(newAreEqual).to.equal(true);;
      });
      it('should return false if two numbers are not equal', () => {
        const num1 = 3;
        const num2 = 2;
        const newAreEqual = funcs.areEqual(num1, num2);
        expect(newAreEqual).to.equal(false);
      });
    });
  
    describe('`lessThanNinety`', () => {
      it('should be a function', () => {
        const lessThanNinety = funcs.lessThanNinety;
        assert.typeOf(lessThanNinety, 'function');
      });
      it('should return true if number is less than 90', () => {
        const num = 2;
        const newLessThanNinety = funcs.lessThanNinety(num);
        expect(lessThanNinety).to.equal(true);
      });
      it('should return false if number is greater than 90', () => {
        const num = 300;
        const newLessThanNinety = funcs.lessThanNinety(num);
        expect(lessThanNinety).to.equal(false);
      });
    });
  
    describe('`greaterThanFifty`', () => {
      it('should be a function', () => {
        const greaterThanFifty = funcs.greaterThanFifty;
        assert.typeOf(greaterThanFifty, 'function');
      });
      it('should return false if num is less than 50', () => {
        const num = 30;
        const newGreaterThanFifty = funcs.greaterThanFifty(num);
        expect(greaterThanFifty).to.equal(false);
      });
      it('should return true if num is greater than 50', () => {
        const num = 80;
        const newGreaterThanFifty = funcs.greaterThanFifty(num);
        expect(greaterThanFifty).to.equal(true);
      });
    });
  
    describe('`add`', () => {
      it('should be a function', () => {
        const add = funcs.add;
        assert.typeOf(add, 'function');
      });
      it('should add two numbers', () => {
        const num1 = 3;
        const num2 = 2;
        const newAdd = funcs.add(num1, num2);
        expect(newAdd).to.equal(5);
      });
    });
  
    describe('`subtract`', () => {
      it('should be a function', () => {
        const subtract = funcs.subtract;
        assert.typeOf(subtract, 'function');
      });
      it('should subtract two numbers', () => {
        const num1 = 4;
        const num2 = 2;
        const newSubtract = funcs.subtract(num1, num2);
        expect(newSubtract).to.equal(2);
      });
    });
  
    describe('`divide`', () => {
      it('should be a function', () => {
        const divide = funcs.divide;
        assert.typeOf(divide, 'function');
      });
      it('should divide two numbers', () => {
        const num1 = 10;
        const num2 = 2;
        const newDivide = funcs.divide(num1, num2);
        expect(newDivide).to.equal(5);
      });
    });
  
    describe('`multiply`', () => {
      it('should be a function', () => {
        const multiply = funcs.multiply;
        assert.typeOf(multiply, 'function');
      });
      it('should multiply two numbers', () => {
        const num1 = 10;
        const num2 = 2;
        const newMultiply = funcs.multiply(num1, num2);
        expect(newMultiply).to.equal(20);
      });
    });
  
    describe('`getRemainder`', () => {
      it('should be a function', () => {
        const getRemainder = funcs.getRemainder;
        assert.typeOf(getRemainder, 'function');
      });
      it('should return the remainder of two numbers', () => {
        const num1 = 10;
        const num2 = 2;
        const newGetRemainder = funcs.getRemainder(num1, num2);
        expect(newGetRemainder).to.equal(0);
      });
    });
  
    describe('`isEven`', () => {
      it('should be a function', () => {
        const isEven = funcs.isEven;
        assert.typeOf(isEven, 'function');
      });
      it('should return true if even', () => {
        const num = 4;
        const newIsEven = funcs.isEven(num);
        expect(newIsEven).to.equal(true);
      });
      it('should return false if odd', () => {
        const num = 5;
        const newIsEven = funcs.isEven(num);
        expect(newIsEven).to.equal(false);
      });
    });
  
    describe('`isOdd`', () => {
      it('should be a function', () => {
        const isOdd = funcs.isOdd;
        assert.typeOf(isOdd, 'function');
      });
      it('should return true if odd', () => {
        const num = 3;
        const newIsOdd = funcs.isOdd(num);
        expect(newIsOdd).to.equal(true);
      });
      it('should return false if even', () => {
        const num = 6;
        const newIsOdd = funcs.isOdd(num);
        aexpect(newIsOdd).to.equal(true);
      });
    });
  
    describe('`square`', () => {
      it('should be a function', () => {
        const square = funcs.square;
        assert.typeOf(square, 'function');
      });
      it('should return square of number', () => {
        const num = 4;
        const newSquare = funcs.square(num);
        expect(newSquare).to.equal(16);
      });
    });
  
    describe('`cube`', () => {
      it('should be a function', () => {
        const cube = funcs.cube;
        assert.typeOf(cube, 'function');
      });
      it('should return cube of number', () => {
        const num = 2;
        const newCube = funcs.cube(num);
        expect(newCube).to.equal(8);
      });
    });
  
    describe('`raiseToPower`', () => {
      it('should be a function', () => {
        const raiseToPower = funcs.raiseToPower;
        assert.typeOf(raiseToPower, 'function');
      });
      it('should return a number raised to n power', () => {
        const num = 3;
        const exponent = 2;
        const newRaiseToPower = funcs.raiseToPower(num, exponent);
        expect(newRaiseToPower).to.equal(9);
      });
    });
  
    describe('`roundNumber`', () => {
      it('should be a function', () => {
        const roundNumber = funcs.roundNumber;
        assert.typeOf(roundNumber, 'function');
      });
      it('should return a number rounded', () => {
        const num = 5.6;
        const newRoundNumber = funcs.roundNumber(num);
        expect(newRoundNumber).to.equal(6);
      });
    });
  
    describe('`roundUp`', () => {
      it('should be a function', () => {
        const roundUp = funcs.roundUp;
        assert.typeOf(roundUp, 'function');
      });
      it('should return a number rounded up to the nearest whole number', () => {
        const num = 5.4;
        const newRoundUp = funcs.roundUp(num);
        expect(newRoundUp).to.equal(6);
      });
    });
  
    describe('`addExclamationPoint`', () => {
      it('should be a function', () => {
        const addExclamationPoint = funcs.addExclamationPoint;
        assert.typeOf(addExclamationPoint, 'function');
      });
      it('should concatenate a ! to the end of a string', () => {
        const str = 'hello';
        const newAddExclamationPoint = funcs.addExclamationPoint(str);
        expect(newAddExclamationPoint).to.equal('hello!');
      });
    });
  
    describe('`combineNames`', () => {
      it('should be a function', () => {
        const combineNames = funcs.combineNames;
        assert.typeOf(combineNames, 'function');
      });
      it('should combine two names', () => {
        const firstName = 'John';
        const lastName = 'Doe';
        const newCombineNames = funcs.combineNames(firstName, lastName);
        expect(newCombineNames).to.equal('John Doe');
      });
    });
  
    describe('`getGreeting`', () => {
      it('should be a function', () => {
        const getGreeting = funcs.getGreeting;
        assert.typeOf(getGreeting, 'function');
      });
      it('should return Hello + name!', () => {
        const name = 'John';
        const newGetGreeting = funcs.getGreeting(name);
        expect(newGetGreeting).to.equal('Hello John!');
      });
    });
  
    describe('`getRectangleArea`', () => {
      it('should be a function', () => {
        const getRectangleArea = funcs.getRectangleArea;
        assert.typeOf(getRectangleArea, 'function');
      });
      it('should return the rectangle area (length * width)', () => {
        const length = 4;
        const width = 2;
        const newGetRectangleArea = funcs.getRectangleArea(length, width);
        expect(newGetRectangleArea).to.equal(8);
      });
    });
  
    describe('`getTriangleArea`', () => {
      it('should be a function', () => {
        const getTriangleArea = funcs.getTriangleArea;
        assert.typeOf(getTriangleArea, 'function');
      });
      it('should return area of the triangle (1/2*base*height)', () => {
        const base = 10;
        const height = 5;
        const newGetTriangleArea = funcs.getTriangleArea(base, height);
        expect(newGetTriangleArea).to.equal(25);
      });
    });
  
    describe('`getCircleArea`', () => {
      it('should be a function', () => {
        const getCircleArea = funcs.getCircleArea;
        assert.typeOf(getCircleArea, 'function');
      });
      it('should return the area of a circle (pi*r^2)', () => {
        const radius = 5;
        const newGetCircleArea = funcs.getCircleArea(radius);
        expect(newGetCircleArea).to.equal(78.5398163397);
      });
    });
  
    describe('`getRectangularPrismVolume`', () => {
      it('should be a function', () => {
        const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
        assert.typeOf(getRectangularPrismVolume, 'function');
      });
      it('should return the volume of a rectangular prism (l*w*h)', () => {
        const l = 4;
        const w = 4;
        const h = 2;
        const newGetRectangularPrismVolume = funcs.getRectangularPrismVolume(
          l,
          w,
          h
        );
        expect(newGetRectangularPrismVolume).to.equal(32);;
      });
    });
  });
  