import { hero } from './battle0.mjs';

//a function to reset test conditions, so each test runs independently.
const setUpTest = () => {
    hero.health=100;
}

///// streamlined version, using conditionals to check for failure
console.log("----- Start testing if takeDamage decreases health correctly")

setUpTest();
hero.takeDamage(10);
if (hero.health !== 90) console.log("FAIL!!!! takeDamage did not decrease health correctly");

setUpTest();
hero.takeDamage(0);
if (hero.health !== 100) console.log("FAIL!!!! takeDamage did not handle zero damage correctly");

setUpTest();
hero.takeDamage(-20);
if (hero.health !== 100) console.log("FAIL!!!! takeDamage did not handle negative damage correctly");

console.log("----- End testing if takeDamage decreases health correctly")