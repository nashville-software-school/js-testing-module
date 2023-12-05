import { takeDamage, hero } from './battle.js';

let originalShowLowHealthMessage;
beforeAll(() => {
  // Spy on console.log to capture its calls
  originalShowLowHealthMessage = hero.showLowHealthMessage;
  hero.showLowHealthMessage = jest.fn();
});

afterAll(() => {
  // Restore the original console.log after all tests
  hero.showLowHealthMessage = originalShowLowHealthMessage;
});

describe('Spy > takeDamage', () => {
  it("takes damage and updates health correctly", () => {
    hero.health=100;
    takeDamage(50);
    expect(hero.health).toBe(50);
    expect(hero.showLowHealthMessage).toHaveBeenCalledTimes(0);
    takeDamage(40);
    expect(hero.health).toBe(10);
    expect(hero.showLowHealthMessage).toHaveBeenCalledTimes(1);
  });

});