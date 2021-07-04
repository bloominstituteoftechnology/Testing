class GameItem {
  constructor({ name = 'Unnamed Item',
                durability = 100,
                level = 0,
                failLevel = 0
              } = {
                    a: 'Unnamed Item',
                    durability: 100,
                    level: 0,
                    failLevel: 0
                  }){
    this.name = name;
    this.durability = durability;
    this.level = level;
    this.failLevel = failLevel;
  }

  repair() {
    if(this.durability === 100 || this.durability + 10 >= 100){
      this.durability = 100;
      console.log('This item cannot be repaired any further');
    }else{
      const newDurability = this.durability + 10;
      console.log(`Durability increased from ${this.durability} to ${newDurability}`);
      this.durability = newDurability;
    }
  }

  enhance(passed) {
    if(passed){
      this.level += 1;
      this.failLevel = 0;
    }else{
      this.durability - 5 < 0 ? this.durability = 0 : this.durability -= 5;
      switch(this.level){
        case 16:
          this.failLevel += 2;
          break;
        case 17:
          this.failLevel += 3;
          break;
        case 18:
          this.failLevel += 4;
          break;
        case 19:
          this.failLevel += 5;
          break;
        default:
          this.failLevel += 1;
      };
    }
  }

  getLevel(){
    switch(this.level){
      case 16:
        return 'I'
      case 17:
        return 'II'
      case 18:
        return 'III'
      case 19:
        return 'IV'
      case 20:
        return 'V'
      default:
        return this.level
    }
  }

  getItemData(){
    return {
      name: this.name,
      level: this.getLevel(),
      durability : this.durability,
      failLevel: this.failLevel
    }
  }
};

module.exports = GameItem;
