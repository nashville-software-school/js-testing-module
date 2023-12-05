import { castEnchantment } from './magic.js';

describe('Mock > castEnchantment', () => {

  beforeAll(() => {
    // Mock random() to make it reliably return the same value
    jest.spyOn(Math, 'random').mockReturnValue(0.5);
  });

  afterAll(() => {
    // Restore the random function
    jest.spyOn(Math, 'random').mockRestore();
  });


  it("should successfully cast a spell when invoked correctly and random number exceeds difficulty", () => {
    expect(castEnchantment("Alohomora")).toBe("The nearest door or physical lock unlocks and opens.");
    expect(castEnchantment("Wingardium Leviosa")).toBe("The target floats into the air.");
  });

  it("should fail when invoked correctly but random number is at or below difficulty", () => {
    expect(castEnchantment("Engorgio")).toBe("Nothing happens (Spell failed)");
    expect(castEnchantment("Obliviate")).toBe("Nothing happens (Spell failed)");
  });

  it("should fail when a spell invocation isn't recognized", () => {
    expect(castEnchantment("Risotto")).toBe("Nothing happens (That isn't a spell)");
    expect(castEnchantment("Tofu Miso")).toBe("Nothing happens (That isn't a spell)");
    expect(castEnchantment("Charmander")).toBe("Nothing happens (That isn't a spell)");
  });
});