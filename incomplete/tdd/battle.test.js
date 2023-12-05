import { takeDamage, healDamage, hero } from './battle.js';

describe('TDD > takeDamage', () => {
  it("takes damage and updates health correctly", () => {
    hero.health=100;
    takeDamage(50);
    expect(hero.health).toBe(50);
    takeDamage(40);
    expect(hero.health).toBe(10);
  });

});

describe('TDD > healDamage', () => {

  it("heal damage", () => {
    hero.health = 50;
    healDamage(30)
    expect(hero.health).toBe(80);
  });

  it("overheal damage, max at 100", () => {
    hero.health = 80;
    healDamage(50)
    expect(hero.health).toBe(100);
  });

});
