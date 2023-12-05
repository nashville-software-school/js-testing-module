export const hero = {
    health: 100,
    takeDamage: function(amount){
        this.health -= amount;
    }
}