module.exports = {
  enhance,
  fail,
  succeed,
  repair,
};

function enhance(item) {
  // set limit on level, increase if under 20
  switch(item.level){
    case 'I': item.level = 16;
    break;
    case 'II': item.level = 17;
    break;
    case 'III': item.level = 18;
    break;
    case 'IV': item.level = 19;
    break;
    default: item.level = item.level;
    break;
  }
  if (item.level < 20) {
    item.level += 1
      switch(item.level) {
        case 16: item.level = 'I';
        break;
        case 17: item.level = 'II';
        break;
        case 18: item.level = 'III';
        break;
        case 19: item.level = 'IV';
        break;
        default: item.level = item.level;
        break;
      }
      return { ...item }
  } else {
    return { ...item, level: 'V' }
  }
}

function fail(item) {
  const durability = item.durability - 5;
  let failCount = item.failCount;
  switch(item.level){
    case 'I':
      failCount += 2;
      break;
    case 'II':
      failCount += 3;
      break;
    case 'III':
      failCount += 4;
      break;
    case 'IV':
      failCount += 5;
      break;
    case 'V':
      failCount = failCount;
      break;
    default:
      failCount += 1;
  }
  return { ...item, durability,failCount };
}
function succeed(item){
  let failCount = 0;
  return {...item,failCount};
}

function repair(item) {
  let durability = item.durability;

  if (durability <= 90) {
    durability += 10;
  }

  return { ...item, durability };
}