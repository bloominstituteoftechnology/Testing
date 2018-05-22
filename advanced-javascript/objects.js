// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars, arrow-body-style, arrow-parens */

const keys = (obj) => {   //PASSED
  return Object.keys(obj);
};

const values = (obj) => {   //PASSED
  return Object.keys(obj).map((key) => {
    return obj[key];
  });
};

const mapObject = (obj, cb) => {  //PASSED
  Object.keys(obj).forEach((key) => (obj[key] = cb(obj[key])));
  return obj;
};

const pairs = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);  //PASSED

const invert = (obj) => { //PASSED
  Object.keys(obj).forEach((key) => {
    const newKey = obj[key];
    obj[newKey] = key;
    delete obj[key];
  });
  return obj;
};

const defaults = (obj, defaultProps) => { //PASSED
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
