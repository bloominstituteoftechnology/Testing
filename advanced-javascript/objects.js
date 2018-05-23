// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars, arrow-body-style, arrow-parens */
//1
const keys = (obj) => {
  return Object.keys(obj);
}; //done

//2
const values = (obj) => {
  return Object.keys(obj).map((key) => {
    return obj[key];
  });
}; //done

//3
const mapObject = (obj, cb) => {
  Object.keys(obj).forEach((key) => (obj[key] = cb(obj[key])));
  return obj;
};//done

//4
const pairs = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);
//done

//5
const invert = (obj) => {
  Object.keys(obj).forEach((key) => {
    const newKey = obj[key];
    obj[newKey] = key;
    delete obj[key];
  });
  return obj;
};//done

//6
const defaults = (obj, defaultProps) => {
  Object.keys(defaultProps).forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) return;
    obj[key] = defaultProps[key];
  });
  return obj;
};//done

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
