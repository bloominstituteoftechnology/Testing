// requirement
// - item begins at 0.
// - item fail count begins at 0.
// - item durability begins at 100.
// - repairing an item will restore it's durability 10 points at a time until 100.
// - item can be enhanced up to 20.
// - from 1 to 15 use Arabic numerals.
// - from +16 up use Roman numerals (+16 = I, +17 = II, +18 = III, +19 = IV, +20 = V).
// - an enhance attempt can succeed or fail.
// - when an enhancement fails, the "fail count" of the item is increased according to these rules:
//   - from 1 to 15 increase by 1.
//   - at I, increase by 2.
//   - at II, increase by 3.
//   - at III, increase by 4.
//   - at IV, increase by 5.
// - when enhancement succeeds, the fail count is reset to 0 again.
// - when enhancement fails, the durability is decreased by 5.

module.exports = {
  enhancer,
};

function enhancer(item) {
  let itemClone = { ...item };
  // // check for existing starting item durability
  if (Object.keys(itemClone).includes("item_durability")) {
    itemClone.item_durability = itemClone.item_durability;
  } else {
    // set initial item_durability
    itemClone["item_durability"] = 100;
  }
  // check for item_level
  if (Object.keys(itemClone).includes("item_level")) {
    itemClone.item_level = itemClone.item_level;
  } else {
    // set initial item_level
    itemClone["item_level"] = 0;
  }
  let item_fail_count = 0;
  // set variable props on item object
  itemClone["item_fail_count"] = item_fail_count;

  // repair function
  itemClone["itemRepair"] = function(itemClone) {
    if (itemClone.item_durability === 100) {
      // do nothing
    } else {
      itemClone.item_durability += 10;
    }
    return { ...itemClone };
  };

  // enhance function
  itemClone["itemEnhance"] = function(itemClone) {
    if (itemClone.item_level === 20) {
      itemClone.item_level = 20;
    } else {
      itemClone.item_level = itemClone.item_level + 1;
    }
    return { ...itemClone };
  };

  return { ...itemClone };
}
