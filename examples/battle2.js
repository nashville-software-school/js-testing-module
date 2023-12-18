export const hero = {
    health: 100,
    isAlive: true,
    takeDamage: function(amount){
        if (amount>0) {
            this.health -= amount;

            if (this.health<=0){
                this.die();
            }
        }
    },
    die: function(){
        this.isAlive = false;
        console.log("Game Over")
    }
}