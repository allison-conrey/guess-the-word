const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessALetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const messages = document.querySelector(".message");
const hiddenButton = document.querySelector(".play-again");

const word = "magnolia";

//Display ● untill letter is filled in
const placeHolder = function(word) {
    const placeHolderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeHolderLetters.push("●");
    }
    wordInProgress.innerText = placeHolderLetters.join("");
};

placeHolder(word);

guessButton.addEventListener("click", function(e) {
    e.preventDefault();
    const guess = guessALetter.value;
     console.log(guess);
     guessALetter.value = "";
});



