const funcs = require('./project-1');

// write your tests here
describe('multiply by 10 function', () => {
    it('should multiply by 10', () => {
        const multiplyByTen = funcs.multiplyByTen;
        const actual = multiplyByTen(5);
        expect(actual).toBe(50);
    });
    it('checks identity', () => {
        const numbers = [1, 2, 3];
        const actual = numbers;
        expect(numbers).toBe(actual);
    });
    it('checks that it is an array', () => {
        const numbers = [1, 2, 3];
        const expected = 'array';
        const actual = Array.isArray(numbers);
        expect(actual).toBe(true);
    });
});

describe('subtract by 5 function', () => {
    it('should subtract five', () => {
        const subtractFive = funcs.subtractFive;
        const actual = subtractFive(3);
        expect(actual).toBe(-2);
    });
    it("checks identity", () => {
      const numbers = [1, 2, 3];
      const actual = numbers;
      expect(numbers).toBe(actual);
    });
    it("checks that it is an array", () => {
      const numbers = [1, 2, 3];
      const expected = "array";
      const actual = Array.isArray(numbers);
      expect(actual).toBe(true);
    });
});

describe('are same length function', () => {
    it('should equal true if string lengths are equal', () => {
        const areSameLength = funcs.areSameLength;
        const str1 = 'foo';
        const str2 = 'bar';
        const actual = areSameLength(str1, str2);
        expect(actual).toBe(true);
    });
    it('should equal false if string lengths are not equal', () => {
        const areSameLength = funcs.areSameLength;
        const str1 = 'foo';
        const str2 = 'barr';
        const actual = areSameLength(str1, str2);
        expect(actual).toBe(false);
    });
});

describe('are equal function', () => {
    it('should equal true if x === y', () => {
        const areEqual = funcs.areEqual;
        const x = 'foo';
        const y = 'foo';
        const actual = areEqual(x, y);
        expect(actual).toBe(true);
    });
    it('should eqaul false if x != y', () => {
        const areEqual = funcs.areEqual;
        const x = 'foo';
        const y = 'bar';
        const actual = areEqual(x ,y);
        expect(actual).toBe(false);
    });
});

describe('less than 90 function', () => {
    it('should return true if num < 90', () => {
        const lessThanNinty = funcs.lessThanNinety;
        const num = 50;
        expect(num).toBeLessThan(90);
    });
    it('should return false if num > 90', () => {
        const lessThanNinety = funcs.lessThanNinety;
        const num = 100;
        expect(num).toBeGreaterThan(90);
    });
});

describe('greater than 50 function', () => {
    it('should return true if num > 50', () => {
        const greaterThanFifty = funcs.greaterThanFifty;
        const num = 51;
        expect(num).toBeGreaterThan(50);
    });
    it('should return false if num < 50', () => {
        const greaterThanFifty = funcs.greaterThanFifty;
        const num = 49;
        expect(num).toBeLessThan(50);
    });
});

describe('add function', () => {
    it('should return x + y', () => {
        const add = funcs.add;
        const actual = add(3, 4);
        expect(actual).toBe(7);
    });
    it('should return NaN if x !+ y', () => {
        const add = funcs.add;
        const actual = add(2);
        expect(actual).toBeNaN();
    });
});

describe('subtract function', () => {
    it('should return x - y', () => {
        const subtract = funcs.subtract;
        const actual = subtract(7, 4);
        expect(actual).toBe(3);
    });
    it('should return NaN if x !- y',() => {
        const subtract = funcs.subtract;
        const actual = subtract(3);
        expect(actual).toBeNaN();
    });
});

describe('divide function', () => {
    it('should return x / y', () => {
        const divide = funcs.divide;
        const actual = divide(6, 2);
        expect(actual).toBe(3);
    });
    it('should return NaN if x !/ y', () => {
        const divide = funcs.divide;
        const actual = divide(2);
        expect(actual).toBeNaN();
    });
});

describe('multiply function', () => {
    it('should return x * y', () => {
        const multiply = funcs.multiply;
        const actual = multiply(5, 10);
        expect(actual).toBe(50);
    });
    it('should return NaN if x !* y', () => {
        const multiply = funcs.multiply;
        const actual = multiply(3, 'ty');
        expect(actual).toBeNaN();
    });
});

describe('get remainder function', () => {
    it('should return x % y', () => {
        const getRemainder = funcs.getRemainder;
        const actual = getRemainder(4, 3);
        expect(actual).toBe(1);
    });
    it('should return false if no remainder', () => {
        const getRemainder = funcs.getRemainder;
        const actual = getRemainder(6, 2);
        expect(actual).toBeFalsy();
    });
});

describe('is even function', () => {
    it('should return true if num is even', () => {
        const isEven = funcs.isEven;
        const actual = isEven(2);
        expect(actual).toBe(true);
    });
    it('should return false if num is not even', () => {
        const isEven = funcs.isEven;
        const actual = isEven(3);
        expect(actual).toBeFalsy();
    });
});

describe('is odd function', () => {
    it('should return false if num is even', () => {
        const isOdd = funcs.isOdd;
        const actual = isOdd(2);
        expect(actual).toBe(false);
    });
    it('should return true if num is odd', () => {
        const isOdd = funcs.isOdd;
        const actual = isOdd(3);
        expect(actual).toBe(true);
    });
});

describe('square function', () => {
    it('should return num * num', () => {
        const square = funcs.square;
        const actual = square(2, 2);
        expect(actual).toBe(4);
    });
});

describe('cube function', () => {
    it('should return num*num*num', () => {
        const cube = funcs.cube;
        const actual = cube(3, 3, 3);
        expect(actual).toBe(27);
    });
});

describe('raise to the power function', () => {
    it('should return num^exponent', () => {
        const raiseToPower = funcs.raiseToPower;
        const actual = raiseToPower(4, 2);
        expect(actual).toBe(16);
    });
});

describe('round number function', () => {
    it('should round num to nearest whole number', () => {
        const roundNumber = funcs.roundNumber;
        const actual = roundNumber(3.4);
        expect(actual).toBe(3);
    });
});

describe('round up function', () => {
    it('should round num to the next largest whole number', () => {
        const roundUp = funcs.roundUp;
        const actual = roundUp(4.2);
        expect(actual).toBe(5);
    });
});

describe('add exclamation point function', () => {
    it('should return a string with an exclamation point on the end', () => {
        const addExclamationPoint = funcs.addExclamationPoint;
        const actual = addExclamationPoint('hello world');
        expect(actual).toBe('hello world!');
    });
});

describe('combine names function', () => {
    it('should return first and last names added together', () => {
        const combineNames = funcs.combineNames;
        const actual = combineNames('Harry', 'Potter');
        expect(actual).toBe('Harry Potter');
    });
});

describe('get greeting function', () => {
    it('should return greeting', () => {
        const getGreeting = funcs.getGreeting;
        const actual = getGreeting('Iron Man');
        expect(actual).toBe('Hello Iron Man!');
    });
});

describe('get rectangle area function', () => {
    it('should return length * width', () => {
        const getRectangleArea = funcs.getRectangleArea;
        const actual = getRectangleArea(3, 4);
        expect(actual).toBe(12);
    });
});

describe('get triangle area function', () => {
    it('should return .5 * base * height', () => {
        const getTriangleArea = funcs.getTriangleArea;
        const actual = getTriangleArea(3, 4);
        expect(actual).toBe(6);
    });
});

describe('get circle area function', () => {
    it('should return circle area', () => {
        const getCircleArea = funcs.getCircleArea;
        const actual = getCircleArea(3, 3);
        expect(actual).toBe(28.274333882308138);
    });
});

describe('get rectangular prism volume function', () => {
    it('should return width * height * length', () => {
        const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
        const actual = getRectangularPrismVolume(3, 4, 6);
        expect(actual).toBe(72);
    })
})