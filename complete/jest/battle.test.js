import { takeDamage, hero } from './battle.js';

describe('Jest > takeDamage', () => {
  it("takes damage and updates health correctly", () => {
    hero.health=100;
    takeDamage(50);
    expect(hero.health).toBe(50);
    takeDamage(40);
    expect(hero.health).toBe(10);
  });

});
