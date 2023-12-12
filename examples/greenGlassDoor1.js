export const checkGuess = (word) => {
    //loop through and check if there are consecutive identical letters
    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] === word[i + 1]) {
          return true;
        }
      }
      return false;
}