const config = {
    testMatch: [ "**/jest/*.test.js" ] // <---- run tests in 'jest' folder
    //testMatch: [ "**/spy/*.test.js" ] // <---- run tests in 'spy' folder
    //testMatch: [ "**/mock/*.test.js" ] // <---- run tests in 'mock' folder
    //testMatch: [ "**/tdd/*.test.js" ] // <---- run tests in 'tdd' folder
    //note: if no value is provided for testMatch, jest will run all the tests
};
  
module.exports = config;