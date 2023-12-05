export const hero = {
    health: 100,
    showLowHealthMessage: () => {
        console.log("Health is dangerously low: "+this.health);
    }
}

export const takeDamage = (amount) => {
    hero.health -= amount;
    if (hero.health<20) hero.showLowHealthMessage();
}