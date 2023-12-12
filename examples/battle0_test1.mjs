import { hero } from './battle0.mjs';

///// simple logs, just moved to a separate file
hero.health = 100;
hero.takeDamage(10);
console.log("health after 10 damage:"+hero.health);
hero.takeDamage(0);
console.log("health after 0 damage:"+hero.health);
hero.takeDamage(-20);
console.log("health after -20 damage:"+hero.health);