import { hero } from './battle1.js';

describe('battle1 > takeDamage', () => {
  it("takes damage and updates health correctly", () => {
    hero.health = 100;
    hero.takeDamage(10);
    expect(hero.health).toBe(90);
    hero.takeDamage(20);
    expect(hero.health).toBe(70);
  });

});
