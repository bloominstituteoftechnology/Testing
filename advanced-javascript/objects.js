// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars, arrow-body-style, arrow-parens */

const keys = (obj) => {
  const array = Object.keys(obj);
  if(array.length===0){
    throw new Error('No keys.');
  }
  return array;
};

const values = (obj) => {
  const array = Object.keys(obj).map((key) => {
    return obj[key];
  });
  if(array.length===0){
    throw new Error('No values.');
  }
  return array;
};

const mapObject = (obj, cb) => {
  Object.keys(obj).forEach((key) => (obj[key] = cb(obj[key])));
  return obj;
};

const pairs = (obj) => {
  const array = Object.keys(obj).map((key) => [key, obj[key]]);
  if(array.length===0){
    throw new Error('Found nothing in argument.');
  }
  return array;
};

const invert = (obj) => {
  Object.keys(obj).forEach((key) => {
    const newKey = obj[key];
    obj[newKey] = key;
    delete obj[key];
  });
  if(Object.keys(obj).length===0){
    throw new Error('Not a proper Object.');
  }
  return obj;
};

const defaults = (obj, defaultProps) => {
  Object.keys(defaultProps).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return;
    obj[key] = defaultProps[key];
  });
  return obj;
};

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
