
const protossUnits = [
    {
        name: "Zealot",
        mineralCost: 100,
        gasCost: 0,
        voiceLines: ["Miso achu!", "Gee-owss!", "I long for combat."]
    },
    {
        name: "Templar",
        mineralCost: 50,
        gasCost: 150,
        voiceLines: ["I heed thy call.", "Your thoughts?", "Serra-hah."]
    },
    {
        name: "Dragoon",
        mineralCost: 125,
        gasCost: 50,
        voiceLines: ["Your excellence?", "I am needed?", "Zauk comodoss!"]
    },
    {
        name: "Scout",
        mineralCost: 275,
        gasCost: 125,
        voiceLines: ["Standing by.", "Awaiting command.", "Contact."]
    },
    {
        name: "Carrier",
        mineralCost: 350,
        gasCost: 250,
        voiceLines: ["Nich-tu.","Instructions?","Your command?"]
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

export const getRandomVoiceLine = (unitName) => {
    let output = "Invalid Unit";

    for (let unit of protossUnits) {
        if (unit.name==unitName){
            const whichVoiceLine = Math.floor(Math.random()*unit.voiceLines.length); //choose a valid index, an int between 0 and length-1
            output = unit.voiceLines[whichVoiceLine];
        }
    }
    return output;
}