export const hero = {
    health: 100,
    takeDamage: function(amount){
        if (amount>0) {
            this.health -= amount;
        }
    }
}

hero.health = 100;
hero.takeDamage(10);
console.log("health 1:"+hero.health);
hero.takeDamage(0);
console.log("health 2:"+hero.health);
hero.takeDamage(-20);
console.log("health 3:"+hero.health);
