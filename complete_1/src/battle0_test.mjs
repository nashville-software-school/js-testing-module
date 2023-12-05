import { hero } from './battle0.mjs';
// hero.health = 100;
// hero.takeDamage(10);
// console.log("health 1:"+hero.health);
// hero.takeDamage(20);
// console.log("health 2:"+hero.health);



hero.health=100;
hero.takeDamage(10);
if (hero.health !== 90) console.log("FAIL!!!! takeDamage did not decrease health correctly");
hero.takeDamage(20);
if (hero.health !== 70) console.log("FAIL!!!! takeDamage did not decrease health correctly");



