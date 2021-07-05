// https://github.com/LambdaSchool/Testing/pull/241

let item = 0,
    fails = 0,
    durability = 100;

class GameItem {
  constructor(){
    super();
    this.fails = 0;
    this.durability = 100;
    this.repairs = 0;
  }


  repair() {

  }

  getRepairs(){
    return this.repairs;
  }

  incrRepairs(){
    this.repairs += 1;
  }

  enhanceOrFail(){
    // if enhance, reset fails to zero
    // if fail, decrement durability
  }

  fail(){
    let fails = this.getFails();
    if(fails < 16){
      this.incrFail(1);
    } else if (fails === 16) {
      this.incrFail(2);
    } else if (fails === 17) {
      this.incrFail(3);
    } else if (fails === 18) {
      this.incrFail(4);
    } else if (fails === 19) {
      this.incrFail(5);
    } else if (fails === 20) {
      console.log('GAME OVER!');
      return;
    }
  }

  incrFail(fc){
    this.fails += fc;
  }

  decrDurability(){
    this.durability -= 5;
  }

  incrDurability() {
    let dur = this.getDurability();
    if(dur <= 90 ) this.durability += 10;
  }

  getDurability(){
    return this.durability;
  }

  resetFailCount(){
    this.fails = 0;
  }

  getFails(){
    return this.fails;
  }

}