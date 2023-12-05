import { castEnchantment } from './magic.js';

describe('Jest > castEnchantment', () => {
  it("should successfully cast a spell when invoked correctly", () => {
    expect(castEnchantment("Engorgio")).toBe("The target quickly grows in size.");
    expect(castEnchantment("Alohomora")).toBe("The nearest door or physical lock unlocks and opens.");
    expect(castEnchantment("Obliviate")).toBe("The target immediately loses their memory of recent events.");
    expect(castEnchantment("Wingardium Leviosa")).toBe("The target floats into the air.");
  });

  it("should fail when a spell invocation isn't recognized", () => {
    expect(castEnchantment("Risotto")).toBe("Nothing happens.");
    expect(castEnchantment("Tofu Miso")).toBe("Nothing happens.");
    expect(castEnchantment("Charmander")).toBe("Nothing happens.");
  });
});