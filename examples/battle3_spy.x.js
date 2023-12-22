const { hero } = require('./battle3');

describe('hero > takeDamage', () => {

    beforeAll(() => {
        jest.spyOn(global.Math, 'random').mockReturnValue(0.6); // Mock Math.random to return a consistent value
    });

    afterAll(() => {
        jest.restoreAllMocks(); //Restore Math.random to its original state
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
