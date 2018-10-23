/* eslint-disable no-unused-vars, max-len */

const each = (elements, cb) => {
  // for (let i = 0; i < elements.length; i++) {
  //   cb(elements[i], i);
  // }
  if(!elements || !cb || !(elements instanceof Array) || typeof cb!=='function'){
    throw new Error('missing array and/or callback');
  }
  for (let i = 0; i < elements.length; i++) {
    elements[i] = cb(elements[i]);
  }
};

const map = (elements, cb) => {
  if(!elements || !cb || !(elements instanceof Array) || typeof cb!=='function'){
    throw new Error('missing array and/or callback');
  }
  const mappedArr = [];
  each(elements, item => {
    mappedArr.push(cb(item));
  });
  return mappedArr;
};

const reduce = (elements, cb, memo = elements.shift()) => {
  each(elements, item => {
    memo = cb(memo, item);
  });
  return memo;
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    if (cb(elements[i])) return elements[i];
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
