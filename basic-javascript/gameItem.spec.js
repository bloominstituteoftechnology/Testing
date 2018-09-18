// ### Enhancing Game Item

// - an enhance attempt can succeed or fail.
// - when an enhancement fails, the "fail count" of the item is increased according to these rules:
//   - from 1 to 15 increase by 1.
//   - at I, increase by 2.
//   - at II, increase by 3.
//   - at III, increase by 4.
//   - at IV, increase by 5.
// - when enhancement succeeds, the fail count is reset to 0 again.
// - when enhancement fails, the durability is decreased by 5.

const enhancer = require('./gameItem');

it('item begins at 0', ()=> {
    const item = new enhancer.Item();
    expect(item.level).toBe(0);
    expect(item.durability).toBe(100);
    expect(item.fail_count).toBe(0);
});

it('item can be enhanced up to level 20', ()=> {
    const item = {
        level: "V",
        durability: 50,
        levelcount: 20
    }
    const result = enhancer.enhanceItem(item);
    expect(item.levelcount).toBe(20);
    expect(result).toBe(`Maximum level reached! Level: ${item.level}, Durability: ${item.durability}`)
});

it('item levels use arabic numerals through level 15', ()=> {
    for (let i=0; i<16; i++) {
        const item = {
            level: i
        }
        enhancer.enhanceItem(item);
        expect(item.level).toBe(i)
    }
})

it('item levels use roman numerals from level 16-20', ()=> {
    for (let i=15; i<20; i++) {
        const item = {
            levelcount: i,
            level: null
        }
        enhancer.enhanceItem(item, 5);

        if (item.levelcount === 16){
            expect(item.level).toBe("I")
        } else if (item.levelcount === 17){
            expect(item.level).toBe("II")
        } else if (item.levelcount === 18){
            expect(item.level).toBe("III")
        } else if (item.levelcount === 19){
            expect(item.level).toBe("IV")
        } else if (item.levelcount === 20){
            expect(item.level).toBe("V")
        } 
        
    }
})


