module.exports = {
  enhance,
  fail,
};

function enhance(item) {
  return { ...item, level: ++item.level };
}

function fail(item) {
  const durability = item.durability - 10;

  return { item, durability };
}
