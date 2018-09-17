/* eslint-disable arrow-parens */

const multiplyByTen = num => {
  let v1 = isNumber(num); 
  v1 = v1[0];
  return v1 * 10;
};

const subtractFive = num => {
  let v1 = isNumber(num);
  v1 = v1[0]; 
  return v1 - 5;
};

const areSameLength = (str1, str2) => {
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  return x === y;
};

const lessThanNinety = num => {
  let v1 = isNumber(num); 
  v1 = v1[0]
  if (v1 < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = num => {
  let v1 = isNumber(num); 
  v1 = v1[0]
  if (v1 > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  const v = isNumber(x,y); 
  let v1 = v[0];
  let v2 = v[1]; 
  return v1 + v2;
};

const subtract = (x, y) => {
  const v = isNumber(x,y); 
  let v1 = v[0];
  let v2 = v[1];
  return v1 - v2;
};

const divide = (x, y) => {
  const result1 = isNumber(x,y); 
  let v1; 
  let v2; 
  if(result1){
    console.log(result1)
    v1 = result1[0];
    v2 = result1[1]; 
  } else {
    return 0; 
  }
  const result2 = anyZeros(v1,v2);
  if (result2){
    v1 = result2[0];
    v2 = result2[1]; 
  } else {
    return 0; 
  }
  //if result2 is a thing
  return v1 / v2; 
};

const multiply = (x, y) => {
  return x * y;
};

const getRemainder = (x, y) => {
  return x % y;
};

const isEven = num => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = num => {
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = num => {
  return num * num;
};

const cube = num => {
  return num * num * num;
};

const raiseToPower = (num, exponent) => {
  return num ** exponent;
};

const roundNumber = num => {
  return Math.round(num);
};

const roundUp = num => {
  return Math.ceil(num);
};

const addExclamationPoint = str => {
  return (str += '!');
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

//Because some of the number checkers have various argument lengths
//the plan is to desirn functions to check infinite amount or arguments. 

function isNumber(...args){
  for(let i = 0; i<args.length; i++){
    if(typeof args[i] === 'string'){
      //Perform a check if it can be converted to Number.
      test = Number(args[i])
      if(test){
        args[i] = test
        return args; 
      } else {
        args[i] = 0; 
        return args; 
      }
    } else {
      return args; 
    }
  }
}

function anyZeros (...args) {
  for(let i = 0; i < args.length; i++){
    if(args[i] === 0){
      return 0; 
    }
  }
  return args; 
 }


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
