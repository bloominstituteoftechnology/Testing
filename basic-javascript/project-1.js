/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };
  return num * 10;
};

const subtractFive = num => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };
  return num - 5;
};

const areSameLength = (str1, str2) => {
  if (typeof str1 === 'string' || typeof str2 === 'string') {
    throw new Error('value must be a string');
  };
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };
  return x === y;
};

const lessThanNinety = num => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  }

  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if (!x && !y) return 0;
  if (!x) return 'Please enter a y-value';
  if (!y) return 'Please enter an x-value';
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  return x + y;
};

const subtract = (x, y) => {
  if (!x && !y) return 0;
  if (!x) return 'Please enter a y-value';
  if (!y) return 'Please enter an x-value';
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  return x - y;
};

const divide = (x, y) => {
  if (!x && !y) return 0;
  if (!x) return 'Please enter a y-value';
  if (!y) return 'Please enter an x-value';
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  return x / y;
};

const multiply = (x, y) => {
  if (!x && !y) return 0;
  if (!x) return 'Please enter a y-value';
  if (!y) return 'Please enter an x-value';
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  return x * y;
};

const getRemainder = (x, y) => {
  if (!x && !y) return 0;
  if (!x) return 'Please enter a y-value';
  if (!y) return 'Please enter an x-value';
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  return x % y;
};

const isEven = num => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };
  
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  return num * num;
};

const cube = num => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  if (!num) return 'Please provide a number';
  if (!exponent) return 1;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  return num ** exponent;
};

const roundNumber = num => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  return Math.round(num);
};

const roundUp = num => {
  if (!num) return 0;
  if (typeof num === 'string') {
    throw new Error('value must be a number');
  };

  return Math.ceil(num);
};

const addExclamationPoint = str => {    
  if (typeof str !== 'string' || !str) return 'Please provide a string';
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  if (!firstName) return 'Please enter a first name';
  if(!lastName) return 'Please enter a last name';
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  if (!name) return 'Please provide a name';
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  if (!length || !width) 'Please provide both a length and width!';
  if (typeof length !== 'string' || typeof width !== 'string') return 'Please provide a NUMBER for both length and width';
  return length * width;
};

const getTriangleArea = (base, height) => {
  if (!base || !height) 'Please provide both a base and height!';
  if (typeof base !== 'string' || typeof height !== 'string') return 'Please provide a NUMBER for both base and height';
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  if (!radius) return 'Who stole our pi?!?!';
  if (typeof radius !== number) return 'Please provide a number';
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
  if (!length || !width || !height) 'Please provide both a length and height!';
  if (typeof length !== number || typeof width !== number || typeof height !== number) return 'Please provide a NUMBER for both length and height';
  return width * height * length;
};

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
