
const spells = [
    {
        name: "Accio",
        effect: "The target object flies toward your extended hand."
    },
    {
        name: "Alohomora",
        effect: "The nearest door or physical lock unlocks and opens."
    },
    {
        name: "Avada Kedavra",
        effect: "Your opponent collapses, dead."
    },
    {
        name: "Engorgio",
        effect: "The target quickly grows in size."
    },
    {
        name: "Expecto Patronum",
        effect: "A spirit animal appears to protect you."
    },
    {
        name: "Obliviate",
        effect: "The target immediately loses their memory of recent events."
    },
    {
        name: "Petrificus Totalus",
        effect: "The target freezes, as if a statue."
    },
    {
        name: "Wingardium Leviosa",
        effect: "The target floats into the air."
    }
];

export const castEnchantment = (incantation) => {
    
    let output = "Nothing happens.";

    for (let spell of spells) {
        if (spell.name==incantation) output = spell.effect;
    }
    
    return output;
}

// console.log(castEnchantment("Engorgio"));
// console.log(castEnchantment("Alohomora"));
// console.log(castEnchantment("Obliviate"));
// console.log(castEnchantment("Wingardium Leviosa"));S