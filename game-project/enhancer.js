module.exports = {
    enhance,
    fail,
    repair,
}

function enhance(item){
    if(item.level <= 14){
        return {...item, level: ++item.level}
    } else if (item.level === 15) {
        return {...item, level: 'I'}
    } else if (item.level === 'I') {
        return {...item, level: 'II'}
    } else if (item.level === 'II') {
        return {...item, level: 'III'}
    } else if (item.level === 'III') {
        return {...item, level: 'IV'}
    } else if (item.level === 'IV') {
        return {...item, level: 'V'}
    }
}

function fail(item){
    if (item.level < 16) {
        return {...item, failCount: ++item.failCount, durability: item.durability - 5};
    } else if (item.level == 'I') {
        return {...item, failCount: item.failCount + 2, durability: item.durability - 5};
    } else if (item.level === 'II') {
        return {...item, failCount: item.failCount + 3, durability: item.durability - 5};
    } else if (item.level === 'III') {
        return {...item, failCount: item.failCount + 4, durability: item.durability - 5};
    } else if (item.level === 'IV') {
        return {...item, failCount: item.failCount + 5, durability: item.durability - 5};
    } 
}

function repair(item){
    if(item.durability <= 90) {
        return {...item, durability: item.durability + 10}
    } else if (item.durability < 100 && item.durability >90){
        return {...item, durability: item.durability = 100}
    } else if (item.durability >= 100){
        return {...item}
    }
}
