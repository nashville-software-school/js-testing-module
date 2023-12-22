let guesses = 0;

export const checkGuess = (word) => {
    guesses++;
    let isCorrect = false;
    //loop through and check if there are consecutive identical letters
    for (let i = 0; i < word.length - 1; i++) {
      if (word[i] === word[i + 1]) {
        isCorrect = true;
      }
    }
    console.log(`You have made ${guesses} guesses`);
    return isCorrect;
}
