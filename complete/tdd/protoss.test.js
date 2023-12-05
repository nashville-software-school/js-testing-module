import { getAffordableUnits, getMineralCostForUnit } from './protoss.js';

describe('TDD > getAffordableUnits', () => {

  it("Should return with some units", () => {
    expect(getAffordableUnits(100, 300)).toEqual(["Probe", "Zealot", "Templar", "Observer"]);
    expect(getAffordableUnits(500, 100)).toEqual(["Probe", "Zealot", "Dragoon", "Reaver", "Observer"]);
    expect(getAffordableUnits(1500, 1000)).toEqual(["Probe", "Zealot", "Templar", "Dragoon", "Reaver", "Scout", "Observer", "Carrier"]);
  });

  it("should return an empty array if nothing is affordable", () => {
    expect(getAffordableUnits(0,0)).toEqual([]);
  });

});

describe('TDD > getMineralCostForUnit', () => {

  it("Should return with some units", () => {
    expect(getMineralCostForUnit("Zealot")).toEqual(100);
    expect(getMineralCostForUnit("Templar")).toEqual(50);
    expect(getMineralCostForUnit("Carrier")).toEqual(350);
  });

  it("should return -1 if unit name not found", () => {
    expect(getMineralCostForUnit("Siege Tank")).toEqual(-1);
  });

});