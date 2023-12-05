import { castEnchantment, findEnchantmentsBeginningWith } from './magic.js';

describe('TDD > castEnchantment', () => {
  it("should successfully cast a spell when invoked correctly", () => {
    expect(castEnchantment("Engorgio")).toEqual("The target quickly grows in size.");
    expect(castEnchantment("Alohomora")).toEqual("The nearest door or physical lock unlocks and opens.");
    expect(castEnchantment("Obliviate")).toEqual("The target immediately loses their memory of recent events.");
    expect(castEnchantment("Wingardium Leviosa")).toEqual("The target floats into the air.");
  });

  it("should fail when a spell invocation isn't recognized", () => {
    expect(castEnchantment("Risotto")).toEqual("Nothing happens.");
    expect(castEnchantment("Tofu Miso")).toEqual("Nothing happens.");
    expect(castEnchantment("Charmander")).toEqual("Nothing happens.");
  });
});

describe('TDD > findEnchantmentsBeginningWith', () => {
  it("find a list of enchantments for a specified letter", () => {
    expect(findEnchantmentsBeginningWith("E")).toEqual(["Engorgio", "Expecto Patronum"]);
    expect(findEnchantmentsBeginningWith("O")).toEqual(["Obliviate"]);
  });

  it("should work for lower case letters too", () => {
    expect(findEnchantmentsBeginningWith("a")).toEqual(["Accio", "Alohomora", "Avada Kedavra"]);
    expect(findEnchantmentsBeginningWith("w")).toEqual(["Wingardium Leviosa"]);
  });

  it("return an empty list if there aren't any for that letter", () => {
    expect(castEnchantment("Risotto")).toEqual("Nothing happens.");
  });
});