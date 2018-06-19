// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars, arrow-body-style, arrow-parens */

const keys = (obj) => {
  return Object.keys(obj);
};



const values = (obj) => {
  return Object.keys(obj).map((key) => {
    return obj[key];
  });
};

const mapObject = (obj, cb) => {
  // ['name', "age"]
  Object.keys(obj).forEach((key) => (obj[key] = cb(obj[key])));
  return obj;
};


const pairs = (obj) => Object.keys(obj).map((key) => [key, obj[key]]);


const invert = (obj) => {
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

let person = {
  name: "Ja",
  age: 23
}

let personFault = {
  name: "test",
  age: 5,
  lastName: "Navey"
};

console.log(defaults(person, personFault));

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
