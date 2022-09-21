const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessALetter = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];


//Display ● untill letter is filled in
const placeHolder = function (word) {
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
    //empty text of message element
    message.innerText = "";

    const guess = guessALetter.value;

     const validGuess = validateLetter(guess);
     //console.log(validGuess);
     if (validGuess) {
        makeGuess(guess);
     }
     guessALetter.value = "";
});

//Check player's input
const validateLetter = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
        message.innerText = "Please enter a letter.";
    } else if (input.length > 1) {
        message.innerText = "Please enter only 1 letter.";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "That's not a letter silly!  Please type in a letter (no numbers or special characters).";
    } else {
        return input;
    }
};

//Capture the input
const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter.  Try again!";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
        usedLetters();
        updatedWord(guessedLetters);
    }
};

//Show guessed letters
const usedLetters = function() {
    //Empty the unordered list
    guessedLettersElement.innerHTML = "";

    for (const letter of guessedLetters) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersElement.append(li);
    }
};

//Update the word in progress
const updatedWord = function (guessedLetters) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const revealWord =[];

    for (const letter of wordArray) {
        if (guessedLetters.includes(letter)) {
            revealWord.push(letter.toUpperCase());
        } else {
            revealWord.push("●");
        };
    }
    wordInProgress.innerText = revealWord.join("");
    youWon();
};

const youWon = function () {
    if (word.toUpperCase() === wordInProgress.innerText) {
        message.classList.add("win");
        message.innerHTML = `<p class="highlight">You guessed the correct word! Congrats!</p>`;
    }
};