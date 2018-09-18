module.exports = {
    enhance,
    fail
}

function enhance(item){
    return {...item, level: ++item.level}
}

function fail(item){
    if (item.level < 16) {
        return {...item, failCount: ++item.failCount};
    };
    // {...item, failCount: (
    //     if (item.level < 16) {
    //         return ++item.failCount;
    // })}
}

// -ITEM
//   -fail count(no max, starts at 0)
//   -duribility(max 100, starts at 100)
//   -enhanceLevel(max 20, 1-15[arabic], 16-20[roman])
//   -attempt (either adds to fail count or enhance)
//     -enhance
            // -if fail(fail count increases(according to enhanceLevel), durability decreases by 5)
//          -if suceeds(failcount === 0)
//     -repair
            // -(durability+10)