
const spells = [
    {
        name: "Accio",
        effect: "The target object flies toward your extended hand.",
        difficulty: 1
    },
    {
        name: "Alohomora",
        effect: "The nearest door or physical lock unlocks and opens.",
        difficulty: 3
    },
    {
        name: "Avada Kedavra",
        effect: "Your opponent collapses, dead.",
        difficulty: 9
    },
    {
        name: "Engorgio",
        effect: "The target quickly grows in size.",
        difficulty: 5
    },
    {
        name: "Expecto Patronum",
        effect: "A spirit animal appears to protect you.",
        difficulty: 7
    },
    {
        name: "Obliviate",
        effect: "The target immediately loses their memory of recent events.",
        difficulty: 8
    },
    {
        name: "Petrificus Totalus",
        effect: "The target freezes, as if a statue.",
        difficulty: 7
    },
    {
        name: "Wingardium Leviosa",
        effect: "The target floats into the air.",
        difficulty: 1
    }
];

export const castEnchantment = (incantation) => {
    let output = "Nothing happens (That isn't a spell)";
    for (let spell of spells) {
        if (spell.name==incantation) {
            if (Math.random()*10>spell.difficulty){
                output = spell.effect;
            }
            else {
                output = "Nothing happens (Spell failed)";
            }
        }
    }
    return output;
}