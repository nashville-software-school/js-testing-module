import { takeDamage, hero } from './battle.js';

beforeAll(() => {
  // Mock random() to make it reliably return the same value
});

afterAll(() => {
  // Restore the random function
});

describe('Spy > takeDamage', () => {
  it("takes damage and updates health correctly when attack not dodged", () => {
    hero.health=100;
    
    jest.spyOn(hero, 'checkForDodge').mockReturnValue(false); //set the mock return value to always be false
    takeDamage(20);
    expect(hero.health).toBe(80);

    jest.spyOn(hero, 'checkForDodge').mockRestore();
  });

  it("don't take damage when attack is dodged", () => {
    hero.health=100;
    
    jest.spyOn(hero, 'checkForDodge').mockReturnValue(true); //set the mock return value to always be true
    takeDamage(20);
    expect(hero.health).toBe(100);

    jest.spyOn(hero, 'checkForDodge').mockRestore();
  });

});