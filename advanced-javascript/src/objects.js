// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars, arrow-body-style */

const keys = obj => {
  return Object.keys(obj);
};

const values = obj => {
  return Object.keys(obj).map(key => {
    return obj[key];
  });
};

const mapObject = (obj, cb) => {
  Object.keys(obj).forEach(key => (obj[key] = cb(obj[key])));
  return obj;
};

const pairs = obj => Object.keys(obj).map(key => [key, obj[key]]);

const invert = obj => {
  Object.keys(obj).forEach(key => {
    const newKey = obj[key]; // access value of object property
    obj[newKey] = key; // make values the keys and vice versa
    delete obj[key]; // delete old key
  });
  return obj; // return new object
};

const defaults = (obj, defaultProps) => {
  Object.keys(defaultProps).forEach(key => {
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
