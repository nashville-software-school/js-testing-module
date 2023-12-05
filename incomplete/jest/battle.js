export const hero = {
    health: 100
}

export const takeDamage = (amount) => {
    hero.health -= amount;
}

// takeDamage(10);
// console.log("health 1:"+hero.health);
// takeDamage(20);
// console.log("health 2:"+hero.health);