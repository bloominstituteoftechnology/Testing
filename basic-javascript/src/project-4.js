const multiplyArguments = (...args) => {
  let argumentsSum = 1;
  if (args.length === 0) {
    return 0;
  }
  for (let i = 0; i < args.length; i++) {
    argumentsSum *= args[i];
  }
  return argumentsSum;
};

const invokeCallback = (cb) => {
  cb();
};

const sumArray = (numbers, cb) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  cb(sum);
};

const forEach = (arr, cb) => {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i]);
  }
};

const map = (arr, cb) => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(cb(arr[i]));
  }
  return newArray;
};

const getUserConstructor = () => {
  const User = function User(userObj) {
    this.username = userObj.username;
    this.name = userObj.name;
    this.email = userObj.email;
    this.password = userObj.password;
    this.sayHi = () => `Hello, my name is ${this.name}`;
  };
  return User;
};

const addPrototypeMethod = (Constructor) => {
  Constructor.prototype.sayHi = function sayHi() {
    return 'Hello World!';
  };
};

const addReverseString = () => {
  String.prototype.reverse = function reverse() {
    return this.split('').reverse().join('');
  };
};

const nFactorial = (n) => {
  if (n < 1) {
    return 1;
  }
  return n * nFactorial(n - 1);
};

const cacheFunction = (cb) => {
  const cache = {};
  const returnFunction = (x) => {
    if (typeof cache[x] === 'undefined') {
      const result = cb(x);
      cache[x] = result;
      return result;
    }
    return cache[x];
  };
  return returnFunction;
};

module.exports = {
  multiplyArguments,
  invokeCallback,
  sumArray,
  forEach,
  map,
  getUserConstructor,
  addPrototypeMethod,
  addReverseString,
  nFactorial,
  cacheFunction
};
