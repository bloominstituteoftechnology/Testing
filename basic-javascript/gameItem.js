
function Item() {
    this.levelcount = 0
    this.level = this.levelcount,
    this.fail_count = 0
    this.durability = 100
};

const enhanceItem = item => {
  if (item.levelcount < 20) {
    if (Math.random() > 0.3) {
      item.levelcount += 1;
      item.fail_count = 0;
      if (item.levelcount < 16) {
        return `Enhance! Level: ${item.levelcount}, Durability: ${
          item.durability
        }`;
      } else if (item.levelcount === 16) {
        item.level = "I";
        return `Enhance! Level: ${item.level}, Durability: ${item.durability}`;
      } else if (item.levelcount === 17) {
        item.level = "II";
        return `Enhance! Level: ${item.level}, Durability: ${item.durability}`;
      } else if (item.levelcount === 18) {
        item.level = "III";
        return `Enhance! Level: ${item.level}, Durability: ${item.durability}`;
      } else if (item.levelcount === 19) {
        item.level = "IV";
        return `Enhance! Level: ${item.level}, Durability: ${item.durability}`;
      } else if (item.levelcount === 20) {
        item.level = "V";
        return `Enhance! Level: ${item.level}, Durability: ${item.durability}`;
      }
    } else {
      if (item.levelcount < 16) {
        ++item.fail_count;
        item.durability -= 5;
        return `Enhancement failed. Level: ${item.levelcount}, Durability: ${
          item.durability
        }, Fail grade: ${item.fail_count}`;
      } else if (item.levelcount === 16) {
        item.fail_count += 2;
        item.durability -= 5;
        return `Enhancement failed. Level: ${item.level}, Durability: ${
          item.durability
        }, Fail grade: ${item.fail_count}`;
      } else if (item.levelcount === 17) {
        item.fail_count += 3;
        item.durability -= 5;
        return `Enhancement failed. Level: ${item.level}, Durability: ${
          item.durability
        }, Fail grade: ${item.fail_count}`;
      } else if (item.levelcount === 18) {
        item.fail_count += 4;
        item.durability -= 5;
        return `Enhancement failed. Level: ${item.level}, Durability: ${
          item.durability
        }, Fail grade: ${item.fail_count}`;
      } else if (item.levelcount === 19) {
        item.fail_count += 5;
        item.durability -= 5;
        return `Enhancement failed. Level: ${item.level}, Durability: ${
          item.durability
        }, Fail grade: ${item.fail_count}`;
      }
    }
  } else {
    return `Maximum level reached! Level: ${item.level}, Durability: ${
      item.durability
    }`;
  }
}


let masterSword = new Item();

module.exports = {
    enhanceItem,
    Item
}