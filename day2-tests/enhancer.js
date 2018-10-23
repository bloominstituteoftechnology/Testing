module.exports = {
  enhance,
  fail,
};

function enhance(item) {
  let { level, durability, fail } = item;

  if (level !== 'V') {
    switch (level) {
      case 15:
        return { ...item, fail: 0, level: 'I' };
      case 'I':
        return { ...item, fail: 0, level: 'II' };
      case 'II':
        return { ...item, fail: 0, level: 'III' };
      case 'III':
        return { ...item, fail: 0, level: 'IV' };
      case 'IV':
        return { ...item, fail: 0, level: 'V' };
      default:
        return { ...item, fail: 0, level: ++level };
    }
  } else {
    return { ...item, fail: 0 };
  }
}

function fail(item) {
  let { level, durability, fail } = item;
  durability = durability - 5;

  switch (level) {
    case 'I':
      return { ...item, fail: fail + 2, durability };
    case 'II':
      return { ...item, fail: fail + 3, durability };
    case 'III':
      return { ...item, fail: fail + 4, durability };
    case 'IV':
      return { ...item, fail: fail + 5, durability };
    default:
      return { ...item, fail: ++fail, durability };
  }
}
