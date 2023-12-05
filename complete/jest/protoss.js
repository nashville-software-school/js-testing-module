
const protossUnits = [
    {
        name: "Probe",
        mineralCost: 50,
        gasCost: 0
    },
    {
        name: "Zealot",
        mineralCost: 100,
        gasCost: 0
    },
    {
        name: "Templar",
        mineralCost: 50,
        gasCost: 150
    },
    {
        name: "Dragoon",
        mineralCost: 125,
        gasCost: 50
    },
    {
        name: "Reaver",
        mineralCost: 200,
        gasCost: 100
    },
    {
        name: "Scout",
        mineralCost: 275,
        gasCost: 125
    },
    {
        name: "Observer",
        mineralCost: 25,
        gasCost: 75
    },
    {
        name: "Carrier",
        mineralCost: 350,
        gasCost: 250
    }
]

export const getAffordableUnits = (minerals, gas) => {
    const output = [];

    for (let unit of protossUnits) {
        if (unit.mineralCost<=minerals && unit.gasCost<=gas){
            output.push(unit.name);
        }
    }
    return output;
}

//console.log( getAffordableUnits(100,100) );