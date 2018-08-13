/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  if (num === undefined) {
    return false
  }
  return num * 10;
};

const subtractFive = num => {
  if (num === undefined) {
    return false
  }
  return num - 5;
};

const areSameLength = (str1, str2) => {
  // if (str1 == "" || str2 == "") {
  //   return error("yuck, No String, Please enter a string")
  // }
  
  if (!str1 || !str2) {
    return null
  }
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  if (!x || !y) {
    return null
  }
  return x === y;
};

const lessThanNinety = num => {
  if (!num) {
    return null
  }
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  if (num === undefined) {
    return null
  }
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  if (x === undefined || y === undefined) {
    return false;
}
  return x + y;
};

const subtract = (x, y) => {
  if (x === undefined || y === undefined) {
    return false;
}
  return x - y;
};

const divide = (x, y) => {
  if (x === undefined || y === undefined) {
    return false;
}
  return x / y;
};

const multiply = (x, y) => {
  if (x === undefined || y === undefined) {
    return false;
}
  return x * y;
};

const getRemainder = (x, y) => {
  if (x === undefined || y === undefined) {
    return false;
}
  return x % y;
};

const isEven = num => {
  if (num === undefined) {
    return null;
}
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (num === undefined) {
    return null;
}
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {
  if (num === undefined) {
    return false;
}
  return num * num;
};

const cube = num => {
  if (num === undefined) {
    return false;
}
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  if (num === undefined || exponent === undefined) {
    return false;
}
  return num ** exponent;
};

const roundNumber = num => {
  if (num === undefined) {
    return false;
}
  return Math.round(num);
};

const roundUp = num => {
  if (num === undefined) {
    return false;
}
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  if (str === undefined) {
    return null;
}
  return (str += '!');
};

const combineNames = (firstName, lastName) => {
  if (firstName === undefined || lastName === undefined) {
    return null;
}
  return `${firstName} ${lastName}`;
};

const getGreeting = name => {
  if (str === undefined) {
    return null;
}
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
