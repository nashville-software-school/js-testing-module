export const hero = {
    health: 100,
    resetHealth: function(){
        this.health = 100;
    },
    takeDamage: function(amount){
        this.health -= amount;
    }
}







// hero.resetHealth();
// hero.takeDamage(10);
// console.log("health 1:"+hero.health);
// hero.takeDamage(20);
// console.log("health 2:"+hero.health);







// hero.resetHealth();
// hero.takeDamage(10);
// if (hero.health !== 90) console.log("FAIL!!!! takeDamage did not decrease health correctly");
// hero.takeDamage(20);
// if (hero.health !== 70) console.log("FAIL!!!! takeDamage did not decrease health correctly");
