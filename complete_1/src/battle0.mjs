export const hero = {
    health: 100,
    takeDamage: function(amount){
        this.health += amount;
    }
}

// hero.health = 100;
// hero.takeDamage(10);
// console.log("health 1:"+hero.health);
// hero.takeDamage(20);
// console.log("health 2:"+hero.health);