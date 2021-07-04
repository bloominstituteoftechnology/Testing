const GameItem = require('./game-object');

describe('Game Item', () => {
  describe('creating an item', () => {
    it('should create an object with certain values on instantiation', () => {
      let newItem = new GameItem({name: 'A Really Cool Sword'});

      expect(newItem).toEqual({
        name: 'A Really Cool Sword',
        durability: 100,
        level: 0,
        failLevel: 0
      });
    });
  });//end creating an item
  describe('increasing an item level', () => {
    it('should succeed', () => {
      let newItem = new GameItem();
      newItem.enhance(true);

      expect(newItem).toEqual({
        name: 'Unnamed Item',
        durability: 100,
        level: 1,
        failLevel: 0
      });
    });//end increase succeed
    it('should fail', () => {
      let newItem = new GameItem();
      newItem.enhance();

      expect(newItem).toEqual({
        name: 'Unnamed Item',
        durability: 95,
        level: 0,
        failLevel: 1
      });
    });//end fail
  });//end increasing item
  describe('repairing an item', () => {
    it('should increase durability', () => {
      let newItem = new GameItem({durability: 50});
      newItem.repair();

      expect(newItem).toEqual({
        name: 'Unnamed Item',
        durability: 60,
        level: 0,
        failLevel: 0
      });
    });//end increase durability test
  });//end repairing
});
