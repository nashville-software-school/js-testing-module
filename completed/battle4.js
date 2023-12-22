export const hero = {
    health: 100,
    dexterity: 5, //a value between 0 and 10 to determine if the hero dodges an attack
    takeDamage: function(amount){
        const dodged = this.dexterity > Math.random()*10;
        if (amount>0 && !dodged) {
            this.health -= amount;
        }
    },
    healDamage: function(amount){
        if (this.health>0){
            this.health = Math.min(100, this.health+amount);
                    } 
    }
}