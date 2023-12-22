const { hero } = require('./battle4');

describe('hero > healDamage', () => {

  it('should restore hero health', () => {
    hero.health = 50

    hero.healDamage(20);

    expect(hero.health).toBe(70);
  });

  it('should max health at 100', () => {
    hero.health = 90

    hero.healDamage(30);

    expect(hero.health).toBe(100);
  });

  it('should not restore health for a dead hero', () => {
    hero.health = 0

    hero.healDamage(20);

    expect(hero.health).toBe(0);
  });

});
