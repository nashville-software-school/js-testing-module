const { hero } = require('./battle3');

describe('hero > takeDamage', () => {
  const originalMathRandom = Math.random;

  beforeAll(() => {
    Math.random = jest.fn(() => 0.6);
  });

  afterAll(() => {
    Math.random = originalMathRandom;
  });

  it('should reduce hero health when damage is taken and not dodged', () => {
    hero.dexterity = 3; 
    const damageAmount = 20;
    const initialHealth = hero.health;

    hero.takeDamage(damageAmount);

    expect(hero.health).toBe(initialHealth - damageAmount);
  });

  it('should not reduce hero health when damage is taken but dodged', () => {
    hero.dexterity = 8;
    const damageAmount = 20;
    const initialHealth = hero.health;

    hero.takeDamage(damageAmount);

    expect(hero.health).toBe(initialHealth);
  });

});
