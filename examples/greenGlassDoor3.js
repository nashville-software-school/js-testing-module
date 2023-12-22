let guesses = 0;

export const checkGuess = async (word) => {
    guesses++;
    let isCorrect = false;
    //loop through and check if there are consecutive identical letters
    for (let i = 0; i < word.length - 1; i++) {
      if (word[i] === word[i + 1]) {
        isCorrect = true;
      }
    }
    
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    const data = await response.json();
    const isValidWord = data.word == word;
    
    return isCorrect && isValidWord;
}
