import { castEnchantment } from './magic.js';

let originalLog;
beforeAll(() => {
  // Spy on console.log to capture its calls
  originalLog = console.log;
  console.log = jest.fn();
});

afterAll(() => {
  // Restore the original console.log after all tests
  console.log = originalLog;
});
describe('Spy > castEnchantment', () => {


  it("should successfully cast a spell when invoked correctly", () => {
    castEnchantment("Engorgio");
    expect(console.log).toHaveBeenCalledWith("The target quickly grows in size.");
    castEnchantment("Alohomora");
    expect(console.log).toHaveBeenCalledWith("The nearest door or physical lock unlocks and opens.");
    castEnchantment("Obliviate");
    expect(console.log).toHaveBeenCalledWith("The target immediately loses their memory of recent events.");
    castEnchantment("Wingardium Leviosa");
    expect(console.log).toHaveBeenCalledWith("The target floats into the air.");
  });

  it("should fail when a spell invocation isn't recognized", () => {
    castEnchantment("Risotto");
    expect(console.log).toHaveBeenCalledWith("Nothing happens.");
    castEnchantment("Tofu Miso");
    expect(console.log).toHaveBeenCalledWith("Nothing happens.");
    castEnchantment("Charmander");
    expect(console.log).toHaveBeenCalledWith("Nothing happens.");
  });
});