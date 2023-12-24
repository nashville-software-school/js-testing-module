import { hero } from './battle0.mjs';

hero.health = 100;
hero.takeDamage(10);
console.log("health 1:"+hero.health);
hero.takeDamage(0);
console.log("health 2:"+hero.health);
hero.takeDamage(-20);
console.log("health 3:"+hero.health);