import { hero } from './battle2.js';


describe('battle2 > die', () => {

  beforeEach(() => {
    hero.health = 100;
    jest.spyOn(hero, 'die');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("calls die() when health reaches 0", () => {
    hero.takeDamage(100);

    expect(hero.health).toBe(0);
    expect(hero.die).toHaveBeenCalledTimes(1);
  });

  it("doesn't call die() when health is above 0", () => {
    hero.takeDamage(50);

    expect(hero.health).toBe(50);
    expect(hero.die).not.toHaveBeenCalled();
  });

  it("doesn't call die() when damage amount is negative", () => {
    hero.takeDamage(-10);

    expect(hero.health).toBe(100);
    expect(hero.die).not.toHaveBeenCalled();
  });

});