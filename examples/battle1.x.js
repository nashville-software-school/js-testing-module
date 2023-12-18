import { hero } from './battle1.js';


describe('battle1 > takeDamage', () => {

  beforeEach(() => {
    hero.health = 100;
  });

  it("takes damage and updates health correctly", () => {
    hero.takeDamage(10);
    expect(hero.health).toBe(90);
  });

  it("doesn't change health with zero damage", () => {
    hero.takeDamage(0);
    expect(hero.health).toBe(100);
  });

  it("doesn't take negative damage", () => {
    hero.takeDamage(-20);
    expect(hero.health).toBe(100);
  });
});
