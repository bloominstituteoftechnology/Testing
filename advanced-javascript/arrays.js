/* eslint-disable no-unused-vars, max-len */

// errors
const {
	nonArrayTypeError,
	nonFunctionTypeError,
	emptyArrayError,
} = require('../errors/index.js');

// helper
const argCheckForEachFunc = (elements, cb) => {
	if (!Array.isArray(elements)) throw new Error(nonArrayTypeError);
	if (typeof(cb) !== 'function') throw new Error(nonFunctionTypeError);
	if (!elements.length) throw new Error(emptyArrayError);
};


const each = (elements, cb) => {
	for (let i = 0; i < elements.length; i++) {
		cb(elements[i], i);
	}
};

const map = (elements, cb) => {
	argCheckForEachFunc(elements, cb);
	const mappedArr = [];
	each(elements, item => {
		mappedArr.push(cb(item));
	});
	return mappedArr;
};

const reduce = (elements, cb, memo = elements.shift()) => {
	argCheckForEachFunc(elements, cb);
	each(elements, item => {
		memo = cb(memo, item);
	});
	return memo;
};

const find = (elements, cb) => {
	argCheckForEachFunc(elements, cb);
	for (let i = 0; i < elements.length; i++) {
		if (cb(elements[i])) return elements[i].fruit;
	}
	return undefined;
};

const filter = (elements, cb) => {
  const filteredValues = [];
  each(elements, item => {
    if (cb(item)) filteredValues.push(item);
  });
  return filteredValues;
};

const flatten = elements => {
  const flattenedArr = reduce(
    elements,
    (memo, item) => {
      if (Array.isArray(item)) return memo.concat(flatten(item));
      return memo.concat(item);
    },
    []
  );
  return flattenedArr;
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
};
