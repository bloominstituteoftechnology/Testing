const GameItem = require('./game-object');

describe('Game Item', () => {
  describe('creating an item', () => {
    it('should create an object with certain values on instantiation', () => {
      let newItem = new GameItem();

      expect(newItem).toEqual({
        name: 'Unnamed Item',
        durability: 100,
        level: 0,
        failLevel: 0
      });
    });
  });
})
