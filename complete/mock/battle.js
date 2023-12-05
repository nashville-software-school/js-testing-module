export const hero = {
    health: 100,
    consecutiveHitCounter:0,
    checkForDodge: ()=> {
        //dodge every three attacks
        consecutiveHitCounter++;
        if (consecutiveHitCounter%3==0) return true;
        else return false;
    }
}

export const takeDamage = (amount) => {
    if (!hero.checkForDodge()) {
        hero.health -= amount;
    }
}