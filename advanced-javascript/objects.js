// Complete the following underscore functions.
// Reference http://underscorejs.org/ for examples.

/* eslint-disable no-unused-vars, arrow-body-style, arrow-parens */

// errors
const {
	nonFunctionTypeError,
	nonObjectTypeError,
	emptyObjectError,
} = require('../errors/index.js');

const checkObjArgument = obj => {
	// nulls and arrays are object types
	if (typeof(obj) !== 'object' || obj === null || Array.isArray(obj)) throw new Error(nonObjectTypeError);
	if (!Object.keys(obj).length) throw new Error(emptyObjectError);
};


const keys = (obj) => {
	checkObjArgument(obj);
	return Object.keys(obj);
};

const values = (obj) => {
	checkObjArgument(obj);
	return Object.keys(obj).map((key) => {
		return obj[key];
	});
};

const mapObject = (obj, cb) => {
	checkObjArgument(obj);
	if (typeof(cb) !== 'function') throw new Error(nonFunctionTypeError);
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

/* eslint-enable no-unused-vars */

module.exports = {
  keys,
  values,
  mapObject,
  pairs,
  invert,
  defaults
};
