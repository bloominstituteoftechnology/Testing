/* eslint-disable no-unused-vars */

const counter = () => {
  let count = 0;
  return () => (++count);
};

const counterFactory = () => {
  let count = 0;
  return {
    increment: () => (++count),
    decrement: () => (--count),
  };
};

const limitFunctionCallCount = (cb, n) => {
  let callCount = 0;
  return (...args) => {
    if (callCount === n) return null;
    callCount++;
    return cb(...args);
  };
};

const cacheFunction = (cb) => {
  const cache = {};
  return (input) => {
    if (Object.prototype.hasOwnProperty.call(cache, input)) return cache[input];
    cache[input] = cb(input);
    return cache[input];
  };
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};
