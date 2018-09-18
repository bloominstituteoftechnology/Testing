// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars, arrow-body-style, arrow-parens */


// only works with objects
const keys = (obj) => {
  if (obj === undefined || obj === null) {
    return 'Need to provide an object'
  }
  if (obj.constructor !== Object) {
    return 'Need to provide an object'
}

  return Object.keys(obj);
};


// only works with objects
const values = (obj) => {
  if (obj === undefined || obj === null) {
    return 'Need to provide an object'
  }
  if (obj.constructor !== Object) {
    return 'Need to provide an object'
}

  return Object.values(obj);
};


// only works with objects
const mapObject = (obj, cb) => {
  if (obj === undefined || obj === null) {
    return 'Need to provide an object'
  }
  if (obj.constructor !== Object) {
    return 'Need to provide an object'
  }
  if (typeof cb !== 'function') {
    return 'Did not provide a function'
  }

  Object.keys(obj).forEach((key) => (obj[key] = cb(obj[key])));
  return obj;
};


// only works with objects
const pairs = (obj) => {
  if (obj === undefined || obj === null) {
    return 'Need to provide an object'
  }
  if (obj.constructor !== Object) {
    return 'Need to provide an object'
  }

  return Object.keys(obj).map((key) => [key, obj[key]])
};



const invert = (obj) => {
  if (obj === undefined || obj === null) {
    return 'Need to provide an object'
  }
  if (obj.constructor !== Object) {
    return 'Need to provide an object'
  }

  Object.keys(obj).forEach((key) => {
    const newKey = obj[key];
    obj[newKey] = key;
    delete obj[key];
  });
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
