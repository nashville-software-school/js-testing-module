import { hero } from './battle0.mjs';

//a function to reset test conditions, so each test runs independently.
const setUpTest = () => {
    hero.health=100;
}

// grouping the tests on this function together
console.log("----- Start testing if takeDamage decreases health correctly")

setUpTest();
hero.takeDamage(10);
if (hero.health !== 90) console.log("FAIL!!!! takeDamage did not decrease health correctly"); // only log details if we fail, so we don't have a lot of needless clutter

setUpTest(); //use this setup function to reset everything so each test runs independently
hero.takeDamage(0);
if (hero.health !== 100) console.log("FAIL!!!! takeDamage did not handle zero damage correctly");

setUpTest();
hero.takeDamage(-20); //we test unexpected cases to make sure our function handles those properly
if (hero.health !== 100) console.log("FAIL!!!! takeDamage did not handle negative damage correctly");

console.log("----- End testing if takeDamage decreases health correctly")