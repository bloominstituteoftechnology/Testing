module.exports = {
    enhance,
    fail,
    repair
  };
  
  function enhance(item, success) {
      if (success) {
        if (item.level < 15) {
            item.level++;
        } else if (item.level === 15) {
            item.level = 'I';
        } else if (item.level === 'I') {
            item.level = 'II';
        } else if (item.level === 'II') {
            item.level = 'III';
        } else if (item.level === 'III') {
            item.level = 'IV';
        } else if (item.level === 'IV') {
            item.level = 'V';
        } else if (item.level === 'V') {
            null;
        }
          item.fails = 0;
      } 
      else if (!success) {
          fail(item);
      }
    return { ...item };
  }
  
  function fail(item) {
      if (item.durability >= 5) {
        item.durability -= 5;
    } 
        if (item.level <= 15) {
            item.fails ++;
        } else if (item.level === 'I') {
            item.fails += 2;
        } else if (item.level === 'II') {
            item.fails += 3;
        } else if (item.level === 'III') {
            item.fails += 4;
        } else if (item.level === 'IV') {
            item.fails += 5;
        } else if (item.level === 'V') {
            item.fails += 6;
        }

        return { ...item };
  }

  function repair(item) {
      if (item.durability <= 90) {
          item.durability += 10;
      } 

    return { ...item };
  }