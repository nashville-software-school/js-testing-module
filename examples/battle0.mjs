export const hero = {
    health: 100,
    takeDamage: function(amount){
        if (amount<0) {
            this.health -= amount;
        }
    }
}
