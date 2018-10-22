/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  return num && typeof num == "number" ? num * 10 : "invalid entry";
};

const subtractFive = num => {
  return num && typeof num == "number" ? num - 5 : "invalid entry";
};

const areSameLength = (str1, str2) => {
  if (str1 && str2 && typeof str1 === "string" && typeof str2 === "string") {
    return str1.length === str2.length;
  } else {
    return "invalid entry";
  }
};

const areEqual = (x, y) => {
  if (x && y && typeof x === "number" && typeof y === "number") {
    return x === y;
  } else {
    return "invalid entry";
  }
};

const lessThanNinety = num => {
  if (num && typeof num === "number") {
    return num < 90;
  } else {
    return "invalid entry";
  }
};

const greaterThanFifty = num => {
  if (num && typeof num === "number") {
    return num > 50;
  } else {
    return "invalid entry";
  }
};

const add = (x, y) => {
  if (x, y && typeof x === "number" && typeof y === "number") {
    return x + y;
  } else {
    return "invalid entry";
  }
};

const subtract = (x, y) => {
  if (x, y && typeof x === "number" && typeof y === "number") {
    return x - y;
  } else {
    return "invalid entry";
  }
};

const divide = (x, y) => {
  if (x, y && typeof x === "number" && typeof y === "number") {
    return x / y;
  } else {
    return "invalid entry";
  }
};

const multiply = (x, y) => {
  if (x, y && typeof x === "number" && typeof y === "number") {
    return x * y;
  } else {
    return "invalid entry";
  }
};

const getRemainder = (x, y) => {
  if (x, y && typeof x === "number" && typeof y === "number") {
    return x % y;
  } else {
    return "invalid entry";
  }
};

const isEven = num => {
  if (num && typeof num === "number") {
    return num % 2 === 0;
  } else {
    return "invalid entry";
  }
};

const isOdd = num => {
  if (num && typeof num === "number") {
    return num % 2 !== 0;
  } else {
    return "invalid entry";
  }
};

const square = num => {
  if (num && typeof num === "number") {
    return num * num;
  } else {
    return "invalid entry";
  }
};

const cube = num => {
  if (num && typeof num === "number") {
    return num * num * num;
  } else {
    return "invalid entry";
  }
};

const raiseToPower = (num, exponent) => {
  if (num && typeof num === "number") {
    return num ** exponent;
  } else {
    return "invalid entry";
  }
};

const roundNumber = num => {
  if (num && typeof num === "number") {
    return Math.round(num)
  } else {
    return "invalid entry";
  }
};

const roundUp = num => {
  if (num && typeof num === "number") {
    return Math.ceil(num);
  } else {
    return "invalid entry";
  }
};

const addExclamationPoint = str => {
  if (str && typeof str === "string") {
    return (str += '!');
  } else {
    return "invalid entry";
  }
};

const combineNames = (firstName, lastName) => {
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  return `Hello ${name}!`;
};

const getRectangleArea = (length, width) => {
  return length * width;
};

const getTriangleArea = (base, height) => {
  return 0.5 * base * height;
};

const getCircleArea = radius => {
  return Math.PI * radius * radius;
};

const getRectangularPrismVolume = (length, width, height) => {
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
