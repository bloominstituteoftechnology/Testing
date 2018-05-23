const funcs = require('./project-1');

// write your tests here

// const multiplyByTen = num => {
//     return num * 10;
//   };

test('multiplyByTen test by 42', () => {
    const result = funcs.multiplyByTen(42);
    expect(result).toBe(420);
});

test('multiplyByTen test by 0', () => {
    const result = funcs.multiplyByTen(0);
    expect(result).toBe(0);
});


//   const subtractFive = num => {
//     return num - 5;
//   };

test('subtractFive test by 42', () => {
    const result = funcs.subtractFive(42);
    expect(result).toBe(37);
});

test('subtractFive test by ', () => {
    const result = funcs.subtractFive(0);
    expect(result).toBe(-5);
});

  
//   const areSameLength = (str1, str2) => {
//     return str1.length === str2.length;
//   };
  
//   const areEqual = (x, y) => {
//     return x === y;
//   };
  
//   const lessThanNinety = num => {
//     if (num < 90) {
//       return true;
//     }
//     return false;
//   };
  
//   const greaterThanFifty = num => {
//     if (num > 50) {
//       return true;
//     }
//     return false;
//   };
  
//   const add = (x, y) => {
//     return x + y;
//   };
  
//   const subtract = (x, y) => {
//     return x - y;
//   };
  
//   const divide = (x, y) => {
//     return x / y;
//   };
  
//   const multiply = (x, y) => {
//     return x * y;
//   };
  
//   const getRemainder = (x, y) => {
//     return x % y;
//   };
  
//   const isEven = num => {
//     if (num % 2 === 0) {
//       return true;
//     }
//     return false;
//   };
  
//   const isOdd = num => {
//     if (num % 2 === 0) {
//       return false;
//     }
//     return true;
//   };
  
//   const square = num => {
//     return num * num;
//   };
  
//   const cube = num => {
//     return num * num * num;
//   };
  
//   const raiseToPower = (num, exponent) => {
//     return num ** exponent;
//   };
  
//   const roundNumber = num => {
//     return Math.round(num);
//   };
  
//   const roundUp = num => {
//     return Math.ceil(num);
//   };
  
//   const addExclamationPoint = str => {
//     return (str += '!');
//   };
  
//   const combineNames = (firstName, lastName) => {
//     return `${firstName} ${lastName}`;
//   };
  
//   const getGreeting = name => {
//     return `Hello ${name}!`;
//   };
  
//   const getRectangleArea = (length, width) => {
//     return length * width;
//   };
  
//   const getTriangleArea = (base, height) => {
//     return 0.5 * base * height;
//   };
  
//   const getCircleArea = radius => {
//     return Math.PI * radius * radius;
//   };
  
//   const getRectangularPrismVolume = (length, width, height) => {
//     return width * height * length;
//   };