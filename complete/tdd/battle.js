export const hero = {
    health: 100
}

export const takeDamage = (amount) => {
    hero.health -= amount;
}

export const healDamage = (amount) => {
    hero.health += amount;
    if (hero.health > 100) hero.health = 100;
}
